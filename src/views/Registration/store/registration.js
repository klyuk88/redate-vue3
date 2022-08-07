import { defineStore } from 'pinia'

export const useRegistrationStore = defineStore('registration', {
  state: () => ({
    registration: {
      data: null,
      error: null,
      isLoading: false,
    },
    acceptEmail: {
      data: null,
      error: null,
      isLoading: false,
    },
  }),
})
