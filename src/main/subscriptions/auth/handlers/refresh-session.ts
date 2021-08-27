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

export const subscribeToRefreshSession = (window: BrowserWindow): Promise<void> => new Promise((resolve, reject) => {
  const onNext = async (data:  ExecutionResult<Record<string, unknown>, unknown>) => {
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

  unsubscribe = authSubClient.subscribe(
    {
      query: REFRESH_SESSION
    },
    {
      next: onNext,
      error: reject,
      complete: resolve,
    }
  );
});
