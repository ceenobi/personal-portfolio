import { lazy } from 'react'
import index from '../components'

const routes = [
  {
    path: '/',
    element: index,
  },
  {
    path: '/projects',
    element: lazy(() => import('../container/Projects/Project')),
  },
  {
    path: '/about',
    element: lazy(() => import('../container/About/About')),
  },
  {
    path: '*',
    element: lazy(() => import('../components/NoPage')),
  },
]

export default routes