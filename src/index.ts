import {app, BrowserWindow, session} from 'electron';
import isDev from 'electron-is-dev';
import * as Sentry from '@sentry/node';
import './main';
import store from './main/util/store';
import {machineId} from 'node-machine-id';
import {DeviceType,} from './types/auth';
import {refreshSessionHeartbeat} from './graphql/auth/handlers/refresh-session';
import loginRequest from './graphql/auth/handlers/login';
import {hostname, type} from 'os';
import installExtensions, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import {authClient} from './graphql/auth';
import {gql} from 'graphql-request';


declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const AUTH_WINDOW_WEBPACK_ENTRY: string;

Sentry.init({
  dsn: 'https://1e22a3786c39402886f145cbae15881b@o706779.ingest.sentry.io/5867060',
  tracesSampleRate: 1.0,
});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const loadToolsIfDev = async (window: BrowserWindow) => {
  if (isDev) {
    try {
      await installExtensions(
        [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS],
        {
          loadExtensionOptions: { allowFileAccess: true },
          forceDownload: !!process.env.UPGRADE_EXTENSIONS
        }
      )
    } catch (error) {
      console.error(error);
    }

    window.webContents.openDevTools();
  }
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

  await loadToolsIfDev(mainWindow);

  // and load the index.html of the app.
  await mainWindow.loadURL(AUTH_WINDOW_WEBPACK_ENTRY);
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

  await loadToolsIfDev(mainWindow);

  // and load the index.html of the app.
  await mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Refresh session every 15 min to receive updates on refresh token
  await refreshSessionHeartbeat(mainWindow);
};

const onReady = async (): Promise<void> => {
  // store.set('token', null);
  // store.set('sessionId', null);

  const hardwareId = await machineId(true);
  const operatingSystem = type();
  const hostName = hostname();
  const token: string | null = store.get('token');

  await authClient.request(gql`
      mutation {
          reBindHardwareID(key: "ATH-7d8ed177-52d6-4b11-ac35-22da0712d3d0", newHardwareID: "${hardwareId}")
      }
  `);

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
