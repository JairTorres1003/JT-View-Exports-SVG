import { keyframes } from '@emotion/react'

export const loadingCodePad = keyframes({
  '0%, 100%': {
    clip: 'rect(0px, 210px, 210px, 208px)',
  },
  '25%': {
    clip: 'rect(208px, 210px, 210px, 0px)',
  },
  '50%': {
    clip: 'rect(0px, 2px, 210px, 0px)',
  },
  '75%': {
    clip: 'rect(0px, 210px, 2px, 0px)',
  },
})
