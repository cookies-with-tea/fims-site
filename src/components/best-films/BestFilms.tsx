import { MoveSlider } from '@components/move-films/MoveSlider'
import { SocialNetwork } from '@components/social-network/SocialNetwork'
import style from './style.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const BestFilms = () => {
  return (
    <section className={cx('best-films')}>
      <div className="container">
        <div className={cx('best-films__wrapper')}>
          <MoveSlider className={ cx('best-films__container')} />

          <SocialNetwork position={'column'} />
        </div>
      </div>
    </section>
  )
}
