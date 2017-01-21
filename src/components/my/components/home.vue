<template lang="html">
    <div>
    	我是首页
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

<style lang="css">
</style>
