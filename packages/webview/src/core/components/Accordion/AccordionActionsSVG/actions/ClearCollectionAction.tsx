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
      <Tooltip title={t('clear-collection')} placement='top'>
        <IconButton aria-label={t('clear-collection')} onClick={() => setOpen(true)}>
          <IconClear size={16} />
        </IconButton>
      </Tooltip>

      <DialogModal
        open={open}
        onClose={() => setOpen(false)}
        title={t('clear-collection')}
        slotProps={{
          paper: { sx: { maxWidth: 360 } },
          dialogContent: { sx: { p: '8px 16px 16px' } },
        }}
      >
        <Typography sx={{ py: 1, textAlign: 'center' }}>{t('clear-collection-confirm')}</Typography>
        <Button fullWidth variant='outlined' onClick={() => setOpen(false)} sx={{ mt: 1 }}>
          {t('cancel')}
        </Button>
        <Button fullWidth variant='contained' color='error' onClick={handleConfirm} sx={{ mt: 1 }}>
          {t('yes')}
        </Button>
      </DialogModal>
    </>
  )
}

export default ClearCollectionAction
