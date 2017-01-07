import * as types from '../mutation-types'
export default{
    actions:{
        increment (context) {
            //console.log(context)
            context.commit('increment')
        }
    }
}
