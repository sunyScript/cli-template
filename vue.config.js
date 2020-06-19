const webpack = require('webpack')
const path = require('path')
const fs = require("fs")

const resolve = dir => path.join(__dirname, dir)

const httpsDevServerConfig =
	process.env.NODE_ENV == 'development' ? {
		key: fs.readFileSync('./ssl/ssl.key'),
		cert: fs.readFileSync('./ssl/ssl.pem')
	} : undefined

module.exports = {
	lintOnSave: false,
	assetsDir: 'static',
	runtimeCompiler: true,
	productionSourceMap: false,
	publicPath: process.env.VUE_APP_BASE,
	devServer: {
		hot: true,
		port: 8090,
		open: true,
		overlay: {
			errors: true,
			warnings: true
		},
		host: '0.0.0.0',
		// https: httpsDevServerConfig,
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
			entry: 'examples/main.ts',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	css: {
		extract: true,
		sourceMap: false,
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

	},
	configureWebpack: config => {
		config.resolve.alias['@'] = resolve('examples')
		config.resolve.alias['@c'] = resolve('src')
		config.plugins.push(
			new webpack.ProvidePlugin({
				jQuery: 'jquery',
				$: 'jquery',
				'window.jQuery': 'jquery'
			})
		)
	}
}
