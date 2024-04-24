import { ReactNode, ChangeEvent, useState, forwardRef, RefObject } from 'react'
import { Icon } from '@/ui'
import style from './styles.module.scss'
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
    clearable?: boolean | ReactNode
    size?: 'md' | 'sm' | 'xs'
    value?: string | number
    prepend?: string | ReactNode
    append?: string | ReactNode
    rows?: number
    autocorrectIcons?: boolean | ReactNode
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

export const Input = forwardRef<
    HTMLInputElement | HTMLTextAreaElement,
    InputProps>(function Input({
        size = 'md',
        className = '',
        placeholder = '',
        type = 'text',
        disabled = false,
        clearable = <Icon name='clear' className={cx('input__icon')}/>,
        rows = 4,
        postfixIcon,
        prefixIcon,
        passwordHideIcon = <Icon name={'eye-off'} className={cx('input__icon')}/>,
        passwordShowIcon = <Icon name={'eye-on'} className={cx('input__icon')}/>,
        value,
        onChange,
        onClearValue,
        prepend,
        append,
        autocorrectIcons= false,
        name,
    }, ref){

    const [passwordShown, setPasswordShown] = useState(false)

    const inputType = passwordShown ? 'text' : type
    const classes = cx(
        className,
        'input__inner',
    )
    const RenderIcon = ({ prefix, postfix }: IconProps): ReactNode =>{
        const currentChildren = prefix ?? postfix

        const classIcon = cx('input__icon', {
            prefix,
            postfix,
        })
        return (
          <>
            { currentChildren && (
              <div className={classIcon}>
                { currentChildren }
              </div>
              )}
          </>
        )
    }
    const RenderContent = ({ prepend, append }: ContentProps): ReactNode =>{
        const currentChildren = prepend ?? append

        const classes = cx('input__content', { prepend, append })
        return (
          <>
            { currentChildren && (
              <div className={ classes }>
                { currentChildren }
              </div>
            )}
          </>
        )
    }
    if(type === 'textarea'){
        return(
          <textarea
            className={cx('textarea')}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            rows={rows}
            ref={ref as RefObject<HTMLTextAreaElement>}
            name={name}
            onChange={onChange}
          />
        )
    }

    return (
      <div className={cx('input', size)}>
        <RenderContent prepend={prepend}/>

        <RenderIcon prefix={prefixIcon}/>

        <input
          className={classes}
          value={value}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref as RefObject<HTMLInputElement>}
          name={name}
          onChange={onChange}
        />

        { clearable && value && (
          <div  className={cx('postfix')} onClick={() => onClearValue?.(name)}>
            { clearable }
          </div>
        )}

        { autocorrectIcons && !value && (
          <div className={cx('postfix')}>
            { autocorrectIcons }
          </div>
        )}

        {type === 'password' && (
          <div className={cx('postfix')} onClick={() => setPasswordShown(!passwordShown)}>
            {!passwordShown ? passwordHideIcon : passwordShowIcon}
          </div>
        )}

        <RenderIcon postfix={postfixIcon}/>

        <RenderContent append={append}/>
      </div>
    )
})
