import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import content from './modules/content'
import createLogger from '../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules: {
    content
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
