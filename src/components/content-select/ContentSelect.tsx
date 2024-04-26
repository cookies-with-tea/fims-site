import { menuSelectItem } from './contentSelect.constans'
import { MouseEvent, ReactNode } from 'react'
import { Icon } from '@/ui'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface ContentSelectProps{
  onClick?: (event: MouseEvent<HTMLElement>) => void
  checkIconPosition?: 'left' | 'right'
  withCheckIcon?: ReactNode | boolean
}

export const ContentSelect = ({
    onClick,
    checkIconPosition = 'right',
    withCheckIcon = <Icon name={'checked'} className={cx('select__icon-arrow')}/>,
  }: ContentSelectProps) => {

  return (
    <ul className={cx('menu')}>
      {
        menuSelectItem.map((genre, index) => (
          <li
            className={cx('menu__item', checkIconPosition)}
            key={index}
            onClick={onClick}
          >
            { checkIconPosition === 'left' && (
              <div className={cx('menu__item-icon')}>
                { withCheckIcon }
              </div>
            ) }

            { genre }

            { checkIconPosition === 'right' && (
              <div className={cx('menu__item-icon')}>
                { withCheckIcon }
              </div>
            ) }
          </li>
        ))
      }
    </ul>
  )
}
