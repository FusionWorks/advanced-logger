import { MethodConfiguration } from '../models/configuration';

/**
 * Check whatever command should be triggered or not.
 */
// tslint:disable-next-line: function-name
export function FilterVisible() {
  /**
  * Applies only over logging methods.
  */
  function visible(methodName: 'debug' | 'log' | 'info' | 'error' | 'warn') {
    const configuration = this.configuration || {};
    const methodConfig: MethodConfiguration = configuration[methodName];
    // Take global configuration in case of undefined custom configuration
    const isObjectButClean = typeof methodConfig === 'object'
      && JSON.stringify(methodConfig) === '{}';
    if (methodConfig === undefined || isObjectButClean) {
      return !configuration.hide;
    }
    if (typeof methodConfig === 'boolean') {
      return methodConfig;
    }
    return !(methodConfig || {}).hide;
  }

  return function (target?: any, propertyKey?: string | symbol, descriptor?: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
      const args = arguments;
      if (!visible.apply(this, [propertyKey])) {
        return;
      }
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}
