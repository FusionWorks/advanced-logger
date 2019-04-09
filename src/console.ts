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
  @Colorfull()
  @PrefixSufix()
  @DoFromConsole()
  log() { }

  @FilterVisible()
  @Colorfull()
  @PrefixSufix()
  @DoFromConsole()
  warn() { }

  @FilterVisible()
  @Colorfull()
  @PrefixSufix()
  @DoFromConsole()
  error() { }

  @FilterVisible()
  @Colorfull()
  @PrefixSufix()
  @DoFromConsole()
  debug() { }

  @FilterVisible()
  @Colorfull()
  @PrefixSufix()
  @DoFromConsole()
  info() { }
  // LOGGING END
}
