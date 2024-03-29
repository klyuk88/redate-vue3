import { defineStore } from 'pinia'
import SHA256 from 'crypto-js/sha256'
import { API } from '@/api/apiService.js'
import router from '@/router'

export const useUserStore = defineStore('user', {
  state: () => ({
    information: {
      data: null,
      error: {
        status: false,
        message: '',
      },
      isLoading: false,
    },
    registrationStatus: {
      data: null,
      error: {
        status: false,
        message: '',
      },
      isLoading: false,
    },
    currentTariff: {
      data: null,
      error: {
        status: false,
        message: '',
      },
      isLoading: false,
    },
    tokens: {
      data: JSON.parse(localStorage.getItem('tokens')) || null,
      error: null,
      isLoading: false,
    },
    emailStatus: {
      data: null,
      error: {
        status: false,
        message: '',
      },
      isLoading: false,
    },
    forbidden: {
      data: localStorage.getItem('forbidden') || null,
      isLoading: false,
    },
    email: localStorage.getItem('email') || null,
  }),

  actions: {
    async getInformation() {
      try {
        this.information.isLoading = true

        const informationResponse = await API.get('/user/info')

        if (!informationResponse.status) {
          throw new Error(informationResponse.message)
        }

        this.information.data = informationResponse.data

        this.information.isLoading = false

        return this.information.data
      } catch (error) {
        this.information.error.status = true
        this.information.error.message = error.message

        this.information.isLoading = false

        return this.information.error
      }
    },

    async getRegistrationStatus() {
      try {
        this.registrationStatus.isLoading = true

        const registrationStatusResponse = await API.get('/user/status')

        if (!registrationStatusResponse.status) {
          throw new Error(registrationStatusResponse.message)
        }

        this.registrationStatus.data = registrationStatusResponse.data

        this.registrationStatus.isLoading = false

        return this.registrationStatus.data
      } catch (error) {
        this.registrationStatus.error.status = true
        this.registrationStatus.error.message = error.message

        this.registrationStatus.isLoading = false

        return this.registrationStatus.error
      }
    },

    async getCurrentTariff() {
      try {
        this.currentTariff.isLoading = true

        const currentTariffResponse = await API.get('/tariffs/current')

        if (!currentTariffResponse.status) {
          throw new Error(currentTariffResponse.message)
        }

        this.currentTariff.data = currentTariffResponse.data

        this.currentTariff.isLoading = false
      } catch (error) {
        this.currentTariff.error.status = true
        this.currentTariff.error.message = error.message

        this.currentTariff.isLoading = false
      }
    },

    setTokens(data) {
      const date = Date.now()

      const tokens = {
        access: {
          token: data.access.token,
          expiredAt: date + data.access.liveTime,
        },
        refresh: {
          token: data.refresh.token,
          expiredAt: date + data.refresh.liveTime,
        },
      }

      this.tokens.data = tokens

      localStorage.setItem('tokens', JSON.stringify(tokens))
    },

    removeTokens() {
      this.tokens.data = null

      localStorage.removeItem('tokens')
    },

    async auth(email, password) {
      try {
        this.tokens.isLoading = true

        const encryptedPassword = SHA256(password).toString()

        const authRequestData = {
          email,
          password: encryptedPassword,
        }

        const authResponse = await API.post('/auth', authRequestData)

        if (!authResponse.status) {
          throw new Error(authResponse.message)
        }

        localStorage.setItem('email', email)

        const { data } = authResponse

        this.setTokens(data)

        this.tokens.isLoading = false

        return { status: false, message: '' }
      } catch (error) {
        this.tokens.error.status = true
        this.tokens.error.message = error.message

        this.tokens.isLoading = false

        return this.tokens.error
      }
    },

    async registration(email, password, sex) {
      try {
        this.tokens.isLoading = true

        const encryptedPassword = SHA256(password).toString()

        const registrationRequestData = {
          email,
          password: encryptedPassword,
          sex,
        }

        const registrationResponse = await API.post(
          '/auth/registration',
          registrationRequestData
        )

        if (!registrationResponse.status) {
          throw new Error(registrationResponse.message)
        }

        localStorage.setItem('email', email)

        const { data } = registrationResponse

        this.setTokens(data)

        this.tokens.isLoading = false

        return { status: false, message: 'ok' }
      } catch (error) {
        this.tokens.error.status = true
        this.tokens.error.message = error.message

        this.tokens.isLoading = false

        return this.tokens.error
      }
    },

    async updateTokens() {
      try {
        this.tokens.isLoading = true

        const updateTokensRequestData = {
          token: this.tokens.data.refresh.token,
        }

        const updateTokensResponse = await API.post(
          '/auth/token/update',
          updateTokensRequestData
        )

        const { data } = updateTokensResponse

        this.setTokens(data)

        this.tokens.isLoading = false

        return this.tokens.data
      } catch (error) {
        this.tokens.error.status = true
        this.tokens.error.message = error.message

        this.tokens.isLoading = false

        return this.tokens.error
      }
    },

    async acceptEmail(email, code) {
      try {
        this.emailStatus.isLoading = true

        const acceptEmailRequestData = {
          email,
          code,
        }

        const acceptEmailResponse = await API.post(
          '/user/email/accept',
          acceptEmailRequestData
        )

        if (!acceptEmailResponse.status) {
          throw new Error(acceptEmailResponse.message)
        }

        this.emailStatus.data = acceptEmailResponse.data

        this.emailStatus.isLoading = false

        return this.emailStatus.data
      } catch (error) {
        this.emailStatus.error.status = true
        this.emailStatus.error.message = error.message

        this.emailStatus.isLoading = false

        return this.emailStatus.error
      }
    },

    logout() {
      this.removeTokens()

      router.push('/')
    },
  },
})
