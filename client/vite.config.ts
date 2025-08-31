import * as fs from 'fs'
import importMetaUrlPlugin from '@codingame/esbuild-import-meta-url-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const pkg = JSON.parse(
  fs.readFileSync(new URL('./package.json', import.meta.url).pathname).toString()
)

const localDependencies = Object.entries(pkg.dependencies as Record<string, string>)
  .filter(([name]) => name.startsWith('@codingame/'))
  .map(([name]) => name)

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [importMetaUrlPlugin],
    },
    exclude: [],
    include: [
      ...localDependencies,
      'vscode-textmate',
      'vscode-oniguruma',
      '@vscode/vscode-languagedetection',
      'marked',
    ],
  },
  define: {
    rootDirectory: JSON.stringify(__dirname),
    __APP_NAME: JSON.stringify(pkg.name),
    __APP_PUBLISHER: JSON.stringify(pkg.publisher),
    __APP_VERSION: JSON.stringify(pkg.version),
  },
  resolve: {
    dedupe: ['vscode', 'monaco-editor', ...localDependencies],
  },
  build: {
    target: 'es2020',
    reportCompressedSize: false,
    cssCodeSplit: false,
    assetsInlineLimit: 2048,
    manifest: 'manifest.json',
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[hash].js',
        assetFileNames: 'assets/[hash].[ext]',
      },
    },
  },
  esbuild: {
    minifySyntax: false,
  },
  worker: {
    format: 'es',
    rollupOptions: {
      output: {
        entryFileNames: 'chunks/[name]-[hash].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
