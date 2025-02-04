import React, { type ReactNode } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { LoadingPage } from '@/core/components/LoadingPage'
import Providers from '@/providers'
import { routes } from '@/routes/route'

const Layout = (): ReactNode => (
  <Providers>
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <React.Suspense fallback={<LoadingPage />}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.Component />} />
          ))}
        </Routes>
      </React.Suspense>
    </MemoryRouter>
  </Providers>
)

export default Layout
