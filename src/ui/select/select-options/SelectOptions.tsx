import { OptionType } from '@/types'
import { ReactNode } from 'react'
import { Icon } from '@/ui'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface OptionsProps {
  data: OptionType[]
  onChange: (value: OptionType['value']) => void
  checkIconPosition?: 'left' | 'right'
  withCheckIcon?: ReactNode | boolean
}

export const SelectOptions = ({
  data,
  onChange,
  checkIconPosition = 'right',
  withCheckIcon = <Icon name={'checked'} className={cx('select__icon-arrow')}/>
  }: OptionsProps) => {
  return (
    <ul>
      {data.map((item , index)=> (
        <li
          className={cx('menu__item', checkIconPosition)}
          key={index}
          onClick={() => onChange(item.value)}
        >
          { checkIconPosition === 'left' && (
            <div className={cx('menu__item-icon')}>
              { withCheckIcon }
            </div>
          ) }

          { item.label }

          { checkIconPosition === 'right' && (
            <div className={cx('menu__item-icon')}>
              { withCheckIcon }
            </div>
          ) }
        </li>
      ))}
    </ul>
    )
}
