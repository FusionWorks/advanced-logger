import { ObjectLiteral } from './models/object';
import { ConfigurationModel } from './models/configuration';
import { AbstractConsole } from './models/original-console';
import { FilterVisible } from './decorators/filter.decorator';
import { Colorfull } from './decorators/color.decorator';
import { DoFromConsole } from './decorators/do-console.decotrator';
import { PrefixSufix } from './decorators/prefix-sufix.decorator';
import { mergeWith } from './helpers/mergeWith';

export class Console extends AbstractConsole {
  constructor(private configuration: ConfigurationModel | ObjectLiteral = {}) {
    super();
  }

  /**
   * Join old configuration with new one.
   * If {forced} is activeted it replace instead of join.
   */
  update(configuration = {}, forced?: boolean) {
    if (forced) {
      this.configuration = configuration;
      this.init();
      return;
    }
    const allowUndefined = (oldVal: any, newVal: any) => {
      if (newVal === undefined) {
        return null;
      }
    };
    mergeWith(this.configuration, configuration, allowUndefined);
    this.init();
  }

  /**
   * Returns new instance of console with given configuration.
   */
  standalone(configuration = {}, forced?: boolean) {
    const clone = Object.assign({}, this);
    Object.setPrototypeOf(clone, Console.prototype);
    clone.update(configuration, forced);
    return clone;
  }

  // LOGGING START
  @FilterVisible()
  @PrefixSufix()
  @Colorfull()
  @DoFromConsole()
  log() { }

  @FilterVisible()
  @PrefixSufix()
  @Colorfull()
  @DoFromConsole()
  warn() { }

  @FilterVisible()
  @PrefixSufix()
  @Colorfull()
  @DoFromConsole()
  error() { }

  @FilterVisible()
  @PrefixSufix()
  @Colorfull()
  @DoFromConsole()
  debug() { }

  @FilterVisible()
  @PrefixSufix()
  @Colorfull()
  @DoFromConsole()
  info() { }
  // LOGGING END
}
