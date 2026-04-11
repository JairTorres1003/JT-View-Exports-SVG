import {
  IconCollectionKind,
  type SVGComponent,
  type SVGIcon,
  type SVGIconCollection,
  SVGReceiveMessage,
} from '@jt-view-exports-svg/core'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import { useAlert } from '@/core/hooks/useAlert'
import { vscode } from '@/services/vscode'
import { setRecentlySelected } from '@/store/features/playground/slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
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

  const files = useAppSelector((state) => state.svg.files)
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  const dispatch = useAppDispatch()

  const [isFavorite, setIsFavorite] = React.useState(false)

  /**
   * Handles the click event on an SVG icon.
   */
  const handleClick = (icon: SVGIcon): void => {
    copyToClipboard(icon.name)
      .then(() => {
        onOpen(
          <Trans t={t} i18nKey='Copied {{value}} to clipboard' values={{ value: icon.name }} />,
          {
            severity: 'success',
          }
        )
      })
      .catch((error) => {
        onOpen(getUnknownError(error), { severity: 'error' })
      })

    vscode.postMessage(SVGReceiveMessage.AddIconToCollection, {
      ...icon,
      collection: IconCollectionKind.RECENT,
    })
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
    const file = files[component.location.id]

    if (file && !file.isTemporary) {
      setIsFavorite((prev) => !prev)
    }

    const payload: SVGIconCollection = {
      collection: IconCollectionKind.FAVORITE,
      name: component.name,
      location: component.location,
    }

    if (component.isFavorite) {
      vscode.postMessage(SVGReceiveMessage.RemoveIconFromCollection, payload)
    } else {
      vscode.postMessage(SVGReceiveMessage.AddIconToCollection, payload)
    }
  }

  React.useEffect(() => {
    setIsFavorite(favorite)
  }, [favorite])

  return { handleClick, addRecentComponent, toggleFavorite: handleToggleFavorite, isFavorite }
}
