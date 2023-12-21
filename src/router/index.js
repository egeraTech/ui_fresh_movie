import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../components/LoginPage.vue';


const routes = [
  {
    path: '/',
    redirect: '/home',
    name:HomePage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }, 
   {
    path: '/login',
    name: 'login',
    component: LoginPage
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
