import axios from 'axios'
import store from '@/store'
import fingerprint from 'fingerprintjs2'
import defaultOptions from './options'
import {Message} from 'element-ui'

//浏览器指纹识别
if (window.requestIdleCallback) {
	requestIdleCallback(() => {
		fingerprint.getV18(defaultOptions, (result, components) => {
			window.localStorage.setItem('fingerprint', result)
		})
	})
} else {
	setTimeout(() => {
		fingerprint.getV18(defaultOptions, (result, components) => {
			window.localStorage.setItem('fingerprint', result)
		})
	}, 500)
}


const service = axios.create({
	timeout: 10000,
	baseURL: process.env.VUE_APP_BASE_API
})

service.interceptors.request.use(
	config => {
		if (store.getters.token) config.headers['token'] = store.getters.token
		config.headers['deviceId'] = window.localStorage.getItem('fingerprint') || ''
		return config
	},
	error => {
		Promise.reject(error)
	}
)

service.interceptors.response.use(
	response => {
		const res = response.data
		if (res.code !== 200) {
			Message({
				message: res.message || 'Error',
				type: 'error',
				duration: 5 * 1000
			})
			return Promise.reject(new Error(res.message || 'Error'))
		} else {
			return res
		}
	},
	(error) => {
		Message({
			message: error.message,
			type: 'error',
			duration: 5 * 1000
		})
		return Promise.reject(error)
	}
)

export default service
