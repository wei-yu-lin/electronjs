import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router) //啟用Router

export default new Router({
  routes: [{  //設定路徑
    path: '/index', //自訂路徑
    name: 'HelloWorld', //設定名稱
    component: HelloWorld //選擇要對應的元件
  }]
})