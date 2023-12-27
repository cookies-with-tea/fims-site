import { Outlet } from "react-router-dom"
import style from "./GuestLayou.module.scss"

export const GuestLayout = () => {
    return (
        <div className={style.auth}>
            <Outlet/>
        </div>
    )
}
