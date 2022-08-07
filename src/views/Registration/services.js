import router from '@/router'
import { useUserStore } from '@/stores/user'
import { useRegistrationStore } from './store/registration'

class Service {
  constructor() {
    this.router = router
    this.userStore = useUserStore()
    this.registrationStore = useRegistrationStore()
  }

  forbidden() {
    this.registrationStore.forbidden.isLoading = true

    localStorage.setItem('forbidden', true)

    this.registrationStore.forbidden.data = true

    this.userStore.forbidden.data = true

    this.registrationStore.forbidden.isLoading = false

    this.router.push({ name: 'StartPage' })
  }
}

export const RegistrationService = new Service()
