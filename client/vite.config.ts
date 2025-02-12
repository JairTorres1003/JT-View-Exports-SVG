import { defineConfig } from 'vite'
import importMetaUrlPlugin from '@codingame/esbuild-import-meta-url-plugin'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

import { generateAssetName, generateFileName, generateWorkerFileName } from './vite.generateFiles'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [importMetaUrlPlugin],
    },
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: generateFileName,
        assetFileNames: generateAssetName,
      },
    },
    manifest: true,
  },
  worker: {
    rollupOptions: {
      output: {
        entryFileNames: generateWorkerFileName,
        chunkFileNames: 'assets/workers/[name]-[hash].js',
        assetFileNames: 'assets/workers/[name]-[hash].[ext]',
      },
    },
  },
})
