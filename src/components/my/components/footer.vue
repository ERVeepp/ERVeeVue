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
<style>
	.footer{
		text-align: center;
		background: #E5E9F2;
		padding:1rem 0;
	}
</style>
