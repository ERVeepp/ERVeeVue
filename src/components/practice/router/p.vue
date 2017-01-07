<script>
	//滚动行为
	import Vue from 'vue'
	import VueRouter from 'vue-router'

	Vue.use(VueRouter)

	const Home = {
		template: '<div>home</div>'
	}
	const Foo = {
		template: '<div>foo</div>'
	}
	const Bar = {
		template: `
    <div>
      bar
      <div style="height:2000px"></div>
      <p id="anchor">Anchor</p>
    </div>
  `
	}

	// scrollBehavior:
	// - only available in html5 history mode
	// - defaults to no scroll behavior
	// - return false to prevent scroll
	const scrollBehavior = (to, from, savedPosition) => {
		if(savedPosition) {
			// savedPosition is only available for popstate navigations.
			return savedPosition
		} else {
			const position = {}
				// new navigation.
				// scroll to anchor by returning the selector
			if(to.hash) {
				position.selector = to.hash
			}
			// check if any matched route config has meta that requires scrolling to top
			if(to.matched.some(m => m.meta.scrollToTop)) {
				// cords will be used if no selector is provided,
				// or if the selector didn't match any element.
				position.x = 0
				position.y = 0
			}
			// if the returned position is falsy or an empty object,
			// will retain current scroll position.
			return position
		}
	}

	const router = new VueRouter({
		mode: 'history',
		base: __dirname,
		scrollBehavior,
		/*scrollBehavior (to, from, savedPosition) {
		    // return 期望滚动到哪个的位置
		    //让页面滚动到顶部
		    if (savedPosition) {
			    return savedPosition
			} else {
			    return { x: 0, y: 0 }
			}
			
			//模拟『滚动到锚点』的行为
			if (to.hash) {
			    return {
			      selector: to.hash
			    }
			}
		},*/
		routes: [{
			path: '/',
			component: Home,
			meta: {
				scrollToTop: true
			}
		}, {
			path: '/foo',
			component: Foo
		}, {
			path: '/bar',
			component: Bar,
			meta: {
				scrollToTop: true
			}
		}]
	})

	new Vue({
		router,
		template: `
    <div id="app">
      <h1>Scroll Behavior</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
        <li><router-link to="/bar#anchor">/bar#anchor</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
	}).$mount('#app')
</script>