import React, { type ReactNode } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { LoadingSuspense } from '@/components/Loadings'
import Providers from '@/providers'
import { routes } from '@/router'

const Layout = (): ReactNode => {
  return (
    <Providers>
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <React.Suspense fallback={<LoadingSuspense />}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.Component />} />
            ))}
          </Routes>
        </React.Suspense>
      </MemoryRouter>
    </Providers>
  )
}

export default Layout
