import { beforeAll, vi } from 'vitest'

import '@testing-library/dom'
import '@testing-library/jest-dom/vitest'

import i18n from '@/i18n'

// Mock console methods
global.console = {
  ...console,
  warn: vi.fn(),
  error: vi.fn(),
}

vi.mock('@/core/utils/file', () => ({
  openFileInPosition: vi.fn(),
}))

window.ViewExportsSVG = {
  name: 'View Exports SVG',
  initConfiguration: {
    _DEFAULT_EXPAND_ALL: true,
    _DEFAULT_CLICK_TO_OPEN_DEV_TOOLS: true,
    _INITIAL_RENDER_PATH: '/',
    _RECENT_ICONS_SHOW: true,
    _LANGUAGE: 'en',
  },
}

beforeAll(async () => {
  if (!i18n.isInitialized) {
    await i18n.init()
  }
})
