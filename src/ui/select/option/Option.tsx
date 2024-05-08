import { OptionType } from '@/types'
import { ReactNode, useState } from 'react'
import { Icon } from '@/ui'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface OptionsProps {
  data: OptionType
  onChange: (value: OptionType['value']) => void
  checkIconPosition?: 'left' | 'right'
  withCheckIcon?: ReactNode | boolean
  isChecked: boolean
}

export const Option = ({
  onChange,
  checkIconPosition = 'right',
  withCheckIcon = <Icon name={'checked'} className={cx('select__icon-arrow')}/>,
  data,
  isChecked
  }: OptionsProps) => {

  return (
    <li
      className={cx('menu__item', checkIconPosition)}
      onClick={() => onChange(data.value)}
    >
      { checkIconPosition === 'left' && isChecked && (
        <div className={cx('menu__item-icon')}>
          { withCheckIcon }
        </div>
      ) }

      { data.label }

      { checkIconPosition === 'right' && isChecked && (
        <div className={cx('menu__item-icon')}>
          { withCheckIcon }
        </div>
      ) }
    </li>
    )
}
