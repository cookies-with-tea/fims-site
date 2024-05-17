import { Dropdown, Icon } from '@/ui'
import { ReactNode,  useState } from 'react'
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
  onClearValue?: () => void
  value?: string | OptionType['value'][]
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
  value,
  onClearValue,
  onChange,
  multiple = false
  }: SelectType) => {
  const [valuesState, setValuesState] = useState([])

  const handleValuesChange = (value: OptionType) => {
    const _values = new Set(valuesState)

    if (_values.has(value)) {
      _values.delete(value)
    } else {
      _values.add(value)
    }

    setValuesState([..._values])

    onChange?.(valuesState.map(map => map.value))
  }

  const handleOptionChange = (value) => {
    if (!multiple) {
      onChange?.(value)

      const _values = new Set(valuesState)

      _values.clear()

      _values.add(value)

      setValuesState(_values)

      return
    }

    handleValuesChange(value)
  }
  const handleOptionRemove = (event) => {
    event.stopPropagation()
    console.log(valuesState)

    setValuesState(current =>
      current.filter((employee, index) => index != 0),
    )

    onChange?.(valuesState.map(map => map.value))
  }

  return (
    <Dropdown
      hideOnClick={!multiple}
      trigger={'click'}
      content={<SelectOptions data={data} values={valuesState} onChange={handleOptionChange} />}
      className={cx('select__dropdown')}
    >
      <div className={cx('select', size)}>
        { !!valuesState.length && (
          <div className={cx('select__selected-item')}>
            <p className={cx('select__selected-text')}>
              {valuesState[0].label}
            </p>

            <button onClick={handleOptionRemove}>
              <Icon name={'close'} className={cx('select__selected-icon')} />
            </button>
          </div>
        )}

        {valuesState.length > 1 && (
          <div className={cx('select__selected-item')}>
            <span> +{valuesState.length - 1}</span>
          </div>
        )}

        <input
          placeholder={!valuesState.length ? placeholder : ''}
          className={cx('select__input')}
          value={value}
        />

        { clearable && value && (
          <div
            className={cx('postfix')}
            onClick={(event) => {
              event.stopPropagation()
              onClearValue?.()
            }}
          >
            { clearable }
          </div>
        )}

        { autocorrectIcons && !value && (
          <div className={cx('postfix')}>
            { autocorrectIcons }
          </div>
        )}
      </div>
    </Dropdown>
  )
}
