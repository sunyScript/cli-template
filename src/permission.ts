import router from './router'
import {Route} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//路由白名单
const whiteList = [
	'/login'
]

//next内有地址时需NProgress.done()
router.beforeEach(async (to: Route, from: Route, next: any) => {
	NProgress.start()
	if (whiteList.indexOf(to.path) !== -1) {
		next()
	} else {
		next()
	}
})

router.afterEach((to: Route) => {
	NProgress.done()
})
