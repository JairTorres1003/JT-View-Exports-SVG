import { lazy } from 'react'

import { IconDashboard, IconHome, IconUpload } from '@/assets/icons/indicators'
import type { IconBaseProps } from '@/types/BaseProps'

interface Route {
  path: string
  name: string
  Component: React.LazyExoticComponent<React.FC>
  private: boolean
  devtools?: boolean
  icon: React.FC<IconBaseProps>
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
    icon: IconHome,
    Component: lazy(async () => await import('@/app/home/Home')),
    private: false,
    devtools: true,
  },
  {
    path: pathnames.dashboard,
    name: 'Dashboard',
    icon: IconDashboard,
    Component: lazy(async () => await import('@/app/dashboard/Dashboard')),
    private: false,
    devtools: true,
  },
  {
    path: pathnames.upload,
    name: 'Upload',
    icon: IconUpload,
    Component: lazy(async () => await import('@/app/upload/Upload')),
    private: false,
    devtools: false,
  },
]
