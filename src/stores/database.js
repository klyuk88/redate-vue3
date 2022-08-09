import { defineStore } from 'pinia'

export const useDatabaseStore = defineStore('database', {
  state: () => ({
    countries: {
      data: [],
      error: null,
      isLoading: false,
    },
    cities: {
      data: [],
      error: null,
      isLoading: false,
    },
    languages: {
      data: [],
      error: null,
      isLoading: false,
    },
    nationalities: {
      data: [],
      error: null,
      isLoading: false,
    },
    hobbies: {
      data: [],
      error: null,
      isLoading: false,
    },
  }),
})
