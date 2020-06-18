import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueBus from 'vue-bus'
import VueLazyload from 'vue-lazyload'
import * as filters from './filters'
import '@/assets/style/index.scss'
import '@/permission'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(VueBus)

Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: require('@/assets/img/send_img.png'),
	loading: require('@/assets/img/loading.gif'),
	attempt: 1
})

Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
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


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
