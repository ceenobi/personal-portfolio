import { lazy } from 'react'

const routes = [
  {
    path: '/',
    element: lazy(() => import('../components')),
  },
  {
    path: '/projects',
    element: lazy(() => import('../container/Projects/Project')),
  },
  {
    path: '/about',
    element: lazy(() => import('../container/About/About')),
  },
]

export default routes