/**
 * PostCSS Config
 */

module.exports = {
	parser: 'postcss-scss',
	plugins: [
		require('postcss-import'),
		require('tailwindcss/nesting'),
		require('tailwindcss'),
		require('postcss-flexbugs-fixes'),
		require('postcss-preset-env')({
			features: {'nesting-rules': false},
		}),
	],
};
