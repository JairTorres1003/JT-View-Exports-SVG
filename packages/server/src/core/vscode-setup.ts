// import 'vscode/localExtensionHost'

import { initialize } from '@codingame/monaco-vscode-api/services'
import getConfigurationServiceOverride from '@codingame/monaco-vscode-configuration-service-override'
import getFileServiceOverride, {
  registerFileSystemOverlay,
} from '@codingame/monaco-vscode-files-service-override'
import getModelServiceOverride from '@codingame/monaco-vscode-model-service-override'
import { initializeCacheManager } from '@jt-view-exports-svg/extension-api/controllers/cache/CacheManagerController'
import { initializeExtensionTheme } from '@jt-view-exports-svg/extension-api/utilities/vscode/extensions/theme'

import { HostFileSystemProvider } from '../providers/HostFileSystemProvider'

import createFileSystemContext from './context'
import { initializeWorkspaceSettings } from './settings'
import initializeTemporaryWorkspace from './workspace'

/**
 * Bootstraps the VS Code environment by initializing necessary services.
 */
async function bootstrapVSCode() {
  const tempWorkspaceUri = await initializeTemporaryWorkspace()

  await initialize(
    {
      ...getConfigurationServiceOverride(),
      ...getModelServiceOverride(),
      ...getFileServiceOverride(),
    },
    undefined,
    {
      workspaceProvider: {
        trusted: true,
        workspace: {
          folderUri: tempWorkspaceUri,
        },
        open: async () => true,
      },
    }
  )

  initializeWorkspaceSettings(tempWorkspaceUri)

  const context = createFileSystemContext(tempWorkspaceUri)

  await initializeCacheManager(context)
  await initializeExtensionTheme(context)

  // Enable host file system access
  const hostProvider = new HostFileSystemProvider()
  // biome-ignore lint/suspicious/noExplicitAny: The API requires a specific type that is not compatible with the current implementation, so we need to use 'any' here.
  registerFileSystemOverlay(1, hostProvider as any)
}

export default bootstrapVSCode
