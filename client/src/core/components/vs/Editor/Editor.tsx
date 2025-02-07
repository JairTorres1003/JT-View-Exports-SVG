import { forwardRef } from 'react'
import './workerLoaders'

import { BoxEditor } from './Editor.style'

import { type TypeEditorRef, useEditor } from '@/core/hooks/vs/useEditor'

export interface EditorProps {
  className?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export const Editor = forwardRef<TypeEditorRef, EditorProps>(({ className }, forwardedRef) => {
  const { rootRef } = useEditor({ forwardedRef })

  return <BoxEditor className={className} ref={rootRef} id='jt-editor' />
})
