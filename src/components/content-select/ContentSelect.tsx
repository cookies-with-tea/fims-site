import { menuSelectItem } from '@components/content-select/contentSelect.constans'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const ContentSelect = () => {
  return (
    <div className={cx('сontent-select')}>
      <ul className={cx('сontent-select__menu')}>
        {
          menuSelectItem.map((genre, index) => (
            <li className={cx('сontent-select__item')} key={index}>
              { genre }
            </li>
          ))
        }
      </ul>
    </div>
  )
}
