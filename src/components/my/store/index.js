import Vue from 'vue'
import Vuex from 'vuex'
import state from './modules/state'
import * as getters from './modules/getters'
import mutations from './modules/mutations'
import actions from './modules/actions'
//import createLogger from '../../src/plugins/logger'
Vue.use(Vuex)
//const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    state,
    getters,
    mutations,
    actions
  },
  //strict: debug,
  //plugins: debug ? [createLogger()] : []
})
