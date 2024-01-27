import style from "./mainLayout.module.scss"
// import cnBind from 'classnames/bind'
// import { Outlet } from "react-router-dom"
// const cx = cnBind.bind(style)

import { Outlet } from "react-router-dom"
import { Header } from "src/components/header/Header"

export const MainLayout = () => {
    return (
        <div className={style.w}>
            <Header/>
            <Outlet/>
        </div>
    )
}
