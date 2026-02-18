import type { SVGComponent } from '@api/types/ViewExportsSVG'
import { Trans, useTranslation } from 'react-i18next'

import { copyToClipboard } from '@/utils/clipboard'
import { getUnknownError } from '@/utils/errors'

import { useAlert } from './useAlert'
import { type UseSVGActionsProps, type UseSVGActionsReturn, useSVGActions } from './useSVGActions'

export const useContextMenuSVG = (options: UseSVGActionsProps): UseSVGActionsReturn => {
  const { onOpen } = useAlert()
  const actions = useSVGActions(options)
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  const onCopy = (component: SVGComponent, value: string) => {
    copyToClipboard(value)
      .then(() => {
        onOpen(
          <Trans
            t={t}
            i18nKey='Copied {{value}} to clipboard'
            values={{ value: component.name }}
          />,
          { severity: 'success' }
        )
      })
      .catch((error) => {
        onOpen(getUnknownError(error), { severity: 'error' })
      })
  }

  const onCopyName = (component: SVGComponent) => {
    onCopy(component, component.name)
  }

  const onCopyFragment = (component: SVGComponent) => {
    onCopy(component, `<${component.name} />`)
  }

  return [
    { id: 'copy-name', label: t('CopyName'), onClick: onCopyName },
    { id: 'copy-snippet', label: t('CopyCodeSnippet'), onClick: onCopyFragment },
    { id: 'divider-copy-actions', isDivider: true },
    ...actions,
  ]
}
