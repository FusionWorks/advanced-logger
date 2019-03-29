const { Console } = require('@fusionworks/advanced-logger');

const console = new Console({ warn: { prefix: '[WARN]' }, prefix: '[GLOBAL PREFIX]' });

console.log('[VISIBLE] thats an VISIBLE log');
console.warn('[VISIBLE] thats an VISIBLE warn');

console.update({ log: { hide: false }, warn: false });
console.log('RECONFIGURED', console.configuration);
console.log('[VISILE] thats an log');
console.warn('[HIDDEN] thats an warn');

console.update({ log: { hide: true }, warn: true });
console.log('RECONFIGURED', console.configuration);
console.log('[HIDDEN] thats an log');
console.warn('[VISIBLE] thats an warn');

console.update({ log: false, warn: false });
console.log('RECONFIGURED', console.configuration);
console.warn('[HIDDEN] thats an warn');
console.log('[HIDDEN] JUST A CONSOLE');

console.standalone().log('[VISIBLE] test');
console.log('[VISIBLE] test');

const logger = console.standalone({ warn: false });
logger.warn('[HIDDEN] HI');
logger.log('[VISIBLE] HI');

console.log('[HIDDEN] JUST A CONSOLE');
const someCustomConfig = { log: { prefix: '[CUSTOM]', sufix: '[AGAIN]' } };
console.standalone(someCustomConfig).log('[VISIBLE] test');

console.update({ log: {} });
console.log('RECONFIGURED', console.configuration);
console.warn('[VISIBLE] thats an warn');
console.log('[VISIBLE] JUST A console');
console.info('[VISIBLE] JUST A info');
