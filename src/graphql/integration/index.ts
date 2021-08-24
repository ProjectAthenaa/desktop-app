import { GraphQLClient } from 'graphql-request';

const SERVICE_ENDPOINT = 'https://api.athenabot.com/integration';
export const integrationClient = new GraphQLClient(SERVICE_ENDPOINT, {
  headers: {
    Authorization: 'Bearer d47ed931-a635-47c1-a140-8cc3b9f4fc4f'
  }
});
