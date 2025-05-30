import type { FC } from 'react'

import { Editor } from '@/core/components/vs/Editor'
import type { TypeEditorRef } from '@/core/types/components/vs/Editor'
import { useCodeEditor } from '@/modules/home/hooks/useCodeEditor'

interface CodeEditorProps {
  editorRef: React.RefObject<TypeEditorRef>
}

const CodeEditor: FC<CodeEditorProps> = ({ editorRef }) => {
  const { defaultValue, handleChange } = useCodeEditor(editorRef)

  return <Editor defaultValue={defaultValue} ref={editorRef} onChange={handleChange} />
}

export default CodeEditor
