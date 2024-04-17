import { Header } from '@components/header/Header'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

export const MainLayout = () => {
    return (
      <div className={'main-layout wrapper'}>
        <>
          <Header/>

          <Suspense
            fallback={
              <p>Loading</p>
            }
          >
            <Outlet />
          </Suspense>
        </>
      </div>
    )
}
