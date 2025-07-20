import * as fs from 'node:fs'
import * as os from 'node:os'
import * as path from 'node:path'

import { l10n, type OpenDialogOptions, window } from 'vscode'

import { expandedIcons, runToggleDevTools } from '@/commands'
import { toggleViewActions } from '@/commands/editorTitleActions'
import { DISABLED_PLAYGROUND_IN_PATH } from '@/constants/misc'
import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import type { FileTemporary } from '@/types/views/content'
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
      await runToggleDevTools(open)
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

  changeViewPath(newPath: string): void {
    toggleViewActions(!DISABLED_PLAYGROUND_IN_PATH.includes(newPath)).catch(console.error)
  }

  async createTempFiles(files: FileTemporary[]): Promise<void> {
    try {
      const filePaths = await Promise.all(
        files.map(async ({ name, content }) => {
          const tempFilePath = path.join(os.tmpdir(), name)
          const fileBuffer =
            typeof content === 'string' ? Buffer.from(content, 'utf8') : Buffer.from(content)

          await fs.promises.writeFile(tempFilePath, fileBuffer)
          return tempFilePath
        })
      )

      this.postMessage(SVGPostMessage.SendOpenFiles, filePaths)
    } catch (error) {
      console.error(l10n.t('Error creating temporary files'), error)
    }
  }
}
