import { MethodConfiguration } from '../models/configuration';

/**
 * Check whatever command should be triggered or not.
 */
export function FilterVisible() {
  /**
  * Applies only over logging methods.
  */
  function visible(methodName: 'debug' | 'log' | 'info' | 'error' | 'warn') {
    const method: MethodConfiguration = this.configuration[methodName];
    if (!method || typeof method === 'boolean') {
      return method !== false;
    }
    return !method.hide;
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