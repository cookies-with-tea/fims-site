import { createRouter, createWebHistory } from 'vue-router';
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import AuthPage from '@/components/pages/AuthPage.vue';
import { RouteNames } from '@/router/routeNames';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: AuthLayout,
      path: '/',
      children: [{ name: RouteNames.Auth, path: 'auth', component: AuthPage }],
    },
  ],
});
