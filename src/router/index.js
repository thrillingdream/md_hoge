import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ViewMd from '@/components/ViewMd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/XXX',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'ViewMd',
      component: ViewMd,
      // meta: { title: 'ページタイトル', desc: 'ディスクリプションを記述' }
    },
  ]
})
