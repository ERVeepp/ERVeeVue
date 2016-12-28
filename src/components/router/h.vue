<script>
	//编程式的导航
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	Vue.use(VueRouter)
	const router = new VueRouter({})

	// 字符串
	router.push('home')
	// 对象
	router.push({
		path: 'home'
	})
	// 命名的路由
	router.push({
		name: 'user',
		params: {
			userId: 123
		}
	})
	// 带查询参数，变成 /register?plan=private
	router.push({
		path: 'register',
		query: {
			plan: 'private'
		}
	})

	const app = new Vue({
		router,
		template:`
			<router-link :to="home">home</router-link>
			<router-link :to="home">home</router-link>
		    <router-link :to="user">user</router-link>
		    <router-link :to="register?plan=private">register</router-link>
		`
	}).$mount('#app')
</script>