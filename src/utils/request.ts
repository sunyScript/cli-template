import axios from 'axios'
import router from '@/router/index'
import { Message, MessageBox } from 'element-ui'
import { UserModule } from '@/store/modules/user'

const service = axios.create({
    timeout: 10000,
    baseURL: process.env.VUE_APP_BASE_API,
    headers: {
        'version': process.env.VUE_APP_VERSION,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
})

service.interceptors.request.use(
    (config) => {
        if (UserModule.token) config.headers['token'] = UserModule.token
        return config
    },
    (error) => Promise.reject(error)
)

service.interceptors.response.use(
    (response) => {
        const res = response.data
        if (res.code !== 200) {
            if (response.headers.resultcode === 2002 || res.state === 2002) {
                MessageBox.confirm(
                    '你已被登出，可以取消继续留在该页面，或者重新登录',
                    '确定登出',
                    {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }
                ).then(() => {
                    localStorage.clear()
                    UserModule.SET_TOKEN('')
                    router.push({path: '/login'})
                })
            }else{
                Message({
                    message: res.message || 'Error',
                    type: 'error',
                    duration: 5 * 1000
                })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return response.data
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
