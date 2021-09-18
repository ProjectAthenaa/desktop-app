import { GraphQLClient } from 'graphql-request';
import keytar from '../../main/util/keytar';
import {KEYTAR_ACCOUNT, KEYTAR_SERVICE} from '../../index';

const SERVICE_ENDPOINT = 'https://api.athenabot.com/tasks';
export const WS_SERVICE_ENDPOINT = 'wss://api.athenabot.com/tasks';
const graphQLClient = new GraphQLClient(SERVICE_ENDPOINT);

export const taskClient = async (): Promise<GraphQLClient> => {
  const sessionId = await keytar.getPassword(KEYTAR_SERVICE, KEYTAR_ACCOUNT);

  graphQLClient.setHeader('Authorization', `Bearer ${sessionId}`);

  return graphQLClient;
};
