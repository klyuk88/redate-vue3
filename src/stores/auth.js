import {
    defineStore
} from 'pinia'
import axiosInstance from '@/services/api.js'
import setupInterceptors from '@/services/setupInterceptors.js'
import router from '@/router/index.js'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            token: localStorage.getItem('token'),
            refresh_token: localStorage.getItem('refresh_token'),
            error: null
        }
    },
    actions: {
        async authUser(data) {
            try {
                const res = await axiosInstance.post('/auth', data)
                this.token = res.data.access.token
                this.refresh_token = res.data.refresh.token
                localStorage.setItem('token', res.data.access.token)
                localStorage.setItem('refresh_token', res.data.refresh.token)
                router.push('/main')
            } catch (error) {
                this.error = error.response.data.message
            }
        },
        logout() {
            this.token = null
            // Cookies.remove('token')
            localStorage.removeItem('token')
            router.push('/')
        },

    }
})