import { GraphQLClient } from 'graphql-request';
import keytar from '../../main/util/keytar';
import {KEYTAR_ACCOUNT, KEYTAR_SERVICE} from '../../index';

const SERVICE_ENDPOINT = 'https://api.athenabot.com/integration';
const graphQLClient = new GraphQLClient(SERVICE_ENDPOINT);

export const integrationClient = async (): Promise<GraphQLClient> => {
  const sessionId = await keytar.getPassword(KEYTAR_SERVICE, KEYTAR_ACCOUNT);

  graphQLClient.setHeader('Authorization', `Bearer ${sessionId}`)

  return graphQLClient;
};

