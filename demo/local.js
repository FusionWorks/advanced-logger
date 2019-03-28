const { Console } = require('../dist/index');

const console = new Console({ log: { sufix: '[LOG]', prefix: '[LOGGED]' } });

console.log('thats an VISIBLE log');
console.warn('thats an VISIBLE warn');

console.update({ log: { hide: false }, warn: false });
console.log('RECONFIGURED');
console.log('thats an VISILE log');
console.warn('thats an HIDDEN warn');

console.update({ log: { hide: true }, warn: true });
console.log('RECONFIGURED');
console.log('thats an HIDDEN log');
console.warn('thats an VISIBLE warn');

console.update({ log: { hide: true }, warn: false });
console.log('RECONFIGURED');
console.log('thats an HIDDEN log');
console.warn('thats an HIDDEN warn');