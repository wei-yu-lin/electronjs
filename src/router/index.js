import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'vue-cookies'

import Login from '@/view/member_system/Login'
import About from '@/view/About'
import Regsiter from '@/view/member_system/Regsiter'
import search from '@/view/hotel/Search'
import coilmod from '@/view/hotel/Coilmod'

Vue.use(Router) // 啟用Router

const coiltodolist = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regsiter',
      name: 'Regsiter',
      component: Regsiter
    },
    {
      path: '/search',
      name: '查詢',
      component: search,
      meta: { requireAuth: true },
      children: [
        {
          path: '/coil/insert',
          name: '鋼捲新增',
          component: coilmod
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

coiltodolist.beforeEach(async (to, from, next) => {
  if (to.meta.requireAuth) {
    const info = Cookies.get('login')
    if (info) {
      const token = info.token
      // 如果token不為空，且確實有這個欄位則讓路由變更
      if (token.length > 0 || token === undefined) {
        next()
      } else {
        // 未通過則導回login頁面
        next({ name: 'Login' })
      }
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export {coiltodolist}
