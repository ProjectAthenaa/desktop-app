//TODO: remove me
import {ipcMain} from 'electron';

// imports

ipcMain.handle('ping', () => {
  return "pong";
});
