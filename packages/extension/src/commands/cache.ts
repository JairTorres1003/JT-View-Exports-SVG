import { type FileIdentifier, IconCollectionKind, pathnames } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import { PanelController } from '@/controllers/views/PanelController'
import { getCache } from '@/services/cache/main'
import { componentDeclarationStore } from '@/store/ComponentDeclarationStore'
import { viewExportStore } from '@/store/ViewExportStore'

type CacheType = 'full' | 'partial'

const runBaseClearCache = async (message: string, callback: () => Promise<void>): Promise<void> => {
  viewExportStore.clear()
  viewExportStore.clearSearch()
  componentDeclarationStore.clear()

  const messageEncoded = encodeURIComponent(message)

  PanelController.navigate(`${pathnames.main}?load-message=${messageEncoded}`)

  await callback()

  if (PanelController.currentPanel) {
    await vsc.commands.executeCommand(`${CONFIG_KEY}.reloadTheme`)
    await vsc.commands.executeCommand(`${CONFIG_KEY}.showMenu`)
  } else {
    PanelController.navigate(pathnames.home)
  }

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

      // Prune FilesCache: keep only IDs still referenced by icons
      const workspace = vsc.workspace.workspaceFolders?.[0]
      if (workspace) {
        const filesCache = getCache().get('files')
        const iconsCache = getCache().get('icons')

        const referencedIds = new Set<FileIdentifier>()
        for (const kind of Object.values(IconCollectionKind)) {
          const entry = await iconsCache.get([workspace, kind])
          if (!entry) continue
          for (const id of Object.keys(entry.fileCounts) as FileIdentifier[]) {
            referencedIds.add(id)
          }
        }

        await filesCache.pruneUnreferenced(workspace, [...referencedIds])
      }
    }
  })
}

export const runClearCollectionCache = async (): Promise<void> => {
  const message = vsc.l10n.t('Clearing icons collection cache...')

  await runBaseClearCache(message, async () => {
    await getCache().clear(['icons'])

    // Prune FilesCache: keep only IDs still referenced by viewExports
    const workspace = vsc.workspace.workspaceFolders?.[0]
    if (workspace) {
      const filesCache = getCache().get('files')
      const viewExportCache = getCache().get('viewExports')
      const viewExportEntry = await viewExportCache.get(workspace)
      const referencedIds = Object.keys(viewExportEntry ?? {}) as FileIdentifier[]
      await filesCache.pruneUnreferenced(workspace, referencedIds)
    }
  })
}
