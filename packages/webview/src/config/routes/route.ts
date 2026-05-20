import { pathnames } from '@jt-view-exports-svg/core'
import { lazy } from 'react'

import type { IconBaseProps } from '@/types/BaseProps'

export interface Route {
  path: string
  name: string
  Component: React.LazyExoticComponent<React.FC>
  private: boolean
  devtools?: boolean
  icon: React.FC<IconBaseProps>
}

export const routes: Route[] = [
  {
    path: pathnames.main,
    name: 'Main',
    icon: lazy(() => import('@/assets/icons/navigation/navigate-fill')),
    Component: lazy(() => import('@/app/page')),
    private: false,
  },
  {
    path: pathnames.home,
    name: 'Home',
    icon: lazy(() => import('@/assets/icons/indicators/home')),
    Component: lazy(() => import('@/app/home/Home')),
    private: false,
    devtools: true,
  },
  {
    path: pathnames.dashboard,
    name: 'Dashboard',
    icon: lazy(() => import('@/assets/icons/indicators/dashboard')),
    Component: lazy(() => import('@/app/dashboard/Dashboard')),
    private: false,
    devtools: true,
  },
  {
    path: pathnames.upload,
    name: 'Upload',
    icon: lazy(() => import('@/assets/icons/indicators/upload')),
    Component: lazy(() => import('@/app/upload/Upload')),
    private: false,
    devtools: false,
  },
]
