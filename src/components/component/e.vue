<script type="text/javascript">
//自定义事件
  import Vue from 'vue';
  Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function () {
      return {
        counter: 0
      }
    },
    methods: {
      increment: function () {
        this.counter += 1
        this.$emit('increment')
      }
    },
  })
  new Vue({
    el: '#app',
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }
    },
    template:`
      <div id="counter-event-example">
        <p>{{ total }}</p>
        <button-counter v-on:increment="incrementTotal"></button-counter>
        <button-counter v-on:increment="incrementTotal"></button-counter>
      </div>
    `
  })
  export default {
    data () {
      return {}
    },
    computed: {},
    mounted () {},
    methods: {},
    components: {}
  }
</script>
<style lang="css">
</style>
