import { ObjectLiteral } from './models/object';
import { ConfigurationModel } from 'models/configuration';
import { OriginalConsole } from 'models/original-console';
import { FilterVisible } from 'decorators/filter.decorator';
import { Colorfull } from 'decorators/color.decorator';

export class Console implements OriginalConsole {
  memory: any;

  private old_console: OriginalConsole = console;

  constructor(private configuration: ConfigurationModel | ObjectLiteral = {}) {
    this.init();
  }

  update(configuration) {
    this.configuration = configuration;
    this.init();
  }

  @FilterVisible()
  @Colorfull()
  log(...args: any[]) {
    this.old_console.log(...args);
  }

  @FilterVisible()
  @Colorfull()
  warn(...args: any[]) {
    this.old_console.warn(...args);
  }

  @FilterVisible()
  @Colorfull()
  error(...args: any[]) {
    this.old_console.error(...args);
  }

  @FilterVisible()
  @Colorfull()
  debug(...args: any[]) {
    this.old_console.debug(...args);
  }

  @FilterVisible()
  @Colorfull()
  info(...args: any[]) {
    this.old_console.info(...args);
  }

  clear() {
    this.old_console.clear();
  }

  /**
   * @param condition: boolean
   * @param message: string 
   * @param data: any[]
   */
  assert(...args: [boolean | undefined, string | undefined, ...any[]]) {
    this.old_console['assert'](...args);
  }

  count(value: string = 'default') {
    this.old_console['count'](value);
  }

  /**
   * @todo: Use this instead of log?
   */
  dir(...args: [any, ObjectLiteral]) {
    this.old_console['dir'](...args);
  }

  dirxml(value?: string) {
    this.old_console['dirxml'](value);
  }

  /**
   * @todo: Find out what is this for?!
   */
  exception(...args: any[]) {
    this.old_console['exception'](...args);
  }

  /**
   * @todo: Create methods for recursions debug using groups + sub-groups.
   */
  group(...args: any[]) {
    this.old_console['group'](...args);
  }

  groupCollapsed(...args: any[]) {
    this.old_console['groupCollapsed'](...args);
  }

  groupEnd() {
    this.old_console['groupEnd']();
  }

  /**
   * @todo: Find out what is this for?!
   */
  profile(...args: any[]) {
    this.old_console['profile'](...args);
  }

  profileEnd(...args: any[]) {
    this.old_console['profileEnd'](...args);
  }

  /**
   * @todo: Find nice way to use this.
   */
  table(...args: any[]) {
    this.old_console['table'](...args);
  }

  /**
   * @todo: Make it by default only for debug/verbose?
   */
  time(...args: any[]) {
    this.old_console['time'](...args);
  }

  timeEnd(...args: any[]) {
    this.old_console['timeEnd'](...args);
  }

  /**
   * @todo: Find out what is this for?!
   */
  timeStamp(...args: any[]) {
    this.old_console['timeStamp'](...args);
  }

  /**
   * @todo: Get rid of trace till this class.
   */
  trace(...args: any[]) {
    this.old_console['trace'](...args);
  }

  // GARBAGE STUFF => REQUIRED BY TYPESCRIPT
  timeline(...args: any[]) {
    this.old_console['timeline'](...args);
  }

  timelineEnd(...args: any[]) {
    this.old_console['timelineEnd'](...args);
  }

  markTimeline(...args: any[]) {
    this.old_console['markTimeline'](...args);
  }
  // GARBAGE END

  private init() {
    if (this.configuration.overrideConsole) {
      try {
        console = this;
      } catch (e) {
        // this.old_console.warn('Could not replace console. Please do it by yourself. We are working on that.')
      }
    }
  }
}

