<template>
	<div class="slidebar">

	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
  	computed: {
		...mapGetters([
            'contents'
        ])
  	},
	methods:{

	}
}
</script>
<style lang="scss" scoped>
	.slidebar{
		width:50%;
		height:100%;
		position: fixed;
		left:-50%;
		top:0;
		background: #ccc;
		padding-top:36px;
	}
</style>
