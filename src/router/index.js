import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
