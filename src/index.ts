import { ObjectLiteral } from './models/object';
import { ConfigurationModel } from 'models/configuration';
import { OriginalConsole } from 'models/original-console';
import { FilterVisible } from 'decorators/filter.decorator';
import { Colorfull } from 'decorators/color.decorator';
import { DoFromConsole } from 'decorators/do-console.decotrator';

export class Console implements OriginalConsole {
  memory: any;
  Console: NodeJS.ConsoleConstructor | any;

  // Used by decorators for now
  private old_console: OriginalConsole = console;

  constructor(private configuration: ConfigurationModel | ObjectLiteral = {}) {
    this.init();
  }

  private init() {
    if (this.configuration.overrideConsole) {
      try {
        console = this;
      } catch (e) {
        // this.old_console.warn('Could not replace console. Please do it by yourself. We are working on that.')
      }
    }
  }

  update(configuration = {}) {
    this.configuration = configuration;
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

  /**
   * @todo: Find nice way to use this.
   */
  @DoFromConsole()
  table() { }

  /**
   * @todo: Make it by default only for debug/verbose?
   */
  @DoFromConsole()
  time() { }

  /**
   * @todo: Trace by default except this class.
   */
  @DoFromConsole()
  trace() { }

  /**
   * @todo: Use this instead of log?
   */
  @DoFromConsole()
  dir() { }

  /**
  * @todo: Create methods for recursions debug using groups + sub-groups.
  */
  @DoFromConsole()
  group() { }

  @DoFromConsole()
  clear() { }

  @DoFromConsole()
  assert() { }

  @DoFromConsole()
  count() { }

  @DoFromConsole()
  dirxml() { }

  @DoFromConsole()
  exception() { }

  @DoFromConsole()
  groupCollapsed() { }

  @DoFromConsole()
  groupEnd() { }

  @DoFromConsole()
  profile() { }

  @DoFromConsole()
  profileEnd() { }

  @DoFromConsole()
  timeEnd() { }

  @DoFromConsole()
  timeStamp() { }

  @DoFromConsole()
  timeline() { }

  @DoFromConsole()
  timelineEnd() { }

  @DoFromConsole()
  markTimeline() { }

  @DoFromConsole()
  timeLog() { }

  @DoFromConsole()
  countReset() { }
}

