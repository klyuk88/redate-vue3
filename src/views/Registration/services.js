import router from '@/router'
import { useUserStore } from '@/stores/user'
import { useDatabaseStore } from '@/stores/database'
import { useRegistrationStore } from './store/registration'
import { RegistrationApi } from './api'
import { encryptPassword } from '@/services/encrypt'

class Service {
  constructor() {
    this.router = router
    this.userStore = useUserStore()
    this.databaseStore = useDatabaseStore()
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

    this.userStore.setTokens(data)

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

  saveSecondStage(info) {
    this.registrationStore.secondStage.isLoading = true

    localStorage.setItem('secondStage', JSON.stringify(info))

    this.registrationStore.secondStage.data = info

    this.registrationStore.secondStage.isLoading = false

    this.router.push({ name: 'Registration third' })
  }

  hobbies() {
    this.registrationStore.hobbies.isLoading = true

    const error = this.databaseStore.hobbies.error

    if (error?.status) {
      this.registrationStore.hobbies.error = this.databaseStore.hobbies.error

      this.registrationStore.hobbies.isLoading = false

      return
    }

    const hobbies = this.databaseStore.hobbies.data?.map((hobby) => ({
      title: hobby.name,
      active: false,
    }))

    this.registrationStore.hobbies.data = hobbies

    this.registrationStore.hobbies.isLoading = false
  }

  setActiveHobby(hobby) {
    this.registrationStore.hobbies.isLoading = true

    const hobbies = this.registrationStore.hobbies.data.map((el) =>
      el.title === hobby.title ? { active: !el.active, title: el.title } : el
    )

    this.registrationStore.hobbies.data = hobbies

    this.registrationStore.hobbies.isLoading = false
  }

  languages() {
    this.registrationStore.languages.isLoading = true

    const error = this.databaseStore.languages.error

    if (error?.status) {
      this.registrationStore.languages.error =
        this.databaseStore.languages.error

      this.registrationStore.languages.isLoading = false

      return
    }

    const languages = this.databaseStore.languages.data?.map((language) => ({
      title: language.name,
      active: false,
    }))

    this.registrationStore.languages.data = languages

    this.registrationStore.languages.isLoading = false
  }

  setActiveLanguage(language) {
    this.registrationStore.languages.isLoading = true

    const languages = this.registrationStore.languages.data.map((el) =>
      el.title === language.title ? { active: !el.active, title: el.title } : el
    )

    this.registrationStore.languages.data = languages

    this.registrationStore.languages.isLoading = false
  }

  saveThirdStage(info) {
    this.registrationStore.thirdStage.isLoading = true

    localStorage.setItem('thirdStage', JSON.stringify(info))

    this.registrationStore.thirdStage.data = info

    this.registrationStore.thirdStage.isLoading = false

    this.router.push({ name: 'Registration fourth' })
  }
}

export const RegistrationService = new Service()
