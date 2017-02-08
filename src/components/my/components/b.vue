<template lang="html">
    <div class="container">
        <div class="col-auto-20">
            <div class="title text-center" v-text="contents.title"></div>
            <div class="text-blod p-box" v-text="contents.con.c.a"></div>
            <div class="" v-text="contents.con.c.b"></div>
        </div>
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

<style lang="scss" scoped>
</style>
