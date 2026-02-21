import { type PostMessageEmitter, SVGPostMessage } from '@jt-view-exports-svg/core'
import { commands } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import { getConfigurationEditor } from '@/utilities/vscode/config'
import { getExtensionTheme as getExtTheme } from '@/utilities/vscode/extensions/theme'
import { getCurrentTheme, getStyles } from '@/utilities/vscode/theme'

export class ConfigurationHandler {
  constructor(private readonly postMessage: PostMessageEmitter) {}

  getTheme(): void {
    this.postMessage(SVGPostMessage.SendTheme, getCurrentTheme())
  }

  getEditorConfig(): void {
    const config = getConfigurationEditor()
    this.postMessage(SVGPostMessage.SendEditorConfig, config)
  }

  getVsCodeStyles(): void {
    const config = getStyles()
    this.postMessage(SVGPostMessage.SendVsCodeStyles, config)
  }

  getExtensionTheme(): void {
    const theme = getExtTheme()
    if (!theme) return
    this.postMessage(SVGPostMessage.SendExtensionTheme, theme)
  }

  async reloadExtensionTheme(): Promise<void> {
    try {
      await commands.executeCommand(`${CONFIG_KEY}.reloadTheme`)
    } catch (error) {
      console.error(error)
    }
  }
}
