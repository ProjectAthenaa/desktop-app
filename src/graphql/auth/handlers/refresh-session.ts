import {gql} from 'graphql-request';
import {authClient} from '../index';
import {DeviceType, LoginResponse, Session} from '../../../types/auth';
import store from '../../../main/util/store';
import {machineId} from 'node-machine-id';
import {BrowserWindow} from 'electron';
import {createAuthenticationWindow} from '../../../index';
import loginRequest from './login';
import {hostname, type} from 'os';
import {handleTaskUpdates} from '../../tasks/handlers/task-updates';

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
    const sessionId: string = store.get('sessionId');

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

        store.set('sessionId', loginResponse.Session.ID);

        return;
      } catch (error) {
        window.close();
        sub.unsubscribe();
        await createAuthenticationWindow();
      }
    }

    const session = response.refreshSession;

    if (hardwareId !== session.HardwareID) {
      store.set('sessionId', null);
      store.set('token', null);

      // Close main window and open auth window
      window.close();
      await createAuthenticationWindow();
      sub.unsubscribe();
      return;
    }

    store.set('sessionId', session.ID);
  }, ONE_MINUTE * 15);
};
