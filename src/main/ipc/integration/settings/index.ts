import {ipcMain} from 'electron';
import getSiteInformation from './handlers/get-site-info'
import setWebhook from './handlers/set-webhook';
import setDelay from './handlers/set-delay';
import getSettings from './handlers/get-settings';
import testWebhook from './handlers/test-webhook';

ipcMain.handle('getSiteInformation', getSiteInformation);
ipcMain.handle('getSettings', getSettings);
ipcMain.handle('setWebhook', setWebhook);
ipcMain.handle('setDelay', setDelay);
ipcMain.handle('testWebhook', testWebhook);
