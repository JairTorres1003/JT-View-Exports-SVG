import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Layout from './app/Layouts/main'
import { cardSvgClasses } from './core/components/Cards/CardSvg'
import i18next from './i18n'

import './config/environment'
import './styles/globals.css'
import './workers/loader'

const container = document.getElementById('root')

if (!container) {
  throw new Error(i18next.t('errors.FailedToFindTheRootElement'))
}

document.addEventListener('contextmenu', (e) => {
  const allowedElement = (e.target as HTMLElement).closest(`input, .${cardSvgClasses.root}`)
  if (!allowedElement) {
    e.preventDefault()
  }
})

createRoot(container).render(
  <StrictMode>
    <Layout />
  </StrictMode>
)
