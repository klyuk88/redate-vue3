import {
    defineStore
} from 'pinia'
import axiosInstance from '@/services/api.js'
import setupInterceptors from '@/services/setupInterceptors.js'
import router from '@/router/index.js'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            error: null
        }
    },
    actions: {
        async authUser(data) {
            try {
                const res = await axiosInstance.post('/auth', data)
                localStorage.setItem('token', res.data.access.token)
                //проверяем заполнена ли анкета, если заполнена даем доступ если нет отправляем на регистрацию
                const questionnaire = await axiosInstance.get('/users/registration/status')
                if (questionnaire.data.isSetData) {
                    const user = await axiosInstance.get('/users/me')
                    this.user = user.data
                    localStorage.setItem('user', JSON.stringify(user.data))
                    router.push('/main')
                } else {
                    router.push('/registration')
                }

            } catch (error) {
                this.error = error.response.data.message
            }
        },
        logout() {
            localStorage.removeItem('user')
            router.push('/')
        },

    },
    getters: {
        
    }
})