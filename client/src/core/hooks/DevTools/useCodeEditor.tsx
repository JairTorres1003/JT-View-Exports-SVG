import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { SVGComponent, SVGErrors } from '@api/types/ViewExportsSVG'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useAlert } from '@/core/hooks/useAlert'
import useDebounce from '@/core/hooks/useDebounce'
import type { TypeEditorRef } from '@/core/types/components/vs/Editor'
import completionComponentsManager from '@/core/utils/DevTools/completionComponentsManager'
import completionPropertiesManager from '@/core/utils/DevTools/completionPropertiesManager'
import { vscode } from '@/services/vscode'
import { setRecentlySelected } from '@/store/features/PlaygroundSlice'

export const useCodeEditor = (editorRef: React.RefObject<TypeEditorRef>) => {
  const { recentlySelected } = useSelector((state) => state.playground)
  const { components } = useSelector((state) => state.svg)
  const [value, setValue] = useState<string>('')

  const debounceValue = useDebounce(value, 600)
  const dispatch = useDispatch()
  const { onOpen } = useAlert()

  const defaultValue = useMemo(() => {
    if (!recentlySelected?.name) return ''

    return `<${recentlySelected?.name} />\n`
  }, [recentlySelected?.name])

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
      completionComponentsManager(components)
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
  }, [components, editorRef.current?.editor])

  useEffect(() => {
    if (defaultValue?.trim() === '') editorRef.current?.editor?.setDefaultValue('')
  }, [defaultValue])

  useEffect(() => {
    if (debounceValue?.trim() === '' || !recentlySelected) {
      return
    }

    vscode.postMessage(SVGReceiveMessage.PlaygroundSVGComponents, {
      value: debounceValue,
      name: recentlySelected?.name,
      location: recentlySelected?.location,
    })

    vscode.onMessage(SVGPostMessage.SendSVGPlayground, handleEditComponent)
    vscode.onMessage(SVGPostMessage.SendPlaygroundError, handleErrorComponent)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendSVGPlayground)
      vscode.unregisterMessage(SVGPostMessage.SendPlaygroundError)
    }
  }, [debounceValue])

  return { defaultValue, handleChange }
}
