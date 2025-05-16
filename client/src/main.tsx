import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Layout from './app/Layouts/main'
import i18next from './i18n'

import './config/environment'
import './styles/globals.css'
import './workers/loader'

const container = document.getElementById('root')

if (!container) {
  throw new Error(i18next.t('errors.FailedToFindTheRootElement'))
}

createRoot(container).render(
  <StrictMode>
    <Layout />
  </StrictMode>
)
