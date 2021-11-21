import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticated: false
  },
  mutations: {
    setAuthentiction(state, status){
      state.authenticated = status
    }
  },
  actions: {
  },
  modules: {
  }
})
