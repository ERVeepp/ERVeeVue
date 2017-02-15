<template lang="html">
    <transition name="slide">
        <div class="container">
            <div class="col-auto-20">
                <div class="title text-center" v-text="contents.title"></div>
                <div class="content" v-bind:class="{ti0:lang==0,ti1:lang==1}" v-text="contents.con.a.a"></div>
                <div class="content" v-bind:class="{ti0:lang==0,ti1:lang==1}" v-text="contents.con.a.b"></div>
                <div class="content" v-bind:class="{ti0:lang==0,ti1:lang==1}" v-text="contents.con.a.c"></div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
  	computed: {
		...mapGetters([
            'contents',
            'lang'
        ])
  	},
	methods:{

	}
}
</script>

<style lang="scss" scoped>

</style>
