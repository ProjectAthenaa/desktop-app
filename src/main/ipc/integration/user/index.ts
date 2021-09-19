import {ipcMain} from 'electron';
import getUserData from './handlers/get-user-data';



ipcMain.handle('getUserData', getUserData)
