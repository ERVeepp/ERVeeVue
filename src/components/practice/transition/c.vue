<template>
  <div id="example-1">
	  <button @click="show = !show">
	    Toggle render
	  </button>
	  <transition name="bounce">
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
  }
}
</script>
<style>
	.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-out .5s;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(1);
	  }
	}
	@keyframes bounce-out {
	  0% {
	    transform: scale(1);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(0);
	  }
	}
</style>