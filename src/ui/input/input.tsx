import { ReactNode, useState} from "react"
import { Icon } from "../icon/Icon"
import style from "./input.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface InputProps {
    className?: string
    placeholder?: string
    type?: 'text' | 'password' | 'textarea' | 'number'
    disabled?: boolean
    prefixIcon?: ReactNode
    postfixIcon?: ReactNode
    iconPassword?: ReactNode
    clearable?: ReactNode
    // size?: 'sm' | 'md'
    value?: string | number
    onChange: (value: string) => void
}

export const Input = ({
        // size="",
        className="",
        placeholder="",
        type="text",
        disabled=false,
        postfixIcon,
        prefixIcon,
        iconPassword,
        clearable, 
        value,
        onChange
    }: InputProps) => {
    
    const [passwordShown, setPasswordShown] = useState(false);
    
    const inputType = passwordShown ? "text" : type
    const classes = cx(
        className,
        "input",
    )
    return (
        <div className={cx("input--wrapper")} style={{maxWidth:"400px"}}>
            { prefixIcon && (
                <div className={cx('prefix-icon', "icon-input")}>
                    { prefixIcon }
                </div>
            )} 
            <input
                className={classes}
                value={value}
                type={inputType} 
                placeholder={placeholder}
                disabled={disabled}
                onChange={(event) => onChange(event.target.value)}
            />
            {clearable && value && (
                    <div className={cx('postfix-icon')} onClick={() => onChange("")}>
                        {clearable}
                    </div>
                )
            }
            { type === "password" && (
                <div className={cx('postfix-icon', "icon-input")} onClick={() => setPasswordShown(!passwordShown)}>
                    {<Icon name={`${iconPassword ? iconPassword: "password"}`} className={cx("icon-input")}/>}
                </div>
            )}
            { postfixIcon && (
                <div className={cx('postfix-icon')}>
                    { postfixIcon }
                </div>
            )}
        </div>
        
    )
}
