<template lang="html">
	<div class="nav">
		<div class="col-auto-20 container">
			<router-link to="/" class="col-auto-6 fl navbtn">
				<div class="" v-text="contents.nav.home"></div>
				<div class="navbtnborder"></div>
			</router-link>
			<router-link to="/a" class="col-auto-6 fl navbtn">
				<div class="" v-text="contents.nav.a"></div>
				<div class="navbtnborder"></div>
			</router-link>
			<router-link to="/b" class="col-auto-6 fl navbtn">
				<div class="" v-text="contents.nav.b"></div>
				<div class="navbtnborder"></div>
			</router-link>
			<router-link to="/c" class="col-auto-6 fl navbtn">
				<div class="" v-text="contents.nav.c"></div>
				<div class="navbtnborder"></div>
			</router-link>
		</div>
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
        	//console.log(key, keyPath);
      	}
    }
  }
</script>
<style lang="scss" scoped>
	.nav{
		text-align: center;
		overflow: hidden;
		.navbtn{
			display: block;
			height:40px;
			line-height: 38px;
			&:hover{
				background: #fff;
			}
			.navbtnborder{
				width:100%;
				height:2px;
				background: #20A0FF;
				opacity: 0;
			}
		}

	}
</style>
