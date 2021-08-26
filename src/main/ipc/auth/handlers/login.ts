import loginRequest from '../../../../graphql/auth/handlers/login';
import {DeviceType, LoginParameters, LoginResponse} from '../../../../types/auth';
import store from '../../../util/store';
import {machineId} from 'node-machine-id';
import { type, hostname } from 'os';
import {BrowserWindow} from 'electron';
import {createMainWindow} from '../../../../index';

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
  store.set('sessionId', response.Session.ID);

  // Close out of the authentication window and open the main frame
  BrowserWindow.fromId(event.frameId).close();
  await createMainWindow();

  return response;
};

export default login;



