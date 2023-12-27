import { GuestLayout } from "src/layouts/guest/GuestLayout";
import { PageLogin } from "src/pages/login/PageLogin";
import { PageRegistration } from "src/pages/registration/PageRegistration";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
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