import { Dropdown, Icon } from '@/ui'
import { ReactNode, useState } from 'react'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { SelectOptions } from '@ui/select/select-options/SelectOptions'
import { OptionType } from '@/types'

const cx = cnBind.bind(style)

interface SelectType {
  placeholder?: string
  size?: 'md' | 'sm' | 'xs'
  clearable?: ReactNode | boolean
  autocorrectIcons?: ReactNode | boolean
  onClearValue?: () => void
  value?: string | number
  data: OptionType[]
  onChange: (values: OptionType['value'][]) => void
}

export const Select = ({
    placeholder = 'Жанры',
    data,
    autocorrectIcons = <Icon name={'arrow-filter'} className={cx('select__icon-arrow')}/>,
    clearable = <Icon name={'clear'} className={cx('select__icon-arrow')}/>,
    size = 'sm',
    value,
    onClearValue,
    onChange
  }: SelectType) => {
  const [a, setA] = useState<OptionType['value'][]>([])

  const handleSelectChange = (value: OptionType['value']) => {
    onChange([value])
  }

  return (
    <Dropdown
      hideOnClick
      trigger={'click'}
      content={ <SelectOptions data={data} onChange={handleSelectChange} /> }
      className={cx('select__dropdown')}
    >
      <div className={cx('select', size)}>
        <input
          placeholder={placeholder}
          className={cx('select__input')}
          value={value}
        />

        { clearable && value && (
          <div  className={cx('postfix')} onClick={() => onClearValue?.()}>
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
