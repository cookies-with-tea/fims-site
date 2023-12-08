import { ReactNode} from "react"
import style from "./input.module.scss"
import cnBind from 'classnames/bind'
import { Icon } from "../icon/Icon"

const cx = cnBind.bind(style)

interface InputProps {
    className?: string
    placeholder?: string
    type?: 'text' | 'password' | 'textarea' | 'number'
    disabled?: boolean
    prefixIcon?: ReactNode
    postfixIcon?: ReactNode
    icon?: ReactNode
    clearable?: ReactNode
    // name?: string
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

    const RenderIcon = (): ReactNode => {
        const classIcon = cx({
            "prefix-icon":!!prefixIcon,
            "postfix-icon":!!postfixIcon,
        })
        return (
            <>
                <div className={classIcon}>
                    { prefixIcon && prefixIcon}
                    { postfixIcon && postfixIcon}
                </div>
            </>
        )
    }

    return (
        <div className={cx("input--wrapper")}>
            {<RenderIcon/>}
            <input
                className={classes}
                value={value}
                // type={passwordShown ? "text" : type} 
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                onChange={(event) => onChange(event.target.value)}
            />
            
            <div className={cx('postfix-icon')} onClick={() => onChange("")}>
                {clearable ? clearable: <Icon name="close" className="icon-input"/>}
            </div>
        </div>
        
    )
}
/* { prefixIcon && (
    <div className={cx('prefix-icon')}>
        { prefixIcon }
    </div>
)} */

// { postfixIcon && (
//     <div className={cx('postfix-icon')}>
//         { postfixIcon }
//     </div>
// )}
// { iconPassword && (
//     <div className={cx('postfix-icon')} onClick={() => setPasswordShown(!passwordShown)}>
//         { iconPassword }
//     </div>
// )}