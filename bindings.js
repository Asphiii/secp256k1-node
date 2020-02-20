const addon = require('node-gyp-build')(__dirname)
module.exports = require('./lib/secp256k1')(new addon.Secp256k1())
