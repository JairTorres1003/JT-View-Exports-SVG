import { useForkRef } from '@mui/material'
import i18next from 'i18next'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type {
  EditorHook,
  EditorHookProps,
  IStandaloneCodeEditor,
  TypeEditorRef,
} from '@/core/types/components/vs/Editor'
import { Editor } from '@/core/utils/vs/editor/createEditor'
import { setInitializedEditor } from '@/store/features/PlaygroundSlice'
import { getUnknownError, isEmpty } from '@/utils/misc'

export const useEditor = ({
  forwardedRef,
  defaultValue,
  onChange = () => null,
}: EditorHookProps): EditorHook => {
  const { editorConfig, extensionTheme } = useSelector((state) => state.vsCode)
  const isInitialized = useSelector((state) => state.playground.isInitialized)

  const [editorInstance, setEditorInstance] = useState<IStandaloneCodeEditor | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const editorRef = useRef<TypeEditorRef>(null)
  const forkedRef = useForkRef(editorRef, forwardedRef)

  const id = useId()
  const editorInitialized = isInitialized[id] || false

  const dispatch = useDispatch()

  /**
   * Provides editor loading state management with progress indication.
   */
  const editorLoader = useCallback(() => {
    const startLoading = (duration: number, endAction?: VoidFunction) => {
      setLoading(true)
      setProgress(0)

      const finishLoading = () => {
        setTimeout(() => {
          setLoading(false)
          endAction?.()
        }, 400)
      }

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            finishLoading()
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

    const editor = new Editor(editorRef.current, {
      userConfiguration: editorConfig,
      extensionTheme,
      onChange,
    })
    const instance = await editor.createEditor()

    editorRef.current.editor = instance

    return instance
  }, [editorRef, editorConfig, extensionTheme])

  /**
   * Updates the editor configuration if the editor reference and configuration are not empty.
   * Uses the `updateUserConfiguration` method of the editor instance to apply the new configuration.

   * @throws Will log an error if the update fails.
   *
   * @remarks
   * This function is memoized using `useCallback` to prevent unnecessary updates.
   * It depends on `editorRef` and `editorConfig` dependencies.
   */
  const updateEditor = useCallback(() => {
    if (isEmpty(editorRef.current) || isEmpty(editorConfig)) return

    editorRef.current?.editor?.api.updateUserConfiguration(editorConfig).catch((error) => {
      console.error(getUnknownError(error))
    })
  }, [editorRef, editorConfig])

  useEffect(() => {
    if (editorInstance && defaultValue) {
      const position = editorInstance.getPosition()

      editorInstance.setDefaultValue(defaultValue)
      editorInstance.focus()
      if (position) editorInstance.setPosition(position)
    }
  }, [defaultValue, editorInstance])

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

  useEffect(() => {
    updateEditor()
  }, [editorConfig])

  useEffect(() => {
    if (!editorInitialized) return

    initializeEditor()
      .then((editor) => {
        setEditorInstance(editor)
      })
      .catch((error) => {
        console.error(`${i18next.t('errors.FailedToInitializeEditor')}: ${getUnknownError(error)}`)
      })
  }, [editorInitialized])

  useEffect(() => {
    if (isEmpty(editorRef.current) || isEmpty(editorConfig)) return

    dispatch(setInitializedEditor(id))
  }, [editorConfig, editorRef])

  return {
    id,
    rootRef: forkedRef,
    loading,
    progress,
  }
}
