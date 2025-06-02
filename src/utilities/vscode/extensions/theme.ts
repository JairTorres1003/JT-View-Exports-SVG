import * as fs from 'fs'
import * as path from 'path'

import { type ExtensionContext, extensions, l10n, workspace } from 'vscode'

import { getCacheManager } from '@/controllers/cache'
import type { ExtensionManage } from '@/types/vscode'

interface ThemeExtensionPackageJSON {
  contributes?: {
    themes?: Array<{
      label: string
      uiTheme: string
      path: string
      id: string
    }>
  }
}

const CACHE_KEY = 'CurrentExtensionTheme'

/**
 * Initializes the extension theme by checking the cached theme and updating it if necessary.
 *
 * This function performs the following steps:
 * 1. Checks if the theme is already cached using the `ExtensionCache`.
 * 2. If the theme is not cached, retrieves the current color theme from the workspace configuration.
 * 3. Searches for the theme extension that matches the current color theme.
 * 4. If a matching theme extension is found, caches its details including `id`, `extensionUri`, `extensionPath`, and `isActive` status.
 *
 * @param context - The extension context.
 *
 * @remarks
 * - The function relies on the `getCacheManager` function to access the cache.
 * - The `workspace` and `extensions` objects are used to interact with the VSCode API.
 * - The cache key used for storing the theme details is defined by `CACHE_KEY`.
 */
export function initializeExtensionTheme(context: ExtensionContext): void {
  try {
    const cachedTheme = getCacheManager().ExtensionCache

    if (cachedTheme.has(CACHE_KEY) && extensionThemePath(context)) {
      return
    }

    const configuration = workspace.getConfiguration('workbench')
    const theme: string = configuration.get('colorTheme') ?? ''

    if (theme !== '') {
      const themeExtension = extensions.all.find((ext) => {
        const contributes: ThemeExtensionPackageJSON['contributes'] = ext.packageJSON?.contributes

        if (contributes?.themes != null) {
          return contributes.themes.some((t) => t.label === theme)
        }

        return false
      })

      if (themeExtension != null) {
        const { id, extensionUri, extensionPath, isActive } = themeExtension

        cachedTheme.set(CACHE_KEY, { id, extensionUri, extensionPath, isActive }, 0)
        cloneThemeExtension(context, extensionPath)
      } else {
        cachedTheme.set(CACHE_KEY, undefined, 0)
      }
    }
  } catch {
    console.error(l10n.t('Failed to initialize the extension theme'))
  }
}

/**
 * Clears the cached extension theme.
 *
 * @param context - The extension context.
 */
export function reloadExtensionTheme(context: ExtensionContext): void {
  getCacheManager().ExtensionCache.delete(CACHE_KEY)
  initializeExtensionTheme(context)
}

/**
 * Retrieves the cached extension theme.
 *
 * @returns The cached extension theme if found, `undefined` otherwise.
 */
export function getExtensionTheme(): ExtensionManage | undefined {
  return getCacheManager().ExtensionCache.get(CACHE_KEY, 0)
}

/**
 * Clones a VS Code theme extension's manifest and theme files into a target directory within the current extension.
 *
 * This function copies the `package.json` manifest and all theme files defined in the `contributes.themes` section
 * from the specified `extensionPath` into the `client/dist/extensions/theme` directory of the current extension context.
 * It creates any necessary directories recursively.
 *
 * @param context - The VS Code extension context, used to determine the target directory for cloning.
 * @param extensionPath - The file system path to the source extension or its `package.json` file.
 */
function cloneThemeExtension(context: ExtensionContext, extensionPath: string): void {
  const folder = path.join(context.extensionPath, 'client/dist/assets/extensions/theme')

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true })
  }

  const file = !extensionPath?.endsWith('.json') ? `${extensionPath}/package.json` : extensionPath
  const manifest = fs.readFileSync(file, 'utf-8')

  fs.writeFileSync(`${folder}/package.json`, manifest, 'utf-8')

  const themes = JSON.parse(manifest).contributes.themes

  themes.forEach((theme: { path: string }) => {
    const newThemeFilePath = path.join(folder, theme.path)
    const themePath = path.join(extensionPath, theme.path)
    const newThemeDir = path.dirname(newThemeFilePath)

    if (!fs.existsSync(newThemeDir)) {
      fs.mkdirSync(newThemeDir, { recursive: true })
    }

    if (fs.existsSync(themePath)) {
      const themeFile = fs.readFileSync(themePath, 'utf-8')

      fs.writeFileSync(newThemeFilePath, themeFile, 'utf-8')
    }
  })
}

/**
 * Checks if the extension theme path exists.
 *
 * @param context - The extension context.
 * @returns `true` if the theme path exists, `false` otherwise.
 */
function extensionThemePath(context: ExtensionContext): boolean {
  const folder = path.join(context.extensionPath, 'client/dist/assets/extensions/theme')

  return fs.existsSync(folder)
}
