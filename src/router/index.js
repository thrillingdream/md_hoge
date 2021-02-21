import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu.vue'
import blog from '@/components/ViewBlog.vue'
import ViewMd from '@/components/ViewMd.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/blog/:id(\\d+)',
      name: 'blog',
      component: blog,
      props: route => ({ id: Number(route.params.id) }), 
      meta: { title: 'ブログ記事', desc: '記事作るのしんどい' }
    },
  ]
})
