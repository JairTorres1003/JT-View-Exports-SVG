import assert = require('assert')
import * as path from 'path'

import { Uri, workspace } from 'vscode'

export const extensionUri: Uri = Uri.file(path.resolve(__dirname, '../../../'))
export const testFolderUri: Uri = Uri.joinPath(extensionUri, 'src', 'test')

suite('workspace', () => {
  test('it should have a workspace folder', () => {
    if (workspace.workspaceFolders?.length === undefined) {
      console.error('Workspace folders not found')
      process.exit(1)
    }

    assert.strictEqual(workspace.workspaceFolders?.length, 1, 'Workspace folder not found')
  })
})
