import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { GuestLayout } from '@layouts/guest/GuestLayout'
import { MainLayout } from '@layouts/home/MainLayout'

const MainPage = lazy(() => import('@pages/home'))
const AnimePage = lazy(() => import('@pages/anime-list'))
const PageLogin = lazy(() => import('@pages/auth/login'))
const PageRegistration = lazy(() => import('@pages/auth/registration'))

const ROUTES = {
  MAIN: {
    path: '/'
  },

  LOGIN: {
    path: '/login',
  },

  REGISTRATION: {
    path: '/registration',
  },

  ANIME: {
    path: '/anime',
  }
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
          {
              path: ROUTES.MAIN.path,
              element: <MainPage/>
          },

          {
            path: ROUTES.ANIME.path,
            element: <AnimePage/>
          }
        ]
    },

    {
        path: '/',
        element: <GuestLayout/>,
        children:[
          {
              path: ROUTES.LOGIN.path,
              element: <PageLogin/>
          },
          {
              path: ROUTES.REGISTRATION.path,
              element: <PageRegistration/>
          }
        ]
    },
])
