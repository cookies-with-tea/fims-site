import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { Select } from '@/ui'
import { ContentSelect } from '@/components'
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
              option={<ContentSelect checkIconPosition={'right'} onClick={onValueChange}/>}
              value={a}
              onClearValue={onClearValue}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
