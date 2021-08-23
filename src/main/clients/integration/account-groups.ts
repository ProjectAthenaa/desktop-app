import services from '../../protos/integration_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import {caCert, clientCert, clientKey} from '../../certs';

// Required to make the connection
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = String(0);

const INTEGRATION_SERVICE = 'svc.integration.athenabot.com:443';
const certs = grpc.credentials.createSsl(caCert, clientKey, clientCert);

export const accountGroupsClient = new services.AccountGroupsClient(
  INTEGRATION_SERVICE,
  certs
);

