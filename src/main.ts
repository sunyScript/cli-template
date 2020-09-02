import Vue, {DirectiveOptions} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from '@/filters'
import * as directives from '@/directives'
import VueBus from 'vue-bus'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'
import Rx from 'rxjs'

import '@/assets/icon/iconfont.css'
import '@/assets/style/index.scss'
import '@/permission'

Vue.prototype.$rx = Rx

Vue.use(ElementUI, {
    size: 'medium'
})

Vue.use(VueBus)

Vue.use(VueLazyload, {
    attempt: 1,
    preLoad: 1.3,
    error: require('@/assets/img/send_img.png'),
    loading: require('@/assets/img/loading.gif')
})

Object.keys(filters).forEach(key => {
    Vue.filter(key, (filters as { [key: string]: Function })[key])
})

Object.keys(directives).forEach(key => {
    Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key])
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
