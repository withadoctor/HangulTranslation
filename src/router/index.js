import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  hash: false,
  mode: 'history',
  linkActiveClass: "",
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
    }
  ]
})
