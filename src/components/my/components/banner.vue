<template lang="html">
	<div class="banner">
		<div class="langcheckbox">
			<span class="langcheck usnone"
				v-for="(item,index) in state.contents"
				@click="changelang($event,item,index)"
			>{{item.lang}}</span>
		</div>
	</div>
</template>
<script>
import { mapGetters , mapActions } from 'vuex'
export default{
  	computed: {
    	state(){
      		return this.$store.state
  		},
		...mapGetters([
            'contents'
        ])
  	},
	methods:{
		/*...mapActions({
			add: 'increment'
			// 映射 this.add() 为 this.$store.dispatch('increment')
		}),*/
		...mapActions([
			'increment'
			// 映射 this.increment() 为 this.$store.dispatch('increment')
		]),
		...mapActions({
			add: 'increment'
			// 映射 this.add() 为 this.$store.dispatch('increment')
		}),
		changelang:function(e,item,index){
			//此处调用action，改变lang的状态
			//this.$store.dispatch('increment')
			//此处调用mutations
			//store.commit('increment')
			this.increment(item.id)
            //手动向父组件触发事件
            //this.$emit('submitlang',[e,item,index])
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
