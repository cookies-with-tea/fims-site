import {Logo} from "src/components/logo/Logo"
import {Button , Icon} from "ui/index.tsx"
import { Navbar } from "components/navbar/Navbar"
import {AnimeSearch} from "components/anime-search/AnimeSearch.tsx";
// import {Button} from "src/ui/button/Button.tsx";
// import {Icon} from "src/ui/icon/Icon.tsx";
import style from "./styles.module.scss"
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
                prefixIcon={
                  <Icon name={"user"} className={cx("header__icon")}/>
                }
              >
                Вход
              </Button>
            </div>
        </header>
    )
}
