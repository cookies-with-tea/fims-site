import { Register } from "./register/Register"
import style from "./GuestLayou.module.scss"

export const GuestLayout = () => {
    return (
        <div className={style.auth__container}>
            <Register/>
        </div>
    )
}
