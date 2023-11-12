import { createRouter, createWebHistory } from 'vue-router';
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import AuthPage from '@/components/pages/AuthPage.vue';
import { RouteNames } from '@/router/routeNames';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import HomePage from '@/components/pages/HomePage.vue';
import AdminsPage from '@/components/pages/AdminsPage.vue';
import SettingsPage from '@/components/pages/SettingsPage.vue';
import StatisticsPage from '@/components/pages/StatisticsPage.vue';
import UsersPage from '@/components/pages/UsersPage.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: DefaultLayout,
      path: '/',
      alias: '/home',
      children: [
        {
          name: RouteNames.Home,
          path: '/',
          component: HomePage,
        },
        {
          name: RouteNames.Admins,
          path: '/admins',
          component: AdminsPage,
        },
        {
          name: RouteNames.Settings,
          path: '/settings',
          component: SettingsPage,
        },
        {
          name: RouteNames.Statistics,
          path: '/stat',
          component: StatisticsPage,
        },
        {
          name: RouteNames.Users,
          path: '/users',
          component: UsersPage,
        },
      ],
    },
    {
      component: AuthLayout,
      path: '/',
      children: [{ name: RouteNames.Auth, path: 'auth', component: AuthPage }],
    },
  ],
});
