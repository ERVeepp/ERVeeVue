import * as types from '../mutation-types'
export default{
    actions:{
        increment (context,data) {
            //console.log(data)
            context.commit(types.increment,data)
        }
    }
}
