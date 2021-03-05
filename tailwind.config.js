const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			display: ['Cy', 'Inter', ...defaultTheme.fontFamily.sans],
			body: ['Inter', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				primary: '#00fcb5',
				gray: colors.trueGray,
			},
			typography: {
				// DEFAULT: {
				// 	css: {
				// 		color: 'w'
				// 	}
				// }
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
};
