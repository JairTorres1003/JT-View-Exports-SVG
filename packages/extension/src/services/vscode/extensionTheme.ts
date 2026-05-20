import type { IExtension } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { getCache } from '../cache/main'

export const CACHE_KEY = 'CurrentExtensionTheme'

/**
 * Initializes the cached metadata for the current VS Code extension theme.
 */
export function initializeExtensionTheme(): void {
  try {
    const cache = getCache().get('extensionTheme')

    if (cache.has(CACHE_KEY)) return

    const configuration = vsc.workspace.getConfiguration('workbench')
    const theme: string = configuration.get('colorTheme') ?? ''

    const themeNotFound = {
      id: '',
      extensionUri: vsc.Uri.file(''),
      extensionPath: '',
      isActive: false,
      isValid: false,
    }

    if (theme === '') {
      cache.set(CACHE_KEY, themeNotFound)
      return
    }

    const themeExtension = vsc.extensions.all.find((ext: IExtension) => {
      const { contributes } = ext.packageJSON

      if (contributes?.themes != null) {
        return contributes.themes.some((t) => t.label === theme)
      }

      return false
    })

    if (themeExtension) {
      const { id, extensionUri, extensionPath, isActive } = themeExtension

      cache.set(CACHE_KEY, { id, extensionUri, extensionPath, isActive, isValid: true })
    } else {
      cache.set(CACHE_KEY, themeNotFound)
    }
  } catch {
    console.error(vsc.l10n.t('Failed to initialize the extension theme'))
  }
}
