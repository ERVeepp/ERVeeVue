<template lang="html">
    <transition name="slide">
        <div class="container">
            <div class="col-auto-20">
                <div class="title text-center" v-text="contents.title"></div>
                <div class="text-blod p-box" v-text="contents.con.c.a"></div>
                <div class="" v-bind:class="{ti0:lang==0,ti1:lang==1}" v-text="contents.con.c.b"></div>
                <div class="" v-bind:class="{ti0:lang==0,ti1:lang==1}" v-text="contents.con.c.c"></div>
                <div class="text-blod download-box">
                    <a href="./word/ReceiptCH.doc" v-if="lang==1" v-text="contents.con.c.d"></a>
                    <a href="./word/ReceiptEN.doc" v-if="lang==0" v-text="contents.con.c.d"></a>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
    data(){
        return{}
    },
    computed: {
        ...mapGetters([
            'contents',
            'lang'
        ])
    }
}
</script>

<style lang="scss" scoped>
  .download-box{
    margin-top:2rem;
    a{
      text-decoration: underline;
      color:red;
    }
  }
</style>
