<script>
	//嵌套路由
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	Vue.use(VueRouter)
	const User = {
		template: `
		    <div class="user">
		        <h2>User {{ $route.params.id }}</h2>
		        <router-view></router-view>
		    </div>
		`
	}

	const UserHome = {
		template: '<div>Home</div>'
	}
	const UserProfile = {
		template: '<div>Profile</div>'
	}
	const UserPosts = {
		template: '<div>Posts</div>'
	}

	const router = new VueRouter({
		routes: [{
			path: '/user/:id',
			component: User,
			children: [
				// UserHome will be rendered inside User's <router-view>
				// when /user/:id is matched
				{
					path: '',
					component: UserHome
				},

				// UserProfile will be rendered inside User's <router-view>
				// when /user/:id/profile is matched
				{
					path: 'profile',
					component: UserProfile
				},

				// UserPosts will be rendered inside User's <router-view>
				// when /user/:id/posts is matched
				{
					path: 'posts',
					component: UserPosts
				}
			]
		}]
	})

	const app = new Vue({
		router,
		template:`
			<p>
			    <router-link to="/user/foo">/user/foo</router-link>
			    <router-link to="/user/foo/profile">/user/foo/profile</router-link>
			    <router-link to="/user/foo/posts">/user/foo/posts</router-link>
			    <router-view></router-view>
			</p> 
		`
	}).$mount('#app')
</script>