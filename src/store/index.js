import { createStore } from 'vuex'

export default createStore({
  state: {
    mobileMenu: false,
    showCities: false,
    newMessageWindow: false
  },
  getters: {

  },
  mutations: {
    openMobileMenu(state) {
      state.mobileMenu = true
    },
    closeMobileMenu(state) {
      state.mobileMenu = false
    },
    openCities(state) {
      state.showCities = !state.showCities
    },
    openNewMessageWindow(state) {
      state.newMessageWindow = true
    },
    closeNewMessageWindow(state) {
      state.newMessageWindow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
