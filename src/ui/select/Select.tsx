import { Dropdown, Icon } from '@/ui'
import { ChangeEvent, ReactNode, useState } from 'react'
import { ContentSelect } from '@/components'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface SelectType {
  option?: ReactNode
  placeholder?: string
  size?: 'md' | 'sm' | 'xs'
  clearable?: ReactNode | boolean
  value?: string | number
}

export const Select = ({
    placeholder = 'Жанры',
    option,
    // withCheckIcon,
    clearable = false,
    size = 'sm',
    value
  }: SelectType) => {

  return (
    <Dropdown trigger={'click'} content={option} className={cx('select__dropdown')}>
      <div className={cx('select', size)}>
        <input
          placeholder={placeholder}
          className={cx('select__input')}
          value={value}
        />

        <Icon name={'arrow-filter'} className={cx('select__icon-arrow')}/>
      </div>
    </Dropdown>
  )
}
