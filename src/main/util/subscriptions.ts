import ws from 'ws';
import {SubscriptionClient} from 'subscriptions-transport-ws';
import {WebSocketLink} from 'apollo-link-ws';
import {DocumentNode, execute} from 'apollo-link';

export const getWsClient = (url: string): SubscriptionClient => new SubscriptionClient(url, {reconnect: true}, ws);

export const createSubscriptionObservable = (url: string, query: DocumentNode, variables?: Record<string, unknown>) => {
  const link = new WebSocketLink(getWsClient(url));
  return execute(link, { query, variables });
};
