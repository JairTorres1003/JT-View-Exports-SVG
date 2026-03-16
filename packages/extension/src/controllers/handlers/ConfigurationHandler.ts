import { commands } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'

/**
 * @deprecated
 */
export class ConfigurationHandler {
  getTheme(): void {}

  getEditorConfig(): void {}

  getVsCodeStyles(): void {}

  getExtensionTheme(): void {}

  async reloadExtensionTheme(): Promise<void> {
    try {
      await commands.executeCommand(`${CONFIG_KEY}.reloadTheme`)
    } catch (error) {
      console.error(error)
    }
  }
}
