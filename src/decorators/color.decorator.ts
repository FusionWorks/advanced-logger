import { IsNode } from '../helpers/isNode';

/**
 * Convert all given args to colorfull ones.
 * Example( ['hello world'] => ['%chello world', {given_css}] )
 */
export function Colorfull() {
  function transformOutput(css, args) {
    return args.reduce((agg, arg) => {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return [...agg, `%c${arg}`, css];
      }
      return [...agg, arg];
    }, []);
  }

  return function (target?: any, propertyKey?: string | symbol, descriptor?: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
      let args = [...arguments];
      // Node cannot have css.
      if (IsNode()) {
        return originalMethod.apply(this, args);
      }
      const methodConfig = this.configuration[propertyKey] || {};
      const css = methodConfig.css || this.configuration.css || undefined;
      return originalMethod.apply(this, transformOutput(css, args));
    };
    return descriptor;
  }
};