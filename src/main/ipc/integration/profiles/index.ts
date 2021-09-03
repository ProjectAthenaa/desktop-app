import {ipcMain} from 'electron';
import createProfile from './handlers/create-profile';
import createProfileGroup from './handlers/create-profile-group';
import deleteProfile from './handlers/delete-profile';
import deleteProfileGroup from './handlers/delete-profile-group';
import getGroup from './handlers/get-group';
import getProfile from './handlers/get-profile';
import getProfileGroups from './handlers/get-profile-groups';
import updateProfile from './handlers/update-profile';
import updateProfileGroup from './handlers/update-profile-group';

ipcMain.handle('createProfile', createProfile);
ipcMain.handle('createProfileGroup', createProfileGroup);
ipcMain.handle('deleteProfile', deleteProfile);
ipcMain.handle('deleteProfileGroup', deleteProfileGroup);
ipcMain.handle('getProfileGroup', getGroup);
ipcMain.handle('getProfile', getProfile);
ipcMain.handle('getProfileGroups', getProfileGroups);
ipcMain.handle('updateProfile', updateProfile);
ipcMain.handle('updateProfileGroup', updateProfileGroup);

