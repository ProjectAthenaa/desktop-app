import { GraphQLClient } from 'graphql-request';
import store from '../../main/util/store';

const SERVICE_ENDPOINT = 'https://api.athenabot.com/auth';
export const authClient = new GraphQLClient(SERVICE_ENDPOINT);
