import { type PreRenderedChunk, type PreRenderedAsset } from './node_modules/rollup/dist/rollup'

const workerRegex = /monaco-vscode-(.*?)-service-override/

/**
 * Generates a file name for a given chunk based on its name and facade module ID.
 */
export function generateFileName({ name, facadeModuleId }: PreRenderedChunk): string {
  if (facadeModuleId?.includes('client/src/app')) {
    const [folderName, fileName] = facadeModuleId.split('client/src/app/')[1]?.split('/') ?? []

    if (typeof folderName === 'string' && fileName?.split('.')[0] === name) {
      return `chunks/pages/${name}-[hash].js`
    }
  }

  return `chunks/${name}-[hash].js`
}

/**
 * Generates a file name for a given asset based on its original file names and names.
 */
export function generateAssetName({ names }: PreRenderedAsset): string {
  if (names[0] === 'favicon.ico') {
    return 'favicon.ico'
  }

  if (names[0]?.endsWith('.css')) {
    return 'styles/[name]-[hash].[ext]'
  }

  return 'assets/[name]-[hash].[ext]'
}

/**
 * Generates a file name for a given worker chunk based on its name and facade module ID.
 */
export function generateWorkerFileName({ name, facadeModuleId }: PreRenderedChunk) {
  if (!facadeModuleId) {
    return 'chunks/workers/[name]-[hash].js'
  }

  const [, folderName] = facadeModuleId.split('/').reverse()

  let newName = workerRegex.exec(folderName ?? '')?.[1]

  if (newName) {
    newName = `${newName}.worker`
  }

  return `chunks/workers/${newName ?? name}.js`
}
