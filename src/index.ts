import { app, BrowserWindow, session, } from 'electron';
import isDev from 'electron-is-dev';
// import installExtension from 'electron-devtools-installer';
import './main';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = async (): Promise<void> => {
  const mainWindow = new BrowserWindow({
    minHeight: 800,
    minWidth: 1000,
    width: 1440,
    height: 1024,
    frame: false,
    webPreferences: {
      contextIsolation: false,
      spellcheck: false,
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

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

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', async () => {
  if (BrowserWindow.getAllWindows().length === 0) await createWindow();
});
