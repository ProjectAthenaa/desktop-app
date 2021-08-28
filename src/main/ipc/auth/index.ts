import {ipcMain} from 'electron';
import login from './handlers/login';

ipcMain.handle('login', login);
