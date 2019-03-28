/**
 * Convert all given args to colorfull ones.
 * Example( ['hello world'] => ['%chello world', {given_css}] )
 */
export function PrefixSufix() {
  const onlyArray = (val) => Array.isArray(val) ? val : [val];
  return function (target?: any, propertyKey?: string | symbol, descriptor?: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
      let args = [...arguments];
      const { prefix, sufix } = this.configuration[propertyKey] || { prefix: undefined, sufix: undefined };
      if (prefix) {
        args = [...onlyArray(prefix), ...args];
      }
      if (sufix) {
        args = [...args, ...onlyArray(sufix)];
      }
      return originalMethod.apply(this, args);
    };
    return descriptor;
  }
};