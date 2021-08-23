import { GraphQLClient } from 'graphql-request';

const SERVICE_ENDPOINT = '';
export const client = new GraphQLClient(SERVICE_ENDPOINT, {
  headers: {
    // Auth here
  }
});
