import Vuex from 'vuex'
import Vue from 'vue'
import stateConfig from '@/config/stage'
import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        login: false,
        author: '',

        stateConfig,
    },
    mutations: {
        setStatus(state, status) {
            state.login = status
        },
        setAuth(state, payload) {
            state.author = payload
        },
    },
    getters,
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