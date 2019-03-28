import { ObjectLiteral } from './models/object';
import { ConfigurationModel } from './models/configuration';
import { AbstractConsole } from './models/original-console';
import { FilterVisible } from './decorators/filter.decorator';
import { Colorfull } from './decorators/color.decorator';
import { DoFromConsole } from './decorators/do-console.decotrator';

export class Console extends AbstractConsole {
  constructor(private configuration: ConfigurationModel | ObjectLiteral = {}) {
    super();
  }

  protected init() {
    super.init();
  }

  update(configuration = {}) {
    Object.assign(this.configuration, configuration);
    this.init();
  }

  // LOGGING START
  @FilterVisible()
  @Colorfull()
  @DoFromConsole()
  log() { }

  @FilterVisible()
  @Colorfull()
  @DoFromConsole()
  warn() { }

  @FilterVisible()
  @Colorfull()
  @DoFromConsole()
  error() { }

  @FilterVisible()
  @Colorfull()
  @DoFromConsole()
  debug() { }

  @FilterVisible()
  @Colorfull()
  @DoFromConsole()
  info() { }
  // LOGGING END 
}

