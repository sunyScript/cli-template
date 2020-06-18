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
		redirect: '/404'
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.VUE_APP_BASE,
	scrollBehavior: () => ({y: 0}),
	routes
})

export default router
