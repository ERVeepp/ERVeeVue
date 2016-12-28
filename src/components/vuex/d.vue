<script type="text/javascript">
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  }
});
// 创建一个计数器组件
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      console.log(store.state.count)
      return store.state.count
    }
  }
}
new Vue({
  el:'#app',
  components:{
    'my-component':Counter
  },
  template:`
  <my-component></my-component>
  `
})
store.state.count=100;
</script>
