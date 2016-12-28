<template>
  <div id="example-3">
	  <button @click="show = !show">
	    Toggle render
	  </button>
	  <transition
		  v-on:before-enter="beforeEnter"
		  v-on:enter="enter"
		  v-on:after-enter="afterEnter"
		  v-on:enter-cancelled="enterCancelled"
		  v-on:before-leave="beforeLeave"
		  v-on:leave="leave"
		  v-on:after-leave="afterLeave"
		  v-on:leave-cancelled="leaveCancelled"
		>
	    <p v-if="show">hello</p>
	  </transition>
	</div>
</template>
<script>
export default {
  data(){
    return {
    	show: true
    }
  },
	methods: {
	  // --------
	  // 进入中
	  // --------
	  beforeEnter: function (el) {
	  	console.log("进入中")
	  },
	  // 此回调函数是可选项的设置
	  // 与 CSS 结合时使用
	  enter: function (el, done) {
	    console.log("进入中完成执行回调函数")
	    done()
	  },
	  afterEnter: function (el) {
	    console.log("进入后")
	  },
	  enterCancelled: function (el) {
	    console.log("完成后生命钩子结束")
	  },
	  // --------
	  // 离开时
	  // --------
	  beforeLeave: function (el) {
	    console.log("离开时")
	  },
	  // 此回调函数是可选项的设置
	  // 与 CSS 结合时使用
	  leave: function (el, done) {
	    console.log("离开时完成执行回调函数")
	    done()
	  },
	  afterLeave: function (el) {
	    console.log("离开后")
	  },
	  // leaveCancelled 只用于 v-show 中
	  leaveCancelled: function (el) {
	    console.log("离开后生命钩子结束")
	  }
	}
}
</script>