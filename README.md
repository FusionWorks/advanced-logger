# @FusionWorks/advanced-logger

![GitHub package.json version](https://img.shields.io/github/package-json/v/FusionWorks/advanced-logger.svg?label=Version)
[![npm downloads](https://img.shields.io/npm/dm/@fusionworks/advanced-logger.svg)](https://npmjs.org/@fusionworks/advanced-logger)

Advanced logger which can replace default console but are higly customizable.

`advanced-logger` is an javascript solution for presenting large amount of logging tasks. The logger was designed to be extremely flexible and light; it doesn't require you to replace original console with it but its design to.

It was built for modern browsers using _TypeScript_.

## Features
- Handle large amount of logs by one configuration.
- Expressive configuration for each method apart.
- Custom styles for each method apart.

## Features todo
- Custom prefix/postfix for each method apart.
- Custom standalon configuration for unique call.
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

const console = window.console = new Console();

console.log('thats just a log');
console.warn('thats just a warn');
console.info('thats just a info');
console.error('thats just a error');
console.debug('thats just a debug');
```
