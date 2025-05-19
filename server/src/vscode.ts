import 'vscode/localExtensionHost'

import packageJson from '@jt/view-exports-svg/package' with { type: 'json' }
import { initializeCacheManager } from '@jt/view-exports-svg/controllers/cache/CacheManagerController.js'

import { initialize } from 'vscode/services'
import { registerExtension, ExtensionHostKind } from 'vscode/extensions'

import { createMockExtensionContext } from '@/mocks/extensionContext.mock.ts'
import { initializeExtensionTheme } from '@jt/view-exports-svg/utilities/vscode/extensions/theme.js'

const extensionId = `${packageJson.publisher}.${packageJson.name}`
const tempDir = Deno.makeTempDirSync({ prefix: extensionId })

// Initialize the extension host
await initialize({})

// Register the extension
const { getApi } = registerExtension(packageJson, ExtensionHostKind.LocalProcess)

const { extensions } = await getApi()

const extension = extensions.getExtension(extensionId)

if (!extension) {
  throw new Error(`Extension ${extensionId} not found`)
}

await extension.activate()

if (!extension.isActive) {
  throw new Error(`Extension ${extensionId} failed to activate`)
}

// create a mock extension context
const context = createMockExtensionContext(extension, tempDir)

initializeCacheManager(context)
initializeExtensionTheme(context)
