import { Box, LinearProgress } from '@mui/material'
import { forwardRef } from 'react'

import { useEditor } from '@/core/hooks/vs/useEditor'
import type { EditorProps, TypeEditorRef } from '@/core/types/components/vs/Editor'

import { editorClasses } from './Editor.classes'
import { BoxEditor } from './Editor.style'

const Editor = forwardRef<TypeEditorRef, EditorProps>(({ className, ...rest }, forwardedRef) => {
  const { id, rootRef, loading, progress } = useEditor({ forwardedRef, ...rest })

  return (
    <BoxEditor className={className}>
      <Box ref={rootRef} id={`jt-editor-${id}`} className={editorClasses.editor} />
      {loading && (
        <Box className={editorClasses.loader}>
          <LinearProgress variant='determinate' value={progress} />
        </Box>
      )}
    </BoxEditor>
  )
})

Editor.displayName = 'Editor'
export default Editor
