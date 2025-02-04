import { accordionSummaryClasses } from '@mui/material'

import { IconForward } from '@/assets/icons/navigation'
import type { CustomizationsFunction } from '@/interfaces/misc'

/**
 * Customizations for surfaces in the theme.
 */
export const surfacesCustomizations: CustomizationsFunction = () => ({
  MuiAccordion: {
    defaultProps: {
      disableGutters: true,
      elevation: 0,
      square: true,
      slotProps: { heading: { component: 'div' } },
    },
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',
        '&:before': {
          opacity: 0.15,
          backgroundColor: 'var(--JT-SVG-vscode-input-foreground)',
        },
        [`& .${accordionSummaryClasses.content}`]: { maxWidth: '100%', overflow: 'hidden' },
      },
    },
  },
  MuiAccordionSummary: {
    defaultProps: { expandIcon: <IconForward size={22} /> },
    styleOverrides: {
      root: {
        flexDirection: 'row-reverse',
        gap: '4px',
        minHeight: 38,
        '&:hover': { backgroundColor: 'var(--JT-SVG-vscode-list-hoverBackground)' },
      },
      content: { margin: 0 },
      expandIconWrapper: {
        [`&.${accordionSummaryClasses.expanded}`]: { transform: 'rotate(90deg)' },
      },
    },
  },
})
