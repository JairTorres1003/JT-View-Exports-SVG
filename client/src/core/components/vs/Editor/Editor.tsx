import { initialize } from '@codingame/monaco-vscode-api'
import getConfigurationServiceOverride, {
  updateUserConfiguration,
} from '@codingame/monaco-vscode-configuration-service-override'
import * as monaco from 'monaco-editor'
import { forwardRef, useEffect } from 'react'

import { BoxEditor } from './Editor.style'

export interface EditorProps {
  className?: string
}

export const Editor = forwardRef<HTMLDivElement, EditorProps>(({ className }, ref) => {
  useEffect(() => {
    initialize({
      ...getConfigurationServiceOverride(),
    })
      .then(async () => {
        await updateUserConfiguration(
          JSON.stringify({
            'editor.minimap.enabled': false,
            'editor.folding': false,
            'editor.glyphMargin': false,
            'editor.lineNumbers': 'off',
          })
        )

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- we know it's not null
        monaco.editor.create(document.getElementById('jt-editor')!, {
          value: 'Editor with VSCode config and large bold fonts',
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return <BoxEditor className={className} ref={ref} id='jt-editor' />
})
