import { DoFromConsole } from '../decorators/do-console.decotrator';

export class AbstractConsole {
  public memory: any;
  public Console: NodeJS.ConsoleConstructor | any;

  // Used by decorators for now
  protected old_console: WindowConsole | Console;

  constructor() {
    this.init();
  }

  protected init() {
    this.old_console = console;
  }

  @DoFromConsole()
  public assert(condition?: boolean, message?: string, ...data: any[]): void { }

  @DoFromConsole()
  public clear(): void { }

  @DoFromConsole()
  public count(label?: string): void { }

  @DoFromConsole()
  public debug(message?: any, ...optionalParams: any[]): void { }

  @DoFromConsole()
  public dir(value?: any, ...optionalParams: any[]): void { }

  @DoFromConsole()
  public dirxml(value: any): void { }

  @DoFromConsole()
  public error(message?: any, ...optionalParams: any[]): void { }

  @DoFromConsole()
  public exception(message?: string, ...optionalParams: any[]): void { }

  @DoFromConsole()
  public group(groupTitle?: string, ...optionalParams: any[]): void { }

  @DoFromConsole()
  public groupCollapsed(groupTitle?: string, ...optionalParams: any[]): void { }

  @DoFromConsole()
  public groupEnd(): void { }

  @DoFromConsole()
  public info(message?: any, ...optionalParams: any[]): void { }

  @DoFromConsole()
  public log(message?: any, ...optionalParams: any[]): void { }

  @DoFromConsole()
  public profile(reportName?: string): void { }

  @DoFromConsole()
  public profileEnd(reportName?: string): void { }

  @DoFromConsole()
  public table(...tabularData: any[]): void { }

  @DoFromConsole()
  public time(label?: string): void { }

  @DoFromConsole()
  public timeEnd(label?: string): void { }

  @DoFromConsole()
  public timeStamp(label?: string): void { }

  @DoFromConsole()
  public timeline(label?: string): void { }

  @DoFromConsole()
  public timelineEnd(label?: string): void { }

  @DoFromConsole()
  public markTimeline(label?: string): void { }

  @DoFromConsole()
  public timeLog(label?: string): void { }

  @DoFromConsole()
  public countReset(label?: string): void { }

  @DoFromConsole()
  public trace(message?: any, ...optionalParams: any[]): void { }

  @DoFromConsole()
  public warn(message?: any, ...optionalParams: any[]): void { }
}