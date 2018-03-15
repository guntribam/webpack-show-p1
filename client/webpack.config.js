const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');
const webpack = require('webpack')

let plugins = []

let SERVICE_URL = JSON.stringify('http://localhost:3000')

if(process.env.NODE_ENV === "production"){
	SERVICE_URL = JSON.stringify('http://bobmarley.com')
	plugins.push(new BabiliPlugin());
}
plugins.push(new webpack.DefinePlugin({SERVICE_URL}))

module.exports = {
	entry: './app-src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins
}