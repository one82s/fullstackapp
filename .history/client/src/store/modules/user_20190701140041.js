// import Vue from 'vue'
import axios from 'axios'
const state = {
  email: '',
  userId: null,
  isLoggedIn: false,
  loginError: ''
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  userId: state => state.userId,
  loginError: state => state.loginError
}

const actions = {
  async loginUser ({commit}, payload) {
    // console.log('testing 123', payload.email)
    await axios.get('http://localhost:8081/api/user/email/' + payload.email)
      .then((resp) => {
        let data = resp.data
        // console.log('payload.email is: ', payload.email)
        // console.log('payload.password is: ', payload.password)
        // sanity check to make sure data is received
        if (data && data.length > 0) {
          // Test password entered (payload) against user object
          if (data[0].password === payload.password) {
            payload.userId = data[0]._id
            console.log('here in if of user vuex store module')
            commit('loginUser', payload)
          } else {
            commit('loginError')
          }
        }
      })
      .catch(() => {
        commit('loginError')
      })
  }
}

const mutations = {
  loginUser (state, payload) {
    state.email = payload.email
    state.userId = payload.userId
    state.isLoggedIn = true
  },
  loginError (state) {
    state.isLoggedIn = false
    state.loginError = 'Email and/or password are invalid. Login failed'
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}
