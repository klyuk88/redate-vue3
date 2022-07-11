import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      mobileMenu: false,
      showCities: false,
      newMessageWindow: false,
      mobileSorting: false,
      newSendWindow: false,
      newSendWindowParams: null,
      newSendWindowSuccess: false,
      maleVersion: false,
      femaleVersion: false,
      hideRecomendedMailingModal: false,
    }
  },
})
