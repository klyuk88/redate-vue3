import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {
      mobileMenu: false,
      showCities: true,
      newMessageWindow: false,
      mobileSorting: false,
      newSendWindow: false,
      maleVersion: false,
      femaleVersion: false,
    };
  },
});
