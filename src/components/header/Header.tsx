import {Logo} from "src/components/logo/Logo"
import { Navbar } from "src/components/navbar/Navbar"
import {AnimeSearch} from "src/components/anime-search/AnimeSearch.tsx";
import {Button} from "src/ui/button/Button.tsx";
import style from "./header.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const Header = () => {
    return (
        <header className={cx("header")}>
            <div className={cx("container", "header__container")}>
              <Logo/>

              <Navbar/>

              <AnimeSearch/>

              <Button
                className={cx("header__button")}
                href={"/login"}
              >
                Вход
              </Button>
            </div>
        </header>
    )
}
