<template lang="html">
	<div class="nav">
		<el-menu themes="dark" default-active="1" class="el-menu-demo"  mode="horizontal" @select="handleSelect">
		  <el-menu-item index="/">
				<router-link to="/">{{contents.nav.home}}</router-link>
			</el-menu-item>
		  <el-menu-item index="a">
				<router-link to="/a">{{contents.nav.a}}</router-link>
			</el-menu-item>
			<el-menu-item index="b">
				<router-link to="/b">{{contents.nav.b}}</router-link>
			</el-menu-item>
			<el-menu-item index="c">
				<router-link to="/c">{{contents.nav.c}}</router-link>
			</el-menu-item>
			<el-menu-item index="d">
				<router-link to="/d">{{contents.nav.d}}</router-link>
			</el-menu-item>
			<el-menu-item index="e">
				<router-link to="/e">{{contents.nav.e}}</router-link>
			</el-menu-item>
			<el-menu-item index="f">
				<router-link to="/f">{{contents.nav.f}}</router-link>
			</el-menu-item>
			<el-menu-item index="g">
				<router-link to="/g">{{contents.nav.g}}</router-link>
			</el-menu-item>
		</el-menu>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters([
            'contents'
        ])
  	},
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
