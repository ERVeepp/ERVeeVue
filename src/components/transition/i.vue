<template>
	<div id="transition-components-demo">
		<input type="radio" value="v-a" id="a" v-model="view">
		<label for="a">A</label>
		<input type="radio" value="v-b" id="b" v-model="view">
		<label for="b">B</label>
	  	<transition name="component-fade" mode="out-in">
		  <component v-bind:is="view"></component>
		</transition>
	</div>
</template>
<script>
export default {
  data(){
    return{
    	view: 'v-a'
    }
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  }
}
</script>
<style>
	.component-fade-enter-active, .component-fade-leave-active {
	  transition: opacity .3s ease;
	}
	.component-fade-enter, .component-fade-leave-active {
	  opacity: 0;
	}
</style>