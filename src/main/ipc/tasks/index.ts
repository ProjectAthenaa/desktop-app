import {ipcMain} from 'electron';
import taskUpdates from './handlers/task-updates';

ipcMain.handle('task-updates', taskUpdates);
