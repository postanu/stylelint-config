module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-recommended-vue/scss',
		'stylelint-config-recess-order'
	],
	rules: {
		'custom-property-empty-line-before': null,
		'declaration-empty-line-before': null
	},
	overrides: [
		{
			files: ['**/*.sass'],
			customSyntax: 'postcss-sass'
		}
	]
}
