import { l10n, type OpenDialogOptions, window } from 'vscode'

import { expandedIcons, toggleDevTools } from '@/commands'
import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import type { FuncPostMessage } from '@/types/views/PostMessage'

export class UIHandler {
  constructor(private readonly postMessage: FuncPostMessage) {}

  async toggleExpandIcon(isExpanded: boolean): Promise<void> {
    try {
      await expandedIcons(isExpanded)
    } catch (error) {
      console.error(error)
    }
  }

  async toggleOpenDevTools(open: boolean): Promise<void> {
    try {
      await toggleDevTools(open)
    } catch (error) {
      console.error(error)
    }
  }

  dialogOpenFile(): void {
    const options: OpenDialogOptions = {
      canSelectMany: true, // Allow selecting multiple files
      openLabel: l10n.t('Select files'),
      filters: {
        'All Files': ['ts', 'tsx', 'js', 'jsx'],
      },
    }

    window.showOpenDialog(options).then((uris) => {
      if (uris && uris.length > 0) {
        const filePaths = uris.map((uri) => uri.fsPath)
        this.postMessage(SVGPostMessage.SendOpenFiles, filePaths)
      }
    })
  }
}
