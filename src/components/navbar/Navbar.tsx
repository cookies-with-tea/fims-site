import { NavLink } from 'react-router-dom'
import { menuItem } from '@components/navbar/navbar.constans'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const Navbar = () => {
    // DEBT: до реализации компонента Tooltip данный компонент приостановлен
    return (
      <nav className={cx('nav')}>
        <ul className={cx('menu')}>
          {
            menuItem.map((item, index) => (
              <li key={index} className={cx('menu__item')}>
                {/* TODO: Будет исправленно по окончанию реализации navbar */}
                <NavLink
                  className={cx('menu__link')}
                  to={item.path}
                >
                  { item.name }
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    )
}
