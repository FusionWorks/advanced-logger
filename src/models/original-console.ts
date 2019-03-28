export abstract class OriginalConsole {
  public memory: any;
  public Console: any;
  public assert(condition?: boolean, message?: string, ...data: any[]): void { }
  public clear(): void { }
  public count(label?: string): void { }
  public debug(message?: any, ...optionalParams: any[]): void { }
  public dir(value?: any, ...optionalParams: any[]): void { }
  public dirxml(value: any): void { }
  public error(message?: any, ...optionalParams: any[]): void { }
  public exception(message?: string, ...optionalParams: any[]): void { }
  public group(groupTitle?: string, ...optionalParams: any[]): void { }
  public groupCollapsed(groupTitle?: string, ...optionalParams: any[]): void { }
  public groupEnd(): void { }
  public info(message?: any, ...optionalParams: any[]): void { }
  public log(message?: any, ...optionalParams: any[]): void { }
  public profile(reportName?: string): void { }
  public profileEnd(reportName?: string): void { }
  public table(...tabularData: any[]): void { }
  public time(label?: string): void { }
  public timeEnd(label?: string): void { }
  public timeStamp(label?: string): void { }
  public timeline(label?: string): void { }
  public timelineEnd(label?: string): void { }
  public markTimeline(label?: string): void { }
  public timeLog(label?: string): void { }
  public countReset(label?: string): void { }
  public trace(message?: any, ...optionalParams: any[]): void { }
  public warn(message?: any, ...optionalParams: any[]): void { }
}