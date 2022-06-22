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
            questionnaire: localStorage.getItem('questionnaire'),
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
                //проверяем заполнена ли анкета, если заполнена даем доступ если нет отправляем на регистрацию
                const questionnaire = await axiosInstance.get('/users/registration/status')
                if (questionnaire.data.isSetData) {
                    router.push('/main')
                    this.questionnaire = true
                    localStorage.setItem('questionnaire', true)
                } else {
                    router.push('/registration')
                }

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

    },
    getters: {
        isLogin(state) {
            if(state.token && state.questionnaire) {
                return true
            } else {
                return false
            }
        }
    }
})