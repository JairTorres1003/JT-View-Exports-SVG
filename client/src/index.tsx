import React from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import Layout from './app/Layouts'
import { LoadingSuspense } from './components/Loadings'
import Providers from './providers'
import { routes } from './router'

import './i18n'
import './index.css'

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Providers>
      <Layout>
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <React.Suspense fallback={<LoadingSuspense />}>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.Component />} />
              ))}
            </Routes>
          </React.Suspense>
        </MemoryRouter>
      </Layout>
    </Providers>
  </React.StrictMode>
)
