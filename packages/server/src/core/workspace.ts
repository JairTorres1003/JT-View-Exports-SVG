import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {
  RegisteredFileSystemProvider,
  RegisteredMemoryFile,
  registerFileSystemOverlay,
} from '@codingame/monaco-vscode-files-service-override'
import { Uri } from 'vscode/extension.api'

async function initializeTemporaryWorkspace() {
  const systemTempDir = os.tmpdir()

  const workspacePath = path.join(systemTempDir, 'jt-svg-exports', 'session-temp-workspace')

  if (!fs.existsSync(workspacePath)) {
    fs.mkdirSync(workspacePath, { recursive: true })
  }

  const workspaceUri = Uri.file(workspacePath)
  const fileUri = workspaceUri.with({ path: `${workspaceUri.path}/hello.txt` })

  const fileSystemProvider = new RegisteredFileSystemProvider(false)
  fileSystemProvider.registerFile(new RegisteredMemoryFile(fileUri, 'Hello World'))
  registerFileSystemOverlay(1, fileSystemProvider)

  return workspaceUri
}

export default initializeTemporaryWorkspace
