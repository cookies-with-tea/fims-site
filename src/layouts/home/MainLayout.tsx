import { Header } from '@components/header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import { Suspense } from 'react'
import style from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(style)

export const MainLayout = () => {
  const location= useLocation()
  const isMainPage = location.pathname === '/'

  return (
    <div className={'main-layout wrapper'}>
      <Header />

      {/*TODO: Добавить эффект загрузки в 'fallback'*/}

      <Suspense
        fallback={
          <p>Loading</p>
        }
      >
        <Outlet />
      </Suspense>

      { isMainPage && <div className={cx('video')}>
        <video
          muted
          loop
          autoPlay
          className={cx('video__item')}
        >
          <source
            src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            type='video/mp4'
          />
        </video>
      </div>
      }
    </div>
  )
}
