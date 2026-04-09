import { pathnames } from '@jt-view-exports-svg/core'
import { lazy, Suspense } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import Providers from '@/config/provider'
import { routes } from '@/config/routes/route'
import { LoadingPage } from '@/core/components/LoadingPage'
import ViewPanels from '@/core/components/ViewPanels/ViewPanels'

const NavBarManager = import.meta.env.DEV
  ? lazy(() => import('@/core/components/Drawer/NavigationDrawer/NavigationDrawer'))
  : () => null
const RouteManager = lazy(() => import('./RouteManager'))

const Layout = () => (
  <Providers>
    <ViewPanels>
      <MemoryRouter initialEntries={[pathnames.main]} initialIndex={0}>
        <Suspense fallback={null}>
          <NavBarManager />
        </Suspense>
        <Suspense fallback={null}>
          <RouteManager />
        </Suspense>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.Component />} />
            ))}
          </Routes>
        </Suspense>
      </MemoryRouter>
    </ViewPanels>
  </Providers>
)

export default Layout
