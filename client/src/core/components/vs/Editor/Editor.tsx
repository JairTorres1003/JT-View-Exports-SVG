import { forwardRef, useId } from 'react'

import { BoxEditor } from './Editor.style'

import { useEditor } from '@/core/hooks/vs/useEditor'
import type { EditorProps, TypeEditorRef } from '@/core/interfaces/components/vs/Editor'

export const Editor = forwardRef<TypeEditorRef, EditorProps>(
  ({ className, ...rest }, forwardedRef) => {
    const { rootRef } = useEditor({ forwardedRef, ...rest })
    const id = useId()

    return <BoxEditor className={className} ref={rootRef} id={`jt-editor-${id}`} />
  }
)
