import Vue from 'vue'
import * as types from '../mutation-types'
export default{
    [types.CHANGE_LANG](state,data){
        Vue.set(state,'choicelang',data)
        //state = { ...state,choicelang:data}
        //console.log(state.choicelang)
        //改变选中的语言。存到localstorage中
        localStorage.setItem("lang",data)
        //刷新页面
        //location.reload()
    }
}
