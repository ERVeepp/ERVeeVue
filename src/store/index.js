import Vue from 'vue'
import Vuex from 'vuex'
import state from './modules/state'
import * as getters from './modules/getters'
import mutations from './modules/mutations'
import * as actions from './modules/actions'
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
