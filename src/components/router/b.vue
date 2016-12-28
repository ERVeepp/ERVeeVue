<script>
	//父子组件通讯
	import Vue from 'vue';
	export default({
		data(){
			return{
				todos: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			}
		}
	});
	Vue.component('todo', {
		props: ['todo'],
		template: '<li>{{todo}}</li>'
	});
</script>
<template>
	<ul>
		<todo v-for="todo in todos" v-bind:todo="todo"></todo>
	</ul>
</template>