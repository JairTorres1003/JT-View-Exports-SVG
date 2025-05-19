import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { SVGComponent, SVGErrors } from '@api/interfaces/ViewExportsSVG'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import useDebounce from '@/core/hooks/useDebounce'
import { vscode } from '@/services/vscode'

export const useCodeEditor = () => {
  const recentlySelected = useSelector((state) => state.playground.recentlySelected)
  const [value, setValue] = useState<string>('')

  const debounceValue = useDebounce(value, 600)

  const defaultValue = useMemo(() => {
    if (!recentlySelected) return ''

    return `<${recentlySelected.name} />\n`
  }, [recentlySelected])

  /**
   * Handles the change of the code editor value.
   *
   * @param newValue - The new value of the code editor.
   */
  const handleChange = (newValue: string) => {
    setValue(newValue)
  }

  /**
   * Handles the edit of the SVG component.
   *
   * @param data - The SVG component data.
   */
  const handleEditComponent = (data: SVGComponent) => {
    console.info('handleEditComponent', data)
  }

  /**
   * Handles the error component.
   *
   * @param error - The SVG error data.
   */
  const handleErrorComponent = (error: SVGErrors) => {
    console.error('handleErrorComponent', error)
  }

  useEffect(() => {
    if (debounceValue === '') return

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
