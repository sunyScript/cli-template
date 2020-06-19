const path = require('path')
const {alias} = require('./config/index')

const setAlias = (config) => {
	Object.keys(alias).forEach((key) => {
		config.resolve.alias.set(key, alias[key])
	})
}

module.exports = {
	lintOnSave: false,
	assetsDir: 'static',
	runtimeCompiler: true,
	productionSourceMap: false,
	publicPath: process.env.VUE_APP_BASE,
	devServer: {
		hot: true,
		port: 8090,
		host: '0.0.0.0',
		open: true,
		overlay: {
			errors: true,
			warnings: true
		},
		proxy: {
			'/api': {
				target: 'https://t.lobomeeting.com/api',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	},
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	css: {
		extract: true,
		sourceMap: true,
		loaderOptions: {
			css: {
				importLoaders: 1
			},
			less: {
				importLoaders: 1,
				javascriptEnabled: true
			}
		}
	},
	chainWebpack: config => {
		setAlias(config)
	}
}
