<template lang="html">
    <div>
      <ul>
        <li>{{lang}}</li>
      </ul>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
    data(){
        var lang=localStorage.getItem("lang")
        return{
            lang:lang
        }
    },
    computed: {
        content () {
            let choicelang=0
            let contents=this.$store.state.state.contents
            for (var i = 0; i < contents.length; i++) {
                if(contents[i].id==choicelang){
                    //console.log(contents[i])
                    return contents[i]
                }
            }
            //console.log(store.getters.doneTodos)
            //return store.getters.state.state.content
        }
    }
}
</script>

<style lang="css">
</style>
