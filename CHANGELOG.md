# Change log

## [2.6.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.6.0)
#### 15/05/2019

### Updated

* Wepback configuration - use `path.resolve` in all file system references.
* Package dependencies
  * Downgraded `clean-webpack-plugin` from `2.0.1` to `1.0.1` (breaking changes, see the updated `webpack.config.js`) due to strange behaviour during `watch` mode.
* Package dependencies trees
* README - _added additional note for NFS and containerized development environments_


## [2.5.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.5.0)
#### 22/04/2019

### Updated

* Switched to using `npm ci` instead of `npm install` for initial install.
  * Updated README
  * More on the clean install npm command can be read yere [`npm ci`](https://docs.npmjs.com/cli/ci.html)
* NPM audit review and dependency packages updates due to reverting them accidentally
  * Updated `tar` to `4.4.2` dependency path `node-sass > node-gyp > tar` - [more info](https://npmjs.com/advisories/803)
  * Updated `braces` to `2.3.2` dependency path `browser-sync > micromatch > braces` - [more info](https://npmjs.com/advisories/786)

## [2.4.3](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.4.3)
#### 22/04/2019

### Updated

* NPM audit review and dependency packages updates
  * Updated `tar` to `4.4.2` dependency path `node-sass > node-gyp > tar` - [more info](https://npmjs.com/advisories/803)
  * Updated `braces` to `2.3.2` dependency path `browser-sync > micromatch > braces` - [more info](https://npmjs.com/advisories/786)

## [2.4.2](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.4.2)
#### 17/04/2019

### Added

* Issue Template
* Pull Request Template

### Updated

* Package dependencies
  * `clean-webpack-plugin` from `1.0.1` to `2.0.1` (breaking changes, see the updated `webpack.config.js`)
  * `copy-webpack-plugin` from `4.6.0` to `5.0.2`
  * `mini-css-extract-plugin` from `0.5.0` to `0.6.0`
* Package dependencies trees
* README

## [2.4.1](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.4.1)
#### 14/04/2019

### Updated

* NPM audit review and dependency packages updates
  * Auto fixing with `npm audit fix`
  * Manually updated
    * updated `tar` to `4.4.2` dependency path `node-sass > node-gyp > tar` - [more info](https://npmjs.com/advisories/803)
    * updated `braces` to `2.3.2` dependency path `browser-sync > micromatch > braces` - [more info](https://npmjs.com/advisories/786)
* _README_ file updated
  * Added instructions hot to update/migrate to newer version of this setup.

## [2.4.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.4.0)
#### 08/01/2019

### Added

* [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) to copy images that are part of the content (_referenced by `<img>` tags_)
* [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) to optimize JavaScript files for production
  * This plugin is dependency of `webpack` itself
* Support for favicon in the produced HTML

### Updated

* README
* Dependencies

### Removed

* `uglifyjs-webpack-plugin` - in favor of the webpack included `terser-webpack-plugin`

## [2.3.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.3.0)
#### 03/01/2019

### Added

* NPM package `bundle` script which runs `install` and `watch` tasks in a single call.

### Updated

* README file
* Packages
  * `eslint-plugin-react@7.12.2`
  * `webpack-cli@3.2.0`
 
## [2.2.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.2.0)
#### 02/01/2019

### Added

* _Minify_ and _Uglify_ js `webpack` plugin - [uglifyjs-webpack-plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin) due to not consistent behavuour of the built-in webpack
js minimization features

### Updated

* `autoprefixer` package

### Removed

* `uglify-es` package


## [2.1.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.1.0)
#### 31/12/2018

### Added

* [MIT](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/blob/master/LICENSE) License

### Updated

* [README](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/blob/master/README.md) - more detailed setup and usage instructions 
* Webpack `4.28.3`
* NPM Audit fixed packages, after running `npm audit fix`

> fixed 35 of 35 vulnerabilities in 9452 scanned packages

## [2.0.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.0.0)
#### 14/12/2018

### Added

* Support for HTML template loading
  * Default template included that illustrates custom font and image loaders

### Updated

* Support for `Webpack 4`
* Support for `Babel 7`
  * Added `.babelrc` file for preset definitions
* Cleanup of dist directory upon build

### Removed

* `jQuery` - it can be added per project basis if needed;

## [1.2.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v1.2.0)
#### 14/12/2018

### Updated

* Package dependencies
* _README_ file with information how to run js/css code linters
* Code style changes
* Package dependencies divided to dev and non-dev packages
* Default package name

## [1.1.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v1.1.0)
#### 10/07/2017

### Added

* Support for jQuery

## [1.0.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v1.0.0)
#### 03/07/2017

* Initial Release
