import * as fs from 'fs'
import { defineConfig } from 'vite'
import importMetaUrlPlugin from '@codingame/esbuild-import-meta-url-plugin'
import react from '@vitejs/plugin-react-swc'
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
      tsconfig: './tsconfig.app.json',
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
  build: {
    target: 'esnext',
    manifest: 'manifest.json',
    chunkSizeWarningLimit: 1024,
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
  define: {
    rootDirectory: JSON.stringify(__dirname),
  },
  resolve: {
    dedupe: ['vscode', 'monaco-editor', ...localDependencies],
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
    fs: {
      allow: ['../'], // allow to load codicon.ttf from monaco-editor in the parent folder
    },
  },
})
