import {ipcMain} from 'electron';
import getSiteInformation from './handlers/get-site-info'
// import setWebhook from './handlers/set-webhook';
// import setDelay from './handlers/set-delay';

ipcMain.handle('getSiteInformation', getSiteInformation);
// ipcMain.handle('setWebhook', setWebhook);
// ipcMain.handle('setDelay', setDelay);
