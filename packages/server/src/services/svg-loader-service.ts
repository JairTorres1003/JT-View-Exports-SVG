import path from 'node:path'
import { viewExportStore } from '@jt-view-exports-svg/extension-api/store/ViewExportStore'
import { pathToSVGFile } from '@jt-view-exports-svg/extension-api/utilities/files/misc'
import { processFiles } from '@jt-view-exports-svg/extension-api/utilities/files/processFiles'
import { svgFileToUri } from '@jt-view-exports-svg/extension-api/utilities/vscode/uri'
import { glob } from 'glob'

export async function loadSVGComponents() {
  const workspace = process.env.COMPONENTS_WORKSPACE

  if (!workspace) {
    throw new Error('COMPONENTS_WORKSPACE is not defined')
  }

  const directory = path.resolve(workspace)

  const files = await glob('**/*.{js,ts,jsx,tsx}', {
    cwd: directory,
    absolute: true,
    ignore: ['**/*.d.ts', '**/node_modules/**', '**/dist/**', '**/build/**'],
  })

  const svgFiles = await Promise.all(
    files.map(async (file) => svgFileToUri(await pathToSVGFile(file)))
  )

  await processFiles(svgFiles, (results, files) => {
    viewExportStore.set(results, files)
  })
}
