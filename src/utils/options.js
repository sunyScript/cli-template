let defaultOptions = {
	preprocessor: null,
	audio: {
		timeout: 1000,
		excludeIOS11: true
	},
	fonts: {
		swfContainerId: 'fingerprintjs2',
		swfPath: 'flash/compiled/FontList.swf',
		userDefinedFonts: [],
		extendedJsFonts: false
	},
	screen: {
		// 当用户旋转移动设备时确保指纹一致
		detectScreenOrientation: true
	},
	plugins: {
		sortPluginsFor: [/palemoon/i],
		excludeIE: false
	},
	extraComponents: [],
	excludes: {
		'enumerateDevices': true,
		// 取决于浏览器缩放
		'pixelRatio': true,
		//取决于某些浏览器的隐身模式
		'doNotTrack': true,
		// 已经使用JS字体
		'fontsFlash': true
	},
	NOT_AVAILABLE: 'not available',
	ERROR: 'error',
	EXCLUDED: 'excluded'
}
export default defaultOptions
