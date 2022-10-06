import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'DefaultLayout',
      component: () => import('@/layouts/DefaultLayout.vue'),
    //   children: [
    //     {
    //         path: '/',
    //         name: 'Home'
    //     }
    //  ] 
    }       
  ]
  
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router
