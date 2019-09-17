import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        login: false,
        author: '',
    },
    mutations: {
        setStatus(state, status) {
            state.login = status
        },
        setAuth(state, payload) {
            state.author = payload
        },
    },
    actions: {
        login({
            commit
        }, payload) {
            commit('setStatus', true)
            commit('setAuth', payload)
        },
        logout({
            commit
        }) {
            commit('setStatus', false)
            commit('setAuth', '')
        }
    }
})

export default store