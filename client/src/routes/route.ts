import { lazy } from 'react'

interface Route {
  path: string
  Component: React.LazyExoticComponent<React.FC>
  private: boolean
}

export const routes: Route[] = [
  {
    path: '/',
    Component: lazy(async () => await import('@/app/Home')),
    private: false,
  },
  {
    path: '/settings',
    Component: lazy(async () => await import('@/app/Settings')),
    private: false,
  },
  {
    path: '/uploads',
    Component: lazy(async () => await import('@/app/Uploads')),
    private: false,
  },
]
