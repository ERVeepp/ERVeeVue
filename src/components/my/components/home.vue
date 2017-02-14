<template lang="html">
    <transition name="slide">
        <div class="container">
            <div class="col-auto-20">
                <div class="title text-center" v-text="contents.title"></div>
                <div class="content ti" v-text="contents.con.a.a"></div>
                <div class="content ti" v-text="contents.con.a.b"></div>
                <div class="content ti" v-text="contents.con.a.c"></div>
            </div>
        </div>
    </transition>
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

</style>
