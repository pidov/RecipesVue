import Vue from 'vue'
import Router from 'vue-router'
import Home from 'router/Home'
import RecipePage from 'router/RecipePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/recipe/:id',
      name: 'Recipe',
      component: RecipePage
    }
  ]
})
