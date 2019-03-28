export class MethodAdvancedConfiguration {
  constructor(
    public hide?: boolean,
    public css?: string,
    public customHandles?: any,
  ) { }
}

export type MethodConfiguration = undefined | boolean | MethodAdvancedConfiguration;

export class ConfigurationModel {
  public environment?: string;
  public debug?: MethodConfiguration;
  public info?: MethodConfiguration;
  public log?: MethodConfiguration;
  public error?: MethodConfiguration;
  public warn?: MethodConfiguration;
  public customHandles?: any;

  constructor(config?: ConfigurationModel) { Object.assign(this, config || {}); }
}