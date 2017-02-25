<template lang="html">
    <div class="footer">
    	版权所有 Copyright(C)2013 山西大学 激光光谱研究所
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
	.footer{
		text-align: center;
		padding:1rem 0;
	}
</style>
