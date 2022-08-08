import router from '@/router'
import { useUserStore } from '@/stores/user'
import { useRegistrationStore } from './store/registration'
import { RegistrationApi } from './api'
import { encryptPassword } from '@/services/encrypt'

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

  async registration(email, password) {
    this.registrationStore.registration.isLoading = true

    const encryptedPassword = encryptPassword(password)

    const { sex } = this.registrationStore

    const { data, error } = await RegistrationApi.registration(
      email,
      encryptedPassword,
      sex
    )

    if (error.status) {
      this.registrationStore.registration.error = error

      this.registrationStore.registration.isLoading = false

      return
    }

    localStorage.setItem('email', email)

    this.registrationStore.registration.data = data

    this.registrationStore.registration.isLoading = false

    this.router.push({ name: 'Registration accept' })
  }

  async acceptEmail(code) {
    this.registrationStore.acceptEmail.isLoading = true

    const { email } = this.registrationStore

    const codeStr = code.join('')

    const { data, error } = await RegistrationApi.acceptEmail(email, codeStr)

    if (error.status) {
      this.registrationStore.acceptEmail.error = error

      this.registrationStore.acceptEmail.isLoading = false

      return
    }

    this.registrationStore.acceptEmail.data = data

    this.registrationStore.acceptEmail.isLoading = false

    this.router.push({ name: 'Registration second' })
  }
}

export const RegistrationService = new Service()
