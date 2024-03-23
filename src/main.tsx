import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import {router} from "providers/router";
import 'virtual:svg-icons-register'
import "./scss/base.scss"


ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
