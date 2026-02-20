import {
  Dialog,
  DialogContent,
  type DialogContentProps,
  type DialogProps,
  DialogTitle,
  type DialogTitleProps,
  Divider,
  type DividerProps,
  IconButton,
  type IconButtonProps,
  Tooltip,
} from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import IconClose from '@/assets/icons/functionalities/close'

interface DialogModalProps extends Omit<DialogProps, 'title'> {
  hideDivider?: boolean
  hideCloseButton?: boolean
  hideTitle?: boolean
  title?: React.ReactNode
  slotProps?: DialogProps['slotProps'] & {
    dialogTitle?: Omit<DialogTitleProps, 'children'>
    dialogContent?: Omit<DialogContentProps, 'children'>
    closeButton?: Omit<IconButtonProps, 'children'>
    divider?: DividerProps
  }
}

export const DialogModal: FC<DialogModalProps> = ({
  hideDivider = false,
  hideCloseButton = false,
  hideTitle = false,
  title,
  slotProps: { dialogTitle, dialogContent, divider, closeButton, ...slotProps } = {},
  children,
  onClose = () => null,
  ...dialogProps
}) => {
  const { t } = useTranslation()

  return (
    <Dialog onClose={onClose} {...dialogProps} slotProps={slotProps}>
      {!hideCloseButton && (
        <Tooltip title={t('labels.Close')} placement='top'>
          <IconButton
            aria-label={t('labels.Close')}
            {...closeButton}
            style={{ position: 'absolute', right: 4, top: 4, ...closeButton?.style }}
            onClick={(e) => {
              onClose(e, 'backdropClick')
              closeButton?.onClick?.(e)
            }}
          >
            <IconClose size={16} />
          </IconButton>
        </Tooltip>
      )}

      {!hideTitle && (
        <DialogTitle textAlign='center' {...dialogTitle}>
          {title}
        </DialogTitle>
      )}

      {!hideDivider && (
        <Divider
          {...divider}
          style={{
            borderColor: 'var(--JT-SVG-vscode-panel-border)',
            borderWidth: '1px',
            ...divider?.style,
          }}
        />
      )}

      <DialogContent sx={{ p: '8px 0' }} {...dialogContent}>
        {children}
      </DialogContent>
    </Dialog>
  )
}
