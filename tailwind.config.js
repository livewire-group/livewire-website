const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			display: [
				'Cy',
				'"Avenir Medium"',
				'Avenir',
				...defaultTheme.fontFamily.sans,
			],
			headline: [
				'"Avenir Medium"',
				'"Avenir Next"',
				'"Avenir Next LT Pro"',
				'Avenir',
				...defaultTheme.fontFamily.sans,
			],
			body: [
				'"Avenir Book"',
				'"Avenir Next"',
				'"Avenir Next LT Pro"',
				'Avenir',
				...defaultTheme.fontFamily.sans,
			],
		},
		extend: {
			colors: {
				primary: '#00fcb5',
				gray: colors.trueGray,
				green: colors.emerald,
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
