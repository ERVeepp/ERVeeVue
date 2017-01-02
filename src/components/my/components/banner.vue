<template lang="html">
	<div class="banner">
		<div class="langcheckbox">
			<span class="langcheck"
				v-for="(item,index) in content"
				@click="changelang(item,index)"
			>{{item.lang}}</span>
		</div>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
//引入store
import store from '../../../store'
export default{
  computed: {
    content () {
      return this.$store.state.state.content
    }
  },
	methods:{
		changelang:function(item,index){
			//此处调用action，改变lang的状态
			this.$store.dispatch('increment', item)
		}
	}
}

</script>
<style>
	.banner{
		width:100%;
		height:100px;
		background:#20A0FF;
		position: relative;
	}
	.langcheckbox{
		position: absolute;
		right:0;
		top:0;
	}
	.langcheck{
		padding:0 5px;
		cursor: pointer;
		color:#fff;
	}
	.langcheck:hover{
		color:#666;
	}
</style>
