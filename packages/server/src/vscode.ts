import 'vscode/localExtensionHost'

import { tmpdir } from 'node:os'
import * as path from 'node:path'
import getConfigurationServiceOverride from '@codingame/monaco-vscode-configuration-service-override'
import getModelServiceOverride from '@codingame/monaco-vscode-model-service-override'
import { initializeCacheManager } from '@jt/view-exports-svg/controllers/cache/CacheManagerController.js'
import packageJson from '@jt/view-exports-svg/package' with { type: 'json' }
import { initializeExtensionTheme } from '@jt/view-exports-svg/utilities/vscode/extensions/theme.js'
import { Uri, workspace } from 'vscode'
import { ExtensionHostKind, registerExtension } from 'vscode/extensions'
import { initialize } from 'vscode/services'
import { createMockExtensionContext } from '@/mocks/extensionContext.mock.ts'

const extensionId = `${packageJson.publisher}.${packageJson.name}`
const baseTempDir = tmpdir()
const tempDirPath = path.join(baseTempDir, packageJson.name, packageJson.version)
Deno.mkdirSync(tempDirPath, { recursive: true })

const tempDir = Deno.makeTempDirSync({
  prefix: extensionId,
  suffix: '-workspace',
  dir: tempDirPath,
})

// Initialize the extension host
await initialize(
  {
    ...getConfigurationServiceOverride(),
    ...getModelServiceOverride(),
  },
  undefined,
  {
    workspaceProvider: {
      trusted: true,
      workspace: {
        // workspaceUri: Uri.file(tempDir),
        label: 'Test Workspace',
        folderUri: Uri.file(tempDir),
      },
      open: async () => {
        return true
      },
    },
  }
)

workspace.updateWorkspaceFolders(0, 0, {
  uri: Uri.file(tempDir),
  name: 'Test Workspace',
})

// Register the extension
const { getApi } = registerExtension(packageJson, ExtensionHostKind.LocalProcess)

const { extensions } = await getApi()

const extension = extensions.getExtension(extensionId)

if (!extension) {
  throw new Error(`Extension ${extensionId} not found`)
}

// await extension.activate()

// if (!extension.isActive) {
//   throw new Error(`Extension ${extensionId} failed to activate`)
// }

// create a mock extension context
const context = createMockExtensionContext(extension, tempDir)

await initializeCacheManager(context)
await initializeExtensionTheme(context)
