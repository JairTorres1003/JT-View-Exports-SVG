import * as path from 'path'

import {
  type ExtensionContext,
  extensions,
  type FileStat,
  FileType,
  l10n,
  Uri,
  workspace,
} from 'vscode'

import { getCacheManager } from '@/controllers/cache'
import type { ExtensionManage, IExtension, IPackageJSON } from '@/types/vscode'

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
export async function initializeExtensionTheme(context: ExtensionContext): Promise<void> {
  try {
    const cachedTheme = getCacheManager().ExtensionCache
    const exists = await extensionThemePath(context)
    if (cachedTheme.has(CACHE_KEY) && exists) {
      return
    }

    const configuration = workspace.getConfiguration('workbench')
    const theme: string = configuration.get('colorTheme') ?? ''

    if (theme !== '') {
      const themeExtension = extensions.all.find((ext: IExtension) => {
        const { contributes } = ext.packageJSON

        if (contributes?.themes != null) {
          return contributes.themes.some((t) => t.label === theme)
        }

        return false
      })

      if (themeExtension) {
        const { id, extensionUri, extensionPath, isActive } = themeExtension

        cachedTheme.set(CACHE_KEY, { id, extensionUri, extensionPath, isActive, isValid: true }, 0)
        await cloneThemeExtension(context, extensionPath)
      } else {
        cachedTheme.set(
          CACHE_KEY,
          {
            id: '',
            extensionUri: Uri.file(''),
            extensionPath: '',
            isActive: false,
            isValid: false,
          },
          0
        )
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
export async function reloadExtensionTheme(context: ExtensionContext): Promise<void> {
  getCacheManager().ExtensionCache.delete(CACHE_KEY)
  await initializeExtensionTheme(context)
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
async function cloneThemeExtension(
  context: ExtensionContext,
  extensionPath: string
): Promise<void> {
  const folder = Uri.joinPath(context.extensionUri, 'client/dist/assets/extensions/theme')

  try {
    await workspace.fs.stat(folder)
  } catch {
    await workspace.fs.createDirectory(folder)
  }

  const file = !extensionPath?.endsWith('.json') ? `${extensionPath}/package.json` : extensionPath
  const manifestData = await workspace.fs.readFile(Uri.file(file))

  await workspace.fs.writeFile(Uri.joinPath(folder, 'package.json'), manifestData)

  const manifest = new TextDecoder('utf-8').decode(manifestData)
  const themes = (JSON.parse(manifest) as IPackageJSON)?.contributes?.themes ?? []

  await Promise.all(
    themes.map(async (theme: { path: string }) => {
      const newThemeFilePath = Uri.joinPath(folder, theme.path)
      const themePath = Uri.file(path.join(extensionPath, theme.path))
      const newThemeDir = Uri.file(path.dirname(newThemeFilePath.fsPath))

      try {
        await workspace.fs.stat(newThemeDir)
      } catch {
        await workspace.fs.createDirectory(newThemeDir)
      }

      let stat: FileStat | null = null

      try {
        stat = await workspace.fs.stat(themePath)
      } catch {
        stat = null
      }

      if (stat?.type === FileType.File) {
        const themeData = await workspace.fs.readFile(themePath)
        await workspace.fs.writeFile(newThemeFilePath, themeData)
      }
    })
  )
}

/**
 * Checks if the extension theme path exists.
 *
 * @param context - The extension context.
 * @returns `true` if the theme path exists, `false` otherwise.
 */
async function extensionThemePath(context: ExtensionContext): Promise<boolean> {
  const folder = Uri.joinPath(context.extensionUri, 'client/dist/assets/extensions/theme')

  try {
    await workspace.fs.stat(folder)
    return true
  } catch {
    return false
  }
}
