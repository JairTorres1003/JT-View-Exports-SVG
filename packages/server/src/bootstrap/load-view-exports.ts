import type { FileIdentifier, SVGFile, ViewExportSVG } from '@jt-view-exports-svg/core'
import { viewExportStore } from '@jt-view-exports-svg/extension-api/store/ViewExportStore'

import { loadCache, saveCache } from '../cache/temp-cache'
import { loadSVGComponents } from '../services/svg-loader-service'

export async function loadViewExports() {
  const cache = loadCache<{ data: ViewExportSVG[]; files: Record<FileIdentifier, SVGFile> }>()

  if (cache && cache.data.length > 0) {
    console.log('⚡ Loading SVG components from cache')
    viewExportStore.set(cache.data, Object.values(cache.files))
    return
  }

  console.log('🔍 Processing SVG components...')
  await loadSVGComponents()

  const data = viewExportStore.getAll()
  const files = viewExportStore.getFiles()

  saveCache({ data, files })

  console.log(`✅ Loaded ${data.length} SVG components`)
}
