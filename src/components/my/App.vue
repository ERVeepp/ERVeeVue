<template lang="html">
    <div id="app"></div>
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
//调用element-ui模块
//import Element from 'element-ui'
//加载element动画样式
//import 'element-ui/lib/theme-default/index.css'
//加载element
//Vue.use(Element)
//引入store
import store from '../../store'
//console.log(store)
//
Vue.config.debug = true
//引入组件
import mynav from './components/nav.vue'
import myslidebar from './components/slidebar.vue'
import mybanner from './components/banner.vue'
import myfooter from './components/footer.vue'
import home from './components/home.vue'
import a from './components/a.vue'
import b from './components/b.vue'
import c from './components/c.vue'
//
const router = new VueRouter({
    //mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        name:'home',
        components:{
        	body:home
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
    }]
})
new Vue({
    el:'#app',
    store,
  	router,
  	template:`
  	<div id="app">
        <mybanner v-on:submitlang="changelang"></mybanner>
        <mynav></mynav>
        <myslidebar></myslidebar>
        <transition name="fade">
            <router-view class="view body" name="body"></router-view>
        </transition>
        <myfooter></myfooter>
	</div>
  	`,
    components:{
        mybanner,
        mynav,
        myslidebar,
        myfooter
    },
    mounted:function(){
        //处理banner图
        this.setwindowheight=function(){
            let windowh=window.innerHeight
            var banner=document.getElementsByClassName("banner")[0]
            banner.style.height=(windowh/2)+"px"
        }
        this.setwindowheight()
        console.info(
            "去我的github查看更多 https://github.com/ERVeepp/ERVeeVue \n" +
            "王伟"
        )
        //读取localstorage，假如没值的话,赋值为0，即默认英文
        let lang=localStorage.getItem("lang")
        if(lang){
            Vue.set(this.$store.state,'choicelang',lang)
        }else{
            let thislang=this.$store.state.choicelang
            localStorage.setItem("lang",thislang)
        }
        let thislang=localStorage.getItem("lang")
        this.judelang(thislang)
    },
    methods:{
        changelang:function(arr){
            this.judelang(arr[2])
        },
        judelang:function(obj){
            //console.log(obj)
            if(obj==0){
                //说明是英语
                var ti=document.querySelectorAll(".ti")
                //console.log(ti)
                for (var i = 0; i < ti.length; i++) {
                    ti[i].style.textIndent="1em"
                }
            }else if(obj==1){
                //说明是汉语
                var ti=document.querySelectorAll("ti")
                for (var i = 0; i < ti.length; i++) {
                    ti[i].style.textIndent="2em"
                }
            }
        }
    }
})
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.body{
    background: #fff;
    font-size: 1.6rem;
    padding:2rem 0;
}
.title{
    font-size: 2rem;
    padding:0 0 2rem 0;
}
.p-box{
    padding:1rem 0;
}
</style>
