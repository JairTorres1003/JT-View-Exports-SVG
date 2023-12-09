import { type FC } from 'react'
import Editor from '@monaco-editor/react'

import { useSvg } from '../../provider/SvgProvider'
import usePlayground from '../../hooks/usePlayground'

export const Playground: FC = () => {
  const {
    state: { selectedSvgLanguage, selectedSvgName },
  } = useSvg()
  const { initializeEditor, OPTIONS, setCompletionDisposable } = usePlayground()

  return (
    <div>
      <Editor
        height='100%'
        language={selectedSvgLanguage}
        value={`<${selectedSvgName} />`}
        beforeMount={(monaco) => {
          const disposable = initializeEditor(monaco)
          setCompletionDisposable(disposable)
        }}
        options={OPTIONS}
      />
    </div>
  )
}
