<template lang="html">
    <div class="footer">
    	我是footer
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
