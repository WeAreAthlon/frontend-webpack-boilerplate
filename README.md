# Front-end Webpack Boilerplate

## Managing assets ##

### Define Package Metadata

* Amend `package.json`
    * Specify your project package name.
    * Specify your project package version.
    * Specify your project package description.
    * Specify your project package repository url.
    * Specify your project package license.
* Configure `webpack.config.js`
    * Define at the beginning of the file the server path to your project location.

```js
const localServer = {
  path: 'localhost/',
  port: 3000
};
```

### Assets Source

* _SASS_ files are located under `/src/scss/`
* _JavaScript_ files with support of _ES6_ files are located under `/src/js/`
* _Images_ are located in `/src/images/`
* _Fonts_ are located in `/src/fonts/`

### Run Code Style Linters

* _SASS_ - `npm run lint-sass`
* _JS_ - `npm run lint-js`

### Build Assets

* Execute `npm install`
* Execute `npm run build`
* Enable source files watching `npm run watch` (*Define any other files that needs syncing in `files:[]` section under `BrowserSyncPlugin` in `webpack.config.js`*)
* Optimize assets for production with `npm run production`

### Processed Assets

* _CSS_ files are located under `/dist/css/`
* _JavaScript_ files with support of _ES6_ files are located under `/dist/js/`
* _Images_ are located in `/dist/images/`
* _Fonts_ are located in `/dist/fonts/`
