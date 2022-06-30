import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      query: '',
      cityId: '',
      ageMin: 18,
      ageMax: 45,
    };
  },

  actions: {
    setQueryParams(cityId, ageMin, ageMax, query) {
      if (cityId) {
        this.cityId = cityId;
      }

      if (ageMin) {
        this.ageMin = ageMin;
      }

      if (ageMax) {
        this.ageMax = ageMax;
      }

      if (query) {
        this.query = query;
      }
    },
  },
});
