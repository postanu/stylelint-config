module.exports = {
	extends: [
		'stylelint-config-recess-order',
		'stylelint-config-standard-scss',
		'stylelint-config-recommended-vue/scss'
	],
	rules: {
		'custom-property-empty-line-before': null,
		'declaration-empty-line-before': null
	},
	overrides: [
		{
			files: ['**/*.sass'],
			customSyntax: 'sugarss'
		},
		{
			files: ['**/*.vue'],
			customSyntax: '@postanu/postcss-html'
		}
	]
}
