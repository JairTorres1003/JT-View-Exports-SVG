import React from 'react'

export const Desk = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='4' y='5' width='16' height='16' rx='2' stroke={color} strokeWidth='2' />
    <path
      d='M16 2L16 6C16 6.94281 16 7.41421 15.7071 7.7071C15.4142 8 14.9428 8 14 8L10 8C9.05719 8 8.58579 8 8.29289 7.70711C8 7.41421 8 6.94281 8 6L8 2'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M9 14L15 14' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const DeskAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M15.5 5C16.9045 5 17.6067 5 18.1111 5.33706C18.3295 5.48298 18.517 5.67048 18.6629 5.88886C19 6.39331 19 7.09554 19 8.5V18C19 19.8856 19 20.8284 18.4142 21.4142C17.8284 22 16.8856 22 15 22H9C7.11438 22 6.17157 22 5.58579 21.4142C5 20.8284 5 19.8856 5 18V8.5C5 7.09554 5 6.39331 5.33706 5.88886C5.48298 5.67048 5.67048 5.48298 5.88886 5.33706C6.39331 5 7.09554 5 8.5 5'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M9 12L15 12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 16L13 16' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const DeskAltDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='6' y='5' width='12' height='15' rx='2' fill={color} fillOpacity='0.25' />
    <path d='M9.5 9.5L14.5 9.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 12.5L14.5 12.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 15.5L14.5 15.5' stroke={color} strokeLinecap='round' />
    <path
      d='M8 4.86957C8 4.38932 8.38932 4 8.86957 4H15.1304C15.6107 4 16 4.38932 16 4.86957C16 4.9416 15.9416 5 15.8696 5H15.5C15.2239 5 15 5.22386 15 5.5V5.85C15 5.93284 14.9328 6 14.85 6H9.15C9.06716 6 9 5.93284 9 5.85V5.5C9 5.22386 8.77614 5 8.5 5H8.13043C8.0584 5 8 4.9416 8 4.86957Z'
      fill={color}
    />
  </svg>
)

export const DeskAltDuotoneLine = ({
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
      d='M19 18V8.5C19 7.09554 19 6.39331 18.6629 5.88886C18.517 5.67048 18.3295 5.48298 18.1111 5.33706C17.9364 5.22033 17.738 5.14403 17.4949 5.09415C16.7502 4.94135 16.3779 4.86495 15.8353 5.07073C15.2926 5.27651 14.9617 5.71767 14.3 6.6L14 7H10L9.7 6.6C9.03825 5.71767 8.70738 5.27651 8.16474 5.07073C7.6221 4.86495 7.24975 4.94135 6.50507 5.09415C6.26198 5.14403 6.06356 5.22033 5.88886 5.33706C5.67048 5.48298 5.48298 5.67048 5.33706 5.88886C5 6.39331 5 7.09554 5 8.5V18C5 19.8856 5 20.8284 5.58579 21.4142C6.17157 22 7.11438 22 9 22H15C16.8856 22 17.8284 22 18.4142 21.4142C19 20.8284 19 19.8856 19 18Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M15.5 5C16.9045 5 17.6067 5 18.1111 5.33706C18.3295 5.48298 18.517 5.67048 18.6629 5.88886C19 6.39331 19 7.09554 19 8.5V18C19 19.8856 19 20.8284 18.4142 21.4142C17.8284 22 16.8856 22 15 22H9C7.11438 22 6.17157 22 5.58579 21.4142C5 20.8284 5 19.8856 5 18V8.5C5 7.09554 5 6.39331 5.33706 5.88886C5.48298 5.67048 5.67048 5.48298 5.88886 5.33706C6.39331 5 7.09554 5 8.5 5'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M9 12L15 12' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M9 16L13 16' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const DeskAltFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M10 2C8.34315 2 7 3.34315 7 5V5.00068C5.92115 5.00539 5.32954 5.04261 4.88886 5.33706C4.67048 5.48298 4.48298 5.67048 4.33706 5.88886C4 6.39331 4 7.09554 4 8.5V18C4 19.8856 4 20.8284 4.58579 21.4142C5.17157 22 6.11438 22 8 22H16C17.8856 22 18.8284 22 19.4142 21.4142C20 20.8284 20 19.8856 20 18V8.5C20 7.09554 20 6.39331 19.6629 5.88886C19.517 5.67048 19.3295 5.48298 19.1111 5.33706C18.6705 5.04261 18.0789 5.00539 17 5.00068V5C17 3.34315 15.6569 2 14 2H10ZM10 5C10 4.44772 10.4477 4 11 4H13C13.5523 4 14 4.44772 14 5C14 5.55228 13.5523 6 13 6H11C10.4477 6 10 5.55228 10 5ZM9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H9ZM9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H9Z'
      fill={color}
    />
  </svg>
)

export const DeskAltLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M15.5 5C16.9045 5 17.6067 5 18.1111 5.33706C18.3295 5.48298 18.517 5.67048 18.6629 5.88886C19 6.39331 19 7.09554 19 8.5V18C19 19.8856 19 20.8284 18.4142 21.4142C17.8284 22 16.8856 22 15 22H9C7.11438 22 6.17157 22 5.58579 21.4142C5 20.8284 5 19.8856 5 18V8.5C5 7.09554 5 6.39331 5.33706 5.88886C5.48298 5.67048 5.67048 5.48298 5.88886 5.33706C6.39331 5 7.09554 5 8.5 5'
      stroke={color}
    />
    <path
      d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z'
      stroke={color}
    />
    <path d='M9 12L15 12' stroke={color} strokeLinecap='round' />
    <path d='M9 16L13 16' stroke={color} strokeLinecap='round' />
  </svg>
)

export const DeskDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M8 5.30872C8 5.1649 8 5.09299 7.95455 5.04881C7.9091 5.00463 7.83786 5.00666 7.6954 5.01071C6.64243 5.04065 6.01726 5.15431 5.58579 5.58579C5 6.17157 5 7.11438 5 9V16C5 17.8856 5 18.8284 5.58579 19.4142C6.17157 20 7.11438 20 9 20H15C16.8856 20 17.8284 20 18.4142 19.4142C19 18.8284 19 17.8856 19 16V9C19 7.11438 19 6.17157 18.4142 5.58579C17.9827 5.15431 17.3576 5.04065 16.3046 5.01071C16.1621 5.00666 16.0909 5.00463 16.0455 5.04881C16 5.09299 16 5.1649 16 5.30872V6.5C16 7.32843 15.3284 8 14.5 8C13.6716 8 13 7.32843 13 6.5V5.3C13 5.15858 13 5.08787 12.9561 5.04393C12.9121 5 12.8414 5 12.7 5H11.3C11.1586 5 11.0879 5 11.0439 5.04393C11 5.08787 11 5.15858 11 5.3V6.5C11 7.32843 10.3284 8 9.5 8C8.67157 8 8 7.32843 8 6.5V5.30872Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M9.5 3.5V6.5' stroke={color} strokeLinecap='round' />
    <path d='M14.5 3.5V6.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 10.5L14.5 10.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 13.5L14.5 13.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 16.5L14.5 16.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const DeskDuotoneLine = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M4 7.80985C4 7.05613 4 6.67926 4.10029 6.37461C4.29878 5.77169 4.77169 5.29878 5.37461 5.10029C5.67926 5 6.05613 5 6.80985 5C7.13404 5 7.29614 5 7.43364 5.04022C7.70521 5.11967 7.93042 5.31045 8.05343 5.56527C8.11571 5.69429 8.14236 5.85418 8.19566 6.17396L8.25 6.5C8.35527 7.13161 8.4079 7.44741 8.59795 7.66237C8.66164 7.73441 8.7354 7.79689 8.81694 7.84788C9.06021 8 9.38037 8 10.0207 8H13.9793C14.6196 8 14.9398 8 15.1831 7.84788C15.2646 7.79689 15.3384 7.73441 15.4021 7.66237C15.5921 7.44741 15.6447 7.13161 15.75 6.5L15.8043 6.17396C15.8576 5.85418 15.8843 5.69429 15.9466 5.56527C16.0696 5.31045 16.2948 5.11967 16.5664 5.04022C16.7039 5 16.866 5 17.1902 5C17.9439 5 18.3207 5 18.6254 5.10029C19.2283 5.29878 19.7012 5.77169 19.8997 6.37461C20 6.67926 20 7.05613 20 7.80985V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H8C6.11438 21 5.17157 21 4.58579 20.4142C4 19.8284 4 18.8856 4 17V7.80985Z'
      fill={color}
      fillOpacity='0.25'
    />
    <rect x='4' y='5' width='16' height='16' rx='2' stroke={color} strokeWidth='1.2' />
    <path
      d='M16 2L16 6C16 6.94281 16 7.41421 15.7071 7.7071C15.4142 8 14.9428 8 14 8L10 8C9.05719 8 8.58579 8 8.29289 7.70711C8 7.41421 8 6.94281 8 6L8 2'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path d='M9 14L15 14' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const DeskFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M16 3L16 6M8 3L8 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14 4H10L10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6L6 4.07612C5.02492 4.17203 4.36857 4.38879 3.87868 4.87868C3 5.75736 3 7.17157 3 10V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V10C21 7.17157 21 5.75736 20.1213 4.87868C19.6314 4.38879 18.9751 4.17203 18 4.07612L18 6C18 7.10457 17.1046 8 16 8C14.8954 8 14 7.10457 14 6L14 4ZM7 12C7 11.4477 7.44772 11 8 11L16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13L8 13C7.44772 13 7 12.5523 7 12ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17L16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15L8 15Z'
      fill={color}
    />
  </svg>
)

export const DeskLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='4' y='5' width='16' height='16' rx='2' stroke={color} />
    <path
      d='M16 2L16 6C16 6.94281 16 7.41421 15.7071 7.7071C15.4142 8 14.9428 8 14 8L10 8C9.05719 8 8.58579 8 8.29289 7.70711C8 7.41421 8 6.94281 8 6L8 2'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M9 14L15 14' stroke={color} strokeLinecap='round' />
  </svg>
)

export const Form = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M4 7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H16C17.8856 3 18.8284 3 19.4142 3.58579C20 4.17157 20 5.11438 20 7V15C20 17.8284 20 19.2426 19.1213 20.1213C18.2426 21 16.8284 21 14 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V7Z'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M15 18L15 21M9 18L9 21' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 8L15 8' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 12L15 12' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const FormDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5.29289 5.29289C5 5.58579 5 6.05719 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C5.91238 20.7408 6.34994 20.8853 7 20.9493V19.5C7 18.6716 7.67157 18 8.5 18C9.32843 18 10 18.6716 10 19.5V21H14V19.5C14 18.6716 14.6716 18 15.5 18C16.3284 18 17 18.6716 17 19.5V20.9493C17.6501 20.8853 18.0876 20.7408 18.4142 20.4142C19 19.8284 19 18.8856 19 17V7C19 6.05719 19 5.58579 18.7071 5.29289C18.4142 5 17.9428 5 17 5H7C6.05719 5 5.58579 5 5.29289 5.29289Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M8.5 9.5L15.5 9.5' stroke={color} strokeLinecap='round' />
    <path d='M8.5 12.5L12.5 12.5' stroke={color} strokeLinecap='round' />
    <path d='M8.5 15.5L14.5 15.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const FormDuotoneLine = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M4 7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H16C17.8856 3 18.8284 3 19.4142 3.58579C20 4.17157 20 5.11438 20 7V15C20 17.8284 20 19.2426 19.1213 20.1213C18.2426 21 16.8284 21 14 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V7Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M15 18L15 21M9 18L9 21' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M9 8L15 8' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M9 12L15 12' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const FormFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M3.58579 2.58579C3 3.17157 3 4.11438 3 6V16C3 18.8284 3 20.2426 3.87868 21.1213C4.51998 21.7626 5.44655 21.9359 7 21.9827V19C7 18.4477 7.44772 18 8 18C8.55228 18 9 18.4477 9 19L9 22H15V19C15 18.4477 15.4477 18 16 18C16.5523 18 17 18.4477 17 19L17 21.9827C18.5534 21.9359 19.48 21.7626 20.1213 21.1213C21 20.2426 21 18.8284 21 16V6C21 4.11438 21 3.17157 20.4142 2.58579C19.8284 2 18.8856 2 17 2H7C5.11438 2 4.17157 2 3.58579 2.58579ZM8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10H16C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8H8ZM8 14L16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12L8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z'
      fill={color}
    />
  </svg>
)

export const FormLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M4 7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H16C17.8856 3 18.8284 3 19.4142 3.58579C20 4.17157 20 5.11438 20 7V15C20 17.8284 20 19.2426 19.1213 20.1213C18.2426 21 16.8284 21 14 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V7Z'
      stroke={color}
    />
    <path d='M15 18L15 21M9 18L9 21' stroke={color} strokeLinecap='round' />
    <path d='M9 8L15 8' stroke={color} strokeLinecap='round' />
    <path d='M9 12L15 12' stroke={color} strokeLinecap='round' />
  </svg>
)

export const Order = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='5' y='4' width='14' height='17' rx='2' stroke={color} strokeWidth='2' />
    <path d='M9 9H15' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 13H15' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 17H13' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const OrderDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='5' y='3' width='14' height='18' rx='2' fill={color} fillOpacity='0.25' />
    <path d='M9.5 7.5L14.5 7.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 10.5L12.5 10.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 13.5L13.5 13.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 16.5L12.5 16.5' stroke={color} strokeLinecap='round' />
    <rect x='7' y='7' width='1' height='1' rx='0.5' fill={color} />
    <rect x='7' y='10' width='1' height='1' rx='0.5' fill={color} />
    <rect x='7' y='13' width='1' height='1' rx='0.5' fill={color} />
    <rect x='7' y='16' width='1' height='1' rx='0.5' fill={color} />
  </svg>
)

export const OrderDuotoneLine = ({
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
    <rect
      x='5'
      y='4'
      width='14'
      height='17'
      rx='2'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M9 9H15' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M9 13H15' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M9 17H13' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const OrderFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5.58579 4.58579C5 5.17157 5 6.11438 5 8V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V8C19 6.11438 19 5.17157 18.4142 4.58579C17.8284 4 16.8856 4 15 4H9C7.11438 4 6.17157 4 5.58579 4.58579ZM9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10H15C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8H9ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H9ZM9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H9Z'
      fill={color}
    />
  </svg>
)

export const OrderLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='5' y='4' width='14' height='17' rx='2' stroke={color} />
    <path d='M9 9H15' stroke={color} strokeLinecap='round' />
    <path d='M9 13H15' stroke={color} strokeLinecap='round' />
    <path d='M9 17H13' stroke={color} strokeLinecap='round' />
  </svg>
)

export const Paper = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M18 3.00001V3.00001C19.6569 3.00001 21 4.34315 21 6.00001L21 8.14286C21 8.47698 21 8.64405 20.9234 8.76602C20.8834 8.82962 20.8296 8.8834 20.766 8.92336C20.644 9 20.477 9 20.1429 9L15 9M18 3.00001V3.00001C16.3431 3.00001 15 4.34315 15 6.00001L15 9M18 3.00001L7 3.00001C5.11438 3.00001 4.17157 3.00001 3.58579 3.58579C3 4.17158 3 5.11439 3 7.00001L3 21L6 20L9 21L12 20L15 21L15 9'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M7 7L11 7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M8 11H7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M7 15L10 15' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const PaperAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M16 8V8C16.93 8 17.395 8 17.7765 8.10222C18.8117 8.37962 19.6204 9.18827 19.8978 10.2235C20 10.605 20 11.07 20 12V18C20 19.1046 19.1046 20 18 20V20C16.8954 20 16 19.1046 16 18V7.2C16 6.07989 16 5.51984 15.782 5.09202C15.5903 4.71569 15.2843 4.40973 14.908 4.21799C14.4802 4 13.9201 4 12.8 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H18'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M12 8H8V12H12V8Z' stroke={color} strokeWidth='2' strokeLinejoin='round' />
    <path d='M8 16H12' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const PaperAltLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M14.5 7.5H16.1C16.9401 7.5 17.3601 7.5 17.681 7.66349C17.9632 7.8073 18.1927 8.03677 18.3365 8.31901C18.5 8.63988 18.5 9.05992 18.5 9.9V17.5C18.5 18.6046 17.6046 19.5 16.5 19.5V19.5C15.3954 19.5 14.5 18.6046 14.5 17.5V7.7C14.5 6.57989 14.5 6.01984 14.282 5.59202C14.0903 5.21569 13.7843 4.90973 13.408 4.71799C12.9802 4.5 12.4201 4.5 11.3 4.5H7.7C6.57989 4.5 6.01984 4.5 5.59202 4.71799C5.21569 4.90973 4.90973 5.21569 4.71799 5.59202C4.5 6.01984 4.5 6.5799 4.5 7.7V16.3C4.5 17.4201 4.5 17.9802 4.71799 18.408C4.90973 18.7843 5.21569 19.0903 5.59202 19.282C6.01984 19.5 6.5799 19.5 7.7 19.5H16.5'
      stroke={color}
    />
    <path
      d='M11 6.5H8C7.53406 6.5 7.30109 6.5 7.11732 6.57612C6.87229 6.67761 6.67761 6.87229 6.57612 7.11732C6.5 7.30109 6.5 7.53406 6.5 8C6.5 8.46594 6.5 8.69891 6.57612 8.88268C6.67761 9.12771 6.87229 9.32239 7.11732 9.42388C7.30109 9.5 7.53406 9.5 8 9.5H11C11.4659 9.5 11.6989 9.5 11.8827 9.42388C12.1277 9.32239 12.3224 9.12771 12.4239 8.88268C12.5 8.69891 12.5 8.46594 12.5 8C12.5 7.53406 12.5 7.30109 12.4239 7.11732C12.3224 6.87229 12.1277 6.67761 11.8827 6.57612C11.6989 6.5 11.4659 6.5 11 6.5Z'
      stroke={color}
    />
  </svg>
)

export const PaperDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M15 8.21111L15 9L15 20.0657C15 20.477 15 20.6826 14.868 20.7533C14.7359 20.824 14.5648 20.7099 14.2226 20.4818L12.2773 19.1849C12.1429 19.0953 12.0757 19.0505 12 19.0505C11.9243 19.0505 11.8571 19.0953 11.7226 19.1849L9.27735 20.8151C9.14291 20.9047 9.07569 20.9495 9 20.9495C8.92431 20.9495 8.85709 20.9047 8.72265 20.8151L6.27735 19.1849C6.14291 19.0953 6.07569 19.0505 6 19.0505C5.92431 19.0505 5.85709 19.0953 5.72265 19.1849L3.77735 20.4818C3.43516 20.7099 3.26407 20.824 3.13204 20.7533C3 20.6826 3 20.477 3 20.0657L3 7.00001C3 5.11439 3 4.17158 3.58579 3.58579C4.17157 3.00001 5.11438 3.00001 7 3.00001L18 3.00001L17.6718 3.2188C16.3639 4.09073 15.71 4.5267 15.355 5.18998C15 5.85326 15 6.63921 15 8.21111Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6V8C21 8.55228 20.5523 9 20 9H15.5C15.2239 9 15 8.77614 15 8.5V6Z'
      fill={color}
    />
    <path d='M5.5 9.5L12.5 9.5' stroke={color} strokeLinecap='round' />
    <path d='M5.5 12.5L9.5 12.5' stroke={color} strokeLinecap='round' />
    <path d='M5.5 15.5L11.5 15.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const PaperDuotoneLine = ({
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
      d='M15 5.70501L15 9L15 21L12 20L9 21L6 20L3 21L3 6.48612C3 5.09488 3 4.39927 3.33103 3.89795C3.4798 3.67265 3.67264 3.4798 3.89794 3.33103C4.39926 3.00001 5.09488 3.00001 6.48611 3.00001L15.0995 3.00001C15.9684 3.00001 16.3096 4.12695 15.5866 4.60893C15.2201 4.85325 15 5.26456 15 5.70501Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M18 3.00001V3.00001C19.6569 3.00001 21 4.34315 21 6.00001L21 8.14286C21 8.47698 21 8.64405 20.9234 8.76602C20.8834 8.82962 20.8296 8.8834 20.766 8.92336C20.644 9 20.477 9 20.1429 9L15 9M18 3.00001V3.00001C16.3431 3.00001 15 4.34315 15 6.00001L15 9M18 3.00001L7 3.00001C5.11438 3.00001 4.17157 3.00001 3.58579 3.58579C3 4.17158 3 5.11439 3 7.00001L3 21L6 20L9 21L12 20L15 21L15 9'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M7 7L11 7' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M8 11H7' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M7 15L10 15' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const PaperFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M2 21V7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H16C16.8317 3 17.4778 3 18.0037 3.02706C15.7519 3.2741 14 5.18245 14 7.5V11.0002L13.9012 20.9671L11 20L8 21L5 20L2 21ZM21 11L16 11V7.5C16 6.11929 17.1193 5 18.5 5C19.8807 5 21 6.11929 21 7.5V11ZM4 7C4 6.44772 4.44772 6 5 6H11C11.5523 6 12 6.44772 12 7C12 7.55228 11.5523 8 11 8H5C4.44772 8 4 7.55228 4 7ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11C8 11.5523 7.55228 12 7 12H5C4.44772 12 4 11.5523 4 11ZM4 15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15C10 15.5523 9.55228 16 9 16H5C4.44772 16 4 15.5523 4 15Z'
      fill={color}
    />
  </svg>
)

export const PaperLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M18 3.00001V3.00001C19.6569 3.00001 21 4.34315 21 6.00001L21 8.14286C21 8.47698 21 8.64405 20.9234 8.76602C20.8834 8.82962 20.8296 8.8834 20.766 8.92336C20.644 9 20.477 9 20.1429 9L15 9M18 3.00001V3.00001C16.3431 3.00001 15 4.34315 15 6.00001L15 9M18 3.00001L7 3.00001C5.11438 3.00001 4.17157 3.00001 3.58579 3.58579C3 4.17158 3 5.11439 3 7.00001L3 21L6 20L9 21L12 20L15 21L15 9'
      stroke={color}
    />
    <path d='M7 7L11 7' stroke={color} strokeLinecap='round' />
    <path d='M8 11H7' stroke={color} strokeLinecap='round' />
    <path d='M7 15L10 15' stroke={color} strokeLinecap='round' />
  </svg>
)

export const Print = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M18.3529 14H19C19.9428 14 20.4142 14 20.7071 13.7071C21 13.4142 21 12.9428 21 12V11C21 9.11438 21 8.17157 20.4142 7.58579C19.8284 7 18.8856 7 17 7H7C5.11438 7 4.17157 7 3.58579 7.58579C3 8.17157 3 9.11438 3 11V13C3 13.4714 3 13.7071 3.14645 13.8536C3.29289 14 3.5286 14 4 14H5.64706'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M6 20.3063L6 12C6 11.0572 6 10.5858 6.29289 10.2929C6.58579 10 7.05719 10 8 10L16 10C16.9428 10 17.4142 10 17.7071 10.2929C18 10.5858 18 11.0572 18 12L18 20.3063C18 20.6228 18 20.7811 17.8962 20.856C17.7924 20.9308 17.6422 20.8807 17.3419 20.7806L15.1581 20.0527C15.0798 20.0266 15.0406 20.0135 15 20.0135C14.9594 20.0135 14.9202 20.0266 14.8419 20.0527L12.1581 20.9473C12.0798 20.9734 12.0406 20.9865 12 20.9865C11.9594 20.9865 11.9202 20.9734 11.8419 20.9473L9.15811 20.0527C9.07975 20.0266 9.04057 20.0135 9 20.0135C8.95943 20.0135 8.92025 20.0266 8.84189 20.0527L6.65811 20.7806C6.3578 20.8807 6.20764 20.9308 6.10382 20.856C6 20.7811 6 20.6228 6 20.3063Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M18 7V5.88C18 4.87191 18 4.36786 17.8038 3.98282C17.6312 3.64413 17.3559 3.36876 17.0172 3.19619C16.6321 3 16.1281 3 15.12 3H8.88C7.87191 3 7.36786 3 6.98282 3.19619C6.64413 3.36876 6.36876 3.64413 6.19619 3.98282C6 4.36786 6 4.87191 6 5.88V7'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M10 14L13 14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M10 17L14.5 17' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const PrintDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M4 10C4 8.11438 4 7.17157 4.58579 6.58579C5.17157 6 6.11438 6 8 6H16C17.8856 6 18.8284 6 19.4142 6.58579C20 7.17157 20 8.11438 20 10V12C20 12.9428 20 13.4142 19.7071 13.7071C19.4142 14 18.9428 14 18 14H17.3C17.1586 14 17.0879 14 17.0439 13.9561C17 13.9121 17 13.8414 17 13.7V13C17 12.0572 17 11.5858 16.7071 11.2929C16.4142 11 15.9428 11 15 11H9C8.05719 11 7.58579 11 7.29289 11.2929C7 11.5858 7 12.0572 7 13V13.7C7 13.8414 7 13.9121 6.95607 13.9561C6.91213 14 6.84142 14 6.7 14H5C4.5286 14 4.29289 14 4.14645 13.8536C4 13.7071 4 13.4714 4 13V10Z'
      fill={color}
    />
    <path
      d='M7 20.2615L7 13C7 12.0572 7 11.5858 7.29289 11.2929C7.58579 11 8.05719 11 9 11L15 11C15.9428 11 16.4142 11 16.7071 11.2929C17 11.5858 17 12.0572 17 13L17 20.2615C17 20.5961 17 20.7634 16.8902 20.8378C16.7803 20.9121 16.625 20.85 16.3143 20.7257L14.6857 20.0743C14.594 20.0376 14.5481 20.0193 14.5 20.0193C14.4519 20.0193 14.406 20.0376 14.3143 20.0743L12.1857 20.9257C12.094 20.9624 12.0481 20.9807 12 20.9807C11.9519 20.9807 11.906 20.9624 11.8143 20.9257L9.6857 20.0743C9.594 20.0376 9.54815 20.0193 9.5 20.0193C9.45185 20.0193 9.406 20.0376 9.3143 20.0743L7.6857 20.7257C7.37502 20.85 7.21969 20.9121 7.10984 20.8378C7 20.7634 7 20.5961 7 20.2615Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M9.5 14.5L13.5 14.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 17.5L14.5 17.5' stroke={color} strokeLinecap='round' />
    <path
      d='M7 4.73913C7 4.04725 7 3.70131 7.16382 3.45155C7.23899 3.33693 7.33693 3.23899 7.45155 3.16382C7.70131 3 8.04725 3 8.73913 3H15.2609C15.9528 3 16.2987 3 16.5485 3.16382C16.6631 3.23899 16.761 3.33693 16.8362 3.45155C17 3.70131 17 4.04725 17 4.73913C17 4.84291 17 4.8948 16.9754 4.93227C16.9642 4.94946 16.9495 4.96415 16.9323 4.97543C16.8948 5 16.8429 5 16.7391 5H7.26087C7.15709 5 7.1052 5 7.06773 4.97543C7.05054 4.96415 7.03585 4.94946 7.02457 4.93227C7 4.8948 7 4.84291 7 4.73913Z'
      fill={color}
    />
  </svg>
)

export const PrintDuotoneLine = ({
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
      d='M6.5 19.8063L6.5 11.5C6.5 10.5572 6.5 10.0858 6.79289 9.79289C7.08579 9.5 7.55719 9.5 8.5 9.5L15.5 9.5C16.4428 9.5 16.9142 9.5 17.2071 9.79289C17.5 10.0858 17.5 10.5572 17.5 11.5L17.5 19.8063C17.5 20.1228 17.5 20.2811 17.3962 20.356C17.2924 20.4308 17.1422 20.3807 16.8419 20.2806L14.6738 19.5579C14.5878 19.5293 14.5448 19.5149 14.5005 19.5162C14.4561 19.5175 14.4141 19.5344 14.3299 19.568L12.1857 20.4257C12.094 20.4624 12.0481 20.4807 12 20.4807C11.9519 20.4807 11.906 20.4624 11.8143 20.4257L9.67005 19.568C9.58592 19.5344 9.54385 19.5175 9.49952 19.5162C9.45519 19.5149 9.41221 19.5293 9.32625 19.5579L7.15811 20.2806C6.8578 20.3807 6.70764 20.4308 6.60382 20.356C6.5 20.2811 6.5 20.1228 6.5 19.8063Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
    />
    <rect x='6.5' y='2.5' width='11' height='4' rx='1' fill={color} fillOpacity='0.25' />
    <path
      d='M18 13.5H18.5C19.4428 13.5 19.9142 13.5 20.2071 13.2071C20.5 12.9142 20.5 12.4428 20.5 11.5V10.5C20.5 8.61438 20.5 7.67157 19.9142 7.08579C19.3284 6.5 18.3856 6.5 16.5 6.5H7.5C5.61438 6.5 4.67157 6.5 4.08579 7.08579C3.5 7.67157 3.5 8.61438 3.5 10.5V12.5C3.5 12.9714 3.5 13.2071 3.64645 13.3536C3.79289 13.5 4.0286 13.5 4.5 13.5H6'
      stroke={color}
    />
    <path d='M9.5 13.5L13.5 13.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 16.5L14.5 16.5' stroke={color} strokeLinecap='round' />
    <path
      d='M17.5 6.5V6.1C17.5 4.40294 17.5 3.55442 16.9728 3.02721C16.4456 2.5 15.5971 2.5 13.9 2.5H10.1C8.40294 2.5 7.55442 2.5 7.02721 3.02721C6.5 3.55442 6.5 4.40294 6.5 6.1V6.5'
      stroke={color}
    />
  </svg>
)

export const PrintFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M18 6H6C4.11438 6 3.17157 6 2.58579 6.58579C2 7.17157 2 8.11438 2 10V13C2 13.4714 2 13.7071 2.14645 13.8536C2.29289 14 2.5286 14 3 14H7.7C7.84142 14 7.91213 14 7.95607 13.9561C8 13.9121 8 13.8414 8 13.7V13.5C8 12.5572 8 12.0858 8.29289 11.7929C8.58579 11.5 9.05719 11.5 10 11.5H14C14.9428 11.5 15.4142 11.5 15.7071 11.7929C16 12.0858 16 12.5572 16 13.5V13.7C16 13.8414 16 13.9121 16.0439 13.9561C16.0879 14 16.1586 14 16.3 14H20C20.9428 14 21.4142 14 21.7071 13.7071C22 13.4142 22 12.9428 22 12V10C22 8.11438 22 7.17157 21.4142 6.58579C20.8284 6 19.8856 6 18 6Z'
      fill={color}
    />
    <path
      d='M7 3.73913C7 3.04725 7 2.70131 7.16382 2.45155C7.23899 2.33693 7.33693 2.23899 7.45155 2.16382C7.70131 2 8.04725 2 8.73913 2H15.2609C15.9528 2 16.2987 2 16.5485 2.16382C16.6631 2.23899 16.761 2.33693 16.8362 2.45155C17 2.70131 17 3.04725 17 3.73913C17 3.84291 17 3.8948 16.9754 3.93227C16.9642 3.94946 16.9495 3.96415 16.9323 3.97543C16.8948 4 16.8429 4 16.7391 4H7.26087C7.15709 4 7.1052 4 7.06773 3.97543C7.05054 3.96415 7.03585 3.94946 7.02457 3.93227C7 3.8948 7 3.84291 7 3.73913Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5 20.3371V13C5 12.0572 5 11.5858 5.29289 11.2929C5.58579 11 6.05719 11 7 11L17 11H17C17.9428 11 18.4142 11 18.7071 11.2929C19 11.5858 19 12.0572 19 13V20.3371C19 20.6411 19 20.7931 18.9005 20.8682C18.8011 20.9432 18.655 20.9014 18.3627 20.8179L18.3626 20.8179L18.3626 20.8179L15.6374 20.0392C15.5691 20.0197 15.535 20.01 15.5 20.01C15.465 20.01 15.4309 20.0197 15.3626 20.0392L12.1374 20.9608C12.0691 20.9802 12.035 20.99 12 20.99C11.965 20.99 11.9309 20.9802 11.8626 20.9608L8.63736 20.0392C8.56913 20.0197 8.53501 20.01 8.5 20.01C8.46499 20.01 8.43087 20.0197 8.36264 20.0392L5.63736 20.8179L5.63735 20.8179L5.63734 20.8179C5.34505 20.9014 5.1989 20.9432 5.09945 20.8682C5 20.7931 5 20.6411 5 20.3371ZM9 14C9 13.4477 9.44772 13 10 13L13 13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15L10 15C9.44772 15 9 14.5523 9 14ZM10 16C9.44772 16 9 16.4477 9 17C9 17.5523 9.44772 18 10 18L14.5 18C15.0523 18 15.5 17.5523 15.5 17C15.5 16.4477 15.0523 16 14.5 16L10 16Z'
      fill={color}
    />
  </svg>
)

export const PrintLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M18 13.5H18.5C19.4428 13.5 19.9142 13.5 20.2071 13.2071C20.5 12.9142 20.5 12.4428 20.5 11.5V10.5C20.5 8.61438 20.5 7.67157 19.9142 7.08579C19.3284 6.5 18.3856 6.5 16.5 6.5H7.5C5.61438 6.5 4.67157 6.5 4.08579 7.08579C3.5 7.67157 3.5 8.61438 3.5 10.5V12.5C3.5 12.9714 3.5 13.2071 3.64645 13.3536C3.79289 13.5 4.0286 13.5 4.5 13.5H6'
      stroke={color}
    />
    <path
      d='M6.5 19.8063L6.5 11.5C6.5 10.5572 6.5 10.0858 6.79289 9.79289C7.08579 9.5 7.55719 9.5 8.5 9.5L15.5 9.5C16.4428 9.5 16.9142 9.5 17.2071 9.79289C17.5 10.0858 17.5 10.5572 17.5 11.5L17.5 19.8063C17.5 20.1228 17.5 20.2811 17.3962 20.356C17.2924 20.4308 17.1422 20.3807 16.8419 20.2806L14.6738 19.5579C14.5878 19.5293 14.5448 19.5149 14.5005 19.5162C14.4561 19.5175 14.4141 19.5344 14.3299 19.568L12.1857 20.4257C12.094 20.4624 12.0481 20.4807 12 20.4807C11.9519 20.4807 11.906 20.4624 11.8143 20.4257L9.67005 19.568C9.58592 19.5344 9.54385 19.5175 9.49952 19.5162C9.45519 19.5149 9.41221 19.5293 9.32625 19.5579L7.15811 20.2806C6.8578 20.3807 6.70764 20.4308 6.60382 20.356C6.5 20.2811 6.5 20.1228 6.5 19.8063Z'
      stroke={color}
    />
    <path d='M9.5 13.5L13.5 13.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 16.5L14.5 16.5' stroke={color} strokeLinecap='round' />
    <path
      d='M17.5 6.5V6.1C17.5 4.40294 17.5 3.55442 16.9728 3.02721C16.4456 2.5 15.5971 2.5 13.9 2.5H10.1C8.40294 2.5 7.55442 2.5 7.02721 3.02721C6.5 3.55442 6.5 4.40294 6.5 6.1V6.5'
      stroke={color}
    />
  </svg>
)

export const Notebook = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='6' y='4' width='13' height='17' rx='2' stroke={color} strokeWidth='2' />
    <path d='M15 10V8' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M4 9H8' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M4 13H8' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M4 17H8' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const NotebookDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M3.5 7.5H7.5' stroke={color} strokeLinecap='round' />
    <path d='M3.5 15.5H7.5' stroke={color} strokeLinecap='round' />
    <path d='M3.5 11.5H7.5' stroke={color} strokeLinecap='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.01071 5.6954C5.00666 5.83786 5.00463 5.9091 5.04881 5.95455C5.09299 6 5.1649 6 5.30872 6H7.5C8.32843 6 9 6.67157 9 7.5C9 8.32843 8.32843 9 7.5 9H5.3C5.15858 9 5.08787 9 5.04393 9.04393C5 9.08787 5 9.15858 5 9.3V9.7C5 9.84142 5 9.91213 5.04393 9.95607C5.08787 10 5.15858 10 5.3 10H7.5C8.32843 10 9 10.6716 9 11.5C9 12.3284 8.32843 13 7.5 13H5.3C5.15858 13 5.08787 13 5.04393 13.0439C5 13.0879 5 13.1586 5 13.3V13.7C5 13.8414 5 13.9121 5.04393 13.9561C5.08787 14 5.15858 14 5.3 14H7.5C8.32843 14 9 14.6716 9 15.5C9 16.3284 8.32843 17 7.5 17H5.3C5.15852 17 5.08777 17 5.04383 17.044C4.99989 17.088 4.99996 17.1588 5.0001 17.3005C5.00175 18.9875 5.03198 19.8604 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V7C19 5.11438 19 4.17157 18.4142 3.58579C17.8284 3 16.8856 3 15 3H9C7.11438 3 6.17157 3 5.58579 3.58579C5.15431 4.01726 5.04065 4.64243 5.01071 5.6954Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M15.5 10.5V7.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const NotebookDuotoneLine = ({
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
    <rect
      x='6'
      y='4'
      width='13'
      height='17'
      rx='2'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M15 10V8' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M4 9H8' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M4 13H8' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M4 17H8' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const NotebookFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7.0508 6H9.00005C10.1046 6 11 6.89543 11 8C11 9.10457 10.1046 10 9.00005 10H7.00005V11H9.00005C10.1046 11 11 11.8954 11 13C11 14.1046 10.1046 15 9.00005 15H7.00005V16H9.00005C10.1046 16 11 16.8954 11 18C11 19.1046 10.1046 20 9.00005 20H7.29248C7.36869 20.1568 7.46475 20.2931 7.58584 20.4142C8.17162 21 9.11443 21 11 21H16C17.8857 21 18.8285 21 19.4143 20.4142C20 19.8284 20 18.8856 20 17V8C20 6.11438 20 5.17157 19.4143 4.58579C18.8285 4 17.8857 4 16 4H11C9.11443 4 8.17162 4 7.58584 4.58579C7.25924 4.91238 7.11474 5.34994 7.0508 6ZM16 11C15.4477 11 15 10.5523 15 10V8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8V10C17 10.5523 16.5523 11 16 11ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7H5ZM5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14H9C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12H5ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H9C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17H5Z'
      fill={color}
    />
  </svg>
)

export const NotebookLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='6' y='4' width='13' height='17' rx='2' stroke={color} />
    <path d='M15 10V8' stroke={color} strokeLinecap='round' />
    <path d='M4 9H8' stroke={color} strokeLinecap='round' />
    <path d='M4 13H8' stroke={color} strokeLinecap='round' />
    <path d='M4 17H8' stroke={color} strokeLinecap='round' />
  </svg>
)
