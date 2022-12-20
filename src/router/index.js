import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/studint-view/:id',
    name:'studint-Post',
    component: () => import(/* webpackChunkName: "about" */ '../views/StudintPost.vue')
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/studint-view',
    name:'studint-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Studints.vue'),
  },
  {
    path:'/help-view',
    name:'help-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue'),
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
