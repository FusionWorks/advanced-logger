/**
 * Convert all given args to colorfull ones.
 * Example( ['hello world'] => ['%chello world', {given_css}] )
 */
// tslint:disable-next-line: function-name
export function PrefixSufix() {
  const toArray = (val: any) => Array.isArray(val) ? val : [val];

  return function (target?: any, propertyKey?: string | symbol, descriptor?: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
      let args = [...arguments];
      const methodConfig = this.configuration[propertyKey] || {};
      const prefix = methodConfig.prefix || this.configuration.prefix || undefined;
      const sufix = methodConfig.sufix || this.configuration.sufix || undefined;
      if (prefix) {
        args = [...toArray(prefix), ...args];
      }
      if (sufix) {
        args = [...args, ...toArray(sufix)];
      }
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}
