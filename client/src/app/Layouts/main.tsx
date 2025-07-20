import { lazy, Suspense } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import Providers from '@/config/provider'
import { routes } from '@/config/routes/route'
import { LoadingPage } from '@/core/components/LoadingPage'
import ViewPanels from '@/core/components/ViewPanels/ViewPanels'

const config = window.ViewExportsSVG.initConfiguration

const RouteManager = lazy(async () => await import('./RouteManager'))

const Layout = () => (
  <Providers>
    <ViewPanels>
      <MemoryRouter initialEntries={[config._INITIAL_RENDER_PATH]} initialIndex={0}>
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
