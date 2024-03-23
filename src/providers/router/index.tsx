import { GuestLayout } from "layouts/guest/GuestLayout.tsx";
import { PageLogin } from "pages/auth/login/PageLogin.tsx";
import { PageRegistration } from "pages/auth/registration/PageRegistration.tsx";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "layouts/base/MainLayout.tsx";
import { MainPage } from "pages/base/MainPage.tsx";

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
                path: "/login",
                element: <PageLogin/>
            },
            {
                path: "/registration",
                element: <PageRegistration/>
            }
        ]
    },
]);
