import style from "./input.module.scss"
import cnBind from 'classnames/bind'
// import { ChangeEvent } from 'react'


interface InputProps {
    className?: string
    placeholder?: string
    type?: 'text' | 'password' | 'textarea' | 'number'
    disabled?: boolean
    // name?: string
    // size?: 'sm' | 'md'
    // value?: string | number
    // onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
        // size="",
        className="",
        placeholder="",
        type="text",
        disabled=false
    }:InputProps) => {

    const cx = cnBind.bind(style)
    return (
        <input
            className={cx("input", className)}
            type={type} 
            placeholder={placeholder}
            disabled={disabled}
        />
    )
}
