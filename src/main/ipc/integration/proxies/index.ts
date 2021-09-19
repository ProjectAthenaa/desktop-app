import {ipcMain} from 'electron';
import createProxyList from './handlers/create-proxy-list';
import deleteProxyList from './handlers/delete-proxy-list';
import getProxyList from './handlers/get-proxy-list';
import getProxyLists from './handlers/get-proxy-lists';
import updateProxyList from './handlers/update-proxy-list';
import testProxyList from './handlers/test-proxy-list';



ipcMain.handle('createProxyList', createProxyList);
ipcMain.handle('deleteProxyList', deleteProxyList);
ipcMain.handle('getProxyList', getProxyList);
ipcMain.handle('getProxyLists', getProxyLists);
ipcMain.handle('updateProxyList', updateProxyList);
ipcMain.handle('testProxyList', testProxyList);
