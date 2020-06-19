import axios from 'axios'
import {Message} from 'element-ui'

const service = axios.create({
    timeout: 10000,
    baseURL: process.env.VUE_APP_BASE_API
});

service.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (res.code !== 200) {
            Message({
                type: 'error',
                duration: 5 * 1000,
                message: res.message || 'Error'
            })
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return response.data
        }
    },
    (error) => {
        Message({
            type: 'error',
            duration: 5 * 1000,
            message: error.message || 'Error'
        })
        return Promise.reject(error)
    }
)

export default service
