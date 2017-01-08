import Vue from 'vue'
import * as types from '../mutation-types'
export default{
    mutations:{
        [types.increment](state,data) {
            //改变选中的语言。存到localstorage中
            localStorage.setItem("lang",data)
        }
    }
}
