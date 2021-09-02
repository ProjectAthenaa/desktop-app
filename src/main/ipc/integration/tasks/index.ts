import {ipcMain} from 'electron';
import createTask from './handlers/create-task';
import createTaskGroup from './handlers/create-task-group';
import deleteTask from './handlers/delete-task';
import deleteTaskGroup from './handlers/delete-task-group';
import getTask from './handlers/get-task';
import getTaskGroups from './handlers/get-task-groups';
import getGroup from './handlers/get-group';
import updateTask from './handlers/update-task';
import updateTaskGroup from './handlers/update-task-group';

ipcMain.handle('createTask', createTask)
ipcMain.handle('createTaskGroup', createTaskGroup);
ipcMain.handle('deleteTask', deleteTask);
ipcMain.handle('deleteTaskGroup', deleteTaskGroup);
ipcMain.handle('getGroup', getGroup);
ipcMain.handle('getTask', getTask);
ipcMain.handle('getTaskGroups', getTaskGroups);
ipcMain.handle('updateTask', updateTask);
ipcMain.handle('updateTaskGroup', updateTaskGroup);
