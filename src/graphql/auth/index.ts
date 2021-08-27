import { GraphQLClient } from 'graphql-request';
import ws from 'ws';
import {createClient} from 'graphql-ws';

const SERVICE_ENDPOINT = 'https://api.athenabot.com/auth';
const SERVICE_WS_ENDPOINT = 'wss://api.athenabot.com/auth';
export const authClient = new GraphQLClient(SERVICE_ENDPOINT);
export const authSubClient = createClient({
  url: SERVICE_WS_ENDPOINT,
  webSocketImpl: ws
});
