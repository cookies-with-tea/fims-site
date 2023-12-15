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
    passwordHideIcon?: ReactNode
    passwordShowIcon?: ReactNode
    iconClear?: ReactNode
    clearable?: boolean
    // size?: 'sm' | 'md'
    value?: string | number
    prepend?: string | ReactNode
    append?: string | ReactNode
    onChange: (value: string) => void
}
interface IconProps{
    prefix?: ReactNode
    postfix?: ReactNode
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
        passwordHideIcon,
        passwordShowIcon,
        iconClear,
        value,
        onChange,
        prepend,
        append, 
    }: InputProps) => {
    
    const [passwordShown, setPasswordShown] = useState(false);
    
    const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }
    const inputType = passwordShown ? "text" : type
    const classes = cx(
        className,
        "input",
    )
    const RenderIcon = ({prefix, postfix}: IconProps): ReactNode =>{
        const currentChildren = prefix ? prefix : postfix;
        const classIcon = cx("icon-input",{
            "prefix":!!prefix,
            "postfix":!!postfix,
        })
        return (
            <>
                { currentChildren && (
                    <div className={classIcon}>
                        {currentChildren}
                    </div>
                )}
            </>
        )
    }
    return (
        <div className={cx("input__wrapper")}>
            <RenderIcon prefix={prepend}/>
            <RenderIcon prefix={prefixIcon}/>
            <input
                className={classes}
                value={value}
                type={inputType} 
                placeholder={placeholder}
                disabled={disabled}
                onChange={onValueChange}
            />
            { clearable && (
                    <div onClick={() => onChange("")}>
                        {iconClear ? iconClear: <Icon name="clear" className={cx("icon-input")}/>}
                    </div>
                )
            }
            { type === "password" && (
                <div className={cx('postfix')} onClick={() => setPasswordShown(!passwordShown)}>
                    {passwordShown && (
                            passwordHideIcon ?? (
                                <Icon
                                    name={`password-close`} 
                                    className={cx("icon-input")}
                                />)
                        )
                    }
                    {!passwordShown && (
                            passwordShowIcon ?? (
                                <Icon
                                name={`password-open`} 
                                className={cx("icon-input")}
                            />)
                        )
                    }
                </div>
            )}
            <RenderIcon postfix={postfixIcon}/>
            <RenderIcon postfix={append}/>
        </div>
    )
}
