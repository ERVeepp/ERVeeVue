<script>
	//命名视图
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	Vue.use(VueRouter)
	const Foo = {
		template: '<div>Foo</div>'
	}
	const Bar = {
		template: '<div>Bar</div>'
	}
	const Baz = {
		template: '<div>Baz</div>'
	}
	const router = new VueRouter({
		routes: [{
			path: '/',
			components: {
				default: Foo,
				a: Bar,
				b: Baz
			}
		}]
	})
	new Vue({
		router,
		template: `
		<div id="app">
			<router-view class="view one"></router-view>
			<router-view class="view two" name="a"></router-view>
			<router-view class="view three" name="b"></router-view>
		</div>
		`
	}).$mount('#app')
</script>