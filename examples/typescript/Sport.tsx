import React from 'react'

import { type IconComponentProps } from './types'

export const Calories: React.FC<IconComponentProps> = ({
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
      d='M14.5 10.0003C14.5 9.20875 15.5528 8.99895 15.8321 9.73957C16.5077 11.5311 17 13.1337 17 14.0002C17 16.7616 14.7614 19.0002 12 19.0002C9.23858 19.0002 7 16.7616 7 14.0002C7 13.0693 7.56822 11.2887 8.32156 9.33698C9.29743 6.80879 9.78536 5.54469 10.3877 5.4766C10.5804 5.45482 10.7907 5.49399 10.9626 5.58371C11.5 5.86413 11.5 7.24285 11.5 10.0003C11.5 10.8287 12.1716 11.5003 13 11.5003C13.8284 11.5003 14.5 10.8287 14.5 10.0003Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M11 19L10.7372 18.343C10.2816 17.204 10.4737 15.9079 11.24 14.95V14.95C11.6296 14.463 12.3704 14.463 12.76 14.95V14.95C13.5263 15.9079 13.7184 17.204 13.2628 18.343L13 19'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const CaloriesLight: React.FC<IconComponentProps> = ({
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
      d='M14.5 10.0003C14.5 9.20875 15.5528 8.99895 15.8321 9.73957C16.5077 11.5311 17 13.1337 17 14.0002C17 16.7616 14.7614 19.0002 12 19.0002C9.23858 19.0002 7 16.7616 7 14.0002C7 13.0693 7.56822 11.2887 8.32156 9.33698C9.29743 6.80879 9.78536 5.54469 10.3877 5.4766C10.5804 5.45482 10.7907 5.49399 10.9626 5.58371C11.5 5.86413 11.5 7.24285 11.5 10.0003C11.5 10.8287 12.1716 11.5003 13 11.5003C13.8284 11.5003 14.5 10.8287 14.5 10.0003Z'
      stroke={color}
    />
    <path
      d='M11 19L10.7372 18.343C10.2816 17.204 10.4737 15.9079 11.24 14.95V14.95C11.6296 14.463 12.3704 14.463 12.76 14.95V14.95C13.5263 15.9079 13.7184 17.204 13.2628 18.343L13 19'
      stroke={color}
    />
  </svg>
)

export const Carbs: React.FC<IconComponentProps> = ({
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
      d='M12 4L10.8522 5.91303C9.94978 7.41704 9.49857 8.16905 9.49857 9C9.49857 9.83095 9.94978 10.583 10.8522 12.087L11.5713 13.2854C11.7627 13.6045 11.8585 13.7641 12 13.7641C12.1415 13.7641 12.2373 13.6045 12.4287 13.2854L13.1478 12.087C14.0502 10.583 14.5014 9.83095 14.5014 9C14.5014 8.16905 14.0502 7.41704 13.1478 5.91303L12 4ZM12 4V2'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M20.1603 12.5981L17.9296 12.5606C16.1759 12.5311 15.2991 12.5163 14.5794 12.9318C13.8598 13.3473 13.4342 14.114 12.5828 15.6475L11.9045 16.8695C11.7239 17.1949 11.6336 17.3575 11.7043 17.4801C11.7751 17.6027 11.9612 17.6058 12.3332 17.6121L13.7307 17.6356C15.4844 17.6651 16.3612 17.6799 17.0809 17.2644C17.8005 16.8489 18.2262 16.0821 19.0775 14.5486L20.1603 12.5981ZM20.1603 12.5981L21.8923 11.5981'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M3.83972 12.5981L6.07035 12.5606C7.82407 12.5311 8.70093 12.5163 9.42056 12.9318C10.1402 13.3473 10.5658 14.114 11.4172 15.6475L12.0955 16.8695C12.2761 17.1949 12.3664 17.3575 12.2957 17.4801C12.2249 17.6027 12.0388 17.6058 11.6668 17.6121L10.2693 17.6356C8.51561 17.6651 7.63876 17.6799 6.91913 17.2644C6.1995 16.8489 5.77385 16.0821 4.92254 14.5486L3.83972 12.5981ZM3.83972 12.5981L2.10767 11.5981'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M12 15V22.5' stroke={color} strokeWidth='2' />
  </svg>
)

export const CarbsLight: React.FC<IconComponentProps> = ({
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
      d='M12 4L10.8522 5.91303C9.94978 7.41704 9.49857 8.16905 9.49857 9C9.49857 9.83095 9.94978 10.583 10.8522 12.087L11.5713 13.2854C11.7627 13.6045 11.8585 13.7641 12 13.7641C12.1415 13.7641 12.2373 13.6045 12.4287 13.2854L13.1478 12.087C14.0502 10.583 14.5014 9.83095 14.5014 9C14.5014 8.16905 14.0502 7.41704 13.1478 5.91303L12 4ZM12 4V2'
      stroke={color}
    />
    <path
      d='M20.1603 12.5981L17.9296 12.5606C16.1759 12.5311 15.2991 12.5163 14.5794 12.9318C13.8598 13.3473 13.4342 14.114 12.5828 15.6475L11.9045 16.8695C11.7239 17.1949 11.6336 17.3575 11.7043 17.4801C11.7751 17.6027 11.9612 17.6058 12.3332 17.6121L13.7307 17.6356C15.4844 17.6651 16.3612 17.6799 17.0809 17.2644C17.8005 16.8489 18.2262 16.0821 19.0775 14.5486L20.1603 12.5981ZM20.1603 12.5981L21.8923 11.5981'
      stroke={color}
    />
    <path
      d='M3.83972 12.5981L6.07035 12.5606C7.82407 12.5311 8.70093 12.5163 9.42056 12.9318C10.1402 13.3473 10.5658 14.114 11.4172 15.6475L12.0955 16.8695C12.2761 17.1949 12.3664 17.3575 12.2957 17.4801C12.2249 17.6027 12.0388 17.6058 11.6668 17.6121L10.2693 17.6356C8.51561 17.6651 7.63876 17.6799 6.91913 17.2644C6.1995 16.8489 5.77385 16.0821 4.92254 14.5486L3.83972 12.5981ZM3.83972 12.5981L2.10767 11.5981'
      stroke={color}
    />
    <path d='M12 15V22.5' stroke={color} />
  </svg>
)

export const Fat: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='3' stroke={color} strokeWidth='2' />
    <path
      d='M15 12L15.3903 11.5409C16.3112 10.4575 18.0791 11.2093 17.9376 12.6241V12.6241C17.79 14.0995 19.6904 14.8188 20.5568 13.6155L21 13'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M9 12.5L8.98404 12.5851C8.66236 14.3007 6.2136 14.3253 5.85759 12.6164L5.82217 12.4464C5.53532 11.0695 3.69777 10.7789 3 12V12'
      stroke={color}
      strokeWidth='2'
    />
    <circle cx='9.5' cy='6.5' r='0.5' stroke={color} />
    <circle cx='16.5' cy='8.5' r='0.5' stroke={color} />
    <circle cx='13.5' cy='5.5' r='0.5' stroke={color} />
  </svg>
)

export const FatLight: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='8.5' stroke={color} />
    <circle cx='12' cy='12' r='3' stroke={color} />
    <path
      d='M15 12L15.6263 11.2632C16.475 10.2647 18.1042 10.9576 17.9739 12.2615V12.2615C17.833 13.6704 19.6928 14.3019 20.4389 13.0985L20.5 13'
      stroke={color}
    />
    <path
      d='M9 12L8.82254 13.0056C8.54237 14.5932 6.27667 14.628 5.94787 13.0498L5.77663 12.2278C5.53741 11.0795 3.96205 10.9219 3.5 12V12'
      stroke={color}
    />
    <circle cx='9.5' cy='6.5' r='0.5' stroke={color} />
    <circle cx='16.5' cy='8.5' r='0.5' stroke={color} />
    <circle cx='13.5' cy='5.5' r='0.5' stroke={color} />
  </svg>
)

export const Protein: React.FC<IconComponentProps> = ({
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
      d='M9.29937 5.68122C10.6377 3.85696 13.3623 3.85696 14.7006 5.68122L15.4675 6.72652C17.127 8.98854 18.1662 11.6451 18.4823 14.4327V14.4327C18.781 17.0685 17.1309 19.534 14.5803 20.2628L13.8118 20.4824C12.6276 20.8207 11.3724 20.8207 10.1882 20.4824L9.41969 20.2628C6.86912 19.534 5.21896 17.0685 5.51775 14.4327V14.4327C5.83375 11.6451 6.87303 8.98854 8.53251 6.72652L9.29937 5.68122Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const ProteinLight: React.FC<IconComponentProps> = ({
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
      d='M9.29937 5.68122C10.6377 3.85696 13.3623 3.85696 14.7006 5.68122L15.4675 6.72652C17.127 8.98854 18.1662 11.6451 18.4823 14.4327V14.4327C18.781 17.0685 17.1309 19.534 14.5803 20.2628L13.8118 20.4824C12.6276 20.8207 11.3724 20.8207 10.1882 20.4824L9.41969 20.2628C6.86912 19.534 5.21896 17.0685 5.51775 14.4327V14.4327C5.83375 11.6451 6.87303 8.98854 8.53251 6.72652L9.29937 5.68122Z'
      stroke={color}
    />
  </svg>
)

export const Trophy: React.FC<IconComponentProps> = ({
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
    <path d='M16.5 20.5H7.5' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M13 18.5C13 19.0523 12.5523 19.5 12 19.5C11.4477 19.5 11 19.0523 11 18.5H13ZM11 18.5V16H13V18.5H11Z'
      fill={color}
    />
    <path d='M10.5 9.5H13.5' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M5.5 14.5C5.5 14.5 3.5 13 3.5 10.5C3.5 9.73465 3.5 9.06302 3.5 8.49945C3.5 7.39488 4.39543 6.5 5.5 6.5V6.5C6.60457 6.5 7.5 7.39543 7.5 8.5V9.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M18.5 14.5C18.5 14.5 20.5 13 20.5 10.5C20.5 9.73465 20.5 9.06302 20.5 8.49945C20.5 7.39488 19.6046 6.5 18.5 6.5V6.5C17.3954 6.5 16.5 7.39543 16.5 8.5V9.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M16.5 11.3593V7.5C16.5 6.39543 15.6046 5.5 14.5 5.5H9.5C8.39543 5.5 7.5 6.39543 7.5 7.5V11.3593C7.5 12.6967 8.16841 13.9456 9.2812 14.6875L11.4453 16.1302C11.7812 16.3541 12.2188 16.3541 12.5547 16.1302L14.7188 14.6875C15.8316 13.9456 16.5 12.6967 16.5 11.3593Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const TrophyLight: React.FC<IconComponentProps> = ({
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
    <path d='M16.5 20.5H7.5' stroke={color} strokeLinecap='round' />
    <path
      d='M12.5 18.5C12.5 18.7761 12.2761 19 12 19C11.7239 19 11.5 18.7761 11.5 18.5H12.5ZM11.5 18.5V16H12.5V18.5H11.5Z'
      fill={color}
    />
    <path d='M10.5 9.5H13.5' stroke={color} strokeLinecap='round' />
    <path
      d='M5.5 14.5C5.5 14.5 3.5 13 3.5 10.5C3.5 9.73465 3.5 9.06302 3.5 8.49945C3.5 7.39488 4.39543 6.5 5.5 6.5V6.5C6.60457 6.5 7.5 7.39543 7.5 8.5V9.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M18.5 14.5C18.5 14.5 20.5 13 20.5 10.5C20.5 9.73465 20.5 9.06302 20.5 8.49945C20.5 7.39488 19.6046 6.5 18.5 6.5V6.5C17.3954 6.5 16.5 7.39543 16.5 8.5V9.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M16.5 11.3593V7.5C16.5 6.39543 15.6046 5.5 14.5 5.5H9.5C8.39543 5.5 7.5 6.39543 7.5 7.5V11.3593C7.5 12.6967 8.16841 13.9456 9.2812 14.6875L11.4453 16.1302C11.7812 16.3541 12.2188 16.3541 12.5547 16.1302L14.7188 14.6875C15.8316 13.9456 16.5 12.6967 16.5 11.3593Z'
      stroke={color}
    />
  </svg>
)

export const Water: React.FC<IconComponentProps> = ({
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
      d='M12 18C11.5597 18 11.1318 17.8547 10.7825 17.5867C10.4332 17.3187 10.1821 16.9429 10.0681 16.5176'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M10.4243 4.67868C11.0553 3.60606 11.3707 3.06975 11.8223 2.98822C11.9398 2.967 12.0602 2.967 12.1777 2.98822C12.6293 3.06975 12.9447 3.60606 13.5757 4.67868L15.244 7.51482C16.41 9.49693 17.3197 11.619 17.9515 13.8301V13.8301C18.9781 17.4232 16.2801 21 12.5432 21H11.4568C7.71989 21 5.02193 17.4232 6.04854 13.8301V13.8301C6.6803 11.619 7.59004 9.49693 8.75599 7.51482L10.4243 4.67868Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const WaterLight: React.FC<IconComponentProps> = ({
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
      d='M12 18C11.5597 18 11.1318 17.8547 10.7825 17.5867C10.4332 17.3187 10.1821 16.9429 10.0681 16.5176'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M10.4243 4.67868C11.0553 3.60606 11.3707 3.06975 11.8223 2.98822C11.9398 2.967 12.0602 2.967 12.1777 2.98822C12.6293 3.06975 12.9447 3.60606 13.5757 4.67868L15.244 7.51482C16.41 9.49693 17.3197 11.619 17.9515 13.8301V13.8301C18.9781 17.4232 16.2801 21 12.5432 21H11.4568C7.71989 21 5.02193 17.4232 6.04854 13.8301V13.8301C6.6803 11.619 7.59004 9.49693 8.75599 7.51482L10.4243 4.67868Z'
      stroke={color}
    />
  </svg>
)
