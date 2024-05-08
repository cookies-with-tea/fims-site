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
              data={[{ value: '1value', label: '1value' }, { value: '2value', label: '2value' },{ value: '3value', label: '3value' }]}
              // value={a}
              onClearValue={onClearValue}
              // onChange={(value) => setA(value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
