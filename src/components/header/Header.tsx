// import { Icon } from 'src/ui/icon/Icon';
// import { useState } from 'react';
import style from "./header.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const Header = () => {
    return (
        <header className={cx("header")}>
            <div className="container">

            </div>

        </header>
    )
}
