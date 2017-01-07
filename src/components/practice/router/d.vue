<script>
	//动态路由
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	Vue.use(VueRouter)
	const User = {
		template: `
		<transition name="slide">
			<div>User {{ $route.params.id }}</div>
		</transition>
		`,
		watch: {
			'$route' (to, from) {
				//去处
				//console.log(to)
				//来源
				//console.log(from)
				// 对路由变化作出响应...
			}
		}
	}
	const router = new VueRouter({
		routes: [
			{
				path: '/user/:id',
				component: User
			}
		]
	})
	const app = new Vue({
		router,
		template: `
		<div id="app">
			<router-link to="/user/foo">/user/foo</router-link>
			<router-link to="/user/bar">/user/bar</router-link>
			<transition>
				<router-view></router-view>
			</transition>
		</div>
	    `
	}).$mount('#app')
</script>