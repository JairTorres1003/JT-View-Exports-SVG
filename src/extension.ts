import { commands, type ExtensionContext, type Uri } from 'vscode'

import {
  runReloadTheme,
  runToggleDevTools,
  runToggleExpandIcon,
  showMenu,
  runClearCache,
  runScanningWorkspace,
} from './commands'
import { CONFIG_KEY } from './constants/misc'
import { initializeCacheManager } from './controllers/cache'
import { initializeExtensionTheme } from './utilities/vscode/extensions/theme'

/**
 * This method is called when your extension is activated.
 * @param context The extension context.
 */
export function activate(context: ExtensionContext): void {
  initializeCacheManager(context)
  initializeExtensionTheme(context)

  const allSubscriptions = [
    commands.registerCommand(`${CONFIG_KEY}.showMenu`, async (item: Uri, items: Uri[]) => {
      await showMenu(context, item, items)
    }),
    commands.registerCommand(`${CONFIG_KEY}.scanning`, async () => {
      await runScanningWorkspace(context)
    }),
    commands.registerCommand(`${CONFIG_KEY}.collapseAll`, async () => {
      await runToggleExpandIcon(false)
    }),
    commands.registerCommand(`${CONFIG_KEY}.expandAll`, async () => {
      await runToggleExpandIcon(true)
    }),
    commands.registerCommand(`${CONFIG_KEY}.openDevTools`, async () => {
      await runToggleDevTools(true)
    }),
    commands.registerCommand(`${CONFIG_KEY}.closeDevTools`, async () => {
      await runToggleDevTools(false)
    }),
    commands.registerCommand(`${CONFIG_KEY}.reloadTheme`, () => {
      runReloadTheme(context)
    }),
    commands.registerCommand(`${CONFIG_KEY}.clearCache`, runClearCache),
  ]

  context.subscriptions.push(...allSubscriptions)
}

/**
 * This method is called when your extension is deactivated.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function -- This is a placeholder for deactivation logic.
export function deactivate(): void {}
