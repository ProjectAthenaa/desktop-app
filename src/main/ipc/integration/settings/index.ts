import {ipcMain} from 'electron';
import getSiteInformation from './handlers/get-site-info'

ipcMain.handle('getSiteInformation', getSiteInformation);
