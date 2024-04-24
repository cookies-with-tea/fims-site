import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { Dropdown, Icon } from '@/ui'
import { ChangeEvent, useState } from 'react'

const cx = cnBind.bind(style)

interface SelectType {
  option?: any[]
  placeholder?: string
  size?: 'md' | 'sm' | 'xs'
}

export const Select = ({
    placeholder = 'Жанры',
    option,
    size = 'md',
  }: SelectType) => {

  const [a, setA] = useState('')
  const onValueChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setA(event.target.value)
  }
  return (
    <Dropdown trigger={'click'} content={option}>
      <div className={cx('select', size)}>
        <input
          placeholder={placeholder}
          className={cx('select__input')}
          value={a}
          onChange={onValueChange}
        />

        <Icon name={'arrow-filter'} className={cx('select__icon-arrow')}/>
      </div>
    </Dropdown>
  )
}
