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

export const progress = keyframes({
  '0%': {
    transform: 'translate(0) scaleX(1)',
  },
  '50%': {
    transform: 'translate(2500%) scaleX(3)',
  },
  '100%': {
    transform: 'translate(4900%) scaleX(1)',
  },
})

export const linearProgressBarLoad = keyframes({
  from: {
    backgroundPositionX: 0,
  },
  to: {
    backgroundPositionX: 'var(--fundamentalBase)',
  },
})
