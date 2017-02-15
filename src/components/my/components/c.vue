<template lang="html">
    <transition name="fade">
        <div class="container">
            <div class="col-auto-20">
                <div class="title text-center" v-text="contents.title"></div>
                <div class="text-blod p-box" v-text="contents.con.d.a"></div>
                <div class="clearfix" v-bind:class="{ti0:lang==0,ti1:lang==1}" v-for="(item,index) in contents.con.d.b">
    				<div class="text-blod">{{item.a}}</div>
                    <div class="p-box">
                        <div class="clearfix container" v-for="(i,index) in item.b">
                            <div class="fl col-auto-12 col-s-24">{{i.a}}</div>
                            <div class="fl col-auto-12 col-s-24">{{i.b}}</div>
                        </div>
                    </div>
    			</div>
                <div class="p-box" v-text="contents.con.d.c"></div>
                <div class="text-blod">
                    <a href="../Receipt.doc" v-text="contents.con.d.d"></a>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'contents',
            'lang'
        ])
    },
    mounted: function() {
        /*axios.post('http://localhost:3000/my', {

        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });*/
    }
}
</script>
