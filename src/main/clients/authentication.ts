import services from '../protos/authentication_grpc_pb';
import { certs } from './index';

export const authenticationClient = new services.AuthenticationClient(
  'svc.authentication.athenabot.com:443',
  certs
);
