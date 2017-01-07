<script>
	//命名路由
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	Vue.use(VueRouter)
	const Home = {
		template: '<div>This is Home</div>'
	}
	const Foo = {
		template: '<div>This is Foo</div>'
	}
	const Bar = {
		template: '<div>This is Bar {{ $route.params.id }}</div>'
	}
	const router = new VueRouter({
		mode: 'history',
		base: __dirname,
		routes: [{
			path: '/',
			name: 'home1',
			component: Home
		}, {
			path: '/foo',
			name: 'foo22',
			component: Foo
		}, {
			path: '/bar/:id',
			name: 'bar',
			component: Bar
		}]
	})
	new Vue({
		router,
		template: `
			<div id="app">
				<h1>Named Routes</h1>
				<p>Current route name: {{ $route.name }}</p>
				<ul>
					<li><router-link :to="{ name: 'home1' }">home</router-link></li>
					<li><router-link :to="{ name: 'foo22' }">foo</router-link></li>
					<li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
				</ul>
				<router-view class="view"></router-view>
			</div>
		`
	}).$mount('#app')
</script>