import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../components/accueil/accueil.vue'
import Formations from '../components/formations/formations.vue'
import Ingenieur from '../components/formations/ingenieur/ingenieur.vue'
import Dut from '../components/formations/dut/dut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/formations',
    name: 'Formations',
    component: Formations
  },
  {
    path: '/formations/ingenieur',
    name: 'Ingenieur',
    component: Ingenieur
  },
  {
    path: '/formations/dut',
    name: 'Dut',
    component: Dut
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
