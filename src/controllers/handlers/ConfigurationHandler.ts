import { commands } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import type { FuncPostMessage } from '@/types/views/PostMessage'
import { getConfigurationEditor } from '@/utilities/vscode/config'
import { getExtensionTheme as getExtTheme } from '@/utilities/vscode/extensions'
import { getCurrentTheme, getStyles } from '@/utilities/vscode/theme'

export class ConfigurationHandler {
  constructor(private readonly postMessage: FuncPostMessage) {}

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
    this.postMessage(SVGPostMessage.SendExtensionTheme, getExtTheme())
  }

  async reloadExtensionTheme(): Promise<void> {
    try {
      await commands.executeCommand(`${CONFIG_KEY}.reloadTheme`)
    } catch (error) {
      console.error(error)
    }
  }
}
