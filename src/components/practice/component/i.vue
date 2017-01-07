<script type="text/javascript">
//异步组件
import Vue from 'vue';

/*Vue.component('async-webpack-example', function (resolve) {
  // 这个特殊的 require 语法告诉 webpack
  // 自动将编译后的代码分割成不同的块，
  // 这些块将通过 Ajax 请求自动下载。
  require(['./my-async-component'], resolve)
});*/

Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 2000)
});
new Vue({
  el:'#app',
  template:`
  <async-example></async-example>
  `
})

</script>
