import 'vscode/localExtensionHost'

import packageJson from '@jt/view-exports-svg/package' with { type: 'json' }
import { initializeCacheManager } from '@jt/view-exports-svg/controllers/cache/CacheManagerController.js'

import { initialize } from 'vscode/services'
import { registerExtension, ExtensionHostKind } from 'vscode/extensions'

import { createMockExtensionContext } from '@/mocks/extensionContext.mock.ts'

await initialize({})

const { registerFileUrl, getApi } = registerExtension(packageJson, ExtensionHostKind.LocalProcess)

const fileExtensionPath = '../../package.json'
const extensionId = `${packageJson.publisher}.${packageJson.name}`

registerFileUrl(fileExtensionPath, new URL(fileExtensionPath, import.meta.url).toString())

const { extensions } = await getApi()

const extension = extensions.getExtension(extensionId)

if (!extension) {
  throw new Error(`Extension ${extensionId} not found`)
}

await extension.activate()

if (!extension.isActive) {
  throw new Error(`Extension ${extensionId} failed to activate`)
}

const context = createMockExtensionContext(extension)

initializeCacheManager(context)
