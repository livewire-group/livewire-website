/**
 * Stylelint Config
 */

module.exports = {
	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	extends: [
		'stylelint-config-standard',
		'stylelint-config-sass-guidelines',
		'stylelint-config-recommended',
		'stylelint-config-xo',
		'stylelint-config-prettier',
	],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'],
			},
		],
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['layer', 'screen'],
			},
		],
		'color-named': [
			'never',
			{
				ignore: ['inside-function'],
			},
		],
		'declaration-no-important': true,
		'font-family-name-quotes': 'always-unless-keyword',
		'max-nesting-depth': 3,
		'rule-empty-line-before': ['always', { except: ['after-single-line-comment', 'first-nested'] }],
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': [
			'^[a-z0-9\\-:]+$',
			{
				message: 'Selector should be written in lowercase with hyphens (selector-class-pattern)',
			},
		],
		'unit-case': 'lower',
		'value-keyword-case': 'lower',
	},
	overrides: [
		{
			files: ['*.html', '**/*.html'],
			customSyntax: 'postcss-html',
		},
	],
};
