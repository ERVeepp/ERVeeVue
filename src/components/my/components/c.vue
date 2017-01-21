<template lang="html">
    <div>
        我是页面3
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
        axios.post('http://localhost:3000/my', {

            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
}
</script>

<style lang="scss">
</style>
