<template lang="html">
    <div>
        我是页面3
        <div class="">
            {{obj.js}}
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            obj:{}
        }
    },
    mounted: function() {
        this.$http.post('http://localhost:3000/my', {}, {
            headers: {},
            emulateJSON: true
        }).then(function(response) {
            // 这里是处理正确的回调
            this.obj = response.data
                // this.articles = response.data["subjects"] 也可以
        }, function(response) {
            // 这里是处理错误的回调
            console.log(response)
        });
    }
}
</script>

<style lang="css">
</style>
