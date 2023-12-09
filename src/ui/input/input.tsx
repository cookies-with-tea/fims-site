import { ReactNode, useState} from "react"
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
    
    const classes = cx(
        className,
        "input",
    )

    return (
        <div className={cx("input--wrapper")}>
            { iconPassword && (
                <div className={cx('postfix-icon')} onClick={() => setPasswordShown(!passwordShown)}>
                    { iconPassword }
                </div>
            )}
            { prefixIcon && (
                <div className={cx('prefix-icon')}>
                    { prefixIcon }
                </div>
            )} 
            <input
                className={classes}
                value={value}
                type={passwordShown ? "text" : type} 
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
            { postfixIcon && (
                <div className={cx('postfix-icon')}>
                    { postfixIcon }
                </div>
            )}
        </div>
        
    )
}
