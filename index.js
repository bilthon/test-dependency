require('module-alias/register');
const bitcore = require('bitcore-lib');
const pkg = require('./package');

console.log('bitcore-lib version: ', bitcore.version);
pkg.start();
