import { type SVGComponent, type SVGIcon, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { useAlert } from '@/core/hooks/useAlert'
import { vscode } from '@/services/vscode'
import { setRecentlySelected } from '@/store/features/PlaygroundSlice'
import { copyToClipboard } from '@/utils/clipboard'
import { getUnknownError } from '@/utils/errors'

interface CardSvgHook {
  handleClick: (icon: SVGIcon) => void
  addRecentComponent: (component: SVGComponent) => void
  toggleFavorite: (component: SVGComponent) => void
  isFavorite: boolean
}

interface UseCardSvgProps {
  favorite?: boolean
}

export const useCardSvg = ({ favorite = false }: UseCardSvgProps = {}): CardSvgHook => {
  const { onOpen } = useAlert()

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  const dispatch = useDispatch()

  const [isFavorite, setIsFavorite] = React.useState(false)

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

  /**
   * Toggles the favorite status of an SVG component.
   *
   * @param {SVGComponent} component - The SVG component to toggle favorite status for.
   */
  const handleToggleFavorite = (component: SVGComponent): void => {
    if (!component.location.file.isTemporary) {
      setIsFavorite(!isFavorite)
    }

    const payload = {
      name: component.name,
      location: component.location,
    }

    if (component.isFavorite) {
      vscode.postMessage(SVGReceiveMessage.RemoveFavoriteIcon, payload)
    } else {
      vscode.postMessage(SVGReceiveMessage.AddFavoriteIcon, payload)
    }
  }

  React.useEffect(() => {
    setIsFavorite(favorite)
  }, [favorite])

  return { handleClick, addRecentComponent, toggleFavorite: handleToggleFavorite, isFavorite }
}
