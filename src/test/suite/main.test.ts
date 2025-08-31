import * as assert from 'assert'

import { Uri, workspace } from 'vscode'

export const extensionUri: Uri = Uri.file(process.cwd())
export const testFolderUri: Uri = Uri.joinPath(extensionUri, 'src', 'test')

suite('workspace', () => {
  test('it should have a workspace folder', () => {
    if (!workspace.workspaceFolders?.length) {
      console.error('Workspace folders not found')
      process.exit(1)
    }

    assert.strictEqual(workspace.workspaceFolders?.length, 1, 'Workspace folder not found')
  })
})
