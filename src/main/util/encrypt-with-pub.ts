import { publicEncrypt } from 'crypto';
import { readFile } from 'fs/promises';

let pub: Buffer;
const encryptWithPub = async (dataString: string): Promise<string> => {
  const data = Buffer.from(dataString);

  if (!pub) pub = await readFile(__dirname + '/key.pub');

  return publicEncrypt(pub, data).toString('base64');
};

export default encryptWithPub;
