import { GuestLayout } from "src/layouts/guest/GuestLayout";
import { PageLogin } from "src/pages/auth/login/PageLogin";
import { PageRegistration } from "src/pages/auth/registration/PageRegistration";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "src/layouts/base/MainLayout";
import { MainPage } from "src/pages/base/MainPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                element: <MainPage/>
            }
        ]
    },

    {
        path: "/",
        element: <GuestLayout/>,
        children:[
            {
                path: "/",
                element: <PageLogin/>
            },
            {
                path: "/registration",
                element: <PageRegistration/>
            }
        ]
    },
]);
