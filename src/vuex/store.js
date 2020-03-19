import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      Axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
    },
    CLEAR_USER_DATA (state) {
      state.user = null
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    register ({ commit }, credentials) {
      return Axios.post('//localhost:3000/register', credentials).then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
    },
    login ({ commit }, payLoad) {
      return Axios.post('//localhost:3000/login', payLoad).then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  getters: {
    loggedIn (state) {
      return !!state.user
    }
  }
})

export default store
