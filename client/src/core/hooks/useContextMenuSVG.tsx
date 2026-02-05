import type { SVGComponent } from '@api/types/ViewExportsSVG'
import { Trans, useTranslation } from 'react-i18next'

import { copyToClipboard } from '@/utils/clipboard'
import { getUnknownError } from '@/utils/errors'

import { useAlert } from './useAlert'
import { useSVGActions, type UseSVGActionsReturn, type UseSVGActionsProps } from './useSVGActions'

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
    { label: t('CopyName'), onClick: onCopyName },
    { label: t('CopyCodeSnippet'), onClick: onCopyFragment },
    { isDivider: true },
    ...actions,
  ]
}
