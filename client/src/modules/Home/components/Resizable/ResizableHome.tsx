import { IconButton, Portal, Tooltip } from '@mui/material'
import { Resizable as ReactResizable, type ResizableProps } from 're-resizable'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useResizableHome } from '../../hooks/useResizableHome'

import { IconClose } from '@/assets/icons/functionalities'

interface ResizableHomeProps
  extends Omit<ResizableProps, 'size' | 'onResizeStart' | 'onResizeStop'> {
  devTootsId: string
}

const ResizableHome: FC<ResizableHomeProps> = ({ devTootsId, ...props }) => {
  const { onResizeStop, onResizeStart, onResetSize, resizableWidth } = useResizableHome({
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

export default ResizableHome
