import { Backdrop, Typography } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDrop } from 'react-use'
import type { DropAreaOptions } from 'react-use/lib/useDrop'

interface BackdropZoneProp extends DropAreaOptions {}

export const BackdropZone: FC<BackdropZoneProp> = (props) => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DropZone' })

  const { over } = useDrop(props)

  return (
    <Backdrop open={over} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Typography
        variant='h1'
        fontSize={24}
        fontWeight='bold'
        textAlign='center'
        color='var(--JT-SVG-palette-text-primary, currentColor))'
      >
        {t('Let it go!')}
      </Typography>
    </Backdrop>
  )
}
