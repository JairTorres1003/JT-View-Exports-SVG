import React from 'react'

import { type IconComponentProps } from './types'

export const CompasMini: React.FC<IconComponentProps> = ({
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
      d='M18.5397 7.7619L17.7046 12.7726C17.2831 15.3014 15.3014 17.2831 12.7726 17.7046L7.7619 18.5397C6.40826 18.7653 5.23471 17.5917 5.46032 16.2381L6.29543 11.2274C6.71691 8.69856 8.69856 6.71691 11.2274 6.29543L16.2381 5.46032C17.5917 5.23471 18.7653 6.40826 18.5397 7.7619Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <circle cx='12' cy='12' r='2' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const CompasMiniDuotone: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.7845 14.0777L20.4117 5.94175C20.6915 4.5423 19.4577 3.30846 18.0583 3.58835L9.92233 5.21554C7.54716 5.69057 5.69057 7.54716 5.21554 9.92233L3.58835 18.0583C3.30846 19.4577 4.5423 20.6915 5.94175 20.4117L14.0777 18.7845C16.4528 18.3094 18.3094 16.4528 18.7845 14.0777ZM12 16.9996C14.7614 16.9996 17 14.761 17 11.9996C17 9.23815 14.7614 6.99957 12 6.99957C9.23858 6.99957 7 9.23815 7 11.9996C7 14.761 9.23858 16.9996 12 16.9996Z'
      fill={color}
      fillOpacity='0.25'
    />
    <circle cx='12' cy='12' r='2' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const CompasMiniDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M18.5397 7.7619L17.7046 12.7726C17.2831 15.3014 15.3014 17.2831 12.7726 17.7046L7.7619 18.5397C6.40826 18.7653 5.23471 17.5917 5.46032 16.2381L6.29543 11.2274C6.71691 8.69856 8.69856 6.71691 11.2274 6.29543L16.2381 5.46032C17.5917 5.23471 18.7653 6.40826 18.5397 7.7619Z'
      stroke={color}
      strokeLinecap='round'
    />
    <circle cx='12' cy='12' r='2.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
  </svg>
)

export const CompasMiniFill: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.7845 14.0777L20.4117 5.94175C20.6915 4.5423 19.4577 3.30846 18.0583 3.58835L9.92233 5.21554C7.54716 5.69057 5.69057 7.54716 5.21554 9.92233L3.58835 18.0583C3.30846 19.4577 4.5423 20.6915 5.94175 20.4117L14.0777 18.7845C16.4528 18.3094 18.3094 16.4528 18.7845 14.0777ZM14.0001 11.9996C14.0001 13.1041 13.1046 13.9996 12.0001 13.9996C10.8955 13.9996 10.0001 13.1041 10.0001 11.9996C10.0001 10.895 10.8955 9.99957 12.0001 9.99957C13.1046 9.99957 14.0001 10.895 14.0001 11.9996ZM16.0001 11.9996C16.0001 14.2087 14.2092 15.9996 12.0001 15.9996C9.79092 15.9996 8.00006 14.2087 8.00006 11.9996C8.00006 9.79043 9.79092 7.99957 12.0001 7.99957C14.2092 7.99957 16.0001 9.79043 16.0001 11.9996Z'
      fill={color}
    />
  </svg>
)

export const CompasMiniLight: React.FC<IconComponentProps> = ({
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
      d='M18.5397 7.7619L17.7046 12.7726C17.2831 15.3014 15.3014 17.2831 12.7726 17.7046L7.7619 18.5397C6.40826 18.7653 5.23471 17.5917 5.46032 16.2381L6.29543 11.2274C6.71691 8.69856 8.69856 6.71691 11.2274 6.29543L16.2381 5.46032C17.5917 5.23471 18.7653 6.40826 18.5397 7.7619Z'
      stroke={color}
      strokeLinecap='round'
    />
    <circle cx='12' cy='12' r='2.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const CompassAlt: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='9' stroke={color} strokeWidth='2' />
    <path
      d='M8.52302 8.58442L9.99248 13.9724C9.99714 13.9895 10.0105 14.0029 10.0276 14.0075L15.4156 15.477C15.4529 15.4872 15.4872 15.4529 15.477 15.4156L14.0075 10.0276C14.0029 10.0105 13.9895 9.99714 13.9724 9.99248L8.58442 8.52302C8.54709 8.51284 8.51284 8.54709 8.52302 8.58442Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M13 11L11 13' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const CompassAltFill: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.33421 9.33457L10.0686 12.5169L12.5165 10.0689L9.33421 9.33457ZM14.6659 14.6662L11.4823 13.9316L13.9312 11.4827L14.6659 14.6662ZM7.04364 8.30322C6.86916 7.54714 7.54677 6.86952 8.30285 7.044L14.6944 8.51899C15.0857 8.60927 15.3912 8.91476 15.4815 9.306L16.9564 15.6976C17.1309 16.4537 16.4533 17.1313 15.6972 16.9568L9.30563 15.4818C8.9144 15.3915 8.60891 15.086 8.51862 14.6948L7.04364 8.30322Z'
      fill={color}
    />
  </svg>
)

export const CompassAltLightOne: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='9.5' stroke={color} />
    <path d='M18.5 12H19.5' stroke={color} strokeLinecap='round' />
    <path d='M4.5 12H5.5M12 4.5V5.5M12 18.5V19.5' stroke={color} strokeLinecap='round' />
    <path
      d='M7.04924 7.11489L9.36973 12.5294C9.77433 13.4734 10.5266 14.2257 11.4706 14.6303L16.8851 16.9508C16.9266 16.9685 16.9685 16.9266 16.9508 16.8851L14.6303 11.4706C14.2257 10.5266 13.4734 9.77433 12.5294 9.36973L7.11489 7.04924C7.07341 7.03146 7.03146 7.07341 7.04924 7.11489Z'
      stroke={color}
      strokeLinecap='round'
    />
    <circle cx='12' cy='12' r='2.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const CompassAltLightTwo: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='9.5' stroke={color} />
    <path
      d='M8.54333 8.60832L10.492 13.4801C10.4971 13.4928 10.5072 13.5029 10.5199 13.508L15.3917 15.4567C15.4325 15.473 15.473 15.4325 15.4567 15.3917L13.508 10.5199C13.5029 10.5072 13.4928 10.4971 13.4801 10.492L8.60832 8.54333C8.56751 8.527 8.527 8.56751 8.54333 8.60832Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M13 11L11 13' stroke={color} strokeLinecap='round' />
    <path
      d='M10.5 7.5V4.62071C10.5 4.57617 10.5539 4.55386 10.5854 4.58536L13.4146 7.41464C13.4461 7.44614 13.5 7.42383 13.5 7.37929V4.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M13.5 16.5H11.0811C10.7602 16.5 10.5 16.7602 10.5 17.0811V17.0811C10.5 17.3313 10.6601 17.5534 10.8974 17.6325L13.1026 18.3675C13.3399 18.4466 13.5 18.6687 13.5 18.9189V18.9189C13.5 19.2398 13.2398 19.5 12.9189 19.5H10.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const CompassAltLight: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='9.5' stroke={color} />
    <circle cx='12' cy='12' r='7.5' stroke={color} />
    <path d='M4.5 12H6.5' stroke={color} strokeLinecap='round' />
    <path d='M17.5 12H19.5' stroke={color} strokeLinecap='round' />
    <path d='M12 4.5V6.5' stroke={color} strokeLinecap='round' />
    <path d='M12 17.5V19.5' stroke={color} strokeLinecap='round' />
    <path
      d='M8.54333 8.60832L10.492 13.4801C10.4971 13.4928 10.5072 13.5029 10.5199 13.508L15.3917 15.4567C15.4325 15.473 15.473 15.4325 15.4567 15.3917L13.508 10.5199C13.5029 10.5072 13.4928 10.4971 13.4801 10.492L8.60832 8.54333C8.56751 8.527 8.527 8.56751 8.54333 8.60832Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M13 11L11 13' stroke={color} strokeLinecap='round' />
  </svg>
)

export const CompassNorth: React.FC<IconComponentProps> = ({
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
      d='M6.19957 20.6341L11.8683 10.2414C11.9252 10.1372 12.0748 10.1372 12.1317 10.2414L17.8004 20.6341C17.8677 20.7575 17.7436 20.8974 17.613 20.8452L13.077 19.0308C13.0291 19.0116 12.9944 18.9692 12.9852 18.9184L12.1476 14.3117C12.1177 14.1475 11.8823 14.1475 11.8524 14.3117L11.0148 18.9184C11.0056 18.9692 10.9709 19.0116 10.923 19.0308L6.38697 20.8452C6.25644 20.8974 6.13226 20.7575 6.19957 20.6341Z'
      fill={color}
    />
    <path
      d='M9 9V3.12071C9 3.07617 9.05386 3.05386 9.08536 3.08536L14.9146 8.91465C14.9461 8.94614 15 8.92383 15 8.87929V3'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const CompassNorthDuotoneOne: React.FC<IconComponentProps> = ({
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
      d='M7.55772 20.3781L11.9548 11.0954C11.9729 11.0573 12.0271 11.0573 12.0452 11.0954L16.4423 20.3781C16.4621 20.4201 16.4192 20.4641 16.3768 20.4452L12.0203 18.509C12.0074 18.5033 11.9926 18.5033 11.9797 18.509L7.62322 20.4452C7.58083 20.4641 7.53787 20.4201 7.55772 20.3781Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M12 11.5V18.5' stroke={color} />
    <path
      d='M10.5 8.5V3.68052C10.5 3.6298 10.5668 3.61131 10.5929 3.65479L13.4071 8.34521C13.4332 8.38869 13.5 8.3702 13.5 8.31948V3.5'
      stroke={color}
      strokeOpacity='0.25'
      strokeLinecap='round'
    />
  </svg>
)

export const CompassNorthDuotone: React.FC<IconComponentProps> = ({
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
      d='M10.5 8.5V3.68052C10.5 3.6298 10.5668 3.61131 10.5929 3.65479L13.4071 8.34521C13.4332 8.38869 13.5 8.3702 13.5 8.31948V3.5'
      stroke={color}
      strokeOpacity='0.25'
      strokeLinecap='round'
    />
    <path
      d='M6.19957 20.6341L11.8683 10.2414C11.9252 10.1372 12.0748 10.1372 12.1317 10.2414L17.8004 20.6341C17.8677 20.7575 17.7436 20.8974 17.613 20.8452L13.077 19.0308C13.0291 19.0116 12.9944 18.9692 12.9852 18.9184L12.1476 14.3117C12.1177 14.1475 11.8823 14.1475 11.8524 14.3117L11.0148 18.9184C11.0056 18.9692 10.9709 19.0116 10.923 19.0308L6.38697 20.8452C6.25644 20.8974 6.13226 20.7575 6.19957 20.6341Z'
      fill={color}
    />
  </svg>
)

export const CompassNorthFill: React.FC<IconComponentProps> = ({
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
      d='M9 9V3.12071C9 3.07617 9.05386 3.05386 9.08536 3.08536L14.9146 8.91465C14.9461 8.94614 15 8.92383 15 8.87929V3'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M7.05881 20.8824L11.9553 11.0894C11.9737 11.0526 12.0263 11.0526 12.0447 11.0894L16.9412 20.8824C16.9617 20.9235 16.9206 20.9682 16.8779 20.9512L12.0186 19.0074C12.0066 19.0027 11.9934 19.0027 11.9814 19.0074L7.1221 20.9512C7.07942 20.9682 7.03825 20.9235 7.05881 20.8824Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M12 12L12 19' stroke={color} strokeWidth='2' />
  </svg>
)

export const CompassNorthLight: React.FC<IconComponentProps> = ({
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
      d='M7.55772 20.3781L11.9548 11.0954C11.9729 11.0573 12.0271 11.0573 12.0452 11.0954L16.4423 20.3781C16.4621 20.4201 16.4192 20.4641 16.3768 20.4452L12.0203 18.509C12.0074 18.5033 11.9926 18.5033 11.9797 18.509L7.62322 20.4452C7.58083 20.4641 7.53787 20.4201 7.55772 20.3781Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M12 11.5V18.5' stroke={color} />
    <path
      d='M10.5 8.5V3.68052C10.5 3.6298 10.5668 3.61131 10.5929 3.65479L13.4071 8.34521C13.4332 8.38869 13.5 8.3702 13.5 8.31948V3.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const Direction: React.FC<IconComponentProps> = ({
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
      d='M6.99997 8L11.1213 12.1213C11.6839 12.6839 12 13.447 12 14.2426V16M6.99997 8H9.99997M6.99997 8V11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M17 8L12.8787 12.1213C12.3161 12.6839 12 13.447 12 14.2426V16M17 8H14M17 8V11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DirectionAlt: React.FC<IconComponentProps> = ({
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
      d='M17.5 9H15C13.3431 9 12 10.3431 12 12V16M17.5 9L16 7M17.5 9L16 11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M6.5 9H9.00002C10.6569 9 12 10.3431 12 12V16M6.5 9L8 7M6.5 9L8 11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DirectionAlt2: React.FC<IconComponentProps> = ({
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
      d='M7 9L11.1213 13.1213C11.6839 13.6839 12 14.447 12 15.2426V17M7 9H10M7 9V12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M17 9L12.8787 13.1213C12.3161 13.6839 12 14.447 12 15.2426V20M17 9H14M17 9V12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M16 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V14.2C3 15.8802 3 16.7202 3.32698 17.362C3.6146 17.9265 4.07354 18.3854 4.63803 18.673C5.27976 19 6.11984 19 7.8 19H8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DirectionAlt2Duotone: React.FC<IconComponentProps> = ({
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
      d='M2 8.8C2 7.11984 2 6.27976 2.32698 5.63803C2.6146 5.07354 3.07354 4.6146 3.63803 4.32698C4.27976 4 5.11984 4 6.8 4H17.2C18.8802 4 19.7202 4 20.362 4.32698C20.9265 4.6146 21.3854 5.07354 21.673 5.63803C22 6.27976 22 7.11984 22 8.8V15.2C22 16.8802 22 17.7202 21.673 18.362C21.3854 18.9265 20.9265 19.3854 20.362 19.673C19.7202 20 18.8802 20 17.2 20H6.8C5.11984 20 4.27976 20 3.63803 19.673C3.07354 19.3854 2.6146 18.9265 2.32698 18.362C2 17.7202 2 16.8802 2 15.2V8.8Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M7 9L11.1213 13.1213C11.6839 13.6839 12 14.447 12 15.2426M7 9H10M7 9V12M12 15.2426V17M12 15.2426L12 20M12 15.2426C12 14.447 12.3161 13.6839 12.8787 13.1213L17 9M17 9H14M17 9V12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DirectionAlt2DuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M16 18.5H18.3C19.4201 18.5 19.9802 18.5 20.408 18.282C20.7843 18.0903 21.0903 17.7843 21.282 17.408C21.5 16.9802 21.5 16.4201 21.5 15.3V8.7C21.5 7.57989 21.5 7.01984 21.282 6.59202C21.0903 6.21569 20.7843 5.90973 20.408 5.71799C19.9802 5.5 19.4201 5.5 18.3 5.5H5.7C4.5799 5.5 4.01984 5.5 3.59202 5.71799C3.21569 5.90973 2.90973 6.21569 2.71799 6.59202C2.5 7.01984 2.5 7.57989 2.5 8.7V15.3C2.5 16.4201 2.5 16.9802 2.71799 17.408C2.90973 17.7843 3.21569 18.0903 3.59202 18.282C4.01984 18.5 4.57989 18.5 5.7 18.5H8'
      stroke={color}
      strokeOpacity='0.25'
      strokeLinecap='round'
    />
    <path
      d='M6.5 9.5L11.1213 14.1213C11.6839 14.6839 12 15.447 12 16.2426V18M6.5 9.5H8.5M6.5 9.5V11.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.5 9.5L12.8787 14.1213C12.3161 14.6839 12 15.447 12 16.2426V20M17.5 9.5H15.5M17.5 9.5V11.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const DirectionAlt2Fill: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20L11 20L11 15.2426C11 14.7122 10.7893 14.2035 10.4142 13.8284L9.15302 12.5672L8 11.4142V12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12V9V8H7H10C10.5523 8 11 8.44772 11 9C11 9.55228 10.5523 10 10 10H9.41422L11.8284 12.4142C11.8877 12.4735 11.9449 12.5344 12 12.5969C12.0551 12.5344 12.1123 12.4735 12.1716 12.4142L14.5858 10H14C13.4477 10 13 9.55228 13 9C13 8.44772 13.4477 8 14 8H17H18V9V12C18 12.5523 17.5523 13 17 13C16.4477 13 16 12.5523 16 12V11.4142L13.5858 13.8284C13.2107 14.2035 13 14.7122 13 15.2426V15.2427V17L13 17.0056L13 20L17.2 20C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803Z'
      fill={color}
    />
  </svg>
)

export const DirectionAlt2Light: React.FC<IconComponentProps> = ({
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
      d='M16 18.5H18.3C19.4201 18.5 19.9802 18.5 20.408 18.282C20.7843 18.0903 21.0903 17.7843 21.282 17.408C21.5 16.9802 21.5 16.4201 21.5 15.3V8.7C21.5 7.57989 21.5 7.01984 21.282 6.59202C21.0903 6.21569 20.7843 5.90973 20.408 5.71799C19.9802 5.5 19.4201 5.5 18.3 5.5H5.7C4.5799 5.5 4.01984 5.5 3.59202 5.71799C3.21569 5.90973 2.90973 6.21569 2.71799 6.59202C2.5 7.01984 2.5 7.57989 2.5 8.7V15.3C2.5 16.4201 2.5 16.9802 2.71799 17.408C2.90973 17.7843 3.21569 18.0903 3.59202 18.282C4.01984 18.5 4.57989 18.5 5.7 18.5H8'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M6.5 9.5L11.1213 14.1213C11.6839 14.6839 12 15.447 12 16.2426V18M6.5 9.5H8.5M6.5 9.5V11.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.5 9.5L12.8787 14.1213C12.3161 14.6839 12 15.447 12 16.2426V20M17.5 9.5H15.5M17.5 9.5V11.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const DirectionAlt3: React.FC<IconComponentProps> = ({
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
      d='M17 13L12.8787 17.1213C12.3161 17.6839 12 18.447 12 19.2426V20M17 13H15L17 15V13Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 13L11.1213 17.1213C11.6839 17.6839 12 18.447 12 19.2426V20M7 13H9L7 15V13Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 8.5V17V20M12 8.5L13.5 10H10.5L12 8.5Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V14.2C3 15.8802 3 16.7202 3.32698 17.362C3.6146 17.9265 4.07354 18.3854 4.63803 18.673C5.27976 19 6.11984 19 7.8 19H8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DirectionAlt3Duotone: React.FC<IconComponentProps> = ({
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
      d='M2 8.8C2 7.11984 2 6.27976 2.32698 5.63803C2.6146 5.07354 3.07354 4.6146 3.63803 4.32698C4.27976 4 5.11984 4 6.8 4H17.2C18.8802 4 19.7202 4 20.362 4.32698C20.9265 4.6146 21.3854 5.07354 21.673 5.63803C22 6.27976 22 7.11984 22 8.8V15.2C22 16.8802 22 17.7202 21.673 18.362C21.3854 18.9265 20.9265 19.3854 20.362 19.673C19.7202 20 18.8802 20 17.2 20H6.8C5.11984 20 4.27976 20 3.63803 19.673C3.07354 19.3854 2.6146 18.9265 2.32698 18.362C2 17.7202 2 16.8802 2 15.2V8.8Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M16 14L12.8787 17.1213C12.3161 17.6839 12 18.447 12 19.2426M16 14L17 13M16 14L17 15V13M16 14L15 13H17M12 19.2426V20L12 10M12 19.2426C12 18.447 11.6839 17.6839 11.1213 17.1213L8 14M8 14L7 13M8 14L9 13H7M8 14L7 15V13M12 10V8.5M12 10H13.5L12 8.5M12 10H10.5L12 8.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const DirectionAlt3DuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M16 18.5H18.3C19.4201 18.5 19.9802 18.5 20.408 18.282C20.7843 18.0903 21.0903 17.7843 21.282 17.408C21.5 16.9802 21.5 16.4201 21.5 15.3V8.7C21.5 7.57989 21.5 7.01984 21.282 6.59202C21.0903 6.21569 20.7843 5.90973 20.408 5.71799C19.9802 5.5 19.4201 5.5 18.3 5.5H5.7C4.5799 5.5 4.01984 5.5 3.59202 5.71799C3.21569 5.90973 2.90973 6.21569 2.71799 6.59202C2.5 7.01984 2.5 7.57989 2.5 8.7V15.3C2.5 16.4201 2.5 16.9802 2.71799 17.408C2.90973 17.7843 3.21569 18.0903 3.59202 18.282C4.01984 18.5 4.57989 18.5 5.7 18.5H8'
      stroke={color}
      strokeOpacity='0.25'
      strokeLinecap='round'
    />
    <path
      d='M6.5 12.5L11.1213 17.1213C11.6839 17.6839 12 18.447 12 19.2426V20.5M6.5 12.5H8.5M6.5 12.5V14.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.5 12.5L12.8787 17.1213C12.3161 17.6839 12 18.447 12 19.2426V20.5M17.5 12.5H15.5M17.5 12.5V14.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 8.5V19M12 8.5L10.5 10M12 8.5L13.5 10'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const DirectionAlt3Fill: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20L11 20V19.2426C11 18.7122 10.7893 18.2035 10.4142 17.8284L8 15.4142L7.70711 15.7071C7.42111 15.9931 6.99099 16.0787 6.61732 15.9239C6.24364 15.7691 6 15.4045 6 15V13C6 12.4477 6.44772 12 7 12H9C9.40446 12 9.7691 12.2436 9.92388 12.6173C10.0787 12.991 9.9931 13.4211 9.70711 13.7071L9.41422 14L11 15.5858L11 11H10.5C10.0955 11 9.7309 10.7564 9.57612 10.3827C9.42134 10.009 9.5069 9.57889 9.7929 9.29289L11.2929 7.79289C11.4805 7.60535 11.7348 7.5 12 7.5C12.2652 7.5 12.5196 7.60536 12.7071 7.7929L14.2071 9.2929C14.4931 9.5789 14.5787 10.009 14.4239 10.3827C14.2691 10.7564 13.9045 11 13.5 11H13L13 15.5858L14.5858 14L14.2929 13.7071C14.0069 13.4211 13.9213 12.991 14.0761 12.6173C14.2309 12.2436 14.5955 12 15 12H17C17.5523 12 18 12.4477 18 13V15C18 15.4045 17.7564 15.7691 17.3827 15.9239C17.009 16.0787 16.5789 15.9931 16.2929 15.7071L16 15.4142L13.5858 17.8284C13.2115 18.2027 13.0009 18.7099 13 19.2391L13 19.2426V20L17.2 20C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803Z'
      fill={color}
    />
  </svg>
)

export const DirectionAlt3Light: React.FC<IconComponentProps> = ({
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
      d='M16 18.5H18.3C19.4201 18.5 19.9802 18.5 20.408 18.282C20.7843 18.0903 21.0903 17.7843 21.282 17.408C21.5 16.9802 21.5 16.4201 21.5 15.3V8.7C21.5 7.57989 21.5 7.01984 21.282 6.59202C21.0903 6.21569 20.7843 5.90973 20.408 5.71799C19.9802 5.5 19.4201 5.5 18.3 5.5H5.7C4.5799 5.5 4.01984 5.5 3.59202 5.71799C3.21569 5.90973 2.90973 6.21569 2.71799 6.59202C2.5 7.01984 2.5 7.57989 2.5 8.7V15.3C2.5 16.4201 2.5 16.9802 2.71799 17.408C2.90973 17.7843 3.21569 18.0903 3.59202 18.282C4.01984 18.5 4.57989 18.5 5.7 18.5H8'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M6.5 12.5L11.1213 17.1213C11.6839 17.6839 12 18.447 12 19.2426V20.5M6.5 12.5H8.5M6.5 12.5V14.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.5 12.5L12.8787 17.1213C12.3161 17.6839 12 18.447 12 19.2426V20.5M17.5 12.5H15.5M17.5 12.5V14.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 8.5V19M12 8.5L10.5 10M12 8.5L13.5 10'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const DirectionAltDuotone: React.FC<IconComponentProps> = ({
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
      d='M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M17.5 9H15C13.3431 9 12 10.3431 12 12M17.5 9L16 7M17.5 9L16 11M12 12V17M12 12C12 10.3431 10.6569 9 9.00002 9H6.5M6.5 9L8 7M6.5 9L8 11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DirectionAltDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M3.5 8.3C3.5 6.61984 3.5 5.77976 3.82698 5.13803C4.1146 4.57354 4.57354 4.1146 5.13803 3.82698C5.77976 3.5 6.61984 3.5 8.3 3.5H15.7C17.3802 3.5 18.2202 3.5 18.862 3.82698C19.4265 4.1146 19.8854 4.57354 20.173 5.13803C20.5 5.77976 20.5 6.61984 20.5 8.3V15.7C20.5 17.3802 20.5 18.2202 20.173 18.862C19.8854 19.4265 19.4265 19.8854 18.862 20.173C18.2202 20.5 17.3802 20.5 15.7 20.5H8.3C6.61984 20.5 5.77976 20.5 5.13803 20.173C4.57354 19.8854 4.1146 19.4265 3.82698 18.862C3.5 18.2202 3.5 17.3802 3.5 15.7V8.3Z'
      stroke={color}
      strokeOpacity='0.25'
      strokeLinecap='round'
    />
    <path
      d='M6.5 9.5H9C10.6569 9.5 12 10.8431 12 12.5V17M6.5 9.5L8 8M6.5 9.5L8 11'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.5 9.5H15C13.3431 9.5 12 10.8431 12 12.5V17M17.5 9.5L16 8M17.5 9.5L16 11'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const DirectionAltFill: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803ZM8.8 7.6C9.13137 7.15817 9.04183 6.53137 8.6 6.2C8.15817 5.86863 7.53137 5.95817 7.2 6.4L5.7 8.4L5.25 9L5.7 9.6L7.2 11.6C7.53137 12.0418 8.15817 12.1314 8.6 11.8C9.04183 11.4686 9.13137 10.8418 8.8 10.4L8.5 10H9.00002C10.1046 10 11 10.8954 11 12V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V12C13 10.8954 13.8954 10 15 10H15.5L15.2 10.4C14.8686 10.8418 14.9582 11.4686 15.4 11.8C15.8418 12.1314 16.4686 12.0418 16.8 11.6L18.3 9.6L18.75 9L18.3 8.4L16.8 6.4C16.4686 5.95817 15.8418 5.86863 15.4 6.2C14.9582 6.53137 14.8686 7.15817 15.2 7.6L15.5 8H15C13.8053 8 12.7329 8.52375 12 9.35417C11.2671 8.52375 10.1947 8 9.00002 8H8.5L8.8 7.6Z'
      fill={color}
    />
  </svg>
)

export const DirectionAltLight: React.FC<IconComponentProps> = ({
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
      d='M3.5 8.3C3.5 6.61984 3.5 5.77976 3.82698 5.13803C4.1146 4.57354 4.57354 4.1146 5.13803 3.82698C5.77976 3.5 6.61984 3.5 8.3 3.5H15.7C17.3802 3.5 18.2202 3.5 18.862 3.82698C19.4265 4.1146 19.8854 4.57354 20.173 5.13803C20.5 5.77976 20.5 6.61984 20.5 8.3V15.7C20.5 17.3802 20.5 18.2202 20.173 18.862C19.8854 19.4265 19.4265 19.8854 18.862 20.173C18.2202 20.5 17.3802 20.5 15.7 20.5H8.3C6.61984 20.5 5.77976 20.5 5.13803 20.173C4.57354 19.8854 4.1146 19.4265 3.82698 18.862C3.5 18.2202 3.5 17.3802 3.5 15.7V8.3Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M6.5 9.5H9C10.6569 9.5 12 10.8431 12 12.5V17M6.5 9.5L8 8M6.5 9.5L8 11'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.5 9.5H15C13.3431 9.5 12 10.8431 12 12.5V17M17.5 9.5L16 8M17.5 9.5L16 11'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const DirectionDuotone: React.FC<IconComponentProps> = ({
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
      d='M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M7 8L11.1213 12.1213C11.6839 12.6839 12 13.447 12 14.2426M7 8H10M7 8V11M12 14.2426V18M12 14.2426C12 13.447 12.3161 12.6839 12.8787 12.1213L17 8M17 8H14M17 8V11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DirectionDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M3.5 8.3C3.5 6.61984 3.5 5.77976 3.82698 5.13803C4.1146 4.57354 4.57354 4.1146 5.13803 3.82698C5.77976 3.5 6.61984 3.5 8.3 3.5H15.7C17.3802 3.5 18.2202 3.5 18.862 3.82698C19.4265 4.1146 19.8854 4.57354 20.173 5.13803C20.5 5.77976 20.5 6.61984 20.5 8.3V15.7C20.5 17.3802 20.5 18.2202 20.173 18.862C19.8854 19.4265 19.4265 19.8854 18.862 20.173C18.2202 20.5 17.3802 20.5 15.7 20.5H8.3C6.61984 20.5 5.77976 20.5 5.13803 20.173C4.57354 19.8854 4.1146 19.4265 3.82698 18.862C3.5 18.2202 3.5 17.3802 3.5 15.7V8.3Z'
      stroke={color}
      strokeOpacity='0.25'
      strokeLinecap='round'
    />
    <path
      d='M6.5 7.5L11.1213 12.1213C11.6839 12.6839 12 13.447 12 14.2426V16M6.5 7.5H8.5M6.5 7.5V9.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.5 7.5L12.8787 12.1213C12.3161 12.6839 12 13.447 12 14.2426V16M17.5 7.5H15.5M17.5 7.5V9.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const DirectionFill: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803ZM7 7H6V8V11C6 11.5523 6.44772 12 7 12C7.55228 12 8 11.5523 8 11V10.4142L10.4142 12.8284C10.7893 13.2035 11 13.7122 11 14.2426V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V14.2426C13 13.7122 13.2107 13.2035 13.5858 12.8284L16 10.4142V11C16 11.5523 16.4477 12 17 12C17.5523 12 18 11.5523 18 11V8V7H17H14C13.4477 7 13 7.44772 13 8C13 8.55228 13.4477 9 14 9H14.5858L12.1716 11.4142C12.1123 11.4735 12.0551 11.5344 12 11.5969C11.9449 11.5344 11.8877 11.4735 11.8284 11.4142L9.41422 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H7Z'
      fill={color}
    />
  </svg>
)

export const DirectionLight: React.FC<IconComponentProps> = ({
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
      d='M3.5 8.3C3.5 6.61984 3.5 5.77976 3.82698 5.13803C4.1146 4.57354 4.57354 4.1146 5.13803 3.82698C5.77976 3.5 6.61984 3.5 8.3 3.5H15.7C17.3802 3.5 18.2202 3.5 18.862 3.82698C19.4265 4.1146 19.8854 4.57354 20.173 5.13803C20.5 5.77976 20.5 6.61984 20.5 8.3V15.7C20.5 17.3802 20.5 18.2202 20.173 18.862C19.8854 19.4265 19.4265 19.8854 18.862 20.173C18.2202 20.5 17.3802 20.5 15.7 20.5H8.3C6.61984 20.5 5.77976 20.5 5.13803 20.173C4.57354 19.8854 4.1146 19.4265 3.82698 18.862C3.5 18.2202 3.5 17.3802 3.5 15.7V8.3Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M6.5 7.5L11.1213 12.1213C11.6839 12.6839 12 13.447 12 14.2426V16M6.5 7.5H8.5M6.5 7.5V9.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.5 7.5L12.8787 12.1213C12.3161 12.6839 12 13.447 12 14.2426V16M17.5 7.5H15.5M17.5 7.5V9.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const Favorites: React.FC<IconComponentProps> = ({
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
      d='M20 11.5C20 16.5681 14.0282 19.9702 12.4037 20.8018C12.1468 20.9334 11.8532 20.9334 11.5963 20.8018C9.97178 19.9702 4 16.5681 4 11.5C4 7 7.87627 4 12 4C16.2667 4 20 7 20 11.5Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M8.97014 11.8107L11.7687 14.7565C11.8614 14.8541 11.9078 14.9029 11.9641 14.9142C11.9878 14.919 12.0122 14.919 12.0359 14.9142C12.0922 14.9029 12.1386 14.8541 12.2313 14.7565L15.0299 11.8107C15.6002 11.2103 15.6894 10.2991 15.2463 9.5995C14.5085 8.43441 12.7899 8.4922 12.132 9.70422L12.0624 9.83247C12.0355 9.88195 11.9645 9.88195 11.9376 9.83247L11.868 9.70422C11.2101 8.4922 9.49154 8.43441 8.75365 9.5995C8.31058 10.2991 8.3998 11.2103 8.97014 11.8107Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const FavoritesDuotone: React.FC<IconComponentProps> = ({
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
      d='M20 11.5C20 16.5681 14.0282 19.9702 12.4037 20.8018C12.1468 20.9334 11.8532 20.9334 11.5963 20.8018C9.97178 19.9702 4 16.5681 4 11.5C4 7 7.87627 4 12 4C16.2667 4 20 7 20 11.5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M8.28603 11.786L11.7429 15.2429C11.8641 15.3641 11.9247 15.4247 12 15.4247C12.0753 15.4247 12.1359 15.3641 12.2571 15.2429L15.714 11.786C16.4617 11.0383 16.5778 9.86663 15.9912 8.98673C15.0763 7.61452 13.0373 7.68475 12.2191 9.11664L12.078 9.36358C12.0435 9.4239 11.9565 9.4239 11.922 9.36358L11.7809 9.11664C10.9627 7.68475 8.92365 7.61452 8.00885 8.98673C7.42225 9.86663 7.53826 11.0383 8.28603 11.786Z'
      fill={color}
    />
  </svg>
)

export const FavoritesDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M19.5 11C19.5 16.018 14.0117 19.4027 12.4249 20.2764C12.1568 20.424 11.8432 20.424 11.5751 20.2764C9.98831 19.4027 4.5 16.018 4.5 11C4.5 6.5 8.13401 3.5 12 3.5C16 3.5 19.5 6.5 19.5 11Z'
      stroke={color}
      strokeOpacity='0.25'
    />
    <path
      d='M8.28603 11.786L11.7429 15.2429C11.8641 15.3641 11.9247 15.4247 12 15.4247C12.0753 15.4247 12.1359 15.3641 12.2571 15.2429L15.714 11.786C16.4617 11.0383 16.5778 9.86663 15.9912 8.98673C15.0763 7.61452 13.0373 7.68475 12.2191 9.11664L12.078 9.36358C12.0435 9.4239 11.9565 9.4239 11.922 9.36358L11.7809 9.11664C10.9627 7.68475 8.92365 7.61452 8.00885 8.98673C7.42225 9.86663 7.53826 11.0383 8.28603 11.786Z'
      stroke={color}
    />
  </svg>
)

export const FavoritesFill: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.4037 20.8018C14.0282 19.9702 20 16.5681 20 11.5C20 7 16.2667 4 12 4C7.87627 4 4 7 4 11.5C4 16.5681 9.97178 19.9702 11.5963 20.8018C11.8532 20.9334 12.1468 20.9334 12.4037 20.8018ZM11.7687 14.7565L8.97014 11.8107C8.3998 11.2103 8.31058 10.2991 8.75365 9.5995C9.49154 8.43441 11.2101 8.4922 11.868 9.70422L11.9376 9.83247C11.9645 9.88195 12.0355 9.88195 12.0624 9.83247L12.132 9.70422C12.7899 8.4922 14.5085 8.43441 15.2463 9.5995C15.6894 10.2991 15.6002 11.2103 15.0299 11.8107L12.2313 14.7565C12.1386 14.8541 12.0922 14.9029 12.0359 14.9142C12.0122 14.919 11.9878 14.919 11.9641 14.9142C11.9078 14.9029 11.8614 14.8541 11.7687 14.7565Z'
      fill={color}
    />
  </svg>
)

export const FavoritesLight: React.FC<IconComponentProps> = ({
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
      d='M19.5 11C19.5 16.018 14.0117 19.4027 12.4249 20.2764C12.1568 20.424 11.8432 20.424 11.5751 20.2764C9.98831 19.4027 4.5 16.018 4.5 11C4.5 6.5 8.13401 3.5 12 3.5C16 3.5 19.5 6.5 19.5 11Z'
      stroke={color}
    />
    <path
      d='M8.28603 11.786L11.7429 15.2429C11.8641 15.3641 11.9247 15.4247 12 15.4247C12.0753 15.4247 12.1359 15.3641 12.2571 15.2429L15.714 11.786C16.4617 11.0383 16.5778 9.86663 15.9912 8.98673C15.0763 7.61452 13.0373 7.68475 12.2191 9.11664L12.078 9.36358C12.0435 9.4239 11.9565 9.4239 11.922 9.36358L11.7809 9.11664C10.9627 7.68475 8.92365 7.61452 8.00885 8.98673C7.42225 9.86663 7.53826 11.0383 8.28603 11.786Z'
      stroke={color}
    />
  </svg>
)

export const Map: React.FC<IconComponentProps> = ({
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
      d='M3 6.2C3 5.07989 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M19 21L15 6.5' stroke={color} strokeWidth='2' />
    <path d='M21 6L3 8' stroke={color} strokeWidth='2' />
    <path
      d='M13 14.0882C13 15.9272 11.2611 17.2334 10.4311 17.7521C10.1647 17.9186 9.83526 17.9186 9.56892 17.7521C8.7389 17.2334 7 15.9272 7 14.0882C7 12.2353 8.4536 11 10 11C11.6 11 13 12.2353 13 14.0882Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const MapDuotone: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.6076 21L15.1344 7.80988L4 8.8221V17.8C4 18.9201 4 19.4802 4.21799 19.908C4.40973 20.2843 4.71569 20.5903 5.09202 20.782C5.51984 21 6.0799 21 7.2 21H17.6076ZM13.5 15.0294C13.5 17.1878 11.3603 18.7041 10.4269 19.2628C10.1623 19.4211 9.83768 19.4211 9.57313 19.2628C8.63974 18.7041 6.5 17.1878 6.5 15.0294C6.5 12.9118 8.19587 11.5 10 11.5C11.8667 11.5 13.5 12.9118 13.5 15.0294Z'
      fill={color}
    />
    <path
      d='M4.21799 4.09202C4 4.51984 4 5.0799 4 6.2V6.81385L21.9895 5.17845C21.9711 4.68953 21.9206 4.36404 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H7.2C6.0799 3 5.51984 3 5.09202 3.21799C4.71569 3.40973 4.40973 3.71569 4.21799 4.09202Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M22 7.18574L17.1352 7.62799L19.6414 20.9947C20.2329 20.9818 20.6039 20.937 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V7.18574Z'
      fill={color}
      fillOpacity='0.25'
    />
    <circle cx='10' cy='15' r='1' fill={color} />
  </svg>
)

export const MapDuotoneLine: React.FC<IconComponentProps> = ({
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
    <path d='M18.5 21.5L12.5 6.5M21.5 4.5L2.5 8.5' stroke={color} strokeOpacity='0.25' />
    <path
      d='M2.5 5.7C2.5 4.57989 2.5 4.01984 2.71799 3.59202C2.90973 3.21569 3.21569 2.90973 3.59202 2.71799C4.01984 2.5 4.5799 2.5 5.7 2.5H18.3C19.4201 2.5 19.9802 2.5 20.408 2.71799C20.7843 2.90973 21.0903 3.21569 21.282 3.59202C21.5 4.01984 21.5 4.5799 21.5 5.7V18.3C21.5 19.4201 21.5 19.9802 21.282 20.408C21.0903 20.7843 20.7843 21.0903 20.408 21.282C19.9802 21.5 19.4201 21.5 18.3 21.5H5.7C4.57989 21.5 4.01984 21.5 3.59202 21.282C3.21569 21.0903 2.90973 20.7843 2.71799 20.408C2.5 19.9802 2.5 19.4201 2.5 18.3V5.7Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M12.5 15.0294C12.5 17.1878 10.3603 18.704 9.42687 19.2628C9.16233 19.4211 8.83767 19.4211 8.57313 19.2628C7.63974 18.704 5.5 17.1878 5.5 15.0294C5.5 12.9118 7.19587 11.5 9 11.5C10.8667 11.5 12.5 12.9118 12.5 15.0294Z'
      stroke={color}
    />
    <circle cx='9' cy='15' r='1' fill={color} />
  </svg>
)

export const MapFill: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.21799 4.09202C4 4.51984 4 5.0799 4 6.2V6.81385L21.9895 5.17845C21.9711 4.68953 21.9206 4.36404 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H7.2C6.0799 3 5.51984 3 5.09202 3.21799C4.71569 3.40973 4.40973 3.71569 4.21799 4.09202ZM22 7.18574L17.1352 7.62799L19.6414 20.9947C20.2329 20.9818 20.6039 20.937 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V7.18574ZM17.6076 21L15.1344 7.80988L4 8.8221V17.8C4 18.9201 4 19.4802 4.21799 19.908C4.40973 20.2843 4.71569 20.5903 5.09202 20.782C5.51984 21 6.0799 21 7.2 21H17.6076ZM13.5 15.0294C13.5 17.1878 11.3603 18.7041 10.4269 19.2628C10.1623 19.4211 9.83768 19.4211 9.57313 19.2628C8.63974 18.7041 6.5 17.1878 6.5 15.0294C6.5 12.9118 8.19587 11.5 10 11.5C11.8667 11.5 13.5 12.9118 13.5 15.0294Z'
      fill={color}
    />
    <circle cx='10' cy='15' r='1' fill={color} />
  </svg>
)

export const MapLight: React.FC<IconComponentProps> = ({
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
      d='M2.5 5.7C2.5 4.57989 2.5 4.01984 2.71799 3.59202C2.90973 3.21569 3.21569 2.90973 3.59202 2.71799C4.01984 2.5 4.5799 2.5 5.7 2.5H18.3C19.4201 2.5 19.9802 2.5 20.408 2.71799C20.7843 2.90973 21.0903 3.21569 21.282 3.59202C21.5 4.01984 21.5 4.5799 21.5 5.7V18.3C21.5 19.4201 21.5 19.9802 21.282 20.408C21.0903 20.7843 20.7843 21.0903 20.408 21.282C19.9802 21.5 19.4201 21.5 18.3 21.5H5.7C4.57989 21.5 4.01984 21.5 3.59202 21.282C3.21569 21.0903 2.90973 20.7843 2.71799 20.408C2.5 19.9802 2.5 19.4201 2.5 18.3V5.7Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M12.5 15.0294C12.5 17.1878 10.3603 18.704 9.42687 19.2628C9.16233 19.4211 8.83767 19.4211 8.57313 19.2628C7.63974 18.704 5.5 17.1878 5.5 15.0294C5.5 12.9118 7.19587 11.5 9 11.5C10.8667 11.5 12.5 12.9118 12.5 15.0294Z'
      stroke={color}
    />
    <path d='M18.5 21.5L12.5 6.5' stroke={color} />
    <path d='M21.5 4.5L2.5 8.5' stroke={color} />
    <circle cx='9' cy='15' r='1' fill={color} />
  </svg>
)

export const Navigate: React.FC<IconComponentProps> = ({
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
      d='M5 20L12 4L19 20L12 18L5 20Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.5 10.5L12 13L15.5 10.5' stroke={color} strokeWidth='2' strokeLinejoin='round' />
  </svg>
)

export const NavigateDuotone: React.FC<IconComponentProps> = ({
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
      d='M9.00977 12.093C8.73643 11.8978 8.59976 11.8002 8.46411 11.7881C8.34513 11.7776 8.22631 11.81 8.12915 11.8795C8.01837 11.9587 7.95016 12.1121 7.81373 12.4191L4.77518 19.2559C4.53163 19.8038 4.40986 20.0778 4.46172 20.2541C4.50672 20.4071 4.62199 20.5294 4.77202 20.5834C4.94491 20.6457 5.22564 20.5404 5.78712 20.3298L11.7191 18.1053C11.823 18.0664 11.875 18.0469 11.9285 18.0391C11.9759 18.0323 12.0241 18.0323 12.0715 18.0391C12.125 18.0469 12.1769 18.0664 12.2809 18.1053L18.2129 20.3298C18.7744 20.5404 19.0551 20.6457 19.228 20.5834C19.378 20.5294 19.4933 20.4071 19.5383 20.2541C19.5901 20.0778 19.4684 19.8038 19.2248 19.2559L16.1863 12.4191C16.0498 12.1121 15.9816 11.9587 15.8708 11.8795C15.7737 11.81 15.6549 11.7776 15.5359 11.7881C15.4002 11.8002 15.2636 11.8978 14.9902 12.093L12.5812 13.8137C12.2335 14.0621 11.7665 14.0621 11.4188 13.8137L9.00977 12.093Z'
      fill={color}
    />
    <path
      d='M9.06116 9.61281C9.04949 9.63907 9.0579 9.66991 9.08127 9.6866L11.535 11.4393C11.7024 11.5588 11.786 11.6186 11.8773 11.6417C11.9578 11.6621 12.0422 11.6621 12.1228 11.6417C12.2141 11.6186 12.2977 11.5588 12.465 11.4393L14.9188 9.6866C14.9422 9.66991 14.9506 9.63907 14.9389 9.61281L12.7311 4.6452C12.4996 4.12425 12.3838 3.86378 12.2225 3.78365C12.0823 3.71404 11.9177 3.71404 11.7776 3.78365C11.6163 3.86378 11.5005 4.12425 11.269 4.6452L9.06116 9.61281Z'
      fill={color}
      fillOpacity='0.25'
    />
  </svg>
)

export const NavigateDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M8.5 10.5L11.9752 12.4858C11.9906 12.4946 12.0094 12.4946 12.0248 12.4858L15.5 10.5'
      stroke={color}
      strokeOpacity='0.25'
    />
    <path
      d='M4.54556 19.4028L11.9547 3.59658C11.9727 3.55821 12.0273 3.55821 12.0453 3.59658L19.4544 19.4028C19.4725 19.4413 19.4373 19.4833 19.3963 19.4723L12.0129 17.5034C12.0044 17.5012 11.9956 17.5012 11.9871 17.5034L4.60371 19.4723C4.56266 19.4833 4.52752 19.4413 4.54556 19.4028Z'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const NavigateFill: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.00977 12.093C8.73643 11.8978 8.59976 11.8002 8.46411 11.7881C8.34513 11.7776 8.22631 11.81 8.12915 11.8795C8.01837 11.9587 7.95016 12.1121 7.81373 12.4191L4.77518 19.2559L4.77517 19.2559C4.53163 19.8038 4.40986 20.0778 4.46172 20.2541C4.50672 20.4071 4.62199 20.5294 4.77202 20.5834C4.9449 20.6457 5.22564 20.5404 5.7871 20.3298L5.78712 20.3298L11.7191 18.1053C11.823 18.0664 11.875 18.0469 11.9285 18.0391C11.9759 18.0323 12.0241 18.0323 12.0715 18.0391C12.125 18.0469 12.177 18.0664 12.2809 18.1053L18.2129 20.3298L18.2129 20.3298C18.7744 20.5404 19.0551 20.6457 19.228 20.5834C19.378 20.5294 19.4933 20.4071 19.5383 20.2541C19.5901 20.0778 19.4684 19.8038 19.2248 19.2559L16.1863 12.4191C16.0498 12.1121 15.9816 11.9587 15.8708 11.8795C15.7737 11.81 15.6549 11.7776 15.5359 11.7881C15.4002 11.8002 15.2636 11.8978 14.9902 12.093L12.5812 13.8137C12.2335 14.0621 11.7665 14.0621 11.4188 13.8137L9.00977 12.093ZM9.06112 9.61248C9.04945 9.63873 9.05786 9.66957 9.08124 9.68627L11.535 11.439C11.7023 11.5585 11.786 11.6182 11.8772 11.6413C11.9578 11.6617 12.0422 11.6617 12.1228 11.6413C12.214 11.6182 12.2977 11.5585 12.465 11.439L14.9188 9.68627C14.9421 9.66957 14.9505 9.63873 14.9389 9.61248L12.731 4.64486C12.4995 4.12391 12.3837 3.86344 12.2224 3.78331C12.0823 3.71371 11.9177 3.71371 11.7776 3.78331C11.6162 3.86344 11.5005 4.12391 11.2689 4.64486L9.06112 9.61248Z'
      fill={color}
    />
  </svg>
)

export const NavigateLight: React.FC<IconComponentProps> = ({
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
      d='M4.54556 19.4028L11.9547 3.59658C11.9727 3.55821 12.0273 3.55821 12.0453 3.59658L19.4544 19.4028C19.4725 19.4413 19.4373 19.4833 19.3963 19.4723L12.0129 17.5034C12.0044 17.5012 11.9956 17.5012 11.9871 17.5034L4.60371 19.4723C4.56266 19.4833 4.52752 19.4413 4.54556 19.4028Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M8.5 10.5L11.9752 12.4858C11.9906 12.4946 12.0094 12.4946 12.0248 12.4858L15.5 10.5'
      stroke={color}
    />
  </svg>
)

export const Pointers: React.FC<IconComponentProps> = ({
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
    <path d='M12 3V5' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 10.5V12.5' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 18V21' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M17 14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H5.769C5.4866 13 5.3454 13 5.21503 13.0359C5.09954 13.0677 4.99071 13.12 4.89371 13.1903C4.78423 13.2697 4.69602 13.38 4.51961 13.6005L3.79961 14.5005C3.51424 14.8572 3.37155 15.0356 3.31683 15.2334C3.26856 15.4078 3.26856 15.5922 3.31683 15.7666C3.37155 15.9644 3.51424 16.1428 3.79961 16.4995L4.51961 17.3995C4.69602 17.62 4.78423 17.7303 4.89371 17.8097C4.99071 17.88 5.09954 17.9323 5.21503 17.9641C5.3454 18 5.4866 18 5.769 18H15.4C15.9601 18 16.2401 18 16.454 17.891C16.6422 17.7951 16.7951 17.6422 16.891 17.454C17 17.2401 17 16.9601 17 16.4V14.6Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M7 6.6C7 6.03995 7 5.75992 7.10899 5.54601C7.20487 5.35785 7.35785 5.20487 7.54601 5.10899C7.75992 5 8.03995 5 8.6 5H18.231C18.5134 5 18.6546 5 18.785 5.03591C18.9005 5.06773 19.0093 5.12004 19.1063 5.19035C19.2158 5.26971 19.304 5.37997 19.4804 5.60049L20.2004 6.50049C20.4858 6.85721 20.6285 7.03557 20.6832 7.23337C20.7314 7.40785 20.7314 7.59215 20.6832 7.76663C20.6285 7.96443 20.4858 8.14279 20.2004 8.49951L19.4804 9.39951C19.304 9.62003 19.2158 9.73029 19.1063 9.80965C19.0093 9.87996 18.9005 9.93227 18.785 9.96409C18.6546 10 18.5134 10 18.231 10H8.6C8.03995 10 7.75992 10 7.54601 9.89101C7.35785 9.79513 7.20487 9.64215 7.10899 9.45399C7 9.24008 7 8.96005 7 8.4V6.6Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const PointersDuotone: React.FC<IconComponentProps> = ({
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
      d='M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4H13ZM11 4V5H13V4H11Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20H13ZM11 20V15H13V20H11Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M12 9V11' stroke={color} strokeOpacity='0.25' strokeWidth='2' />
    <path
      d='M16 12.6C16 12.0399 16 11.7599 15.891 11.546C15.7951 11.3578 15.6422 11.2049 15.454 11.109C15.2401 11 14.9601 11 14.4 11H6.66274C6.41815 11 6.29586 11 6.18077 11.0276C6.07873 11.0521 5.98119 11.0925 5.89172 11.1474C5.7908 11.2092 5.70432 11.2957 5.53137 11.4686L5.13137 11.8686C4.73535 12.2646 4.53735 12.4627 4.46316 12.691C4.3979 12.8918 4.3979 13.1082 4.46316 13.309C4.53735 13.5373 4.73535 13.7354 5.13137 14.1314L5.53137 14.5314C5.70432 14.7043 5.7908 14.7908 5.89172 14.8526C5.98119 14.9075 6.07873 14.9479 6.18077 14.9724C6.29586 15 6.41815 15 6.66274 15H14.4C14.9601 15 15.2401 15 15.454 14.891C15.6422 14.7951 15.7951 14.6422 15.891 14.454C16 14.2401 16 13.9601 16 13.4V12.6Z'
      fill={color}
    />
    <path
      d='M7 6.6C7 6.03995 7 5.75992 7.10899 5.54601C7.20487 5.35785 7.35785 5.20487 7.54601 5.10899C7.75992 5 8.03995 5 8.6 5H16.3373C16.5818 5 16.7041 5 16.8192 5.02763C16.9213 5.05213 17.0188 5.09253 17.1083 5.14736C17.2092 5.2092 17.2957 5.29568 17.4686 5.46863L17.8686 5.86863C18.2646 6.26465 18.4627 6.46265 18.5368 6.69098C18.6021 6.89183 18.6021 7.10817 18.5368 7.30902C18.4627 7.53735 18.2646 7.73535 17.8686 8.13137L17.4686 8.53137C17.2957 8.70432 17.2092 8.7908 17.1083 8.85264C17.0188 8.90747 16.9213 8.94787 16.8192 8.97237C16.7041 9 16.5818 9 16.3373 9H8.6C8.03995 9 7.75992 9 7.54601 8.89101C7.35785 8.79513 7.20487 8.64215 7.10899 8.45399C7 8.24008 7 7.96005 7 7.4V6.6Z'
      fill={color}
    />
  </svg>
)

export const PointersDuotoneLine: React.FC<IconComponentProps> = ({
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
    <path d='M12 2.5V4.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path d='M12 9.5V11.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path d='M12 16.5V21.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path
      d='M6.5 6.1C6.5 5.53995 6.5 5.25992 6.60899 5.04601C6.70487 4.85785 6.85785 4.70487 7.04601 4.60899C7.25992 4.5 7.53995 4.5 8.1 4.5H17.731C18.0134 4.5 18.1546 4.5 18.285 4.53591C18.4005 4.56773 18.5093 4.62004 18.6063 4.69035C18.7158 4.76971 18.804 4.87997 18.9804 5.10049L19.7004 6.00049C19.9858 6.35721 20.1285 6.53557 20.1832 6.73337C20.2314 6.90785 20.2314 7.09215 20.1832 7.26663C20.1285 7.46443 19.9858 7.64279 19.7004 7.99951L18.9804 8.89951C18.804 9.12003 18.7158 9.23029 18.6063 9.30965C18.5093 9.37996 18.4005 9.43227 18.285 9.46409C18.1546 9.5 18.0134 9.5 17.731 9.5H8.1C7.53995 9.5 7.25992 9.5 7.04601 9.39101C6.85785 9.29513 6.70487 9.14215 6.60899 8.95399C6.5 8.74008 6.5 8.46005 6.5 7.9V6.1Z'
      stroke={color}
    />
    <path
      d='M17.5 13.1C17.5 12.5399 17.5 12.2599 17.391 12.046C17.2951 11.8578 17.1422 11.7049 16.954 11.609C16.7401 11.5 16.4601 11.5 15.9 11.5H6.269C5.9866 11.5 5.8454 11.5 5.71503 11.5359C5.59954 11.5677 5.49071 11.62 5.39371 11.6903C5.28423 11.7697 5.19602 11.88 5.01961 12.1005L4.29961 13.0005C4.01424 13.3572 3.87155 13.5356 3.81683 13.7334C3.76856 13.9078 3.76856 14.0922 3.81683 14.2666C3.87155 14.4644 4.01424 14.6428 4.29961 14.9995L5.01961 15.8995C5.19602 16.12 5.28423 16.2303 5.39371 16.3097C5.49071 16.38 5.59954 16.4323 5.71503 16.4641C5.8454 16.5 5.9866 16.5 6.269 16.5H15.9C16.4601 16.5 16.7401 16.5 16.954 16.391C17.1422 16.2951 17.2951 16.1422 17.391 15.954C17.5 15.7401 17.5 15.4601 17.5 14.9V13.1Z'
      stroke={color}
    />
  </svg>
)

export const PointersFill: React.FC<IconComponentProps> = ({
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
      d='M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4H13ZM11 4V5H13V4H11Z'
      fill={color}
    />
    <path
      d='M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20H13ZM11 20V15H13V20H11Z'
      fill={color}
    />
    <path d='M12 9V11' stroke={color} strokeWidth='2' />
    <path
      d='M16 12.6C16 12.0399 16 11.7599 15.891 11.546C15.7951 11.3578 15.6422 11.2049 15.454 11.109C15.2401 11 14.9601 11 14.4 11H6.66274C6.41815 11 6.29586 11 6.18077 11.0276C6.07873 11.0521 5.98119 11.0925 5.89172 11.1474C5.7908 11.2092 5.70432 11.2957 5.53137 11.4686L5.13137 11.8686C4.73535 12.2646 4.53735 12.4627 4.46316 12.691C4.3979 12.8918 4.3979 13.1082 4.46316 13.309C4.53735 13.5373 4.73535 13.7354 5.13137 14.1314L5.53137 14.5314C5.70432 14.7043 5.7908 14.7908 5.89172 14.8526C5.98119 14.9075 6.07873 14.9479 6.18077 14.9724C6.29586 15 6.41815 15 6.66274 15H14.4C14.9601 15 15.2401 15 15.454 14.891C15.6422 14.7951 15.7951 14.6422 15.891 14.454C16 14.2401 16 13.9601 16 13.4V12.6Z'
      fill={color}
    />
    <path
      d='M7 6.6C7 6.03995 7 5.75992 7.10899 5.54601C7.20487 5.35785 7.35785 5.20487 7.54601 5.10899C7.75992 5 8.03995 5 8.6 5H16.3373C16.5818 5 16.7041 5 16.8192 5.02763C16.9213 5.05213 17.0188 5.09253 17.1083 5.14736C17.2092 5.2092 17.2957 5.29568 17.4686 5.46863L17.8686 5.86863C18.2646 6.26465 18.4627 6.46265 18.5368 6.69098C18.6021 6.89183 18.6021 7.10817 18.5368 7.30902C18.4627 7.53735 18.2646 7.73535 17.8686 8.13137L17.4686 8.53137C17.2957 8.70432 17.2092 8.7908 17.1083 8.85264C17.0188 8.90747 16.9213 8.94787 16.8192 8.97237C16.7041 9 16.5818 9 16.3373 9H8.6C8.03995 9 7.75992 9 7.54601 8.89101C7.35785 8.79513 7.20487 8.64215 7.10899 8.45399C7 8.24008 7 7.96005 7 7.4V6.6Z'
      fill={color}
    />
  </svg>
)

export const PointersLight: React.FC<IconComponentProps> = ({
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
    <path d='M12 2.5V4.5' stroke={color} strokeLinecap='round' />
    <path d='M12 9.5V11.5' stroke={color} strokeLinecap='round' />
    <path d='M12 16.5V21.5' stroke={color} strokeLinecap='round' />
    <path
      d='M6.5 6.1C6.5 5.53995 6.5 5.25992 6.60899 5.04601C6.70487 4.85785 6.85785 4.70487 7.04601 4.60899C7.25992 4.5 7.53995 4.5 8.1 4.5H17.731C18.0134 4.5 18.1546 4.5 18.285 4.53591C18.4005 4.56773 18.5093 4.62004 18.6063 4.69035C18.7158 4.76971 18.804 4.87997 18.9804 5.10049L19.7004 6.00049C19.9858 6.35721 20.1285 6.53557 20.1832 6.73337C20.2314 6.90785 20.2314 7.09215 20.1832 7.26663C20.1285 7.46443 19.9858 7.64279 19.7004 7.99951L18.9804 8.89951C18.804 9.12003 18.7158 9.23029 18.6063 9.30965C18.5093 9.37996 18.4005 9.43227 18.285 9.46409C18.1546 9.5 18.0134 9.5 17.731 9.5H8.1C7.53995 9.5 7.25992 9.5 7.04601 9.39101C6.85785 9.29513 6.70487 9.14215 6.60899 8.95399C6.5 8.74008 6.5 8.46005 6.5 7.9V6.1Z'
      stroke={color}
    />
    <path
      d='M17.5 13.1C17.5 12.5399 17.5 12.2599 17.391 12.046C17.2951 11.8578 17.1422 11.7049 16.954 11.609C16.7401 11.5 16.4601 11.5 15.9 11.5H6.269C5.9866 11.5 5.8454 11.5 5.71503 11.5359C5.59954 11.5677 5.49071 11.62 5.39371 11.6903C5.28423 11.7697 5.19602 11.88 5.01961 12.1005L4.29961 13.0005C4.01424 13.3572 3.87155 13.5356 3.81683 13.7334C3.76856 13.9078 3.76856 14.0922 3.81683 14.2666C3.87155 14.4644 4.01424 14.6428 4.29961 14.9995L5.01961 15.8995C5.19602 16.12 5.28423 16.2303 5.39371 16.3097C5.49071 16.38 5.59954 16.4323 5.71503 16.4641C5.8454 16.5 5.9866 16.5 6.269 16.5H15.9C16.4601 16.5 16.7401 16.5 16.954 16.391C17.1422 16.2951 17.2951 16.1422 17.391 15.954C17.5 15.7401 17.5 15.4601 17.5 14.9V13.1Z'
      stroke={color}
    />
  </svg>
)

export const Road: React.FC<IconComponentProps> = ({
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
      d='M9.09557 20.7929L11.9274 14.6574C11.9505 14.6073 11.962 14.5822 11.978 14.5744C11.9919 14.5676 12.0081 14.5676 12.022 14.5744C12.038 14.5822 12.0495 14.6073 12.0726 14.6574L14.9044 20.7929C14.9337 20.8564 14.9484 20.8882 14.9425 20.9067C14.9374 20.9227 14.9247 20.9351 14.9085 20.9396C14.8899 20.9449 14.8586 20.9293 14.796 20.898L12.0358 19.5179L12.0358 19.5179C12.0227 19.5113 12.0161 19.508 12.0092 19.5068C12.0031 19.5056 11.9969 19.5056 11.9908 19.5068C11.9839 19.508 11.9773 19.5113 11.9642 19.5179L11.9642 19.5179L9.20399 20.898C9.14142 20.9293 9.11014 20.9449 9.09149 20.9396C9.07533 20.9351 9.06256 20.9227 9.05748 20.9067C9.0516 20.8882 9.06626 20.8564 9.09557 20.7929Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M5 17L8 3' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M19 17L16 3' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 10L12 8' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M17 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V6.2C21 5.07989 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V13.8C3 14.9201 3 15.4802 3.21799 15.908C3.40973 16.2843 3.71569 16.5903 4.09202 16.782C4.51984 17 5.07989 17 6.2 17H7'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const RoadAlt: React.FC<IconComponentProps> = ({
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
      d='M9.09557 20.7929L11.9274 14.6574C11.9505 14.6073 11.962 14.5822 11.978 14.5744C11.9919 14.5676 12.0081 14.5676 12.022 14.5744C12.038 14.5822 12.0495 14.6073 12.0726 14.6574L14.9044 20.7929C14.9337 20.8564 14.9484 20.8882 14.9425 20.9067C14.9374 20.9227 14.9247 20.9351 14.9085 20.9396C14.8899 20.9449 14.8586 20.9293 14.796 20.898L12.0358 19.5179L12.0358 19.5179C12.0227 19.5113 12.0161 19.508 12.0092 19.5068C12.0031 19.5056 11.9969 19.5056 11.9908 19.5068C11.9839 19.508 11.9773 19.5113 11.9642 19.5179L11.9642 19.5179L9.20399 20.898C9.14142 20.9293 9.11014 20.9449 9.09149 20.9396C9.07533 20.9351 9.06256 20.9227 9.05748 20.9067C9.0516 20.8882 9.06626 20.8564 9.09557 20.7929Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M4 18L7 4' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M20 18L17 4' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 11L12 9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 6L12 4' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const RoadAltDuotone: React.FC<IconComponentProps> = ({
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
    <path d='M4 18L7 4' stroke={color} strokeOpacity='0.25' strokeWidth='2' strokeLinecap='round' />
    <path
      d='M20 18L17 4'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M12 11L12 9'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M12 6L12 4'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M9.15763 19.54L11.2761 15.0382C11.5072 14.5472 11.6227 14.3017 11.7814 14.2246C11.9194 14.1575 12.0806 14.1575 12.2186 14.2246C12.3773 14.3017 12.4928 14.5472 12.7239 15.0382L14.8424 19.54C15.1894 20.2774 15.3628 20.6461 15.2969 20.8379C15.24 21.0035 15.1006 21.1273 14.9294 21.1642C14.7311 21.2069 14.3856 20.991 13.6945 20.5591L12.424 19.765L12.424 19.765C12.2702 19.6689 12.1933 19.6208 12.1108 19.6021C12.0379 19.5855 11.9621 19.5855 11.8892 19.6021C11.8067 19.6208 11.7298 19.6689 11.576 19.765L11.576 19.765L10.3055 20.5591C9.61444 20.991 9.26892 21.2069 9.07064 21.1642C8.89941 21.1273 8.75997 21.0035 8.70306 20.8379C8.63715 20.6461 8.81064 20.2774 9.15763 19.54Z'
      fill={color}
    />
  </svg>
)

export const RoadAltDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M8.57385 20.3523L11.9553 13.5894C11.9737 13.5526 12.0263 13.5526 12.0447 13.5894L15.4261 20.3523C15.4483 20.3965 15.3996 20.4426 15.3566 20.4181L12.0248 18.5142C12.0094 18.5054 11.9906 18.5054 11.9752 18.5142L8.64338 20.4181C8.60043 20.4426 8.55173 20.3965 8.57385 20.3523Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M20.5 18.5L16.5 3.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path d='M3.5 18.5L7.5 3.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path d='M12 10.5V8.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path d='M12 5.5V3.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
  </svg>
)

export const RoadAltFill: React.FC<IconComponentProps> = ({
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
    <path d='M4 18L7 4' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M20 18L17 4' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 11L12 9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 6L12 4' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M9.15763 19.54L11.2761 15.0382C11.5072 14.5472 11.6227 14.3017 11.7814 14.2246C11.9194 14.1575 12.0806 14.1575 12.2186 14.2246C12.3773 14.3017 12.4928 14.5472 12.7239 15.0382L14.8424 19.54C15.1894 20.2774 15.3628 20.6461 15.2969 20.8379C15.24 21.0035 15.1006 21.1273 14.9294 21.1642C14.7311 21.2069 14.3856 20.991 13.6945 20.5591L12.424 19.765L12.424 19.765C12.2702 19.6689 12.1933 19.6208 12.1108 19.6021C12.0379 19.5855 11.9621 19.5855 11.8892 19.6021C11.8067 19.6208 11.7298 19.6689 11.576 19.765L11.576 19.765L10.3055 20.5591C9.61444 20.991 9.26892 21.2069 9.07064 21.1642C8.89941 21.1273 8.75997 21.0035 8.70306 20.8379C8.63715 20.6461 8.81064 20.2774 9.15763 19.54Z'
      fill={color}
    />
  </svg>
)

export const RoadAltLight: React.FC<IconComponentProps> = ({
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
      d='M8.57385 20.3523L11.9553 13.5894C11.9737 13.5526 12.0263 13.5526 12.0447 13.5894L15.4261 20.3523C15.4483 20.3965 15.3996 20.4426 15.3566 20.4181L12.0248 18.5142C12.0094 18.5054 11.9906 18.5054 11.9752 18.5142L8.64338 20.4181C8.60043 20.4426 8.55173 20.3965 8.57385 20.3523Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M20.5 18.5L16.5 3.5' stroke={color} strokeLinecap='round' />
    <path d='M3.5 18.5L7.5 3.5' stroke={color} strokeLinecap='round' />
    <path d='M12 10.5V8.5' stroke={color} strokeLinecap='round' />
    <path d='M12 5.5V3.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const RoadDuotone: React.FC<IconComponentProps> = ({
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
      d='M9.15763 19.54L11.2761 15.0382C11.5072 14.5472 11.6227 14.3017 11.7814 14.2246C11.9194 14.1575 12.0806 14.1575 12.2186 14.2246C12.3773 14.3017 12.4928 14.5472 12.7239 15.0382L14.8424 19.54C15.1894 20.2774 15.3628 20.6461 15.2969 20.8379C15.24 21.0035 15.1006 21.1273 14.9294 21.1642C14.7311 21.2069 14.3856 20.991 13.6945 20.5591L12.424 19.765L12.424 19.765C12.2702 19.6689 12.1933 19.6208 12.1108 19.6021C12.0379 19.5855 11.9621 19.5855 11.8892 19.6021C11.8067 19.6208 11.7298 19.6689 11.576 19.765L11.576 19.765L10.3055 20.5591C9.61444 20.991 9.26892 21.2069 9.07064 21.1642C8.89941 21.1273 8.75997 21.0035 8.70306 20.8379C8.63715 20.6461 8.81064 20.2774 9.15763 19.54Z'
      fill={color}
    />
    <path
      d='M12 11L12 9'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V14.458C3 14.9618 3 15.2136 3.04513 15.4225C3.21094 16.1897 3.81027 16.7891 4.57755 16.9549C4.78636 17 5.03823 17 5.54196 17C5.63534 17 5.68203 17 5.72383 16.9929C5.87607 16.9668 6.00774 16.8719 6.08055 16.7357C6.10055 16.6983 6.11532 16.6541 6.14484 16.5655L9.63532 6.09404C9.76646 5.70063 9.83203 5.50392 9.95364 5.35849C10.061 5.23007 10.199 5.13066 10.3548 5.06939C10.5312 5 10.7385 5 11.1532 5H12.8468C13.2615 5 13.4688 5 13.6452 5.06939C13.801 5.13066 13.939 5.23007 14.0464 5.35849C14.168 5.50392 14.2335 5.70062 14.3647 6.09403L14.3647 6.09404L17.8552 16.5655C17.8847 16.6541 17.8994 16.6983 17.9194 16.7357C17.9923 16.8719 18.1239 16.9668 18.2762 16.9929C18.318 17 18.3647 17 18.458 17C18.9618 17 19.2136 17 19.4225 16.9549C20.1897 16.7891 20.7891 16.1897 20.9549 15.4225C21 15.2136 21 14.9618 21 14.458V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3Z'
      fill={color}
      fillOpacity='0.25'
    />
  </svg>
)

export const RoadFill: React.FC<IconComponentProps> = ({
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
      d='M9.15763 19.54L11.2761 15.0382C11.5072 14.5472 11.6227 14.3017 11.7814 14.2246C11.9194 14.1575 12.0806 14.1575 12.2186 14.2246C12.3773 14.3017 12.4928 14.5472 12.7239 15.0382L14.8424 19.54C15.1894 20.2774 15.3628 20.6461 15.2969 20.8379C15.24 21.0035 15.1006 21.1273 14.9294 21.1642C14.7311 21.2069 14.3856 20.991 13.6945 20.5591L12.424 19.765L12.424 19.765C12.2702 19.6689 12.1933 19.6208 12.1108 19.6021C12.0379 19.5855 11.9621 19.5855 11.8892 19.6021C11.8067 19.6208 11.7298 19.6689 11.576 19.765L11.576 19.765L10.3055 20.5591C9.61444 20.991 9.26892 21.2069 9.07064 21.1642C8.89941 21.1273 8.75997 21.0035 8.70306 20.8379C8.63715 20.6461 8.81064 20.2774 9.15763 19.54Z'
      fill={color}
    />
    <path d='M12 11L12 9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V14.458C3 14.9618 3 15.2136 3.04513 15.4225C3.21094 16.1897 3.81027 16.7891 4.57755 16.9549C4.78636 17 5.03823 17 5.54196 17C5.63534 17 5.68203 17 5.72383 16.9929C5.87607 16.9668 6.00774 16.8719 6.08055 16.7357C6.10055 16.6983 6.11532 16.6541 6.14484 16.5655L9.63532 6.09404C9.76646 5.70063 9.83203 5.50392 9.95364 5.35849C10.061 5.23007 10.199 5.13066 10.3548 5.06939C10.5312 5 10.7385 5 11.1532 5H12.8468C13.2615 5 13.4688 5 13.6452 5.06939C13.801 5.13066 13.939 5.23007 14.0464 5.35849C14.168 5.50392 14.2335 5.70062 14.3647 6.09403L14.3647 6.09404L17.8552 16.5655C17.8847 16.6541 17.8994 16.6983 17.9194 16.7357C17.9923 16.8719 18.1239 16.9668 18.2762 16.9929C18.318 17 18.3647 17 18.458 17C18.9618 17 19.2136 17 19.4225 16.9549C20.1897 16.7891 20.7891 16.1897 20.9549 15.4225C21 15.2136 21 14.9618 21 14.458V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3Z'
      fill={color}
    />
  </svg>
)

export const RoadFinish: React.FC<IconComponentProps> = ({
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
      d='M17 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V14.2C3 13.0799 3 12.5198 3.21799 12.092C3.40973 11.7157 3.71569 11.4097 4.09202 11.218C4.51984 11 5.07989 11 6.2 11H7'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M5.5 21L7 11M18.5 21L17 11' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 17L12 14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M12 7V3.5C12 3.2643 12 3.14645 12.0732 3.07322C12.1464 3 12.2643 3 12.5 3H17L15.5 5L17 7H12ZM12 7V10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const RoadFinishDuotone: React.FC<IconComponentProps> = ({
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
    <path d='M12 17L12 14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M12 4L12 7.42857L12 10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11 3V7C11 7.55228 11.4477 8 12 8H17.7929C18.2383 8 18.4614 7.46143 18.1464 7.14645L16.1768 5.17678C16.0791 5.07915 16.0791 4.92085 16.1768 4.82322L18.1464 2.85355C18.4614 2.53857 18.2383 2 17.7929 2H12C11.4477 2 11 2.44772 11 3Z'
      fill={color}
    />
    <path
      d='M18.8 22H5.2C4.0799 22 3.51984 22 3.09202 21.782C2.71569 21.5903 2.40973 21.2843 2.21799 20.908C2 20.4802 2 19.9201 2 18.8V13.2C2 12.0799 2 11.5198 2.21799 11.092C2.40973 10.7157 2.71569 10.4097 3.09202 10.218C3.51984 10 4.0799 10 5.2 10H7.02416C7.35866 10 7.52591 10 7.64306 10.0687C7.74582 10.129 7.82367 10.224 7.86262 10.3365C7.90702 10.4649 7.87422 10.6289 7.80862 10.9569L6.38276 18.0862C6.25155 18.7422 6.18595 19.0702 6.27476 19.3269C6.35265 19.5521 6.50837 19.742 6.71388 19.8626C6.94818 20 7.28268 20 7.95169 20H16.0483C16.7173 20 17.0518 20 17.2861 19.8626C17.4916 19.742 17.6473 19.5521 17.7252 19.3269C17.814 19.0702 17.7484 18.7422 17.6172 18.0862L17.6172 18.0862L16.1914 10.9569C16.1258 10.6289 16.093 10.4649 16.1374 10.3365C16.1763 10.224 16.2542 10.129 16.3569 10.0687C16.4741 10 16.6413 10 16.9758 10H18.8C19.9201 10 20.4802 10 20.908 10.218C21.2843 10.4097 21.5903 10.7157 21.782 11.092C22 11.5198 22 12.0799 22 13.2V18.8C22 19.9201 22 20.4802 21.782 20.908C21.5903 21.2843 21.2843 21.5903 20.908 21.782C20.4802 22 19.9201 22 18.8 22Z'
      fill={color}
      fillOpacity='0.25'
    />
  </svg>
)

export const RoadFinishDuotoneLine: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.71434 10.0481C7.66342 10.0239 7.60776 10.0081 7.54913 10.0024C7.52918 10.0004 7.50934 9.99962 7.48969 10H5.7H5.67858L5.67853 10C5.13667 10 4.69961 10 4.34569 10.0289C3.98126 10.0587 3.66117 10.1216 3.36502 10.2725C2.89462 10.5122 2.51217 10.8946 2.27248 11.365C2.12159 11.6612 2.05868 11.9813 2.02891 12.3457C1.99999 12.6996 2 13.1367 2 13.6786V13.6786V13.7V17.3V17.3214C2 17.8633 1.99999 18.3004 2.02891 18.6543C2.05868 19.0187 2.12159 19.3388 2.27248 19.635C2.51217 20.1054 2.89462 20.4878 3.36502 20.7275C3.66117 20.8784 3.98126 20.9413 4.34569 20.9711C4.65731 20.9966 5.03339 20.9996 5.4887 21C5.49643 21.0001 5.50414 21.0001 5.51182 21L5.67855 21H5.6786H5.7H18.3H18.3214H18.3215L18.4882 21C18.4959 21.0001 18.5036 21.0001 18.5113 21C18.9666 20.9996 19.3427 20.9966 19.6543 20.9711C20.0187 20.9413 20.3388 20.8784 20.635 20.7275C21.1054 20.4878 21.4878 20.1054 21.7275 19.635C21.8784 19.3388 21.9413 19.0187 21.9711 18.6543C22 18.3004 22 17.8633 22 17.3214V17.3V13.7V13.6786C22 13.1367 22 12.6996 21.9711 12.3457C21.9413 11.9813 21.8784 11.6612 21.7275 11.365C21.4878 10.8946 21.1054 10.5122 20.635 10.2725C20.3388 10.1216 20.0187 10.0587 19.6543 10.0289C19.3004 10 18.8633 10 18.3215 10L18.3214 10H18.3H16.5103C16.4907 9.99962 16.4708 10.0004 16.4509 10.0024C16.3927 10.0081 16.3375 10.0237 16.2869 10.0476C16.2186 10.0797 16.1597 10.1264 16.1133 10.183C16.0672 10.2392 16.0331 10.3057 16.0149 10.3784C16.0011 10.4331 15.9965 10.4908 16.0024 10.5494C16.0044 10.5693 16.0075 10.589 16.0117 10.6082L17.8901 20H6.1099L7.98827 10.6082C7.9925 10.589 7.99563 10.5694 7.99759 10.5494C8.01123 10.4137 7.96851 10.2829 7.88668 10.183C7.84061 10.1267 7.78214 10.0802 7.71434 10.0481ZM5.7 11H6.8901L5.09046 19.9982C4.8262 19.9956 4.61106 19.9894 4.42712 19.9744C4.12454 19.9497 3.95069 19.9036 3.81901 19.8365C3.53677 19.6927 3.3073 19.4632 3.16349 19.181C3.0964 19.0493 3.05031 18.8755 3.02559 18.5729C3.00039 18.2645 3 17.8683 3 17.3V13.7C3 13.1317 3.00039 12.7355 3.02559 12.4271C3.05031 12.1245 3.0964 11.9507 3.16349 11.819C3.3073 11.5368 3.53677 11.3073 3.81901 11.1635C3.95069 11.0964 4.12454 11.0503 4.42712 11.0256C4.73554 11.0004 5.1317 11 5.7 11ZM19.5729 19.9744C19.3889 19.9894 19.1738 19.9956 18.9095 19.9982L17.1099 11H18.3C18.8683 11 19.2645 11.0004 19.5729 11.0256C19.8755 11.0503 20.0493 11.0964 20.181 11.1635C20.4632 11.3073 20.6927 11.5368 20.8365 11.819C20.9036 11.9507 20.9497 12.1245 20.9744 12.4271C20.9996 12.7355 21 13.1317 21 13.7V17.3C21 17.8683 20.9996 18.2645 20.9744 18.5729C20.9497 18.8755 20.9036 19.0493 20.8365 19.181C20.6927 19.4632 20.4632 19.6927 20.181 19.8365C20.0493 19.9036 19.8755 19.9497 19.5729 19.9744ZM12.5 15.5C12.5 15.2239 12.2761 15 12 15C11.7239 15 11.5 15.2239 11.5 15.5V17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5V15.5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M12 7.5V4C12 3.7643 12 3.64645 12.0732 3.57322C12.1464 3.5 12.2643 3.5 12.5 3.5H18.5L16.5 5.5L18.5 7.5H12ZM12 7.5V12'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const RoadFinishFill: React.FC<IconComponentProps> = ({
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
    <path d='M12 17L12 14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M12 4L12 7.42857L12 10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11 3V7C11 7.55228 11.4477 8 12 8H17.7929C18.2383 8 18.4614 7.46143 18.1464 7.14645L16.1768 5.17678C16.0791 5.07915 16.0791 4.92085 16.1768 4.82322L18.1464 2.85355C18.4614 2.53857 18.2383 2 17.7929 2H12C11.4477 2 11 2.44772 11 3Z'
      fill={color}
    />
    <path
      d='M18.8 22H5.2C4.0799 22 3.51984 22 3.09202 21.782C2.71569 21.5903 2.40973 21.2843 2.21799 20.908C2 20.4802 2 19.9201 2 18.8V13.2C2 12.0799 2 11.5198 2.21799 11.092C2.40973 10.7157 2.71569 10.4097 3.09202 10.218C3.51984 10 4.0799 10 5.2 10H7.02416C7.35866 10 7.52591 10 7.64306 10.0687C7.74582 10.129 7.82367 10.224 7.86262 10.3365C7.90702 10.4649 7.87422 10.6289 7.80862 10.9569L6.38276 18.0862C6.25155 18.7422 6.18595 19.0702 6.27476 19.3269C6.35265 19.5521 6.50837 19.742 6.71388 19.8626C6.94818 20 7.28268 20 7.95169 20H16.0483C16.7173 20 17.0518 20 17.2861 19.8626C17.4916 19.742 17.6473 19.5521 17.7252 19.3269C17.814 19.0702 17.7484 18.7422 17.6172 18.0862L17.6172 18.0862L16.1914 10.9569C16.1258 10.6289 16.093 10.4649 16.1374 10.3365C16.1763 10.224 16.2542 10.129 16.3569 10.0687C16.4741 10 16.6413 10 16.9758 10H18.8C19.9201 10 20.4802 10 20.908 10.218C21.2843 10.4097 21.5903 10.7157 21.782 11.092C22 11.5198 22 12.0799 22 13.2V18.8C22 19.9201 22 20.4802 21.782 20.908C21.5903 21.2843 21.2843 21.5903 20.908 21.782C20.4802 22 19.9201 22 18.8 22Z'
      fill={color}
    />
  </svg>
)

export const RoadFinishLight: React.FC<IconComponentProps> = ({
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
      d='M16.5 10.5H18.3C19.4201 10.5 19.9802 10.5 20.408 10.718C20.7843 10.9097 21.0903 11.2157 21.282 11.592C21.5 12.0198 21.5 12.5799 21.5 13.7V17.3C21.5 18.4201 21.5 18.9802 21.282 19.408C21.0903 19.7843 20.7843 20.0903 20.408 20.282C19.9802 20.5 19.4201 20.5 18.3 20.5H5.7C4.5799 20.5 4.01984 20.5 3.59202 20.282C3.21569 20.0903 2.90973 19.7843 2.71799 19.408C2.5 18.9802 2.5 18.4201 2.5 17.3V13.7C2.5 12.5799 2.5 12.0198 2.71799 11.592C2.90973 11.2157 3.21569 10.9097 3.59202 10.718C4.01984 10.5 4.5799 10.5 5.7 10.5H7.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M5.5 20.5L7.5 10.5M18.5 20.5L16.5 10.5' stroke={color} strokeLinecap='round' />
    <path d='M12 17.5V15.5' stroke={color} strokeLinecap='round' />
    <path
      d='M12 7.5V4C12 3.7643 12 3.64645 12.0732 3.57322C12.1464 3.5 12.2643 3.5 12.5 3.5H18.5L16.5 5.5L18.5 7.5H12ZM12 7.5V12'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const RoadLight: React.FC<IconComponentProps> = ({
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
      d='M8.57385 19.3523L11.9553 12.5894C11.9737 12.5526 12.0263 12.5526 12.0447 12.5894L15.4261 19.3523C15.4483 19.3965 15.3996 19.4426 15.3566 19.4181L12.0248 17.5142C12.0094 17.5054 11.9906 17.5054 11.9752 17.5142L8.64338 19.4181C8.60043 19.4426 8.55173 19.3965 8.57385 19.3523Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M16 16.5H18.3C19.4201 16.5 19.9802 16.5 20.408 16.282C20.7843 16.0903 21.0903 15.7843 21.282 15.408C21.5 14.9802 21.5 14.4201 21.5 13.3V7.7C21.5 6.5799 21.5 6.01984 21.282 5.59202C21.0903 5.21569 20.7843 4.90973 20.408 4.71799C19.9802 4.5 19.4201 4.5 18.3 4.5H5.7C4.5799 4.5 4.01984 4.5 3.59202 4.71799C3.21569 4.90973 2.90973 5.21569 2.71799 5.59202C2.5 6.01984 2.5 6.57989 2.5 7.7V13.3C2.5 14.4201 2.5 14.9802 2.71799 15.408C2.90973 15.7843 3.21569 16.0903 3.59202 16.282C4.01984 16.5 4.57989 16.5 5.7 16.5H8'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M5.5 16.5L7.5 4.5' stroke={color} strokeLinecap='round' />
    <path d='M18.5 16.5L16.5 4.5' stroke={color} strokeLinecap='round' />
    <path d='M12 9.5V6.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const RodaDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M8.57385 19.3523L11.9553 12.5894C11.9737 12.5526 12.0263 12.5526 12.0447 12.5894L15.4261 19.3523C15.4483 19.3965 15.3996 19.4426 15.3566 19.4181L12.0248 17.5142C12.0094 17.5054 11.9906 17.5054 11.9752 17.5142L8.64338 19.4181C8.60043 19.4426 8.55173 19.3965 8.57385 19.3523Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.50822 3.99999H16.4918C16.4977 3.99988 16.5036 3.99988 16.5094 3.99999H18.3L18.3214 3.99999C18.8633 3.99998 19.3004 3.99998 19.6543 4.0289C20.0187 4.05867 20.3388 4.12158 20.635 4.27247C21.1054 4.51215 21.4878 4.8946 21.7275 5.36501C21.8784 5.66116 21.9413 5.98125 21.9711 6.34567C22 6.69961 22 7.13668 22 7.67857V7.69999V13.3V13.3214C22 13.8633 22 14.3004 21.9711 14.6543C21.9413 15.0187 21.8784 15.3388 21.7275 15.635C21.4878 16.1054 21.1054 16.4878 20.635 16.7275C20.3388 16.8784 20.0187 16.9413 19.6543 16.9711C19.3425 16.9966 18.9662 16.9996 18.5106 16.9999C18.5033 17.0001 18.4961 17.0001 18.4889 17L18.3215 17H18.3214H18.3H16C15.7239 17 15.5 16.7761 15.5 16.5C15.5 16.2238 15.7239 16 16 16H17.9098L16.0764 4.99999H7.92356L6.09023 16H8C8.27614 16 8.5 16.2238 8.5 16.5C8.5 16.7761 8.27614 17 8 17H5.7H5.67858H5.67853L5.51106 17C5.50388 17.0001 5.49668 17.0001 5.48945 16.9999C5.0338 16.9996 4.65748 16.9966 4.34569 16.9711C3.98126 16.9413 3.66117 16.8784 3.36502 16.7275C2.89462 16.4878 2.51217 16.1054 2.27248 15.635C2.12159 15.3388 2.05868 15.0187 2.02891 14.6543C1.99999 14.3004 2 13.8633 2 13.3214V13.3V7.69999V7.67858V7.67858C2 7.13669 1.99999 6.69961 2.02891 6.34567C2.05868 5.98125 2.12159 5.66116 2.27248 5.36501C2.51217 4.8946 2.89462 4.51215 3.36502 4.27247C3.66117 4.12158 3.98126 4.05867 4.34569 4.0289C4.69963 3.99998 5.1367 3.99998 5.6786 3.99999L5.7 3.99999H7.49058C7.49644 3.99988 7.50232 3.99988 7.50822 3.99999ZM18.9232 15.9981L17.0902 4.99999H18.3C18.8683 4.99999 19.2645 5.00038 19.5729 5.02557C19.8755 5.0503 20.0493 5.09638 20.181 5.16348C20.4632 5.30729 20.6927 5.53676 20.8365 5.819C20.9036 5.95068 20.9497 6.12452 20.9744 6.42711C20.9996 6.73553 21 7.13168 21 7.69999V13.3C21 13.8683 20.9996 14.2644 20.9744 14.5729C20.9497 14.8755 20.9036 15.0493 20.8365 15.181C20.6927 15.4632 20.4632 15.6927 20.181 15.8365C20.0493 15.9036 19.8755 15.9497 19.5729 15.9744C19.3921 15.9892 19.1812 15.9954 18.9232 15.9981ZM5.07676 15.9981L6.90977 4.99999H5.7C5.1317 4.99999 4.73554 5.00038 4.42712 5.02557C4.12454 5.0503 3.95069 5.09638 3.81901 5.16348C3.53677 5.30729 3.3073 5.53676 3.16349 5.819C3.0964 5.95068 3.05031 6.12452 3.02559 6.42711C3.00039 6.73553 3 7.13168 3 7.69999V13.3C3 13.8683 3.00039 14.2644 3.02559 14.5729C3.05031 14.8755 3.0964 15.0493 3.16349 15.181C3.3073 15.4632 3.53677 15.6927 3.81901 15.8365C3.95069 15.9036 4.12454 15.9497 4.42712 15.9744C4.60787 15.9892 4.81875 15.9954 5.07676 15.9981ZM12.5 6.49999C12.5 6.22384 12.2761 5.99999 12 5.99999C11.7239 5.99999 11.5 6.22384 11.5 6.49999V9.49999C11.5 9.77613 11.7239 9.99999 12 9.99999C12.2761 9.99999 12.5 9.77613 12.5 9.49999V6.49999Z'
      fill={color}
      fillOpacity='0.25'
    />
  </svg>
)

export const Speed: React.FC<IconComponentProps> = ({
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
      d='M4 14C4 12.9494 4.20693 11.9091 4.60896 10.9385C5.011 9.96793 5.60028 9.08601 6.34315 8.34314C7.08602 7.60028 7.96793 7.011 8.93853 6.60896C9.90914 6.20693 10.9494 6 12 6C13.0506 6 14.0909 6.20693 15.0615 6.60897C16.0321 7.011 16.914 7.60028 17.6569 8.34315C18.3997 9.08602 18.989 9.96793 19.391 10.9385C19.7931 11.9091 20 12.9494 20 14'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M10 15C10 14.7374 10.0517 14.4773 10.1522 14.2346C10.2528 13.992 10.4001 13.7715 10.5858 13.5858C10.7715 13.4001 10.992 13.2528 11.2346 13.1522C11.4773 13.0517 11.7374 13 12 13C12.2626 13 12.5227 13.0517 12.7654 13.1522C13.008 13.2528 13.2285 13.4001 13.4142 13.5858C13.5999 13.7715 13.7473 13.992 13.8478 14.2346C13.9483 14.4773 14 14.7374 14 15'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M13 13L15 10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20 14V15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15V14'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const SpeedAltOne: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.53086 18.257C4.32959 17.015 3.51044 15.4526 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3C13.78 3 15.5201 3.52784 17.0001 4.51677C18.4802 5.50571 19.6337 6.91131 20.3149 8.55585C20.9961 10.2004 21.1743 12.01 20.8271 13.7558C20.4896 15.4526 19.6704 17.015 18.4692 18.257C18.4116 18.3166 18.3165 18.3165 18.2579 18.2579L14.2274 14.2274C14.1688 14.1688 14.0741 14.1691 14.0127 14.2247C13.4804 14.7065 12.7745 15 12 15C11.2255 15 10.5196 14.7065 9.98734 14.2247C9.92592 14.1691 9.83119 14.1688 9.77262 14.2274L5.74211 18.2579C5.68353 18.3165 5.58845 18.3166 5.53086 18.257ZM17.5145 9.85749C17.9881 9.57334 18.1416 8.95908 17.8575 8.4855C17.5733 8.01192 16.9591 7.85836 16.4855 8.14251L11.4855 11.1425C11.0119 11.4267 10.8584 12.0409 11.1425 12.5145C11.4267 12.9881 12.0409 13.1416 12.5145 12.8575L17.5145 9.85749Z'
      fill={color}
    />
  </svg>
)

export const SpeedAlt: React.FC<IconComponentProps> = ({
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
      d='M6.34315 17.6569C5.22433 16.538 4.4624 15.1126 4.15372 13.5607C3.84504 12.0089 4.00346 10.4003 4.60896 8.93853C5.21446 7.47672 6.23984 6.22729 7.55544 5.34824C8.87103 4.46919 10.4177 4 12 4C13.5823 4 15.129 4.46919 16.4446 5.34824C17.7602 6.22729 18.7855 7.47672 19.391 8.93853C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 12L16 10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const SpeedAltDuotone: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.17294 13.7558C3.51044 15.4526 4.32959 17.015 5.53086 18.257C5.58845 18.3166 5.68353 18.3165 5.74211 18.2579L9.77262 14.2274C9.83119 14.1688 9.92592 14.1691 9.98734 14.2247C10.5196 14.7065 11.2255 15 12 15C12.7745 15 13.4804 14.7065 14.0127 14.2247C14.0741 14.1691 14.1688 14.1688 14.2274 14.2274L18.2579 18.2579C18.3165 18.3165 18.4116 18.3166 18.4692 18.257C19.6704 17.015 20.4896 15.4526 20.8271 13.7558C21.1743 12.01 20.9961 10.2004 20.3149 8.55585C19.6337 6.91131 18.4802 5.50571 17.0001 4.51677C15.5201 3.52784 13.78 3 12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M12 12L17 9'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const SpeedAltDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M6.6967 17.3033C5.64781 16.2544 4.9335 14.918 4.64411 13.4632C4.35472 12.0083 4.50325 10.5003 5.0709 9.12987C5.63856 7.75943 6.59985 6.58809 7.83322 5.76398C9.06659 4.93987 10.5166 4.5 12 4.5C13.4834 4.5 14.9334 4.93987 16.1668 5.76398C17.4001 6.58809 18.3614 7.75943 18.9291 9.12987C19.4968 10.5003 19.6453 12.0083 19.3559 13.4632C19.0665 14.918 18.3522 16.2544 17.3033 17.3033'
      stroke={color}
      strokeOpacity='0.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 12L16 10' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const SpeedAltLight: React.FC<IconComponentProps> = ({
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
      d='M6.6967 17.3033C5.64781 16.2544 4.9335 14.918 4.64411 13.4632C4.35472 12.0083 4.50325 10.5003 5.0709 9.12987C5.63856 7.75943 6.59985 6.58809 7.83322 5.76398C9.06659 4.93987 10.5166 4.5 12 4.5C13.4834 4.5 14.9334 4.93987 16.1668 5.76398C17.4001 6.58809 18.3614 7.75943 18.9291 9.12987C19.4968 10.5003 19.6453 12.0083 19.3559 13.4632C19.0665 14.918 18.3522 16.2544 17.3033 17.3033'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 12L16 10' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const SpeedDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M9.5 15C9.5 14.6717 9.56466 14.3466 9.6903 14.0433C9.81594 13.74 10.0001 13.4644 10.2322 13.2322C10.4644 13.0001 10.74 12.8159 11.0433 12.6903C11.3466 12.5647 11.6717 12.5 12 12.5C12.3283 12.5 12.6534 12.5647 12.9567 12.6903C13.26 12.8159 13.5356 13.0001 13.7678 13.2322C13.9999 13.4644 14.1841 13.74 14.3097 14.0433C14.4353 14.3466 14.5 14.6717 14.5 15'
      stroke={color}
      strokeLinejoin='round'
    />
    <path d='M13.5 12.5L15.5 9.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.93853 6.60896C9.90914 6.20693 10.9494 6 12 6C13.0506 6 14.0909 6.20693 15.0615 6.60897C16.0321 7.011 16.914 7.60028 17.6569 8.34315C18.3997 9.08602 18.989 9.96793 19.391 10.9385C19.7931 11.9091 20 12.9494 20 14V14.5C20 14.7761 19.7761 15 19.5 15H4.5C4.22386 15 4 14.7761 4 14.5V14C4 12.9494 4.20693 11.9091 4.60896 10.9385C5.011 9.96793 5.60028 9.08601 6.34315 8.34314C7.08602 7.60028 7.96793 7.011 8.93853 6.60896ZM3 14C3 12.8181 3.23279 11.6478 3.68508 10.5558C4.13738 9.46392 4.80031 8.47176 5.63604 7.63604C6.47177 6.80031 7.46392 6.13738 8.55585 5.68508C9.64778 5.23279 10.8181 5 12 5C13.1819 5 14.3522 5.23279 15.4442 5.68509C16.5361 6.13738 17.5282 6.80031 18.364 7.63604C19.1997 8.47177 19.8626 9.46392 20.3149 10.5559C20.7672 11.6478 21 12.8181 21 14V14.5C21 15.3284 20.3284 16 19.5 16H4.5C3.67157 16 3 15.3284 3 14.5V14Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M16.5 15.5L7.5 15.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const SpeedFill: React.FC<IconComponentProps> = ({
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21 15V14C21 9.02944 16.9706 5 12 5C7.02944 5 3 9.02944 3 14V15C3 16.1046 3.89543 17 5 17H19C20.1046 17 21 16.1046 21 15ZM15.5547 9.16806C16.0142 9.47441 16.1384 10.0953 15.8321 10.5548L14.2501 12.9278C14.7158 13.4361 15 14.1135 15 14.8572C15 14.9361 14.936 15.0001 14.8571 15.0001H9.14286C9.06396 15.0001 9 14.9361 9 14.8572C9 13.2793 10.2792 12.0001 11.8571 12.0001H12.1429C12.2479 12.0001 12.3516 12.0058 12.4537 12.0168L14.1679 9.44541C14.4743 8.98588 15.0952 8.8617 15.5547 9.16806Z'
      fill={color}
    />
  </svg>
)

export const SpeedFillDuotone: React.FC<IconComponentProps> = ({
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
      d='M21 14V15C21 16.1046 20.1046 17 19 17H5C3.89543 17 3 16.1046 3 15V14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.8321 10.5548C16.1384 10.0953 16.0142 9.47441 15.5547 9.16806C15.0952 8.8617 14.4743 8.98588 14.1679 9.44541L12.4537 12.0168C12.3516 12.0058 12.2479 12.0001 12.1429 12.0001H11.8571C10.2792 12.0001 9 13.2793 9 14.8572C9 14.9361 9.06396 15.0001 9.14286 15.0001H14.8571C14.936 15.0001 15 14.9361 15 14.8572C15 14.1135 14.7158 13.4361 14.2501 12.9278L15.8321 10.5548Z'
      fill={color}
    />
  </svg>
)

export const SpeedLight: React.FC<IconComponentProps> = ({
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
      d='M3.5 14C3.5 12.8838 3.71986 11.7785 4.14702 10.7472C4.57419 9.71592 5.2003 8.77889 5.98959 7.98959C6.77889 7.20029 7.71593 6.57419 8.74719 6.14702C9.77846 5.71986 10.8838 5.5 12 5.5C13.1162 5.5 14.2215 5.71986 15.2528 6.14703C16.2841 6.57419 17.2211 7.2003 18.0104 7.9896C18.7997 8.77889 19.4258 9.71593 19.853 10.7472C20.2801 11.7785 20.5 12.8838 20.5 14'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M9.5 15C9.5 14.6717 9.56466 14.3466 9.6903 14.0433C9.81594 13.74 10.0001 13.4644 10.2322 13.2322C10.4644 13.0001 10.74 12.8159 11.0433 12.6903C11.3466 12.5647 11.6717 12.5 12 12.5C12.3283 12.5 12.6534 12.5647 12.9567 12.6903C13.26 12.8159 13.5356 13.0001 13.7678 13.2322C13.9999 13.4644 14.1841 13.74 14.3097 14.0433C14.4353 14.3466 14.5 14.6717 14.5 15'
      stroke={color}
      strokeLinejoin='round'
    />
    <path d='M13.5 12.5L15.5 9.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M20.5 14V14.5C20.5 15.0523 20.0523 15.5 19.5 15.5H4.5C3.94772 15.5 3.5 15.0523 3.5 14.5V14'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
