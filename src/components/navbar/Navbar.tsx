// import { NavLink } from "react-router-dom"
import style from "./navbar.module.scss"
import cnBind from 'classnames/bind'
import { Tooltip } from "src/ui/tooltip/Tooltip"

const cx = cnBind.bind(style)

export const Navbar = () => {
    // DEBT: до реализации компонента Tooltip данный компонент приостановлен
    const navigation = [
        {name:"Главная", path:"/"},
        {name:"Новинки", path:"/new-anime"},
        {name:"Аниме", path:"/anime"},
        {name:"Топы", path:"/anime-top"},
    ]

    return (
        <nav className={cx("nav")}>
            <ul className={cx("menu")}>
                {
                    navigation.map((item, index) => (
                        <li key={index} className={cx("menu__item")}>
                            {/* <NavLink to={item.path} className={cx("menu__link")}> */}
                                {index != 2 ? item.name : <Tooltip content="Аниме" trigger="click" position="top"> {item.name}</Tooltip>}
                            {/* </NavLink> */}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
