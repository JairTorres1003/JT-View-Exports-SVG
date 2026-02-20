import { alpha, Slider, sliderClasses, styled } from '@mui/material'
import cn from 'classnames'
import type { ComponentType } from 'react'

import bgTransparent from '@/assets/images/bg-transparent.png'
import type { VerticalPickerSliderProps } from '@/core/types/components/vs/ColorPicker'

import { verticalPickerSliderClasses } from './ColorPicker.classes'

export const VerticalPickerSlider = styled<ComponentType<VerticalPickerSliderProps>>(
  ({ variant = 'hue', alphaColor, className, style, ...props }) => (
    <Slider
      {...props}
      orientation='vertical'
      max={variant === 'hue' ? 0 : 100}
      min={variant === 'hue' ? -360 : 0}
      className={cn(className, {
        [verticalPickerSliderClasses.variantHue]: variant === 'hue',
        [verticalPickerSliderClasses.variantAlpha]: variant === 'alpha',
      })}
      style={{
        '--JT-SVG-VerticalPickerSlider-alpha-rail-bg': alpha(alphaColor ?? '#000', 1),
        ...style,
      }}
    />
  ),
  {
    name: 'VerticalPickerSlider',
  }
)(({ variant = 'hue' }) => ({
  padding: 0,
  width: '25px',
  borderRadius: 0,
  cursor: 'grab',
  height: 'calc(100% - 4px)',
  marginTop: '2px',
  [`& .${sliderClasses.rail}`]: {
    background:
      variant === 'hue'
        ? 'linear-gradient(180deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)'
        : 'transparent',
    opacity: 1,
    height: 'calc(100% + 4px)',
    marginTop: '-2px',
  },
  [`&.${verticalPickerSliderClasses.variantAlpha} .${sliderClasses.rail}`]: {
    backgroundImage: `url('${bgTransparent}')`,
    backgroundSize: '9px 9px',
    imageRendering: 'pixelated',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        'linear-gradient(var(--JT-SVG-VerticalPickerSlider-alpha-rail-bg, #000) 0%, rgba(85, 13, 13, 0) 100%)',
    },
  },
  [`& .${sliderClasses.track}`]: {
    display: 'none',
  },
  [`& span.${sliderClasses.thumb}`]: {
    borderRadius: 0,
    width: 'calc(100% + 4px)',
    height: '4px',
    border: '1px solid hsla(0, 0%, 100%, .71)',
    boxShadow: '0 0 1px rgba(0, 0, 0, .85)',
    boxSizing: 'border-box',
    background: 'transparent',
    '&::before': {
      borderRadius: 0,
      boxShadow: 'none',
    },
    '&::after': {
      transform: 'translate(-50%, -50%)',
      height: 'calc(100% + 2px)',
      width: 'calc(100% + 2px)',
      borderRadius: 0,
    },
  },
}))
