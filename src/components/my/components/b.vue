<template lang="html">
    <div>
      <ul>
        <li v-for="item in content" v-if="item.show">
          <p>{{item.con.text}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
export default{
  computed: {
    content () {
      return this.$store.state.state.content
    }
  }
}
</script>

<style lang="css">
</style>
