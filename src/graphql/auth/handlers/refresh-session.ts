import {gql} from 'graphql-request';
import {authClient} from '../index';
import {Session} from '../../../types/auth';
import store from '../../../main/util/store';
import {machineId} from 'node-machine-id';
import {BrowserWindow} from 'electron';
import {createAuthenticationWindow} from '../../../index';

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
  return setInterval(async () => {
    const hardwareId = await machineId(true);
    const sessionId: string = store.get('sessionId');

    const response = await authClient.request<{ refreshSession: Session }>(
      REFRESH_SESSION,
      {
        session: {
          ID: sessionId,
          HardwareID: hardwareId
        }
      }
    );

    const session = response.refreshSession;

    if (hardwareId !== session.HardwareID) {
      store.set('sessionId', null);
      store.set('token', null);

      // Close main window and open auth window
      window.close();
      await createAuthenticationWindow();

      return;
    }

    store.set('sessionId', session.ID);
  }, ONE_MINUTE * 15);
};
