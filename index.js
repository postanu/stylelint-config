module.exports = {
	extends: [
		'stylelint-plugin-stylus/standard',
		'stylelint-config-recess-order',
		'stylelint-config-html/vue'
	],
	rules: {
		'stylus/indentation': 'tab',
		'stylus/declaration-colon': 'always',
		'stylus/selector-list-comma': 'always'
	}
}
