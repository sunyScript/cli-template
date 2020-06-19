const utils = require('../build/utils')

module.exports = {
	outputPath: 'lib',
	styleOutputPath: 'theme',
	alias: {
		'@': utils.resolve('../plugin'),
		'@e': utils.resolve('../examples')
	}
}
