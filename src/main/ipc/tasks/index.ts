import {ipcMain} from 'electron';
import taskUpdates from './handlers/task-updates';
import sendCommand from './handlers/send-command';
import reSyncTasks from './handlers/resync-tasks';

ipcMain.handle('task-updates', taskUpdates);
ipcMain.handle('send-command', sendCommand);
ipcMain.handle('resync-tasks', reSyncTasks);
