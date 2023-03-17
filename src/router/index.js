import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from '../views/Dashboard.vue'
import ErrorPage from '../views/ErrorPage.vue'
import SignUp from '../views/SignUp.vue'
import ProductPage from '../views/ProductPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard
  },
  {
    path: '/dashboard/:id',
    name: ':id',
    component: ProductPage
  },
  {
    path: '/:catchAll(.*)',
    name: 'Page_Not_Found',
    component: ErrorPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp
  },
  // {
  //   path:'*',
  //   redirect:'/404'
  // },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LogIn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
