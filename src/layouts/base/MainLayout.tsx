import { Header } from '@components/header/Header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
      <div className={'main-layout wrapper'}>
        <>
          <Header/>

          <Outlet/>
        </>
      </div>
    )
}
