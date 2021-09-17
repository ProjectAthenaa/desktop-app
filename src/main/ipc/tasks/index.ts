import {ipcMain} from 'electron';
import taskUpdates from './handlers/task-updates';
import sendCommand from './handlers/send-command';
import reSyncTasks from './handlers/resync-tasks';
import startTasks from './handlers/start-tasks';

ipcMain.handle('task-updates', taskUpdates);
ipcMain.handle('send-command', sendCommand);
ipcMain.handle('resync-tasks', reSyncTasks);
ipcMain.handle('start-tasks', startTasks);
