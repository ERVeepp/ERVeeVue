<template lang="html">
    <div class="container">
        <div class="col-auto-20">
            <div class="title text-center" v-text="contents.title"></div>
            <div class="" v-text="contents.con.d.a"></div>
            <div class="clearfix" v-for="(item,index) in contents.con.d.b">
				<div class="fl">{{item.a}}</div>
                <div class="fl">
                    <div class="clearfix" v-for="(i,index) in item.b">
                        <div class="fl c-a">{{i.a}}</div>
                        <div class="fl">{{i.b}}</div>
                    </div>
                </div>
			</div>
        </div>
    </div>
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
            'contents'
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

<style lang="scss">
.c-a{
    width:250px;
    min-height:1px;
}
</style>
