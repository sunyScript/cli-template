const webpack = require('webpack');
const path = require('path');
//压缩文件
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
//git版本号
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();
//检查路径匹配
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
//sentry
const SentryCliPlugin = require('@sentry/webpack-plugin');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
	outputDir: 'dist',
	assetsDir: 'public',
	lintOnSave: false,
	publicPath: process.env.VUE_APP_BASE,
	devServer: {
		hot: true,
		port: 8080,
		host: '0.0.0.0',
		open: true,
		overlay: {
			errors: true,
			warnings: true
		},
		proxy: {
			'/api':{
				target: 'https://t.lobomeeting.com/api',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	},
	css: {
		sourceMap: false,
		requireModuleExtension: true,
		loaderOptions: {
			css: {
				importLoaders: 1
			},
			less: {
				importLoaders: 1
			}
		},
	},
	chainWebpack: config => {
		config.plugin('html').tap((options) => {
			options[0].templateParameters = {
				...options[0].templateParameters,
				...{
					'BASE_URL': process.env.VUE_APP_BASE,
					'branch': gitRevisionPlugin.branch()
				}
			}
			return options
		})
	},
	configureWebpack: config => {
		config.resolve.alias['@'] = resolve('src')
		config.resolve.alias['@C'] = resolve('./src/components')
		config.plugins.push(
			new webpack.ProvidePlugin({
				jQuery: 'jquery',
				$: 'jquery',
				'window.jQuery': 'jquery'
			})
		)

		if (process.env.NODE_ENV != 'development'){
			config.devtool = 'source-map'
			config.plugins.push(
				new CompressionWebpackPlugin({
					filename: '[path].gz[query]',
					algorithm: 'gzip',
					test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
					threshold: 10240,
					minRatio: 0.8
				})
			)
			config.plugins.push(
				new SentryCliPlugin({
					release: gitRevisionPlugin.branch(),
					include: './dist',
					ignore: ['node_modules'],
					configFile: "sentry.properties",
					urlPrefix: `~/${process.env.VUE_APP_BASE}/`
				})
			)
		}else {
			config.plugins.push(
				new CaseSensitivePathsPlugin()
			)
		}
	}
}
