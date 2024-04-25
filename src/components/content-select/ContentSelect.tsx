import { menuSelectItem } from '@components/content-select/contentSelect.constans'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'
import { ChangeEvent, MouseEvent } from 'react'

const cx = cnBind.bind(style)

interface ContentSelectProps{
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

export const ContentSelect = ({ onClick }: ContentSelectProps) => {
  return (
    <ul className={cx('menu')}>
      {
        menuSelectItem.map((genre, index) => (
          <li className={cx('menu__item')} key={index} onClick={onClick}>
            { genre }
          </li>
        ))
      }
    </ul>
  )
}
