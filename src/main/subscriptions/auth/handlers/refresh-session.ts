import { authSubClient } from '../../../../graphql/auth';
import {REFRESH_SESSION} from '../../../../graphql/auth/handlers/refresh-session';
import {Session} from '../../../../types/auth';
import {machineId} from 'node-machine-id';
import store from '../../../util/store';
import {BrowserWindow} from 'electron';
import {createMainWindow} from '../../../../index';
import { ExecutionResult } from 'graphql';

let unsubscribe: () => void | undefined;

export const unsubscribeFromRefreshSession = (): Promise<void> => new Promise((resolve, reject) => {
  if (!unsubscribe) reject('No Refresh Session subscription is available to be unsubscribed from.');

  unsubscribe();

  resolve();
});

export const subscribeToRefreshSession = async (window: BrowserWindow): Promise<void> => await new Promise( (resolve, reject) => {
  (async () => {
    const onNext = async (data:  ExecutionResult<Record<string, unknown>, unknown>) => {
      console.log('sub event rcvd', data);
      const { refreshSession } = data.data as unknown as { refreshSession: Session };

      const hardwareId = await machineId(true);
      if (refreshSession.HardwareID !== hardwareId) {

        // Reset store back to defaults
        store.set('sessionId', null);
        store.set('token', null);
        store.set('preferences', {});

        // Close main window open auth
        window.close();
        await createMainWindow();

        unsubscribe();
      }

      // Update session store
      store.set('sessionId', refreshSession.ID);
    };
    const sessionId: string = store.get('sessionId');
    const hardwareId = await machineId(true);
    unsubscribe = authSubClient.subscribe(
      {
        query: REFRESH_SESSION,
        variables: {
          session: {
            ID: sessionId,
            HardwareID: hardwareId,
          }
        }
      },
      {
        next: onNext,
        error: reject,
        complete: resolve,
      }
    );
  })();
});
