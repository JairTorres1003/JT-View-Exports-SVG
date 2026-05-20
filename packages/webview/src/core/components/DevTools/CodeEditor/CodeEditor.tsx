import { type FC, lazy, Suspense } from 'react'

import { useCodeEditor } from '@/core/hooks/DevTools/useCodeEditor'
import type { TypeEditorRef } from '@/core/types/components/vs/Editor'

interface CodeEditorProps {
  editorRef: React.RefObject<TypeEditorRef>
}

const Editor = lazy(async () => await import('@/core/components/vs/Editor/Editor'))

const CodeEditor: FC<CodeEditorProps> = ({ editorRef }) => {
  const { defaultValue, handleChange } = useCodeEditor(editorRef)

  return (
    <Suspense fallback={null}>
      <Editor defaultValue={defaultValue} ref={editorRef} onChange={handleChange} />
    </Suspense>
  )
}

export default CodeEditor
