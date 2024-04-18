import { Header } from '@components/header/Header'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const MainLayout = () => {
    return (
      <div className={'main-layout wrapper'}>
        <Header />

        <Suspense
          fallback={
            <p>Loading</p>
          }
        >
          <Outlet />
        </Suspense>

        <div className={cx('video')}>
          <video
            muted
            autoPlay
            loop
            className={cx('video__item')}
          >
            <source
              src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
    )
}
