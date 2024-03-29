import { createBrowserRouter } from 'react-router-dom'
import { PageLogin, PageRegistration, MainPage } from '@/pages'
import { GuestLayout } from '@layouts/guest/GuestLayout'
import { MainLayout } from '@layouts/base/MainLayout'

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
