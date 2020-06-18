import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//路由白名单
const whiteList = [
	'/login'
]

router.beforeEach((to, from, next) => {
	//路由进度条 next内有路由地址时需添加NProgress.done()
	NProgress.start()
	if (whiteList.indexOf(to.path) !== -1) {
		next()
	} else {
		next()
	}
})

router.afterEach(() => {
	NProgress.done()
})

router.onError((error) => {
	const pattern = /Loading chunk (\d)+ failed/g
	const isChunkLoadFailed = error.message.match(pattern)
	const targetPath = router.history.pending.fullPath
	if (isChunkLoadFailed) {
		router.replace(targetPath)
	}
})
