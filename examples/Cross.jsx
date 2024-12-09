import React from 'react'

export const CloseRound = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M18 6L6 18'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6 6L18 18'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const CloseRoundDuotone = ({
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
    <circle cx='12' cy='12' r='9' fill={color} fillOpacity='0.25' />
    <path
      d='M16 8L8 16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 8L16 16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const CloseRoundDuotoneLine = ({
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
    <path
      d='M16 8L8 16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 8L16 16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const CloseRoundFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071Z'
      fill={color}
    />
  </svg>
)

export const CloseRoundLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M18 6L6 18' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 6L18 18' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const CloseSquare = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M18 6L6 18'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
    <path
      d='M6 6L18 18'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
  </svg>
)

export const CloseSquareDuotone = ({
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
    <circle cx='12' cy='12' r='9' fill={color} fillOpacity='0.25' />
    <path
      d='M16 8L8 16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
    <path
      d='M8 8L16 16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
  </svg>
)

export const CloseSquareDuotoneLine = ({
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
    <path
      d='M16 8L8 16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
    <path
      d='M8 8L16 16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
  </svg>
)

export const CloseSquareFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM6.58579 16L7.29289 15.2929L10.5858 12L7.29289 8.70711L6.58579 8L8 6.58579L8.70711 7.29289L12 10.5858L15.2929 7.29289L16 6.58579L17.4142 8L16.7071 8.70711L13.4142 12L16.7071 15.2929L17.4142 16L16 17.4142L15.2929 16.7071L12 13.4142L8.70711 16.7071L8 17.4142L6.58579 16Z'
      fill={color}
    />
  </svg>
)

export const CloseSquareLight = ({
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
    <path d='M18 6L6 18' stroke={color} strokeLinecap='square' strokeLinejoin='round' />
    <path d='M6 6L18 18' stroke={color} strokeLinecap='square' strokeLinejoin='round' />
  </svg>
)

export const Dell = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
    <path d='M9.0001 14.9997L15.0001 8.99966' stroke={color} strokeWidth='2' />
    <path d='M15 15L9 9' stroke={color} strokeWidth='2' />
  </svg>
)

export const DellDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
    <path d='M9.0001 14.9997L15.0001 8.99966' stroke={color} strokeWidth='1.2' />
    <path d='M15 15L9 9' stroke={color} strokeWidth='1.2' />
  </svg>
)

export const DellDuotoneLine = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
    <path d='M9.00009 14.9997L15.0001 8.99966' stroke={color} strokeWidth='1.2' />
    <path d='M15 15L9 9' stroke={color} strokeWidth='1.2' />
  </svg>
)

export const DellFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 13.4142L8.70711 16.7071L7.29289 15.2929L10.5858 12L7.29289 8.70711L8.70711 7.29289L12 10.5858L15.2929 7.29289L16.7071 8.70711L13.4142 12L16.7071 15.2929L15.2929 16.7071L12 13.4142Z'
      fill={color}
    />
  </svg>
)

export const DellLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
    <path d='M9.00009 14.9997L15.0001 8.99966' stroke={color} />
    <path d='M15 15L9 9' stroke={color} />
  </svg>
)

export const CloseRing = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C13.1819 3 14.3522 3.23279 15.4442 3.68508C16.5361 4.13738 17.5282 4.80031 18.364 5.63604C19.1997 6.47177 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4441 20.3149C14.3522 20.7672 13.1819 21 12 21L12 21Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M9 9L15 15' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M15 9L9 15' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const CloseRingDuotone = ({
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
    <circle cx='12' cy='12' r='9' fill={color} fillOpacity='0.25' />
    <path d='M9 9L15 15' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M15 9L9 15' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const CloseRingDuotoneLine = ({
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
      d='M12 20.4C10.8969 20.4 9.80459 20.1827 8.78546 19.7606C7.76632 19.3384 6.84031 18.7197 6.0603 17.9397C5.28029 17.1597 4.66155 16.2337 4.23941 15.2145C3.81727 14.1954 3.6 13.1031 3.6 12C3.6 10.8969 3.81727 9.80459 4.23941 8.78546C4.66155 7.76632 5.28029 6.84031 6.0603 6.0603C6.84032 5.28029 7.76633 4.66155 8.78546 4.23941C9.8046 3.81727 10.8969 3.6 12 3.6C13.1031 3.6 14.1954 3.81727 15.2145 4.23941C16.2337 4.66155 17.1597 5.28029 17.9397 6.0603C18.7197 6.84032 19.3384 7.76633 19.7606 8.78546C20.1827 9.8046 20.4 10.8969 20.4 12C20.4 13.1031 20.1827 14.1954 19.7606 15.2145C19.3384 16.2337 18.7197 17.1597 17.9397 17.9397C17.1597 18.7197 16.2337 19.3384 15.2145 19.7606C14.1954 20.1827 13.1031 20.4 12 20.4L12 20.4Z'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
    />
    <path d='M9 9L15 15' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M15 9L9 15' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const CloseRingFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM13.2929 14.7071C13.6834 15.0976 14.3166 15.0976 14.7071 14.7071C15.0976 14.3166 15.0976 13.6834 14.7071 13.2929L13.4142 12L14.7071 10.7071C15.0976 10.3166 15.0976 9.68342 14.7071 9.29289C14.3166 8.90237 13.6834 8.90237 13.2929 9.29289L12 10.5858L10.7071 9.29289C10.3166 8.90237 9.68342 8.90237 9.29289 9.29289C8.90237 9.68342 8.90237 10.3166 9.29289 10.7071L10.5858 12L9.29289 13.2929C8.90237 13.6834 8.90237 14.3166 9.29289 14.7071C9.68342 15.0976 10.3166 15.0976 10.7071 14.7071L12 13.4142L13.2929 14.7071ZM14.6788 5.53284C13.1826 4.91309 11.5178 4.83131 9.96801 5.30142C8.41826 5.77153 7.07945 6.76445 6.17971 8.11101C5.27997 9.45756 4.87497 11.0744 5.03371 12.6861C5.19244 14.2978 5.9051 15.8046 7.05025 16.9497C7.44077 17.3403 8.07394 17.3403 8.46446 16.9497C8.85499 16.5592 8.85499 15.9261 8.46447 15.5355C7.6465 14.7176 7.13746 13.6413 7.02408 12.4901C6.91069 11.3389 7.19998 10.184 7.84265 9.22215C8.48532 8.26032 9.44161 7.55109 10.5486 7.2153C11.6555 6.8795 12.8447 6.93792 13.9134 7.3806C14.9821 7.82328 15.8643 8.62283 16.4096 9.64302C16.9549 10.6632 17.1296 11.8409 16.9039 12.9755C16.6783 14.11 16.0662 15.1312 15.172 15.8651C14.2778 16.5989 13.1568 17 12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C13.6195 19 15.1889 18.4385 16.4408 17.4111C17.6926 16.3837 18.5496 14.954 18.8655 13.3656C19.1814 11.7773 18.9369 10.1285 18.1734 8.70022C17.41 7.27196 16.175 6.15259 14.6788 5.53284Z'
      fill={color}
    />
  </svg>
)

export const CloseRingLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C13.1819 3 14.3522 3.23279 15.4442 3.68508C16.5361 4.13738 17.5282 4.80031 18.364 5.63604C19.1997 6.47177 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4441 20.3149C14.3522 20.7672 13.1819 21 12 21L12 21Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M9 9L15 15' stroke={color} strokeLinecap='round' />
    <path d='M15 9L9 15' stroke={color} strokeLinecap='round' />
  </svg>
)
