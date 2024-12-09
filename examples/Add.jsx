import React from 'react'

export const Add = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 6L12 18'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
    <path
      d='M18 12L6 12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
  </svg>
)

export const AddFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM11 18V17V13H7H6V11H7H11V7V6H13V7V11H17H18V13H17H13V17V18H11Z'
      fill={color}
    />
  </svg>
)

export const AddDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9' fill={color} fillOpacity='0.25' />
    <path
      d='M12 8L12 16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
    <path
      d='M16 12L8 12'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
  </svg>
)

export const AddDuotoneLine = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='8.4' stroke={color} strokeOpacity='0.25' strokeWidth='1.2' />
    <path d='M12 8L12 16' stroke={color} strokeWidth='1.2' strokeLinecap='square' />
    <path d='M16 12L8 12' stroke={color} strokeWidth='1.2' strokeLinecap='square' />
  </svg>
)

export const AddLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 6L12 18' stroke={color} strokeLinecap='square' strokeLinejoin='round' />
    <path d='M18 12L6 12' stroke={color} strokeLinecap='square' strokeLinejoin='round' />
  </svg>
)

export const AddRing = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9' stroke={color} strokeWidth='2' />
    <path d='M12 15L12 9' stroke={color} strokeWidth='2' strokeLinecap='square' />
    <path d='M15 12L9 12' stroke={color} strokeWidth='2' strokeLinecap='square' />
  </svg>
)

export const AddRingDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9' fill={color} fillOpacity='0.25' />
    <path d='M12 15L12 9' stroke={color} strokeWidth='1.2' strokeLinecap='square' />
    <path d='M15 12L9 12' stroke={color} strokeWidth='1.2' strokeLinecap='square' />
  </svg>
)

export const AddRingDuotoneLine = ({
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
    <circle cx='12' cy='12' r='8.4' stroke={color} strokeOpacity='0.25' strokeWidth='1.2' />
    <path d='M12 15L12 9' stroke={color} strokeWidth='1.2' strokeLinecap='square' />
    <path d='M15 12L9 12' stroke={color} strokeWidth='1.2' strokeLinecap='square' />
  </svg>
)

export const AddRingFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM13 13V17H11V13H7V11H11V7H13V11H17V13H13Z'
      fill={color}
    />
  </svg>
)

export const AddRingLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9' stroke={color} />
    <path d='M12 15L12 9' stroke={color} strokeLinecap='square' />
    <path d='M15 12L9 12' stroke={color} strokeLinecap='square' />
  </svg>
)

export const AddRound = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 6L12 18' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M18 12L6 12' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const AddRoundDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9' fill={color} fillOpacity='0.25' />
    <path d='M12 8L12 16' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M16 12L8 12' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const AddRoundDuotoneLine = ({
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
    <circle cx='12' cy='12' r='8.4' stroke={color} strokeOpacity='0.25' strokeWidth='1.2' />
    <path d='M12 8L12 16' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M16 12L8 12' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const AddRoundFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18Z'
      fill={color}
    />
  </svg>
)

export const AddRoundLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 6L12 18' stroke={color} strokeLinecap='round' />
    <path d='M18 12L6 12' stroke={color} strokeLinecap='round' />
  </svg>
)

export const AddSquare = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M12 8L12 16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
    <path
      d='M16 12L8 12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
  </svg>
)

export const AddSquareDuotone = ({
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
      d='M3 9.4C3 7.15979 3 6.03969 3.43597 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43597C6.03969 3 7.15979 3 9.4 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V14.6C21 16.8402 21 17.9603 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.9603 21 16.8402 21 14.6 21H9.4C7.15979 21 6.03969 21 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43597 18.816C3 17.9603 3 16.8402 3 14.6V9.4Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M12 8L12 16' stroke={color} strokeLinejoin='round' />
    <path d='M16 12L8 12' stroke={color} strokeLinejoin='round' />
  </svg>
)

export const AddSquareDuotoneLine = ({
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
      d='M3.5 11C3.5 9.10025 3.50106 7.72573 3.64199 6.67754C3.78098 5.64373 4.04772 5.00253 4.52513 4.52513C5.00253 4.04772 5.64373 3.78098 6.67754 3.64199C7.72573 3.50106 9.10025 3.5 11 3.5H13C14.8998 3.5 16.2743 3.50106 17.3225 3.64199C18.3563 3.78098 18.9975 4.04772 19.4749 4.52513C19.9523 5.00253 20.219 5.64373 20.358 6.67754C20.4989 7.72573 20.5 9.10025 20.5 11V13C20.5 14.8998 20.4989 16.2743 20.358 17.3225C20.219 18.3563 19.9523 18.9975 19.4749 19.4749C18.9975 19.9523 18.3563 20.219 17.3225 20.358C16.2743 20.4989 14.8998 20.5 13 20.5H11C9.10025 20.5 7.72573 20.4989 6.67754 20.358C5.64373 20.219 5.00253 19.9523 4.52513 19.4749C4.04772 18.9975 3.78098 18.3563 3.64199 17.3225C3.50106 16.2743 3.5 14.8998 3.5 13V11Z'
      stroke={color}
      strokeOpacity='0.25'
    />
    <path d='M12 8L12 16' stroke={color} strokeLinejoin='round' />
    <path d='M16 12L8 12' stroke={color} strokeLinejoin='round' />
  </svg>
)

export const AddSquareFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3H11C7.22876 3 5.34315 3 4.17157 4.17157ZM11 7V11L7 11V13H11V17H13V13H17V11H13V7H11Z'
      fill={color}
    />
  </svg>
)

export const AddSquareLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M3.5 11C3.5 9.10025 3.50106 7.72573 3.64199 6.67754C3.78098 5.64373 4.04772 5.00253 4.52513 4.52513C5.00253 4.04772 5.64373 3.78098 6.67754 3.64199C7.72573 3.50106 9.10025 3.5 11 3.5H13C14.8998 3.5 16.2743 3.50106 17.3225 3.64199C18.3563 3.78098 18.9975 4.04772 19.4749 4.52513C19.9523 5.00253 20.219 5.64373 20.358 6.67754C20.4989 7.72573 20.5 9.10025 20.5 11V13C20.5 14.8998 20.4989 16.2743 20.358 17.3225C20.219 18.3563 19.9523 18.9975 19.4749 19.4749C18.9975 19.9523 18.3563 20.219 17.3225 20.358C16.2743 20.4989 14.8998 20.5 13 20.5H11C9.10025 20.5 7.72573 20.4989 6.67754 20.358C5.64373 20.219 5.00253 19.9523 4.52513 19.4749C4.04772 18.9975 3.78098 18.3563 3.64199 17.3225C3.50106 16.2743 3.5 14.8998 3.5 13V11Z'
      stroke={color}
    />
    <path d='M12 8L12 16' stroke={color} strokeLinejoin='round' />
    <path d='M16 12L8 12' stroke={color} strokeLinejoin='round' />
  </svg>
)
