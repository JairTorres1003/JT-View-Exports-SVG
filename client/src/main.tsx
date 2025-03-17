import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Layout from './app/Layouts/main'

import './config/environment'
import './i18n'
import './index.css'
import './workers/workerLoader'

const container = document.getElementById('root')

if (!container) {
  throw new Error('No container found')
}

createRoot(container).render(
  <StrictMode>
    <Layout />
  </StrictMode>
)
