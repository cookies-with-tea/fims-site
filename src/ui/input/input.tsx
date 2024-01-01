import { ReactNode, ChangeEvent, useState} from "react"
import { Icon } from "../icon/Icon"
import style from "./input.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface InputProps {
    className?: string
    placeholder?: string
    type?: 'text' | 'password' | 'textarea' | 'number'| 'email'
    disabled?: boolean
    prefixIcon?: ReactNode
    postfixIcon?: ReactNode
    passwordHideIcon?: ReactNode
    passwordShowIcon?: ReactNode
    iconClear?: ReactNode
    clearable?: boolean
    size?: 'md' | 'sm' | 'xs'
    value?: string | number
    prepend?: string | ReactNode
    append?: string | ReactNode
    rows?: number
    onChange: InputChangeEventHandler
    onClearValue?: (value: string) => void;
    name: string
}

interface IconProps{
    prefix?: ReactNode
    postfix?: ReactNode
}

interface ContentProps{
    prepend?: ReactNode
    append?: ReactNode
}

type InputChangeEventHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

export const Input = ({
        size = "md",
        className = "",
        placeholder = "",
        type = "text",
        disabled = false,
        clearable = false, 
        rows = 4,
        postfixIcon,
        prefixIcon,
        passwordHideIcon,
        passwordShowIcon,
        iconClear,
        value,
        onChange,
        onClearValue,
        prepend,
        append,
        name,
    }: InputProps) => {
    
    const [passwordShown, setPasswordShown] = useState(false);

    const inputType = passwordShown ? "text" : type
    const classes = cx(
        className,
        "input__inner",
    )
    const RenderIcon = ({prefix, postfix}: IconProps): ReactNode =>{
        const currentChildren = prefix ?? postfix;

        const classIcon = cx("input__icon", {
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
    if(type === "textarea"){
        return(
            <textarea 
                className={cx("textarea")}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                rows={rows}
                onChange={onChange}
                name={name}
            />
        )
    }

    return (
        <div className={cx("input", size)}>
            <RenderContent prepend={prepend}/>

            <RenderIcon prefix={prefixIcon}/>

            <input
                className={classes}
                value={value}
                type={inputType} 
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                name={name}
            />

            { clearable && value && (
                    <div onClick={() => onClearValue && onClearValue(name)} className={cx('postfix')}>
                        {iconClear ?? <Icon name="clear" className={cx("input__icon")}/>}
                    </div>
                )
            }

            { type === "password" && (
                <div className={cx('postfix')} onClick={() => setPasswordShown(!passwordShown)}>
                    {!passwordShown ? (
                            passwordHideIcon ?? (
                                <Icon
                                    name={`eye-off`} 
                                    className={cx("input__icon")}
                                />)
                        ): passwordShowIcon ?? (
                            <Icon
                                name={`eye-on`} 
                                className={cx("input__icon")}
                        />)
                    }
                </div>
            )}

            <RenderIcon postfix={postfixIcon}/>

            <RenderContent append={append}/>
        </div>
    )
}
