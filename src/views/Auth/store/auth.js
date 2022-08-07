import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: {
      data: null,
      error: null,
      isLoading: false,
    },
    updateTokensPair: {
      data: null,
      error: null,
      isLoading: false,
    },
  }),
})
