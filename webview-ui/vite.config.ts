import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PREFIX_MONACO = 'monaco-editor/esm/vs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      `${PREFIX_MONACO}/basic-languages/javascript/javascript`,
      `${PREFIX_MONACO}/basic-languages/typescript/typescript`,
      `${PREFIX_MONACO}/editor/editor.worker`,
      `${PREFIX_MONACO}/language/typescript/ts.worker`,
      `${PREFIX_MONACO}/language/typescript/tsMode`,
    ],
    exclude: ['node_modules'],
  },
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 4000, // 4 MB (kilobytes)
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
