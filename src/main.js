// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import store from './store'
import '@/assets/css/main.css'


Vue.use(VueAxios,Axios)
Vue.use(MintUI)



Vue.config.productionTip = false

/* eslint-disable no-new */
let vm=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})