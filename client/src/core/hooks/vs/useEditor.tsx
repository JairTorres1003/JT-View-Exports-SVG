import { useForkRef } from '@mui/material'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import type {
  EditorHook,
  EditorHookProps,
  IStandaloneCodeEditor,
  TypeEditorRef,
} from '@/core/types/components/vs/Editor'
import { Editor } from '@/core/utils/vs/editor/createEditor'
import { getUnknownError, isEmpty } from '@/utils/misc'

export const useEditor = ({ forwardedRef, defaultValue }: EditorHookProps): EditorHook => {
  const [editorInstance, setEditorInstance] = useState<IStandaloneCodeEditor | undefined>(undefined)
  const { editorConfig, extensionTheme } = useSelector((state) => state.vsCode)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const editorRef = useRef<TypeEditorRef>(null)

  const forkedRef = useForkRef(editorRef, forwardedRef)

  /**
   * Provides editor loading state management with progress indication.
   */
  const editorLoader = useCallback(() => {
    const startLoading = (duration: number, endAction?: VoidFunction) => {
      setLoading(true)
      setProgress(0)

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setLoading(false)
            endAction?.()
            return 100
          }
          return prev + 1
        })
      }, duration / 100)

      return () => {
        clearInterval(interval)
      }
    }

    const stopLoading = () => {
      setLoading(false)
      setProgress(100)
    }

    return {
      start: startLoading,
      stop: stopLoading,
    }
  }, [])

  /**
   * Initializes the editor instance if the editor reference and configuration are not empty.
   * Uses the `Editor` class to create a new editor instance and assigns it to the current editor reference.

   * @returns A promise that resolves when the editor is initialized.
   * @throws Will throw an error if the editor creation fails.
   *
   * @remarks
   * This function is memoized using `useCallback` to prevent unnecessary re-initializations.
   * It depends on `isInitialized` and `editorConfig` dependencies.
   */
  const initializeEditor = useCallback(async () => {
    if (isEmpty(editorRef.current) || isEmpty(editorConfig)) return

    const editor = new Editor(editorRef.current, editorConfig, extensionTheme)
    const instance = await editor.createEditor()

    editorRef.current.editor = instance

    return instance
  }, [editorConfig])

  useEffect(() => {
    if (editorInstance && defaultValue) {
      editorInstance.focus()
      editorInstance.trigger('keyboard', 'type', { text: '\n' })
      editorInstance.setDefaultValue(defaultValue)
      editorInstance.setPosition({
        lineNumber: editorInstance?.getModel()?.getLineCount() ?? 1,
        column: 1,
      })
    }
  }, [defaultValue, editorInstance])

  useEffect(() => {
    initializeEditor()
      .then((editor) => {
        setEditorInstance(editor)
      })
      .catch((error) => {
        console.error(`Failed to initialize editor: ${getUnknownError(error)}`)
      })
  }, [])

  useEffect(
    () => () => {
      if (editorInstance) {
        editorInstance.dispose()
      }
    },
    [editorInstance]
  )

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.editorLoader = editorLoader
    }
  }, [editorRef])

  return {
    rootRef: forkedRef,
    loading,
    progress,
  }
}
