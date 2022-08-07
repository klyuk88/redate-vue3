import SHA256 from 'crypto-js/sha256'

export const encryptPassword = (password) => SHA256(password).toString()
