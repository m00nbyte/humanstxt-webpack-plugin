# humanstxt-webpack-plugin

[![NPM version](https://img.shields.io/npm/v/@m00nbyte/humanstxt-webpack-plugin.svg)](https://www.npmjs.org/package/@m00nbyte/humanstxt-webpack-plugin)

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

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
