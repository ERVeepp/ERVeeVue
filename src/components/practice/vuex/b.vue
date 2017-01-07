<script>
	import Vue from 'vue'
	import Vuex from 'vuex'
	Vue.use(Vuex);
	// vuex 提供了独立的构建工具函数 Vuex.mapState
	import {
		mapState
	} from 'vuex'
	export default {
		// ...
		computed: mapState({
			// 箭头函数可以让代码非常简洁
			count: state => state.count,
			// 传入字符串 'count' 等同于 `state => state.count`
			countAlias: 'count',
			// 想访问局部状态，就必须借助于一个普通函数，函数中使用 `this` 获取局部状态
			countPlusLocalState(state) {
				return state.count + this.localCount
			}
		})
	}
	const store = new Vuex.Store({
		state: {
			count: 0
		},
		mutations: {
			increment(state) {
				state.count++
			}
		}
	});
	// 创建一个计数器组件
	const Counter = {
		template: `<div>{{ count }}</div>`,
		computed: {
			count() {
				return this.$store.state.count
			}
		}
	};
	const app = new Vue({
		el: '#app',
		// 使用 "store" 选项后，可以注册 store 对象。将会把 store 实例注入到所有子组件。
		store,
		components: {
			Counter
		},
		template: `
    <div class="app">
      <counter></counter>
    </div>
  `
	})
	store.commit('increment')
	console.log(store.state.count) // -> 1
</script>