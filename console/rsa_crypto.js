const crypto = require('crypto')
const path = require('path')
const fs = require('fs')

function encrypt(toEncrypt, relativeOrAbsolutePathToPublicKey) {
  const absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey)
  const publicKey = fs.readFileSync(absolutePath, 'utf8')
  const keyObj = crypto.createPublicKey({
    key: publicKey,
    format: 'pem',
    type: 'spki'
  })
  const buffer = Buffer.from(toEncrypt, 'utf8')
  const encrypted = crypto.publicEncrypt({
    key: keyObj,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
  }, buffer)
  return encrypted.toString('base64')
}

function decrypt(toDecrypt, relativeOrAbsolutePathtoPrivateKey) {
  const absolutePath = path.resolve(relativeOrAbsolutePathtoPrivateKey)
  const privateKey = fs.readFileSync(absolutePath, 'utf8')
  const buffer = Buffer.from(toDecrypt, 'base64')
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey.toString(),
      passphrase: '',
    },
    buffer,
  )
  return decrypted.toString('utf8')
}

// const publicpem = '/home/config/keys/topup-public-key.pem'
// const privatepem = '/home/config/keys/topup-private-key.pem'
const publicpem = '/home/config/keys/topup-public-key-test.pem'
const privatepem = '/home/config/keys/topup-private-key-test.pem'
// const publicpem = '/home/config/keys/nodejs-public.pem'
// const privatepem = '/home/config/keys/nodejs-private.pem'
// https://marcomelilli.com/posts/how-to-asymmetric-encryption-in-nodejs
// $ openssl genrsa -out rsa_4096_priv.pem 4096
// $ openssl rsa -pubout -in rsa_4096_priv.pem -out rsa_4096_pub.pem

// const publicpem = '/home/config/keys/rsa_4096_pub.pem'
// const privatepem = '/home/config/keys/rsa_4096_priv.pem'

const enc = encrypt('hello', publicpem)
console.log('enc', enc)

// const enc = "eWN9A+1kmGg0VpPJbSm8ZY332psVoChLqm1x1GJ/cfkyEkMUScSAhefd6SpCfQVRbyGP9BwMNiVggbl0bFSWcRlpKvMbStNVhhIZcgSmF22mPDS/N6lUORrj7NjmlgzlwZfsI1ir+tH29NFCAO0Rn4gazj7dKY35q9/EiI1XGMU=";
const dec = decrypt(enc, privatepem)
console.log('dec', dec)
