const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./layouts/**/*.html', './src/**/*.ts'],
	darkMode: 'class', // Or 'media' or 'class'
	theme: {
		colors: {
			primary: '#03bb9c',
			alternate: '#eff8f5',
			gray: colors.neutral,
			green: colors.emerald,
			black: colors.black,
			white: colors.white,
			current: 'currentColor',
			transparent: 'transparent',
		},
		fontFamily: {
			display: ['Chakra Petch', '"Avenir Medium"', 'Avenir', ...defaultTheme.fontFamily.sans],
			headline: [
				'Chakra Petch',
				'"Avenir Medium"',
				'"Avenir Next"',
				'"Avenir Next LT Pro"',
				'Avenir',
				...defaultTheme.fontFamily.sans,
			],
			body: [
				'Chakra Petch',
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
	corePlugins: {},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
