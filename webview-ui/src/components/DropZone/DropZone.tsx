import { Box, Button, Typography } from '@mui/material'
import { Fragment, type FC, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import { useTranslation } from 'react-i18next'

import { DropFilesIcon, MoreFilesIcon } from '../../icons'
import { type DropZoneProps } from '../../interfaces/DropZone'
import { useSvg } from '../../provider/SvgProvider'
import { isEmpty } from '../../utilities/misc'
import { vscode } from '../../utilities/vscode'

import { BoxDropZone, CustomFileUploader } from './DropZone.style'

const fileTypes: string[] = ['JS', 'JSX', 'TS', 'TSX']

export const DropZone: FC<DropZoneProps> = (props) => {
  const { onExtractIcons } = props

  const {
    dispatch,
    state: { lastScanDate },
  } = useSvg()

  const { t } = useTranslation()
  const [file, setFile] = useState<FileList | null>(null)
  const [message, setMessage] = useState<string>(t('SelectedFile.None'))
  const [isDrag, setIsDrag] = useState<boolean>(false)

  /**
   * Handles changes in selected files.
   * @param newFiles An array of selected File objects.
   */
  const handleChange = (newFiles: FileList): void => {
    try {
      // Check if there's only one file selected
      const type = newFiles.length === 1 ? 'Single' : 'Multiple'

      setMessage(t(`SelectedFile.${type}`))
      setFile(newFiles)
    } catch (error) {
      setMessage(t('SelectedFile.None'))
      setFile(null)
    }
  }

  return (
    <BoxDropZone>
      <FileUploader
        classes='file-uploader'
        handleChange={handleChange}
        name='file'
        types={fileTypes}
        multiple
        hoverTitle=' '
        onDraggingStateChange={(newState: boolean) => {
          setIsDrag(newState)
        }}
      >
        <CustomFileUploader>
          <Typography fontSize={16} component='h1'>
            {file !== null && file.length > 0 && file.length} {message}
          </Typography>
          <Box className='icon_description'>
            {isDrag ? (
              <DropFilesIcon size={42} />
            ) : (
              <MoreFilesIcon size={42} color='currentColor' />
            )}
            <Typography fontSize={12} component='h2'>
              {isDrag ? (
                t('DropHere')
              ) : (
                <Fragment>
                  <span>{t('Upload')}</span> {t('OrDropFile')}
                </Fragment>
              )}
            </Typography>
          </Box>
          <Typography fontSize={10} className='fileTypes'>
            {fileTypes.join(',')}
          </Typography>
        </CustomFileUploader>
      </FileUploader>
      <Box display='flex' flexDirection='column' gap='6px'>
        <Button
          variant='outlined'
          size='medium'
          color='success'
          disabled={file === null || file?.length < 1}
          onClick={() => {
            onExtractIcons(file)
          }}
        >
          {t('ExtractIcons')}
        </Button>
        <Button
          variant='outlined'
          size='medium'
          color='warning'
          onClick={() => {
            vscode.postMessage('scanWorkspace')
            dispatch({ type: 'CLEAR_SELECTED' })
            dispatch({ type: 'IS_SCANNING', payload: true })
          }}
        >
          {t('ScanWorkspace')}
        </Button>
      </Box>
      {!isEmpty(lastScanDate) && (
        <Typography>
          {t('LastScanDate')} <strong>{lastScanDate}</strong>
        </Typography>
      )}
    </BoxDropZone>
  )
}
