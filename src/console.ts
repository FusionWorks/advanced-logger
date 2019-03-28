import { ObjectLiteral } from './models/object';
import { ConfigurationModel } from './models/configuration';
import { AbstractConsole } from './models/original-console';
import { FilterVisible } from './decorators/filter.decorator';
import { Colorfull } from './decorators/color.decorator';
import { DoFromConsole } from './decorators/do-console.decotrator';
import { PrefixSufix } from './decorators/prefix-sufix.decorator';
const merge = require('lodash/merge');

export class Console extends AbstractConsole {
  constructor(private configuration: ConfigurationModel | ObjectLiteral = {}) {
    super();
  }

  update(configuration = {}) {
    merge(this.configuration, configuration);
    this.init();
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

