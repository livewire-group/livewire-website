const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./site/layouts/**/*.html'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		colors: {
			primary: '#00fcb5',
			gray: colors.trueGray,
			green: colors.emerald,
			black: colors.black,
			white: colors.white,
		},
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
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			typography: {
				// DEFAULT: {
				// 	css: {
				// 		color: 'w'
				// 	}
				// }
			},
		},
	},
	corePlugins: {
		float: false,
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
