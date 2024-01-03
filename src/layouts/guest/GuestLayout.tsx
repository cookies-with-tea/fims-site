// import { Outlet } from "react-router-dom"
import { Dialog } from "src/ui/dialog/Dialog"
import style from "./guestLayout.module.scss"

export const GuestLayout = () => {
    return (
        <div className={style.auth}>
            <div className={style.auth__body}>
                {/* <Outlet/> */}
                <Dialog show/>
            </div>
        </div>
    )
}
