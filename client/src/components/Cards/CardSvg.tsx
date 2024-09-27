import { Box, type BoxProps, Card, styled, Tooltip, Typography } from '@mui/material'
import cn from 'classnames'
import { Trans, useTranslation } from 'react-i18next'

import { useAlert } from '@/hooks/useAlert'
import { copyToClipboard, getUnknownError } from '@/utils/misc'

interface CardSvgProps extends BoxProps {
  readonly children: React.ReactNode
  readonly title: string
}

export const CardSvg = styled<React.ComponentType<CardSvgProps>>(
  ({ children, className, title, onClick = () => {}, ...props }) => {
    const { onOpen } = useAlert()

    const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

    /**
     * Handles the click event on the card.
     */
    const handleClick = (): void => {
      copyToClipboard(title)
        .then(() => {
          onOpen(
            <Trans t={t} i18nKey='copied {{value}} to clipboard' values={{ value: title }} />,
            { severity: 'success' }
          )
        })
        .catch((error) => {
          onOpen(getUnknownError(error), { severity: 'error' })
        })
    }

    return (
      <Box
        {...props}
        className={cn(className, 'CardSvg')}
        onClick={(...args) => {
          onClick(...args)
          handleClick()
        }}
      >
        <Card className='CardSvg__card'>{children}</Card>
        <Tooltip placement='top' title={title}>
          <Typography variant='caption' noWrap textAlign='center' padding='0 4px'>
            {title}
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
    '& > :first-of-type': {
      width: 'calc(100% - 30px) !important',
      height: 'calc(100% - 34px) !important',
      position: 'absolute !important',
      inset: '0 !important',
      margin: 'auto !important',
    },
  },
}))
