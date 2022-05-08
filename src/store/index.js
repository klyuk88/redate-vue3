import { createStore } from 'vuex'

export default createStore({
  state: {
    mobileMenu: false
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
  },
  actions: {
  },
  modules: {
  }
})
