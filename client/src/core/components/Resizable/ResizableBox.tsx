import { IconButton, Portal, Tooltip } from '@mui/material'
import { Resizable as ReactResizable, type ResizableProps } from 're-resizable'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { IconClose } from '@/assets/icons/functionalities'
import { useResizableBox } from '@/core/hooks/useResizableBox'

interface ResizableBoxProps
  extends Omit<ResizableProps, 'size' | 'onResizeStart' | 'onResizeStop'> {
  containerId: string
  /**
   * Optional prop to hide the close button.
   * If set to true, the close button will not be displayed.
   * @default false
   */
  hideCloseButton?: boolean
}

const ResizableBox: FC<ResizableBoxProps> = ({
  containerId,
  hideCloseButton = false,
  ...props
}) => {
  const { onResizeStop, onResizeStart, onResetSize, resizableWidth } = useResizableBox({
    containerId,
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
        key={containerId}
      />
      {!hideCloseButton && (
        <Portal container={document.getElementById(`${containerId}-buttonClose`)}>
          <Tooltip title={t('Close')}>
            <IconButton onClick={onResetSize}>
              <IconClose size={16} />
            </IconButton>
          </Tooltip>
        </Portal>
      )}
    </>
  )
}

export default ResizableBox
