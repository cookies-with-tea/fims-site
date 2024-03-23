import { Link } from "react-router-dom";
import style from "./logo.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface LogoProp {
  className?: string
}

export const Logo = ({ className }: LogoProp) => {
  return (
    <div className={cx("logo", className)}>
      <Link to={"/"} className={cx("logo__link")}>
        <p className={cx("logo__anime")}>
          Anime
        </p>

        <p className={cx("logo__summer")}>
          Summer
        </p>
      </Link>
    </div>
  )
}
