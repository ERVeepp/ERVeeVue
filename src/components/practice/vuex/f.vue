<script type="text/javascript">
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})

// 创建一个计数器组件
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      console.log(this.$store.state.count)
      return this.$store.state.count
    }
  }
}

// vuex 提供了独立的构建工具函数 Vuex.mapState
import { mapState } from 'vuex'
export default {
  // ...
  computed: mapState({
    // 箭头函数可以让代码非常简洁
    count: state => state.count,
    // 传入字符串 'count' 等同于 `state => state.count`
    countAlias: 'count',
    // 想访问局部状态，就必须借助于一个普通函数，函数中使用 `this` 获取局部状态
    countPlusLocalState (state) {
      console.log(state.count + this.localCount)
      return state.count + this.localCount
    }
  })
};

const app = new Vue({
  el: '#app',
  // 使用 "store" 选项后，可以注册 store 对象。将会把 store 实例注入到所有子组件。
  store,
  components: { Counter },
  template: `
    <div id="app">
      <counter></counter>
    </div>
  `
})
</script>
