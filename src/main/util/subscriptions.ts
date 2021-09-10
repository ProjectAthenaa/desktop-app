import ws from 'ws';
import {Observable, SubscriptionClient} from 'subscriptions-transport-ws';
import {WebSocketLink} from 'apollo-link-ws';
import {DocumentNode, execute, FetchResult} from 'apollo-link';
import store from './store';

export const getWsClient = (url: string): SubscriptionClient =>
  new SubscriptionClient(
    url,
    {
      reconnect: true,
      async connectionParams() {
        const sessionId: string = store.get('sessionId');
        return { headers: { Authorization: `Bearer ${sessionId}` } };
      }
    },
    ws
  );

export const createSubscriptionObservable = (url: string, query: DocumentNode, variables?: Record<string, unknown>): Observable<FetchResult> => {
  const link = new WebSocketLink(getWsClient(url));
  return execute(link, { query, variables });
};
