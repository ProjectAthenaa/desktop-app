import {ipcMain} from 'electron';
import services from '../../protos/authentication_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import {caCert, clientCert, clientKey} from '../../certs';
import {LoginRequest} from '../../protos/authentication_pb';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

/**
 * Authenticates a user
 * @param token: string
 */
ipcMain.handle('login', (event, key: string) => {
  const loginRequest = new LoginRequest();
  loginRequest.setKey('ab6123af-e98b-4604-826d-1ffd37465b62');

  const certs = grpc.credentials.createSsl(caCert, clientKey, clientCert);
  const authenticationClient = new services.AuthenticationClient(
    'svc.authentication.athenabot.com:443',
    certs
  );


  authenticationClient.login(loginRequest, (error, response) => {
    if (error) return console.error(error);

    console.log(response);

    return response;
  });
});
