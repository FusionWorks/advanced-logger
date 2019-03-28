import { MethodConfiguration } from '../models/configuration';

/**
 * Check whatever command should be triggered or not.
 */
export function FilterVisible() {
  /**
  * Applies only over logging methods.
  */
  function visible(methodName: 'debug' | 'log' | 'info' | 'error' | 'warn') {
    const methodConfig: MethodConfiguration = this.configuration[methodName];
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
  }
};