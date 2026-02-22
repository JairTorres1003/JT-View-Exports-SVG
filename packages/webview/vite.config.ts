import * as fs from 'node:fs'
import path from 'node:path'
import importMetaUrlPlugin from '@codingame/esbuild-import-meta-url-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import codingameOnigWasmWebFix from './plugins/codingame-onig-wasm-web-fix'
import legacyManifest from './plugins/legacy-manifest'
import removeFiles from './plugins/remove-files'

const pkg = JSON.parse(
  fs.readFileSync(new URL('./package.json', import.meta.url).pathname).toString()
)

const localDependencies = Object.entries(pkg.dependencies as Record<string, string>)
  .filter(([name]) => name.startsWith('@codingame/'))
  .map(([name]) => name)

const optimizeDepsExclude = new Set([
  '@codingame/monaco-vscode-theme-defaults-default-extension',
  '@codingame/monaco-vscode-javascript-default-extension',
  '@codingame/monaco-vscode-typescript-basics-default-extension',
])

const optimizeDepsInclude = localDependencies.filter((name) => !optimizeDepsExclude.has(name))

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    tsconfigPaths({ root: __dirname }),
    react(),
    codingameOnigWasmWebFix(),
    legacyManifest(),
    removeFiles()
  ],
  optimizeDeps: {
    rolldownOptions: {
      plugins: [importMetaUrlPlugin],
    },
    exclude: Array.from(optimizeDepsExclude),
    include: optimizeDepsInclude,
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
    target: 'es2022',
    emptyOutDir: true,
    outDir: path.join(__dirname, '../extension/dist/webview'),
    reportCompressedSize: false,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    manifest: 'manifest.json',
    rolldownOptions: {
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
    rolldownOptions: {
      output: {
        entryFileNames: 'chunks/[name]-[hash].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
