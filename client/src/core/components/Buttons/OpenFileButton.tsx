import type { SVGFile } from '@api/types/ViewExportsSVG'
import { IconButton, type IconButtonProps, Tooltip, type TooltipProps } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { IconGoToFile, IconGoToManyFiles } from '@/assets/icons/functionalities'
import { openFileInPosition } from '@/core/utils/file'

interface OpenFileButtonProps extends Omit<IconButtonProps, 'children'> {
  file: SVGFile
  multiple?: boolean
  slotProps?: {
    tooltip?: TooltipProps
  }
}

export const OpenFileButton: FC<OpenFileButtonProps> = ({
  file,
  multiple = false,
  onClick = () => null,
  slotProps = {},
  ...props
}) => {
  const { t } = useTranslation()

  const title = t(`labels.${multiple ? 'OpenManyFiles' : 'OpenFile'}`)

  return (
    <Tooltip placement='top' title={title} {...slotProps.tooltip}>
      <IconButton
        aria-label={title}
        {...props}
        onClick={(e) => {
          if (!multiple) openFileInPosition(file)
          onClick?.(e)
        }}
      >
        {multiple ? <IconGoToManyFiles size={16} /> : <IconGoToFile size={16} />}
      </IconButton>
    </Tooltip>
  )
}
