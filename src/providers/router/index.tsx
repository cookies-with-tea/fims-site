import { GuestLayout } from "src/layouts/guest/GuestLayout";
import { PageLogin } from "src/pages/auth/login/PageLogin";
import { PageRegistration } from "src/pages/auth/registration/PageRegistration";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "src/layouts/main-layout/MainLayout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>
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