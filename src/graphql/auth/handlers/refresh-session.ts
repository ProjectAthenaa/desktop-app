import {gql} from 'graphql-request';
import {createSubscriptionObservable} from '../../../main/util/subscriptions';
import {SERVICE_WS_ENDPOINT} from '../index';
import {DocumentNode} from 'apollo-link';


export const REFRESH_SESSION = gql`
    subscription RefreshSession($session: SessionInput!) {
        refreshSession(session: $session) {
            ID
            HardwareID
        }
    }
`;

export const refreshSessionObservable = (variables?: Record<string, unknown>) => createSubscriptionObservable(
  SERVICE_WS_ENDPOINT,
  REFRESH_SESSION as unknown as DocumentNode,
  variables
);
