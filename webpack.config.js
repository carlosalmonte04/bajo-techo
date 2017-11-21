const path = require('path')
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack')


const DIST_DIR = path.resolve(__dirname, 'dist')
const SRC_DIR  = path.resolve(__dirname, 'src')

const config = {
	entry: ['whatwg-fetch', SRC_DIR + '/app/index.js'],
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
    })
  ],

	module: {
		loaders: [{
			test: /\.js?/,
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
			include: SRC_DIR,
			loaders: ['style-loader', 'css-loader', 'less-loader']
		},
    {
      test: /\.(woff|woff2|eot|ttf|otf|png|jpeg|jpg|gif|svg)$/,
			loader: "file-loader"
    }]
	},
}

module.exports = config