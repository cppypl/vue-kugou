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

function KrcFn(){
  clearInterval(timer)
  timer=setInterval(()=>{
      let currentTime=document.getElementById('audio').currentTime;
      console.log(currentTime);
      this.$store.commit('changekrctime',currentTime)
      
      
      if(document.getElementById('audio').paused){
          console.log('歌停止了')
          clearInterval(timer)
      }
      console.log(document.querySelector('.current').offsetTop)
      document.querySelector('#playLrc').style.top=-document.querySelector('.current').offsetTop+'px'
  },1000)
}