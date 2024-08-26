import React from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { LoadingSuspense } from './components/Loadings'
import Providers from './providers'
import { routes } from './router'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
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
  </React.StrictMode>
)
