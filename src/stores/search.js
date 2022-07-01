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
    setQueryParams(cityId, ageMin, ageMax, query, onlySpecialOffers) {
      if (cityId) {
        this.cityId = cityId
      }

      if (ageMin) {
        this.ageMin = ageMin
      }

      if (ageMax) {
        this.ageMax = ageMax
      }

      if (query) {
        this.query = query
      }

      if (onlySpecialOffers) {
        this.onlySpecialOffers = onlySpecialOffers
      }
    },
  },
})
