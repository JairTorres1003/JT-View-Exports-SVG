import { l10n, window } from 'vscode'

import { getCacheManager } from '@/controllers/cache'
import { ViewExportsSVGController } from '@/controllers/views'

/**
 * Clears all cached data by invoking the cache manager's `clearAll` method.
 *
 * This function retrieves the cache manager instance and removes all cached entries.
 */
export const runClearCache = (): void => {
  const cacheManager = getCacheManager()

  cacheManager.clearAll()

  if (ViewExportsSVGController.currentPanel) {
    ViewExportsSVGController.currentPanel.reload()
  }

  window
    .showInformationMessage(l10n.t('Cache cleared successfully!'))
    .then(undefined, console.error)
}
