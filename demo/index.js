const { Console } = require('@fusionworks/advanced-logger');

const console = new Console({ log: { css: 'background:red;color:#fff' } });

console.info('ROUND 1, log disabled');
console.log('thats an disabled log');
console.warn('thats an enabled warn');

console.update({ log: true, warn: false });
console.info('ROUND 2, warn disabled');
console.log('thats an disabled log');
console.warn('thats an enabled warn');

console.update({ log: false, warn: false });
console.info('ROUND 3, warn + log disabled');
console.log('thats an disabled log');
console.warn('thats an enabled warn');