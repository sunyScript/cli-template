import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from '@/filters'
import * as directives from '@/directives'
import VueBus from 'vue-bus'
import VueLazyload from 'vue-lazyload'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/index.scss'
import '@/permission'

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.use(VueBus)

Vue.use(VueLazyload, {
	attempt: 1,
	preLoad: 1.3,
	error: require('@/assets/img/send_img.png'),
	loading: require('@/assets/img/loading.gif')
})

Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

Object.keys(directives).forEach(key => {
	Vue.directive(key,directives[key])
})

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

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
