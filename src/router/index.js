import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import coil from '@/view/Coil'
import coilmod from '@/view/view_child/Coilmod'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
