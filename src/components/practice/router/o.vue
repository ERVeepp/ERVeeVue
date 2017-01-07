<script>
	//导航完成后获取数据
	new Vue({
		data() {
			return {
				post: null,
				error: null
			}
		},
		beforeRouteEnter(to, from, next) {
			getPost(to.params.id, (err, post) =>
				if(err) {
					// display some global error message
					next(false)
				} else {
					next(vm => {
						vm.post = post
					})
				}
			})
		},
		// 路由改变前，组件就已经渲染完了
		// 逻辑稍稍不同
		watch: {
			$route() {
				this.post = null
				getPost(this.$route.params.id, (err, post) => {
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