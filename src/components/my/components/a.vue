<template lang="html">
	<transition name="fade">
		<div class="container">
	        <div class="col-auto-20">
	            <div class="title text-center" v-text="contents.title"></div>
	            <div class="text-blod p-box" v-text="contents.con.b.a.a"></div>
				<div class="clearfix" v-for="(item,index) in contents.con.b.a.b">
					<div class="fl">{{item.a}}</div>
					<div class="fl">{{item.b}}</div>
				</div>
				<div class="text-blod p-box" v-text="contents.con.b.b.a"></div>
				<div class="text-blod" v-text="contents.con.b.b.b.a"></div>
				<div class="p-box" v-text="contents.con.b.b.b.b"></div>
				<div class="text-blod" v-text="contents.con.b.b.b.c"></div>
				<div class="p-box text-blod" v-text="contents.con.b.b.b.d"></div>
				<div class="clearfix" v-for="(item,index) in contents.con.b.b.b.e">{{item}}</div>
				<div class="text-blod p-box" v-text="contents.con.b.b.b.f"></div>
				<div class="clearfix" v-for="(item,index) in contents.con.b.b.b.g">{{item}}</div>
	        </div>
	    </div>
	</transition>
</template>

<script>
import { mapGetters } from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapGetters([
	            'contents'
	        ])
	  	}
	}
</script>

<style lang="scss" scoped>

</style>
