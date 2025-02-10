import { Plugin } from 'vite'
import { promises as fs } from 'fs'
import path from 'path'

export interface FixOutputPluginOptions {
  /**
   * The output directory where the files are located.
   */
  outDir?: string
  /**
   * The list of files to be processed.
   */
  filesToFixed: {
    /**
     * The file to be processed.
     */
    file: string
    /**
     * The pattern to be replaced.
     */
    pattern: RegExp
    /**
     * The callback to be executed
     * @param match - The matched string.
     * @returns The replacement string.
     */
    callback: (match: string) => string
  }[]
}

/**
 * A Vite plugin to fix the output files by replacing specific patterns with a custom prefix variable.
 *
 * @param {FixOutputPluginOptions} options - The options for the plugin.
 * @returns {Plugin} The Vite plugin object.
 *
 * @example
 * // Example usage of fixOutputPlugin
 * fixOutputPlugin({
 *   outDir: 'dist',
 *   filesToFixed: [
 *     {
 *       file: 'index.html',
 *       pattern: /"\/assets\/editor.worker-.*\.js"/,
 *       callback: (match) => `customReplacement(${match})`
 *     }
 *   ]
 * });
 */
export default function fixOutputPlugin(options: FixOutputPluginOptions): Plugin {
  const namePlugin = 'fix-output-plugin'

  return {
    name: namePlugin,
    apply: 'build',
    async closeBundle() {
      const { outDir = 'dist', filesToFixed } = options

      if (!outDir || !filesToFixed || filesToFixed.length === 0) {
        console.log(`[${namePlugin}] No files found to process`)
        return
      }

      for (const { file, pattern, callback } of filesToFixed) {
        const filePath = path.resolve(outDir, file)

        try {
          let content = await fs.readFile(filePath, 'utf-8')
          const matches = content.match(pattern)

          if (!matches) {
            console.log(`[${namePlugin}] No matches found for ${file}`)
            continue
          }

          const regex = new RegExp(pattern, 'g')
          content = content.replace(regex, callback)

          await fs.writeFile(filePath, content, 'utf-8')

          console.log(`[${namePlugin}] File modified: ${file}`)
        } catch (error) {
          console.error(`[${namePlugin}] Error processing ${file}:`, error)
        }
      }
    },
  }
}
