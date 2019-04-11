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
    return [`%c${args[0]} %s`, css, ...args.slice(1)];
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
