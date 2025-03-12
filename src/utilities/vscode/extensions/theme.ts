import { extensions, l10n, workspace } from 'vscode'

import { getCacheManager } from '@/controllers/cache'
import { type ExtensionManage } from '@/interfaces/vscode'

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
 * @remarks
 * - The function relies on the `getCacheManager` function to access the cache.
 * - The `workspace` and `extensions` objects are used to interact with the VSCode API.
 * - The cache key used for storing the theme details is defined by `CACHE_KEY`.
 */
export function initializeExtensionTheme(): void {
  try {
    const cachedTheme = getCacheManager().ExtensionCache

    if (cachedTheme.has(CACHE_KEY)) {
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
      } else {
        cachedTheme.set(CACHE_KEY, undefined, 0)
      }
    }
  } catch (error) {
    console.error(l10n.t('Failed to initialize the extension theme'))
  }
}

/**
 * Clears the cached extension theme.
 */
export function reloadExtensionTheme(): void {
  getCacheManager().ExtensionCache.delete(CACHE_KEY)
  initializeExtensionTheme()
}

/**
 * Retrieves the cached extension theme.
 *
 * @returns The cached extension theme if found, `undefined` otherwise.
 */
export function getExtensionTheme(): ExtensionManage | undefined {
  return getCacheManager().ExtensionCache.get(CACHE_KEY, 0)
}
