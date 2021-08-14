export * from './authentication';
export * from './integration';
import {caCert, clientCert, clientKey} from '../certs';
import * as grpc from '@grpc/grpc-js';

export const certs = grpc.credentials.createSsl(caCert, clientKey, clientCert);
