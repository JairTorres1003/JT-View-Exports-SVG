import { l10n, type OpenDialogOptions, Uri, window, workspace } from 'vscode'

import { expandedIcons, runToggleDevTools } from '@/commands'
import { toggleViewActions } from '@/commands/editorTitleActions'
import { CONFIG_KEY, DISABLED_PLAYGROUND_IN_PATH } from '@/constants/misc'
import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import type { FileTemporary, OpenFile } from '@/types/views/content'
import type { FuncPostMessage } from '@/types/views/PostMessage'
import { openFile } from '@/utilities/files'

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

  openFileInEditor(options: OpenFile): void {
    if (options.file.isTemporary) {
      const message = l10n.t('This file is temporary. Do you want to continue?')
      window.showWarningMessage(message, l10n.t('Yes'), l10n.t('No')).then((selection) => {
        if (selection === l10n.t('Yes')) {
          openFile(options)
        }
      })
    } else {
      openFile(options)
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
        const fileUris = uris.map((uri) => uri.toString())
        this.postMessage(SVGPostMessage.SendOpenFiles, fileUris)
      }
    })
  }

  changeViewPath(newPath: string): void {
    toggleViewActions(!DISABLED_PLAYGROUND_IN_PATH.includes(newPath)).catch(console.error)
  }

  async createTempFiles(files: FileTemporary[]): Promise<void> {
    try {
      const uris = await Promise.all(
        files.map(async ({ name, content }) => {
          const tempUri = Uri.parse(`scheme-${CONFIG_KEY}:/${name}`)

          const fileBuffer =
            typeof content === 'string' ? Buffer.from(content, 'utf8') : Buffer.from(content)

          await workspace.fs.writeFile(tempUri, fileBuffer)

          await workspace.openTextDocument(tempUri)

          return tempUri.toString()
        })
      )

      this.postMessage(SVGPostMessage.SendOpenFiles, uris)
    } catch (error) {
      console.error(l10n.t('Error creating temporary files'), error)
    }
  }
}
