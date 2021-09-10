import {ipcMain} from 'electron';
import taskUpdates from './handlers/task-updates';
import sendCommand from './handlers/send-command';

ipcMain.handle('task-updates', taskUpdates);
ipcMain.handle('send-command', sendCommand);
