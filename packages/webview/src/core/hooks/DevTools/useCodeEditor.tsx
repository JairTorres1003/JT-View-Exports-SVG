import {
  ExtensionMessage,
  type SVGComponent,
  type SVGErrors,
  WebviewMessage,
} from '@jt-view-exports-svg/core'
import { useEffect, useState } from 'react'

import { useAlert } from '@/core/hooks/useAlert'
import useDebounce from '@/core/hooks/useDebounce'
import type { TypeEditorRef } from '@/core/types/components/vs/Editor'
import completionComponentsManager from '@/core/utils/DevTools/completionComponentsManager'
import completionPropertiesManager from '@/core/utils/DevTools/completionPropertiesManager'
import { vscode } from '@/services/vscode'
import { setRecentlySelected } from '@/store/features/playground/slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

export const useCodeEditor = (editorRef: React.RefObject<TypeEditorRef>) => {
  const { recentlySelected } = useAppSelector((state) => state.playground)
  const { components, files } = useAppSelector((state) => state.svg)
  const [value, setValue] = useState<string>('')

  const debounceValue = useDebounce(value, 600)
  const dispatch = useAppDispatch()
  const { onOpen } = useAlert()

  const defaultValue = recentlySelected?.name ? `<${recentlySelected.name} />\n` : ''

  /**
   * Handles the change of the code editor value.
   *
   * @param newValue - The new value of the code editor.
   */
  const handleChange = (newValue: string) => {
    setValue(newValue)
  }

  /**
   * Handles the edit component action.
   *
   * @param data - The SVG component data.
   */
  const handleEditComponent = (data: SVGComponent) => {
    dispatch(setRecentlySelected(data))
  }

  /**
   * Handles the error component.
   *
   * @param error - The SVG error data.
   */
  const handleErrorComponent = (error: SVGErrors) => {
    onOpen(error.message, {
      severity: 'error',
      position: { vertical: 'top', horizontal: 'right' },
    })
  }

  /**
   * Registers the completion items for the code editor.
   */
  const onRegisterCompletionsComponent = () => {
    if (!editorRef.current) return
    editorRef.current.editor?.api.registerCompletionItemProvider(
      'components',
      completionComponentsManager(components, files)
    )
  }

  /**
   * Registers the properties completion items for the code editor.
   */
  const onRegisterPropertiesComponent = () => {
    if (!editorRef.current || !recentlySelected) return
    editorRef.current.editor?.api.registerCompletionItemProvider(
      'properties',
      completionPropertiesManager(recentlySelected)
    )
  }

  useEffect(() => {
    onRegisterPropertiesComponent()
  }, [recentlySelected?.types])

  useEffect(() => {
    onRegisterCompletionsComponent()
  }, [components, editorRef.current, files])

  useEffect(() => {
    if (defaultValue?.trim() === '') editorRef.current?.editor?.setDefaultValue('')
  }, [defaultValue])

  useEffect(() => {
    if (debounceValue?.trim() === '' || !recentlySelected) {
      return
    }

    vscode.postMessage(WebviewMessage.EditComponentInPlayground, {
      value: debounceValue,
      name: recentlySelected?.name,
      location: recentlySelected?.location,
    })

    vscode.onMessage(ExtensionMessage.ComponentEditedInPlayground, handleEditComponent)
    vscode.onMessage(ExtensionMessage.ErrorEditingComponentInPlayground, handleErrorComponent)

    return () => {
      vscode.unregisterMessage(ExtensionMessage.ComponentEditedInPlayground)
      vscode.unregisterMessage(ExtensionMessage.ErrorEditingComponentInPlayground)
    }
  }, [debounceValue])

  return { defaultValue, handleChange }
}
