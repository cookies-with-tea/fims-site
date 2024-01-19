import { useState } from "react"
import { NavLink } from "react-router-dom"
import style from "./navbar.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const Navbar = () => {
    const navigation = [
        {name:"Главная", path:"/"},
        {name:"Новинки", path:"/new-films"},
        {name:"Фильмы", path:"/films"},
        {name:"Топы", path:"/films-top"},
    ]
    return (
        <nav className="nav">
            <ul className="menu">
                {
                    navigation.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.path}>
                                {item.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
