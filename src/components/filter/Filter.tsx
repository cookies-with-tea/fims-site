import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { Select } from '@/ui'
import { useState, MouseEvent } from 'react'

const cx = cnBind.bind(style)

export const Filter = () => {
  const [a, setA] = useState('')

  const onValueChange = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    setA(target.innerText)

  }

  const onClearValue = () => {
    setA('')
  }

  return (
    <div className={cx('filter')}>
      <div className='container'>
        <div className={cx('filter__body')}>
          <div className={cx('filter__item')}>
            <Select
              data={[{ value: 'value', label: 'label' }]}
              value={a}
              onClearValue={onClearValue}
              onChange={(value) => console.log(value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
