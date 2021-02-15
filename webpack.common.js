const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.join(__dirname, 'src', 'index.ts'),
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
				test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
				type: 'asset/resource',
			},
			{
				loader: 'babel-loader',
				test: /\.([jt])sx?$/,
				exclude: /node_modules/,
			},
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { sourceMap: false } },
					{ loader: 'postcss-loader', options: { sourceMap: false } },
					'sass-loader',
				],
			},
			{
				test: /\.pcss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { sourceMap: false } },
					{ loader: 'postcss-loader', options: { sourceMap: false } },
				],
			},
		],
	},

	plugins: [
		new AssetsPlugin({
			filename: 'webpack.json',
			path: path.join(process.cwd(), 'site/data'),
			prettyPrint: true,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './src/fonts/',
					to: 'fonts/[name].[ext]',
				},
			],
		}),
		new HtmlWebpackPlugin({
			filename: 'admin/index.html',
			template: 'src/cms.html',
			inject: false,
		}),
	],
};
