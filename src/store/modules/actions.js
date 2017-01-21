import * as types from '../mutation-types'
export const increment= (context,data)=>{
    context.commit(types.CHANGE_LANG,data)
}
