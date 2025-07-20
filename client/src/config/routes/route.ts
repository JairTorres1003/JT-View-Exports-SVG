import { lazy } from 'react'

interface Route {
  path: string
  name: string
  Component: React.LazyExoticComponent<React.FC>
  private: boolean
  devtools?: boolean
}

export const pathnames = {
  home: '/',
  dashboard: '/dashboard',
  upload: '/upload',
}

export const routes: Route[] = [
  {
    path: pathnames.home,
    name: 'Home',
    Component: lazy(async () => await import('@/app/home/Home')),
    private: false,
    devtools: true,
  },
  {
    path: pathnames.dashboard,
    name: 'Dashboard',
    Component: lazy(async () => await import('@/app/dashboard/Dashboard')),
    private: false,
    devtools: true,
  },
  {
    path: pathnames.upload,
    name: 'Upload',
    Component: lazy(async () => await import('@/app/upload/Upload')),
    private: false,
    devtools: false,
  },
]
