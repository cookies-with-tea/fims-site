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

interface ContentProps{
    prepend?: ReactNode
    append?: ReactNode
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
        "input__inner",
    )
    const RenderIcon = ({prefix, postfix}: IconProps): ReactNode =>{
        const currentChildren = prefix ?? postfix;
        const classIcon = cx("icon",{
            prefix,
            postfix,
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
    const RenderContent = ({prepend, append}: ContentProps): ReactNode =>{
        const currentChildren = prepend ?? append;
        const classes = cx("input__content", { prepend, append })
        return (
            <>
                { currentChildren && (
                    <div className={classes}>
                        {currentChildren}
                    </div>
                )}
            </>
        )
    }
    return (
        <div className={cx("input")}>
            <RenderContent prepend={prepend}/>
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
                    <div onClick={() => onChange("")} className={cx('postfix')}>
                        {iconClear ?? <Icon name="clear" className={cx("icon")}/>}
                    </div>
                )
            }
            { type === "password" && (
                <div className={cx('postfix')} onClick={() => setPasswordShown(!passwordShown)}>
                    {passwordShown && (
                            passwordHideIcon ?? (
                                <Icon
                                    name={`eye-off`} 
                                    className={cx("icon")}
                                />)
                        )
                    }
                    {!passwordShown && (
                            passwordShowIcon ?? (
                                <Icon
                                    name={`eye-on`} 
                                    className={cx("icon")}
                            />)
                        )
                    }
                </div>
            )}
            <RenderIcon postfix={postfixIcon}/>
            <RenderContent append={append}/>
        </div>
    )
}
