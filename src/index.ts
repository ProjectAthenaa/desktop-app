import {app, BrowserWindow} from 'electron';
import isDev from 'electron-is-dev';
import * as Sentry from '@sentry/node';
import './main';
import store from './main/util/store';
import {machineId} from 'node-machine-id';
import {DeviceType, LoginResponse,} from './types/auth';
import {refreshSessionHeartbeat} from './graphql/auth/handlers/refresh-session';
import loginRequest from './graphql/auth/handlers/login';
import {hostname, type, userInfo} from 'os';
import installExtensions, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import {handleTaskUpdates} from './graphql/tasks/handlers/task-updates';
import keytar from './main/util/keytar';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const AUTH_WINDOW_WEBPACK_ENTRY: string;

export const KEYTAR_SERVICE = 'athena-aio';
export const KEYTAR_ACCOUNT = userInfo().username;

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

  await handleTaskUpdates({ windowId: mainWindow.id });
};

const onReady = async (): Promise<void> => {
  const hardwareId = await machineId(true);
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

    // The session is now valid, store the session and create the main window
    await keytar.setPassword(
      KEYTAR_SERVICE,
      KEYTAR_ACCOUNT,
      response.Session.ID
    );
  } catch (error) {
    return await createAuthenticationWindow();
  }

  await createMainWindow();
};

app.on('ready', onReady);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', async () => {
  if (BrowserWindow.getAllWindows().length === 0) await onReady();
});
