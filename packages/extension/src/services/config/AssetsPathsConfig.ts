import type { SVGFile } from '@jt-view-exports-svg/core'
import { ConfigurationTarget, l10n, workspace } from 'vscode'

import { CONFIG_KEY } from '@/constants/misc'
import { pathToSVGFile } from '@/utilities/files/misc'
import { getUnknownError } from '@/utilities/misc'

import { ConfigManager } from './base/ConfigManager'

export class AssetsPathsConfig extends ConfigManager<string[]> {
  readonly section = 'assetsPath'
  readonly defaultValue: string[] = []

  private get workspaceFolders() {
    return workspace.workspaceFolders
  }

  private inspectValues(): { ws: string[]; global: string[] } {
    const cfg = workspace.getConfiguration(CONFIG_KEY)
    const inspected = cfg.inspect<string[]>(this.section)

    return {
      ws: inspected?.workspaceValue ?? [],
      global: inspected?.globalValue ?? [],
    }
  }

  private existsInWorkspace(file: SVGFile): boolean {
    if (!this.workspaceFolders) return false

    return this.workspaceFolders.some((folder) => file.absolutePath.includes(folder.uri.fsPath))
  }

  private getPath(file: SVGFile): string {
    return this.existsInWorkspace(file) ? file.relativePath : file.absolutePath
  }

  async set(files: SVGFile[]): Promise<void> {
    if (!this.workspaceFolders) return

    try {
      const { ws, global } = this.inspectValues()

      for (const f of files) {
        const filePath = this.getPath(f)
        const exists = this.existsInWorkspace(f)

        if (!ws.includes(filePath) && exists) {
          ws.push(filePath)
        } else if (!global.includes(filePath) && !exists) {
          global.push(filePath)
        }
      }

      ws.sort()
      global.sort()

      await this.update(ws, ConfigurationTarget.Workspace)
      await this.update(global, ConfigurationTarget.Global)
    } catch (error) {
      console.error(`${l10n.t('Error setting assets path')}:`, error)
    }
  }

  async remove(files: SVGFile[]): Promise<void> {
    if (!this.workspaceFolders) return

    try {
      const { ws, global } = this.inspectValues()

      for (const f of files) {
        if (f.isTemporary) continue

        const filePath = this.getPath(f)
        const exists = this.existsInWorkspace(f)

        if (exists) {
          const index = ws.indexOf(filePath)
          if (index !== -1) ws.splice(index, 1)
        } else {
          const index = global.indexOf(filePath)
          if (index !== -1) global.splice(index, 1)
        }
      }

      await this.update(ws, ConfigurationTarget.Workspace)
      await this.update(global, ConfigurationTarget.Global)
    } catch (error) {
      console.error(
        l10n.t('Error removing assets path: {error}', { error: getUnknownError(error) })
      )
    }
  }

  async getAssetsPath(): Promise<{ workspace: SVGFile[]; user: SVGFile[] }> {
    const { ws: assetsPath, global: assetsPathUser } = this.inspectValues()
    const mutableUser = [...assetsPathUser]

    await Promise.all(
      mutableUser.map(async (p, index) => {
        const svgFile = await pathToSVGFile(p)
        const exists = this.existsInWorkspace(svgFile)

        if (exists) {
          if (!assetsPath.includes(svgFile.relativePath)) {
            this.set([svgFile]).catch((error) => {
              console.error(`${l10n.t('Error setting assets path')}:`, error)
            })
          }

          mutableUser.splice(index, 1)
        }
      })
    )

    const workspaceFiles = await Promise.all(assetsPath.map(pathToSVGFile))
    const userFiles = await Promise.all(mutableUser.map(pathToSVGFile))

    return { workspace: workspaceFiles, user: userFiles }
  }
}
