module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-recommended-vue/scss',
		'stylelint-config-recess-order'
	],
	rules: {
		'declaration-empty-line-before': null
	},
	overrides: [
		{
			files: ['**/*.sass'],
			customSyntax: 'postcss-sass'
		}
	]
}
