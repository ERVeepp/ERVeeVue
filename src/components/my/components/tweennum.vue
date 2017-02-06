<template>
	<span class="numberbox" v-text="animatedNumber"></span>
</template>
<script>
	import TWEEN from '../js/tween.js'
	export default {
		props: ['gonum','scroll','offsetTop'],
		data(){
			return{
				number: 0,
				animatedNumber: 0,
				flag:true
			}
		},
		methods:{
			num:function(){
				var that=this
				this.animatedNumber=this.gonum
				this.animatenum=function(newValue, oldValue){
					var vm = this
					function animate(time) {
						requestAnimationFrame(animate)
						TWEEN.update(time)
					}
					new TWEEN.Tween({
							tweeningNumber:oldValue
						})
						.easing(TWEEN.Easing.Quadratic.Out)
						.to({
							tweeningNumber:newValue
						}, 1000)
						.onUpdate(function() {
							vm.animatedNumber = this.tweeningNumber.toFixed(0)
						})
						.start()
					animate()
					that.flag=false
				}
				this.animatenum(that.animatedNumber,that.number)
			}
		},
		mounted:function(){

	    },
		watch:{
			scroll:function(){
				if(this.flag){
					if((this.scroll+250)>=this.offsetTop){
						this.num()
					}
				}
			}

		}
	}
</script>
