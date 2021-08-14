import path from 'path';
import fs from 'fs';

export const caCert = fs.readFileSync(path.join(__dirname, 'ca-cert.pem'));
export const clientKey = fs.readFileSync(path.join(__dirname, 'client-key.pem'));
export const clientCert = fs.readFileSync(path.join(__dirname, 'client-cert.pem'));
