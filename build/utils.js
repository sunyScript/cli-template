const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
let {outputPath} = require('../config/index')
outputPath = outputPath || 'lib'

module.exports = {
	getAssetsPath(_path = '.') {
		return path.posix.join(outputPath, _path)
	},
	resolve(_path) {
		return _path ? path.resolve(__dirname, _path) : path.resolve(__dirname, '..', outputPath)
	},
	isProduct: true,
	env: process.env.NODE_ENV,
	chalkConsole: {
		success: () => {
			console.log(chalk.green(`=========================================`))
			console.log(chalk.green(`========打包成功(build success)!=========`))
			console.log(chalk.green(`=========================================`))
		},
		building: (index, total) => {
			console.log(chalk.blue(`正在打包第${index}/${total}个文件...`))
		}
	},
	fsExistsSync: (_path) => {
		try {
			fs.accessSync(_path, fs.F_OK)
		} catch (e) {
			return false
		}
		return true
	}
}
