import { createRouter, createWebHistory } from 'vue-router'
import Commentaire from '../views/Commentaire.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import List from '../views/List.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/Commentaire',
      name: 'Commentaire',
      component: Commentaire
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
  ]
})

export default router
