import { Dropdown, Icon } from '@/ui'
import { ReactNode,  useEffect,  useState , MouseEvent } from 'react'
import { SelectOptions } from '@ui/select/options/SelectOptions'
import { UnionOrArray, OptionType } from '@/types'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface SelectType {
  placeholder?: string
  size?: 'md' | 'sm' | 'xs'
  clearable?: ReactNode | boolean
  autocorrectIcons?: ReactNode | boolean
  data: OptionType[]
  onChange?: (values: UnionOrArray<OptionType['value']>) => void
  multiple?: boolean
  variant?: 'primary' | 'secondary'
  prefixIcon?: ReactNode
  postfixIcon?: ReactNode
}

interface IconProps {
  prefix?: ReactNode
  postfix?: ReactNode
}

export const Select = ({
  variant = 'primary',
  placeholder = '',
  data,
  autocorrectIcons = <Icon name={'arrow-filter'} className={cx('select__icon-arrow')}/>,
  clearable = <Icon name={'clear'} className={cx('select__icon-arrow')}/>,
  size = 'xs',
  onChange,
  multiple = false,
  postfixIcon,
  prefixIcon,
  }: SelectType) => {
  const [valuesState, setValuesState] = useState<OptionType[]>([])

  const handleOptionChange = (value: OptionType) => {
    const _values = new Set(valuesState)

    if (_values.has(value)) {
      _values.delete(value)
    } else {
      !multiple && _values.clear()

      _values.add(value)
    }

    setValuesState([..._values])
  }

  const handleOptionRemove = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    setValuesState((current) =>
      current.filter((_, index) => index !== 0)
    )
  }

  useEffect(() => {
    if (!valuesState.length) return

    const getValuesChecked = multiple ? valuesState.map(option => option.value): valuesState[0]?.value

    onChange?.(getValuesChecked ?? '' )
  }, [valuesState])

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

  return (
    <Dropdown
      hideOnClick={!multiple}
      trigger={'click'}
      content={<SelectOptions data={data} values={valuesState} onChange={handleOptionChange} />}
      className={cx('select__dropdown')}
    >
      <div className={cx('select', variant, size)}>
        { multiple && !!valuesState.length && (
          <div className={cx('select__item')}>
            <p className={cx('select__text')}>
              { valuesState[0].label }
            </p>

            <button onClick={handleOptionRemove}>
              <Icon name={'close'} className={cx('select__icon')} />
            </button>
          </div>
        )}

        { multiple && valuesState.length > 1 && (
          <div className={cx('select__item')}>
            <span>+{ valuesState.length - 1 }</span>
          </div>
        )}

        <RenderIcon prefix={prefixIcon}/>

        <input
          placeholder={!valuesState.length ? placeholder : ''}
          className={cx('select__input')}
          defaultValue={!multiple && valuesState.length ? valuesState[0]?.label : ''}
        />

        { clearable && !!valuesState.length && (
          <div
            className={cx('postfix')}
            onClick={(event) => {
              event.stopPropagation()
              setValuesState([])
            }}
          >
            { clearable }
          </div>
        )}

        { autocorrectIcons && !valuesState.length && (
          <div className={cx('postfix')}>
            { autocorrectIcons }
          </div>
        )}

        <RenderIcon postfix={postfixIcon}/>
      </div>
    </Dropdown>
  )
}
