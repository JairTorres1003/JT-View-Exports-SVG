import { Box, type BoxProps, Card, styled, Tooltip, Typography } from '@mui/material'
import cn from 'classnames'

export const CardSvg = styled(
  ({ children, className, title, ...props }: BoxProps & { children: React.ReactNode }) => (
    <Box {...props} className={cn(className, 'CardSvg')}>
      <Card className='CardSvg__card'>{children}</Card>
      <Tooltip placement='top' title={title}>
        <Typography variant='caption' noWrap textAlign='center' padding='0 4px'>
          {title}
        </Typography>
      </Tooltip>
    </Box>
  )
)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '4px',
  '& .CardSvg__card': {
    padding: '10px',
    display: 'grid',
    placeContent: 'center',
    height: '66px',
    position: 'relative',
    '& > :first-of-type': {
      width: 'calc(100% - 30px)',
      height: 'calc(100% - 34px)',
      position: 'absolute',
      inset: 0,
      margin: 'auto',
    },
  },
}))
