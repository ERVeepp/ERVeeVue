import * as types from '../mutation-types'
import state from '../modules/state'
export default{
    mutations:{
        increment (state) {
            console.log(state)
          state.count++
        }
    }
}
