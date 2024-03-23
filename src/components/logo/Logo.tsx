import { Link } from "react-router-dom";
import style from "./logo.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const Logo = (props?: Partial <HTMLDivElement>) => {
  return (
    <div className={cx("logo", props?.className)}>
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
