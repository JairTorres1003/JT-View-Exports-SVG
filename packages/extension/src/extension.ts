import { commands, type ExtensionContext, type Uri, workspace } from 'vscode'

import {
  runClearCache,
  runClearCollectionCache,
  runReloadTheme,
  runScanningWorkspace,
  runToggleDevTools,
  runToggleExpandIcon,
  showMenu,
} from './commands'
import { CONFIG_KEY } from './constants/misc'
import { InMemoryFileSystemProvider } from './providers/InMemoryFileSystemProvider'
import { initCache } from './services/cache/main'
import { initConfig } from './services/config'
import { initializeExtensionTheme } from './services/vscode/extensionTheme'

/**
 * This method is called when your extension is activated.
 * @param context The extension context.
 */
export async function activate(context: ExtensionContext) {
  initCache(context)
  initConfig(context)
  initializeExtensionTheme()

  const provider = new InMemoryFileSystemProvider()

  const allSubscriptions = [
    // commands
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
    commands.registerCommand(`${CONFIG_KEY}.reloadTheme`, async () => {
      await runReloadTheme()
    }),
    commands.registerCommand(`${CONFIG_KEY}.clearCache`, runClearCache),
    commands.registerCommand(`${CONFIG_KEY}.clearFullCache`, () => runClearCache('full')),
    commands.registerCommand(`${CONFIG_KEY}.clearCollectionCache`, runClearCollectionCache),
    // providers
    workspace.registerFileSystemProvider(`scheme-${CONFIG_KEY}`, provider, {
      isCaseSensitive: true,
    }),
  ]

  context.subscriptions.push(...allSubscriptions)
}

/**
 * This method is called when your extension is deactivated.
 */
export function deactivate(): void {}
