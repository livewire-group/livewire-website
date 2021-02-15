module.exports = {
	plugins: {
		'postcss-import': {},
		tailwindcss: {},
		'postcss-nested': {},
		'postcss-preset-env': {
			browsers: 'last 2 versions',
		},
		'postcss-custom-media': {},
		autoprefixer: {},
	},
};
