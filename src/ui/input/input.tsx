import { ReactNode} from "react"
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
    
    // const [passwordShown, setPasswordShown] = useState(false);
    
    const classes = cx(
        className,
        "input",
    )
    return (
        <div className={cx("input--wrapper")}>
            
            <input
                className={classes}
                value={value}
                // type={passwordShown ? "text" : type} 
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                onChange={(event) => onChange(event.target.value)}
            />
            
            { clearable && (
                <div className={cx('postfix-icon')} onClick={() => onChange("")}>
                    { clearable }
                </div>
            )}
        </div>
        
    )
}
{/* { prefixIcon && (
    <div className={cx('prefix-icon')}>
        { prefixIcon }
    </div>
)} */}

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