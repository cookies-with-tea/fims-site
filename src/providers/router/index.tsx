import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { GuestLayout } from '@layouts/guest/GuestLayout'
import { MainLayout } from '@layouts/home/MainLayout'

const MainPage = lazy(() => import('@pages/base'))
const PageLogin = lazy(() => import('@pages/auth/login'))
const PageRegistration = lazy(() => import('@pages/auth/registration'))

const ROUTES = {
  LOGIN: {
    path: '/login',
  },
  REGISTRATION: {
    path: '/registration',
  },
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <MainPage/>
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
