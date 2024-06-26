import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import SvgProvider from './provider/SvgProvider'
import VSCodeProvider from './provider/VSCodeProvider'

import './i18n'
import './styles/reset.css'
import './userWorker'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <VSCodeProvider>
      <SvgProvider>
        <App />
      </SvgProvider>
    </VSCodeProvider>
  </React.StrictMode>
)
