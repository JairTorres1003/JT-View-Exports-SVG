import { Box, styled } from '@mui/material'

import { cardSvgClasses } from './CardSvg.classes'

export const BoxCardSvg = styled(Box, {
  name: cardSvgClasses.root,
  target: cardSvgClasses.root,
})(({ theme: { vars, shape } }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '4px',
  cursor: 'pointer',
  [`& .${cardSvgClasses.card}`]: {
    position: 'relative',
    borderRadius: `${shape.borderRadius}px`,
    border: `1px solid var(--JT-SVG-vscode-sideBarSectionHeader-border)`,
    backgroundColor: `var(--JT-SVG-vscode-sideBarSectionHeader-background)`,
    height: '66px',
    [`&:hover .${cardSvgClasses.favorite}`]: {
      opacity: 1,
    },
  },
  [`& .${cardSvgClasses.container}`]: {
    padding: '10px',
    display: 'grid',
    placeContent: 'center',
    height: '100%',
    position: 'relative',
    color: vars.palette.text.primary,
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'rgb(255 255 255 / 2%)',
      inset: 0,
      zIndex: 0,
    },
    '& > :first-of-type': {
      width: 'calc(100% - 30px) !important',
      height: 'calc(100% - 34px) !important',
      position: 'absolute !important',
      inset: '0 !important',
      margin: 'auto !important',
      zIndex: 1,
    },
  },
  [`& .${cardSvgClasses.favorite}`]: {
    position: 'absolute',
    top: 0,
    right: 0,
    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
    backgroundColor: 'var(--JT-SVG-vscode-extensionIcon-starForeground)',
    zIndex: 1,
    height: '25px',
    aspectRatio: '1 / 1',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: '2px',
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out',
    [`&.${cardSvgClasses.favoriteActive}`]: {
      opacity: 1,
    },
  },
  [`& .${cardSvgClasses.favoriteActive}`]: {},
}))
