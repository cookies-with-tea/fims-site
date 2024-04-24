import { Dropdown, Icon } from '@/ui'
import { ChangeEvent, ReactNode, useState } from 'react'
import { ContentSelect } from '@/components'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface SelectType {
  option?: any[]
  placeholder?: string
  size?: 'md' | 'sm' | 'xs'
  clearable?: ReactNode | boolean
}

export const Select = ({
    placeholder = 'Жанры',
    // option,
    clearable = false,
    size = 'sm',
  }: SelectType) => {

  const [a, setA] = useState('')
  const onValueChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setA(event.target.value)
  }
  return (
    <Dropdown trigger={'click'} content={<ContentSelect/>} className={cx('select__dropdown')}>
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
