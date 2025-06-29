import {publicEncrypt, constants} from 'crypto';
import {readFile} from 'fs/promises';

const encryptWithPub = async (dataString: string): Promise<string> => {
  const data = Buffer.from(dataString);
  const pub = await readFile(__dirname + '/key.pub');

  return publicEncrypt(
    {
      key: pub,
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    data
  ).toString('base64');
};

export default encryptWithPub;
