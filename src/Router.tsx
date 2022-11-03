import { createBrowserRouter } from 'react-router-dom'
import { History } from './pages/History'
import { Home } from './pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/history',
    element: <History />,
  },
])
