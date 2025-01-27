import { SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import { type SVGIcon } from '@api/interfaces/ViewExportsSVG'
import { Trans, useTranslation } from 'react-i18next'

import { useAlert } from '@/hooks/useAlert'
import { vscode } from '@/services/vscode'
import { copyToClipboard, getUnknownError } from '@/utils/misc'

interface CardSvgHook {
  handleClick: (icon: SVGIcon) => void
}

export const useCardSvg = (): CardSvgHook => {
  const { onOpen } = useAlert()

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  const handleClick = ({ name, location }: SVGIcon): void => {
    copyToClipboard(name)
      .then(() => {
        onOpen(<Trans t={t} i18nKey='copied {{value}} to clipboard' values={{ value: name }} />, {
          severity: 'success',
        })
      })
      .catch((error) => {
        onOpen(getUnknownError(error), { severity: 'error' })
      })

    vscode.postMessage(SVGReceiveMessage.AddRecentIcon, { name, location })
  }

  return { handleClick }
}
