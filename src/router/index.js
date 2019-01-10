import Vue from 'vue'
import Router from 'vue-router'

import H from '@/views/test/H'
import index from '@/views/index'
import wordlist from '@/views/wordlist'
import wordpage from '@/views/wordpage'
import puzzlePage from '@/views/puzzlePage'
import unitPage from '@/views/unitPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstindex',
      component: index
    },
    {
      path: '/wordlist',
      name: 'WordList',
      component: wordlist
    },
    {
      path: '/wordpage',
      name: 'wordpage',
      component: wordpage
    },
    {
      path: '/puzzlepage',
      name: 'puzzle',
      component: puzzlePage
    },
    {
      path: '/unitPage',
      name: 'unitPage',
      component: unitPage
    },
  ]
})
