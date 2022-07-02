import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      query: '',
      cityId: '',
      ageMin: 18,
      ageMax: 45,
      onlySpecialOffers: false,
    }
  },

  actions: {
    setQueryParams(params) {
      if (params?.cityId) {
        this.cityId = params.cityId
      }

      if (params?.ageMin) {
        this.ageMin = params.ageMin
      }

      if (params?.ageMax) {
        this.ageMax = params.ageMax
      }

      if (params?.query) {
        this.query = params.query
      }

      if (params?.onlySpecialOffers) {
        this.onlySpecialOffers = params.onlySpecialOffers
      }
    },
  },
})
