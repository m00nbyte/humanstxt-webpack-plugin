# humanstxt-webpack-plugin

[![npm version](https://img.shields.io/npm/v/@m00nbyte/humanstxt-webpack-plugin.svg)](https://www.npmjs.org/package/@m00nbyte/humanstxt-webpack-plugin)
[![npm downloads](https://img.shields.io/npm/dm/@m00nbyte/humanstxt-webpack-plugin)](https://www.npmjs.org/package/@m00nbyte/humanstxt-webpack-plugin)

Webpack plugin for [generate-humanstxt](https://github.com/m00nbyte/generate-humanstxt/)

## Getting Started

```shell
npm install --save-dev @m00nbyte/humanstxt-webpack-plugin
```

## Usage

**webpack.config.js**

```js
const HumansTxtPlugin = require('@m00nbyte/humanstxt-webpack-plugin');

const options = {};

module.exports = {
    plugins: [new HumansTxtPlugin(options)]
};
```

## Options

-   `path` - optional path for humans.txt (this should contain the full path including the file name, example: `/path/to/humans.txt`).
-   `options` - see [generate-humanstxt](https://github.com/m00nbyte/generate-humanstxt) options.

## Related

-   [generate-humanstxt](https://github.com/m00nbyte/generate-humanstxt) - api for this package.

## Contribution

Feel free to submit issues or pull requests.

## Like my work?

This project needs a :star: from you.
Don't forget to leave a star.

<a href="https://www.buymeacoffee.com/m00nbyte" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="217" height="60">
</a>

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
