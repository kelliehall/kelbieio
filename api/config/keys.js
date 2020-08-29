const fs = require('fs');

const RSA_PRIVATE = fs.readFileSync(`${process.env.PWD}/config/private.pem`);
const RSA_PUBLIC = fs.readFileSync(`${process.env.PWD}/config/public.pem`, 'utf8');

module.exports = { RSA_PRIVATE, RSA_PUBLIC };