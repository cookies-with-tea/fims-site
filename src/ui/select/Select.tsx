import { Dropdown, Icon } from '@/ui'
import { ReactNode, useState } from 'react'
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
  const [valuesState, setValuesState] = useState<Set<OptionType['value']>>(new Set())
  const [checkedValues, setCheckedValues] = useState<string[]>([])
  console.log(valuesState)
  const handleValuesChange = (value: OptionType['value'], valueChecked?: string) => {
    const _values = new Set(valuesState)

    if (_values.has(value)) {
      _values.delete(value)
    } else {
      _values.add(value)
    }

    setValuesState(_values)

    valueChecked && setCheckedValues([...checkedValues, valueChecked])
    console.log()
    onChange?.(Array.from(_values.values()))
  }

  const handleOptionChange = (value: OptionType['value'],  valueChecked?: string) => {
    if (!multiple) {
      onChange?.(value)

      const _values = new Set(valuesState)

      _values.clear()

      _values.add(value)

      setValuesState(_values)

      return
    }

    handleValuesChange(value, valueChecked)
  }

  return (
    <Dropdown
      hideOnClick={!multiple}
      trigger={'click'}
      content={<SelectOptions data={data} values={valuesState} onChange={handleOptionChange} />}
      className={cx('select__dropdown')}
    >
      <div className={cx('select', size)}>
        <div className={cx('select__selected')}>

          <div className={cx('select__selected-item')}>
            <span className={cx('select__selected-text')}>
              { checkedValues[0] }valuesState
            </span>

            <button>
              <Icon name={'close'} className={cx('select__selected-icon')}/>
            </button>
          </div>

          <div className={cx('select__selected-item')}>
            <span> +{ checkedValues.length }</span>
          </div>
        </div>

        <input
          placeholder={!checkedValues.length ? placeholder : ''}
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
