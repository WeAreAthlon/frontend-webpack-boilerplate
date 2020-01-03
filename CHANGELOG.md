# Change log

## [4.1.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.1.0)
### 03/01/2020

### Updates

* **Important** Updated `webpack` configuration to enable serving the webpack build files using the built-in serving functionality of the `browser-sync` package.
  * Ability to configure the usage of a demo built-in server or using an existing server via the proxy feature of `browser sync`
  * Definition of `serverConfiguration` object.
  * Configuration of `watchOptions` to support.
    * If watching does not work for you, try out this option. Watching does might work with *NFS* and machines in *VirtualBox*.
* New package npm command `npm run watch:externalServer` to monitor file changes when using an existing web application server, refer to the *README* for more details.
* New package npm command `npm run bundle:externalServer` to install and monitor file changes when using an existing web application server, refer to the *README* for more details.
* Package dependencies updates.
* _README_ file to note all configuration changes.

### Package Minor Updates

* `sass@1.24.1` change log can be found on the official [release notes](https://github.com/sass/dart-sass/releases/tag/1.24.1)
* `webpack@4.41.5` change log can be found on the official [release notes](https://github.com/webpack/webpack/releases/tag/v4.41.5)

## [4.0.1](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.0.1)
### 27/12/2019

### Updates

* Package dependencies
* _README_ file to note the minimal `node` version.

### Package Minor Updates

* `style-loader@1.1.2` change log can be found on the official [release notes](https://github.com/webpack-contrib/style-loader/releases/tag/v1.1.2)

## [4.0.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.0.0)
### 21/12/2019

### Breaking Changes

#### Updated minimum Node version

* Minimum required nodejs version is `10.13.0`
* Rebuild our `node-sass` by running

```shell script
$ npm rebuild node-sass
```

#### File Loader, URL Loader updates

* Rename the `esModules` option to `esModule`
* Switch to ES modules by default (the option `esModule` is `true` by default)

#### SASS Loader updates

* Move all sass (`includePaths`, `importer`, `functions`) options to the `sassOptions` option. The `functions` option can't be used as `Function`, you should use `sassOption` as `Function` to achieve this.
* The `data` option was renamed to the `prependData` option
* Default value of the `sourceMap` option depends on the `devtool` value (`eval`/`false` values don't enable source map generation)

#### Style Loader updates

* The `convertToAbsoluteUrls` option was removed, you don't need this anymore
* The `attrs` option was renamed to the `attributes` option
* The `transform` option was removed without replacement
* The `hmr` option was removed, `webpack` automatically inject HMR code when it is required (when the `HotModuleReplacementPlugin` plugin was used)
* The `sourceMap` option was removed. The loader automatically inject source maps if the previous loader emit them
* The `ref`/`unref` api methods were removed for `useable` loader, please use the `use`/`unuse` api methods
* The `style-loader/url` loader was removed in favor `injectType` option (look the documentation about the `injectType` option)
* The `style-loader/useable` loader was removed in favor `injectType` option (look the documentation about the `injectType` option)
* The `singleton` option was removed (look documentation about the `injectType` option)
* The `insertAt` option was removed in favor the `insert` option (look the documentation about the `insert` option and examples)
* The `insertInto` options was removed in favor the `insert` option (look the documentation about the `insert` option and examples)

### New dependencies

* [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) required by `eslint-config-airbnb@18.0.1`
* [`sass`](https://www.npmjs.com/package/sass) required by `sass-loader@8.0.0`
* [`fibers`](https://www.npmjs.com/package/fibers) required by `sass-loader@8.0.0`

### Packages major versions update

* `eslint` from `5.x` to `6.8.0` change log can be found on the official [release notes](https://github.com/eslint/eslint/releases/tag/v6.8.0)
* `eslint-config-airbnb` from `17.x` to `18` change log can be found on the official [release notes](https://github.com/airbnb/javascript/releases/tag/eslint-config-airbnb-v18.0.1)
* `file-loader` from `4.x` to `5.x` change log can be found on the official [release notes](https://github.com/webpack-contrib/file-loader/releases/tag/v5.0.2)
* `sass-loader` from `7.x` to `8.x` change log can be found on the official [release notes](https://github.com/webpack-contrib/sass-loader/releases/tag/v8.0.0)
* `style-loader` from `0.x` to `1.x` change log can be found on the official [release notes](https://github.com/webpack-contrib/style-loader/releases/tag/v1.1.1)
* `terser-webpack-plugin` from `1.x` to `2.x` change log can be found on the official [release notes](https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v2.3.1)
* `url-loader` from `2.x` to `3.x` change log can be found on the official [release notes](https://github.com/webpack-contrib/url-loader/releases/tag/v3.0.0)

### Packages minor versions update

* `mini-css@0.9.0` change log can be found on the official [release notes](https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v0.9.0)
* `browserslist@4.8.2` change log can be found on the official [release notes](https://github.com/browserslist/browserslist/releases/tag/4.8.2)
* `caniuse-lite@1.0.30001016` change log can be found on the official [release notes](https://github.com/ben-eb/caniuse-lite/releases)

## [3.3.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v3.3.0)
### 20/12/2019

### Package Updates Full Change Set

* `autoprefixer@9.7.3` new features can be found on the official [release notes](https://github.com/postcss/autoprefixer/releases/tag/9.7.3).
* `sass-loader@8.0.0` new features can be found on the official [release notes](https://github.com/webpack-contrib/sass-loader/releases/tag/v8.0.0).
* `copy-webpack-plugin@5.1.5` new features can be found on the official [release notes](https://github.com/webpack-contrib/copy-webpack-plugin/releases/tag/v5.1.5).
* `css-loader@3.4.0` new features can be found on the official [release notes](https://github.com/webpack-contrib/css-loader/releases/tag/v3.4.0).
* `file-loader@4.3.0` new features can be found on the official [release notes](https://github.com/webpack-contrib/file-loader/releases/tag/v4.3.0).
* `node-sass@4.13.0` new features can be found on the official [release notes](https://github.com/sass/node-sass/releases/tag/v4.13.0).
* `cross-env@5.2.1` new features can be found on the official [release notes](https://github.com/kentcdodds/cross-env/releases/tag/v6.0.3).
* `eslint-plugin-react@7.17.0` new features can be found on the official [release notes](https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.17.0).
* `eslint-plugin-import@2.19.1` new features can be found on the official [release notes](https://github.com/benmosher/eslint-plugin-import/releases/tag/v2.19.1).
* `url-loader@2.3.0` new features can be found on the official [release notes](https://github.com/webpack-contrib/url-loader/releases/tag/v2.3.0).
* `terser-webpack-plugin@1.4.3` new features can be found on the official [release notes](https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v1.4.3).
* `webpack@4.41.4` new features can be found on the official [release notes](https://github.com/webpack/webpack/releases/tag/v4.41.4).
* `webpack-cli@3.3.10` new features can be found on the official [release notes](https://github.com/webpack/webpack-cli/releases/tag/v3.3.10).
* `@babel/preset-env@7.7.7` new features can be found on the official [release notes](https://github.com/babel/babel/releases/tag/v7.7.7).
* `@babel/core@7.7.7` new features can be found on the official [release notes](https://github.com/babel/babel/releases/tag/v7.7.7).

## [3.2.0](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v3.1.0)
### 26/07/2019

### Package Updates

* `@babel/core@7.5.5` new features can be found on the official [release notes](https://github.com/babel/babel/releases/tag/v7.5.5).
* `@babel/preset-env@7.5.5` new features can be found on the official [release notes](https://github.com/babel/babel/releases/tag/v7.5.5).
* `webpack@4.38.0` new features can be found on the official [release notes](https://github.com/webpack/webpack/releases/tag/v4.38.0).
* `css-loader@3.1.0` new features can be found on the official [release notes](https://github.com/webpack-contrib/css-loader/releases/tag/v3.1.0).
* `eslint-plugin-import@2.18.2` new features  can be found on the official [release notes](https://github.com/benmosher/eslint-plugin-import/releases/tag/v2.18.2).
* `eslint-plugin-react@7.14.3` new features can be found on the official [release notes](https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.14.3).
* `file-loader@4.1.0` new features can be found on the official [release notes](https://github.com/webpack-contrib/file-loader/releases/tag/v4.1.0).
* `url-loader@2.1.0` new features can be found on the official [release notes](https://github.com/webpack-contrib/url-loader/releases/tag/v2.1.0).

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

* `css-loader` updated to `3.0.0` here are the [release notes](https://github.com/webpack-contrib/css-loader/releases/tag/v3.0.0). 
* `url-loader` updated to `2.0.0` here are the [release notes](https://github.com/webpack-contrib/url-loader/releases/tag/v2.0.0).

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
