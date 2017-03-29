const path = require("path");
const webpack = require("webpack");
const hwp = require("html-webpack-plugin");

const VENDOR_LIBS = ['react', 'react-dom'];


module.exports = {

	entry: {
		bundle: "./index.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[chunkhash].js"
	},
	module: {
		rules: [
			{
				use: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "bundle"
		}),
		new hwp({
			template: "src/index.html"
		})
	]
	
}