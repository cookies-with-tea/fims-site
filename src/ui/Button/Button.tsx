import { Link } from 'react-router-dom';
import { ReactNode, MouseEvent } from 'react';
import style from "./styles.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface ButtonProps {
    size?: 'md' | 'sm' | 'xs'
    variant?: "primary"| "secondary"
    className?: string
    children?: ReactNode
    type?: "button"| "submit"
    radius?: "min" | "max"
    disabled?: boolean
    href?: string
    prefixIcon?: ReactNode
    postfixIcon?: ReactNode
    icon?: ReactNode
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
        size = "md",
        variant = "primary",
        className = "",
        type = "button",
        radius = "min",
        disabled = false,
        href = "",
        children,
        prefixIcon,
        postfixIcon,
        icon,
        onClick
    }: ButtonProps) => {

    const classes = cx(
        "btn",
        `border-${radius}`,
        {"prefixIcon": !!prefixIcon },
        {"postfixIcon": !!postfixIcon },
        className,
        variant,
        size,
    );

    const ConditionalRender = (): ReactNode => {
        return (
            <>
                { icon && !children && icon }
                { prefixIcon && (
                    <div className={cx('prefix-icon')}>
                        { prefixIcon }
                    </div>
                ) }
                { children && children }
                { postfixIcon && (
                    <div className={cx('suffix-icon')}>
                        { postfixIcon }
                    </div>
                ) }
            </>
        )
    }

    if(href){
        return (
            <Link to={href} className={classes}>
                <ConditionalRender/>
            </Link>
        )
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={classes}
            disabled={disabled}>
            <ConditionalRender/>
        </button>
    )
}
