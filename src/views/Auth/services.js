import router from '@/router'
import { useUserStore } from '@/stores/user'
import { useAuthStore } from './store/auth'
import { AuthApi } from './api'
import { encryptPassword } from '@/services/encrypt'

class Service {
  constructor() {
    this.router = router
    this.userStore = useUserStore()
    this.authStore = useAuthStore()
  }

  async auth(email, password) {
    this.authStore.auth.isLoading = true

    const encryptedPassword = encryptPassword(password)

    const { data, error } = await AuthApi.auth(email, encryptedPassword)

    if (error.status) {
      this.authStore.auth.error = error

      this.authStore.auth.isLoading = false

      return
    }

    this.authStore.auth.data = data

    this.userStore.setTokens(data)

    localStorage.setItem('email', email)

    this.authStore.auth.isLoading = false

    this.router.push({ name: 'Main' })
  }
}

export const AuthService = new Service()
