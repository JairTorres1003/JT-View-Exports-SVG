import { Editor } from '@/core/components/vs/Editor'
import { useEditorPlayground } from '@/modules/Home/hooks/useEditorPlayground'

export const EditorPlayground = () => {
  const { defaultValue } = useEditorPlayground()

  return <Editor defaultValue={defaultValue} />
}
