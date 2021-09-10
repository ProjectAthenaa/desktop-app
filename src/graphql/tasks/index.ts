import { GraphQLClient } from 'graphql-request';
import store from '../../main/util/store';

const SERVICE_ENDPOINT = 'https://api.athenabot.com/tasks';
export const WS_SERVICE_ENDPOINT = 'wss://api.athenabot.com/tasks';
const graphQLClient = new GraphQLClient(SERVICE_ENDPOINT);

export const taskClient = (): GraphQLClient => {
  graphQLClient.setHeader('Authorization', `Bearer ${store.get('sessionId')}`)
  return graphQLClient;
};
