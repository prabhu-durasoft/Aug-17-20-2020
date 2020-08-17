var process = require('process');
console.log(process.pid, process.platform);
//console.log(process.env);
console.log(process.env['TRAINING']); //export TRAINING=NodeJS