import { pathnames } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import { PanelController } from '@/controllers/views/PanelController'
import { getCache } from '@/services/cache/main'

type CacheType = 'full' | 'partial'

const runBaseClearCache = async (message: string, callback: () => Promise<void>): Promise<void> => {
  const messageEncoded = encodeURIComponent(message)

  PanelController.navigate(`${pathnames.main}?load-message=${messageEncoded}`)

  await callback()

  if (PanelController.currentPanel) {
    await vsc.commands.executeCommand(`${CONFIG_KEY}.reloadTheme`)
  }

  PanelController.navigate(pathnames.home)

  vsc.window
    .showInformationMessage(vsc.l10n.t('Cache cleared successfully!'))
    .then(undefined, console.error)
}

export const runClearCache = async (cache: CacheType = 'partial'): Promise<void> => {
  const message = vsc.l10n.t(cache === 'full' ? 'Clearing full cache...' : 'Clearing cache...')

  await runBaseClearCache(message, async () => {
    if (cache === 'full') {
      await getCache().clearAll()
    } else {
      await getCache().clear(['extensionTheme', 'viewExports'])
    }
  })
}

export const runClearCollectionCache = async (): Promise<void> => {
  const message = vsc.l10n.t('Clearing icons collection cache...')

  await runBaseClearCache(message, async () => {
    await getCache().clear(['icons'])
  })
}
