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
    iconClose?: ReactNode
    iconOpen?: ReactNode
    iconClear?: ReactNode
    clearable?: boolean
    // size?: 'sm' | 'md'
    value?: string | number
    prepend?: string | ReactNode
    append?: string | ReactNode
    onChange: (value: string) => void
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
        iconClose,
        iconOpen,
        iconClear,
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
    const renderIcon = (children: ReactNode): ReactNode =>{
        return (
            <>
                { children && (
                    <div className={cx("prefix","icon-input")}>
                        { children }
                    </div>
                )}
            </>
        )
        
    }
    return (
        <div className={cx("input__wrapper")}>
            {prepend && (
                <div className={cx('prefix')}>
                    { prepend }
                </div>
            )}
            {renderIcon(prefixIcon)}
            <input
                className={classes}
                value={value}
                type={inputType} 
                placeholder={placeholder}
                disabled={disabled}
                onChange={OnChangeInput}
            />
            {clearable && (
                    <div  onClick={() => onChange("")}>
                        {iconClear ? iconClear: <Icon name="clear" className={cx("icon-input")}/>}
                    </div>
                )
            }
            { type === "password" && (
                <div className={cx('postfix')} onClick={() => setPasswordShown(!passwordShown)}>
                    {passwordShown && (
                            iconClose ? iconClose:(
                                <Icon
                                    name={`password-close`} 
                                    className={cx("icon-input")}
                                />)
                        )
                    }
                    {!passwordShown && (
                            iconOpen ? iconOpen:(
                                <Icon
                                name={`password-open`} 
                                className={cx("icon-input")}
                            />)
                        )
                    }
                </div>
            )}
            {renderIcon(postfixIcon)}
        </div>
    )
}
