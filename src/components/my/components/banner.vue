<template lang="html">
	<div class="banner">
		<div class="langcheckbox">
			<span class="langcheck usnone"
				v-for="(item,index) in state.contents"
				@click="changelang($event,item,index)"
			>{{item.lang}}</span>
		</div>
		<div class="bannerimgbox bgimg flex-row text-center">
			<!--<canvas id="cas" class="bannermask"></canvas>-->
			<theater v-bind:choicelang="state.choicelang" v-bind:contents="contents" class="theater col-auto-22"></theater>
		</div>
	</div>
</template>
<script>
import theater from './theater.vue'
import lizi from '../../../js/lizi.js';

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
	components:{
        theater
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
            this.$emit('submitlang',[e,item,index])
		}
	},
	mounted:function(){
		//lizi.lizi()
	}
}

</script>
<style lang="scss" scoped>
	.banner{
		width:100%;
		height:auto;
		background:#20A0FF;
		position: relative;
		overflow: hidden;
	}
	.langcheckbox{
		position: absolute;
		right:0;
		top:0;
		padding:0.5rem;
	}
	.langcheck{
		padding:0 5px;
		cursor: pointer;
		color:#fff;
		&:hover{
			color:#000 !important;
		}
	}
	.langcheck:hover{
		color:#666;
	}
	.bannerimgbox{
		background-image: url(../../../img/index.jpg);
		width:100%;
		height:100%;
	}
	.theater{
		color:#fff;
	}
</style>
