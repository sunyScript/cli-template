import Test from './views/test/index'
import File from './views/file/index'
//组件数组
const components = [Test,File]

//定义install方法
const install = (Vue, options) => {
	if (!install.installed) {
		install.installed = true
		components.map(component => {
			Vue.component(component.name, component)
		})
	}
}

export default {
	install,
	...components
}
