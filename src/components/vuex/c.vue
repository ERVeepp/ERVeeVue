<script type="text/javascript">
//简单状态管理起步使用
import Vue from 'vue';
  var store = {
    debug: true,
    state: {
      message: 'Hello!'
    },
    setMessageAction (newValue) {
      this.debug && console.log('setMessageAction triggered with', newValue)
      this.state.message = newValue
    },
    clearMessageAction () {
      this.debug && console.log('clearMessageAction triggered')
      this.state.message = 'action B triggered'
    }
  };
  store.setMessageAction("aaaa");
  store.clearMessageAction ();
  var vmA = new Vue({
    data: {
      privateState: {},
      sharedState: store.state
    },
    template:`
    <div id="app">
    <span>{{sharedState.message}}</span>
    </div>
    `
  }).$mount('#app')
  var vmB = new Vue({
    data: {
      privateState: {},
      sharedState: store.state
    },
    template:`
    <div id="app1">
    <span>{{sharedState.message}}</span>
    </div>
    `
  }).$mount('#app1')
</script>
