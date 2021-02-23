import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/member_system/Login'
import Regsiter from '@/view/member_system/Regsiter'
import coil from '@/view/Coil'
import coilmod from '@/view/coil_child/Coilmod'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regsiter',
      name: 'Regsiter',
      component: Regsiter
    },
    {
      path: '/coil',
      name: '鋼捲',
      component: coil,
      children: [
        {
          path: '/coil/insert',
          name: '鋼捲新增',
          component: coilmod
        }
      ]
    }
  ]
})
