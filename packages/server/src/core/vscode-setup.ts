// import 'vscode/localExtensionHost'

import { initialize } from '@codingame/monaco-vscode-api/services'
import getConfigurationServiceOverride from '@codingame/monaco-vscode-configuration-service-override'
import getFileServiceOverride from '@codingame/monaco-vscode-files-service-override'
import getModelServiceOverride from '@codingame/monaco-vscode-model-service-override'
import { initializeCacheManager } from '@jt-view-exports-svg/extension-api/controllers/cache/CacheManagerController'
import { initializeExtensionTheme } from '@jt-view-exports-svg/extension-api/utilities/vscode/extensions/theme'

import createFileSystemContext from './context'
import initializeTemporaryWorkspace from './workspace'

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

  const context = createFileSystemContext(tempWorkspaceUri)

  await initializeCacheManager(context)
  await initializeExtensionTheme(context)
}

export default bootstrapVSCode
