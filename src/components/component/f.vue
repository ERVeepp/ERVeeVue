<script type="text/javascript">
//单个 Slot
import Vue from 'vue';
var child={
  template:`
  <div>
    <h2>I'm the child title</h2>
    <slot>
      如果没有分发内容则显示我。
    </slot>
  </div>
  `
};
new Vue({
  el:'#app',
  components:{
    "my-component": child
  },
  template:`
  <div>
    <h1>I'm the parent title</h1>
    <my-component>
      <p>This is some original content</p>
      <p>This is some more original content</p>
    </my-component>
  </div>
  `
})
</script>
