import {ipcMain} from 'electron';
import getGroup from './handlers/get-group';
import createAccountGroup from './handlers/create-account-group';
import deleteAccountGroup from './handlers/delete-account-group';
import getAccountGroups from './handlers/get-account-groups';
import updateAccountGroup from './handlers/update-account-group';

ipcMain.handle('createAccountGroup', createAccountGroup)
ipcMain.handle('deleteAccountGroup', deleteAccountGroup);
ipcMain.handle('getAccountGroups', getAccountGroups);
ipcMain.handle('getGroup', getGroup);
ipcMain.handle('updateAccountGroup', updateAccountGroup);
