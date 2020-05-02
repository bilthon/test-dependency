const bitcore = require('bitcore-lib');

function start(){
  console.log('Running package. bitcore lib version from here: ', bitcore.version);
}

exports.start = start;
