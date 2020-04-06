# Webpack 4 Boilerplate

[![GitHub Version](https://badge.fury.io/gh/weareathlon%2Ffrontend-webpack-boilerplate.svg)](https://badge.fury.io/gh/weareathlon%2Ffrontend-webpack-boilerplate)
[![Build Status](https://api.travis-ci.org/weareathlon/frontend-webpack-boilerplate.svg?branch=master)](https://travis-ci.org/weareathlon/frontend-webpack-boilerplate)
[![GitHub Issues](https://img.shields.io/github/issues-raw/WeAreAthlon/frontend-webpack-boilerplate)](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/issues)
[![Known Vulnerabilities](https://snyk.io/test/github/WeAreAthlon/frontend-webpack-boilerplate/badge.svg?targetFile=package.json)](https://snyk.io/test/github/WeAreAthlon/frontend-webpack-boilerplate?targetFile=package.json)
[![Dependency Status](https://david-dm.org/WeAreAthlon/frontend-webpack-boilerplate.svg)](https://david-dm.org/WeAreAthlon/frontend-webpack-boilerplate) 
[![devDependency Status](https://david-dm.org/WeAreAthlon/frontend-webpack-boilerplate/dev-status.svg)](https://david-dm.org/WeAreAthlon/frontend-webpack-boilerplate?type=dev)
[![npm](https://img.shields.io/npm/dm/@weareathlon/frontend-webpack-boilerplate)](https://www.npmjs.com/package/@weareathlon/frontend-webpack-boilerplate)
[![GitHub License](https://img.shields.io/github/license/WeAreAthlon/frontend-webpack-boilerplate)](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/blob/master/LICENSE)

![Front-end Webpack Boilerplate](https://repository-images.githubusercontent.com/96102257/4be7b600-61f1-11e9-9ebf-67b17d5ba125)

## Features

* **Simple setup** instructions
  * Start development of a project right away with *simple*, *configured*, *browser synced*, *linter monitored* asset files.
* Integration with [Travis CI](https://travis-ci.org/)
  * [Demo deployment available to github pages](https://weareathlon.github.io/frontend-webpack-boilerplate/)
* Example assets directory for reference and **demo** building of:
  * *JavaScript*
  * *SASS*
  * *Images*
  * *Fonts*
* Support for **assets optimization** for production:
  * **Minification** of *JavaScript* and *CSS* files.
  * **Inline** **images** / **fonts** files having file size below a *configurable* threshold value.
* Code style and formatting **linters** configuration and setup for:
  * *SASS*
  * *JavaScript*
* Latest [Webpack 4](https://github.com/webpack/webpack) - *JavaScript* module bundler.
* Latest [SASS/CSS](https://github.com/sass/node-sass) compiler based on `node-sass` which provides bindings to `libsass`.
* Latest [Babel 7](https://github.com/babel/babel) (`@babel/core`) - JavaScript compiler - _Use next generation JavaScript, today._
* Configured and ready to use **BrowserSync** plugin - `browser-sync-webpack-plugin`

## Requirements

* `node` **>=** `10.13.0`
* `npm`

# Setup

## Installation

1. Choose and download the template from [List of Releases](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases).
2. Extract the release archive to a new directory, rename it to your project name and browse the directory.
3. Install all dependencies using `npm` clean install. 

```sh 
$ npm ci
```

> More on the clean install npm command can be read yere [`npm ci`](https://docs.npmjs.com/cli/ci.html)

> You can still use `npm install` in cases the `npm ci` raises system error due to specific platfrom incompatibilities.

## Define Package Metadata

* Amend `package.json` file and optionally specify:
    * `name` - Name of your project. A name can be optionally prefixed by a scope, e.g. `@myorg/mypackage`.
    * `version` - Specify and maintain a version number indicator for your project code.
    * `author` - Your organisation or just yourself. You can also specify [`contributors`](https://docs.npmjs.com/files/package.json#people-fields-author-contributors).
    * `description` - Short description of your project.
    * `keywords` - Put keywords in it. It’s an array of strings.
    * `repository` - Specify the place where your code lives.
    * `license` - Announce your code license, figure out the license from [Choose an Open Source License](https://choosealicense.com) .
    * `engines` - Specify the version of `node` that your stuff works on.
* Configure `webpack.config.js`
  * You can either use the default built-in internal serving capabilities of `browser-sync` package or configure to use an external already running server of your existing web back-end powered application.
    
```js
const serverConfiguration = {
  internal: {
    server: {
      baseDir: 'dist',
    },
    port: 3000,
  },
  external: {
    proxy: 'http://localhost:9000/path/to/project/',
  },
};
```

## Development / Build Assets

### Assets Source

* _SASS_ files are located under `/src/scss/`
* _JavaScript_ files with support of _ES6 / ECMAScript 2016(ES7)_ files are located under `/src/js/`
* _Image_ files are located under `/src/images/`
* _Font_ files are located under `/src/fonts/`
* _HTML_ files are located under `/src/`

### Build Assets

```sh
$ npm run build
```

### Enable Source Files Watcher

```sh
$ npm run watch
```

> Define any other files that needs syncing in `files:[]` section under `BrowserSyncPlugin` in `webpack.config.js`

*BrowserSync UI* can be reached by default on this location: http://localhost:3001

### Enable Source Files Watcher Using an Existing Webserver

```sh
$ npm run watch:externalServer
```

Configure the URL to your running external web server in the `webpack.config.json` project under:

```js
const serverConfiguration = {
  // ...,
  external: {
    proxy: 'http://localhost:3000/path/to/project/',
  },
};
```

> Define any other files that needs syncing in `files:[]` section under `BrowserSyncPlugin` in `webpack.config.js`

*Note:* Watching does not work with *NFS* (*Windows*) and machines in *VirtualBox*. Extend the configuration in such cases by:

```js
module.exports = {
  //...
  watchOptions: {
    poll: 1000 // Check for changes every second
  }
};
```

### Bundle

Executes both `install` and `watch` tasks in a single command convenient for development:

```sh
$ npm run bundle
```

### Bundle (using exterinal server for preview)

Executes both `install` and `watch:externalServer` tasks in a single command convenient for development with existing webserver back-end powered application:

```sh
$ npm run bundle:externalServer
```

## Production / Build Assets

* Optimize assets for production by:

```sh
$ npm run production
```

## Processed Built Assets

* _CSS_ files are located under `/dist/css/`
* _JavaScript_ files with support of _ES6 / ECMAScript 2016(ES7)_ files are located under `/dist/js/`
* _Images_ are located under `/dist/images/`
  * Images part of the _design_ (_usually referenced in the CSS_) are located under `/dist/images/design/`
  * Images part of the _content_ (_usually referenced via `<img>` tags_) are located under `/dist/images/content/`
* _Fonts_ are located under `/dist/fonts/`
* _HTML_ files are located under `/dist/`

## Run Code Style Linters

* **SASS**

```sh
$ npm run lint-sass
```
* **JS**

```sh
$ npm run lint-js
```

## Continuous Integration

This boilerplate template contains integration with [Travis CI](https://travis-ci.org/). The build system runs all linting scripts and deploys production optimized pages to _GitHub_ pages upon push to the `master` branch. However, note that this deployment flow only works for _Project Pages_, as User and Organization pages [only support the master branch flow](https://help.github.com/articles/user-organization-and-project-pages/).

For more information on how to set up alternative deployment processes, check out the [Travis CI documentation on deployment](https://docs.travis-ci.com/user/deployment). The service can deploy to dozens of cloud providers, including Heroku, AWS, and Firebase.
