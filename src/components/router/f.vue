<script>
	//动态路由匹配
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	Vue.use(VueRouter)
	const User = {
		template: '<div>User {{ $route.params.id }}</div>'
	}
	const router = new VueRouter({
		routes: [{
			path: '/user/:id',
			component: User
		}]
	})

	const app = new Vue({
		router,
		template: `
		<div id="app">
			<p>
				<router-link to="/user/foo">/user/foo</router-link>
				<router-link to="/user/bar">/user/bar</router-link>
			</p>
		</div>
	    `
	}).$mount('#app')
	//<router-view></router-view>在页面内
</script>