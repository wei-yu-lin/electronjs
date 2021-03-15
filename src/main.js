// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Cookie from 'vue-cookies'
import App from './App'
import {coiltodolist} from './router'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Cookie)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router: coiltodolist,
  components: { App },
  template: '<App/>'
})
