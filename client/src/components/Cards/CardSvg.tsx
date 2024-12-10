import { type SVGIcon } from '@api/interfaces/ViewExportsSVG'
import { Box, type BoxProps, Card, styled, Tooltip, Typography } from '@mui/material'
import cn from 'classnames'

import { useCardSvg } from '@/hooks/components/Cards/useCardSvg'

interface CardSvgProps extends BoxProps {
  readonly children: React.ReactNode
  readonly icon: SVGIcon
}

export const CardSvg = styled<React.ComponentType<CardSvgProps>>(
  ({ children, className, icon, onClick = () => {}, ...props }) => {
    const { handleClick } = useCardSvg()

    return (
      <Box
        {...props}
        className={cn(className, 'CardSvg')}
        onClick={(...args) => {
          onClick(...args)
          handleClick(icon)
        }}
      >
        <Card className='CardSvg__card'>{children}</Card>
        <Tooltip placement='top' title={icon.name}>
          <Typography variant='caption' noWrap textAlign='center' padding='0 4px'>
            {icon.name}
          </Typography>
        </Tooltip>
      </Box>
    )
  },
  { name: 'CardSvg', slot: 'Root' }
)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '4px',
  cursor: 'pointer',
  '& .CardSvg__card': {
    padding: '10px',
    display: 'grid',
    placeContent: 'center',
    height: '66px',
    position: 'relative',
    color: 'var(--vscode-input-background, currentColor)',
    '& > :first-of-type': {
      width: 'calc(100% - 30px) !important',
      height: 'calc(100% - 34px) !important',
      position: 'absolute !important',
      inset: '0 !important',
      margin: 'auto !important',
    },
  },
}))
