import type { ViewExportSVG } from '@jt-view-exports-svg/core'
import { viewExportStore } from '@jt-view-exports-svg/extension-api/store/ViewExportStore'

import { loadCache, saveCache } from '../cache/temp-cache'
import { loadSVGComponents } from '../services/svg-loader-service'

export async function loadViewExports() {
  const cache = loadCache<ViewExportSVG[]>()

  if (cache && cache.length > 0) {
    console.log('⚡ Loading SVG components from cache')
    viewExportStore.set(cache)
    return
  }

  console.log('🔍 Processing SVG components...')
  await loadSVGComponents()

  const data = viewExportStore.getAll()

  saveCache(data)

  console.log(`✅ Loaded ${data.length} SVG components`)
}
