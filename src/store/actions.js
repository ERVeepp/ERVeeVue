import * as types from './mutation-types'
export default{
    actions:{
        incrementss({commit},products){
            console.log(products)
            commit(types.SOME_MUTATION)
        }
    }
}
