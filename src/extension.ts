import { commands, type ExtensionContext, type Uri } from 'vscode'

import { expandedIcons, showMenu } from './commands'
import { CONFIG_KEY } from './constants/misc'
import { initializeCacheManager } from './controllers/cache'

/**
 * This method is called when your extension is activated.
 * @param context The extension context.
 */
export function activate(context: ExtensionContext): void {
  initializeCacheManager(context)

  const allCommands = [
    commands.registerCommand(`${CONFIG_KEY}.showMenu`, async (item: Uri, items: Uri[]) => {
      await showMenu(context, item, items)
    }),
    commands.registerCommand(`${CONFIG_KEY}.collapseAll`, async () => {
      await expandedIcons(false)
    }),
    commands.registerCommand(`${CONFIG_KEY}.expandAll`, async () => {
      await expandedIcons(true)
    }),
  ]

  context.subscriptions.push(...allCommands)
}

/**
 * This method is called when your extension is deactivated.
 */
export function deactivate(): void {}
