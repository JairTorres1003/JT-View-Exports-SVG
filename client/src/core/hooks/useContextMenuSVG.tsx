import type { SVGComponent } from '@api/types/ViewExportsSVG'
import { Trans, useTranslation } from 'react-i18next'

import { useAlert } from './useAlert'
import { useSVGActions, type UseSVGActionsReturn, type UseSVGActionsProps } from './useSVGActions'

import { copyToClipboard, getUnknownError } from '@/utils/misc'

export const useContextMenuSVG = (options: UseSVGActionsProps): UseSVGActionsReturn => {
  const { onOpen } = useAlert()
  const actions = useSVGActions(options)
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  const onAlert = (component: SVGComponent) => {
    onOpen(
      <Trans t={t} i18nKey='Copied {{value}} to clipboard' values={{ value: component.name }} />,
      { severity: 'success' }
    )
  }

  /**
   * Handles the copy action for an SVG component's name.
   * Copies the component's name to the clipboard and triggers an alert on success.
   * If an error occurs during the copy operation, displays an error alert.
   *
   * @param component - The SVG component whose name will be copied to the clipboard.
   */
  const onCopyName = (component: SVGComponent) => {
    copyToClipboard(component.name)
      .then(() => {
        onAlert(component)
      })
      .catch((error) => {
        onOpen(getUnknownError(error), { severity: 'error' })
      })
  }

  return [{ label: t('CopyName'), onClick: onCopyName }, { isDivider: true }, ...actions]
}
