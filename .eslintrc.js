/**
 * ESLint Config
 */

const xoConfigTs = require('eslint-config-xo-typescript');

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['@typescript-eslint', 'unicorn', 'simple-import-sort', 'import', 'html'],
	extends: [
		'xo',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:unicorn/all',
		'./node_modules/xo/config/plugins.cjs',
		'prettier',
	],
	env: {
		browser: true,
		es6: true,
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					['^\\u0000'], // Side effects (e.g. import 'foo-bar')
					['^node:'],
					['^vite(?:est)?-?'], // Vite
					['^react', '^vue', '^@?storybook(/|-)', '^@?\\w'], // Packages (React/Vue grouped)
					['^@root', '^~(/framework/.*|$)', '^~(?!/components)(/.*|$)'], // Root, Framework, then absolute `~/`
					['^~/components(/.*|$)'], // Group components
					['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Relative
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					['^.+\\.s?css$'], // Styles
				],
			},
		],
		'simple-import-sort/exports': 'warn',
		'import/first': 'warn',
		'import/extensions': 'off',
		'import/newline-after-import': 'warn',
		'import/no-duplicates': 'warn',
		'import/no-unassigned-import': [
			'error',
			{
				allow: ['**/*.{pcss,css}'],
			},
		],
		'import/no-unresolved': [
			'error',
			{
				ignore: ['vite/modulepreload-polyfill'],
			},
		],
		'import/no-extraneous-dependencies': ['error'],
		'unicorn/prevent-abbreviations': [
			'error',
			{
				ignore: ['vite-env'],
			},
		],
	},
	overrides: [
		// Typescript Extensions
		{
			files: ['**/*.{ts,tsx}'],
			extends: ['xo-typescript', 'prettier'],
			rules: {
				'@typescript-eslint/no-confusing-void-expression': 'off', // We should be smart enough to figure this out.
				'unicorn/prevent-abbreviations': [
					'error',
					{
						allowList: {
							args: true,
							props: true,
							Props: true,
							templateProps: true,
						},
					},
				],
			},
		},

		// Typescript Extensions (Naming Override *.ts)
		{
			files: ['**/*.ts'],
			excludedFiles: ['dxa.config.ts', 'plopfile.ts', 'scripts/*'],
			rules: {
				'@typescript-eslint/naming-convention': [
					...xoConfigTs.rules['@typescript-eslint/naming-convention'],
					{
						selector: ['variable'],
						modifiers: ['const', 'global'],
						types: ['boolean', 'string', 'number', 'array'],
						format: ['UPPER_CASE'],
						// Filter required to override the XO Config.
						filter: {
							regex: '.+',
							match: true,
						},
					},
				],
			},
		},

		// Typescript Extensions (Naming Override *.ts)
		{
			files: ['**/*.tsx'],
			rules: {
				'@typescript-eslint/naming-convention': [
					...xoConfigTs.overrides.find((r) => r.files.includes('**/*.tsx')).rules[
						'@typescript-eslint/naming-convention'
					],
					{
						selector: ['variable'],
						modifiers: ['const', 'global'],
						types: ['boolean', 'string', 'number', 'array'],
						format: ['UPPER_CASE'],
						// Filter required to override the XO Config.
						filter: {
							regex: '.+',
							match: true,
						},
					},
				],
			},
		},

		// Script Files
		{
			files: ['scripts/**/*.ts', 'plopfile.ts'],
			rules: {
				'@typescript-eslint/naming-convention': [
					...xoConfigTs.rules['@typescript-eslint/naming-convention'],
					{
						selector: ['variable'],
						modifiers: ['const', 'exported'],
						types: ['boolean', 'string', 'number', 'array'],
						format: ['UPPER_CASE'],
						// Filter required to override the XO Config.
						filter: {
							regex: '.+',
							match: true,
						},
					},
				],
			},
		},

		// Markdown
		{
			files: ['**/*.md'],
			processor: 'markdown/markdown',
			extends: 'plugin:markdown/recommended',
			rules: {
				'unicorn/filename-case': [
					'error',
					{
						case: 'pascalCase',
						ignore: ['README\\.md', 'CONTRIBUTING\\.md', 'CHANGELOG\\.md'],
					},
				],
			},
		},

		// Typescript snippets in Markdown
		{
			files: ['**/*.md/*.ts'],
			parserOptions: {
				// Must be `null` per docs: https://typescript-eslint.io/docs/linting/type-linting/#i-get-errors-telling-me-the-file-must-be-included-in-at-least-one-of-the-projects-provided
				project: null,
			},
			rules: {
				'no-undef': 'off',
				'no-unused-expressions': 'off',
				'no-unused-vars': 'off',
				'padded-blocks': 'off',
				'import/no-unresolved': 'off',
				'@typescript-eslint/await-thenable': 'off',
				'@typescript-eslint/dot-notation': 'off',
				'@typescript-eslint/no-base-to-string': 'off',
				'@typescript-eslint/no-floating-promises': 'off',
				'@typescript-eslint/no-meaningless-void-operator': 'off',
				'@typescript-eslint/no-misused-promises': 'off',
				'@typescript-eslint/no-throw-literal': 'off',
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
				'@typescript-eslint/no-unnecessary-qualifier': 'off',
				'@typescript-eslint/no-unnecessary-type-arguments': 'off',
				'@typescript-eslint/no-unnecessary-type-assertion': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-return': 'off',
				'@typescript-eslint/non-nullable-type-assertion-style': 'off',
				'@typescript-eslint/prefer-includes': 'off',
				'@typescript-eslint/prefer-nullish-coalescing': 'off',
				'@typescript-eslint/prefer-readonly': 'off',
				'@typescript-eslint/prefer-reduce-type-parameter': 'off',
				'@typescript-eslint/prefer-string-starts-ends-with': 'off',
				'@typescript-eslint/promise-function-async': 'off',
				'@typescript-eslint/restrict-plus-operands': 'off',
				'@typescript-eslint/restrict-template-expressions': 'off',
				'@typescript-eslint/return-await': 'off',
				'@typescript-eslint/require-array-sort-compare': 'off',
				'@typescript-eslint/switch-exhaustiveness-check': 'off',
				'@typescript-eslint/prefer-regexp-exec': 'off',
				'@typescript-eslint/prefer-return-this-type': 'off',
				'@typescript-eslint/naming-convention': 'off',
				'unicorn/filename-case': 'off',
			},
		},

		// // MDX Markdown
		// {
		// 	files: ['src/**/*.mdx'],
		// 	extends: ['plugin:mdx/recommended', 'prettier'],
		// 	settings: {
		// 		'mdx/code-blocks': true,
		// 		'mdx/language-mapper': {},
		// 	},
		// },

		// React Components
		{
			files: ['**/*.tsx'],
			rules: {
				'unicorn/filename-case': [
					'error',
					{
						case: 'pascalCase',
					},
				],
			},
		},

		// Stories
		{
			files: ['**/*.stories.{ts,tsx}'],
			rules: {
				// Storybook convention is PascalCase - will try to configure correctly another time
				'@typescript-eslint/naming-convention': 'off',

				// Until such time that we are able to config `PascalCase.stories.ts(x)`
				'unicorn/filename-case': 'off',
			},
		},

		// Typescript Tests
		// {
		// 	files: ['vitest-setup.ts', 'lib/**/*.ts', '**/*.{spec,test,fixture}.{ts,tsx}'],
		// 	plugins: ['testing-library', 'jest-dom'],
		// 	extends: ['plugin:testing-library/dom', 'plugin:jest-dom/recommended'],
		// },

		// Root and Tailwind config files
		{
			files: ['*.ts', '*.js', 'tailwind/**/*.js'],
			excludedFiles: ['dxa.config.ts'],
			env: {
				node: true,
				browser: false,
			},
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/parser': 'off',
				'unicorn/prefer-module': 'off',
			},
		},

		// Main Entrypoint
		{
			files: 'src/main.ts',
			rules: {},
		},

		// Scripts
		{
			files: ['scripts/**/*.ts'],
			parserOptions: {
				project: 'scripts/tsconfig.json',
			},
			env: { node: true, browser: false },
			globals: {},
			rules: {},
		},

		// Root CommonJS Files
		{
			files: ['*.cjs'],
			env: {
				browser: false,
				node: true,
			},
		},
	],
};
