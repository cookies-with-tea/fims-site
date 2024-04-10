import { Icon } from '@/ui'
import style from './style.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const SocialNetwork = () => {
  return(
    <div className={cx('social-network')}>
      <div className={cx('social-network__item')}>
        <Icon name={'insta'} className={cx('social-network__icon')} />
      </div>

      <div className={cx('social-network__item')}>
        <Icon name={'linkedin'} className={cx('social-network__icon')} />
      </div>

      <div className={cx('social-network__item')}>
        <Icon name={'telegram-social'} className={cx('social-network__icon')} />
      </div>
    </div>
  )
}
