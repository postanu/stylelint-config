module.exports = {
	extends: [
		'stylelint-plugin-stylus/standard',
		'stylelint-config-recommended-vue',
		'stylelint-config-recess-order'
	],
	rules: {
		'stylus/indentation': 'tab',
		'stylus/declaration-colon': 'always',
		'stylus/selector-list-comma': 'always'
	}
}
