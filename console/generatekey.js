var NodeRSA = require('node-rsa');
const path = require('path')
const fs = require('fs')

var key = new NodeRSA({b: 1024});
console.log(key.exportKey("pkcs8-private"));
// console.log(key.exportKey("pkcs8-public-pem"));

const absolutePath = path.resolve('/home/config/keys/nodejs-public.pem')
const publicKey = fs.readFileSync(absolutePath, 'utf8')
key.importKey(publicKey, "pkcs8-public-pem");

const absolutePath2 = path.resolve('/home/config/keys/nodejs-private.pem')
const privateKey = fs.readFileSync(absolutePath2, 'utf8')
key.importKey(privateKey, "pkcs8-private");

key.setOptions({
  encryptionScheme: 'pkcs1'
});

const encrypted = key.encrypt("hello", 'base64');
console.log(encrypted);

const decrypted = key.decrypt(encrypted, 'utf8');
console.log(decrypted);
