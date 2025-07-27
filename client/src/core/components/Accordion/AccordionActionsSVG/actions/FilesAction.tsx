import type { SVGFile, ViewExportSVG } from '@api/types/ViewExportsSVG'
import { useState, type FC } from 'react'

import { OpenFileButton } from '@/core/components/Buttons/OpenFileButton'
import { DialogFilesModal } from '@/core/components/modals/DialogFilesModal/DialogFilesModal'

interface FilesActionProps {
  files: SVGFile[]
  groupKind: ViewExportSVG['groupKind']
}

export const FilesAction: FC<FilesActionProps> = ({ files, groupKind }) => {
  const [open, setOpen] = useState(false)

  if (files.length === 0) return null

  return (
    <>
      <OpenFileButton
        file={files[0]}
        multiple={files.length > 1}
        onClick={() => {
          if (files.length > 1) setOpen(true)
        }}
      />

      <DialogFilesModal
        open={open}
        files={files}
        groupKind={groupKind}
        onClose={() => {
          setOpen(false)
        }}
      />
    </>
  )
}
