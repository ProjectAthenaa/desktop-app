import {ipcMain} from 'electron';
import login from './login';

ipcMain.handle('login', login);
