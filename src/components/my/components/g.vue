<template lang="html">
    <div>
    	我是页面7
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
    data(){
        return{}
    },
    computed: {
        ...mapGetters([
            'contents'
        ])
    }
}
</script>

<style lang="css">
</style>
