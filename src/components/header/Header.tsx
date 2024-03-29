import { Button, Icon } from '@/ui'
import { Navbar, Logo, AnimeSearch } from '@/components'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const Header = () => {
    return (
      <header className={cx('header')}>
        <div className={cx('container', 'header__container')}>
          <Logo/>

          <Navbar/>

          <AnimeSearch/>

          <Button
            className={cx('header__button')}
            href={'/login'}
            prefixIcon={
              <Icon name={'user'} className={cx('header__icon')}/>
                }
          >
            Вход
          </Button>
        </div>
      </header>
    )
}
