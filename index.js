module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recess-order',
		'stylelint-config-recommended-vue/scss'
	],
	rules: {
		'color-hex-length': 'long',
		'no-duplicate-selectors': null,
		'selector-class-pattern': null,
		'no-descending-specificity': null,
		'declaration-empty-line-before': null,
		'custom-property-empty-line-before': null,
		'selector-pseudo-element-colon-notation': 'single',
		// sass
		'at-rule-no-unknown': [
			true,
			{
				'ignoreAtRules': [
					'use',
					'mixin',
					'include'
				]
			}
		],
		// astro
		'selector-pseudo-class-no-unknown': [
			true,
			{
				'ignorePseudoClasses': [
					'global'
				]
			}
		]
	},
	overrides: [
		{
			files: ['**/*.sass'],
			customSyntax: 'sugarss'
		},
		{
			files: ['**/*.vue', '**/*.astro'],
			customSyntax: '@postanu/postcss-html'
		}
	]
}
