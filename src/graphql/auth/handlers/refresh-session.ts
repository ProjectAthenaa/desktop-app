import {gql} from 'graphql-request';
import {createSubscriptionObservable} from '../../../main/util/subscriptions';
import {SERVICE_WS_ENDPOINT} from '../index';
import {DocumentNode} from 'apollo-link';
import {machineId} from 'node-machine-id';
import store from '../../../main/util/store';
import * as Sentry from '@sentry/node';
import {createAuthenticationWindow} from '../../../index';
import {BrowserWindow} from 'electron';


export const REFRESH_SESSION = gql`
    subscription RefreshSession($session: SessionInput!) {
        refreshSession(session: $session) {
            ID
            HardwareID
        }
    }
`;

const refreshSessionObservable = (variables?: Record<string, unknown>) => createSubscriptionObservable(
  SERVICE_WS_ENDPOINT,
  REFRESH_SESSION as unknown as DocumentNode,
  variables
);

export const handleSessionRefresh = async (window: BrowserWindow) => {
    const hardwareId = await machineId(true);
    let waiting = false;
    let stopped = false;

    (function recursiveSub() {
        if (!stopped) {
            if (!waiting) {
                const sessionId: string | null = store.get('sessionId');
                const refreshSessionClient = refreshSessionObservable({
                    session: {
                        ID: sessionId,
                        HardwareID: hardwareId
                    }
                });

                const refreshSessionSub = refreshSessionClient.subscribe(
                  (event) => {
                      refreshSessionSub.unsubscribe();

                      // Check to see if errors exist, if so, just show the auth window because auth failed.
                      // TODO: handle this more gracefully, in terms of UX
                      if (event.errors) {
                          stopped = true;
                          refreshSessionSub.unsubscribe();
                          createAuthenticationWindow();
                          window.close();
                          return;
                      }

                      if (event.data.refreshSession.HardwareID === "LOGGED_ELSEWHERE") {
                          store.set('sessionId', null);
                          store.set('token', null);
                          window.close();
                          createAuthenticationWindow();
                          stopped = true;
                          return;
                      }

                      // Update the sessionId in store
                      store.set('sessionId', event.data.refreshSession.ID);
                      console.log('new session set', event.data.refreshSession.ID);

                      // Resubscribe on the next iteration
                      waiting = false;
                  },
                  (error) => {
                      Sentry.captureException(error);
                      refreshSessionSub.unsubscribe();
                      createAuthenticationWindow();
                      window.close();
                      stopped = true;
                  });

                waiting = true;

                if (!stopped) setTimeout(recursiveSub, 100);
            } else {
                setTimeout(recursiveSub, 100);
            }
        }
    })();
}
