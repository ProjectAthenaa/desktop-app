import {publicEncrypt, constants} from 'crypto';
import {readFile} from 'fs/promises';

const encryptWithPub = async (dataString: string): Promise<string> => {
    const data = Buffer.from(dataString);
    
    return publicEncrypt({
        key: pub,
        padding: constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    }, data).toString('base64');
};

export default encryptWithPub;

const pub = Buffer.from(
    `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEA3TWy7I3iHUTxMWi4ux+eHqAxfkQCNKbEFwubkk9+z3xFmIAkoAlF
UFvQiSoOJxUD1vvtheWRiikuKrnPpD9pU7h0rnVRniOLvRtmETwv1u6OiptSS1yl
fxgDtetY30lT2Zs8pUED5fH8ZtgRLuvuq4lAPX2M01LqdeFCwzonoct5KPogpK3t
AxU8q+QLG2AFIT5jMaCbtr4fAn/CU0qtuoBM9ln777R66DR8LBy7nu0MxN3OfBry
6tJy6w7BYwRut0esIV11DAGI5UerHZElMZ7BlCBGqs0JearUOl4mMhTZx86yiI1b
9KN/VtwLJFNV1HN/ADfrk8l1Icu3gysG8wIDAQAB
-----END RSA PUBLIC KEY-----`)