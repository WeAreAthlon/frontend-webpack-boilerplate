/**
 * Assets Config file
 */

const localServer = {
  path: 'localhost/dist/',
  port: 3000,
};

const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const config = {
  entry: {
    app: './src/js/app.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { name: 'images/design/[name].[hash:6].[ext]', publicPath: '../', limit: 8192 },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: { name: 'fonts/[name].[hash:6].[ext]', publicPath: '../', limit: 8192 },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: localServer.path,
      port: localServer.port,
      files: [],
      ghostMode: {
        clicks: false,
        location: false,
        forms: false,
        scroll: false,
      },
      injectChanges: true,
      logFileChanges: true,
      logLevel: 'debug',
      logPrefix: 'wepback',
      notify: true,
      reloadDelay: 0,
    }),
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', 'images', 'content'),
        to: path.resolve(__dirname, 'dist', 'images', 'content'),
        toType: 'dir',
      },
    ]),
    new ImageminPlugin({ test: /\.(jpg|jpeg|png|gif|svg)$/i }),
  ],
};

module.exports = config;
