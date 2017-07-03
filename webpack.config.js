/**
 * Assets Config file
 */

process.noDeprecation = true;

const localServer = {
  path: 'localhost/',
  port: 3000
};

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('webpack-uglifyes-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
  entry: {
    app: './src/js/app.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {name: 'images/[name].[hash:6].[ext]', publicPath: '../', limit: 8192}
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {name: 'fonts/[name].[hash:6].[ext]', publicPath: '../', limit: 8192}
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new BrowserSyncPlugin({
      proxy: localServer.path,
      port: localServer.port,
      files: [],
      ghostMode: {
        clicks: false,
        location: false,
        forms: false,
        scroll: false
      },
      injectChanges: true,
      logFileChanges: true,
      logLevel: 'debug',
      logPrefix: 'wepback',
      notify: true,
      reloadDelay: 0
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new UglifyJSPlugin(),
    new OptimizeCssAssetsPlugin()
  );
}

module.exports = config;
