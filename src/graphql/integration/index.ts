import { GraphQLClient } from 'graphql-request';
import store from '../../main/util/store';

const SERVICE_ENDPOINT = 'http://api.athenabot.com/integration';
export const integrationClient = new GraphQLClient(SERVICE_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${store.get('sessionId')}`,
  }
});
