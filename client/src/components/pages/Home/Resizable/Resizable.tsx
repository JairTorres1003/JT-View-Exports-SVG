import { useResizable } from '@home/hooks/components/useResizable'
import { IconButton, Portal, Tooltip } from '@mui/material'
import { Resizable as ReactResizable, type ResizableProps } from 're-resizable'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { IconClose } from '@/assets/icons/functionalities'

export const Resizable: FC<Omit<ResizableProps, 'size' | 'onResizeStop'>> = (props) => {
  const { onResizeStop, onResizeStart, onResetSize, resizableWidth, buttonContainer } =
    useResizable()

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  return (
    <>
      <ReactResizable
        minWidth={300}
        maxWidth='100%'
        minHeight='100%'
        maxHeight='100%'
        enable={{ right: true }}
        defaultSize={{ width: '100%', height: '100%' }}
        {...props}
        onResizeStart={onResizeStart}
        onResizeStop={onResizeStop}
        size={{ width: resizableWidth, height: '100%' }}
      />
      <Portal container={buttonContainer}>
        <Tooltip title={t('close')}>
          <IconButton onClick={onResetSize}>
            <IconClose size={16} />
          </IconButton>
        </Tooltip>
      </Portal>
    </>
  )
}
