import file from './file.vue'

file.install = function (Vue, options) {
	Vue.component(file.name, file)
}

export default file
