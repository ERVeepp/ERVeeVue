import * as types from '../types'
// 使用添加了前缀的名称定义 getter、action 和 mutation
const todosModule = {
    //state: { todos: [] },

    getters: {
        [types.DONE_COUNT] (state) {
            // ...
        }
    },

    actions: {
        [types.FETCH_ALL] (context, payload) {
            // ...
        }
    },

    mutations: {
        [types.TOGGLE_DONE] (state, payload) {
            // ...
        }
    }
}
