import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: '主页',
		component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
	},
	{
		path: '/404',
		name: '404',
		component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue')
	},
	{
		path: '*',
		redirect: '/404',
		meta: {hidden: true}
	}
]

const router = new VueRouter({
	routes,
	mode: 'history',
	base: process.env.VUE_APP_BASE,
	scrollBehavior: (to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition
		} else {
			return {x: 0, y: 0}
		}
	}
})

export default router
