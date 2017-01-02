import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './modules/mutations'
import actions from './modules/actions'
import getters from './modules/getters'
import state from './modules/state'
import * as types from './mutation-types'
//import createLogger from '../../src/plugins/logger'
Vue.use(Vuex)
//const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    mutations,
    actions,
    getters,
    state
  },
  //strict: debug,
  //plugins: debug ? [createLogger()] : []
})
