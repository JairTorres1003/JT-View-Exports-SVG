import * as vscode from 'vscode'

interface FileEntry {
  content: Uint8Array
  ctime: number
  mtime: number
}

export class InMemoryFileSystemProvider implements vscode.FileSystemProvider {
  private readonly files = new Map<string, FileEntry>()

  onDidChangeFile: vscode.Event<vscode.FileChangeEvent[]> = new vscode.EventEmitter<
    vscode.FileChangeEvent[]
  >().event

  private getFile(uri: vscode.Uri): FileEntry {
    const file = this.files.get(uri.toString())
    if (!file) {
      throw vscode.FileSystemError.FileNotFound(uri)
    }
    return file
  }

  stat(uri: vscode.Uri): vscode.FileStat {
    const file = this.getFile(uri)
    return {
      type: vscode.FileType.File,
      ctime: file.ctime,
      mtime: file.mtime,
      size: file.content.byteLength,
    }
  }

  readDirectory(): Array<[string, vscode.FileType]> {
    return []
  }

  readFile(uri: vscode.Uri): Uint8Array {
    return this.getFile(uri).content
  }

  writeFile(uri: vscode.Uri, content: Uint8Array): void {
    const key = uri.toString()
    const now = Date.now()
    const existing = this.files.get(key)

    if (existing) {
      this.files.set(key, {
        content,
        ctime: existing.ctime,
        mtime: now,
      })
    } else {
      this.files.set(key, { content, ctime: now, mtime: now })
    }
  }

  delete(uri: vscode.Uri): void {
    const key = uri.toString()
    if (!this.files.has(key)) {
      throw vscode.FileSystemError.FileNotFound()
    }
    this.files.delete(key)
  }

  rename(): void {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }

  watch(): vscode.Disposable {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }
  createDirectory(): void | Thenable<void> {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }
  copy?(): void | Thenable<void> {
    throw new Error(vscode.l10n.t('Method not implemented'))
  }
}
