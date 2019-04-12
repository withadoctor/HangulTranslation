import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store';

import plug from "./plugins/index";

// Vue.use(plug);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
