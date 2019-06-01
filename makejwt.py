import rsa
import base64
import jwt

(pubkey, privkey) = rsa.newkeys(512)

aesKey = rsa.randnum.read_random_bits(128)
encryptedAesKey = rsa.encrypt(aesKey, privkey)
encodedKey = base64.b64encode(encryptedAesKey)

print("Encoded Encrypted Key: ", encodedKey)

encodedJwt = jwt.encode({'collector': '0'}, encodedKey, algorithm='HS256')

print("JWT: ", encodedJwt)