<template lang="html">
	<div class="nav">
		<el-menu themes="dark" default-active="1" class="el-menu-demo"  mode="horizontal" @select="handleSelect">
		  <el-menu-item index="/">
				<router-link to="/">首页</router-link>
			</el-menu-item>
		  <el-menu-item index="a">
				<router-link to="/a">a</router-link>
			</el-menu-item>
			<el-menu-item index="b">
				<router-link to="/b">b</router-link>
			</el-menu-item>
			<el-menu-item index="c">
				<router-link to="/c">c</router-link>
			</el-menu-item>
			<el-menu-item index="d">
				<router-link to="/d">d</router-link>
			</el-menu-item>
			<el-menu-item index="e">
				<router-link to="/e">e</router-link>
			</el-menu-item>
			<el-menu-item index="f">
				<router-link to="/f">f</router-link>
			</el-menu-item>
			<el-menu-item index="g">
				<router-link to="/g">g</router-link>
			</el-menu-item>
		</el-menu>
	</div>
</template>
<script>
export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
	.nav{
		text-align: center;
		overflow: hidden;
	}
	.nav li{
		width:12.5%;
	}
	.nav a{
		display: block;
		color:#666;
	}
</style>
