import Vue from 'vue'
import Router from 'vue-router'
import Home from 'router/Home'
import Recipe from 'router/Recipe'
import Recipes from 'router/Recipes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/рецепта/:slug',
      name: 'Recipe',
      component: Recipe
    }, {
      path: '/рецепти',
      name: 'Recipes',
      component: Recipes
    }
  ]
})
