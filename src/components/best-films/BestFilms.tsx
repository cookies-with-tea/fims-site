import { Link } from 'react-router-dom'
import { lazy } from 'react'
// import { MoveSlider } from '@components/move-films/MoveSlider'
const MoveSlider = lazy(() => import('@components/move-films/'))
import { Icon } from '@/ui'
import style from './style.module.scss'
import cnBind from 'classnames/bind'
import { Suspense } from 'react'

const cx = cnBind.bind(style)

export const BestFilms = () => {
  return (
    <section className={cx('best-films')}>
      <div className="container">
        <div className={cx('best-films__wrapper')}>
          <Suspense
            fallback={
              <p>Loading</p>
            }
          >
            <MoveSlider className={cx('best-films__container')} />
          </Suspense>

          <div className={cx('best-films__social-network')}>
            <div className={cx('best-films__item')}>
              <Link to={'/'} className={cx('best-films__link')}>
                <Icon name={'instagram'} className={cx('best-films__icon')} />
              </Link>
            </div>

            <div className={cx('best-films__item')}>
              <Link to={'/'} className={cx('best-films__link')}>
                <Icon name={'linkedin'} className={cx('best-films__icon')} />
              </Link>
            </div>

            <div className={cx('best-films__item')}>
              <Link to={'/'} className={cx('best-films__link')}>
                <Icon name={'telegram-social'} className={cx('best-films__icon')} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
