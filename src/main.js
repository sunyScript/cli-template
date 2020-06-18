import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueBus from 'vue-bus'
Vue.use(VueBus)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
	attempt: 1,
	preLoad: 1.3,
	error: require('@/assets/img/send_img.png'),
	loading: require('@/assets/img/loading.gif')
})

import * as filters from '@/filters'
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

import * as directives from '@/directives'
Object.keys(directives).forEach(key => {
	Vue.directive(key,directives[key])
})

import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
if (process.env.NODE_ENV !== "development") {
	Sentry.init({
		dsn: '',
		integrations: [
			new Integrations.Vue({
				Vue,
				attachProps: true
			})
		],
		beforeSend(event, hint) {
			const error = hint.originalException
			if (error && error.message && error.message.match(/of null|of undefind|endsWith|t is undefined/)){
				return null
			}else{
				return event
			}
		}
	})
}

import '@/assets/style/index.scss'
import '@/permission'

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
