import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
// import installExtension from 'electron-devtools-installer';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import './main';
import store from './main/util/store';
import {authClient} from './graphql/auth';
import {gql} from 'graphql-request';
import {machineId} from 'node-machine-id';
import {subscribeToRefreshSession} from './main/subscriptions/auth/handlers/refresh-session';

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

  // Subscribe to refresh session to receive updates on refresh token
  await subscribeToRefreshSession(mainWindow);

  // and load the index.html of the app.
  await mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

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
  const hardwareId = await machineId(true);
  await authClient.request(gql`
     mutation {
       reBindHardwareID(key: "ATH-7d8ed177-52d6-4b11-ac35-22da0712d3d0", newHardwareID: "${hardwareId}")
     }
  `);

  store.set('token', null);
  store.set('sessionId', null);

  // Check the current auth state
  const token: string | null = store.get('token');
  const sessionId: string | null = store.get('sessionId');

  if (!token || !sessionId) return await createAuthenticationWindow();
  await createMainWindow();
};

app.on('ready', onReady);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', async () => {
  if (BrowserWindow.getAllWindows().length === 0) await onReady();
});
