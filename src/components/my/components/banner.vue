<template lang="html">
	<div class="banner">
		<div class="langcheckbox">
			<span class="langcheck"
				v-for="(item,index) in contents"
				@click="changelang(item,index)"
			>{{item.lang}}</span>
		</div>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
export default{
  computed: {
    contents () {
      return this.$store.state.state.contents
    }
  },
	methods:{
		...mapActions([
			'increment'
			// 映射 this.increment() 为 this.$store.dispatch('increment')
		]),

		...mapActions({
			add: 'increment'
			// 映射 this.add() 为 this.$store.dispatch('increment')
		}),
		changelang:function(item,index){
			//此处调用action，改变lang的状态
			//this.$store.dispatch('increment')
			//此处调用mutations
			//store.commit('increment')
			this.increment(item.id)
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
