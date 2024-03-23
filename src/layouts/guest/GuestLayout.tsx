import { Outlet } from "react-router-dom"
import { Logo } from "src/components/logo/Logo.tsx";
import style from "./styles.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const GuestLayout = () => {
    return (
      <div className={"wrapper"}>
        <div className={cx("auth")}>
          <div className={cx("auth__header","container")}>
            <Logo />
          </div>

          <div className={cx("auth__body")}>
            <div className={cx("auth__content")}>
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    )
}
