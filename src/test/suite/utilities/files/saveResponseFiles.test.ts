import * as assert from 'assert'
import * as fs from 'fs'

import { stub, type SinonStub } from 'sinon'
import { Uri, commands, window, workspace } from 'vscode'

import { testFolderUri } from '../../main.test'

import { saveResponseFile } from '@/utilities/files/saveResponseFiles'

suite('saveResponseFile Utility Function', () => {
  let writeFileStub: SinonStub
  let showInformationMessageStub: SinonStub
  let executeCommandStub: SinonStub

  setup(() => {
    writeFileStub = stub(fs, 'writeFile')
    showInformationMessageStub = stub(window, 'showInformationMessage')
    executeCommandStub = stub(commands, 'executeCommand')
  })

  teardown(() => {
    writeFileStub.restore()
    showInformationMessageStub.restore()
    executeCommandStub.restore()
  })

  test('should not save the file if NODE_ENV is production', async () => {
    process.env.NODE_ENV = 'production'

    await saveResponseFile({}, 'test')

    assert(writeFileStub.notCalled)
    process.env.NODE_ENV = 'test' // Reset NODE_ENV after the test
  })

  test('should save the file in the default workspace folder if no path is provided', async () => {
    const data = { key: 'value' }
    const name = 'test'
    const filePath = `${workspace.workspaceFolders?.[0].uri.fsPath}/${name}.json`
    writeFileStub.callsFake((path, content, callback) => callback(null))

    await saveResponseFile(data, name)

    assert(writeFileStub.calledOnceWith(filePath, JSON.stringify(data, null, 2)))
  })

  test('should save the file at the specified path', async () => {
    const data = { key: 'value' }
    const name = 'test'
    const filePath = testFolderUri.fsPath
    writeFileStub.callsFake((path, content, callback) => callback(null))

    await saveResponseFile(data, name, filePath)

    assert(writeFileStub.calledOnceWith(filePath, JSON.stringify(data, null, 2)))
  })

  test('should show a success message and open the file if "View file" is selected', async () => {
    const data = { key: 'value' }
    const name = 'test'
    const filePath = `${workspace.workspaceFolders?.[0].uri.fsPath}/${name}.json`
    writeFileStub.callsFake((path, content, callback) => callback(null))
    showInformationMessageStub.resolves('View file')

    await saveResponseFile(data, name)

    assert(
      showInformationMessageStub.calledOnceWith(
        `The file was saved successfully at: ${filePath}`,
        'View file',
        'Close'
      )
    )
    assert(executeCommandStub.calledOnceWith('vscode.open', Uri.file(filePath)))
  })

  test('should show an error message if file saving fails', async () => {
    const data = { key: 'value' }
    const name = 'test'
    writeFileStub.callsFake((path, content, callback) => callback(new Error('Failed to save file')))
    const showErrorMessageStub = stub(window, 'showErrorMessage')

    await saveResponseFile(data, name)

    assert(showErrorMessageStub.calledOnceWith('Error creating and saving the file. Try again.'))
    showErrorMessageStub.restore()
  })
})
