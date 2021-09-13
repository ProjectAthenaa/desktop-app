import {ipcMain} from 'electron';
import getModuleInformation from './handlers/get-module-information';

ipcMain.handle('getModuleInformation', getModuleInformation);
