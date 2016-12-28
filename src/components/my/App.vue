<script>
import Vue from 'vue'
//调用vue路由模块
import VueRouter from "vue-router";
//加载路由
Vue.use(VueRouter);
//调用vuex模块
import Vuex from 'vuex';
//加载vuex
Vue.use(Vuex);
//调用vue的ajax模块
import VueResource from 'vue-resource';
//加载ajax
Vue.use(VueResource);
//调用element-ui模块
import Element from 'element-ui';
//加载element动画样式
import 'element-ui/lib/theme-default/index.css';
//加载element
Vue.use(Element);


Vue.config.debug = true;

import nav from './components/nav.vue';
import slidebar from './components/slidebar.vue';
import banner from './components/banner.vue';
import footer from './components/footer.vue';
import sign from './components/sign.vue';
import a from './components/a.vue';
import b from './components/b.vue';
import c from './components/c.vue';
import d from './components/d.vue';
import e from './components/e.vue';
import f from './components/f.vue';
import g from './components/g.vue';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        name:'home',
        components:{
        	banner: banner,
        	nav:nav,
        	slidebar:slidebar,
        	footer:footer,
        	body:sign
        }
    },
    {
        path: '/a',
        components:{
        	banner: banner,
        	nav:nav,
        	slidebar:slidebar,
        	footer:footer,
        	body:a
        }
    },
    {
        path: '/b',
        components:{
        	banner: banner,
        	nav:nav,
        	slidebar:slidebar,
        	footer:footer,
        	body:b
        }
    },
    {
        path: '/c',
        components:{
        	banner: banner,
        	nav:nav,
        	slidebar:slidebar,
        	footer:footer,
        	body:c
        }
    },
    {
        path: '/d',
        components:{
        	banner: banner,
        	nav:nav,
        	slidebar:slidebar,
        	footer:footer,
        	body:d
        }
    },
    {
        path: '/e',
        components:{
        	banner: banner,
        	nav:nav,
        	slidebar:slidebar,
        	footer:footer,
        	body:e
        }
    },
    {
        path: '/f',
        components:{
        	banner: banner,
        	nav:nav,
        	slidebar:slidebar,
        	footer:footer,
        	body:f
        }
    },
    {
        path: '/g',
        components:{
        	banner: banner,
        	nav:nav,
        	slidebar:slidebar,
        	footer:footer,
        	body:g
        }
    }]
});

new Vue({
  	el: '#app',
  	router: router,
  	template:`
  	<div id="app">
  		<router-view class="view" name="slidebar"></router-view>
		<router-view class="view" name="banner"></router-view>
		<router-view class="view" name="nav"></router-view>
		<router-view class="view body" name="body"></router-view>
		<router-view class="view" name="footer"></router-view>
	</div>
  	`
});

</script>
<style media="screen">
    html,body{
		width:100%;
		height:100%;
		font-family: "微软雅黑";
	}
	html{
		font-size: 62.5%;
	}
	body{
		margin:0;
		font-size: 1rem;
	}
	a{
		text-decoration: none;
	}
	a:hover{
		text-decoration: none;
	}
	a:active{
		color:#000;
	}
	.fl{
		float:left;
	}
	.fr{
		float:right;
	}
	#app{
		width:100%;
		height:100%;
		background:#f5f5f5;
	}
	.body{
		margin:1rem auto;
	}
	@media only screen and (min-width: 100px) and (max-width: 640px) {
		.body{
			width:100%;
		}
	}
	@media only screen and (min-width: 640px) and (max-width: 980px) {
		.body{
			width:80%;
		}
	}
	@media only screen and (min-width: 980px) {
		.body{
			width:80%;
		}
	}
</style>
