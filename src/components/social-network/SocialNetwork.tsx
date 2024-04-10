import { Icon } from '@/ui'
import { Link } from 'react-router-dom'
import style from './style.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

interface SocialNetwork {
  position?: 'row' | 'column'
  className?: string
}

export const SocialNetwork = ({ position = 'row', className = '' }: SocialNetwork) => {
  return(
    <div className={cx('social-network', position)}>
      <div className={cx('social-network__item', className)}>
        <Link to={'/'} className={cx('social-network__link')}>
          <Icon name={'insta'} className={cx('social-network__icon')} />
        </Link>
      </div>

      <div className={cx('social-network__item')}>
        <Link to={'/'} className={cx('social-network__link')}>
          <Icon name={'linkedin'} className={cx('social-network__icon')} />
        </Link>
      </div>

      <div className={cx('social-network__item')}>
        <Link to={'/' } className={cx('social-network__link')}>
          <Icon name={'telegram-social'} className={cx('social-network__icon')} />
        </Link>
      </div>
    </div>
  )
}
