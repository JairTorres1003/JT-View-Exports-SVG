import type { ViewExportSVG } from '@api/types/ViewExportsSVG'
import { IconButton, Tooltip } from '@mui/material'
import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import IconInfo from '@/assets/icons/indicators/info'
import { DialogInfoModal } from '@/core/components/modals/DialogInfoModal'

interface InfoActionProps {
  data: ViewExportSVG
  isGrouped?: boolean
}

export const InfoAction: FC<InfoActionProps> = ({ data, isGrouped }) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <Tooltip title={t('labels.Info')} placement='top'>
        <IconButton
          aria-label={t('labels.Info')}
          onClick={() => {
            setOpen(true)
          }}
        >
          <IconInfo size={16} />
        </IconButton>
      </Tooltip>

      <DialogInfoModal
        open={open}
        data={data}
        isGrouped={isGrouped}
        onClose={() => {
          setOpen(false)
        }}
      />
    </>
  )
}
