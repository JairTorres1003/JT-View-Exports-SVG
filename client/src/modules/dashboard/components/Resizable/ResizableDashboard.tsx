import { IconButton, Portal, Tooltip } from '@mui/material'
import { Resizable as ReactResizable, type ResizableProps } from 're-resizable'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useResizableDashboard } from '../../hooks/useResizableDashboard'

import { IconClose } from '@/assets/icons/functionalities'

interface ResizableDashboardProps
  extends Omit<ResizableProps, 'size' | 'onResizeStart' | 'onResizeStop'> {
  devTootsId: string
}

const ResizableDashboard: FC<ResizableDashboardProps> = ({ devTootsId, ...props }) => {
  const { onResizeStop, onResizeStart, onResetSize, resizableWidth } = useResizableDashboard({
    devTootsId,
  })

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
      <Portal container={document.getElementById(`${devTootsId}-buttonClose`)}>
        <Tooltip title={t('Close')}>
          <IconButton onClick={onResetSize}>
            <IconClose size={16} />
          </IconButton>
        </Tooltip>
      </Portal>
    </>
  )
}

export default ResizableDashboard
