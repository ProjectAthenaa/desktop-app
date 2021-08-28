import { GraphQLClient } from 'graphql-request';
import ws from 'ws';
import {createClient} from 'graphql-ws';
import { v4 as uuid } from 'uuid';

const SERVICE_ENDPOINT = 'https://api.athenabot.com/auth';
const SERVICE_WS_ENDPOINT = 'wss://api.athenabot.com/auth';
export const authClient = new GraphQLClient(SERVICE_ENDPOINT);
export const authSubClient = createClient({
  url: SERVICE_WS_ENDPOINT,
  webSocketImpl: ws,
  generateID: () => uuid()
});

authSubClient.on('connected', () => console.log('connected'));
authSubClient.on('error', e => {
  console.log(e)
});
