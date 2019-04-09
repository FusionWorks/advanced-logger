# @FusionWorks/advanced-logger

![GitHub package.json version](https://img.shields.io/github/package-json/v/FusionWorks/advanced-logger.svg?label=Version)
[![npm downloads](https://img.shields.io/npm/dm/@fusionworks/advanced-logger.svg)](https://npmjs.org/@fusionworks/advanced-logger)
[![Coverage Status](https://coveralls.io/repos/github/grigoreme/advanced-logger/badge.svg?branch=master)](https://coveralls.io/github/grigoreme/advanced-logger?branch=master) 

Advanced logger which can replace default console but are higly customizable.

`advanced-logger` is an javascript solution for presenting large amount of logging tasks. The logger was designed to be extremely flexible and light; it doesn't require you to replace original console with it but its design to.

It was built for modern browsers using _TypeScript_.

## Features

- Handle large amount of logs by one configuration.
- Expressive configuration for each method apart.
- Custom styles for each method apart.
- Custom prefix/postfix for each method apart.
- Custom standalon configuration for unique call.

## Features todo

- AoT Compilation Support
- Handle arrays by configuration and display them as `console.table` instead of `console.log`

## Installation

To use advanced-logger in your project install it via [npm](https://www.npmjs.com/package/@fusionworks/advanced-logger):

```
npm i @fusionworks/advanced-logger --save
```

Get to some entry point at your project and init by next syntax:

```JAVASCRIPT
import { Console } from '@fusionworks/advanced-logger';
// For nodeJs will be `const { Console } = require('@fusionworks/advanced-logger');`

console = new Console();

console.log('thats just a log');
console.warn('thats just a warn');
console.info('thats just a info');
console.error('thats just a error');
console.debug('thats just a debug');
```

## Configuration

Console class has several configurations which are given by `new Console(config)` or `console.update(config);`

Configuration model is:

```Typescript
{
  public debug?: {
    public hide?: boolean,
    public css?: string,
    public prefix?: string | string[],
    public sufix?: string | string[],
  };
  public info?: {
    public hide?: boolean,
    public css?: string,
    public prefix?: string | string[],
    public sufix?: string | string[],
  };
  public log?: {
    public hide?: boolean,
    public css?: string,
    public prefix?: string | string[],
    public sufix?: string | string[],
  };
  public error?: {
    public hide?: boolean,
    public css?: string,
    public prefix?: string | string[],
    public sufix?: string | string[],
  };
  public warn?: {
    public hide?: boolean,
    public css?: string,
    public prefix?: string | string[],
    public sufix?: string | string[],
  };
  public hide?: boolean,
  public css?: string,
  public prefix?: string | string[],
  public sufix?: string | string[],
}
```

Here are some example of configuration you may use.

### Usage

```Typescript
import { Console, ConfigurationModel } from '@fusionworks/advanced-logger';

const configuration: ConfigurationModel = {
  debug: {
    css: 'color: blue',
    hide: false, // default
    prefix: '[debug]',
    sufix: '[post-debug]',
  },
  info: {
    css: 'color: green',
    hide: false, // default
    prefix: '[info]',
    sufix: '[post-info]',
  },
  log: {
    css: 'color: black',
    hide: false, // default
    prefix: '[log]',
    sufix: '[post-log]',
  },
  error: {
    css: 'color: red',
    hide: false, // default
    prefix: '[error]',
    sufix: '[post-error]',
  },
  warn: {
    css: 'color: yellow',
    hide: false, // default
    prefix: '[warn]',
    sufix: '[post-warn]',
  },
  // Global configuration
  // will be used for those method which has no configuration
  hide: false, // default
  css: 'color: black',
  prefix: '[DEFAULT-PREFIX]',
  sufix: '[DEFAULT-SUFIX]',
};

console = new Console(configuration);
```

### Override configuration

Configuration can be overrided:

```Typescript
  const newConfig = { log: false };
  // This will override only configuration for console
  // it means that any other configuration will be the same.
  console.update(newConfig);

  // If you want to fully override configuration you must
  console.update(newConfig, true);
```

### Clone console instance

To create copy based on old instance of console.

```Typescript
  const newConfig = { log: false };
  // This will create new instance of console
  const anotherConsole = console.standalone(newConfig);

  // To override configuration of new instance
  // Better use new Console(newConfig) instead.
  const anotherConsole = console.standalone(newConfig, true);

  // Also you can use it as one-time function
  console.standalone({css: 'background: green;'}).log('Hello green world!');
```

## Testing

You can test it out by running

- `cd demo`
- `npm install`
- `node index` for latest released version.  
  OR
- `node demo` for current source code.
