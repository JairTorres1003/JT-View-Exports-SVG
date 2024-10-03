import { commands, type ExtensionContext, type Uri } from 'vscode'

import { showMenu } from './commands'
import { initializeCacheManager } from './utilities/cache'

/**
 * This method is called when your extension is activated.
 * @param context The extension context.
 */
export function activate(context: ExtensionContext): void {
  initializeCacheManager(context)

  context.subscriptions.push(
    commands.registerCommand('JT-View-Exports-SVG.showMenu', async (item: Uri, items: Uri[]) => {
      await showMenu(context, item, items)
    })
  )
}

/**
 * This method is called when your extension is deactivated.
 */
export function deactivate(): void {}
