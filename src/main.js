import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'

import App from './components/App.vue'
import router from './router'
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
