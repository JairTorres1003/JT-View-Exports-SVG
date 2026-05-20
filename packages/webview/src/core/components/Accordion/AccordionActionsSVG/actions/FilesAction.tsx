import type { FileIdentifier, ViewExportSVG } from '@jt-view-exports-svg/core'
import { type FC, lazy, Suspense, useState } from 'react'

import { OpenFileButton } from '@/core/components/Buttons/OpenFileButton'

const DialogFilesModal = lazy(() => import('@/core/components/modals/DialogFilesModal'))

interface FilesActionProps {
  files: FileIdentifier[]
  groupKind: ViewExportSVG['groupKind']
}

export const FilesAction: FC<FilesActionProps> = ({ files, groupKind }) => {
  const [open, setOpen] = useState(false)

  if (files.length === 0) return null

  return (
    <>
      <OpenFileButton
        fileId={files[0]}
        multiple={files.length > 1}
        onClick={() => {
          if (files.length > 1) setOpen(true)
        }}
      />

      {files.length > 1 && (
        <Suspense>
          <DialogFilesModal
            open={open}
            files={files}
            groupKind={groupKind}
            onClose={() => {
              setOpen(false)
            }}
          />
        </Suspense>
      )}
    </>
  )
}
