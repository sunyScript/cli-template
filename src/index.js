import FileHandle from '../plugin/views/file/index'
import TestHandle from '../plugin/views/test/index'
import {version} from '../package.json'

const components = [FileHandle, TestHandle]

const install = function (Vue) {
	if (!install.installed) {
		components.forEach((component) => {
			Vue.component(component.name, component)
		})
	}
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	version,
	install,
	...components
}
