import { SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { SVGComponent, SVGLocation } from '@api/interfaces/ViewExportsSVG'
import {
  registerExtension,
  ExtensionHostKind,
  type IExtensionManifest,
  type RegisterLocalProcessExtensionResult,
} from '@codingame/monaco-vscode-api/extensions'

import { vscode } from '@/services/vscode'
import { setRecentlySelected } from '@/store/features/PlaygroundSlice'
import { store } from '@/store/store'

const manifest: IExtensionManifest = {
  name: `${__APP_NAME}-default`,
  publisher: __APP_PUBLISHER,
  version: __APP_VERSION,
  engines: {
    vscode: '*',
  },
}

let extension: RegisterLocalProcessExtensionResult | undefined = undefined

async function activate() {
  if (extension) return

  extension = registerExtension(manifest, ExtensionHostKind.LocalProcess)

  await extension.setAsDefaultApi()

  const api = await extension.getApi()

  const { commands } = api

  commands.registerCommand(
    `${manifest.name}.action.triggerSuggestComponents`,
    (component: SVGComponent) => {
      store?.dispatch(setRecentlySelected(component))
    }
  )

  commands.registerCommand(
    `${manifest.name}.action.clicLinkDocumentation`,
    ({ location }: { location: SVGLocation }) => {
      vscode.postMessage(SVGReceiveMessage.OpenFile, {
        file: location.file,
        position: location.start,
      })
    }
  )
}

export default activate
