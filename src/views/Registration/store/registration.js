import { defineStore } from 'pinia'

export const useRegistrationStore = defineStore('registration', {
  state: () => ({
    registration: {
      data: null,
      error: null,
      isLoading: false,
    },
    sex: localStorage.getItem('sex') || null,
    acceptEmail: {
      data: null,
      error: null,
      isLoading: false,
    },
    forbidden: {
      data: null,
      isLoading: false,
    },
  }),
})
