import { pathnames } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { PanelController } from '@/controllers/views/PanelController'
import { getCache } from '@/services/cache/main'

export const runClearFullCache = async (isFullCache: boolean): Promise<void> => {
  const messageEncoded = encodeURIComponent(
    vsc.l10n.t(isFullCache ? 'Clearing full cache...' : 'Clearing cache...')
  )

  PanelController.navigate(`${pathnames.main}?load-message=${messageEncoded}`)

  await getCache().clear(['extensionTheme', 'viewExports'])

  PanelController.navigate(pathnames.home)

  vsc.window
    .showInformationMessage(vsc.l10n.t('Cache cleared successfully!'))
    .then(undefined, console.error)
}
