import * as fs from 'node:fs'
import * as vscode from 'vscode'

export class HostFileSystemProvider implements vscode.FileSystemProvider {
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

  readFile(uri: vscode.Uri): Uint8Array | Thenable<Uint8Array> {
    try {
      const data = fs.readFileSync(uri.fsPath)
      return new Uint8Array(data)
    } catch (_error) {
      throw vscode.FileSystemError.FileNotFound(uri)
    }
  }

  watch(): vscode.Disposable {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }
  readDirectory(): [string, vscode.FileType][] | Thenable<[string, vscode.FileType][]> {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }
  createDirectory(): void | Thenable<void> {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }
  writeFile(): void | Thenable<void> {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }
  delete(): void | Thenable<void> {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }
  rename(): void | Thenable<void> {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }
}
