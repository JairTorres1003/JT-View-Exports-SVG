import { Stack } from '@mui/material'
import React from 'react'

// import { BackdropZone } from '@/core/components/Backdrop/BackdropZone'
import { FileList } from '@/modules/upload/components/FileList'
import { useUpload } from '@/modules/upload/hooks/useUpload'

const UploadPage: React.FC = () => {
  const { files, removeFile } = useUpload()

  return (
    <Stack height='100%' overflow='hidden'>
      <FileList files={files} onRemoveFile={removeFile} />
      {/* <BackdropZone /> */}
    </Stack>
  )
}

export default UploadPage
