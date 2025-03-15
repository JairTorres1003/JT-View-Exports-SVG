import { useCallback, useEffect, useRef, useState } from 'react'

import { useForkRef } from '../useForkRef'

import type {
  EditorHook,
  EditorHookProps,
  TypeEditorRef,
} from '@/core/interfaces/components/vs/Editor'
import { Editor } from '@/core/utils/vs/Editor'
import { useSelector } from '@/providers/redux/store'
import { getUnknownError, isEmpty } from '@/utils/misc'

export const useEditor = ({ forwardedRef, defaultValue }: EditorHookProps): EditorHook => {
  const [isInitialized, setIsInitialized] = useState(false)
  const { editorConfig } = useSelector((state) => state.vsCode)

  const editorRef = useRef<TypeEditorRef>(null)

  const forkedRef = useForkRef(editorRef, forwardedRef)

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

    const editor = new Editor(editorRef.current, editorConfig)

    editorRef.current.editor = await editor.createEditor()
  }, [editorConfig])

  useEffect(() => {
    if (isInitialized && defaultValue) {
      editorRef.current?.editor?.focus()
      editorRef.current?.editor?.trigger('keyboard', 'type', { text: '\n' })
      editorRef.current?.editor?.setDefaultValue(defaultValue)
      editorRef.current?.editor?.setPosition({
        lineNumber: editorRef.current?.editor?.getModel()?.getLineCount() ?? 1,
        column: 1,
      })
    }
  }, [defaultValue, isInitialized])

  useEffect(() => {
    initializeEditor()
      .then(() => {
        setIsInitialized(true)
      })
      .catch((error) => {
        console.error(`Failed to initialize editor: ${getUnknownError(error)}`)
      })

    return () => {
      if (editorRef.current?.editor) {
        editorRef.current.editor.dispose()
      }
    }
  }, [])

  return {
    rootRef: forkedRef,
  }
}
