/**
 * Assets Config file
 */

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

const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;

let targetServerConfiguration = serverConfiguration.internal;

const config = function(env, args) {
  if (args.externalServer !== undefined && args.externalServer) {
    targetServerConfiguration = serverConfiguration.external;
  }

  return {
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
        new TerserPlugin({
          parallel: true,
        }),
        new OptimizeCssAssetsPlugin({}),
      ],
    },
    watchOptions: {
      poll: 1000,
      ignored: /node_modules/,
    },
    plugins: [
      new BrowserSyncPlugin({
        ...targetServerConfiguration,
        files: ['src/*'],
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
      new HtmlWebpackPlugin({
        inject: true,
        hash: false,
        filename: 'index.html',
        template: path.resolve(__dirname, 'src', 'index.html'),
        favicon: path.resolve(__dirname, 'src', 'images', 'favicon.ico'),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
      new ImageMinPlugin({ test: /\.(jpg|jpeg|png|gif|svg)$/i }),
      new CleanWebpackPlugin({
        /**
         * Some plugins used do not correctly save to webpack's asset list.
         * Disable automatic asset cleaning until resolved
         */
        cleanStaleWebpackAssets: false,
        verbose: true,
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'src', 'images', 'content'),
          to: path.resolve(__dirname, 'dist', 'images', 'content'),
          toType: 'dir',
        },
      ]),
    ],
  };
};

module.exports = config;
