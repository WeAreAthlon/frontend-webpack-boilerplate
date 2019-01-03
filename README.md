# Webpack 4 Boilerplate

[![Dependency Status](https://david-dm.org/WeAreAthlon/frontend-webpack-boilerplate.svg)](https://david-dm.org/WeAreAthlon/frontend-webpack-boilerplate) 
[![devDependency Status](https://david-dm.org/WeAreAthlon/frontend-webpack-boilerplate/dev-status.svg)](https://david-dm.org/WeAreAthlon/frontend-webpack-boilerplate?type=dev)

## Requirements

* `node` _>=_ `6.11.5`
* `npm`

## Setup

* Install dependencies

```sh 
$ npm install
```

## Define Package Metadata

* Amend `package.json` and specify:
    * `name`
    * `version`
    * `description`
    * `repository url`
    * `license`
* Configure `webpack.config.js`
    * Define at the beginning of the file the local web server path to your project location.

```js
const localServer = {
  path: 'localhost/',
  port: 3000
};
```

## Development / Build Assets

### Assets Source

* _SASS_ files are located under `/src/scss/`
* _JavaScript_ files with support of _ES6 / ECMAScript 2016(ES7)_ files are located under `/src/js/`
* _Image_ files are located under `/src/images/`
* _Font_ files are located under `/src/fonts/`
* _HTML_ files are located under `/src/` 

### Build assets:

```sh
$ npm run build
```

### Enable source files watcher

```sh
$ npm run watch
```

> Define any other files that needs syncing in `files:[]` section under `BrowserSyncPlugin` in `webpack.config.js`

### Bundle

Executes both `install` and `watch` tasks in a single command convenient for development:

```sh
$ npm run bundle
```

## Production / Build Assets

* Optimize assets for production by:

```sh 
$ npm run production
```

## Processed built assets

* _CSS_ files are located under `/dist/css/`
* _JavaScript_ files with support of _ES6 / ECMAScript 2016(ES7)_ files are located under `/dist/js/`
* _Images_ are located under `/dist/images/`
* _Fonts_ are located under `/dist/fonts/`
* _HTML_ files are located under `/dist/`

## Run Code Style Linters

* _SASS_

```sh
$ npm run lint-sass
```
* _JS_

```sh
$ npm run lint-js
```
