import React from 'react'
import { createRoot } from 'react-dom/client'

import Layout from './app/Layouts'

import './i18n'
import './index.css'

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
)
