import { Box, styled } from '@mui/material'

export const BoxDropZone = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 15,
  padding: '2rem 1.5rem',
  '& .file-uploader': {
    width: '100%',
    minWidth: 200,
    maxWidth: 500,
    height: 230,
    cursor: 'pointer',
    borderRadius: 5,
    border: '2px dashed var(--color-JT-view-export-svg)',
    color: 'var(--color-JT-view-export-svg)',
    position: 'relative',
    "& input[type='file']": {
      width: '100%',
      height: '100%',
    },
  },
}))

export const CustomFileUploader = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '8px 16px 8px 8px',
  flexGrow: '0',
  width: '100%',
  height: '100%',
  gap: 6,
  justifyContent: 'space-between',
  '& .MuiTypography-root': {
    opacity: 0.7,
  },
}))
