import { ReactNode, ChangeEvent, useState} from "react"
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
    clearable?: boolean
    // size?: 'sm' | 'md'
    value?: string | number
    onChange: (value: string) => void
    prepend?: string| ReactNode
    append?: string| ReactNode
}

export const Input = ({
        // size="",
        className="",
        placeholder="",
        type="text",
        disabled=false,
        clearable=false, 
        postfixIcon,
        prefixIcon,
        iconPassword,
        value,
        onChange,
        prepend,
        append, 
    }: InputProps) => {
    
    const [passwordShown, setPasswordShown] = useState(false);
    
    const OnChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }
    const inputType = passwordShown ? "text" : type
    const classes = cx(
        className,
        "input",
    )
    return (
        <div className={cx("input__wrapper")} style={{maxWidth:"400px"}}>
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
                onChange={OnChangeInput}
            />
            {clearable && value &&  (
                    <div className={cx('postfix-icon')} onClick={() => onChange("")}>
                        <Icon name="close" className={cx("icon-input")}/>
                    </div>
                )
            }
            { type === "password" && (
                <div className={cx('postfix-icon', "icon-input")} onClick={() => setPasswordShown(!passwordShown)}>
                    <Icon
                        name={`${iconPassword ? iconPassword: "password"}`} 
                        className={cx("icon-input")}
                    />
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
