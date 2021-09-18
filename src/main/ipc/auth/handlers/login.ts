import loginRequest from '../../../../graphql/auth/handlers/login';
import {DeviceType, LoginParameters, LoginResponse} from '../../../../types/auth';
import store from '../../../util/store';
import {machineId} from 'node-machine-id';
import { type, hostname } from 'os';
import {BrowserWindow} from 'electron';
import {createMainWindow, KEYTAR_ACCOUNT, KEYTAR_SERVICE} from '../../../../index';
import keytar from '../../../util/keytar';

const login = async (event: Electron.IpcMainInvokeEvent, key: string): Promise<LoginResponse> => {
  const hardwareId = await machineId(true);
  const operatingSystem = type();
  const hostName = hostname();

  const response = await loginRequest(key, {
    HardwareID: hardwareId,
    OS: operatingSystem,
    DeviceName: hostName,
    DeviceType: DeviceType.Desktop,
  });

  store.set('token', key);
  await keytar.setPassword(
    KEYTAR_SERVICE,
    KEYTAR_ACCOUNT,
    response.Session.ID
  );

  // Close out of the authentication window and open the main frame
  const win = BrowserWindow.fromId(event.frameId);
  if (win) win.close();
  await createMainWindow();

  return response;
};

export default login;



