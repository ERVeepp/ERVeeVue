<template lang="html">
    <div>
        我是页面2
    </div>
</template>

<script>
    export default{
        mounted:function(){
            this.$http.post('http://localhost:3000/my', {}, {
				headers: {},
				emulateJSON: true
			}).then(function(response) {
                console.log(response)
				// 这里是处理正确的回调
				//this.articles = response.data.subjects
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
