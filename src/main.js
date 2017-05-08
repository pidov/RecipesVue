// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from 'router/index'
import Filters from './filters'
require('swiper')
/* eslint-disable no-new */

Vue.use(VueRouter
)
Filters.init(Vue)

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
})

if (__DEV__) {
  global.Vue = Vue
}
