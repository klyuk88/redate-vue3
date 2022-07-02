import { defineStore } from 'pinia'
import { API } from '@/api/apiService.js'

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
  }),

  actions: {
    async getInformation() {
      try {
        this.information.isLoading = true

        const informationResponse = await API.get('/users/me')

        if (!informationResponse.status) {
          throw new Error(informationResponse.message)
        }

        this.information.data = informationResponse.data

        this.information.isLoading = false
      } catch (error) {
        this.information.error.status = true
        this.information.error.message = error.message

        this.information.isLoading = false
      }
    },

    async getRegistrationStatus() {
      try {
        this.registrationStatus.isLoading = true

        const registrationStatusResponse = await API.get(
          '/users/registration/status'
        )

        if (!registrationStatusResponse.status) {
          throw new Error(registrationStatusResponse.message)
        }

        this.registrationStatus.data = registrationStatusResponse.data

        this.registrationStatus.isLoading = false
      } catch (error) {
        this.registrationStatus.error.status = true
        this.registrationStatus.error.message = error.message

        this.registrationStatus.isLoading = false
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
  },
})
