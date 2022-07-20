const process = require('node:process');
const path = require('node:path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',

	output: {
		filename: '[name].js',
		chunkFilename: '[id].css',
	},

	devServer: {
		port: process.env.PORT || 3000,
		static: {
			directory: path.join(process.cwd(), './dist'),
		},
		historyApiFallback: {
			rewrites: [{ from: /./, to: '404.html' }],
		},
	},

	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ['dist/**/*.js', 'dist/**/*.css', 'data/webpack.json'],
		}),

		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
});
