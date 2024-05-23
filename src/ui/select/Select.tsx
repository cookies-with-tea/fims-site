import { Dropdown, Icon } from '@/ui'
import { ReactNode,  useEffect,  useState } from 'react'
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
}

export const Select = ({
  placeholder = 'Жанры',
  data,
  autocorrectIcons = <Icon name={'arrow-filter'} className={cx('select__icon-arrow')}/>,
  clearable = <Icon name={'clear'} className={cx('select__icon-arrow')}/>,
  size = 'sm',
  onChange,
  multiple = false
  }: SelectType) => {
  const [valuesState, setValuesState] = useState<string | string[]>([])

  const handleOptionChange = (value) => {
    const _values = new Set(valuesState)

    if (_values.has(value)) {
      _values.delete(value)
    } else {
      !multiple && _values.clear()

      _values.add(value)
    }

    setValuesState([..._values])
  }

  const handleOptionRemove = (event) => {
    event.stopPropagation()

    setValuesState(current =>
      current.filter((item, index) => index != 0),
    )
  }

  useEffect(() => {
    const getValuesChecked = multiple ? valuesState.map(option => option.value): valuesState[0]?.value

    onChange?.(getValuesChecked ?? '' )
  }, [valuesState])

  return (
    <Dropdown
      hideOnClick={!multiple}
      trigger={'click'}
      content={<SelectOptions data={data} values={valuesState} onChange={handleOptionChange} />}
      className={cx('select__dropdown')}
    >
      <div className={cx('select', size)}>
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
      </div>
    </Dropdown>
  )
}
