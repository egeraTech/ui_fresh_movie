import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';

import LoginPage from '../components/LoginPage.vue';
import MenuComponent from '../components/MenuComponent.vue';
import SearchPage from '../views/SearchPage.vue';
import AccountPage from '../views/AccountPage.vue';
import ComingSoon from '../views/ComingSoon.vue';





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
   {
    path: '/',
    component: MenuComponent,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        name: 'Home',
        component: HomePage
      },
       {
        path: 'comingsoon',
        component: ComingSoon,
      },
      {
        path: 'search',
        component: SearchPage,
      },
      {
        path: 'Account',
        component: AccountPage,
      },
     
       
    ],
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
