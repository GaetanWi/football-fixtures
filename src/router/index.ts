

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LeagueBoardRoutes from '@/views/LeagueBoard/LeagueBoard.routes.ts';

Vue.use(VueRouter)

const routes = [
  ...LeagueBoardRoutes,
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
