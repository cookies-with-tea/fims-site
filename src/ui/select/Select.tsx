import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { Dropdown } from '@/ui'
import { useState } from 'react'

const cx = cnBind.bind(style)

interface SelectType {
  option?: any[]
  placeholder?: string
}

export const Select = ({
  placeholder='1111',
  option
  }: SelectType) => {

  const [a, setA] = useState('')
  console.log(setA)
  return (
    <Dropdown trigger={'click'} content={option}>
      <div className={cx('select')}>
        <input
          placeholder={placeholder}
          className={cx('select__input')}
          value={a}

        />
      </div>
    </Dropdown>
  )
}
