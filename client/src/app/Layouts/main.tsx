import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { RouteManager } from './RouteManager'

import Providers from '@/config/provider'
import { routes } from '@/config/routes/route'
import { LoadingPage } from '@/core/components/LoadingPage'

const config = window.ViewExportsSVG.initConfiguration

const Layout = () => (
  <Providers>
    <MemoryRouter initialEntries={[config._INITIAL_RENDER_PATH]} initialIndex={0}>
      <RouteManager />
      <React.Suspense fallback={<LoadingPage />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.Component />} />
          ))}
        </Routes>
      </React.Suspense>
    </MemoryRouter>
  </Providers>
)

export default Layout
