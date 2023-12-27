// import { Register } from "../../pages/Registration/Registration"
import { useLocation } from "react-router-dom"
import { Login } from "../../pages/login/Login"
import style from "./GuestLayou.module.scss"

export const GuestLayout = () => {
    // const {pathname} = useLocation()
    // const currentPage = pathname === "/login" ? <Login/> : <Register/>
    
    return (
        <div className={style.auth}>
            <div className={style.auth__container}>
                11111111
            </div>
        </div>
    )
}
