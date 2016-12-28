<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'

	Vue.use(VueRouter)
//导航完成后获取数据
	new Vue({
		data:{
			loading: false,
			post: null,
			error: null
		},
		created() {
			// 组件创建完后获取数据，
			// 此时 data 已经被 observed 了
			this.fetchData()
		},
		watch: {
			// 如果路由有变化，会再次执行该方法
			'$route': 'fetchData'
		},
		methods: {
			fetchData() {
				this.error = this.post = null
				this.loading = true
				// replace getPost with your data fetching util / API wrapper
				getPost(this.$route.params.id, (err, post) => {
					this.loading = false
					if(err) {
						this.error = err.toString()
					} else {
						this.post = post
					}
				})
			}
		}
	}).$mount('#app')
</script>