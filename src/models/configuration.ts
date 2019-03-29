export class MethodAdvancedConfiguration {
  constructor(
    public hide?: boolean,
    public css?: string,
    public prefix?: string | string[],
    public sufix?: string | string[],
  ) { }
}

export type MethodConfiguration = undefined | boolean | MethodAdvancedConfiguration;

export class ConfigurationModel extends MethodAdvancedConfiguration {
  public debug?: MethodConfiguration;
  public info?: MethodConfiguration;
  public log?: MethodConfiguration;
  public error?: MethodConfiguration;
  public warn?: MethodConfiguration;

  constructor(config?: ConfigurationModel) {
    super();
    Object.assign(this, config || {});
  }
}
