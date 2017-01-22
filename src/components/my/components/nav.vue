<template lang="html">
	<div class="nav container">
		<div class="col-auto-3 fl navbtn">
			<router-link to="/">{{contents.nav.home}}</router-link>
			<div class="navbtnborder"></div>
		</div>
		<div class="col-auto-3 fl navbtn">
			<router-link to="/a">{{contents.nav.a}}</router-link>
			<div class="navbtnborder"></div>
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
<style lang="scss">
	.nav{
		text-align: center;
		overflow: hidden;
		.navbtn{
			& a{
				display: block;
				padding:1rem 0;
			}
			&:after{
				content: "";
				display: block;
				margin:0 auto;
				width:100%;
				height:3px;
			}
			&:hover{
				&:after{
					background:#20A0FF;
				}
			}
		}
	}
</style>
