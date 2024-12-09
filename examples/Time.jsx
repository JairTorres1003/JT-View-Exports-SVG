import React from 'react'

export const Alarmclock = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='13' r='7' stroke={color} strokeWidth='2' />
    <path d='M5 5L3 7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M19 5L21 7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M9 11L11.8093 12.8729C11.9172 12.9448 12.0622 12.9223 12.1432 12.821L14 10.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const AlarmclockDuotone = ({
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
    <circle cx='12' cy='13' r='8' fill={color} fillOpacity='0.25' />
    <path d='M5.5 4.5L3.5 6.5' stroke={color} strokeLinecap='round' />
    <path d='M18.5 4.5L20.5 6.5' stroke={color} strokeLinecap='round' />
    <path
      d='M12 8V12.9243C12 12.9737 12.0146 13.0219 12.042 13.063L14 16'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const AlarmclockDuotoneLine = ({
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
    <circle
      cx='12'
      cy='13'
      r='7'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M5 5L3 7' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M19 5L21 7' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M9 11L11.8093 12.8729C11.9172 12.9448 12.0622 12.9223 12.1432 12.821L14 10.5'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const AlarmclockFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5 4L3 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M19 4L21 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM14.7809 10.1247C15.1259 9.69343 15.056 9.06414 14.6247 8.71913C14.1934 8.37412 13.5641 8.44404 13.2191 8.87531L11.7919 10.6594L9.5547 9.16795C9.09517 8.8616 8.4743 8.98577 8.16795 9.4453C7.8616 9.90483 7.98577 10.5257 8.4453 10.8321L11.2546 12.7049C11.7941 13.0646 12.519 12.952 12.9241 12.4457L14.7809 10.1247Z'
      fill={color}
    />
  </svg>
)

export const AlarmclockLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='13' r='7' stroke={color} />
    <path d='M5 5L3 7' stroke={color} strokeLinecap='round' />
    <path d='M19 5L21 7' stroke={color} strokeLinecap='round' />
    <path
      d='M9 11L11.8093 12.8729C11.9172 12.9448 12.0622 12.9223 12.1432 12.821L14 10.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const Clock = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='7' stroke={color} strokeWidth='2' />
    <path
      d='M5.96472 3.1363C5.2865 3.31803 4.66807 3.67508 4.17157 4.17157C3.67508 4.66807 3.31803 5.2865 3.1363 5.96472'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M18.0353 3.1363C18.7135 3.31803 19.3319 3.67508 19.8284 4.17157C20.3249 4.66807 20.682 5.2865 20.8637 5.96472'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M12 8V11.75C12 11.8881 12.1119 12 12.25 12H15'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const ClockDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 2.80385C4.08789 3.33046 3.33046 4.08788 2.80385 5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M19 2.80385C19.9121 3.33046 20.6695 4.08788 21.1962 5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M12 6.5V11.75C12 11.8881 12.1119 12 12.25 12H16.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const ClockDuotoneLine = ({
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
    <circle cx='12' cy='12' r='8.5' stroke={color} strokeOpacity='0.25' />
    <path
      d='M5 2.80385C4.08789 3.33046 3.33046 4.08788 2.80385 5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M19 2.80385C19.9121 3.33046 20.6695 4.08788 21.1962 5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M12 6.5V11.75C12 11.8881 12.1119 12 12.25 12H16.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const ClockFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5.96472 3.1363C5.2865 3.31803 4.66807 3.67508 4.17157 4.17157C3.67508 4.66807 3.31803 5.2865 3.1363 5.96472'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M18.0353 3.1363C18.7135 3.31803 19.3319 3.67508 19.8284 4.17157C20.3249 4.66807 20.682 5.2865 20.8637 5.96472'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V11.75C11 12.4404 11.5596 13 12.25 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V8Z'
      fill={color}
    />
  </svg>
)

export const ClockLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='8.5' stroke={color} />
    <path
      d='M5 2.80385C4.08789 3.33046 3.33046 4.08788 2.80385 5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M19 2.80385C19.9121 3.33046 20.6695 4.08788 21.1962 5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M12 6.5V11.75C12 11.8881 12.1119 12 12.25 12H16.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const HhourglassMoveLightOne = ({
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
      d='M12 12L18.1254 16.1694C18.6725 16.5418 19 17.1608 19 17.8227V20.5C19 20.7761 18.7761 21 18.5 21H5.5C5.22386 21 5 20.7761 5 20.5V17.8227C5 17.1608 5.32746 16.5418 5.87462 16.1694L12 12ZM12 12L18.1254 7.83062C18.6725 7.45819 19 6.83917 19 6.17729V3.5C19 3.22386 18.7761 3 18.5 3H5.5C5.22386 3 5 3.22386 5 3.5V6.17729C5 6.83917 5.32746 7.45819 5.87462 7.83062L12 12Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15 20.2071V20.85C15 20.9328 14.9328 21 14.85 21H9.15C9.06716 21 9 20.9328 9 20.85V20.2071C9 20.0745 9.05268 19.9473 9.14645 19.8536L11.4343 17.5657C11.7467 17.2533 12.2533 17.2533 12.5657 17.5657L14.8536 19.8536C14.9473 19.9473 15 20.0745 15 20.2071Z'
      fill={color}
    />
    <path d='M12 11L17 8H7L12 11Z' fill={color} />
    <path
      d='M12 18V12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const HhourglassMoveLight = ({
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
      d='M12 12L17.6384 15.9035C18.178 16.2771 18.5 16.8916 18.5 17.5479V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V17.5479C5.5 16.8916 5.82198 16.2771 6.36158 15.9035L12 12ZM12 12L17.6384 8.09648C18.178 7.72291 18.5 7.10838 18.5 6.45209V4C18.5 3.72386 18.2761 3.5 18 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V6.45209C5.5 7.10838 5.82198 7.72291 6.36158 8.09648L12 12Z'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.5 20.5L11.7682 17.7781C11.918 17.5984 12 17.3719 12 17.138V12'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.5 20.5L12.2318 17.7781C12.082 17.5984 12 17.3719 12 17.138V12'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M17 8.5H7' stroke={color} strokeLinejoin='round' />
  </svg>
)

export const HourglassLightOne = ({
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
      d='M12 12L18.1254 16.1694C18.6725 16.5418 19 17.1608 19 17.8227V20.5C19 20.7761 18.7761 21 18.5 21H5.5C5.22386 21 5 20.7761 5 20.5V17.8227C5 17.1608 5.32746 16.5418 5.87462 16.1694L12 12ZM12 12L18.1254 7.83062C18.6725 7.45819 19 6.83917 19 6.17729V3.5C19 3.22386 18.7761 3 18.5 3H5.5C5.22386 3 5 3.22386 5 3.5V6.17729C5 6.83917 5.32746 7.45819 5.87462 7.83062L12 12Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 18.7771V20.85C16 20.9328 15.9328 21 15.85 21H8.15C8.06716 21 8 20.9328 8 20.85V18.7771C8 18.6047 8.08881 18.4445 8.235 18.3531L11.576 16.265C11.8354 16.1029 12.1646 16.1029 12.424 16.265L15.765 18.3531C15.9112 18.4445 16 18.6047 16 18.7771Z'
      fill={color}
    />
  </svg>
)

export const HourglassLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 12L17.6384 15.9035C18.178 16.2771 18.5 16.8916 18.5 17.5479V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V17.5479C5.5 16.8916 5.82198 16.2771 6.36158 15.9035L12 12ZM12 12L17.6384 8.09648C18.178 7.72291 18.5 7.10838 18.5 6.45209V4C18.5 3.72386 18.2761 3.5 18 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V6.45209C5.5 7.10838 5.82198 7.72291 6.36158 8.09648L12 12Z'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.5 20.5V19.3705C15.5 18.8322 15.2116 18.3352 14.7442 18.0681L12.0744 16.5425C12.0283 16.5162 11.9717 16.5162 11.9256 16.5425L9.25579 18.0681C8.78843 18.3352 8.5 18.8322 8.5 19.3705V20.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const JumpTimeOne = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M16.3356 6.46177L12.2276 15.4993C12.1388 15.6947 11.8612 15.6947 11.7724 15.4993L7.66444 6.46177C7.46141 6.0151 7.95615 5.57369 8.37687 5.82612L11.8714 7.92282C11.9505 7.97033 12.0495 7.97033 12.1286 7.92282L15.6231 5.82612C16.0439 5.57369 16.5386 6.0151 16.3356 6.46177Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M4 18H9' stroke={color} strokeLinecap='round' />
    <path d='M15 18H20' stroke={color} strokeLinecap='round' />
  </svg>
)

export const JumpTime = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M17.6523 5.57951L12.2144 14.6427C12.1173 14.8045 11.8827 14.8045 11.7856 14.6427L6.3477 5.57951C6.22829 5.38048 6.42094 5.14031 6.64113 5.21371L11.9209 6.97365C11.9723 6.99075 12.0277 6.99075 12.0791 6.97365L17.3589 5.21371C17.5791 5.14031 17.7717 5.38048 17.6523 5.57951Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M4 19H9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M15 19H20' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const JumpTimeDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M17.3292 6.34164L12.2236 16.5528C12.1315 16.737 11.8685 16.737 11.7764 16.5528L6.67082 6.34164C6.45593 5.91186 6.91186 5.45593 7.34164 5.67082L11.5528 7.77639C11.8343 7.91716 12.1657 7.91716 12.4472 7.77639L16.6584 5.67082C17.0881 5.45593 17.5441 5.91186 17.3292 6.34164Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M14.5 17.5H18.5' stroke={color} strokeLinecap='round' />
    <path d='M5.5 17.5H9.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const JumpTimeDuotoneLine = ({
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
      d='M17.6523 5.57951L12.2144 14.6427C12.1173 14.8045 11.8827 14.8045 11.7856 14.6427L6.3477 5.57951C6.22829 5.38048 6.42094 5.14031 6.64113 5.21371L11.9209 6.97365C11.9723 6.99075 12.0277 6.99075 12.0791 6.97365L17.3589 5.21371C17.5791 5.14031 17.7717 5.38048 17.6523 5.57951Z'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path d='M4 19H9' stroke={color} strokeOpacity='0.25' strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M15 19H20'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const JumpTimeFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M17.3441 8.07519L12.8805 16.3648C12.5029 17.066 11.4971 17.066 11.1195 16.3648L6.65587 8.07519C6.17933 7.19018 7.15976 6.23415 8.03248 6.73285L11.5039 8.71649C11.8113 8.89217 12.1887 8.89217 12.4961 8.71649L15.9675 6.73285C16.8402 6.23415 17.8207 7.19018 17.3441 8.07519Z'
      fill={color}
    />
    <path d='M4 19H9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M15 19H20' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const Time = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
    <path
      d='M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const TimeAtack = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 6.5C12 6.26077 12 6.14115 12.0807 6.06687C12.1615 5.99259 12.2741 6.002 12.4994 6.02082C13.3784 6.09424 14.2326 6.36078 15 6.80385C15.9121 7.33046 16.6695 8.08788 17.1962 9C17.7228 9.91212 18 10.9468 18 12C18 13.0532 17.7228 14.0879 17.1962 15C16.6695 15.9121 15.9121 16.6695 15 17.1962C14.0879 17.7228 13.0532 18 12 18C10.9468 18 9.91211 17.7228 9 17.1962C8.23258 16.7531 7.57467 16.1466 7.07159 15.4221C6.94265 15.2364 6.87817 15.1435 6.90213 15.0365C6.92608 14.9294 7.02968 14.8696 7.23686 14.75L11.75 12.1443C11.872 12.0739 11.933 12.0387 11.9665 11.9807C12 11.9226 12 11.8522 12 11.7113V6.5Z'
      fill={color}
    />
    <circle cx='12' cy='12' r='9' stroke={color} strokeWidth='2' />
  </svg>
)

export const TimeAtackDuotone = ({
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
      d='M12 5.3C12 5.15741 12 5.08611 12.0462 5.04182C12.0925 4.99753 12.1616 5.0005 12.2999 5.00643C13.4246 5.05465 14.5226 5.37351 15.5 5.93782C16.5641 6.5522 17.4478 7.43587 18.0622 8.5C18.6766 9.56413 19 10.7712 19 12C19 13.2288 18.6766 14.4359 18.0622 15.5C17.4478 16.5641 16.5641 17.4478 15.5 18.0622C14.4359 18.6766 13.2288 19 12 19C10.7712 19 9.56413 18.6766 8.5 18.0622C7.52259 17.4979 6.69743 16.7064 6.09335 15.7565C6.01906 15.6397 5.98191 15.5813 5.99716 15.5191C6.0124 15.4569 6.07414 15.4213 6.19763 15.35L11.85 12.0866C11.9232 12.0443 11.9598 12.0232 11.9799 11.9884C12 11.9536 12 11.9113 12 11.8268V5.3Z'
      fill={color}
    />
  </svg>
)

export const TimeAtackDuotoneLine = ({
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
    <mask id='path-1-inside-1_2165_5464' fill='white'>
      <path d='M12 6.5C12 6.26077 12 6.14115 12.0807 6.06687C12.1615 5.99259 12.2741 6.002 12.4994 6.02082C13.3784 6.09424 14.2326 6.36078 15 6.80385C15.9121 7.33046 16.6695 8.08788 17.1962 9C17.7228 9.91212 18 10.9468 18 12C18 13.0532 17.7228 14.0879 17.1962 15C16.6695 15.9121 15.9121 16.6695 15 17.1962C14.0879 17.7228 13.0532 18 12 18C10.9468 18 9.91211 17.7228 9 17.1962C8.23258 16.7531 7.57467 16.1466 7.07159 15.4221C6.94265 15.2364 6.87817 15.1435 6.90213 15.0365C6.92608 14.9294 7.02968 14.8696 7.23686 14.75L11.75 12.1443C11.872 12.0739 11.933 12.0387 11.9665 11.9807C12 11.9226 12 11.8522 12 11.7113V6.5Z' />
    </mask>
    <path
      d='M12 6.5C12 6.26077 12 6.14115 12.0807 6.06687C12.1615 5.99259 12.2741 6.002 12.4994 6.02082C13.3784 6.09424 14.2326 6.36078 15 6.80385C15.9121 7.33046 16.6695 8.08788 17.1962 9C17.7228 9.91212 18 10.9468 18 12C18 13.0532 17.7228 14.0879 17.1962 15C16.6695 15.9121 15.9121 16.6695 15 17.1962C14.0879 17.7228 13.0532 18 12 18C10.9468 18 9.91211 17.7228 9 17.1962C8.23258 16.7531 7.57467 16.1466 7.07159 15.4221C6.94265 15.2364 6.87817 15.1435 6.90213 15.0365C6.92608 14.9294 7.02968 14.8696 7.23686 14.75L11.75 12.1443C11.872 12.0739 11.933 12.0387 11.9665 11.9807C12 11.9226 12 11.8522 12 11.7113V6.5Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='2.4'
      mask='url(#path-1-inside-1_2165_5464)'
    />
    <circle cx='12' cy='12' r='8.4' stroke={color} strokeWidth='1.2' />
  </svg>
)

export const TimeAtackFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12.0796 5.06765C12 5.14181 12 5.2612 12 5.5V11.7113C12 11.8522 12 11.9226 11.9665 11.9807C11.933 12.0387 11.872 12.0739 11.75 12.1443L6.37083 15.25C6.16403 15.3694 6.06063 15.4291 6.03624 15.5351C6.01184 15.6412 6.07559 15.7354 6.20307 15.9237C6.79578 16.7994 7.58052 17.5313 8.5 18.0622C9.56413 18.6766 10.7712 19 12 19C13.2288 19 14.4359 18.6766 15.5 18.0622C16.5641 17.4478 17.4478 16.5641 18.0622 15.5C18.6766 14.4359 19 13.2288 19 12C19 10.7712 18.6766 9.56413 18.0622 8.5C17.4478 7.43587 16.5641 6.5522 15.5 5.93782C14.5805 5.40696 13.5543 5.09331 12.4996 5.01785C12.2727 5.00162 12.1593 4.9935 12.0796 5.06765Z'
      fill={color}
    />
  </svg>
)

export const TimeAtackLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 6.72C12 6.47161 12 6.34742 12.0567 6.24546C12.1028 6.1624 12.1921 6.08326 12.2801 6.04738C12.3881 6.00333 12.4981 6.0166 12.7183 6.04315C13.52 6.13981 14.2964 6.39764 15 6.80385C15.9121 7.33046 16.6695 8.08788 17.1962 9C17.7228 9.91212 18 10.9468 18 12C18 13.0532 17.7228 14.0879 17.1962 15C16.6695 15.9121 15.9121 16.6695 15 17.1962C14.0879 17.7228 13.0532 18 12 18C10.9468 18 9.91211 17.7228 9 17.1962C8.29643 16.7899 7.68491 16.2464 7.20036 15.6005C7.0673 15.4231 7.00077 15.3344 6.98491 15.2189C6.97199 15.1247 6.9959 15.0078 7.04475 14.9263C7.10472 14.8263 7.21227 14.7642 7.42739 14.64L11.64 12.2078C11.7711 12.1321 11.8367 12.0943 11.8844 12.0413C11.9266 11.9944 11.9585 11.9392 11.978 11.8793C12 11.8115 12 11.7357 12 11.5843V6.72Z'
      fill={color}
    />
    <circle cx='12' cy='12' r='8.5' stroke={color} />
  </svg>
)

export const TimeDelLightOne = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M10.1883 5.23852C11.3752 4.92049 12.6248 4.92049 13.8117 5.23852C14.9986 5.55654 16.0809 6.18139 16.9497 7.05025C17.8186 7.91911 18.4435 9.00138 18.7615 10.1883C19.0795 11.3752 19.0795 12.6248 18.7615 13.8117'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12C5 10.1435 5.7375 8.36301 7.05025 7.05025'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M19 19L5 5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.0353 3.1363C18.7135 3.31803 19.3319 3.67508 19.8284 4.17157C20.3249 4.66807 20.682 5.2865 20.8637 5.96472'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const TimeDelLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9.18106 5.04992C10.5472 4.49581 12.0464 4.35662 13.4912 4.64974C14.936 4.94285 16.2624 5.65527 17.3046 6.69797C18.3468 7.74066 19.0586 9.06739 19.351 10.5123C19.6434 11.9573 19.5035 13.4564 18.9487 14.8223'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.3033 17.3033C15.8968 18.7098 13.9891 19.5 12 19.5C10.0109 19.5 8.10322 18.7098 6.6967 17.3033C5.29018 15.8968 4.5 13.9891 4.5 12C4.5 10.0109 5.29018 8.10322 6.6967 6.6967'
      stroke={color}
    />
    <path d='M19.5 19.5L4.5 4.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M17.9059 3.61926C18.4993 3.77827 19.0404 4.0907 19.4749 4.52513C19.9093 4.95956 20.2217 5.50069 20.3807 6.09413'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const TimeDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='8' fill={color} fillOpacity='0.25' />
    <path d='M12 7V11.75C12 11.8881 12.1119 12 12.25 12H15' stroke={color} strokeLinecap='round' />
  </svg>
)

export const TimeDuotoneLine = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      cx='12'
      cy='12'
      r='8.6'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const TimeFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM13 6.5C13 5.94772 12.5523 5.5 12 5.5C11.4477 5.5 11 5.94772 11 6.5V11.75C11 12.4404 11.5596 13 12.25 13H15.5C16.0523 13 16.5 12.5523 16.5 12C16.5 11.4477 16.0523 11 15.5 11H13V6.5Z'
      fill={color}
    />
  </svg>
)

export const TimeLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='8.5' stroke={color} />
    <path
      d='M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const TimeProgress = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5.63604 5.63604C4.1637 7.10837 3.24743 9.04567 3.04334 11.1178C2.83925 13.19 3.35997 15.2688 4.51677 17.0001C5.67358 18.7314 7.3949 20.008 9.38744 20.6125C11.38 21.2169 13.5204 21.1117 15.4441 20.3149C17.3678 19.5181 18.9557 18.0789 19.9373 16.2426C20.9188 14.4062 21.2333 12.2864 20.8271 10.2442C20.4209 8.202 19.3191 6.36384 17.7095 5.04291C16.1 3.72197 14.0822 3 12 3'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M12 12L6 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 3V5' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M21 12L19 12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 19V21' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M5 12L3 12' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const TimeProgressDuotone = ({
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
      d='M12 3.3C12 3.15765 12 3.08648 12.0457 3.04226C12.0914 2.99805 12.1609 3.00036 12.3 3.005C14.174 3.06747 15.9846 3.71402 17.4765 4.85803C19.0479 6.06299 20.178 7.75256 20.6918 9.66496C21.2056 11.5773 21.0743 13.6058 20.3183 15.436C19.5623 17.2662 18.2238 18.796 16.5102 19.7883C14.7966 20.7807 12.8035 21.1802 10.8398 20.9249C8.87614 20.6696 7.05146 19.7739 5.64851 18.3764C4.24556 16.9789 3.34265 15.1578 3.0797 13.1951C2.83005 11.3317 3.17049 9.43952 4.04907 7.78303C4.11426 7.66014 4.14685 7.59869 4.20795 7.58105C4.26906 7.56341 4.33079 7.59883 4.45425 7.66968L10.0014 10.853C10.1193 10.9207 10.1782 10.9545 10.1967 11.007C10.2153 11.0595 10.1876 11.1306 10.1322 11.2727C10.0099 11.587 9.96817 11.9287 10.0134 12.2662C10.0719 12.7033 10.273 13.1088 10.5855 13.4201C10.8979 13.7313 11.3043 13.9308 11.7416 13.9876C12.1789 14.0445 12.6228 13.9555 13.0044 13.7345C13.3861 13.5135 13.6842 13.1728 13.8525 12.7652C14.0209 12.3576 14.0501 11.9059 13.9357 11.48C13.8213 11.0541 13.5696 10.6778 13.2197 10.4094C12.9495 10.2023 12.6324 10.0683 12.2989 10.018C12.148 9.99529 12.0726 9.98392 12.0363 9.94173C12 9.89955 12 9.83158 12 9.69564V3.3Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M8.65 17.8024C8.5787 17.9259 8.54306 17.9876 8.56095 18.0491C8.57884 18.1105 8.64021 18.1426 8.76294 18.2066C9.62424 18.6558 10.5707 18.9213 11.5422 18.985C12.6136 19.0552 13.6868 18.878 14.6788 18.4672C15.6708 18.0563 16.5549 17.4227 17.2629 16.6154C17.9708 15.8082 18.4836 14.8489 18.7615 13.8117C19.0394 12.7746 19.075 11.6874 18.8655 10.6344C18.656 9.58128 18.2071 8.5905 17.5535 7.73867C16.8998 6.88684 16.059 6.19678 15.096 5.72189C14.2228 5.29128 13.2704 5.04804 12.2999 5.00643C12.1616 5.0005 12.0925 4.99753 12.0462 5.04182C12 5.08611 12 5.15741 12 5.3V9.70234C12 9.83826 12 9.90622 12.0363 9.9484C12.0726 9.99057 12.148 10.002 12.2989 10.0248C12.5015 10.0555 12.6987 10.1172 12.8835 10.2083C13.1584 10.3439 13.3983 10.5408 13.5849 10.7839C13.7714 11.027 13.8995 11.3097 13.9593 11.6103C14.0191 11.9108 14.0089 12.2211 13.9296 12.517C13.8503 12.813 13.704 13.0868 13.5019 13.3172C13.2999 13.5475 13.0476 13.7283 12.7645 13.8456C12.4814 13.9629 12.1751 14.0134 11.8693 13.9934C11.6637 13.9799 11.462 13.9347 11.2712 13.86C11.1292 13.8043 11.0581 13.7765 11.0056 13.7949C10.9531 13.8133 10.9191 13.8721 10.8512 13.9898L8.65 17.8024Z'
      fill={color}
    />
  </svg>
)

export const TimeProgressDuotoneLine = ({
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
    <path d='M12 4V6' stroke={color} strokeOpacity='0.25' strokeWidth='1.2' strokeLinecap='round' />
    <path d='M12 11.9996L6.05859 6.06641' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M20 12L18 12'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      d='M12 18V20'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      d='M6 12L4 12'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      d='M12 3.6C13.9434 3.6 15.8266 4.27384 17.3289 5.50671C18.8312 6.73958 19.8595 8.4552 20.2386 10.3612C20.6177 12.2673 20.3242 14.2458 19.4081 15.9597C18.492 17.6736 17.01 19.0169 15.2145 19.7606C13.4191 20.5043 11.4213 20.6024 9.56161 20.0383C7.7019 19.4742 6.09534 18.2827 5.01565 16.6668C3.93597 15.0509 3.44996 13.1107 3.64045 11.1767C3.83093 9.24263 4.68612 7.43448 6.06031 6.0603'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const TimeProgressFill = ({
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
    <mask
      id='path-1-outside-1_2165_5304'
      maskUnits='userSpaceOnUse'
      x='1'
      y='1'
      width='22'
      height='22'
      fill='black'
    >
      <rect fill='white' x='1' y='1' width='22' height='22' />
      <path d='M12 2C14.3136 2 16.5555 2.80219 18.3439 4.2699C20.1323 5.7376 21.3565 7.78 21.8079 10.0491C22.2592 12.3182 21.9098 14.6736 20.8192 16.714C19.7286 18.7543 17.9643 20.3534 15.8268 21.2388C13.6894 22.1242 11.3111 22.241 9.09717 21.5694C6.88323 20.8978 4.97066 19.4793 3.68532 17.5557C2.39998 15.6321 1.8214 13.3222 2.04817 11.0198C2.27494 8.71741 3.29302 6.56486 4.92895 4.92893L7.75738 7.75736C6.77582 8.73891 6.16497 10.0304 6.02891 11.4119C5.89285 12.7933 6.23999 14.1792 7.0112 15.3334C7.7824 16.4876 8.92995 17.3387 10.2583 17.7416C11.5867 18.1446 13.0136 18.0745 14.2961 17.5433C15.5786 17.0121 16.6372 16.0526 17.2915 14.8284C17.9459 13.6042 18.1555 12.1909 17.8847 10.8295C17.6139 9.468 16.8794 8.24256 15.8064 7.36194C14.7333 6.48132 13.3881 6 12 6L12 2Z' />
    </mask>
    <path
      d='M12 2C14.3136 2 16.5555 2.80219 18.3439 4.2699C20.1323 5.7376 21.3565 7.78 21.8079 10.0491C22.2592 12.3182 21.9098 14.6736 20.8192 16.714C19.7286 18.7543 17.9643 20.3534 15.8268 21.2388C13.6894 22.1242 11.3111 22.241 9.09717 21.5694C6.88323 20.8978 4.97066 19.4793 3.68532 17.5557C2.39998 15.6321 1.8214 13.3222 2.04817 11.0198C2.27494 8.71741 3.29302 6.56486 4.92895 4.92893L7.75738 7.75736C6.77582 8.73891 6.16497 10.0304 6.02891 11.4119C5.89285 12.7933 6.23999 14.1792 7.0112 15.3334C7.7824 16.4876 8.92995 17.3387 10.2583 17.7416C11.5867 18.1446 13.0136 18.0745 14.2961 17.5433C15.5786 17.0121 16.6372 16.0526 17.2915 14.8284C17.9459 13.6042 18.1555 12.1909 17.8847 10.8295C17.6139 9.468 16.8794 8.24256 15.8064 7.36194C14.7333 6.48132 13.3881 6 12 6L12 2Z'
      fill={color}
    />
    <path
      d='M12 2V1H11V2L12 2ZM18.3439 4.2699L18.9783 3.49689L18.3439 4.2699ZM20.8192 16.714L21.7011 17.1854L20.8192 16.714ZM15.8268 21.2388L16.2095 22.1627L15.8268 21.2388ZM9.09717 21.5694L8.80688 22.5263L9.09717 21.5694ZM3.68532 17.5557L2.85385 18.1113L3.68532 17.5557ZM2.04817 11.0198L1.05298 10.9218L2.04817 11.0198ZM4.92895 4.92893L5.63606 4.22182L4.92895 3.51472L4.22184 4.22182L4.92895 4.92893ZM7.75738 7.75736L8.46448 8.46446L9.17159 7.75736L8.46448 7.05025L7.75738 7.75736ZM6.02891 11.4119L5.03372 11.3139L6.02891 11.4119ZM7.0112 15.3334L6.17973 15.889L7.0112 15.3334ZM10.2583 17.7416L9.96802 18.6986L10.2583 17.7416ZM14.2961 17.5433L13.9134 16.6194L14.2961 17.5433ZM17.2915 14.8284L16.4096 14.357L17.2915 14.8284ZM17.8847 10.8295L16.9039 11.0245L17.8847 10.8295ZM15.8064 7.36194L16.4408 6.58893L15.8064 7.36194ZM12 6H11V7H12V6ZM12 3C14.0822 3 16.1 3.72197 17.7096 5.04291L18.9783 3.49689C17.0111 1.88241 14.5449 1 12 1V3ZM17.7096 5.04291C19.3191 6.36384 20.4209 8.202 20.8271 10.2442L22.7887 9.85401C22.2922 7.358 20.9456 5.11136 18.9783 3.49689L17.7096 5.04291ZM20.8271 10.2442C21.2333 12.2864 20.9188 14.4062 19.9373 16.2426L21.7011 17.1854C22.9008 14.941 23.2851 12.35 22.7887 9.85401L20.8271 10.2442ZM19.9373 16.2426C18.9558 18.0789 17.3679 19.5181 15.4442 20.3149L16.2095 22.1627C18.5607 21.1888 20.5015 19.4298 21.7011 17.1854L19.9373 16.2426ZM15.4442 20.3149C13.5205 21.1117 11.38 21.2169 9.38745 20.6125L8.80688 22.5263C11.2422 23.2651 13.8583 23.1366 16.2095 22.1627L15.4442 20.3149ZM9.38745 20.6125C7.39491 20.008 5.67359 18.7314 4.51679 17.0001L2.85385 18.1113C4.26772 20.2273 6.37156 21.7876 8.80688 22.5263L9.38745 20.6125ZM4.51679 17.0001C3.35998 15.2688 2.83926 13.19 3.04335 11.1178L1.05298 10.9218C0.803539 13.4545 1.43997 15.9953 2.85385 18.1113L4.51679 17.0001ZM3.04335 11.1178C3.24745 9.04567 4.16372 7.10837 5.63606 5.63604L4.22184 4.22182C2.42232 6.02134 1.30243 8.38915 1.05298 10.9218L3.04335 11.1178ZM4.22184 5.63604L7.05027 8.46446L8.46448 7.05025L5.63606 4.22182L4.22184 5.63604ZM7.05027 7.05025C5.90512 8.1954 5.19246 9.70219 5.03372 11.3139L7.02409 11.5099C7.13748 10.3587 7.64652 9.28243 8.46448 8.46446L7.05027 7.05025ZM5.03372 11.3139C4.87498 12.9256 5.27999 14.5424 6.17973 15.889L7.84267 14.7779C7.2 13.816 6.91071 12.6611 7.02409 11.5099L5.03372 11.3139ZM6.17973 15.889C7.07947 17.2355 8.41827 18.2285 9.96802 18.6986L10.5486 16.7847C9.44163 16.4489 8.48534 15.7397 7.84267 14.7779L6.17973 15.889ZM9.96802 18.6986C11.5178 19.1687 13.1826 19.0869 14.6788 18.4672L13.9134 16.6194C12.8447 17.0621 11.6556 17.1205 10.5486 16.7847L9.96802 18.6986ZM14.6788 18.4672C16.175 17.8474 17.41 16.728 18.1735 15.2998L16.4096 14.357C15.8643 15.3772 14.9822 16.1767 13.9134 16.6194L14.6788 18.4672ZM18.1735 15.2998C18.9369 13.8715 19.1815 12.2227 18.8655 10.6344L16.9039 11.0245C17.1296 12.1591 16.9549 13.3368 16.4096 14.357L18.1735 15.2998ZM18.8655 10.6344C18.5496 9.046 17.6926 7.61632 16.4408 6.58893L15.172 8.13495C16.0662 8.8688 16.6783 9.89 16.9039 11.0245L18.8655 10.6344ZM16.4408 6.58893C15.1889 5.56154 13.6195 5 12 5L12 7C13.1568 7 14.2778 7.4011 15.172 8.13495L16.4408 6.58893ZM13 6L13 2L11 2L11 6H13Z'
      fill={color}
      mask='url(#path-1-outside-1_2165_5304)'
    />
    <path d='M12 12L5 5' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const TimeProgressLight = ({
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
      d='M5.28249 5.28248C3.72835 6.83662 2.76118 8.88154 2.54575 11.0688C2.33032 13.2561 2.87996 15.4504 4.10104 17.2779C5.32211 19.1054 7.13906 20.4529 9.24229 21.0909C11.3455 21.7289 13.6049 21.6179 15.6355 20.7769C17.6661 19.9358 19.3422 18.4166 20.3783 16.4783C21.4143 14.5399 21.7462 12.3023 21.3175 10.1466C20.8887 7.991 19.7257 6.05072 18.0267 4.6564C16.3278 3.26208 14.1979 2.5 12 2.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M12 12L7 7' stroke={color} strokeLinecap='round' />
    <path d='M12 2.5V5' stroke={color} strokeLinecap='round' />
    <path d='M21 12L19 12' stroke={color} strokeLinecap='round' />
    <path d='M12 19V21' stroke={color} strokeLinecap='round' />
    <path d='M5 12L3 12' stroke={color} strokeLinecap='round' />
  </svg>
)

export const TimeSleepLightOne = ({
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
    <circle cx='12' cy='12' r='8' stroke={color} strokeWidth='2' />
    <path
      d='M5 2.80385C4.08789 3.33046 3.33046 4.08788 2.80385 5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M19 2.80385C19.9121 3.33046 20.6695 4.08788 21.1962 5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M9 9H14.6379C14.7715 9 14.8384 9.16157 14.7439 9.25607L9.25607 14.7439C9.16157 14.8384 9.2285 15 9.36213 15H15'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const TimeSleepLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='8.5' stroke={color} />
    <path
      d='M5 2.80385C4.08789 3.33046 3.33046 4.08788 2.80385 5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M19 2.80385C19.9121 3.33046 20.6695 4.08788 21.1962 5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M8.5 8.5H15.1379C15.2715 8.5 15.3384 8.66157 15.2439 8.75607L8.75607 15.2439C8.66157 15.3384 8.7285 15.5 8.86213 15.5H15.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const Tumer = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='14' r='8' stroke={color} strokeWidth='2' />
    <path d='M12 14L12 11' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M17.5 7.5L19 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M10.0681 2.37059C10.1821 2.26427 10.4332 2.17033 10.7825 2.10332C11.1318 2.03632 11.5597 2 12 2C12.4403 2 12.8682 2.03632 13.2175 2.10332C13.5668 2.17033 13.8179 2.26427 13.9319 2.37059'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const TumerDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='13' r='8' fill={color} fillOpacity='0.25' />
    <path d='M12 13L12 8' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M20.3536 5.35355C20.5488 5.15829 20.5488 4.84171 20.3536 4.64645C20.1583 4.45118 19.8417 4.45118 19.6465 4.64645L20.3536 5.35355ZM18.8536 6.85355L20.3536 5.35355L19.6465 4.64645L18.1464 6.14645L18.8536 6.85355Z'
      fill={color}
    />
    <path
      d='M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const TumerDuotoneLine = ({
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
    <circle cx='12' cy='14' r='8' stroke={color} strokeWidth='1.2' />
    <path d='M12 14L12 11' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M17.5 7.5L19 6'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      d='M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const TumerFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21 14C21 18.9706 16.9706 23 12 23C7.02944 23 3 18.9706 3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14ZM12 19C14.7614 19 17 16.7614 17 14C17 11.2386 14.7614 9 12 9C9.23858 9 7 11.2386 7 14C7 16.7614 9.23858 19 12 19ZM12 21C15.866 21 19 17.866 19 14C19 10.134 15.866 7 12 7C8.13401 7 5 10.134 5 14C5 17.866 8.13401 21 12 21ZM13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V11Z'
      fill={color}
    />
    <path d='M17.5 7.5L19 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M10.0681 2.37059C10.1821 2.26427 10.4332 2.17033 10.7825 2.10332C11.1318 2.03632 11.5597 2 12 2C12.4403 2 12.8682 2.03632 13.2175 2.10332C13.5668 2.17033 13.8179 2.26427 13.9319 2.37059'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const TumerLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='14' r='8' stroke={color} />
    <path d='M12 14L12 11' stroke={color} strokeLinecap='round' />
    <path d='M17.5 7.5L19 6' stroke={color} strokeLinecap='round' />
    <path
      d='M10.0681 2.37059C10.1821 2.26427 10.4332 2.17033 10.7825 2.10332C11.1318 2.03632 11.5597 2 12 2C12.4403 2 12.8682 2.03632 13.2175 2.10332C13.5668 2.17033 13.8179 2.26427 13.9319 2.37059'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const Watch = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='6' stroke={color} strokeWidth='2' />
    <path
      d='M8.5 7L8.90693 3.74457C8.9601 3.31921 9.32169 3 9.75036 3H14.2496C14.6783 3 15.0399 3.31921 15.0931 3.74457L15.5 7'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.5 17L8.90693 20.2554C8.9601 20.6808 9.32169 21 9.75036 21H14.2496C14.6783 21 15.0399 20.6808 15.0931 20.2554L15.5 17'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.15 11H17.5V13H18.15C18.6194 13 19 12.6194 19 12.15V11.85C19 11.3806 18.6194 11 18.15 11Z'
      fill={color}
    />
    <path d='M12 12L11 9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 12.0001L14.5 13.0005' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const WatchLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='5.5' stroke={color} />
    <path
      d='M8.5 7.5L8.90693 4.24457C8.9601 3.81921 9.32169 3.5 9.75036 3.5H14.2496C14.6783 3.5 15.0399 3.81921 15.0931 4.24457L15.5 7.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.5 16.5L8.90693 19.7554C8.9601 20.1808 9.32169 20.5 9.75036 20.5H14.2496C14.6783 20.5 15.0399 20.1808 15.0931 19.7554L15.5 16.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.15 11H17.5V13H18.15C18.6194 13 19 12.6194 19 12.15V11.85C19 11.3806 18.6194 11 18.15 11Z'
      fill={color}
    />
    <path d='M12 12L10 9.5' stroke={color} strokeLinecap='round' />
    <path d='M12 12L14.5 12.5004' stroke={color} strokeLinecap='round' />
  </svg>
)
