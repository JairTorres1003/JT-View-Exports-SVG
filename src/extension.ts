import { commands, type ExtensionContext, type Uri } from 'vscode'

import { showMenu } from './commands'
import { loadLanguage } from './utilities/vscode'

/**
 * This method is called when your extension is activated.
 * @param context The extension context.
 */
export function activate(context: ExtensionContext): void {
  loadLanguage(context.extensionUri).catch((error) => {
    console.error('Failed to load language:', error)
  })

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
