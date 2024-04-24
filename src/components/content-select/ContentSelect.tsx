import { menuSelectItem } from '@components/content-select/contentSelect.constans'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const ContentSelect = () => {
  return (
    <ul className={cx('menu')}>
      {
        menuSelectItem.map((genre, index) => (
          <li className={cx('menu__item')} key={index}>
            { genre }
          </li>
        ))
      }
    </ul>
  )
}
