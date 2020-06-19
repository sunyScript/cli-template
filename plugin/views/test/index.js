import test from './test.vue'

test.install = function (Vue, options) {
	Vue.component(test.name, test)
}

export default test

