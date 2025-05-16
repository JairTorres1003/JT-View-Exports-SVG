import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import Providers from '@/config/provider'
import { routes } from '@/config/routes/route'
import { LoadingPage } from '@/core/components/LoadingPage'

const Layout = () => (
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
