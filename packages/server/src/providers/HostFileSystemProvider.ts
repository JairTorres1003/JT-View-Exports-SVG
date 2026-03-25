import * as fs from 'node:fs'
import * as vscode from 'vscode'

export class HostFileSystemProvider implements vscode.FileSystemProvider {
  readonly capabilities = 2 // FileReadWrite
  readonly onDidChangeCapabilities = new vscode.EventEmitter<void>().event

  onDidChangeFile: vscode.Event<vscode.FileChangeEvent[]> = new vscode.EventEmitter<
    vscode.FileChangeEvent[]
  >().event

  stat(uri: vscode.Uri): vscode.FileStat | Thenable<vscode.FileStat> {
    try {
      const stats = fs.statSync(uri.fsPath)
      return {
        type: stats.isDirectory() ? vscode.FileType.Directory : vscode.FileType.File,
        ctime: stats.birthtimeMs,
        mtime: stats.mtimeMs,
        size: stats.size,
      }
    } catch (_error) {
      throw vscode.FileSystemError.FileNotFound(uri)
    }
  }

  async mkdir(uri: vscode.Uri): Promise<void> {
    return this.createDirectory(uri)
  }

  createDirectory(uri: vscode.Uri): void | Thenable<void> {
    try {
      fs.mkdirSync(uri.fsPath, { recursive: true })
    } catch (error) {
      throw vscode.FileSystemError.Unavailable(
        `Error creating directory: ${(error as Error).message}`
      )
    }
  }

  readFile(uri: vscode.Uri): Uint8Array | Thenable<Uint8Array> {
    try {
      const data = fs.readFileSync(uri.fsPath)
      return new Uint8Array(data)
    } catch (_error) {
      throw vscode.FileSystemError.FileNotFound(uri)
    }
  }

  writeFile(
    uri: vscode.Uri,
    content: Uint8Array,
    options: { readonly create: boolean; readonly overwrite: boolean }
  ): void | Thenable<void> {
    const fileExists = fs.existsSync(uri.fsPath)

    if (fileExists && options.create && !options.overwrite) {
      throw vscode.FileSystemError.FileExists(uri)
    }

    if (!fileExists && !options.create) {
      throw vscode.FileSystemError.FileNotFound(uri)
    }

    try {
      fs.writeFileSync(uri.fsPath, Buffer.from(content))
    } catch (error) {
      throw vscode.FileSystemError.Unavailable(`Error writing file: ${(error as Error).message}`)
    }
  }

  delete(uri: vscode.Uri): void | Thenable<void> {
    try {
      const stats = fs.statSync(uri.fsPath)
      if (stats.isDirectory()) {
        fs.rmdirSync(uri.fsPath)
      } else {
        fs.unlinkSync(uri.fsPath)
      }
    } catch (error) {
      throw vscode.FileSystemError.Unavailable(`Error deleting file: ${(error as Error).message}`)
    }
  }

  watch(): vscode.Disposable {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }
  readDirectory(): [string, vscode.FileType][] | Thenable<[string, vscode.FileType][]> {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }
  rename(): void | Thenable<void> {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }
}
