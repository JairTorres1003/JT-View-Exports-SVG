import {
  IconCollectionKind,
  type SVGComponent,
  type SVGIcon,
  type SVGIconCollection,
  SVGReceiveMessage,
} from '@jt-view-exports-svg/core'
import React, { useCallback } from 'react'
import { Trans, useTranslation } from 'react-i18next'

import { useAlert } from '@/core/hooks/useAlert'
import { vscode } from '@/services/vscode'
import { setRecentlySelected } from '@/store/features/playground/slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { copyToClipboard } from '@/utils/clipboard'
import { getUnknownError } from '@/utils/errors'

interface CardSvgHook {
  addRecentComponent: (component: SVGComponent) => void
  toggleFavorite: (component: SVGComponent) => (event: React.MouseEvent<HTMLButtonElement>) => void
  isFavorite: boolean
}

interface UseCardSvgProps {
  favorite?: boolean
}

export const useCardSvg = ({ favorite = false }: UseCardSvgProps): CardSvgHook => {
  const { onOpen } = useAlert()

  const files = useAppSelector((state) => state.svg.files)
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  const dispatch = useAppDispatch()

  const [isFavorite, setIsFavorite] = React.useState(favorite)

  /**
   * Copies the name of the SVG icon to the clipboard and shows a success or error message.
   */
  const onCopy = (icon: SVGIcon): void => {
    copyToClipboard(icon.name)
      .then(() => {
        onOpen(
          <Trans t={t} i18nKey='Copied {{value}} to clipboard' values={{ value: icon.name }} />,
          { severity: 'success' }
        )
      })
      .catch((error) => {
        onOpen(getUnknownError(error), { severity: 'error' })
      })
  }

  /**
   * Adds a recently selected SVG component to the state.
   *
   * @param component - The SVG component to add to the state
   */
  const addRecentComponent = (component: SVGComponent): void => {
    dispatch(setRecentlySelected(component))

    vscode.postMessage(SVGReceiveMessage.AddIconToCollection, {
      name: component.name,
      location: component.location,
      collection: IconCollectionKind.RECENT,
    })

    onCopy({ name: component.name, location: component.location })
  }

  /**
   * Toggles the favorite status of an SVG component.
   *
   * @param component - The SVG component to toggle favorite status for.
   */
  const handleToggleFavorite = useCallback(
    (component: SVGComponent) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()

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
    },
    [files]
  )

  return { addRecentComponent, toggleFavorite: handleToggleFavorite, isFavorite }
}
