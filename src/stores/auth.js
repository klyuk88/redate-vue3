import {
    defineStore
} from 'pinia'
import axios from 'axios'
import router from '@/router/index.js'


axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            token: localStorage.getItem('token'),
            error: null
        }
    },
    actions: {
        async authUser(data) {
            try {
              const res = await axios.post('/auth', data)
              this.token = res.data.access.token
              localStorage.setItem('token', res.data.access.token)
              console.log(res.data.access.token);
              router.push('/main')
            } catch (error) { 
              this.error = error.response.data.message
            }
        },
        logout() {
            this.token = null
            localStorage.removeItem('token')
            router.push('/')
        }
    }
})