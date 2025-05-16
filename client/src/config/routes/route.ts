import { lazy } from 'react'

interface Route {
  path: string
  Component: React.LazyExoticComponent<React.FC>
  private: boolean
}

export const routes: Route[] = [
  {
    path: '/',
    Component: lazy(async () => await import('@/app/home/Home')),
    private: false,
  },
]
