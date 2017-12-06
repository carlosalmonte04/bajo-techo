const path = require('path')
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const DIST_DIR = path.resolve(__dirname, 'dist')
const SRC_DIR  = path.resolve(__dirname, 'src')

const config = {
 entry: ['whatwg-fetch', SRC_DIR + '/app/index'],
 output: {
  path: DIST_DIR + '/app',
  filename: 'bundle.js',
  publicPath: '/app/'
 },
 devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv({
      path: './.env', // Path to .env file (this is the default) 
      systemvars: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      cache: true,
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
 module: {
  loaders: [{
   test: /\.(js?|jsx?)$/,
   include: SRC_DIR,
   loader: 'babel-loader',
   query: {
    presets: ['es2015', 'react', 'stage-2']
   }
  },
  {
   test: /\.less?/,
   include: SRC_DIR,
   loaders: ['style-loader', 'css-loader', 'less-loader']
  },
  {
   test: /\.css?/,
   include: [SRC_DIR, /node_modules/],
   loaders: ['style-loader', 'css-loader', 'less-loader']
  },
    {
      test: /\.(woff|woff2|eot|ttf|otf|png|jpeg|jpg|gif|webp|vwebp|svg)$/,
      loaders: [
        'file-loader', {
          loader: 'image-webpack-loader',
          options: {
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 7,
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            // Specifying webp here will create a WEBP version of your JPG/PNG images
            webp: {
              quality: 75
            }
          }
        }
      ]
    }]
 },
  resolve: {
    extensions: ['*', '.js', '.jsx', './HOCs/*.jsx']
  }
}
module.exports = config
