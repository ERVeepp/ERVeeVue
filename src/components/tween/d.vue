<template>
	<div id="example-8">
		<input v-model.number="firstNumber" type="number" step="20"> +
		<input v-model.number="secondNumber" type="number" step="20"> = {{ result }}
		<p>
			<animated-integer v-bind:value="firstNumber"></animated-integer> +
			<animated-integer v-bind:value="secondNumber"></animated-integer> =
			<animated-integer v-bind:value="result"></animated-integer>
		</p>
	</div>
</template>
<script>
	import TWEEN from '../../js/tween.js'
	console.log(TWEEN)
	import Vue from 'vue'
	//
	Vue.component('animated-integer',{
		template: '<span>{{ tweeningValue }}</span>',
		props: {
			value: {
				type: Number,
				required: true
			}
		},
		data: function() {
			return {
				tweeningValue: 0
			}
		},
		watch: {
			value: function(newValue, oldValue) {
				this.tween(oldValue, newValue)
			}
		},
		mounted: function() {
			this.tween(0, this.value)
		},
		methods: {
			tween: function(startValue, endValue) {
				var vm = this
				function animate(time) {
					requestAnimationFrame(animate)
					TWEEN.update(time)
				}
				new TWEEN.Tween({
						tweeningValue: startValue
					})
					.to({
						tweeningValue: endValue
					}, 500)
					.onUpdate(function() {
						vm.tweeningValue = this.tweeningValue.toFixed(0)
					})
					.start()
				animate()
			}
		}
	})
	export default({
		data(){
			return{
				firstNumber: 20,
				secondNumber: 40
			}
		},
		computed: {
			result: function() {
				return this.firstNumber + this.secondNumber
			}
		}
	})
</script>