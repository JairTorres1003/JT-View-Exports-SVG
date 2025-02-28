import { SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { SVGComponent, SVGIcon } from '@api/interfaces/ViewExportsSVG'
import { Trans, useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { useAlert } from '@/core/hooks/useAlert'
import { setRecentlySelected } from '@/providers/redux/features/PlaygroundSlice'
import { vscode } from '@/services/vscode'
import { copyToClipboard, getUnknownError } from '@/utils/misc'

interface CardSvgHook {
  handleClick: (icon: SVGIcon) => void
  addRecentComponent: (component: SVGComponent) => void
}

export const useCardSvg = (): CardSvgHook => {
  const { onOpen } = useAlert()

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  const dispatch = useDispatch()

  /**
   * Handles the click event on an SVG icon.
   *
   * @param {SVGIcon} param0 - The SVG icon object containing the name and location.
   * @param {string} param0.name - The name of the SVG icon.
   * @param {string} param0.location - The location of the SVG icon.
   */
  const handleClick = ({ name, location }: SVGIcon): void => {
    copyToClipboard(name)
      .then(() => {
        onOpen(<Trans t={t} i18nKey='Copied {{value}} to clipboard' values={{ value: name }} />, {
          severity: 'success',
        })
      })
      .catch((error) => {
        onOpen(getUnknownError(error), { severity: 'error' })
      })

    vscode.postMessage(SVGReceiveMessage.AddRecentIcon, { name, location })
  }

  /**
   * Adds a recently selected SVG component to the state.
   *
   * @param {SVGComponent} component - The SVG component to add to the state
   */
  const addRecentComponent = (component: SVGComponent): void => {
    dispatch(setRecentlySelected(component))
  }

  return { handleClick, addRecentComponent }
}
