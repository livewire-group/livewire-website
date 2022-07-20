const process = require('node:process');
const path = require('node:path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.join(__dirname, 'src', 'main.ts'),
		cms: path.join(__dirname, 'src', 'js', 'cms.js'),
	},

	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
	},

	resolve: {
		extensions: ['.wasm', '.mjs', '.json', '.js', '.jsx', '.ts', '.tsx'],
	},

	module: {
		rules: [
			{
				test: /\.((png)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[hash][ext][query]',
				},
			},
			{
				test: /\.((woff)|(woff2)|(ttf))(\?v=\d+\.\d+\.\d+)?$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[hash][ext][query]',
				},
			},
			{
				loader: 'babel-loader',
				test: /\.([jt])sx?$/,
				exclude: /node_modules/,
			},
			{
				test: /\.pcss$/,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
		],
	},

	plugins: [
		new AssetsPlugin({
			filename: 'webpack.json',
			path: path.join(process.cwd(), 'data'),
			prettyPrint: true,
		}),
		new HtmlWebpackPlugin({
			filename: 'admin/index.html',
			template: 'src/cms.html',
			inject: false,
		}),
	],
};
