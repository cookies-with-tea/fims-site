import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { Select } from '@/ui'
import { useState } from 'react'
import { OptionType } from '@/types'

const cx = cnBind.bind(style)

export const Filter = () => {
  // const [a, setA] = useState<OptionType['value'][]>([])
  const [a, setA] = useState<OptionType['value'][] | string>('')
  // const onValueChange = (event: MouseEvent<HTMLElement>) => {
  //   const target = event.target as HTMLElement
  //   setA(target.innerText)
  //
  // }
  //
  console.log(a)
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
              onChange={(value) => setA(value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
