<template>
	<div id="app">
		<img src="../../assets/logo.png">
		<p class="top">
			<router-link to="/">home</router-link>
			<router-link to="/first">first</router-link>
			<router-link to="/second">second</router-link>
		</p>
		<router-view class="view"></router-view>
	</div>
</template>
<style>
	.top{
		background: #ddd;
	}
</style>