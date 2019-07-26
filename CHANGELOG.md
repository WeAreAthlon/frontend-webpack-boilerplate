# Change log

## [3.2.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v3.1.0)
### 26/07/2019

### Package Updates

* `@babel/core@7.5.5` new features can be found on the official [release notes](https://github.com/babel/babel/releases/tag/v7.5.5)
* `@babel/preset-env@7.5.5` new features can be found on the official [release notes](https://github.com/babel/babel/releases/tag/v7.5.5)
* `webpack@4.38.0` new features can be found on the official [release notes](https://github.com/webpack/webpack/releases/tag/v4.38.0)
* `css-loader@3.1.0` new features can be found on the official [release notes](https://github.com/webpack-contrib/css-loader/releases/tag/v3.1.0)
* `eslint-plugin-import@2.18.2` new features  can be found on the official [release notes](https://github.com/benmosher/eslint-plugin-import/releases/tag/v2.18.2)
* `eslint-plugin-react@7.14.3` new features can be found on the official [release notes](https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.14.3)
* `file-loader@4.1.0` new features can be found on the official [release notes](https://github.com/webpack-contrib/file-loader/releases/tag/v4.1.0)
* `url-loader@2.1.0` new features can be found on the official [release notes](https://github.com/webpack-contrib/url-loader/releases/tag/v2.1.0)

### Minor Package Updates

* `autoprefixer@9.6.1`
* `ajv@6.10.2`
* `eslint-config-airbnb@17.1.1`
* `eslint-plugin-react@7.14.3`
* `eslint-plugin-jsx-a11y@6.2.3`
* `optimize-css-assets-webpack-plugin@5.0.3`
* `webpack-cli@3.3.6`

## [3.1.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v3.1.0)
### 19/06/2019

### Package Updates

* `css-loader` updated to `3.0.0` here are the [release notes](https://github.com/webpack-contrib/css-loader/releases/tag/v3.0.0)  
* `url-loader` updated to `2.0.0` here are the [release notes](https://github.com/webpack-contrib/url-loader/releases/tag/v2.0.0)

### Minor Package Updates

* `browser-sync` to `2.26.7`
* `webpack` to `4.34.0`
* `webpack-cli` to `3.3.4`

## [3.0.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v3.0.0)
#### 15/05/2019

### Breaking Changes

* **Removed `node` 6 support**, `node` must be `>=8.9.0`
* `clean-webpack-plugin` to `v3.0.0` see changes here [Clean Wepback Plugin v3.0.0](https://github.com/johnagan/clean-webpack-plugin/releases/tag/v3.0.0)
  * Updated configuration in [`webpack.config.js`](./webpack.config.js)
* `file-loader` to `4.0.0` see changes here [Webpack file loader v4.0.0](https://github.com/webpack-contrib/file-loader/releases/tag/v4.0.0)
  
### Minor Package Updates

* `autoprefixer` to `9.6.0`
* `@babel/core` to `7.4.5`
* `@babel/preset-env` to `7.4.5`
* `eslint-plugin-import` to `2.17.3`
* `mini-css-extract-plugin` to `0.7.0`
* `terser-webpack-plugin` to `1.3.0`
* `webpack` to `4.33.0`
  
### Security audit fixes

* `axios` (*dependency of browser-sync [dev]*) updated to `0.18.11` [more info](https://npmjs.com/advisories/880)
* `npm audit` output:

>  === npm audit security report ===                        
>                                                                                  
>  found 0 vulnerabilities
>   in 17859 scanned packages

## [2.6.1](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.6.1)
#### 15/05/2019

### Updated

* Security audit fixes
  * `fstream` updated to `1.0.12` [more info](https://npmjs.com/advisories/886)
  * `tar` updated to `2.2.2` [more info](https://nvd.nist.gov/vuln/detail/CVE-2018-20834)

## [2.6.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.6.0)
#### 15/05/2019

### Updated

* `wepback` configuration - use `path.resolve` in all file system references.
* Package dependencies
  * Downgraded `clean-webpack-plugin` from `2.0.1` to `1.0.1` (breaking changes, see the updated `webpack.config.js`) due to strange behaviour during `watch` mode.
* Package dependencies trees
* README - _added additional note for NFS and containerized development environments_

## [2.5.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.5.0)
#### 22/04/2019

### Updated

* Switched to using `npm ci` instead of `npm install` for initial install.
  * Updated README
  * More on the clean install npm command can be read here [`npm ci`](https://docs.npmjs.com/cli/ci.html)
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
