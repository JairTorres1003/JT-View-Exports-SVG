import React from 'react'

import { type IconComponentProps } from '../types'

export const Collapse: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M9 13L8.29289 12.2929L9 11.5858L9.70711 12.2929L9 13ZM10 22C10 22.5523 9.55229 23 9 23C8.44772 23 8 22.5523 8 22L10 22ZM3.29289 17.2929L8.29289 12.2929L9.70711 13.7071L4.70711 18.7071L3.29289 17.2929ZM9.70711 12.2929L14.7071 17.2929L13.2929 18.7071L8.29289 13.7071L9.70711 12.2929ZM10 13L10 22L8 22L8 13L10 13Z'
      fill={color}
    />
    <path
      d='M15 11L14.2929 11.7071L15 12.4142L15.7071 11.7071L15 11ZM16 2C16 1.44772 15.5523 1 15 1C14.4477 1 14 1.44771 14 2L16 2ZM9.29289 6.70711L14.2929 11.7071L15.7071 10.2929L10.7071 5.29289L9.29289 6.70711ZM15.7071 11.7071L20.7071 6.70711L19.2929 5.29289L14.2929 10.2929L15.7071 11.7071ZM16 11L16 2L14 2L14 11L16 11Z'
      fill={color}
    />
  </svg>
)

export const CollapseLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M9 13L8.64645 12.6464L9 12.2929L9.35355 12.6464L9 13ZM9.5 22C9.5 22.2761 9.27614 22.5 9 22.5C8.72386 22.5 8.5 22.2761 8.5 22L9.5 22ZM3.64645 17.6464L8.64645 12.6464L9.35355 13.3536L4.35355 18.3536L3.64645 17.6464ZM9.35355 12.6464L14.3536 17.6464L13.6464 18.3536L8.64645 13.3536L9.35355 12.6464ZM9.5 13L9.5 22L8.5 22L8.5 13L9.5 13Z'
      fill={color}
    />
    <path
      d='M15 11L14.6464 11.3536L15 11.7071L15.3536 11.3536L15 11ZM15.5 2C15.5 1.72386 15.2761 1.5 15 1.5C14.7239 1.5 14.5 1.72386 14.5 2L15.5 2ZM9.64645 6.35355L14.6464 11.3536L15.3536 10.6464L10.3536 5.64645L9.64645 6.35355ZM15.3536 11.3536L20.3536 6.35355L19.6464 5.64645L14.6464 10.6464L15.3536 11.3536ZM15.5 11L15.5 2L14.5 2L14.5 11L15.5 11Z'
      fill={color}
    />
  </svg>
)

export const Fluid: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 3L11.2929 2.29289L12 1.58579L12.7071 2.29289L12 3ZM13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14L13 14ZM6.29289 7.29289L11.2929 2.29289L12.7071 3.70711L7.70711 8.70711L6.29289 7.29289ZM12.7071 2.29289L17.7071 7.29289L16.2929 8.70711L11.2929 3.70711L12.7071 2.29289ZM13 3L13 14L11 14L11 3L13 3Z'
      fill={color}
    />
    <path
      d='M12 21L11.2929 21.7071L12 22.4142L12.7071 21.7071L12 21ZM13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14L13 14ZM6.29289 16.7071L11.2929 21.7071L12.7071 20.2929L7.70711 15.2929L6.29289 16.7071ZM12.7071 21.7071L17.7071 16.7071L16.2929 15.2929L11.2929 20.2929L12.7071 21.7071ZM13 21L13 14L11 14L11 21L13 21Z'
      fill={color}
    />
  </svg>
)

export const FluidLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 3L11.6464 2.64645L12 2.29289L12.3536 2.64645L12 3ZM12.5 14C12.5 14.2761 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.2761 11.5 14L12.5 14ZM6.64645 7.64645L11.6464 2.64645L12.3536 3.35355L7.35355 8.35355L6.64645 7.64645ZM12.3536 2.64645L17.3536 7.64645L16.6464 8.35355L11.6464 3.35355L12.3536 2.64645ZM12.5 3L12.5 14L11.5 14L11.5 3L12.5 3Z'
      fill={color}
    />
    <path
      d='M12 21L11.6464 21.3536L12 21.7071L12.3536 21.3536L12 21ZM12.5 14C12.5 13.7239 12.2761 13.5 12 13.5C11.7239 13.5 11.5 13.7239 11.5 14L12.5 14ZM6.64645 16.3536L11.6464 21.3536L12.3536 20.6464L7.35355 15.6464L6.64645 16.3536ZM12.3536 21.3536L17.3536 16.3536L16.6464 15.6464L11.6464 20.6464L12.3536 21.3536ZM12.5 21L12.5 14L11.5 14L11.5 21L12.5 21Z'
      fill={color}
    />
  </svg>
)

export const HorizontalDownLeftMain: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M22 8L22.7071 7.29289L23.4142 8L22.7071 8.70711L22 8ZM12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7V9ZM18.7071 3.29289L22.7071 7.29289L21.2929 8.70711L17.2929 4.70711L18.7071 3.29289ZM22.7071 8.70711L18.7071 12.7071L17.2929 11.2929L21.2929 7.29289L22.7071 8.70711ZM22 9H12V7H22V9Z'
      fill={color}
    />
    <path
      d='M2 16L1.29289 15.2929L0.585786 16L1.29289 16.7071L2 16ZM21 17C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15L21 17ZM5.29289 11.2929L1.29289 15.2929L2.70711 16.7071L6.70711 12.7071L5.29289 11.2929ZM1.29289 16.7071L5.29289 20.7071L6.70711 19.2929L2.70711 15.2929L1.29289 16.7071ZM2 17L21 17L21 15L2 15L2 17Z'
      fill={color}
    />
  </svg>
)

export const HorizontalDownLeftMainLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M22 8L22.3536 7.64645L22.7071 8L22.3536 8.35355L22 8ZM12 8.5C11.7239 8.5 11.5 8.27614 11.5 8C11.5 7.72386 11.7239 7.5 12 7.5V8.5ZM18.3536 3.64645L22.3536 7.64645L21.6464 8.35355L17.6464 4.35355L18.3536 3.64645ZM22.3536 8.35355L18.3536 12.3536L17.6464 11.6464L21.6464 7.64645L22.3536 8.35355ZM22 8.5H12V7.5H22V8.5Z'
      fill={color}
    />
    <path
      d='M2 16L1.64645 15.6464L1.29289 16L1.64645 16.3536L2 16ZM21 16.5C21.2761 16.5 21.5 16.2761 21.5 16C21.5 15.7239 21.2761 15.5 21 15.5L21 16.5ZM5.64645 11.6464L1.64645 15.6464L2.35355 16.3536L6.35355 12.3536L5.64645 11.6464ZM1.64645 16.3536L5.64645 20.3536L6.35355 19.6464L2.35355 15.6464L1.64645 16.3536ZM2 16.5L21 16.5L21 15.5L2 15.5L2 16.5Z'
      fill={color}
    />
  </svg>
)

export const HorizontalDownRightMain: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2 8L1.29289 7.29289L0.585786 8L1.29289 8.70711L2 8ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7V9ZM5.29289 3.29289L1.29289 7.29289L2.70711 8.70711L6.70711 4.70711L5.29289 3.29289ZM1.29289 8.70711L5.29289 12.7071L6.70711 11.2929L2.70711 7.29289L1.29289 8.70711ZM2 9H12V7H2V9Z'
      fill={color}
    />
    <path
      d='M22 16L22.7071 15.2929L23.4142 16L22.7071 16.7071L22 16ZM3 17C2.44772 17 2 16.5523 2 16C2 15.4477 2.44772 15 3 15L3 17ZM18.7071 11.2929L22.7071 15.2929L21.2929 16.7071L17.2929 12.7071L18.7071 11.2929ZM22.7071 16.7071L18.7071 20.7071L17.2929 19.2929L21.2929 15.2929L22.7071 16.7071ZM22 17L3 17L3 15L22 15L22 17Z'
      fill={color}
    />
  </svg>
)

export const HorizontalDownRightMainLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2 8L1.64645 7.64645L1.29289 8L1.64645 8.35355L2 8ZM12 8.5C12.2761 8.5 12.5 8.27614 12.5 8C12.5 7.72386 12.2761 7.5 12 7.5V8.5ZM5.64645 3.64645L1.64645 7.64645L2.35355 8.35355L6.35355 4.35355L5.64645 3.64645ZM1.64645 8.35355L5.64645 12.3536L6.35355 11.6464L2.35355 7.64645L1.64645 8.35355ZM2 8.5H12V7.5H2V8.5Z'
      fill={color}
    />
    <path
      d='M22 16L22.3536 15.6464L22.7071 16L22.3536 16.3536L22 16ZM3 16.5C2.72386 16.5 2.5 16.2761 2.5 16C2.5 15.7239 2.72386 15.5 3 15.5L3 16.5ZM18.3536 11.6464L22.3536 15.6464L21.6464 16.3536L17.6464 12.3536L18.3536 11.6464ZM22.3536 16.3536L18.3536 20.3536L17.6464 19.6464L21.6464 15.6464L22.3536 16.3536ZM22 16.5L3 16.5L3 15.5L22 15.5L22 16.5Z'
      fill={color}
    />
  </svg>
)

export const HorizontalSwitch: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 8L3.29289 7.29289L2.58579 8L3.29289 8.70711L4 8ZM19 10C19 10.5523 19.4477 11 20 11C20.5523 11 21 10.5523 21 10H19ZM7.29289 3.29289L3.29289 7.29289L4.70711 8.70711L8.70711 4.70711L7.29289 3.29289ZM3.29289 8.70711L7.29289 12.7071L8.70711 11.2929L4.70711 7.29289L3.29289 8.70711ZM4 9H18V7H4V9ZM18 9C18.5523 9 19 9.44772 19 10H21C21 8.34315 19.6569 7 18 7V9Z'
      fill={color}
    />
    <path
      d='M20 16L20.7071 15.2929L21.4142 16L20.7071 16.7071L20 16ZM5 16L5 17L5 17L5 16ZM2 14C2 13.4477 2.44772 13 3 13C3.55228 13 4 13.4477 4 14L2 14ZM16.7071 11.2929L20.7071 15.2929L19.2929 16.7071L15.2929 12.7071L16.7071 11.2929ZM20.7071 16.7071L16.7071 20.7071L15.2929 19.2929L19.2929 15.2929L20.7071 16.7071ZM20 17L5 17L5 15L20 15L20 17ZM5 17C3.34315 17 2 15.6569 2 14L4 14C4 14.5523 4.44772 15 5 15L5 17Z'
      fill={color}
    />
  </svg>
)

export const HorizontalSwitchLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 8L3.64645 7.64645L3.29289 8L3.64645 8.35355L4 8ZM19.5 10C19.5 10.2761 19.7239 10.5 20 10.5C20.2761 10.5 20.5 10.2761 20.5 10H19.5ZM7.64645 3.64645L3.64645 7.64645L4.35355 8.35355L8.35355 4.35355L7.64645 3.64645ZM3.64645 8.35355L7.64645 12.3536L8.35355 11.6464L4.35355 7.64645L3.64645 8.35355ZM4 8.5H18V7.5H4V8.5ZM18 8.5C18.8284 8.5 19.5 9.17157 19.5 10H20.5C20.5 8.61929 19.3807 7.5 18 7.5V8.5Z'
      fill={color}
    />
    <path
      d='M20 16L20.3536 15.6464L20.7071 16L20.3536 16.3536L20 16ZM5 16L5 16.5L5 16.5L5 16ZM2.5 14C2.5 13.7239 2.72386 13.5 3 13.5C3.27614 13.5 3.5 13.7239 3.5 14L2.5 14ZM16.3536 11.6464L20.3536 15.6464L19.6464 16.3536L15.6464 12.3536L16.3536 11.6464ZM20.3536 16.3536L16.3536 20.3536L15.6464 19.6464L19.6464 15.6464L20.3536 16.3536ZM20 16.5L5 16.5L5 15.5L20 15.5L20 16.5ZM5 16.5C3.61929 16.5 2.5 15.3807 2.5 14L3.5 14C3.5 14.8284 4.17157 15.5 5 15.5L5 16.5Z'
      fill={color}
    />
  </svg>
)

export const HorizontalTopLeftMain: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2 8L1.29289 7.29289L0.585786 8L1.29289 8.70711L2 8ZM21 9C21.5523 9 22 8.55228 22 8C22 7.44772 21.5523 7 21 7V9ZM5.29289 3.29289L1.29289 7.29289L2.70711 8.70711L6.70711 4.70711L5.29289 3.29289ZM1.29289 8.70711L5.29289 12.7071L6.70711 11.2929L2.70711 7.29289L1.29289 8.70711ZM2 9H21V7H2V9Z'
      fill={color}
    />
    <path
      d='M22 16L22.7071 15.2929L23.4142 16L22.7071 16.7071L22 16ZM13 17C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15L13 17ZM18.7071 11.2929L22.7071 15.2929L21.2929 16.7071L17.2929 12.7071L18.7071 11.2929ZM22.7071 16.7071L18.7071 20.7071L17.2929 19.2929L21.2929 15.2929L22.7071 16.7071ZM22 17L13 17L13 15L22 15L22 17Z'
      fill={color}
    />
  </svg>
)

export const HorizontalTopLeftMainLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2 8L1.64645 7.64645L1.29289 8L1.64645 8.35355L2 8ZM21 8.5C21.2761 8.5 21.5 8.27614 21.5 8C21.5 7.72386 21.2761 7.5 21 7.5V8.5ZM5.64645 3.64645L1.64645 7.64645L2.35355 8.35355L6.35355 4.35355L5.64645 3.64645ZM1.64645 8.35355L5.64645 12.3536L6.35355 11.6464L2.35355 7.64645L1.64645 8.35355ZM2 8.5H21V7.5H2V8.5Z'
      fill={color}
    />
    <path
      d='M22 16L22.3536 15.6464L22.7071 16L22.3536 16.3536L22 16ZM13 16.5C12.7239 16.5 12.5 16.2761 12.5 16C12.5 15.7239 12.7239 15.5 13 15.5L13 16.5ZM18.3536 11.6464L22.3536 15.6464L21.6464 16.3536L17.6464 12.3536L18.3536 11.6464ZM22.3536 16.3536L18.3536 20.3536L17.6464 19.6464L21.6464 15.6464L22.3536 16.3536ZM22 16.5L13 16.5L13 15.5L22 15.5L22 16.5Z'
      fill={color}
    />
  </svg>
)

export const HorizontalTopRightMain: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M22 8L22.7071 7.29289L23.4142 8L22.7071 8.70711L22 8ZM3 9C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7V9ZM18.7071 3.29289L22.7071 7.29289L21.2929 8.70711L17.2929 4.70711L18.7071 3.29289ZM22.7071 8.70711L18.7071 12.7071L17.2929 11.2929L21.2929 7.29289L22.7071 8.70711ZM22 9H3V7H22V9Z'
      fill={color}
    />
    <path
      d='M2 16L1.29289 15.2929L0.585786 16L1.29289 16.7071L2 16ZM11 17C11.5523 17 12 16.5523 12 16C12 15.4477 11.5523 15 11 15L11 17ZM5.29289 11.2929L1.29289 15.2929L2.70711 16.7071L6.70711 12.7071L5.29289 11.2929ZM1.29289 16.7071L5.29289 20.7071L6.70711 19.2929L2.70711 15.2929L1.29289 16.7071ZM2 17L11 17L11 15L2 15L2 17Z'
      fill={color}
    />
  </svg>
)

export const HorizontalTopRightMainLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M22 8L22.3536 7.64645L22.7071 8L22.3536 8.35355L22 8ZM3 8.5C2.72386 8.5 2.5 8.27614 2.5 8C2.5 7.72386 2.72386 7.5 3 7.5V8.5ZM18.3536 3.64645L22.3536 7.64645L21.6464 8.35355L17.6464 4.35355L18.3536 3.64645ZM22.3536 8.35355L18.3536 12.3536L17.6464 11.6464L21.6464 7.64645L22.3536 8.35355ZM22 8.5H3V7.5H22V8.5Z'
      fill={color}
    />
    <path
      d='M2 16L1.64645 15.6464L1.29289 16L1.64645 16.3536L2 16ZM11 16.5C11.2761 16.5 11.5 16.2761 11.5 16C11.5 15.7239 11.2761 15.5 11 15.5L11 16.5ZM5.64645 11.6464L1.64645 15.6464L2.35355 16.3536L6.35355 12.3536L5.64645 11.6464ZM1.64645 16.3536L5.64645 20.3536L6.35355 19.6464L2.35355 15.6464L1.64645 16.3536ZM2 16.5L11 16.5L11 15.5L2 15.5L2 16.5Z'
      fill={color}
    />
  </svg>
)

export const Move: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M17 15L12 20L7 15' stroke={color} strokeWidth='2' />
    <path d='M17 9L12 4L7 9' stroke={color} strokeWidth='2' />
  </svg>
)

export const MoveLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M17 15L12 20L7 15' stroke={color} />
    <path d='M17 9L12 4L7 9' stroke={color} />
  </svg>
)

export const ResizeDownRight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M10 20L20 20L20 10' stroke={color} strokeWidth='2' />
    <path d='M12 17L17 17L17 12' stroke={color} strokeWidth='2' />
  </svg>
)

export const ResizeDownRightLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M10 20L20 20L20 10' stroke={color} />
    <path d='M12 17L17 17L17 12' stroke={color} />
  </svg>
)

export const SortList: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5 7H12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M5 12H12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M5 17H12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M19 20L22 17M19 20L16 17M19 20L19 4M19 4L16 7M19 4L22 7'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const SortListAlt: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5 8L5 16' stroke={color} strokeWidth='2' strokeLinejoin='round' />
    <path
      d='M5.20801 2.31202L8.17083 6.75624C8.52526 7.28788 8.14414 8 7.50519 8L2.49481 8C1.85586 8 1.47474 7.28788 1.82917 6.75624L4.79199 2.31202C4.89094 2.16359 5.10906 2.16359 5.20801 2.31202Z'
      fill={color}
    />
    <path
      d='M5.20801 21.688L8.17083 17.2438C8.52526 16.7121 8.14414 16 7.50519 16L2.49481 16C1.85586 16 1.47474 16.7121 1.82917 17.2438L4.79199 21.688C4.89094 21.8364 5.10906 21.8364 5.20801 21.688Z'
      fill={color}
    />
    <path d='M11 7H19' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M11 12H19' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M11 17H19' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const SortListAltLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5 8L5 16' stroke={color} strokeLinejoin='round' />
    <path
      d='M5.22361 4.44721L6.71056 7.42111C6.84354 7.68707 6.65014 8 6.35279 8L3.64721 8C3.34986 8 3.15646 7.68707 3.28944 7.42111L4.77639 4.44721C4.86852 4.26295 5.13148 4.26295 5.22361 4.44721Z'
      fill={color}
    />
    <path
      d='M5.22361 19.5528L6.71056 16.5789C6.84354 16.3129 6.65014 16 6.35279 16L3.64721 16C3.34986 16 3.15646 16.3129 3.28944 16.5789L4.77639 19.5528C4.86852 19.737 5.13148 19.737 5.22361 19.5528Z'
      fill={color}
    />
    <path d='M11 8H19' stroke={color} strokeLinecap='round' />
    <path d='M11 12H19' stroke={color} strokeLinecap='round' />
    <path d='M11 16H19' stroke={color} strokeLinecap='round' />
  </svg>
)

export const SortListLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5 8H12' stroke={color} strokeLinecap='round' />
    <path d='M5 12H12' stroke={color} strokeLinecap='round' />
    <path d='M5 16H12' stroke={color} strokeLinecap='round' />
    <path d='M19 20L22 17M19 20L16 17M19 20L19 4M19 4L16 7M19 4L22 7' stroke={color} />
  </svg>
)

export const SortAlfa: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M6 20H18' stroke={color} strokeWidth='2' />
    <path d='M9 12H15' stroke={color} strokeWidth='2' />
    <path
      d='M7 17L10.1165 8.27376C10.9024 6.0734 11.2953 4.97321 12 4.97321C12.7047 4.97321 13.0976 6.07339 13.8835 8.27375L17 17'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const SortAlfaLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M6 20H18' stroke={color} />
    <path d='M9 12H15' stroke={color} />
    <path
      d='M7 17L10.1165 8.27376C10.9024 6.0734 11.2953 4.97321 12 4.97321C12.7047 4.97321 13.0976 6.07339 13.8835 8.27375L17 17'
      stroke={color}
    />
  </svg>
)

export const SortArrow: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 2L7.29289 1.29289L8 0.585786L8.70711 1.29289L8 2ZM9 17C9 17.5523 8.55229 18 8 18C7.44772 18 7 17.5523 7 17L9 17ZM2.29289 6.29289L7.29289 1.29289L8.70711 2.70711L3.70711 7.70711L2.29289 6.29289ZM8.70711 1.29289L13.7071 6.29289L12.2929 7.70711L7.29289 2.70711L8.70711 1.29289ZM9 2L9 17L7 17L7 2L9 2Z'
      fill={color}
    />
    <path
      d='M16 22L15.2929 22.7071L16 23.4142L16.7071 22.7071L16 22ZM17 7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44771 15 7L17 7ZM10.2929 17.7071L15.2929 22.7071L16.7071 21.2929L11.7071 16.2929L10.2929 17.7071ZM16.7071 22.7071L21.7071 17.7071L20.2929 16.2929L15.2929 21.2929L16.7071 22.7071ZM17 22L17 7L15 7L15 22L17 22Z'
      fill={color}
    />
  </svg>
)

export const SortArrowLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 2L7.64645 1.64645L8 1.29289L8.35355 1.64645L8 2ZM8.5 17C8.5 17.2761 8.27614 17.5 8 17.5C7.72386 17.5 7.5 17.2761 7.5 17L8.5 17ZM3.64645 5.64645L7.64645 1.64645L8.35355 2.35355L4.35355 6.35355L3.64645 5.64645ZM8.35355 1.64645L12.3536 5.64645L11.6464 6.35355L7.64645 2.35355L8.35355 1.64645ZM8.5 2L8.5 17L7.5 17L7.5 2L8.5 2Z'
      fill={color}
    />
    <path
      d='M16 22L15.6464 22.3536L16 22.7071L16.3536 22.3536L16 22ZM16.5 7C16.5 6.72386 16.2761 6.5 16 6.5C15.7239 6.5 15.5 6.72386 15.5 7L16.5 7ZM11.6464 18.3536L15.6464 22.3536L16.3536 21.6464L12.3536 17.6464L11.6464 18.3536ZM16.3536 22.3536L20.3536 18.3536L19.6464 17.6464L15.6464 21.6464L16.3536 22.3536ZM16.5 22L16.5 7L15.5 7L15.5 22L16.5 22Z'
      fill={color}
    />
  </svg>
)

export const SortDown: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5 7H13' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M5 12H11' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M5 17H9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M19 18L22 15M19 18L16 15M19 18L19 6' stroke={color} strokeWidth='2' />
  </svg>
)

export const SortDownLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5 8H13' stroke={color} strokeLinecap='round' />
    <path d='M5 12H11' stroke={color} strokeLinecap='round' />
    <path d='M5 16H9' stroke={color} strokeLinecap='round' />
    <path d='M19 18L22 15M19 18L16 15M19 18L19 6' stroke={color} />
  </svg>
)

export const SortRandom: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 7H4.77985C6.93172 7 8.00766 7 8.87921 7.45631C9.25172 7.65134 9.59114 7.90388 9.88499 8.20464C10.5725 8.90832 10.8817 9.93888 11.5 12V12C12.1183 14.0611 12.4275 15.0917 13.115 15.7954C13.4089 16.0961 13.7483 16.3487 14.1208 16.5437C14.9923 17 16.0683 17 18.2202 17H21M21 17L18 14M21 17L18 20'
      stroke={color}
      strokeWidth='2'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.7071 6.29291L18.7071 3.29291L17.2929 4.70712L18.5858 6.00001H18.2202L18.1753 6.00001H18.1753C17.1374 6 16.2935 5.99999 15.6025 6.06092C14.8846 6.12422 14.2534 6.25813 13.657 6.5704C13.2113 6.80371 12.8036 7.10285 12.4474 7.45765C12.6883 7.85132 12.8778 8.25883 13.0406 8.66738C13.1539 8.95142 13.2635 9.26085 13.3726 9.59121C13.5242 9.27601 13.6695 9.0681 13.8303 8.90349C14.0507 8.67793 14.3052 8.48852 14.5846 8.34225C14.8597 8.19821 15.2022 8.10397 15.7782 8.05319C16.3711 8.00091 17.1267 8.00001 18.2202 8.00001H18.5858L17.2929 9.29291L18.7071 10.7071L21.7071 7.70712L22.4142 7.00001L21.7071 6.29291ZM10.5526 16.5424C10.3117 16.1487 10.1222 15.7412 9.95935 15.3326C9.8461 15.0486 9.73651 14.7392 9.62739 14.4088C9.4758 14.724 9.33053 14.9319 9.16971 15.0965C8.94933 15.3221 8.69476 15.5115 8.41538 15.6578C8.14027 15.8018 7.79776 15.8961 7.22182 15.9468C6.62893 15.9991 5.87329 16 4.77985 16H3V18H4.77985H4.8247H4.82472C5.86257 18 6.70648 18 7.39748 17.9391C8.11537 17.8758 8.7466 17.7419 9.34305 17.4296C9.78866 17.1963 10.1964 16.8972 10.5526 16.5424Z'
      fill={color}
    />
  </svg>
)

export const SortRandomLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 7H4.77985C6.93172 7 8.00766 7 8.87921 7.45631C9.25172 7.65134 9.59114 7.90388 9.88499 8.20464C10.5725 8.90832 10.8817 9.93888 11.5 12V12C12.1183 14.0611 12.4275 15.0917 13.115 15.7954C13.4089 16.0961 13.7483 16.3487 14.1208 16.5437C14.9923 17 16.0683 17 18.2202 17H21M21 17L18 14M21 17L18 20'
      stroke={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.3536 6.64642L18.3536 3.64642L17.6464 4.35353L19.7929 6.49998H18.2202H18.1963C17.1406 6.49997 16.3153 6.49997 15.6464 6.55895C14.964 6.61912 14.405 6.74311 13.8889 7.01333C13.4698 7.23274 13.0879 7.51685 12.7574 7.85519C12.7386 7.87438 12.7202 7.89374 12.7019 7.91329C12.8289 8.16222 12.9399 8.41458 13.0406 8.66734C13.0782 8.76164 13.1154 8.85873 13.1523 8.95845C13.2519 8.80428 13.3571 8.67233 13.4727 8.55403C13.7298 8.29087 14.0268 8.0699 14.3527 7.89925C14.7081 7.71315 15.1228 7.60899 15.7343 7.55508C16.3542 7.50043 17.1355 7.49998 18.2202 7.49998H19.7929L17.6464 9.64642L18.3536 10.3535L21.3536 7.35353L21.7071 6.99998L21.3536 6.64642ZM10.2981 16.0867C10.1711 15.8377 10.0601 15.5854 9.95935 15.3326C9.92175 15.2383 9.88456 15.1412 9.84766 15.0415C9.74807 15.1957 9.64293 15.3276 9.52735 15.4459C9.27024 15.7091 8.97324 15.9301 8.6473 16.1007C8.29185 16.2868 7.87716 16.391 7.26574 16.4449C6.64583 16.4995 5.86454 16.5 4.77985 16.5H3V17.5H4.77985H4.80369C5.85944 17.5 6.68467 17.5 7.35357 17.441C8.03597 17.3808 8.59502 17.2568 9.11113 16.9866C9.5302 16.7672 9.91205 16.4831 10.2426 16.1448C10.2614 16.1256 10.2798 16.1062 10.2981 16.0867Z'
      fill={color}
    />
  </svg>
)

export const SortUp: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5 17H13' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M5 12H11' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M5 7H9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M19 6L22 9M19 6L16 9M19 6L19 18' stroke={color} strokeWidth='2' />
  </svg>
)

export const SortUpAltOne: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M4.5 7.5H14.5' stroke={color} strokeLinecap='round' />
    <path d='M4.5 11.5H11.5' stroke={color} strokeLinecap='round' />
    <path d='M4.5 15.5H9.5' stroke={color} strokeLinecap='round' />
    <path
      d='M17.5 9.5L19.5 11.5M17.5 9.5L15.5 11.5M17.5 9.5L17.5 15.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const SortUpAlt: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M4 7H14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M4 12H11' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M4 17H10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M17 11L20 14M17 11L14 14M17 11L17 17'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const SortUpLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5 16H13' stroke={color} strokeLinecap='round' />
    <path d='M5 12H11' stroke={color} strokeLinecap='round' />
    <path d='M5 8H9' stroke={color} strokeLinecap='round' />
    <path d='M19 6L22 9M19 6L16 9M19 6L19 18' stroke={color} />
  </svg>
)

export const Transger: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M13 17H9V19.5885C9 19.7554 8.80766 19.8489 8.67644 19.7458L2 14.5L8.67644 9.25423C8.80766 9.15112 9 9.24461 9 9.41149V12H15'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M11 7H15V4.41149C15 4.24461 15.1923 4.15112 15.3236 4.25423L22 9.5L15.3236 14.7458C15.1923 14.8489 15 14.7554 15 14.5885V12H9'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const TransgerLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M13 17H9V19.5885C9 19.7554 8.80766 19.8489 8.67644 19.7458L2 14.5L8.67644 9.25423C8.80766 9.15112 9 9.24461 9 9.41149V12H15'
      stroke={color}
    />
    <path
      d='M11 7H15V4.41149C15 4.24461 15.1923 4.15112 15.3236 4.25423L22 9.5L15.3236 14.7458C15.1923 14.8489 15 14.7554 15 14.5885V12H9'
      stroke={color}
    />
  </svg>
)

export const VerticalSwitch: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 20L7.29289 20.7071L8 21.4142L8.70711 20.7071L8 20ZM10 5C10.5523 5 11 4.55228 11 4C11 3.44772 10.5523 3 10 3L10 5ZM3.29289 16.7071L7.29289 20.7071L8.70711 19.2929L4.70711 15.2929L3.29289 16.7071ZM8.70711 20.7071L12.7071 16.7071L11.2929 15.2929L7.29289 19.2929L8.70711 20.7071ZM9 20L9 6L7 6L7 20L9 20ZM9 6C9 5.44772 9.44771 5 10 5L10 3C8.34315 3 7 4.34315 7 6L9 6Z'
      fill={color}
    />
    <path
      d='M16 4L15.2929 3.29289L16 2.58579L16.7071 3.29289L16 4ZM16 19L17 19L17 19L16 19ZM14 22C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20L14 22ZM11.2929 7.29289L15.2929 3.29289L16.7071 4.70711L12.7071 8.70711L11.2929 7.29289ZM16.7071 3.29289L20.7071 7.29289L19.2929 8.70711L15.2929 4.70711L16.7071 3.29289ZM17 4L17 19L15 19L15 4L17 4ZM17 19C17 20.6569 15.6569 22 14 22L14 20C14.5523 20 15 19.5523 15 19L17 19Z'
      fill={color}
    />
  </svg>
)

export const VerticalSwitchAlt: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 20L7.29289 20.7071L8 21.4142L8.70711 20.7071L8 20ZM8 12L7 12L8 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44771 10.5523 9 10 9L10 11ZM3.29289 16.7071L7.29289 20.7071L8.70711 19.2929L4.70711 15.2929L3.29289 16.7071ZM8.70711 20.7071L12.7071 16.7071L11.2929 15.2929L7.29289 19.2929L8.70711 20.7071ZM9 20L9 12L7 12L7 20L9 20ZM9 12C9 11.4477 9.44771 11 10 11L10 9C8.34315 9 7 10.3431 7 12L9 12Z'
      fill={color}
    />
    <path
      d='M16 4L15.2929 3.29289L16 2.58579L16.7071 3.29289L16 4ZM16 12L17 12L16 12ZM14 15C13.4477 15 13 14.5523 13 14C13 13.4477 13.4477 13 14 13L14 15ZM11.2929 7.29289L15.2929 3.29289L16.7071 4.70711L12.7071 8.70711L11.2929 7.29289ZM16.7071 3.29289L20.7071 7.29289L19.2929 8.70711L15.2929 4.70711L16.7071 3.29289ZM17 4L17 12L15 12L15 4L17 4ZM17 12C17 13.6569 15.6569 15 14 15L14 13C14.5523 13 15 12.5523 15 12L17 12Z'
      fill={color}
    />
  </svg>
)

export const VerticalSwitchAltLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 20L7.64645 20.3536L8 20.7071L8.35355 20.3536L8 20ZM8 12L7.5 12L8 12ZM10 10.5C10.2761 10.5 10.5 10.2761 10.5 10C10.5 9.72386 10.2761 9.5 10 9.5L10 10.5ZM3.64645 16.3536L7.64645 20.3536L8.35355 19.6464L4.35355 15.6464L3.64645 16.3536ZM8.35355 20.3536L12.3536 16.3536L11.6464 15.6464L7.64645 19.6464L8.35355 20.3536ZM8.5 20L8.5 12L7.5 12L7.5 20L8.5 20ZM8.5 12C8.5 11.1716 9.17157 10.5 10 10.5L10 9.5C8.61929 9.5 7.5 10.6193 7.5 12L8.5 12Z'
      fill={color}
    />
    <path
      d='M16 4L15.6464 3.64645L16 3.29289L16.3536 3.64645L16 4ZM16 12L16.5 12L16 12ZM14 14.5C13.7239 14.5 13.5 14.2761 13.5 14C13.5 13.7239 13.7239 13.5 14 13.5L14 14.5ZM11.6464 7.64645L15.6464 3.64645L16.3536 4.35355L12.3536 8.35355L11.6464 7.64645ZM16.3536 3.64645L20.3536 7.64645L19.6464 8.35355L15.6464 4.35355L16.3536 3.64645ZM16.5 4L16.5 12L15.5 12L15.5 4L16.5 4ZM16.5 12C16.5 13.3807 15.3807 14.5 14 14.5L14 13.5C14.8284 13.5 15.5 12.8284 15.5 12L16.5 12Z'
      fill={color}
    />
  </svg>
)

export const VerticalSwitchLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 20L7.64645 20.3536L8 20.7071L8.35355 20.3536L8 20ZM10 6.5C10.2761 6.5 10.5 6.27614 10.5 6C10.5 5.72386 10.2761 5.5 10 5.5L10 6.5ZM4.64645 17.3536L7.64645 20.3536L8.35355 19.6464L5.35355 16.6464L4.64645 17.3536ZM8.35355 20.3536L11.3536 17.3536L10.6464 16.6464L7.64645 19.6464L8.35355 20.3536ZM8.5 20L8.5 8L7.5 8L7.5 20L8.5 20ZM8.5 8C8.5 7.17157 9.17157 6.5 10 6.5L10 5.5C8.61929 5.5 7.5 6.61929 7.5 8L8.5 8Z'
      fill={color}
    />
    <path
      d='M16 4L15.6464 3.64645L16 3.29289L16.3536 3.64645L16 4ZM16 17L16.5 17L16 17ZM14 19.5C13.7239 19.5 13.5 19.2761 13.5 19C13.5 18.7239 13.7239 18.5 14 18.5L14 19.5ZM12.6464 6.64645L15.6464 3.64645L16.3536 4.35355L13.3536 7.35355L12.6464 6.64645ZM16.3536 3.64645L19.3536 6.64645L18.6464 7.35355L15.6464 4.35355L16.3536 3.64645ZM16.5 4L16.5 17L15.5 17L15.5 4L16.5 4ZM16.5 17C16.5 18.3807 15.3807 19.5 14 19.5L14 18.5C14.8284 18.5 15.5 17.8284 15.5 17L16.5 17Z'
      fill={color}
    />
  </svg>
)

export const VerticalSwitchLong: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 20L7.29289 20.7071L8 21.4142L8.70711 20.7071L8 20ZM14 5C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3L14 5ZM3.29289 16.7071L7.29289 20.7071L8.70711 19.2929L4.70711 15.2929L3.29289 16.7071ZM8.70711 20.7071L12.7071 16.7071L11.2929 15.2929L7.29289 19.2929L8.70711 20.7071ZM9 20L9 8L7 8L7 20L9 20ZM12 5L14 5L14 3L12 3L12 5ZM9 8C9 6.34315 10.3431 5 12 5L12 3C9.23858 3 7 5.23858 7 8L9 8Z'
      fill={color}
    />
    <path
      d='M16 10L15.2929 9.29289L16 8.58579L16.7071 9.29289L16 10ZM16 18L17 18L16 18ZM14 21C13.4477 21 13 20.5523 13 20C13 19.4477 13.4477 19 14 19L14 21ZM11.2929 13.2929L15.2929 9.29289L16.7071 10.7071L12.7071 14.7071L11.2929 13.2929ZM16.7071 9.29289L20.7071 13.2929L19.2929 14.7071L15.2929 10.7071L16.7071 9.29289ZM17 10L17 18L15 18L15 10L17 10ZM17 18C17 19.6569 15.6569 21 14 21L14 19C14.5523 19 15 18.5523 15 18L17 18Z'
      fill={color}
    />
  </svg>
)

export const VerticalSwitchLongLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 20L7.64645 20.3536L8 20.7071L8.35355 20.3536L8 20ZM14 4.5C14.2761 4.5 14.5 4.27614 14.5 4C14.5 3.72386 14.2761 3.5 14 3.5L14 4.5ZM3.64645 16.3536L7.64645 20.3536L8.35355 19.6464L4.35355 15.6464L3.64645 16.3536ZM8.35355 20.3536L12.3536 16.3536L11.6464 15.6464L7.64645 19.6464L8.35355 20.3536ZM8.5 20L8.5 8L7.5 8L7.5 20L8.5 20ZM12 4.5L14 4.5L14 3.5L12 3.5L12 4.5ZM8.5 8C8.5 6.067 10.067 4.5 12 4.5L12 3.5C9.51472 3.5 7.5 5.51472 7.5 8L8.5 8Z'
      fill={color}
    />
    <path
      d='M16 8L15.6464 7.64645L16 7.29289L16.3536 7.64645L16 8ZM16 16L16.5 16L16 16ZM13 19.5C12.7239 19.5 12.5 19.2761 12.5 19C12.5 18.7239 12.7239 18.5 13 18.5L13 19.5ZM11.6464 11.6464L15.6464 7.64645L16.3536 8.35355L12.3536 12.3536L11.6464 11.6464ZM16.3536 7.64645L20.3536 11.6464L19.6464 12.3536L15.6464 8.35355L16.3536 7.64645ZM16.5 8L16.5 16L15.5 16L15.5 8L16.5 8ZM16.5 16C16.5 17.933 14.933 19.5 13 19.5L13 18.5C14.3807 18.5 15.5 17.3807 15.5 16L16.5 16Z'
      fill={color}
    />
  </svg>
)
