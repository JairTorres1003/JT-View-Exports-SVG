import { defineConfig } from 'vite'
import { type PreRenderedChunk } from './node_modules/rollup/dist/rollup'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

/**
 * Generates a file name based on the provided chunk information.
 *
 * @param chunkInfo - The chunk information.
 * @returns The generated file name.
 */
function CreateFileName(chunkInfo: PreRenderedChunk): string {
  const { name, facadeModuleId } = chunkInfo

  if (facadeModuleId?.includes('client/src/app')) {
    const [folderName, fileName] = facadeModuleId.split('client/src/app/')[1]?.split('/')

    if (fileName.split('.')[0] === name && typeof folderName === 'string') {
      return `assets/${name}-${folderName.toLowerCase()}.js`
    }
  }

  return `assets/${name}.js`
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api/enums': path.resolve(__dirname, '../src/enum'),
      '@api/interfaces': path.resolve(__dirname, '../src/interfaces'),
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
