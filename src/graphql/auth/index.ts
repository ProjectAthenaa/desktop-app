import { GraphQLClient } from 'graphql-request';

const SERVICE_ENDPOINT = 'https://api.athenabot.com/auth';
export const authClient = new GraphQLClient(SERVICE_ENDPOINT);
