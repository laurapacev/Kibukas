import Vue from 'vue'
import Vuex from 'vuex'

// Stores
import user from './user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user: user
  },
})