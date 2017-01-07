<template>
  <transition
  	
  	>
	  <button v-if="show" key="save"  @click="show = !show" name="fade" mode="out-in">
	    Save
	  </button>
	  <button v-else key="edit"  @click="show = !show" name="fade" mode="out-in">
	    Edit
	  </button>
	</transition>
</template>
<script>
export default {
  data(){
  	return{
  		show: true
  	}
  }
}
</script>