const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// paths
const SRC = './app/src';
const ENTRY = `${SRC}/js/main`;
const BUILD = './app/build';

// util
const env = process.env.NODE_ENV || 'development';

// modules 
webpackConfig = {
	entry: [
		ENTRY
	],
	output: {
		path: path.join(__dirname, BUILD),
		publicPath : BUILD,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				include: path.join(__dirname, 'app/src/js')
			},
			{
				test    : /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader","sass-loader"]
				})
			},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "./app/"),
		publicPath: '/build/',
		compress: true,
		port: 3000
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "styles.css",
			allChunks: true
		})
	]
}

module.exports = webpackConfig;