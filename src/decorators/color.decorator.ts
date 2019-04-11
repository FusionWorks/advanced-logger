import { isNode } from '../helpers/isNode';

/**
 * Convert all given args to colorfull ones.
 * Example( ['hello world'] => ['%chello world', {given_css}] )
 */
// tslint:disable-next-line: function-name
export function Colorfull() {
  function transformOutput(css, args) {
    if (!css) {
      return args;
    }
    const allButFirst = args.slice(1);
    const colorKeeper = args.length < 2 ? '' : allButFirst.reduce((agg) => {
      return `${agg} %s`;
    }, '');
    return [`%c${args[0]}${colorKeeper}`, css, ...allButFirst];
  }

  return function (target?: any, propertyKey?: string | symbol, descriptor?: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
      const args = [...arguments];
      // Node cannot have css.
      if (isNode()) {
        return originalMethod.apply(this, args);
      }
      const methodConfig = this.configuration[propertyKey] || {};
      const css = methodConfig.css || this.configuration.css || undefined;
      return originalMethod.apply(this, transformOutput(css, args));
    };
    return descriptor;
  };
}
