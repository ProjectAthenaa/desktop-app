import { GraphQLClient } from 'graphql-request';

export const SERVICE_ENDPOINT = 'http://api.athenabot.com/integration';
export const integrationClient = new GraphQLClient(SERVICE_ENDPOINT, {
  headers: {
    Authorization: 'Bearer 80f347cd-439a-4a2c-89f0-518815f2aa96',
  }
});
