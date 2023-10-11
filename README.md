# Webpack 5 Boilerplate Template

![Maintenance](https://img.shields.io/maintenance/yes/2023?logo=github)
![Build Status](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/actions/workflows/deploy.yml/badge.svg)
![webpack-current](https://img.shields.io/badge/webpack-v5.88.2-green?logo=webpack)
![node-current (scoped)](https://img.shields.io/node/v/@weareathlon/frontend-webpack-boilerplate)
[![@weareathlon/frontend-webpack-boilerplate](https://snyk.io/advisor/npm-package/@weareathlon/frontend-webpack-boilerplate/badge.svg)](https://snyk.io/advisor/npm-package/@weareathlon/frontend-webpack-boilerplate)
[![GitHub Issues](https://img.shields.io/github/issues-raw/WeAreAthlon/frontend-webpack-boilerplate)](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/issues)
[![Known Vulnerabilities](https://snyk.io/test/github/WeAreAthlon/frontend-webpack-boilerplate/badge.svg?targetFile=package.json)](https://snyk.io/test/github/WeAreAthlon/frontend-webpack-boilerplate?targetFile=package.json)
[![npm](https://img.shields.io/npm/dm/@weareathlon/frontend-webpack-boilerplate)](https://www.npmjs.com/package/@weareathlon/frontend-webpack-boilerplate)
[![GitHub License](https://img.shields.io/github/license/WeAreAthlon/frontend-webpack-boilerplate)](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/blob/master/LICENSE)

![Front-end Webpack Boilerplate](https://repository-images.githubusercontent.com/96102257/4be7b600-61f1-11e9-9ebf-67b17d5ba125)

## Demo

* [Demo page demonstrating building - SASS, JavaScript, Images, Fonts, HTML](https://weareathlon.github.io/frontend-webpack-boilerplate/)

Table of Contents
=================

   * [Webpack 5 Boilerplate Template](#webpack-5-boilerplate-template)
      * [Demo](#demo)
      * [Features](#features)
      * [Requirements](#requirements)
   * [Setup](#setup)
      * [Installation](#installation)
      * [Define Package Metadata](#define-package-metadata)
   * [Configuration](#configuration)
      * [Environment Configuration](#environment-configuration)
      * [Additional webpack configuration](#additional-webpack-configuration)
   * [Development](#development)
      * [Assets Source](#assets-source)
      * [Build Assets](#build-assets)
         * [One time build assets for development](#one-time-build-assets-for-development)
         * [Build assets and enable source files watcher](#build-assets-and-enable-source-files-watcher)
         * [Start a development server - reloading automatically after each file change.](#start-a-development-server---reloading-automatically-after-each-file-change)
   * [Production](#production)
      * [Build Assets](#build-assets-1)
      * [Get Built Assets](#get-built-assets)
   * [Run Code Style Linters](#run-code-style-linters)
      * [SASS](#sass)
      * [JavaScript](#javascript)
   * [Additional Tools](#additional-tools)
      * [Run Assets Bundle Analyzer](#run-assets-bundle-analyzer)
      * [Continuous Integration](#continuous-integration)

## Features

* 0 dependencies
* **Simple setup** instructions
  * Start development of a project right away with **simple**, **configured**, **linter enabled**, **browser synced** asset files.
* Configuration per **environment**
  * `development` - [`sourcemaps`](https://webpack.js.org/configuration/devtool/), [`browser synced developmentment server`](https://webpack.js.org/configuration/dev-server/)
  * `production` - [`minification`](https://webpack.js.org/plugins/terser-webpack-plugin/), [`sourcemaps`](https://webpack.js.org/configuration/devtool/)
* Configurable **browsers versions support**. It uses [`browserslist`](https://github.com/browserslist/browserslist#full-list) - just specify the browsers you want to support in the `package.json` file for `browserslist`:

```js
"browserslist": [
    "last 2 versions",
    "> 5%"
]
```
* The built CSS / JavaScript files will respect the **configured supported browser versions** using the following tools:
  * [`autoprefixer`](https://github.com/postcss/autoprefixer) - automatically adds vendor prefixes to CSS rules
  * [`babel-preset-env`](https://babeljs.io/docs/en/babel-preset-env) - smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (*and optionally, browser polyfills*) are needed by your target environment(s).
* Demo project files to be used as a reference and **example demo** building of:
  * *JavaScript*
  * *SASS / PostCSS*
  * *HTML* templates
  * *Images* (*CSS backgrounds and image tags*)
  * *Videos*
  * *Fonts*
* Support for **assets optimization** for production environment with ability to configure:
  * **Code Minification** of *JavaScript* and *CSS* processed files.
  * **Optimize Assets Loading** - inline and embed **images** / **fonts** files having file size below a *configurable* threshold value.
  * **Images Optimisation** - optimize `jpeg`, `jpg`, `png`, `gif`, `svg` filesize and loading type via [`imagemin`](https://github.com/imagemin/imagemin). Plugin and Loader for webpack to optimize (*compress*) all images using `imagemin`. Do not worry about size of images, now they are always optimized/compressed.
* Support for **source code syntax style and formatting linters** that analyze source code to flag any programming errors, bugs, stylistic errors or suspicious constructs:
  * **SASS/PostCSS syntax cheker** - you can change or add additional rules in `.sasslintrc` file. Configuration options can be found on [`sass-lint`](https://github.com/sasstools/sass-lint/blob/master/lib/config/sass-lint.yml) documentation.
  * **JavaScript syntax checker** - following the `airbnb` style, you can review and configure the rules in `.eslintrc` file. Configuration options can be found on [`eslint`](https://eslint.org/docs/user-guide/configuring) documentation.
* Latest [Webpack 5](https://github.com/webpack/webpack) - *JavaScript* module bundler.
* Latest [SASS/PostCSS](https://github.com/sass/sass) compiler based on Dart `sass`.
* Latest [Babel 7](https://github.com/babel/babel) (`@babel/core`) - JavaScript compiler - _Use next generation JavaScript, today._
* Integration with [Github Actions](https://github.com/features/actions)
  * [Demo deployment available to GitHub pages](https://weareathlon.github.io/frontend-webpack-boilerplate/)
* Configured and ready to use **Webpack Dev Server** plugin for faster local development - [`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/)
* Integration with [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) - _Visualize size of webpack output files with an interactive zoomable treemap._

## Requirements

* `node` : `>=14`
* `npm`

# Setup

## Installation

1. Choose and download the latest template release from [List of Releases](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases).
2. Extract the release archive to a new directory, rename it to your project name and browse the directory.
3. Install all dependencies using `npm` *clean install* command. 

```sh 
$ npm ci
```

> More on the clean install npm command can be read here [`npm ci`](https://docs.npmjs.com/cli/ci.html)

> You can still use `npm install` in cases the `npm ci` raises system error due to specific platform incompatibilities.

## Define Package Metadata

* Amend `package.json` file and optionally specify:
  * `name` - Name of your project. A name can be optionally prefixed by a scope, e.g. `@myorg/mypackage`.
  * `version` - Specify and maintain a version number indicator for your project code.
  * `author` - Your organisation or just yourself. You can also specify [`contributors`](https://docs.npmjs.com/files/package.json#people-fields-author-contributors).
  * `description` - Short description of your project.
  * `keywords` - Put keywords in it. It’s an array of strings.
  * `repository` - Specify the place where your code lives.
  * `license` - Announce your code license, figure out the license from [Choose an Open Source License](https://choosealicense.com) .
  * `browserslist` - Specify the supported browsers versions - you can refer to [full list](https://github.com/browserslist/browserslist#full-list) of availalbe options.

# Configuration

## Environment Configuration

* Edit the [`configuration/environment.js`](configuration/environment.js) if you want to specify:
  * **`server`**: configure development server, specify `host`, `port`. Refer to the full development server configuration options for [`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/).
  * **`limits`**: configure file size thresholds for assets optimizations.
    * Image/Font files size in bytes. Below this value the image file will be served as Data URL (_inline base64_).
  * **`paths`**: `src` or `dist` directories names and file system location.

## Additional `webpack` configuration

You can additionally configure `webpack` for specific environment:
* `development` - [`configuration/webpack.dev.config.js`](configuration/webpack.dev.config.js)
* `production` - [`configuration/webpack.prod.config.js`](configuration/webpack.prod.config.js)
  * Note that if you prefer to build and deploy [`sourcemap`](https://webpack.js.org/configuration/devtool/#production) files:
> You should configure your server to disallow access to the _Source Map_ files for normal users!

# Development

## Assets Source

* **SASS/PostCSS** files are located under `src/scss/`
* **JavaScript** files with support of latest ECMAScript _ES6 / ECMAScript 2016(ES7)/ etc_ files are located under `src/js/`
* **Image** files are located under `src/images/`
* **Font** files are located under `src/fonts/`
* **HTML** files are located under `src/`
  * It will **automatically** build **all HTML files** placed under `src/` directory, no need to manually configure each template anymore!

## Build Assets

### One time build assets for development

```sh
$ npm run build
```

### Build assets and enable source files watcher

```sh
$ npm run watch
```

This command is suitable if you develop with external web server.

> **Note:** File watching does not work with *NFS* (*Windows*) and virtual machines under *VirtualBox*. Extend the configuration in such cases by:

```js
module.exports = {
  //...
  watchOptions: {
    poll: 1000 // Check for changes every second
  }
};
```

### Start a development server - reloading automatically after each file change.

```sh
$ npm run dev
```

# Production 

## Build Assets

Optimize assets for production by:

```sh
$ npm run production
```

## Get Built Assets

* _CSS_ files are located under `/dist/css/`
* _JavaScript_ files with support of _ES6 / ECMAScript 2016(ES7)_ files are located under `/dist/js/`
* _Images_ are located under `/dist/images/`
  * Images part of the _design_ (_usually referenced in the CSS_) are located under `/dist/images/design/`
  * Images part of the _content_ (_usually referenced via `<img>` tags_) are located under `/dist/images/content/`
* _Fonts_ are located under `/dist/fonts/`
* _HTML_ files are located under `/dist/`

# Run Code Style Linters

## SASS

```sh
$ npm run lint:sass
```
## JavaScript

```sh
$ npm run lint:js
```

# Additional Tools

## Run Assets Bundle Analyzer

```sh
$ npm run stats
```

> This will open the visualisaion on the default configuraiton URL `localhost:8888`, you can change this URL or port following the [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-cli) documentation.

## Continuous Integration

This boilerplate template contains integration with [Github Actions](https://github.com/features/actions/). The build system runs all linting scripts and deploys production optimized pages to _GitHub_ pages upon push to the `master` branch. However, note that this deployment flow only works for _Project Pages_, as User and Organization pages [only support the master branch flow](https://help.github.com/articles/user-organization-and-project-pages/).

For more information on how to set up alternative deployment processes, check out the [Github Actions documentation on deployment](https://docs.github.com/en/actions/deployment/about-deployments/deploying-with-github-actions). The service can deploy to dozens of cloud providers, including Heroku, AWS, and Firebase.
