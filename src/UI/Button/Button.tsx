// import React from 'react'
import cls from 'classnames';
import style from "./Button.module.scss"
import { Link } from 'react-router-dom';

function Button({ 
        variant, borderSize="min",children,
        type= "button",  size="md", typeSize="primary",
        disabled, href=""
    }) {

    const classes = cls(
        style.btn,
        style[variant],
        style[`border-${borderSize}`],
        !href ? style[`${typeSize}-${size}`]:style.link,
    );
    
    return href ? (
        <Link to={href} className={classes}>{children}</Link>
    ):(<button type={type} className={classes} disabled={disabled}>{children}</button>)
    
}
export default Button