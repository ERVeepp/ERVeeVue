<template lang="html">
    <div>
      <ul>
        <li>{{contents}}</li>
      </ul>
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

<style lang="css">
</style>
