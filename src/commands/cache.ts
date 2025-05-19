import { l10n, window } from 'vscode'

import { getCacheManager } from '@/controllers/cache'

/**
 * Clears all cached data by invoking the cache manager's `clearAll` method.
 *
 * This function retrieves the cache manager instance and removes all cached entries.
 */
export const runClearCache = (): void => {
  const cacheManager = getCacheManager()

  cacheManager.clearAll()

  window
    .showInformationMessage(l10n.t('Cache cleared successfully!'))
    .then(undefined, console.error)
}
