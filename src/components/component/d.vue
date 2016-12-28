<script>
	//使用 v-on 绑定自定义事件
	import Vue from 'vue';
	Vue.component('my-input', {
		template: '\
    <div class="form-group">\
      <label v-bind:for="randomId">{{ label }}:</label>\
      <input v-bind:id="randomId" v-bind:value="value" v-on:input="onInput">\
    </div>\
  ',
		props: ['value', 'label'],
		data: function() {
			return {
				randomId: 'input-' + Math.random()
			}
		},
		methods: {
			onInput: function(event) {
				this.$emit('input', event.target.value)
			}
		},
	})
	new Vue({
		el: '#app',
		data: {
			message: 'hello'
		},
		template: `
			<div id="app">
			  <p>{{ message }}</p>
			  <my-input
			    label="Message"
			    v-model="message"
			  ></my-input>
			</div>
		`
	})
</script>