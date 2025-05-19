import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { SVGComponent, SVGErrors } from '@api/interfaces/ViewExportsSVG'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { useAlert } from '@/core/hooks/useAlert'
import useDebounce from '@/core/hooks/useDebounce'
import { vscode } from '@/services/vscode'
import { setRecentlySelected } from '@/store/features/PlaygroundSlice'

export const useCodeEditor = () => {
  const { recentlySelected, recentlySelectedName } = useSelector((state) => state.playground)
  const [value, setValue] = useState<string>('')

  const debounceValue = useDebounce(value, 600)

  const { t } = useTranslation(undefined, { keyPrefix: 'errors' })

  const dispatch = useDispatch()
  const { onOpen } = useAlert()

  const defaultValue = useMemo(() => {
    if (!recentlySelectedName) return ''

    return `<${recentlySelectedName} />\n`
  }, [recentlySelectedName])

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

  useEffect(() => {
    if (debounceValue?.trim() === '' || !recentlySelected) {
      onOpen(t('PleaseSelectAComponentToEdit'), {
        severity: 'info',
        position: { vertical: 'top', horizontal: 'right' },
      })
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
