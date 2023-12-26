import { Register } from "./register/Register"
import { useLocation } from "react-router-dom"
import { Login } from "./login/Login"
import style from "./GuestLayou.module.scss"

export const GuestLayout = () => {
    const {pathname} = useLocation()
    const currentPage = pathname === "/login" ? <Login/> : <Register/>
    
    return (
        <div className={style.auth}>
            <div className={style.auth__container}>
                {currentPage}
            </div>
        </div>
    )
}
