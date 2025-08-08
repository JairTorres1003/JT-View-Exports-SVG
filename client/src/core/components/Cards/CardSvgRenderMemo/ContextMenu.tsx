import type { SVGComponent } from '@api/types/ViewExportsSVG'
import { Divider, Menu, MenuItem, type MenuProps } from '@mui/material'
import type { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'

import { useAlert } from '@/core/hooks/useAlert'
import { useSVGActions } from '@/core/hooks/useSVGActions'
import { copyToClipboard, getUnknownError } from '@/utils/misc'

interface ContextMenuProps
  extends Omit<
    MenuProps,
    'children' | 'anchorReference' | 'anchorPosition' | 'open' | 'contextMenu' | 'component'
  > {
  contextMenu: { mouseX: number; mouseY: number } | null
  component: SVGComponent
  svgRef: React.RefObject<SVGElement | null>
}

export const ContextMenu: FC<ContextMenuProps> = ({
  contextMenu,
  onClose = () => null,
  component,
  svgRef,
  ...props
}) => {
  const { onOpen } = useAlert()
  const actions = useSVGActions({ svgRef })
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  /**
   * Handles the closing of the menu component.
   */
  const handleClose: MenuProps['onClose'] = (event, reason) => {
    onClose(event, reason)
    requestAnimationFrame(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
    })
  }

  return (
    <Menu
      {...props}
      onClose={handleClose}
      open={contextMenu !== null}
      anchorReference='anchorPosition'
      anchorPosition={
        contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
      }
    >
      <MenuItem
        onClick={() => {
          copyToClipboard(component.name)
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
        }}
      >
        {t('CopyName')}
      </MenuItem>

      {actions.map((action, index) => {
        if (action.isDivider) return <Divider key={`divider-${index}`} />

        return (
          <MenuItem
            key={action.label}
            onClick={(e) => {
              action.onClick?.(component)
              handleClose(e, 'backdropClick')
            }}
          >
            {action.label}
          </MenuItem>
        )
      })}
    </Menu>
  )
}
