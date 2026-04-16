import { type IconCollectionKind, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { Button, IconButton, Tooltip, Typography } from '@mui/material'
import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import IconClear from '@/assets/icons/functionalities/clear'
import { DialogModal } from '@/core/components/modals/DialogModal'
import { vscode } from '@/services/vscode'

interface ClearCollectionActionProps {
  collectionKind: IconCollectionKind
}

const ClearCollectionAction: FC<ClearCollectionActionProps> = ({ collectionKind }) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    vscode.postMessage(SVGReceiveMessage.ClearIconCollection, collectionKind)
    setOpen(false)
  }

  return (
    <>
      <Tooltip title={t('labels.ClearCollection')} placement='top'>
        <IconButton aria-label={t('labels.ClearCollection')} onClick={() => setOpen(true)}>
          <IconClear size={16} />
        </IconButton>
      </Tooltip>

      <DialogModal
        open={open}
        onClose={() => setOpen(false)}
        title={t('labels.ClearCollection')}
        slotProps={{
          paper: { sx: { maxWidth: 360 } },
          dialogContent: { sx: { p: '8px 16px 16px' } },
        }}
      >
        <Typography sx={{ py: 1, textAlign: 'center' }}>
          {t('labels.ClearCollectionConfirm')}
        </Typography>
        <Button fullWidth variant='outlined' onClick={() => setOpen(false)} sx={{ mt: 1 }}>
          {t('labels.Cancel')}
        </Button>
        <Button fullWidth variant='contained' color='error' onClick={handleConfirm} sx={{ mt: 1 }}>
          {t('labels.Yes')}
        </Button>
      </DialogModal>
    </>
  )
}

export default ClearCollectionAction
