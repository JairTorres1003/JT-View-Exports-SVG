import { lazy } from 'react'

interface Route {
  path: string
  name: string
  Component: React.LazyExoticComponent<React.FC>
  private: boolean
}

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    Component: lazy(async () => await import('@/app/home/Home')),
    private: false,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    Component: lazy(async () => await import('@/app/dashboard/Dashboard')),
    private: false,
  },
]
