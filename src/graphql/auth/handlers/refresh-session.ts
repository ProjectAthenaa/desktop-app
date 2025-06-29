import {gql} from 'graphql-request';
import {authClient} from '../index';
import {DeviceType, LoginResponse, Session} from '../../../types/auth';
import store from '../../../main/util/store';
import {machineId} from 'node-machine-id';
import {BrowserWindow} from 'electron';
import {createAuthenticationWindow, KEYTAR_ACCOUNT, KEYTAR_SERVICE} from '../../../index';
import loginRequest from './login';
import {hostname, type} from 'os';
import keytar from '../../../main/util/keytar';

export const REFRESH_SESSION = gql`
    mutation RefreshSession($session: SessionInput!) {
        refreshSession(session: $session) {
            ID
            HardwareID
        }
    }
`;

const ONE_MINUTE = 1000 * 60;

export const refreshSessionHeartbeat = async (window: BrowserWindow): Promise<NodeJS.Timer> => {
  let sub: {unsubscribe: () => any};
  return setInterval(async () => {
    const hardwareId = await machineId(true);
    const sessionId = await keytar.getPassword(KEYTAR_SERVICE, KEYTAR_ACCOUNT);

    let response: { refreshSession: Session };

    try {
      response = await authClient.request<{ refreshSession: Session }>(
        REFRESH_SESSION,
        {
          session: {
            ID: sessionId,
            HardwareID: hardwareId
          }
        }
      );
    } catch (error) {
      // This is put in place to update the session token if it
      // somehow expires while the computer is slump or something
      const token: string = store.get('token');
      const operatingSystem = type();
      const hostName = hostname();

      if (!token) return await createAuthenticationWindow();

      let loginResponse: LoginResponse;
      try {
        loginResponse = await loginRequest(token, {
          HardwareID: hardwareId,
          OS: operatingSystem,
          DeviceName: hostName,
          DeviceType: DeviceType.Desktop,
        });

        await keytar.setPassword(
          KEYTAR_SERVICE,
          KEYTAR_ACCOUNT,
          loginResponse.Session.ID
        );

        return;
      } catch (error) {
        if (window) window.close();
        sub.unsubscribe();
        await createAuthenticationWindow();
      }
    }

    const session = response.refreshSession;

    if (hardwareId !== session.HardwareID) {
      await keytar.deletePassword(KEYTAR_SERVICE, KEYTAR_ACCOUNT);
      store.set('token', null);

      // Close main window and open auth window
      if (window) window.close();
      await createAuthenticationWindow();
      sub.unsubscribe();
      return;
    }

    await keytar.setPassword(
      KEYTAR_SERVICE,
      KEYTAR_ACCOUNT,
      session.ID
    );
  }, ONE_MINUTE * 15);
};
