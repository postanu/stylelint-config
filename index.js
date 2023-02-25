module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recess-order',
		'stylelint-config-recommended-vue/scss'
	],
	rules: {
		'custom-property-empty-line-before': null,
		'declaration-empty-line-before': null,
		'color-hex-length': 'long'
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
