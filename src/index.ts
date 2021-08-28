import {app, BrowserWindow, ipcMain, ipcRenderer} from 'electron';
import isDev from 'electron-is-dev';
// import installExtension from 'electron-devtools-installer';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import './main';
import store from './main/util/store';
import {authClient, authSubClient} from './graphql/auth';
import {gql} from 'graphql-request';
import {machineId} from 'node-machine-id';
import {subscribeToRefreshSession} from './main/subscriptions/auth/handlers/refresh-session';
import {ExecutionResult} from 'graphql';
import {DeviceType, Session} from './types/auth';
import {REFRESH_SESSION} from './graphql/auth/handlers/refresh-session';
import loginRequest from './graphql/auth/handlers/login';
import {hostname, type} from 'os';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const AUTH_WINDOW_WEBPACK_ENTRY: string;

Sentry.init({
  dsn: "https://1e22a3786c39402886f145cbae15881b@o706779.ingest.sentry.io/5867060",
  tracesSampleRate: 1.0,
});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

export const createAuthenticationWindow = async (): Promise<void> => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 360,
    frame: false,
    resizable: false,
    webPreferences: {
      preload: AUTH_WINDOW_WEBPACK_ENTRY,
      contextIsolation: false,
      spellcheck: false,
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  // and load the index.html of the app.
  await mainWindow.loadURL(AUTH_WINDOW_WEBPACK_ENTRY);

  if (isDev) mainWindow.webContents.openDevTools();
};

export const createMainWindow = async (): Promise<void> => {
  const mainWindow = new BrowserWindow({
    minHeight: 800,
    minWidth: 1000,
    width: 1440,
    height: 1024,
    frame: false,
    webPreferences: {
      preload: MAIN_WINDOW_WEBPACK_ENTRY,
      contextIsolation: false,
      spellcheck: false,
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  // and load the index.html of the app.
  await mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  let unsubscribe: () => void | undefined;
  // Subscribe to refresh session to receive updates on refresh token
  // await subscribeToRefreshSession(mainWindow);
  const hardwareId = await machineId(true);
  await new Promise<void>((resolve, reject) => {
    const onNext = async (data: ExecutionResult<Record<string, unknown>, unknown>) => {
      console.log('sub event rcvd', data);
      const {refreshSession} = data.data as unknown as { refreshSession: Session };
      if (refreshSession.HardwareID !== hardwareId) {

        // Reset store back to defaults
        store.set('sessionId', null);
        store.set('token', null);
        store.set('preferences', {});

        // Close main window open auth
        mainWindow.close();
        await createMainWindow();

        unsubscribe();
      }

      // Update session store
      store.set('sessionId', refreshSession.ID);
    };
    const sessionId: string = store.get('sessionId');
    // const hardwareId = await machineId(true);
    unsubscribe = authSubClient.subscribe(
      {
        query: REFRESH_SESSION,
        variables: {
          session: {
            ID: sessionId,
            HardwareID: hardwareId,
          }
        }
      },
      {
        next: onNext,
        error: reject,
        complete: resolve,
      }
    );
  });

  if (isDev) {
    // TODO: Figure this shit out, dk what's going on
    // Install react developer tools
    // const reactDevToolsName = await installExtension({
    //   id: 'fmkadmapgofadopljbjfkapdkoienihi',
    //   electron: '>=1.2.1'
    // });
    // console.log(`${reactDevToolsName} installed`);
    mainWindow.webContents.openDevTools();
  }
};

const onReady = async (): Promise<void> => {



  store.set('token', null);
  store.set('sessionId', null);

  // Check the current auth state
  // const token: string | null = store.set('token');
  // const sessionId: string | null = store.set('sessionId');

  // if (!token || !sessionId) return await createAuthenticationWindow();
  // await createMainWindow();
  const hardwareId = await machineId(true);

  await authClient.request(gql`
      mutation {
          reBindHardwareID(key: "ATH-7d8ed177-52d6-4b11-ac35-22da0712d3d0", newHardwareID: "${hardwareId}")
      }
  `);

  const operatingSystem = type();
  const hostName = hostname();
  const token: string | null = store.get('token');

  // If the token doesn't exist, open the auth window.
  if (!token) return await createAuthenticationWindow();

  // The token exists, attempt to authenticate and get the sessionId
  try {
    const response = await loginRequest(token, {
      HardwareID: hardwareId,
      OS: operatingSystem,
      DeviceName: hostName,
      DeviceType: DeviceType.Desktop,
    });

    // The session is now valid, store the ID and create the main window
    store.set('sessionId', response.Session.ID);
    await createMainWindow();
  } catch (error) {
    console.error(error);
    return await createAuthenticationWindow();
  }
};

app.on('ready', onReady);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', async () => {
  if (BrowserWindow.getAllWindows().length === 0) await onReady();
});
