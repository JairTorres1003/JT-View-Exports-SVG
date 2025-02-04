import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Layout from './app/Layouts/main'

import './i18n'
import './index.css'

const container = document.getElementById('root')

if (!container) {
  throw new Error('No container found')
}

createRoot(container).render(
  <StrictMode>
    <Layout />
  </StrictMode>
)
