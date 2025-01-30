import { type SVGComponent } from '@api/interfaces/ViewExportsSVG'
import { useCardSvg } from '@home/hooks/components/Cards/useCardSvg'
import { Box, type BoxProps, Card, styled, Tooltip, Typography } from '@mui/material'
import cn from 'classnames'

interface CardSvgProps extends Omit<BoxProps, 'component'> {
  readonly children: React.ReactNode
  readonly component: SVGComponent
}

export const CardSvg = styled<React.ComponentType<CardSvgProps>>(
  ({ children, className, component, onClick = () => {}, ...props }) => {
    const { handleClick, addRecentComponent } = useCardSvg()

    return (
      <Box
        {...props}
        className={cn(className, 'CardSvg')}
        onClick={(...args) => {
          onClick(...args)
          addRecentComponent(component)
          handleClick({ name: component.name, location: component.location })
        }}
      >
        <Card className='CardSvg__card'>{children}</Card>
        <Tooltip placement='top' title={component.name}>
          <Typography variant='caption' noWrap textAlign='center' padding='0 4px'>
            {component.name}
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
    color: 'var(--JT-SVG-vscode-input-background, currentColor)',
    '& > :first-of-type': {
      width: 'calc(100% - 30px) !important',
      height: 'calc(100% - 34px) !important',
      position: 'absolute !important',
      inset: '0 !important',
      margin: 'auto !important',
    },
  },
}))
