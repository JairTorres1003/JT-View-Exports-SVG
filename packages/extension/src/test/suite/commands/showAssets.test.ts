import { pathnames, type SVGFile, type ViewExportSVG } from '@jt-view-exports-svg/core'
import * as assert from 'assert'
import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'
import * as sinon from 'sinon'
import * as vsc from 'vscode'

import { runShowAssets } from '@/commands/showAssets'
import { CONFIG_KEY } from '@/constants/misc'
import { PanelController } from '@/controllers/views/PanelController'
import { initConfig } from '@/services/config'
import { AssetsPathsConfig } from '@/services/config/AssetsPathsConfig'
import { viewExportStore } from '@/store/ViewExportStore'
import { pathToSVGFile } from '@/utilities/files/misc'
import * as processFilesModule from '@/utilities/files/processFiles'

function makeCtx(): vsc.ExtensionContext {
  return {
    extensionUri: vsc.Uri.file(process.cwd()),
    subscriptions: [],
    workspaceState: { get: () => undefined, update: () => Promise.resolve() },
  } as unknown as vsc.ExtensionContext
}

function makeViewExport(id: string): ViewExportSVG {
  return {
    components: [],
    files: [],
    groupKind: { id, label: id },
    isShowNoExports: false,
    totalExports: 0,
    totalNoExports: 0,
    totalSVG: 0,
  } as unknown as ViewExportSVG
}

suite('runShowAssets', () => {
  let tempDir: string
  let existingFile: SVGFile
  let missingFile: SVGFile

  let renderStub: sinon.SinonStub
  let navigateStub: sinon.SinonStub
  let getAssetsPathStub: sinon.SinonStub
  let removeStub: sinon.SinonStub
  let processFilesStub: sinon.SinonStub
  let showErrorStub: sinon.SinonStub
  let showWarningStub: sinon.SinonStub
  let quickPickStub: sinon.SinonStub
  let executeCommandStub: sinon.SinonStub

  suiteSetup(async () => {
    initConfig(makeCtx())

    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'show-assets-test-'))
    const existingPath = path.join(tempDir, 'ExistingIcon.tsx')
    fs.writeFileSync(existingPath, 'export const ExistingIcon = () => <svg />')

    existingFile = await pathToSVGFile(existingPath)
    missingFile = await pathToSVGFile(path.join(tempDir, 'MissingIcon.tsx'))
  })

  suiteTeardown(() => {
    fs.rmSync(tempDir, { recursive: true, force: true })
  })

  setup(() => {
    renderStub = sinon.stub(PanelController, 'render').resolves()
    navigateStub = sinon.stub(PanelController, 'navigate')
    getAssetsPathStub = sinon.stub(AssetsPathsConfig.prototype, 'getAssetsPath')
    removeStub = sinon.stub(AssetsPathsConfig.prototype, 'remove').resolves()
    processFilesStub = sinon.stub(processFilesModule, 'processFiles').resolves()
    showErrorStub = sinon.stub(vsc.window, 'showErrorMessage').resolves(undefined)
    showWarningStub = sinon.stub(vsc.window, 'showWarningMessage').resolves(undefined)
    quickPickStub = sinon.stub(vsc.window, 'showQuickPick').resolves(undefined)
    executeCommandStub = sinon.stub(vsc.commands, 'executeCommand').resolves()

    viewExportStore.clear()
  })

  teardown(() => sinon.restore())

  test('shows an error and stops when no workspace folder is open', async () => {
    sinon.stub(vsc.workspace, 'workspaceFolders').get(() => undefined)

    await runShowAssets(makeCtx())

    assert.strictEqual(showErrorStub.calledOnce, true)
    assert.strictEqual(getAssetsPathStub.called, false)
    assert.strictEqual(renderStub.called, false)
  })

  test('shows error with a scan action when assetsPath config is empty', async () => {
    getAssetsPathStub.resolves({ workspace: [], user: [] })
    showErrorStub.resolves(vsc.l10n.t('Scan workspace'))

    await runShowAssets(makeCtx())

    assert.strictEqual(showErrorStub.calledOnce, true)
    assert.strictEqual(executeCommandStub.calledWith(`${CONFIG_KEY}.scanning`), true)
    assert.strictEqual(renderStub.called, false)
    assert.strictEqual(processFilesStub.called, false)
  })

  test('does not run the scanning command when the error message is dismissed', async () => {
    getAssetsPathStub.resolves({ workspace: [], user: [] })
    showErrorStub.resolves(undefined)

    await runShowAssets(makeCtx())

    assert.strictEqual(showErrorStub.calledOnce, true)
    assert.strictEqual(executeCommandStub.called, false)
  })

  test('processes workspace files and navigates to the dashboard without a quick pick when there are no user entries', async () => {
    const items = [makeViewExport('group-a')]
    getAssetsPathStub.resolves({ workspace: [existingFile], user: [] })
    processFilesStub.callsFake(
      async (_uris: vsc.Uri[], operation: (result: ViewExportSVG[]) => void) => {
        operation(items)
      }
    )

    await runShowAssets(makeCtx())

    assert.strictEqual(quickPickStub.called, false)
    assert.strictEqual(renderStub.calledOnce, true)

    const uris = processFilesStub.firstCall.args[0] as vsc.Uri[]
    assert.strictEqual(uris.length, 1)
    assert.strictEqual(uris[0].fsPath, existingFile.absolutePath)

    assert.deepStrictEqual(viewExportStore.getAll(), items)
    assert.strictEqual(navigateStub.calledWith(pathnames.dashboard), true)
    assert.strictEqual(showErrorStub.called, false)
  })

  test('includes user files when the "all" scope is selected in the quick pick', async () => {
    const userFile = existingFile
    getAssetsPathStub.resolves({ workspace: [existingFile], user: [userFile] })
    quickPickStub.callsFake(async (items: vsc.QuickPickItem[]) => items[0])

    await runShowAssets(makeCtx())

    assert.strictEqual(quickPickStub.calledOnce, true)

    const uris = processFilesStub.firstCall.args[0] as vsc.Uri[]
    assert.strictEqual(uris.length, 2)
  })

  test('processes only workspace files when the "workspace" scope is selected in the quick pick', async () => {
    getAssetsPathStub.resolves({ workspace: [existingFile], user: [existingFile] })
    quickPickStub.callsFake(async (items: vsc.QuickPickItem[]) => items[1])

    await runShowAssets(makeCtx())

    const uris = processFilesStub.firstCall.args[0] as vsc.Uri[]
    assert.strictEqual(uris.length, 1)
  })

  test('aborts silently when the scope quick pick is cancelled', async () => {
    getAssetsPathStub.resolves({ workspace: [existingFile], user: [existingFile] })
    quickPickStub.resolves(undefined)

    await runShowAssets(makeCtx())

    assert.strictEqual(renderStub.called, false)
    assert.strictEqual(processFilesStub.called, false)
    assert.strictEqual(showErrorStub.called, false)
  })

  test('removes missing files from the config and warns before processing the rest', async () => {
    getAssetsPathStub.resolves({ workspace: [existingFile, missingFile], user: [] })

    await runShowAssets(makeCtx())

    assert.strictEqual(showWarningStub.calledOnce, true)
    assert.strictEqual(removeStub.calledOnce, true)

    const removed = removeStub.firstCall.args[0] as SVGFile[]
    assert.deepStrictEqual(
      removed.map((f) => f.absolutePath),
      [missingFile.absolutePath]
    )

    const uris = processFilesStub.firstCall.args[0] as vsc.Uri[]
    assert.strictEqual(uris.length, 1)
    assert.strictEqual(uris[0].fsPath, existingFile.absolutePath)
  })

  test('shows the empty-config error when every configured file is missing', async () => {
    getAssetsPathStub.resolves({ workspace: [missingFile], user: [] })

    await runShowAssets(makeCtx())

    assert.strictEqual(removeStub.calledOnce, true)
    assert.strictEqual(showErrorStub.calledOnce, true)
    assert.strictEqual(renderStub.called, false)
    assert.strictEqual(processFilesStub.called, false)
  })
})
