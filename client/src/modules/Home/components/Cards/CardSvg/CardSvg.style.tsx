import { Box, styled } from '@mui/material'

export const BoxCardSvg = styled(Box, { name: 'Box-CardSvg', slot: 'Root' })(
  ({ theme: { vars } }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '4px',
    cursor: 'pointer',
    '& .Box-CardSvg__card': {
      padding: '10px',
      display: 'grid',
      placeContent: 'center',
      height: '66px',
      position: 'relative',
      color: `var(${vars.palette.text.primary}, currentColor)`,
      border: `1px solid var(--JT-SVG-vscode-sideBarSectionHeader-border)`,
      backgroundColor: `var(--JT-SVG-vscode-sideBarSectionHeader-background)`,
      '& > :first-of-type': {
        width: 'calc(100% - 30px) !important',
        height: 'calc(100% - 34px) !important',
        position: 'absolute !important',
        inset: '0 !important',
        margin: 'auto !important',
      },
    },
  })
)
