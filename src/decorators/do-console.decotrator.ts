/**
 * Execute function with target name but from console.
 * Example( 'log' => 'console.log' )
 */
// tslint:disable-next-line: function-name
export function DoFromConsole() {
  return function (target?: any, propertyKey?: string | symbol, descriptor?: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function () {
      const args = arguments;
      this.consoleKeeper[propertyKey].apply(this, args);
      original.apply(this);
    };
    return descriptor;
  };
}
