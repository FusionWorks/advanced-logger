/**
 * Execute function with target name but from console.
 * Example( 'log' => 'console.log' )
 */
export function DoFromConsole() {
  return function (target?: any, propertyKey?: string | symbol, descriptor?: PropertyDescriptor) {
    descriptor.value = function () {
      const args = arguments;
      this.old_console[propertyKey].apply(this, args);
    };
    return descriptor;
  }
};