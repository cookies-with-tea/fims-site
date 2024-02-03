import { Navbar } from "src/components/navbar/Navbar"
import style from "./header.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const Header = () => {
    return (
        <header className={cx("header")}>
            <div className="container">
                <Navbar/>
            </div>
        </header>
    )
}
