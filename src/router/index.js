import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu.vue'
import blog1 from '@/components/ViewBlog1.vue'
import blog2 from '@/components/ViewBlog2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/blog_1',
      name: 'blog1',
      component: blog1,
      // meta: { title: 'ページタイトル', desc: 'ディスクリプションを記述' }
    },
    {
      path: '/blog_2',
      name: 'blog2',
      component: blog2,
      // meta: { title: 'ページタイトル', desc: 'ディスクリプションを記述' }
    },
  ]
})
