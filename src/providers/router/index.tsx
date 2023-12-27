import { GuestLayout } from "src/layouts/guest/GuestLayout";
import { Login } from "src/pages/login/Login";
import { Registration } from "src/pages/Registration/Registration";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout/>,
        children:[
            {
                path: "/",
                element: <Login/>
            },
            {
                path: "/Registration",
                element: <Registration/>
            }
        ] 
    },
]);