import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      cityId: '',
      ageMin: 18,
      ageMax: 45,
    };
  },

  actions: {
    setQueryParams(cityId, ageMin, ageMax) {
      if (cityId) {
        this.cityId = cityId;
      }

      if (ageMin) {
        this.ageMin = ageMin;
      }

      if (ageMax) {
        this.ageMax = ageMax;
      }
    },
  },
});
