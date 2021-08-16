import services from '../protos/authentication_grpc_pb';
import {caCert, clientCert, clientKey} from '../certs';
import * as grpc from '@grpc/grpc-js';
import util from 'util';
import {LoginRequest, LoginResponse} from '../protos/authentication_pb';

// Required to make the connection
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = String(0);

const certs = grpc.credentials.createSsl(caCert, clientKey, clientCert);

export const authenticationClient = new services.AuthenticationClient(
  'svc.authentication.athenabot.com:443',
  certs
);

export const authenticate = (token: string): Promise<LoginResponse> => {
  const loginRequest = new LoginRequest();
  loginRequest.setKey(token);

  return new Promise(function (resolve, reject) {
    authenticationClient.login(loginRequest, (error, loginResponse) => {
      if (error) return reject(error);
      return resolve(loginResponse);
    });
  });
};
