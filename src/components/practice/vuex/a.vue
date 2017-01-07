<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	Vue.use(VueRouter)
	import Vuex from 'vuex'
	Vue.use(Vuex)
		/*var vm = new Vue({
		// state (状态)
		data() {
			return {
				count: 0
			}
		},
		// view (视图)
		template: `
    <div>{{ count }}</div>
  `,
		// actions (动作)
		methods: {
			increment() {
				this.count++
			}
		}
	})
	vm.increment();*/
	// 如果使用模块系统，确保之前调用过 Vue.use(Vuex)
	const store = new Vuex.Store({
		state: {
			count: 0
		},
		mutations: {
			increment(state) {
				state.count++
			}
		}
	})
	store.commit('increment')
	console.log(store.state.count) // -> 1
</script>