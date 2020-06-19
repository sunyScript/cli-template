const fs = require('fs')
const path = require('path')

const resolve = (dir) => path.resolve(__dirname, '..', dir)

/**
 * 移动文件
 * @param {*} origin
 * @param {*} target
 */
function move(origin, target) {
	fs.rename(resolve(origin), resolve(target), function (err) {
		if (err) {
			throw err
		}
	})
}

/**
 * 拷贝文件
 * @param {*} origin
 * @param {*} target
 */
function copy(origin, target) {
	if (!fs.existsSync(target)) {
		fs.mkdirSync(target)
	}

	fs.readdirSync(origin).forEach((file) => {
		let originFile = path.join(origin, file)
		let targetFile = path.join(target, file)
		let stat = fs.statSync(originFile)
		if (stat.isDirectory()) {
			copy(originFile, targetFile)
		} else if (!fs.existsSync(targetFile)) {
			fs.writeFileSync(targetFile, fs.readFileSync(originFile), {encoding: 'utf8'})
		}
	})
}

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */

function fileDisplay(filePath, callback) {
	fs.readdir(filePath, function (err, files) {
		if (err) {
			// console.warn(err)
		} else {
			files.forEach(function (filename) {
				let filedir = path.join(filePath, filename)
				fs.stat(filedir, function (eror, stats) {
					if (eror) {
						// console.warn('获取文件stats失败')
					} else {
						let isFile = stats.isFile()
						let isDir = stats.isDirectory()
						if (isFile) {
							callback(filedir)
						} else if (isDir) {
							fileDisplay(filedir, callback)
						}
					}
				})
			})
		}
	})
}

module.exports = {
	move,
	copy,
	fileDisplay
}
