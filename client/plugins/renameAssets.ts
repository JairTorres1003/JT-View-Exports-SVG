import { Plugin } from 'vite'
import { promises as fs } from 'fs'
import path from 'path'

export interface RenamePluginOptions {
  /**
   * The output directory where the files are located.
   */
  outDir: string
  /**
   * The list of files to be renamed
   */
  filesToRename: { pattern: RegExp; newName: string }[]
}

/**
 * A Vite plugin to rename assets in the output directory after the build process.
 *
 * @param options - The options for the rename assets plugin.
 * @returns The Vite plugin object.
 *
 * @example
 * // Example usage in Vite config
 * renameAssetsPlugin({
 *   outDir: 'dist/assets',
 *   filesToRename: [
 *     { pattern: /old-name\.js$/, newName: 'new-name.js' },
 *     { pattern: /old-style\.css$/, newName: 'new-style.css' }
 *   ]
 * })
 */
export default function renameAssetsPlugin(options: RenamePluginOptions): Plugin {
  const namePlugin = 'rename-assets-plugin'

  return {
    name: `${namePlugin}`,
    apply: 'build',
    async closeBundle() {
      const { outDir, filesToRename } = options
      const assetsDir = path.resolve(outDir)

      try {
        const files = await fs.readdir(assetsDir)

        for (const file of files) {
          for (const { pattern, newName } of filesToRename) {
            if (pattern.test(file)) {
              const oldPath = path.join(assetsDir, file)
              const newPath = path.join(assetsDir, newName)

              await fs.rename(oldPath, newPath)
              console.log(`[${namePlugin}] Renamed: ${file} → ${newName}`)
            }
          }
        }
      } catch (error) {
        console.error(`[${namePlugin}] Error renaming files:`, error)
      }
    },
  }
}
