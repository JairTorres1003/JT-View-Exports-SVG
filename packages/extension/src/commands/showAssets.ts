import { pathnames, type ViewExportSVG } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import { PanelController } from '@/controllers/views/PanelController'
import { getConfig } from '@/services/config'
import { viewExportStore } from '@/store/ViewExportStore'
import { processFiles } from '@/utilities/files/processFiles'
import { svgFileToUri } from '@/utilities/vscode/uri'

type AssetsScope = 'all' | 'workspace'

/**
 * Asks the user whether to show all assets or only the workspace ones.
 */
const pickScope = async (): Promise<AssetsScope | undefined> => {
  const items: Array<vsc.QuickPickItem & { scope: AssetsScope }> = [
    {
      label: vsc.l10n.t('All assets'),
      description: vsc.l10n.t('Assets defined in the workspace and user settings'),
      scope: 'all',
    },
    {
      label: vsc.l10n.t('Workspace only'),
      description: vsc.l10n.t('Assets defined in the workspace settings'),
      scope: 'workspace',
    },
  ]

  const selected = await vsc.window.showQuickPick(items, {
    placeHolder: vsc.l10n.t('Select which assets to show'),
  })

  return selected?.scope
}

/**
 * Shows an error recommending a workspace scan, with an action to run it.
 */
const showEmptyAssetsError = async (): Promise<void> => {
  const scanAction = vsc.l10n.t('Scan workspace')
  const message = vsc.l10n.t(
    'No assets found in the configuration. It is recommended to scan the workspace first to view the icons.'
  )

  const selection = await vsc.window.showErrorMessage(message, scanAction)

  if (selection === scanAction) {
    await vsc.commands.executeCommand(`${CONFIG_KEY}.scanning`)
  }
}

/**
 * Shows the assets defined in the `assetsPath` configuration in the dashboard.
 */
export const runShowAssets = async (context: vsc.ExtensionContext): Promise<void> => {
  const currentWorkspace = vsc.workspace.workspaceFolders?.[0]

  if (!currentWorkspace) {
    const errorMessage = vsc.l10n.t(
      'No workspace folder found. Please open a workspace and try again.'
    )
    vsc.window.showErrorMessage(errorMessage).then(undefined, console.error)
    return
  }

  const configAssetsPath = getConfig().get('assetsPath')
  const { workspace, user } = await configAssetsPath.getAssetsPath()

  if (workspace.length === 0 && user.length === 0) {
    await showEmptyAssetsError()
    return
  }

  let selectedFiles = workspace

  if (user.length > 0) {
    const scope = await pickScope()
    if (!scope) return

    selectedFiles = scope === 'all' ? [...workspace, ...user] : workspace
  }

  await PanelController.render(context)

  viewExportStore.clear()

  const messageEncoded = encodeURIComponent(vsc.l10n.t('Loading assets...'))

  PanelController.navigate(`${pathnames.main}?load-message=${messageEncoded}`)

  const operation = (result: ViewExportSVG[]): void => {
    viewExportStore.set(result)
    PanelController.navigate(pathnames.dashboard)
  }

  await processFiles(selectedFiles.map(svgFileToUri), operation)
}
