import { Dropdown, Icon } from '@/ui'
import {  ReactNode } from 'react'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface SelectType {
  option?: ReactNode
  placeholder?: string
  size?: 'md' | 'sm' | 'xs'
  clearable?: ReactNode | boolean
  autocorrectIcons?: ReactNode | boolean
  onClearValue?: () => void
  value?: string | number
}

export const Select = ({
    placeholder = 'Жанры',
    option,
    // withCheckIcon,
    autocorrectIcons = <Icon name={'arrow-filter'} className={cx('select__icon-arrow')}/>,
    clearable = <Icon name={'clear'} className={cx('select__icon-arrow')}/>,
    size = 'sm',
    value,
    onClearValue
  }: SelectType) => {

  return (
    <Dropdown hideOnClick trigger={'click'} content={option} className={cx('select__dropdown')} >
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
