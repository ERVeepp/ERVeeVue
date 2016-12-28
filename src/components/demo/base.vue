<script>
	import Vue from 'vue';
	//调用vue路由模块
	import VueRouter from "vue-router";
	//加载路由
	Vue.use(VueRouter);
	//调用vue的ajax模块
	import VueResource from 'vue-resource';
	//加载ajax
	Vue.use(VueResource);
	//
	import App from './App.vue';
	//调用element-ui模块
	import Element from 'element-ui';
	//加载element动画样式
	import 'element-ui/lib/theme-default/index.css';
	//加载element
	Vue.use(Element);
	//
	//开启debug模式
	Vue.config.debug = true;
	// 定义组件, 也可以像教程之前教的方法从别的文件引入
	const firstcomponent = {
		template: '<div><h2>我是第 1 个子页面</h2></div>'
	}
	import secondcomponent from './secondcomponent.vue'
	// 创建一个路由器实例
	// 并且配置路由规则
	const router = new VueRouter({
			mode: 'history',
			base: __dirname,
			routes: [{
				path: '/'
			},{
				path: '/first',
				component: firstcomponent
			}, {
				path: '/second',
				component: secondcomponent
			}]
		})
		// 现在我们可以启动应用了！
		// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
	const app = new Vue({
		router: router,
		/*template: `
		<div id="app">
			<p>
				<router-link to="/">home</router-link>
				<router-link to="/first">first</router-link>
				<router-link to="/second">second</router-link>
				<router-view class="view"></router-view>
			</p>
		</div>
	    `,*/
		render: h => h(App),
		components:{
			firstcomponent,
			secondcomponent
		}
	}).$mount('#app');
</script>
