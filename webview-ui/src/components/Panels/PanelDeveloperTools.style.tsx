import { Box, type BoxProps, Paper, Typography, styled } from '@mui/material'

import { type BoxViewerSvgProps } from '../../interfaces/styled.props'
import { type MotionProps, motion } from 'framer-motion'
import { type FC } from 'react'

export const BoxPanelDeveloperTools = styled(Paper)(() => ({
  '--fixed-height-JT-view-export-svg': '56px',
  '--py-JT-view-export-svg': '2rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  borderRadius: 0,
  padding: 'var(--py-JT-view-export-svg) 1.5rem',
  background: 'rgba(0 0 0 / 10%)',
  '& .PaperBox-title': {
    minHeight: 'var(--fixed-height-JT-view-export-svg)',
    height: 'var(--fixed-height-JT-view-export-svg)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    '& > .MuiButtonBase-root': { position: 'absolute', top: 5, left: 0 },
  },
}))

export const TitlePanel = styled(Typography)(() => ({
  marginBottom: '16px',
  width: '100%',
  textAlign: 'center',
  fontWeight: 600,
  userSelect: 'none',
  padding: '0px 25px',
}))

export const BoxDeveloper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  maxHeight:
    'calc(100% - var(--fixed-height-JT-view-export-svg) - var(--py-JT-view-export-svg) / 2)',
}))

export const BoxViewerSvg = styled(({ mode = false, style = {}, ...props }: BoxViewerSvgProps) => (
  <Paper {...props} className={`mode-${mode ? 'dark' : 'light'} ${props.className}`} />
))(({ mode }) => ({
  width: '100%',
  height: 'max-content',
  maxHeight: '100%',
  borderRadius: 10,
  backgroundColor: mode ? '#101418' : '#fff',
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid #${mode ? 'dae0e714' : 'E5EAF2'}`,
  color: `#${mode ? 'fff' : '000'}`,
  svg: { aspectRatio: '1 / 1' },
  '--color-JT-view-export-svg-bgColor': `rgba(${mode ? '20, 26, 31' : '243, 246, 249'}, 0.2)`,
  '--color-JT-view-export-svg-border': `1px solid #${mode ? 'dae0e714' : 'E5EAF2'}`,
  '--color-JT-view-export-svg-color': `#${mode ? 'fff' : '000'}`,
}))

export const ContainerSvg = styled(Box)(() => ({
  maxHeight: '100%',
  overflow: 'hidden',
  aspectRatio: '1 / 1',
  '& .container-svg-card': {
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '14px',
    aspectRatio: '1 / 1',
    '& svg.empty-selection': { filter: 'grayscale(0.8)' },
  },
}))

export const BoxTools = styled(Box)(() => ({
  minHeight: 32,
  height: 'max-content',
  padding: 10,
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '0 0 10px 10px',
  gap: 8,
  backgroundColor: 'var(--color-JT-view-export-svg-bgColor)',
  borderTop: 'var(--color-JT-view-export-svg-border)',
  color: 'var(--color-JT-view-export-svg-color)',
}))

export const BoxCode: FC<BoxProps & MotionProps> = styled(
  (props): JSX.Element => (
    <Box
      component={motion.div}
      variants={{
        open: { height: 130, borderTop: 'inherit', overflow: 'visible' },
        closed: { height: 0, borderTop: 'none', overflow: 'hidden' },
      }}
      initial='closed'
      transition={{ duration: 0.3, delay: 0.1 }}
      {...props}
    />
  )
)(() => ({
  backgroundColor: 'var(--color-JT-view-export-svg-bgColor)',
  borderTop: 'var(--color-JT-view-export-svg-border)',
  color: 'var(--color-JT-view-export-svg-color)',
  height: 'max-content',
  borderRadius: '0 0 10px 10px',
  '& > div': {
    height: '100%',
    '& > section > div > div.monaco-editor, & > section > div > div.monaco-editor > div': {
      borderRadius: '0 0 10px 10px',
    },
  },
}))
