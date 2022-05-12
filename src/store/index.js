import { createStore } from 'vuex'

export default createStore({
  state: {
    mobileMenu: false,
    showCities: false,
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
    }
  },
  actions: {
  },
  modules: {
  }
})
