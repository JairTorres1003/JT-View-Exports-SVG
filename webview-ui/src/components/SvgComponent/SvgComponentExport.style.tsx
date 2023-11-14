import {
  AccordionSummaryProps,
  Accordion as AccordionMui,
  AccordionSummary as AccordionSummaryMui,
  Paper as PaperMui,
  PaperProps,
  styled,
  Typography as TypographyMui,
  Box,
} from '@mui/material'
import GridMui from '@mui/material/Unstable_Grid2'

import { ArrowForwardIcon, MotionIcon } from '../../icons'

export const Accordion = styled(AccordionMui)(() => ({
  'margin': '0 !important',
  'backgroundColor': 'inherit',
  '&::before': { display: 'none' },
}))

export const AccordionSummary = styled((props: AccordionSummaryProps | PaperProps) => (
  <AccordionSummaryMui component={PaperMui} expandIcon={<ArrowForwardIcon />} {...props} />
))(({ theme }) => ({
  'color': '#000',
  'maxHeight': 60,
  'borderRadius': 4,
  'backgroundColor': '#fff',
  'minHeight': '60px !important',
  'flexDirection': 'row-reverse',
  'transition': 'background-color 0.2s',
  '& .AccordionSummary-title': { whiteSpace: 'nowrap', width: '100%', fontSize: 13 },
  '&.Mui-expanded': {
    'borderRadius': 0,
    'color': 'inherit',
    'borderBottom': '1px outset',
    'backgroundColor': 'var(--vscode-editor-background, #fff)',
    'position': 'sticky',
    'top': 0,
    'zIndex': 10,
    '&::before, &::after': {
      content: '""',
      width: '100%',
      position: 'absolute',
      background: 'inherit',
      height: 8,
    },
    '&::after': {
      bottom: -8,
      borderTop: '1px solid',
      borderColor: 'inherit',
    },
    '&::before': { top: -4 },
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    fill: 'rgb(var(--color-JT-view-export-svg))',
  },
  '& .MuiAccordionSummary-content, & .MuiAccordionSummary-content.Mui-expanded': {
    'margin': 0,
    'marginLeft': theme.spacing(1),
    'width': '100%',
    '& .MuiTypography-root': { fontSize: '16px' },
  },
}))

export const Grid = styled(GridMui)(() => ({
  display: 'grid',
  gridAutoRows: 'auto',
  gridAutoColumns: 'max-content',
  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
}))

export const GridItem = styled(GridMui)(() => ({
  gap: '5px',
  display: 'flex',
  minWidth: '90px',
  flex: '1 0 100px',
  flexDirection: 'column',
}))

export const Paper = styled(PaperMui)(() => ({
  padding: 10,
  minWidth: 65,
  minHeight: 65,
  maxHeight: 65,
  display: 'flex',
  cursor: 'pointer',
  background: '#fff',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  svg: { color: '#000', maxWidth: '96%', maxHeight: '96%', aspectRatio: '1 / 1' },
  position: 'relative',
  overflow: 'hidden',
}))

export const Typography = styled(TypographyMui)(() => ({
  fontSize: 12,
  color: 'inherit',
  textAlign: 'center',
}))

export const BoxAnimated = styled((props) => (
  <Box {...props}>
    <MotionIcon size={18} color='#fff' />
  </Box>
))(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  background: 'orange',
  color: '#fff',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  borderRadius: '100% 0% 100% 0% / 0% 0% 100% 100%',
  width: 25,
  height: 25,
  padding: '1px',
}))
