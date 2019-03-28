export function Colorfull() {
  function browserOutput(css, args) {
    return args.reduce((agg, arg) => {
      if (typeof arg === 'string') {
        return [...agg, `%c${arg}`, css];
      }
      return agg;
    }, []);
  }

  function isNode(): Boolean {
    return Boolean(typeof module !== 'undefined' && module.exports);
  }

  return function (target?: any, propertyKey?: string | symbol, descriptor?: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
      let args = [...arguments];
      const { css } = this.configuration[propertyKey] || { css: undefined };
      if (css) {
        if (isNode()) {
          this.old_console.warn('Cannot apply css over NodeJs.');
          return;
        }
        return originalMethod.apply(this, browserOutput(css, args));
      }
      return originalMethod.apply(this, args);
    };
    return descriptor;
  }
};