import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Logo } from '@components/logo/Logo'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const GuestLayout = () => {
    return (
      <div className={'guest-layout wrapper'}>
        <div className={cx('auth')}>
          <div className={cx('auth__header')}>
            <div className="container">
              <Logo />
            </div>
          </div>

          <div className={cx('auth__body')}>
            <div className={cx('auth__content')}>
              <Suspense
                fallback={
                  <p>Loading</p>
                }
              >
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    )
}
