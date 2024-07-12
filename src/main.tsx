import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { router } from '@providers/router'
import { store } from './redux/store'

import 'virtual:svg-icons-register'
import '@/styles/base.scss'

createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
  </ReduxProvider>
)
