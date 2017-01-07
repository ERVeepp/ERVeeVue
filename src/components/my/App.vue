<template lang="html">
    <div id="app">

	</div>
</template>
<script>
import Vue from 'vue'
//调用vue路由模块
import VueRouter from "vue-router"
//加载路由
Vue.use(VueRouter)
//调用vuex模块
import Vuex from 'vuex'
//加载vuex
Vue.use(Vuex)
//调用vue的ajax模块
import VueResource from 'vue-resource'
//加载ajax
Vue.use(VueResource)
//调用element-ui模块
import Element from 'element-ui'
//加载element动画样式
import 'element-ui/lib/theme-default/index.css'
//加载element
Vue.use(Element)
//引入store
import store from '../../store'
//
Vue.config.debug = true
//引入组件
import mynav from './components/nav.vue'
import myslidebar from './components/slidebar.vue'
import mybanner from './components/banner.vue'
import myfooter from './components/footer.vue'
import home from './components/home.vue'
import sign from './components/sign.vue'
import register from './components/register.vue'
import a from './components/a.vue'
import b from './components/b.vue'
import c from './components/c.vue'
import d from './components/d.vue'
import e from './components/e.vue'
import f from './components/f.vue'
import g from './components/g.vue'
//
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        name:'home',
        components:{
        	body:sign
        }
    },
    {
        path: '/a',
        components:{
        	body:a
        }
    },
    {
        path: '/b',
        components:{
        	body:b
        }
    },
    {
        path: '/c',
        components:{
        	body:c
        }
    },
    {
        path: '/d',
        components:{
        	body:d
        }
    },
    {
        path: '/e',
        components:{
        	body:e
        }
    },
    {
        path: '/f',
        components:{
        	body:f
        }
    },
    {
        path: '/g',
        components:{
        	body:g
        }
    },
    {
        path: '/register',
        components:{
          body:register
        }
    }]
})

new Vue({
    el:'#app',
    store,
  	router,
  	template:`
  	<div id="app">
        <mybanner></mybanner>
        <mynav></mynav>
        <myslidebar></myslidebar>
        <router-view class="view body" name="body"></router-view>
        <myfooter></myfooter>
	</div>
  	`,
    components:{
        mybanner,
        mynav,
        myslidebar,
        myfooter
    }
})
</script>
<style lang="scss">
    
</style>
