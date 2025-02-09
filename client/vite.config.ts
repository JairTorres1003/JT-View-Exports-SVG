import { defineConfig } from 'vite'
import { type PreRenderedChunk } from './node_modules/rollup/dist/rollup'
import importMetaUrlPlugin from '@codingame/esbuild-import-meta-url-plugin'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

import fixOutputPlugin, { FixOutputPluginOptions } from './plugins/fixOutputPlugin'
import renameAssetsPlugin, { RenamePluginOptions } from './plugins/renameAssets'

/**
 * Generates a file name based on the provided chunk information.
 *
 * @param chunkInfo - The chunk information.
 * @returns The generated file name.
 */
function CreateFileName(chunkInfo: PreRenderedChunk): string {
  const { name, facadeModuleId } = chunkInfo

  if (facadeModuleId?.includes('client/src/app')) {
    const [folderName, fileName] = facadeModuleId.split('client/src/app/')[1]?.split('/') ?? []

    if (typeof folderName === 'string' && fileName?.split('.')[0] === name) {
      return `assets/${name}-${folderName.toLowerCase()}.js`
    }
  }

  return `assets/${name}.js`
}

const optionsRenameAssetsPlugin: RenamePluginOptions = {
  outDir: 'dist/assets',
  filesToRename: [
    {
      pattern: /^editor\.worker-.*\.js$/,
      newName: 'module.editor.worker.js',
    },
  ],
}

const optionsFixOutputPlugin: FixOutputPluginOptions = {
  outDir: 'dist',
  filesToFixed: [
    {
      file: 'assets/editor.worker.js',
      name: 'editorWorker',
      pattern: '"/assets/editor.worker-.*\\.js"',
      callback: (match) => {
        const path = match.split('/').slice(0, -1).join('/')
        return `${path}/module.editor.worker.js"`
      },
    },
    {
      file: 'assets/webWorkerExtensionHostIframe.html',
      name: 'webWorkerExtensionHostIframe',
      pattern: '"/assets/.*\\.html"',
    },
  ],
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    renameAssetsPlugin(optionsRenameAssetsPlugin),
    fixOutputPlugin(optionsFixOutputPlugin),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [importMetaUrlPlugin],
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: CreateFileName,
        chunkFileNames: CreateFileName,
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
