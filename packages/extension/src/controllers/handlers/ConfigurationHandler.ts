import { type PostMessageEmitter, SVGPostMessage } from '@jt-view-exports-svg/core'
import { commands } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import { getStyles } from '@/utilities/vscode/theme'

/**
 * @deprecated
 */
export class ConfigurationHandler {
  constructor(private readonly postMessage: PostMessageEmitter) {}

  getTheme(): void {}

  getEditorConfig(): void {}

  getVsCodeStyles(): void {
    const config = getStyles()
    this.postMessage(SVGPostMessage.SendVsCodeStyles, config)
  }

  getExtensionTheme(): void {}

  async reloadExtensionTheme(): Promise<void> {
    try {
      await commands.executeCommand(`${CONFIG_KEY}.reloadTheme`)
    } catch (error) {
      console.error(error)
    }
  }
}
