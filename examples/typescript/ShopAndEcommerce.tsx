import React from 'react'

import { type IconComponentProps } from './types'

export const Bag: React.FC<IconComponentProps> = ({
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
      d='M8 8L8 7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7L16 8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M15 14V12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 14V12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M4 12C4 10.1144 4 9.17157 4.58579 8.58579C5.17157 8 6.11438 8 8 8H16C17.8856 8 18.8284 8 19.4142 8.58579C20 9.17157 20 10.1144 20 12V13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21V21C8.22876 21 6.34315 21 5.17157 19.8284C4 18.6569 4 16.7712 4 13V12Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const BagAlt: React.FC<IconComponentProps> = ({
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
      d='M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const BagAltDuotone: React.FC<IconComponentProps> = ({
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
      d='M3.95638 14.7835C4.45435 11.5467 4.70334 9.92828 5.82715 8.96414C6.95096 8 8.58843 8 11.8634 8H12.1366C15.4116 8 17.049 8 18.1728 8.96414C19.2967 9.92828 19.5456 11.5467 20.0436 14.7835L20.6455 18.6959C20.8103 19.7668 20.8927 20.3023 20.5934 20.6511C20.2941 21 19.7523 21 18.6688 21H5.33122C4.24771 21 3.70595 21 3.40665 20.6511C3.10734 20.3023 3.18972 19.7668 3.35448 18.6959L3.95638 14.7835Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M8.5 11L8.5 7.5C8.5 5.567 10.067 4 12 4V4C13.933 4 15.5 5.567 15.5 7.5L15.5 11'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const BagAltDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M4.43141 14.9116C4.91901 11.9859 5.16281 10.5231 6.13201 9.60143C6.24307 9.49581 6.36011 9.39667 6.48254 9.30448C7.55103 8.5 9.03402 8.5 12 8.5V8.5C14.966 8.5 16.449 8.5 17.5175 9.30448C17.6399 9.39667 17.7569 9.49581 17.868 9.60143C18.8372 10.5231 19.081 11.9859 19.5686 14.9116L20.1119 18.1712C20.292 19.2522 20.3821 19.7927 20.0826 20.1464C19.783 20.5 19.235 20.5 18.1391 20.5H5.86092C4.76498 20.5 4.21701 20.5 3.91744 20.1464C3.61788 19.7927 3.70796 19.2522 3.88813 18.1712L4.43141 14.9116Z'
      stroke={color}
      strokeOpacity='0.25'
    />
    <path
      d='M8.5 11L8.5 7.5C8.5 5.567 10.067 4 12 4V4C13.933 4 15.5 5.567 15.5 7.5L15.5 11'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const BagAltFill: React.FC<IconComponentProps> = ({
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
      d='M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z'
      fill={color}
    />
  </svg>
)

export const BagAltLight: React.FC<IconComponentProps> = ({
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
      d='M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z'
      stroke={color}
    />
  </svg>
)

export const BagDuotone: React.FC<IconComponentProps> = ({
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
      d='M4.85795 9.84661C4.92534 8.97057 4.95903 8.53256 5.24658 8.26628C5.53413 8 5.97344 8 6.85206 8H17.1479C18.0266 8 18.4659 8 18.7534 8.26628C19.041 8.53256 19.0747 8.97057 19.142 9.84661L19.3864 13.0236C19.6495 16.4434 19.781 18.1534 18.924 19.3409C18.7336 19.6047 18.5117 19.8443 18.2632 20.0544C17.1449 21 15.43 21 12 21C8.57003 21 6.85505 21 5.73678 20.0544C5.48832 19.8443 5.26641 19.6047 5.07599 19.3409C4.21897 18.1534 4.35051 16.4434 4.61357 13.0236L4.85795 9.84661Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M8.5 8L8.5 6.5C8.5 4.567 10.067 3 12 3V3C13.933 3 15.5 4.567 15.5 6.5L15.5 8'
      stroke={color}
    />
    <path
      d='M8 11.5C8 11.7761 8.22386 12 8.5 12C8.77614 12 9 11.7761 9 11.5H8ZM9 11.5V10H8V11.5H9Z'
      fill={color}
    />
    <path
      d='M15 11.5C15 11.7761 15.2239 12 15.5 12C15.7761 12 16 11.7761 16 11.5H15ZM16 11.5V10H15V11.5H16Z'
      fill={color}
    />
  </svg>
)

export const BagDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M5.34717 10.3339C5.41971 9.46346 5.45598 9.02824 5.74302 8.76412C6.03007 8.5 6.4668 8.5 7.34027 8.5H16.6597C17.5332 8.5 17.9699 8.5 18.257 8.76412C18.544 9.02824 18.5803 9.46346 18.6528 10.3339L18.8772 13.0259C19.1202 15.9422 19.2417 17.4004 18.6308 18.4758C18.3302 19.0049 17.9129 19.4584 17.4106 19.8019C16.3896 20.5 14.9264 20.5 12 20.5V20.5C9.07359 20.5 7.61038 20.5 6.58943 19.8019C6.08711 19.4584 5.66979 19.0049 5.36922 18.4758C4.7583 17.4004 4.87982 15.9422 5.12284 13.0259L5.34717 10.3339Z'
      stroke={color}
      strokeOpacity='0.25'
    />
    <path
      d='M8.5 7L8.5 6.5C8.5 4.567 10.067 3 12 3V3C13.933 3 15.5 4.567 15.5 6.5L15.5 7'
      stroke={color}
    />
    <path d='M8.5 12.5V11' stroke={color} strokeLinecap='round' />
    <path d='M15.5 12.5V11' stroke={color} strokeLinecap='round' />
  </svg>
)

export const BagFill: React.FC<IconComponentProps> = ({
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
      d='M8 8L8 7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7L16 8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.58579 7.58579C3 8.17157 3 9.11438 3 11V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V11C21 9.11438 21 8.17157 20.4142 7.58579C19.8284 7 18.8856 7 17 7H7C5.11438 7 4.17157 7 3.58579 7.58579ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12V14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14V12Z'
      fill={color}
    />
  </svg>
)

export const BagLight: React.FC<IconComponentProps> = ({
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
      d='M7.5 8.5L7.5 8C7.5 7.53566 7.5 7.30349 7.51926 7.10793C7.70631 5.20882 9.20882 3.70631 11.1079 3.51926C11.3035 3.5 11.5357 3.5 12 3.5V3.5C12.4643 3.5 12.6965 3.5 12.8921 3.51926C14.7912 3.7063 16.2937 5.20882 16.4807 7.10793C16.5 7.30349 16.5 7.53566 16.5 8L16.5 8.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M15.5 13.5V11.5' stroke={color} strokeLinecap='round' />
    <path d='M8.5 13.5V11.5' stroke={color} strokeLinecap='round' />
    <path
      d='M5.5 12.1C5.5 10.4029 5.5 9.55442 6.02721 9.02721C6.55442 8.5 7.40294 8.5 9.1 8.5H14.9C16.5971 8.5 17.4456 8.5 17.9728 9.02721C18.5 9.55442 18.5 10.4029 18.5 12.1V14.5C18.5 17.3284 18.5 18.7426 17.6213 19.6213C16.7426 20.5 15.3284 20.5 12.5 20.5H11.5C8.67157 20.5 7.25736 20.5 6.37868 19.6213C5.5 18.7426 5.5 17.3284 5.5 14.5V12.1Z'
      stroke={color}
    />
  </svg>
)

export const BasketOne: React.FC<IconComponentProps> = ({
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
    <path d='M12 5L12 3' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M10 16L9.5 13' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M13.9999 16L14.4999 13' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M2 9H22V9C20.7333 9 20.1 9 19.6161 9.29969C19.456 9.39881 19.3108 9.52003 19.1846 9.65977C18.8032 10.0822 18.6899 10.7054 18.4633 11.9516L17.5972 16.7155C17.3117 18.2859 17.1689 19.071 16.6123 19.5355C16.0558 20 15.2577 20 13.6617 20H10.3383C8.74225 20 7.94422 20 7.38766 19.5355C6.83109 19.071 6.68834 18.2859 6.40283 16.7155L5.53666 11.9516C5.31007 10.7054 5.19677 10.0822 4.81536 9.65977C4.6892 9.52003 4.54395 9.39881 4.38391 9.29969C3.90002 9 3.26668 9 2 9V9Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const Basket: React.FC<IconComponentProps> = ({
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
    <path d='M10 15L10 12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M8 5L6 9M16 5L18 9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M14 15L14 12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M3 9V9C3.4886 9 3.7329 9 3.94853 9.04823C4.50266 9.17219 4.97798 9.52584 5.25594 10.021C5.3641 10.2137 5.4343 10.4477 5.5747 10.9157L7.14482 16.1494C7.55677 17.5226 7.76275 18.2092 8.2942 18.6046C8.82565 19 9.54247 19 10.9761 19H13.0239C14.4575 19 15.1744 19 15.7058 18.6046C16.2372 18.2092 16.4432 17.5226 16.8552 16.1494L18.4253 10.9157C18.5657 10.4477 18.6359 10.2137 18.7441 10.021C19.022 9.52584 19.4973 9.17219 20.0515 9.04823C20.2671 9 20.5114 9 21 9V9'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M3 9L21 9' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const BasketAlt: React.FC<IconComponentProps> = ({
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
    <path d='M10 16L10 15' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M8 4L6 7M16 4L18 7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M14 16L14 15' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M5 11V11C5.5693 11 6.04756 11.4281 6.11043 11.9939L6.60464 16.4417C6.79269 18.1342 6.88672 18.9805 7.45624 19.4903C8.02576 20 8.87723 20 10.5802 20H13.4198C15.1228 20 15.9742 20 16.5438 19.4903C17.1133 18.9805 17.2073 18.1343 17.3954 16.4417L17.8896 11.9939C17.9524 11.4281 18.4307 11 19 11V11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M19 11H5C3.89543 11 3 10.1046 3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9C21 10.1046 20.1046 11 19 11Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const BasketAlt2: React.FC<IconComponentProps> = ({
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
      d='M20 10H4C3.44772 10 3 9.55228 3 9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.19767 12.7791L6.8023 18.2209C6.91484 19.2337 7.77097 20 8.79007 20H15.2099C16.229 20 17.0851 19.2337 17.1977 18.2209L17.8023 12.7791C17.9148 11.7663 18.771 11 19.7901 11H4.2099C5.229 11 6.08513 11.7663 6.19767 12.7791ZM11 14C11 13.4477 10.5523 13 9.99999 13C9.4477 13 8.99999 13.4477 8.99999 14V17C8.99999 17.5523 9.4477 18 9.99999 18C10.5523 18 11 17.5523 11 17V14ZM15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14V17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17V14Z'
      fill={color}
    />
    <path d='M8 5L6 9M16 5L18 9' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const BasketAlt2DuotoneLine: React.FC<IconComponentProps> = ({
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
    <path d='M10.5 15.5L9.5 12' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path d='M8.5 4.5L6.5 7.5M15.5 4.5L17.5 7.5' stroke={color} strokeLinecap='round' />
    <path d='M13.5 15.5L14.5 12' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path
      d='M4.5 9.5V9.5C5.08429 9.5 5.59018 9.90581 5.71693 10.4762L6.80394 15.3677C7.13763 16.8694 7.30448 17.6202 7.85289 18.0601C8.4013 18.5 9.17043 18.5 10.7087 18.5H13.2913C14.8296 18.5 15.5987 18.5 16.1471 18.0601C16.6955 17.6202 16.8624 16.8694 17.1961 15.3677L18.2831 10.4762C18.4098 9.90581 18.9157 9.5 19.5 9.5V9.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M19.5 9.5H4.5C3.94772 9.5 3.5 9.05228 3.5 8.5C3.5 7.94772 3.94772 7.5 4.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5C20.5 9.05228 20.0523 9.5 19.5 9.5Z'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const BasketAlt2Light: React.FC<IconComponentProps> = ({
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
    <path d='M10.5 15.5L9.5 12' stroke={color} strokeLinecap='round' />
    <path d='M8.5 4.5L6.5 7.5M15.5 4.5L17.5 7.5' stroke={color} strokeLinecap='round' />
    <path d='M13.5 15.5L14.5 12' stroke={color} strokeLinecap='round' />
    <path
      d='M4.5 9.5V9.5C5.08429 9.5 5.59018 9.90581 5.71693 10.4762L6.80394 15.3677C7.13763 16.8694 7.30448 17.6202 7.85289 18.0601C8.4013 18.5 9.17043 18.5 10.7087 18.5H13.2913C14.8296 18.5 15.5987 18.5 16.1471 18.0601C16.6955 17.6202 16.8624 16.8694 17.1961 15.3677L18.2831 10.4762C18.4098 9.90581 18.9157 9.5 19.5 9.5V9.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M19.5 9.5H4.5C3.94772 9.5 3.5 9.05228 3.5 8.5C3.5 7.94772 3.94772 7.5 4.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5C20.5 9.05228 20.0523 9.5 19.5 9.5Z'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const BasketAlt3: React.FC<IconComponentProps> = ({
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
      d='M4 4H5.62563C6.193 4 6.47669 4 6.70214 4.12433C6.79511 4.17561 6.87933 4.24136 6.95162 4.31912C7.12692 4.50769 7.19573 4.7829 7.33333 5.33333L7.51493 6.05972C7.616 6.46402 7.66654 6.66617 7.74455 6.83576C8.01534 7.42449 8.5546 7.84553 9.19144 7.96546C9.37488 8 9.58326 8 10 8V8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M18 17H7.55091C7.40471 17 7.33162 17 7.27616 16.9938C6.68857 16.928 6.28605 16.3695 6.40945 15.7913C6.42109 15.7367 6.44421 15.6674 6.49044 15.5287V15.5287C6.54177 15.3747 6.56743 15.2977 6.59579 15.2298C6.88607 14.5342 7.54277 14.0608 8.29448 14.0054C8.3679 14 8.44906 14 8.61137 14H14'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.5279 14H10.9743C9.75838 14 9.15042 14 8.68147 13.7246C8.48343 13.6083 8.30689 13.4588 8.15961 13.2825C7.81087 12.8652 7.71092 12.2655 7.51103 11.0662C7.30849 9.85093 7.20722 9.2433 7.44763 8.79324C7.54799 8.60536 7.68722 8.44101 7.85604 8.31113C8.26045 8 8.87646 8 10.1085 8H16.7639C18.2143 8 18.9395 8 19.2326 8.47427C19.5257 8.94854 19.2014 9.59717 18.5528 10.8944L18.1056 11.7889C17.5677 12.8647 17.2987 13.4026 16.8154 13.7013C16.3321 14 15.7307 14 14.5279 14Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <circle cx='17' cy='20' r='1' fill={color} />
    <circle cx='9' cy='20' r='1' fill={color} />
  </svg>
)

export const BasketAlt3Light: React.FC<IconComponentProps> = ({
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
      d='M3.5 4.5H5.05848C5.7542 4.5 6.10206 4.5 6.36395 4.68876C6.62584 4.87752 6.73584 5.20753 6.95585 5.86754L7.5 7.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M17.5 17.5H8.05091C7.90471 17.5 7.83162 17.5 7.77616 17.4938C7.18857 17.428 6.78605 16.8695 6.90945 16.2913C6.92109 16.2367 6.94421 16.1674 6.99044 16.0287V16.0287C7.04177 15.8747 7.06743 15.7977 7.09579 15.7298C7.38607 15.0342 8.04277 14.5608 8.79448 14.5054C8.8679 14.5 8.94906 14.5 9.11137 14.5H14.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.1787 14.5H11.1376C9.85836 14.5 9.21875 14.5 8.71781 14.1697C8.21687 13.8394 7.96492 13.2515 7.461 12.0757L7.29218 11.6818C6.48269 9.79294 6.07794 8.84853 6.52255 8.17426C6.96715 7.5 7.99464 7.5 10.0496 7.5H15.3305C17.6295 7.5 18.779 7.5 19.2126 8.24711C19.6462 8.99422 19.0758 9.99229 17.9352 11.9884L17.6517 12.4846C17.0897 13.4679 16.8088 13.9596 16.3432 14.2298C15.8776 14.5 15.3113 14.5 14.1787 14.5Z'
      stroke={color}
      strokeLinecap='round'
    />
    <circle cx='17' cy='20' r='1' fill={color} />
    <circle cx='9' cy='20' r='1' fill={color} />
  </svg>
)

export const BasketAltDuotone: React.FC<IconComponentProps> = ({
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
      d='M20 10H4C3.44772 10 3 9.55228 3 9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M6.80232 18.2209L6.19768 12.7791C6.08514 11.7663 5.22901 11 4.20991 11H19.7901C18.771 11 17.9149 11.7663 17.8023 12.7791L17.1977 18.2209C17.0851 19.2337 16.229 20 15.2099 20H8.79009C7.77099 20 6.91486 19.2337 6.80232 18.2209Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M8.5 3.5L6.5 6.5M15.5 3.5L17.5 6.5' stroke={color} strokeLinecap='round' />
    <path d='M10.5 16.5L9.5 13.5' stroke={color} strokeLinecap='round' />
    <path d='M13.5 16.5L14.5 13.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const BasketAltDuotoneLine: React.FC<IconComponentProps> = ({
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
    <path d='M8.5 6.5L6.5 9.5M15.5 6.5L17.5 9.5' stroke={color} strokeLinecap='round' />
    <path
      d='M10.5 15.5L9.5 12M13.5 15.5L14.5 12'
      stroke={color}
      strokeOpacity='0.25'
      strokeLinecap='round'
    />
    <path
      d='M4.5 9.5V9.5C5.08429 9.5 5.59018 9.90581 5.71693 10.4762L6.80394 15.3677C7.13763 16.8694 7.30448 17.6202 7.85289 18.0601C8.4013 18.5 9.17043 18.5 10.7087 18.5H13.2913C14.8296 18.5 15.5987 18.5 16.1471 18.0601C16.6955 17.6202 16.8624 16.8694 17.1961 15.3677L18.2831 10.4762C18.4098 9.90581 18.9157 9.5 19.5 9.5V9.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M3.5 9.5H20.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const BasketAltLight: React.FC<IconComponentProps> = ({
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
    <path d='M10.5 15.5L9.5 12' stroke={color} strokeLinecap='round' />
    <path d='M8.5 6.5L6.5 9.5M15.5 6.5L17.5 9.5' stroke={color} strokeLinecap='round' />
    <path d='M13.5 15.5L14.5 12' stroke={color} strokeLinecap='round' />
    <path
      d='M4.5 9.5V9.5C5.08429 9.5 5.59018 9.90581 5.71693 10.4762L6.80394 15.3677C7.13763 16.8694 7.30448 17.6202 7.85289 18.0601C8.4013 18.5 9.17043 18.5 10.7087 18.5H13.2913C14.8296 18.5 15.5987 18.5 16.1471 18.0601C16.6955 17.6202 16.8624 16.8694 17.1961 15.3677L18.2831 10.4762C18.4098 9.90581 18.9157 9.5 19.5 9.5V9.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M3.5 9.5H20.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const BasketDuotoneOne: React.FC<IconComponentProps> = ({
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
      d='M4.41291 10.6086C3.69007 10.1267 4.03122 9 4.89995 9H19.1C19.9688 9 20.3099 10.1267 19.5871 10.6086C19.2103 10.8598 18.9452 11.2468 18.8469 11.6888L17.6961 16.8677C17.3624 18.3694 17.1955 19.1202 16.6471 19.5601C16.0987 20 15.3296 20 13.7913 20H10.2087C8.67043 20 7.9013 20 7.35289 19.5601C6.80448 19.1202 6.63763 18.3694 6.30394 16.8677L5.15307 11.6888C5.05484 11.2468 4.78966 10.8598 4.41291 10.6086Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M12 7L12 5' stroke={color} strokeLinecap='round' />
    <path d='M15 16.5L15.5 13.5' stroke={color} strokeLinecap='round' />
    <path d='M12 16.5L12 13.5' stroke={color} strokeLinecap='round' />
    <path d='M9 16.5L8.5 13.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const BasketDuotone: React.FC<IconComponentProps> = ({
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
      d='M19.7808 10H20C20.5523 10 21 9.55228 21 9C21 8.44772 20.5523 8 20 8H4C3.44772 8 3 8.44772 3 9C3 9.55228 3.44772 10 4 10H4.21922C4.67809 10 5.07807 10.3123 5.18937 10.7575L6.62127 16.4851C6.84385 17.3754 7.64382 18 8.56155 18H15.4384C16.3562 18 17.1561 17.3754 17.3787 16.4851L18.8106 10.7575C18.9219 10.3123 19.3219 10 19.7808 10Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M8.5 3.5L6.5 6.5M15.5 3.5L17.5 6.5' stroke={color} strokeLinecap='round' />
    <path d='M10.5 14.5L9.5 11.5M13.5 14.5L14.5 11.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const BasketDuotoneLine: React.FC<IconComponentProps> = ({
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
    <path d='M12 5L12 3' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M10 16L9.5 13' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M13.9999 16L14.4999 13' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M2 9H22C20.7333 9 20.1 9 19.6161 9.29969C19.456 9.39881 19.3108 9.52003 19.1846 9.65977C18.8032 10.0822 18.6899 10.7054 18.4633 11.9516L17.5972 16.7155C17.3117 18.2859 17.1689 19.071 16.6123 19.5355C16.0558 20 15.2577 20 13.6617 20H10.3383C8.74225 20 7.94422 20 7.38766 19.5355C6.83109 19.071 6.68834 18.2859 6.40283 16.7155L5.53666 11.9516C5.31007 10.7054 5.19677 10.0822 4.81536 9.65977C4.6892 9.52003 4.54395 9.39881 4.38391 9.29969C3.90002 9 3.26668 9 2 9Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const BasketFillOne: React.FC<IconComponentProps> = ({
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
    <path d='M12 5L12 3' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22 8H2V11C2.37518 11 2.56277 11 2.72757 11.0277C3.41213 11.1429 3.98799 11.6049 4.24896 12.2481C4.31178 12.403 4.35247 12.5861 4.43386 12.9524L4.43386 12.9524L5.30394 16.8677C5.63763 18.3694 5.80448 19.1202 6.35289 19.5601C6.9013 20 7.67043 20 9.20869 20H14.7913C16.3296 20 17.0987 20 17.6471 19.5601C18.1955 19.1202 18.3624 18.3694 18.6961 16.8677L19.5661 12.9524L19.5661 12.9523C19.6475 12.5861 19.6882 12.403 19.751 12.2481C20.012 11.6049 20.5879 11.1429 21.2724 11.0277C21.4372 11 21.6248 11 22 11V8ZM9.48639 12.8356C9.3956 12.2908 8.88037 11.9228 8.3356 12.0136C7.79083 12.1044 7.42281 12.6196 7.51361 13.1644L8.01361 16.1644C8.1044 16.7092 8.61963 17.0772 9.1644 16.9864C9.70917 16.8956 10.0772 16.3804 9.98639 15.8356L9.48639 12.8356ZM16.4863 13.1644C16.5771 12.6196 16.2091 12.1044 15.6643 12.0136C15.1195 11.9228 14.6043 12.2908 14.5135 12.8356L14.0135 15.8356C13.9227 16.3804 14.2907 16.8956 14.8355 16.9864C15.3803 17.0772 15.8955 16.7092 15.9863 16.1644L16.4863 13.1644Z'
      fill={color}
    />
  </svg>
)

export const BasketFill: React.FC<IconComponentProps> = ({
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
    <path d='M8 5L6 9M16 5L18 9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21 10H19.8022C19.3335 10 18.9277 10.3255 18.826 10.7831L17.348 17.4339C17.1447 18.3489 16.3331 19 15.3957 19H8.60434C7.66695 19 6.85532 18.3489 6.65197 17.4339L5.17402 10.7831C5.07234 10.3255 4.66653 10 4.19783 10H3C2.44772 10 2 9.55228 2 9C2 8.44772 2.44772 8 3 8H21C21.5523 8 22 8.44772 22 9C22 9.55228 21.5523 10 21 10ZM11 12C11 11.4477 10.5523 11 10 11C9.44772 11 9 11.4477 9 12V15C9 15.5523 9.44772 16 10 16C10.5523 16 11 15.5523 11 15V12ZM15 12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12V15C13 15.5523 13.4477 16 14 16C14.5523 16 15 15.5523 15 15V12Z'
      fill={color}
    />
  </svg>
)

export const BasketLight: React.FC<IconComponentProps> = ({
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
    <path d='M12 5L12 3' stroke={color} strokeLinecap='round' />
    <path d='M10 16L9.5 13' stroke={color} strokeLinecap='round' />
    <path d='M13.9999 16L14.4999 13' stroke={color} strokeLinecap='round' />
    <path
      d='M2 9H22V9C20.7333 9 20.1 9 19.6161 9.29969C19.456 9.39881 19.3108 9.52003 19.1846 9.65977C18.8032 10.0822 18.6899 10.7054 18.4633 11.9516L17.5972 16.7155C17.3117 18.2859 17.1689 19.071 16.6123 19.5355C16.0558 20 15.2577 20 13.6617 20H10.3383C8.74225 20 7.94422 20 7.38766 19.5355C6.83109 19.071 6.68834 18.2859 6.40283 16.7155L5.53666 11.9516C5.31007 10.7054 5.19677 10.0822 4.81536 9.65977C4.6892 9.52003 4.54395 9.39881 4.38391 9.29969C3.90002 9 3.26668 9 2 9V9Z'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const Boxes: React.FC<IconComponentProps> = ({
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
    <path d='M16 12V15' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M8 12V15' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 4V7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <rect x='5' y='4' width='8' height='8' rx='1.8' stroke={color} strokeWidth='2' />
    <path
      d='M4 13.8C4 12.8059 4.80589 12 5.8 12H10.2C11.1941 12 12 12.8059 12 13.8V20H5.8C4.80589 20 4 19.1941 4 18.2V13.8Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M12 13.8C12 12.8059 12.8059 12 13.8 12H18.2C19.1941 12 20 12.8059 20 13.8V18.2C20 19.1941 19.1941 20 18.2 20H12V13.8Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const BoxesLight: React.FC<IconComponentProps> = ({
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
    <path d='M16.5 11.5V14.5' stroke={color} strokeLinecap='round' />
    <path d='M8.5 11.5V14.5' stroke={color} strokeLinecap='round' />
    <path d='M11.5 4.5V7.5' stroke={color} strokeLinecap='round' />
    <path
      d='M6.5 6.3C6.5 5.30589 7.30589 4.5 8.3 4.5H14.7C15.6941 4.5 16.5 5.30589 16.5 6.3V11.5H8.3C7.30589 11.5 6.5 10.6941 6.5 9.7V6.3Z'
      stroke={color}
    />
    <path
      d='M4.5 13.3C4.5 12.3059 5.30589 11.5 6.3 11.5H12.5V19.5H6.3C5.30589 19.5 4.5 18.6941 4.5 17.7V13.3Z'
      stroke={color}
    />
    <path
      d='M12.5 11.5H18.7C19.6941 11.5 20.5 12.3059 20.5 13.3V17.7C20.5 18.6941 19.6941 19.5 18.7 19.5H12.5V11.5Z'
      stroke={color}
    />
  </svg>
)

export const CreditCard: React.FC<IconComponentProps> = ({
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
    <rect x='3' y='6' width='18' height='13' rx='2' stroke={color} strokeWidth='2' />
    <path d='M7 15H7.01' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M4 11H21' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const CreditCardDuotone: React.FC<IconComponentProps> = ({
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
      d='M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18H7C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14V10Z'
      fill={color}
      fillOpacity='0.25'
    />
    <circle cx='6' cy='15' r='1' fill={color} />
    <rect x='3' y='9' width='18' height='2' fill={color} />
  </svg>
)

export const CreditCardDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M3 11H21V15C21 16.8856 21 17.8284 20.4142 18.4142C19.8284 19 18.8856 19 17 19H7C5.11438 19 4.17157 19 3.58579 18.4142C3 17.8284 3 16.8856 3 15V11Z'
      fill={color}
      fillOpacity='0.25'
    />
    <rect x='3' y='6' width='18' height='13' rx='2' stroke={color} strokeWidth='1.2' />
    <path d='M7 15H7.01' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M3 11L21 11' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const CreditCardFill: React.FC<IconComponentProps> = ({
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
      d='M2.00174 10H21.9983C21.9862 7.82497 21.8897 6.64706 21.1213 5.87868C20.2426 5 18.8284 5 16 5H8C5.17157 5 3.75736 5 2.87868 5.87868C2.1103 6.64706 2.01384 7.82497 2.00174 10ZM22 12H2V14C2 16.8284 2 18.2426 2.87868 19.1213C3.75736 20 5.17157 20 8 20H16C18.8284 20 20.2426 20 21.1213 19.1213C22 18.2426 22 16.8284 22 14V12ZM7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H7.01C7.56228 17 8.01 16.5523 8.01 16C8.01 15.4477 7.56228 15 7.01 15H7Z'
      fill={color}
    />
  </svg>
)

export const CreditCardLight: React.FC<IconComponentProps> = ({
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
      d='M3.5 9.398C3.5 8.37292 3.5 7.86038 3.70266 7.47025C3.87343 7.14149 4.14149 6.87343 4.47025 6.70266C4.86038 6.5 5.37292 6.5 6.398 6.5H17.602C18.6271 6.5 19.1396 6.5 19.5298 6.70266C19.8585 6.87343 20.1266 7.14149 20.2973 7.47025C20.5 7.86038 20.5 8.37292 20.5 9.398V15.602C20.5 16.6271 20.5 17.1396 20.2973 17.5298C20.1266 17.8585 19.8585 18.1266 19.5298 18.2973C19.1396 18.5 18.6271 18.5 17.602 18.5H6.398C5.37292 18.5 4.86038 18.5 4.47025 18.2973C4.14149 18.1266 3.87343 17.8585 3.70266 17.5298C3.5 17.1396 3.5 16.6271 3.5 15.602V9.398Z'
      stroke={color}
    />
    <path d='M3.5 10.5L20.5 10.5' stroke={color} strokeLinecap='round' />
    <circle cx='6.5' cy='15.5' r='0.5' fill={color} />
  </svg>
)

export const FilterAlt: React.FC<IconComponentProps> = ({
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
      d='M9.65811 19.7806L9.97433 20.7293H9.97433L9.65811 19.7806ZM14.6581 18.114L14.9743 19.0627L14.9743 19.0626L14.6581 18.114ZM19.7071 7.29289L20.4142 8L19.7071 7.29289ZM15.2929 11.7071L14.5858 11L15.2929 11.7071ZM5 5H19V3H5V5ZM5 6.58579V5H3V6.58579H5ZM9.41421 11L5 6.58579L3.58579 8L7.99999 12.4142L9.41421 11ZM7.99999 12.4142V19.3063H9.99999V12.4142H7.99999ZM7.99999 19.3063C7.99999 20.3301 9.00304 21.0531 9.97433 20.7293L9.34188 18.832C9.66565 18.724 9.99999 18.965 9.99999 19.3063H7.99999ZM9.97433 20.7293L14.9743 19.0627L14.3419 17.1653L9.34188 18.832L9.97433 20.7293ZM14.9743 19.0626C15.5868 18.8585 16 18.2853 16 17.6396H14C14 17.4244 14.1377 17.2333 14.3419 17.1653L14.9743 19.0626ZM16 17.6396V12.4142H14V17.6396H16ZM19 6.58579L14.5858 11L16 12.4142L20.4142 8L19 6.58579ZM19 5V6.58579H21V5H19ZM20.4142 8C20.7893 7.62493 21 7.11622 21 6.58579H19L20.4142 8ZM16 12.4142V12.4142L14.5858 11C14.2107 11.3751 14 11.8838 14 12.4142H16ZM7.99999 12.4142H9.99999C9.99999 11.8838 9.78928 11.3751 9.41421 11L7.99999 12.4142ZM3 6.58579C3 7.11622 3.21071 7.62493 3.58579 8L5 6.58579V6.58579H3ZM19 5H21C21 3.89543 20.1046 3 19 3V5ZM5 3C3.89543 3 3 3.89543 3 5H5V5V3Z'
      fill={color}
    />
  </svg>
)

export const FilterAltDuotone: React.FC<IconComponentProps> = ({
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
      d='M20 5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V6.58579C4 6.851 4.10536 7.10536 4.29289 7.29289L8.7071 11.7071C8.89464 11.8946 8.99999 12.149 8.99999 12.4142V19.3063C8.99999 19.6476 9.33434 19.8886 9.65811 19.7806L14.6581 18.114C14.8623 18.0459 15 17.8548 15 17.6396V12.4142C15 12.149 15.1054 11.8946 15.2929 11.7071L19.7071 7.29289C19.8946 7.10536 20 6.851 20 6.58579V5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M9.65811 19.7806L9.84784 20.3498H9.84784L9.65811 19.7806ZM14.6581 18.114L14.8478 18.6832H14.8478L14.6581 18.114ZM19.7071 7.29289L20.1314 7.71716L19.7071 7.29289ZM15.2929 11.7071L14.8686 11.2828L15.2929 11.7071ZM5 4.6H19V3.4H5V4.6ZM4.6 6.58579V5H3.4V6.58579H4.6ZM9.13136 11.2828L4.71716 6.86863L3.86863 7.71716L8.28284 12.1314L9.13136 11.2828ZM8.39999 12.4142V19.3063H9.59999V12.4142H8.39999ZM8.39999 19.3063C8.39999 20.0571 9.13556 20.5873 9.84784 20.3498L9.46837 19.2114C9.53312 19.1898 9.59999 19.238 9.59999 19.3063H8.39999ZM9.84784 20.3498L14.8478 18.6832L14.4684 17.5448L9.46837 19.2114L9.84784 20.3498ZM14.8478 18.6832C15.297 18.5335 15.6 18.1131 15.6 17.6396H14.4C14.4 17.5966 14.4275 17.5584 14.4684 17.5448L14.8478 18.6832ZM15.6 17.6396V12.4142H14.4V17.6396H15.6ZM19.2828 6.86863L14.8686 11.2828L15.7172 12.1314L20.1314 7.71716L19.2828 6.86863ZM19.4 5V6.58579H20.6V5H19.4ZM20.1314 7.71716C20.4314 7.4171 20.6 7.01013 20.6 6.58579H19.4C19.4 6.69187 19.3579 6.79361 19.2828 6.86863L20.1314 7.71716ZM15.6 12.4142C15.6 12.3081 15.6421 12.2064 15.7172 12.1314L14.8686 11.2828C14.5686 11.5829 14.4 11.9899 14.4 12.4142H15.6ZM8.28284 12.1314C8.35785 12.2064 8.39999 12.3081 8.39999 12.4142H9.59999C9.59999 11.9899 9.43142 11.5829 9.13136 11.2828L8.28284 12.1314ZM3.4 6.58579C3.4 7.01013 3.56857 7.4171 3.86863 7.71716L4.71716 6.86863C4.64214 6.79361 4.6 6.69187 4.6 6.58579H3.4ZM19 4.6C19.2209 4.6 19.4 4.77909 19.4 5H20.6C20.6 4.11634 19.8837 3.4 19 3.4V4.6ZM5 3.4C4.11634 3.4 3.4 4.11634 3.4 5H4.6C4.6 4.77909 4.77909 4.6 5 4.6V3.4Z'
      fill={color}
    />
  </svg>
)

export const FilterAltDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M20 5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V6.58579C4 6.851 4.10536 7.10536 4.29289 7.29289L8.7071 11.7071C8.89464 11.8946 8.99999 12.149 8.99999 12.4142V19.3063C8.99999 19.6476 9.33434 19.8886 9.65811 19.7806L14.6581 18.114C14.8623 18.0459 15 17.8548 15 17.6396V12.4142C15 12.149 15.1054 11.8946 15.2929 11.7071L19.7071 7.29289C19.8946 7.10536 20 6.851 20 6.58579V5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M9.65811 19.7806L9.84784 20.3498H9.84784L9.65811 19.7806ZM14.6581 18.114L14.8478 18.6832H14.8478L14.6581 18.114ZM19.7071 7.29289L20.1314 7.71716L19.7071 7.29289ZM15.2929 11.7071L14.8686 11.2828L15.2929 11.7071ZM5 4.6H19V3.4H5V4.6ZM4.6 6.58579V5H3.4V6.58579H4.6ZM9.13136 11.2828L4.71716 6.86863L3.86863 7.71716L8.28284 12.1314L9.13136 11.2828ZM8.39999 12.4142V19.3063H9.59999V12.4142H8.39999ZM8.39999 19.3063C8.39999 20.0571 9.13556 20.5873 9.84784 20.3498L9.46837 19.2114C9.53312 19.1898 9.59999 19.238 9.59999 19.3063H8.39999ZM9.84784 20.3498L14.8478 18.6832L14.4684 17.5448L9.46837 19.2114L9.84784 20.3498ZM14.8478 18.6832C15.297 18.5335 15.6 18.1131 15.6 17.6396H14.4C14.4 17.5966 14.4275 17.5584 14.4684 17.5448L14.8478 18.6832ZM15.6 17.6396V12.4142H14.4V17.6396H15.6ZM19.2828 6.86863L14.8686 11.2828L15.7172 12.1314L20.1314 7.71716L19.2828 6.86863ZM19.4 5V6.58579H20.6V5H19.4ZM20.1314 7.71716C20.4314 7.4171 20.6 7.01013 20.6 6.58579H19.4C19.4 6.69187 19.3579 6.79361 19.2828 6.86863L20.1314 7.71716ZM15.6 12.4142C15.6 12.3081 15.6421 12.2064 15.7172 12.1314L14.8686 11.2828C14.5686 11.5829 14.4 11.9899 14.4 12.4142H15.6ZM8.28284 12.1314C8.35785 12.2064 8.39999 12.3081 8.39999 12.4142H9.59999C9.59999 11.9899 9.43142 11.5829 9.13136 11.2828L8.28284 12.1314ZM3.4 6.58579C3.4 7.01013 3.56857 7.4171 3.86863 7.71716L4.71716 6.86863C4.64214 6.79361 4.6 6.69187 4.6 6.58579H3.4ZM19 4.6C19.2209 4.6 19.4 4.77909 19.4 5H20.6C20.6 4.11634 19.8837 3.4 19 3.4V4.6ZM5 3.4C4.11634 3.4 3.4 4.11634 3.4 5H4.6C4.6 4.77909 4.77909 4.6 5 4.6V3.4Z'
      fill={color}
    />
  </svg>
)

export const FilterAltFill: React.FC<IconComponentProps> = ({
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
      d='M5.00006 2C4.44778 2 4.00006 2.44772 4.00006 3V5.00001H20.0001V3C20.0001 2.44772 19.5523 2 19.0001 2H5.00006ZM19.7823 7.00001H4.21782C4.33216 7.22455 4.48913 7.42794 4.68305 7.59762L10.6831 12.8476C11.4371 13.5074 12.563 13.5074 13.3171 12.8476L19.3171 7.59762C19.511 7.42794 19.668 7.22455 19.7823 7.00001Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14 16.7049L14 10H10V18.7049L14 16.7049Z'
      fill={color}
    />
  </svg>
)

export const FilterAltLight: React.FC<IconComponentProps> = ({
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
      d='M9.65811 19.7806L9.81622 20.255H9.81622L9.65811 19.7806ZM14.6581 18.114L14.8162 18.5883H14.8162L14.6581 18.114ZM19.7071 7.29289L20.0607 7.64645L19.7071 7.29289ZM15.2929 11.7071L14.9393 11.3536L15.2929 11.7071ZM5 4.5H19V3.5H5V4.5ZM4.5 6.58579V5H3.5V6.58579H4.5ZM9.06065 11.3535L4.64645 6.93934L3.93934 7.64645L8.35355 12.0607L9.06065 11.3535ZM8.49999 12.4142V19.3063H9.49999V12.4142H8.49999ZM8.49999 19.3063C8.49999 19.9888 9.16869 20.4708 9.81622 20.255L9.49999 19.3063V19.3063H8.49999ZM9.81622 20.255L14.8162 18.5883L14.5 17.6396L9.49999 19.3063L9.81622 20.255ZM14.8162 18.5883C15.2246 18.4522 15.5 18.0701 15.5 17.6396H14.5L14.8162 18.5883ZM15.5 17.6396V12.4142H14.5V17.6396H15.5ZM19.3536 6.93934L14.9393 11.3536L15.6464 12.0607L20.0607 7.64645L19.3536 6.93934ZM19.5 5V6.58579H20.5V5H19.5ZM20.0607 7.64645C20.342 7.36514 20.5 6.98361 20.5 6.58579H19.5C19.5 6.71839 19.4473 6.84557 19.3536 6.93934L20.0607 7.64645ZM15.5 12.4142C15.5 12.2816 15.5527 12.1544 15.6464 12.0607L14.9393 11.3536C14.658 11.6349 14.5 12.0164 14.5 12.4142H15.5ZM8.35355 12.0607C8.44731 12.1544 8.49999 12.2816 8.49999 12.4142H9.49999C9.49999 12.0164 9.34196 11.6349 9.06065 11.3535L8.35355 12.0607ZM3.5 6.58579C3.5 6.98361 3.65804 7.36514 3.93934 7.64645L4.64645 6.93934C4.55268 6.84557 4.5 6.71839 4.5 6.58579H3.5ZM19 4.5C19.2761 4.5 19.5 4.72386 19.5 5H20.5C20.5 4.17157 19.8284 3.5 19 3.5V4.5ZM5 3.5C4.17157 3.5 3.5 4.17157 3.5 5H4.5C4.5 4.72386 4.72386 4.5 5 4.5V3.5Z'
      fill={color}
    />
  </svg>
)

export const GIft: React.FC<IconComponentProps> = ({
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
      d='M3 10C3 9.05719 3 8.58579 3.29289 8.29289C3.58579 8 4.05719 8 5 8H19C19.9428 8 20.4142 8 20.7071 8.29289C21 8.58579 21 9.05719 21 10V11.5C21 11.9659 21 12.1989 20.9239 12.3827C20.8224 12.6277 20.6277 12.8224 20.3827 12.9239C20.1989 13 19.9659 13 19.5 13V13C19.0341 13 18.8011 13 18.6173 13.0761C18.3723 13.1776 18.1776 13.3723 18.0761 13.6173C18 13.8011 18 14.0341 18 14.5V18C18 18.9428 18 19.4142 17.7071 19.7071C17.4142 20 16.9428 20 16 20H8C7.05719 20 6.58579 20 6.29289 19.7071C6 19.4142 6 18.9428 6 18V14.5C6 14.0341 6 13.8011 5.92388 13.6173C5.82239 13.3723 5.62771 13.1776 5.38268 13.0761C5.19891 13 4.96594 13 4.5 13V13C4.03406 13 3.80109 13 3.61732 12.9239C3.37229 12.8224 3.17761 12.6277 3.07612 12.3827C3 12.1989 3 11.9659 3 11.5V10Z'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M5 13H19' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 7L12 20' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M12 7L11.1214 6.12144C10.0551 5.05514 8.75521 4.25174 7.3246 3.77487V3.77487C6.18099 3.39366 5 4.24487 5 5.45035V5.63246C5 6.44914 5.52259 7.1742 6.29737 7.43246L8 8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M12 7L12.8786 6.12144C13.9449 5.05514 15.2448 4.25174 16.6754 3.77487V3.77487C17.819 3.39366 19 4.24487 19 5.45035V5.63246C19 6.44914 18.4774 7.1742 17.7026 7.43246L16 8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const GIftFill: React.FC<IconComponentProps> = ({
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
      d='M11 8H5C4.05719 8 3.58579 8 3.29289 8.29289C3 8.58579 3 9.05719 3 10V11C3 11.9428 3 12.4142 3.29289 12.7071C3.58579 13 4.05719 13 5 13H6H11V8ZM6 15V19C6 19.9428 6 20.4142 6.29289 20.7071C6.58579 21 7.05719 21 8 21H11V15H6ZM13 21H16C16.9428 21 17.4142 21 17.7071 20.7071C18 20.4142 18 19.9428 18 19V15H13V21ZM18 13H19C19.9428 13 20.4142 13 20.7071 12.7071C21 12.4142 21 11.9428 21 11V10C21 9.05719 21 8.58579 20.7071 8.29289C20.4142 8 19.9428 8 19 8H13V13H18Z'
      fill={color}
    />
    <path
      d='M19 4.63246V4.45035C19 3.24487 17.819 2.39366 16.6754 2.77487C15.2448 3.25174 13.9449 4.05514 12.8786 5.12144L12 6V7H15.6754C15.8904 7 16.104 6.96534 16.3079 6.89737L17.7026 6.43246C18.4774 6.1742 19 5.44914 19 4.63246Z'
      fill={color}
    />
    <path
      d='M5 4.63246V4.45035C5 3.24487 6.18099 2.39366 7.3246 2.77487C8.75521 3.25174 10.0551 4.05514 11.1214 5.12144L12 6V7H8.32456C8.10959 7 7.89603 6.96534 7.6921 6.89737L6.29737 6.43246C5.52259 6.1742 5 5.44914 5 4.63246Z'
      fill={color}
    />
  </svg>
)

export const GiftLight: React.FC<IconComponentProps> = ({
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
      d='M3 10C3 9.05719 3 8.58579 3.29289 8.29289C3.58579 8 4.05719 8 5 8H19C19.9428 8 20.4142 8 20.7071 8.29289C21 8.58579 21 9.05719 21 10V11.5C21 11.9659 21 12.1989 20.9239 12.3827C20.8224 12.6277 20.6277 12.8224 20.3827 12.9239C20.1989 13 19.9659 13 19.5 13V13C19.0341 13 18.8011 13 18.6173 13.0761C18.3723 13.1776 18.1776 13.3723 18.0761 13.6173C18 13.8011 18 14.0341 18 14.5V18C18 18.9428 18 19.4142 17.7071 19.7071C17.4142 20 16.9428 20 16 20H8C7.05719 20 6.58579 20 6.29289 19.7071C6 19.4142 6 18.9428 6 18V14.5C6 14.0341 6 13.8011 5.92388 13.6173C5.82239 13.3723 5.62771 13.1776 5.38268 13.0761C5.19891 13 4.96594 13 4.5 13V13C4.03406 13 3.80109 13 3.61732 12.9239C3.37229 12.8224 3.17761 12.6277 3.07612 12.3827C3 12.1989 3 11.9659 3 11.5V10Z'
      stroke={color}
    />
    <path d='M5 13H19' stroke={color} strokeLinecap='round' />
    <path d='M12 7L12 20' stroke={color} strokeLinecap='round' />
    <path
      d='M12 7L11.1214 6.12144C10.0551 5.05514 8.75521 4.25174 7.3246 3.77487V3.77487C6.18099 3.39366 5 4.24487 5 5.45035V5.63246C5 6.44914 5.52259 7.1742 6.29737 7.43246L8 8'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M12 7L12.8786 6.12144C13.9449 5.05514 15.2448 4.25174 16.6754 3.77487V3.77487C17.819 3.39366 19 4.24487 19 5.45035V5.63246C19 6.44914 18.4774 7.1742 17.7026 7.43246L16 8'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const GiftLightDuotone: React.FC<IconComponentProps> = ({
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
      d='M5 8H19V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V8Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M12 8L11.7608 5.84709C11.6123 4.51089 10.4672 3.5 9.12282 3.5V3.5C7.68381 3.5 6.5 4.66655 6.5 6.10555V6.10555C6.5 6.97673 6.93539 7.79026 7.66025 8.2735L9.5 9.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M12 8L12.2392 5.84709C12.3877 4.51089 13.5328 3.5 14.8772 3.5V3.5C16.3162 3.5 17.5 4.66655 17.5 6.10555V6.10555C17.5 6.97673 17.0646 7.79026 16.3397 8.2735L14.5 9.5'
      stroke={color}
      strokeLinecap='round'
    />
    <rect x='4' y='8' width='16' height='3' rx='1' fill={color} />
    <path d='M12 11V15' stroke={color} strokeLinecap='round' />
  </svg>
)

export const GiftLightDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M3 10C3 9.05719 3 8.58579 3.29289 8.29289C3.58579 8 4.05719 8 5 8H19C19.9428 8 20.4142 8 20.7071 8.29289C21 8.58579 21 9.05719 21 10V11.5C21 11.9659 21 12.1989 20.9239 12.3827C20.8224 12.6277 20.6277 12.8224 20.3827 12.9239C20.1989 13 19.9659 13 19.5 13C19.0341 13 18.8011 13 18.6173 13.0761C18.3723 13.1776 18.1776 13.3723 18.0761 13.6173C18 13.8011 18 14.0341 18 14.5V18C18 18.9428 18 19.4142 17.7071 19.7071C17.4142 20 16.9428 20 16 20H8C7.05719 20 6.58579 20 6.29289 19.7071C6 19.4142 6 18.9428 6 18V14.5C6 14.0341 6 13.8011 5.92388 13.6173C5.82239 13.3723 5.62771 13.1776 5.38268 13.0761C5.19891 13 4.96594 13 4.5 13C4.03406 13 3.80109 13 3.61732 12.9239C3.37229 12.8224 3.17761 12.6277 3.07612 12.3827C3 12.1989 3 11.9659 3 11.5V10Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M3 10C3 9.05719 3 8.58579 3.29289 8.29289C3.58579 8 4.05719 8 5 8H19C19.9428 8 20.4142 8 20.7071 8.29289C21 8.58579 21 9.05719 21 10V11.5C21 11.9659 21 12.1989 20.9239 12.3827C20.8224 12.6277 20.6277 12.8224 20.3827 12.9239C20.1989 13 19.9659 13 19.5 13V13C19.0341 13 18.8011 13 18.6173 13.0761C18.3723 13.1776 18.1776 13.3723 18.0761 13.6173C18 13.8011 18 14.0341 18 14.5V18C18 18.9428 18 19.4142 17.7071 19.7071C17.4142 20 16.9428 20 16 20H8C7.05719 20 6.58579 20 6.29289 19.7071C6 19.4142 6 18.9428 6 18V14.5C6 14.0341 6 13.8011 5.92388 13.6173C5.82239 13.3723 5.62771 13.1776 5.38268 13.0761C5.19891 13 4.96594 13 4.5 13V13C4.03406 13 3.80109 13 3.61732 12.9239C3.37229 12.8224 3.17761 12.6277 3.07612 12.3827C3 12.1989 3 11.9659 3 11.5V10Z'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M5 13H19' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M12 7L12 20' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M12 7L11.1214 6.12144C10.0551 5.05514 8.75521 4.25174 7.3246 3.77487V3.77487C6.18099 3.39366 5 4.24487 5 5.45035V5.63246C5 6.44914 5.52259 7.1742 6.29737 7.43246L8 8'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      d='M12 7L12.8786 6.12144C13.9449 5.05514 15.2448 4.25174 16.6754 3.77487V3.77487C17.819 3.39366 19 4.24487 19 5.45035V5.63246C19 6.44914 18.4774 7.1742 17.7026 7.43246L16 8'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const Home: React.FC<IconComponentProps> = ({
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
      d='M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const HomeDuotone: React.FC<IconComponentProps> = ({
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
      d='M5 14.0585C5 13.0494 5 12.5448 5.22166 12.1141C5.44333 11.6833 5.8539 11.3901 6.67505 10.8035L10.8375 7.83034C11.3989 7.42938 11.6795 7.2289 12 7.2289C12.3205 7.2289 12.6011 7.42938 13.1625 7.83034L17.325 10.8035C18.1461 11.3901 18.5567 11.6833 18.7783 12.1141C19 12.5448 19 13.0494 19 14.0585V19C19 19.9428 19 20.4142 18.7071 20.7071C18.4142 21 17.9428 21 17 21H7C6.05719 21 5.58579 21 5.29289 20.7071C5 20.4142 5 19.9428 5 19V14.0585Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M3 12.3866C3 12.6535 3 12.7869 3.0841 12.8281C3.16819 12.8692 3.27352 12.7873 3.48418 12.6234L10.7721 6.95502C11.362 6.49625 11.6569 6.26686 12 6.26686C12.3431 6.26686 12.638 6.49625 13.2279 6.95502L20.5158 12.6234C20.7265 12.7873 20.8318 12.8692 20.9159 12.8281C21 12.7869 21 12.6535 21 12.3866V11.9782C21 11.4978 21 11.2576 20.8983 11.0497C20.7966 10.8418 20.607 10.6944 20.2279 10.3995L13.2279 4.95502C12.638 4.49625 12.3431 4.26686 12 4.26686C11.6569 4.26686 11.362 4.49625 10.7721 4.95502L3.77212 10.3995C3.39295 10.6944 3.20337 10.8418 3.10168 11.0497C3 11.2576 3 11.4978 3 11.9782V12.3866Z'
      fill={color}
    />
    <path
      d='M12.5 15H11.5C10.3954 15 9.5 15.8954 9.5 17V20.85C9.5 20.9328 9.56716 21 9.65 21H14.35C14.4328 21 14.5 20.9328 14.5 20.85V17C14.5 15.8954 13.6046 15 12.5 15Z'
      fill={color}
    />
    <rect x='16' y='5' width='2' height='4' rx='0.5' fill={color} />
  </svg>
)

export const HomeDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M5.5 10V17.5C5.5 18.4428 5.5 18.9142 5.79289 19.2071C6.08579 19.5 6.55719 19.5 7.5 19.5H16.5C17.4428 19.5 17.9142 19.5 18.2071 19.2071C18.5 18.9142 18.5 18.4428 18.5 17.5V10'
      stroke={color}
      strokeOpacity='0.25'
    />
    <path
      d='M14.5 19V15C14.5 13.8954 13.6046 13 12.5 13H11.5C10.3954 13 9.5 13.8954 9.5 15V19'
      stroke={color}
      strokeLinejoin='round'
    />
  </svg>
)

export const HomeFill: React.FC<IconComponentProps> = ({
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
      d='M5.27446 10.1262C5 10.7229 5 11.4018 5 12.7595V16.9999C5 18.8856 5 19.8284 5.58579 20.4142C6.11733 20.9457 6.94285 20.9949 8.5 20.9995V16C8.5 14.8954 9.39543 14 10.5 14H13.5C14.6046 14 15.5 14.8954 15.5 16V20.9995C17.0572 20.9949 17.8827 20.9457 18.4142 20.4142C19 19.8284 19 18.8856 19 16.9999V12.7595C19 11.4018 19 10.7229 18.7255 10.1262C18.4511 9.52943 17.9356 9.08763 16.9047 8.20401L15.9047 7.34687C14.0414 5.74974 13.1098 4.95117 12 4.95117C10.8902 4.95117 9.95857 5.74974 8.09525 7.34687L7.09525 8.20401C6.06437 9.08763 5.54892 9.52943 5.27446 10.1262ZM13.5 20.9999V16H10.5V20.9999H13.5Z'
      fill={color}
    />
  </svg>
)

export const HomeLight: React.FC<IconComponentProps> = ({
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
      d='M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z'
      stroke={color}
    />
    <path
      d='M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const Money: React.FC<IconComponentProps> = ({
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
    <rect x='3' y='6' width='18' height='12' rx='2' stroke={color} strokeWidth='2' />
    <path d='M6 9H8' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M16 15H18' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <circle cx='12' cy='12' r='2' stroke={color} strokeWidth='2' />
  </svg>
)

export const MoneyDuotone: React.FC<IconComponentProps> = ({
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
      d='M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18H7C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14V10Z'
      fill={color}
      fillOpacity='0.25'
    />
    <circle cx='12' cy='12' r='2' fill={color} />
    <rect x='5' y='8' width='3' height='1' rx='0.5' fill={color} />
    <rect x='16' y='15' width='3' height='1' rx='0.5' fill={color} />
  </svg>
)

export const MoneyDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M3.58579 6.58579C3 7.17157 3 8.11438 3 10V14C3 15.8856 3 16.8284 3.58579 17.4142C4.17157 18 5.11438 18 7 18H17C18.8856 18 19.8284 18 20.4142 17.4142C21 16.8284 21 15.8856 21 14V10C21 8.11438 21 7.17157 20.4142 6.58579C19.8284 6 18.8856 6 17 6H7C5.11438 6 4.17157 6 3.58579 6.58579ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
      fill={color}
      fillOpacity='0.25'
    />
    <rect x='3' y='6' width='18' height='12' rx='2' stroke={color} strokeWidth='1.2' />
    <path d='M6 9H8' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M16 15H18' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <circle cx='12' cy='12' r='2.4' stroke={color} strokeWidth='1.2' />
  </svg>
)

export const MoneyFill: React.FC<IconComponentProps> = ({
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
      d='M2.58579 5.58579C2 6.17157 2 7.11438 2 9V15C2 16.8856 2 17.8284 2.58579 18.4142C3.17157 19 4.11438 19 6 19H18C19.8856 19 20.8284 19 21.4142 18.4142C22 17.8284 22 16.8856 22 15V9C22 7.11438 22 6.17157 21.4142 5.58579C20.8284 5 19.8856 5 18 5H6C4.11438 5 3.17157 5 2.58579 5.58579ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H7C7.55228 9 8 8.55228 8 8C8 7.44772 7.55228 7 7 7H5ZM16 16C16 15.4477 16.4477 15 17 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H17C16.4477 17 16 16.5523 16 16ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z'
      fill={color}
    />
  </svg>
)

export const MoneyLight: React.FC<IconComponentProps> = ({
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
    <rect x='3' y='6' width='18' height='12' rx='2' stroke={color} />
    <path d='M5 9H8' stroke={color} strokeLinecap='round' />
    <path d='M16 15H19' stroke={color} strokeLinecap='round' />
    <circle cx='12' cy='12' r='2' stroke={color} />
  </svg>
)

export const News: React.FC<IconComponentProps> = ({
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
    <rect x='5' y='5' width='14' height='14' rx='3' stroke={color} strokeWidth='2' />
    <path d='M6 10H18' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const NewsDuotone: React.FC<IconComponentProps> = ({
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
      d='M5 10C5 8.13077 5 7.19615 5.40192 6.5C5.66523 6.04394 6.04394 5.66523 6.5 5.40192C7.19615 5 8.13077 5 10 5H14C15.8692 5 16.8038 5 17.5 5.40192C17.9561 5.66523 18.3348 6.04394 18.5981 6.5C19 7.19615 19 8.13077 19 10H5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <rect x='5' y='5' width='14' height='14' rx='3' stroke={color} strokeWidth='1.2' />
    <path d='M5 10H19' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const NewsDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M5 10C5 8.13077 5 7.19615 5.40192 6.5C5.66523 6.04394 6.04394 5.66523 6.5 5.40192C7.19615 5 8.13077 5 10 5H14C15.8692 5 16.8038 5 17.5 5.40192C17.9561 5.66523 18.3348 6.04394 18.5981 6.5C19 7.19615 19 8.13077 19 10H5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <rect x='5' y='5' width='14' height='14' rx='3' stroke={color} strokeWidth='1.2' />
    <path d='M5 10H19' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const NewsFill: React.FC<IconComponentProps> = ({
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
      d='M4.00174 9H19.9983C19.9862 6.82497 19.8897 5.64706 19.1213 4.87868C18.2426 4 16.8284 4 14 4H10C7.17157 4 5.75736 4 4.87868 4.87868C4.1103 5.64706 4.01384 6.82497 4.00174 9ZM20 11H4V14C4 16.8284 4 18.2426 4.87868 19.1213C5.75736 20 7.17157 20 10 20H14C16.8284 20 18.2426 20 19.1213 19.1213C20 18.2426 20 16.8284 20 14V11Z'
      fill={color}
    />
  </svg>
)

export const NewsLight: React.FC<IconComponentProps> = ({
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
    <rect x='5' y='5' width='14' height='14' rx='3' stroke={color} />
    <path d='M5 10L19 10' stroke={color} strokeLinecap='round' />
  </svg>
)

export const ShopOne: React.FC<IconComponentProps> = ({
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
      d='M4.62127 4.51493C4.80316 3.78737 4.8941 3.42359 5.16536 3.21179C5.43663 3 5.8116 3 6.56155 3H17.4384C18.1884 3 18.5634 3 18.8346 3.21179C19.1059 3.42359 19.1968 3.78737 19.3787 4.51493L20.5823 9.32938C20.6792 9.71675 20.7276 9.91044 20.7169 10.0678C20.6892 10.4757 20.416 10.8257 20.0269 10.9515C19.8769 11 19.6726 11 19.2641 11C18.7309 11 18.4644 11 18.2405 10.9478C17.6133 10.8017 17.0948 10.3625 16.8475 9.76782C16.7593 9.55555 16.7164 9.29856 16.6308 8.78457C16.6068 8.64076 16.5948 8.56886 16.5812 8.54994C16.5413 8.49439 16.4587 8.49439 16.4188 8.54994C16.4052 8.56886 16.3932 8.64076 16.3692 8.78457L16.2877 9.27381C16.2791 9.32568 16.2747 9.35161 16.2704 9.37433C16.0939 10.3005 15.2946 10.9777 14.352 10.9995C14.3289 11 14.3026 11 14.25 11C14.1974 11 14.1711 11 14.148 10.9995C13.2054 10.9777 12.4061 10.3005 12.2296 9.37433C12.2253 9.35161 12.2209 9.32568 12.2123 9.27381L12.1308 8.78457C12.1068 8.64076 12.0948 8.56886 12.0812 8.54994C12.0413 8.49439 11.9587 8.49439 11.9188 8.54994C11.9052 8.56886 11.8932 8.64076 11.8692 8.78457L11.7877 9.27381C11.7791 9.32568 11.7747 9.35161 11.7704 9.37433C11.5939 10.3005 10.7946 10.9777 9.85199 10.9995C9.82887 11 9.80258 11 9.75 11C9.69742 11 9.67113 11 9.64801 10.9995C8.70541 10.9777 7.90606 10.3005 7.7296 9.37433C7.72527 9.35161 7.72095 9.32568 7.7123 9.27381L7.63076 8.78457C7.60679 8.64076 7.59481 8.56886 7.58122 8.54994C7.54132 8.49439 7.45868 8.49439 7.41878 8.54994C7.40519 8.56886 7.39321 8.64076 7.36924 8.78457C7.28357 9.29856 7.24074 9.55555 7.15249 9.76782C6.90524 10.3625 6.38675 10.8017 5.75951 10.9478C5.53563 11 5.26905 11 4.73591 11C4.32737 11 4.12309 11 3.97306 10.9515C3.58403 10.8257 3.31078 10.4757 3.28307 10.0678C3.27239 9.91044 3.32081 9.71675 3.41765 9.32938L4.62127 4.51493Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.01747 12.5002C5 12.9211 5 13.4152 5 14V20C5 20.9428 5 21.4142 5.29289 21.7071C5.58579 22 6.05719 22 7 22H10V18C10 17.4477 10.4477 17 11 17H13C13.5523 17 14 17.4477 14 18V22H17C17.9428 22 18.4142 22 18.7071 21.7071C19 21.4142 19 20.9428 19 20V14C19 13.4152 19 12.9211 18.9825 12.5002C18.6177 12.4993 18.2446 12.489 17.9002 12.4087C17.3808 12.2877 16.904 12.0519 16.5 11.7268C15.9159 12.1969 15.1803 12.4807 14.3867 12.4991C14.3456 12.5 14.3022 12.5 14.2609 12.5H14.2608L14.25 12.5L14.2392 12.5H14.2391C14.1978 12.5 14.1544 12.5 14.1133 12.4991C13.3197 12.4807 12.5841 12.1969 12 11.7268C11.4159 12.1969 10.6803 12.4807 9.88668 12.4991C9.84555 12.5 9.80225 12.5 9.76086 12.5H9.76077L9.75 12.5L9.73923 12.5H9.73914C9.69775 12.5 9.65445 12.5 9.61332 12.4991C8.8197 12.4807 8.08409 12.1969 7.5 11.7268C7.09596 12.0519 6.6192 12.2877 6.09984 12.4087C5.75542 12.489 5.38227 12.4993 5.01747 12.5002Z'
      fill={color}
    />
  </svg>
)

export const Shop: React.FC<IconComponentProps> = ({
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
      d='M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 11V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V11'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M4.62127 4.51493C4.80316 3.78737 4.8941 3.42359 5.16536 3.21179C5.43663 3 5.8116 3 6.56155 3H17.4384C18.1884 3 18.5634 3 18.8346 3.21179C19.1059 3.42359 19.1968 3.78737 19.3787 4.51493L20.5823 9.32938C20.6792 9.71675 20.7276 9.91044 20.7169 10.0678C20.6892 10.4757 20.416 10.8257 20.0269 10.9515C19.8769 11 19.6726 11 19.2641 11V11C18.7309 11 18.4644 11 18.2405 10.9478C17.6133 10.8017 17.0948 10.3625 16.8475 9.76781C16.7593 9.55555 16.7164 9.29856 16.6308 8.78457V8.78457C16.6068 8.64076 16.5948 8.56886 16.5812 8.54994C16.5413 8.49439 16.4587 8.49439 16.4188 8.54994C16.4052 8.56886 16.3932 8.64076 16.3692 8.78457L16.2877 9.27381C16.2791 9.32568 16.2747 9.35161 16.2704 9.37433C16.0939 10.3005 15.2946 10.9777 14.352 10.9995C14.3289 11 14.3026 11 14.25 11V11C14.1974 11 14.1711 11 14.148 10.9995C13.2054 10.9777 12.4061 10.3005 12.2296 9.37433C12.2253 9.35161 12.2209 9.32568 12.2123 9.27381L12.1308 8.78457C12.1068 8.64076 12.0948 8.56886 12.0812 8.54994C12.0413 8.49439 11.9587 8.49439 11.9188 8.54994C11.9052 8.56886 11.8932 8.64076 11.8692 8.78457L11.7877 9.27381C11.7791 9.32568 11.7747 9.35161 11.7704 9.37433C11.5939 10.3005 10.7946 10.9777 9.85199 10.9995C9.82887 11 9.80258 11 9.75 11V11C9.69742 11 9.67113 11 9.64801 10.9995C8.70541 10.9777 7.90606 10.3005 7.7296 9.37433C7.72527 9.35161 7.72095 9.32568 7.7123 9.27381L7.63076 8.78457C7.60679 8.64076 7.59481 8.56886 7.58122 8.54994C7.54132 8.49439 7.45868 8.49439 7.41878 8.54994C7.40519 8.56886 7.39321 8.64076 7.36924 8.78457V8.78457C7.28357 9.29856 7.24074 9.55555 7.15249 9.76781C6.90524 10.3625 6.38675 10.8017 5.75951 10.9478C5.53563 11 5.26905 11 4.73591 11V11C4.32737 11 4.12309 11 3.97306 10.9515C3.58403 10.8257 3.31078 10.4757 3.28307 10.0678C3.27239 9.91044 3.32081 9.71675 3.41765 9.32938L4.62127 4.51493Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const ShopDuotone: React.FC<IconComponentProps> = ({
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
      d='M5.05847 12C5.02618 12 5 12.0262 5 12.0585V19C5 19.9428 5 20.4142 5.29289 20.7071C5.58579 21 6.05719 21 7 21H17C17.9428 21 18.4142 21 18.7071 20.7071C19 20.4142 19 19.9428 19 19V12.0585C19 12.0262 18.9738 12 18.9415 12H17.693L17.664 12C17.5229 12.0001 17.3461 12.0002 17.1891 11.9827C16.9962 11.9612 16.7417 11.9059 16.4921 11.7329C16.4303 11.69 16.3475 11.6891 16.2846 11.7305C16.0516 11.8839 15.807 11.9427 15.6188 11.9692C15.3968 12.0003 15.1352 12.0001 14.9104 12L14.8672 12H13.3828L13.3471 12C13.1695 12.0001 12.9537 12.0003 12.7658 11.9763C12.3376 11.9218 12.1236 11.8945 12.1207 11.8942C11.6786 11.8404 12.3214 11.8404 11.8793 11.8942C11.8764 11.8945 11.6624 11.9218 11.2342 11.9763C11.0463 12.0003 10.8305 12.0001 10.6529 12L10.6172 12H9.13278L9.08955 12C8.86475 12.0001 8.6032 12.0003 8.38121 11.9692C8.19302 11.9427 7.94837 11.8839 7.71535 11.7305C7.65252 11.6891 7.56972 11.69 7.50789 11.7329C7.25826 11.9059 7.00385 11.9612 6.81094 11.9827C6.65394 12.0002 6.47706 12.0001 6.33605 12L6.307 12H5.05847ZM5.93366 11C5.43742 11 4.9946 10.5553 5.22166 10.1141C5.44333 9.68332 5.8539 9.39006 6.67505 8.80352L9.67505 6.66067C10.7977 5.85875 11.3591 5.45779 12 5.45779C12.6409 5.45779 13.2023 5.85875 14.325 6.66067L17.325 8.80352C18.1461 9.39006 18.5567 9.68332 18.7783 10.1141C19.0054 10.5553 18.5626 11 18.0663 11H17.693C17.3578 11 17.1902 11 17.0617 10.9109C16.9954 10.865 16.9477 10.8011 16.9009 10.7068C16.8569 10.6183 16.8137 10.5031 16.7567 10.3511L16.7567 10.3511L16.5463 9.7901L16.1132 8.63511L16.1129 8.63438L16.0964 8.59039L16.0964 8.59037C15.8768 8.00475 15.767 7.71193 15.6806 7.7332C15.5943 7.75447 15.6331 8.06478 15.7107 8.6854V8.68541L15.7165 8.73204L15.7166 8.73281L15.8595 9.87595V9.87596C15.9078 10.2625 15.9383 10.5065 15.891 10.6757C15.8807 10.7127 15.8666 10.7461 15.8482 10.7767C15.8367 10.7958 15.8235 10.8138 15.8084 10.8309C15.6592 11 15.3952 11 14.8672 11H13.3828C12.9624 11 12.7523 11 12.6105 10.8748C12.5751 10.8435 12.5468 10.8071 12.5237 10.7634C12.4617 10.6468 12.4355 10.4792 12.403 10.2232L12.3905 10.124L12.2104 8.68315L12.2048 8.63803L12.1985 8.58763C12.125 8.00002 12.0883 7.70621 12 7.70621C11.9117 7.70621 11.875 8.00002 11.8015 8.58763L11.7952 8.63803L11.7896 8.68315L11.6095 10.124L11.597 10.2232C11.5645 10.4792 11.5383 10.6468 11.4763 10.7634C11.4532 10.8071 11.4249 10.8435 11.3895 10.8748C11.2477 11 11.0376 11 10.6172 11H9.13278C8.60481 11 8.34083 11 8.19155 10.8309C8.17649 10.8138 8.16327 10.7958 8.15176 10.7767C8.13338 10.7461 8.11933 10.7127 8.109 10.6757C8.06169 10.5065 8.09218 10.2625 8.1405 9.87597L8.1405 9.87595L8.2834 8.73281L8.28349 8.73204L8.28932 8.68542L8.28932 8.68541L8.28932 8.6854C8.3669 8.06478 8.40569 7.75447 8.31935 7.7332C8.23302 7.71193 8.12321 8.00475 7.9036 8.59039L7.8871 8.63438L7.88683 8.63511L7.45371 9.7901L7.24333 10.3511C7.18633 10.5031 7.14313 10.6183 7.09914 10.7068C7.05229 10.8011 7.00456 10.865 6.9383 10.9109C6.80982 11 6.64221 11 6.307 11H5.93366Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M4.62127 4.51493C4.80316 3.78737 4.8941 3.42359 5.16536 3.21179C5.43663 3 5.8116 3 6.56155 3H17.4384C18.1884 3 18.5634 3 18.8346 3.21179C19.1059 3.42359 19.1968 3.78737 19.3787 4.51493L20.8447 10.3787C20.9162 10.6647 20.9519 10.8077 20.8769 10.9039C20.8018 11 20.6544 11 20.3596 11H17.744C17.3856 11 17.2064 11 17.0736 10.9011C16.9407 10.8023 16.8892 10.6306 16.7862 10.2873L16.0975 7.99155C15.8809 7.26969 15.7726 6.90876 15.6835 6.92642C15.5944 6.94407 15.6319 7.31902 15.7069 8.06892L15.89 9.9005C15.9414 10.4142 15.9671 10.671 15.8182 10.8355C15.6694 11 15.4112 11 14.895 11H13.405C12.9749 11 12.7598 11 12.617 10.8707C12.4741 10.7415 12.4527 10.5275 12.41 10.0995L12.199 7.99008C12.1267 7.26668 12.0905 6.90499 12 6.90499C11.9095 6.90499 11.8733 7.26668 11.801 7.99007L11.59 10.0995C11.5473 10.5275 11.5259 10.7415 11.383 10.8707C11.2402 11 11.0251 11 10.595 11H9.10499C8.58875 11 8.33064 11 8.18177 10.8355C8.0329 10.671 8.05858 10.4142 8.10995 9.9005L8.29311 8.06892C8.3681 7.31902 8.40559 6.94407 8.31648 6.92642C8.22737 6.90876 8.11909 7.26969 7.90254 7.99155L7.2138 10.2873C7.11081 10.6306 7.05931 10.8023 6.92645 10.9011C6.79359 11 6.61438 11 6.25597 11H3.64039C3.3456 11 3.19821 11 3.12314 10.9039C3.04807 10.8077 3.08382 10.6647 3.15532 10.3787L4.62127 4.51493Z'
      fill={color}
    />
    <path
      d='M12.5 15H11.5C10.3954 15 9.5 15.8954 9.5 17V20.85C9.5 20.9328 9.56716 21 9.65 21H14.35C14.4328 21 14.5 20.9328 14.5 20.85V17C14.5 15.8954 13.6046 15 12.5 15Z'
      fill={color}
    />
  </svg>
)

export const ShopDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M5.5 10V17.5C5.5 18.4428 5.5 18.9142 5.79289 19.2071C6.08579 19.5 6.55719 19.5 7.5 19.5H16.5C17.4428 19.5 17.9142 19.5 18.2071 19.2071C18.5 18.9142 18.5 18.4428 18.5 17.5V10'
      stroke={color}
      strokeOpacity='0.25'
    />
    <path
      d='M14.5 19V15C14.5 13.8954 13.6046 13 12.5 13H11.5C10.3954 13 9.5 13.8954 9.5 15V19'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M4.461 5.92432C4.96491 4.74853 5.21687 4.16064 5.71781 3.83032C6.21875 3.5 6.85836 3.5 8.13758 3.5H15.8624C17.1416 3.5 17.7812 3.5 18.2822 3.83032C18.7831 4.16064 19.0351 4.74853 19.539 5.92432L20.2744 7.64037C20.5664 8.32165 20.7124 8.66229 20.7239 8.93748C20.7508 9.5827 20.3617 10.1727 19.7581 10.4021C19.5006 10.5 19.13 10.5 18.3888 10.5V10.5C18.1586 10.5 18.0435 10.5 17.9396 10.4776C17.6994 10.426 17.4867 10.2877 17.3419 10.0892C17.2793 10.0033 17.2325 9.89814 17.139 9.68779L16.3114 7.82561C16.0164 7.16195 15.8689 6.83012 15.783 6.85845C15.6971 6.88678 15.7758 7.24126 15.9334 7.95023L15.9949 8.22713C16.2105 9.19722 16.3183 9.68227 16.1019 10.0292C16.06 10.0963 16.0104 10.1581 15.9541 10.2135C15.6623 10.5 15.1654 10.5 14.1717 10.5V10.5C13.4354 10.5 13.0673 10.5 12.8031 10.306C12.7511 10.2678 12.703 10.2247 12.6594 10.1773C12.4374 9.93621 12.3967 9.57032 12.3154 8.83854L12.1988 7.78899C12.1259 7.13336 12.0895 6.80554 12 6.80554C11.9105 6.80554 11.8741 7.13336 11.8012 7.78899L11.6846 8.83854C11.6033 9.57032 11.5626 9.93621 11.3406 10.1773C11.297 10.2247 11.2489 10.2678 11.1969 10.306C10.9327 10.5 10.5646 10.5 9.82832 10.5V10.5C8.83456 10.5 8.33768 10.5 8.04592 10.2135C7.98956 10.1581 7.93995 10.0963 7.89814 10.0292C7.68172 9.68227 7.78951 9.19722 8.00508 8.22713L8.06662 7.95023C8.22416 7.24126 8.30294 6.88678 8.217 6.85845C8.13106 6.83012 7.98358 7.16195 7.68862 7.82561L6.86098 9.68779C6.76749 9.89814 6.72075 10.0033 6.65809 10.0892C6.51334 10.2877 6.30059 10.426 6.06043 10.4776C5.95647 10.5 5.84137 10.5 5.61119 10.5V10.5C4.86998 10.5 4.49937 10.5 4.24191 10.4021C3.63826 10.1727 3.2492 9.5827 3.27611 8.93748C3.28759 8.66229 3.43358 8.32165 3.72556 7.64037L4.461 5.92432Z'
      stroke={color}
    />
  </svg>
)

export const ShopLight: React.FC<IconComponentProps> = ({
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
      d='M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 11V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V11'
      stroke={color}
    />
    <path
      d='M4.62127 4.51493C4.80316 3.78737 4.8941 3.42359 5.16536 3.21179C5.43663 3 5.8116 3 6.56155 3H17.4384C18.1884 3 18.5634 3 18.8346 3.21179C19.1059 3.42359 19.1968 3.78737 19.3787 4.51493L20.5823 9.32938C20.6792 9.71675 20.7276 9.91044 20.7169 10.0678C20.6892 10.4757 20.416 10.8257 20.0269 10.9515C19.8769 11 19.6726 11 19.2641 11V11C18.7309 11 18.4644 11 18.2405 10.9478C17.6133 10.8017 17.0948 10.3625 16.8475 9.76781C16.7593 9.55555 16.7164 9.29856 16.6308 8.78457V8.78457C16.6068 8.64076 16.5948 8.56886 16.5812 8.54994C16.5413 8.49439 16.4587 8.49439 16.4188 8.54994C16.4052 8.56886 16.3932 8.64076 16.3692 8.78457L16.2877 9.27381C16.2791 9.32568 16.2747 9.35161 16.2704 9.37433C16.0939 10.3005 15.2946 10.9777 14.352 10.9995C14.3289 11 14.3026 11 14.25 11V11C14.1974 11 14.1711 11 14.148 10.9995C13.2054 10.9777 12.4061 10.3005 12.2296 9.37433C12.2253 9.35161 12.2209 9.32568 12.2123 9.27381L12.1308 8.78457C12.1068 8.64076 12.0948 8.56886 12.0812 8.54994C12.0413 8.49439 11.9587 8.49439 11.9188 8.54994C11.9052 8.56886 11.8932 8.64076 11.8692 8.78457L11.7877 9.27381C11.7791 9.32568 11.7747 9.35161 11.7704 9.37433C11.5939 10.3005 10.7946 10.9777 9.85199 10.9995C9.82887 11 9.80258 11 9.75 11V11C9.69742 11 9.67113 11 9.64801 10.9995C8.70541 10.9777 7.90606 10.3005 7.7296 9.37433C7.72527 9.35161 7.72095 9.32568 7.7123 9.27381L7.63076 8.78457C7.60679 8.64076 7.59481 8.56886 7.58122 8.54994C7.54132 8.49439 7.45868 8.49439 7.41878 8.54994C7.40519 8.56886 7.39321 8.64076 7.36924 8.78457V8.78457C7.28357 9.29856 7.24074 9.55555 7.15249 9.76781C6.90524 10.3625 6.38675 10.8017 5.75951 10.9478C5.53563 11 5.26905 11 4.73591 11V11C4.32737 11 4.12309 11 3.97306 10.9515C3.58403 10.8257 3.31078 10.4757 3.28307 10.0678C3.27239 9.91044 3.32081 9.71675 3.41765 9.32938L4.62127 4.51493Z'
      stroke={color}
    />
  </svg>
)

export const Ticket: React.FC<IconComponentProps> = ({
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
      d='M3 8.5C3 7.10218 3 6.40326 3.22836 5.85195C3.53284 5.11687 4.11687 4.53284 4.85195 4.22836C5.40326 4 6.10218 4 7.5 4H16.5C17.8978 4 18.5967 4 19.1481 4.22836C19.8831 4.53284 20.4672 5.11687 20.7716 5.85195C21 6.40326 21 7.10218 21 8.5V9.25C21 9.66421 20.6642 10 20.25 10H20C18.8954 10 18 10.8954 18 12V12C18 13.1046 18.8954 14 20 14H20.25C20.6642 14 21 14.3358 21 14.75V15.5C21 16.8978 21 17.5967 20.7716 18.1481C20.4672 18.8831 19.8831 19.4672 19.1481 19.7716C18.5967 20 17.8978 20 16.5 20H7.5C6.10218 20 5.40326 20 4.85195 19.7716C4.11687 19.4672 3.53284 18.8831 3.22836 18.1481C3 17.5967 3 16.8978 3 15.5V14.75C3 14.3358 3.33579 14 3.75 14H4C5.10457 14 6 13.1046 6 12V12C6 10.8954 5.10457 10 4 10H3.75C3.33579 10 3 9.66421 3 9.25V8.5Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M11.5568 10.6885C11.7249 10.2536 11.809 10.0361 11.9455 10.0059C11.9814 9.99802 12.0186 9.99802 12.0545 10.0059C12.191 10.0361 12.2751 10.2536 12.4432 10.6885C12.5389 10.9359 12.5867 11.0596 12.6761 11.1437C12.7012 11.1673 12.7284 11.1883 12.7574 11.2065C12.8608 11.2711 12.9899 11.2831 13.248 11.3071C13.685 11.3477 13.9035 11.368 13.9702 11.4973C13.984 11.5241 13.9934 11.5531 13.998 11.5831C14.0201 11.7279 13.8595 11.8796 13.5383 12.1829L13.449 12.2671C13.2989 12.4089 13.2238 12.4798 13.1803 12.5683C13.1543 12.6213 13.1368 12.6785 13.1286 12.7375C13.115 12.8358 13.137 12.9386 13.1809 13.1443L13.1967 13.2178C13.2755 13.5867 13.315 13.7712 13.2657 13.8618C13.2215 13.9433 13.1401 13.9954 13.0501 13.9999C12.9499 14.0048 12.8088 13.8855 12.5265 13.6468C12.3406 13.4895 12.2476 13.4109 12.1443 13.3802C12.05 13.3521 11.95 13.3521 11.8557 13.3802C11.7524 13.4109 11.6594 13.4895 11.4735 13.6468C11.1912 13.8855 11.0501 14.0048 10.9499 13.9999C10.8599 13.9954 10.7785 13.9433 10.7343 13.8618C10.685 13.7712 10.7245 13.5867 10.8033 13.2178L10.8191 13.1443C10.863 12.9386 10.885 12.8358 10.8714 12.7375C10.8632 12.6785 10.8457 12.6213 10.8197 12.5683C10.7762 12.4798 10.7011 12.4089 10.551 12.2671L10.4617 12.1829C10.1405 11.8796 9.97989 11.7279 10.002 11.5831C10.0066 11.5531 10.016 11.5241 10.0298 11.4973C10.0965 11.368 10.315 11.3477 10.752 11.3071C11.0101 11.2831 11.1392 11.2711 11.2426 11.2065C11.2716 11.1883 11.2988 11.1673 11.3239 11.1437C11.4133 11.0596 11.4611 10.9359 11.5568 10.6885Z'
      fill={color}
      stroke={color}
    />
  </svg>
)

export const TicketAlt: React.FC<IconComponentProps> = ({
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
      d='M18 21V2.99997L15 4.99997L12 2.99997L9 4.99997L6 2.99997V21L9 19.5L12 21L15 19.5L18 21Z'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path d='M10 9H14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M10 15H14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M10 12H14' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const TicketAltDuotone: React.FC<IconComponentProps> = ({
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
      d='M19 20.1384V3.86159C19 3.47768 18.5853 3.23699 18.2519 3.42747L15.9961 4.71649C15.6887 4.89217 15.3113 4.89217 15.0039 4.71649L12.7938 3.45361C12.3019 3.17253 11.6981 3.17253 11.2062 3.45361L8.99614 4.71649C8.68871 4.89217 8.31129 4.89217 8.00386 4.71649L5.74807 3.42747C5.41474 3.23699 5 3.47768 5 3.86159V20.1384C5 20.5223 5.41474 20.763 5.74807 20.5725L8.00386 19.2835C8.31129 19.1078 8.68871 19.1078 8.99614 19.2835L11.2062 20.5464C11.6981 20.8275 12.3019 20.8275 12.7938 20.5464L15.0039 19.2835C15.3113 19.1078 15.6887 19.1078 15.9961 19.2835L18.2519 20.5725C18.5853 20.763 19 20.5223 19 20.1384Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M10 9H14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M10 15H14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M10 12H14' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const TicketAltDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M17.5 19.0052V4.99481C17.5 4.35586 16.7879 3.97474 16.2562 4.32917L14.9867 5.17551C14.6969 5.36876 14.3153 5.3522 14.0432 5.13457L12.4998 3.8998C12.2076 3.66606 11.7924 3.66607 11.5002 3.89981L9.95679 5.13457C9.68475 5.3522 9.30314 5.36876 9.01327 5.17551L7.74376 4.32917C7.21212 3.97474 6.5 4.35586 6.5 4.99481V19.0052C6.5 19.6441 7.21212 20.0253 7.74376 19.6708L9.01327 18.8245C9.30314 18.6312 9.68475 18.6478 9.95679 18.8654L11.5002 20.1002C11.7924 20.3339 12.2076 20.3339 12.4998 20.1002L14.0432 18.8654C14.3153 18.6478 14.6969 18.6312 14.9867 18.8245L16.2562 19.6708C16.7879 20.0253 17.5 19.6441 17.5 19.0052Z'
      stroke={color}
      strokeOpacity='0.25'
    />
    <path d='M9.5 9.5H14.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 12H14.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 14.5H14.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const TicketAltFill: React.FC<IconComponentProps> = ({
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
      d='M18.2519 3.42746C18.5853 3.23699 19 3.47767 19 3.86159V20.1384C19 20.5223 18.5853 20.763 18.2519 20.5725L15.9961 19.2835C15.6887 19.1078 15.3113 19.1078 15.0039 19.2835L12.7938 20.5464C12.3019 20.8275 11.6981 20.8275 11.2062 20.5464L8.99614 19.2835C8.68871 19.1078 8.31129 19.1078 8.00386 19.2835L5.74807 20.5725C5.41474 20.763 5 20.5223 5 20.1384V3.86159C5 3.47767 5.41474 3.23699 5.74807 3.42746L8.00386 4.71649C8.31129 4.89216 8.68871 4.89216 8.99614 4.71649L11.2062 3.45361C11.6981 3.17253 12.3019 3.17253 12.7938 3.45361L15.0039 4.71649C15.3113 4.89216 15.6887 4.89216 15.9961 4.71649L18.2519 3.42746ZM9.5 9C9.22386 9 9 9.22385 9 9.5C9 9.77614 9.22386 10 9.5 10H14.5C14.7761 10 15 9.77614 15 9.5C15 9.22385 14.7761 9 14.5 9H9.5ZM9.5 11.5C9.22386 11.5 9 11.7239 9 12C9 12.2761 9.22386 12.5 9.5 12.5H14.5C14.7761 12.5 15 12.2761 15 12C15 11.7239 14.7761 11.5 14.5 11.5H9.5ZM9.5 14C9.22386 14 9 14.2239 9 14.5C9 14.7761 9.22386 15 9.5 15H14.5C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14H9.5Z'
      fill={color}
    />
  </svg>
)

export const TicketAltLight: React.FC<IconComponentProps> = ({
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
      d='M17.5 19.0052V4.99481C17.5 4.35586 16.7879 3.97474 16.2562 4.32917L14.9867 5.17551C14.6969 5.36876 14.3153 5.3522 14.0432 5.13457L12.4998 3.8998C12.2076 3.66606 11.7924 3.66607 11.5002 3.89981L9.95679 5.13457C9.68475 5.3522 9.30314 5.36876 9.01327 5.17551L7.74376 4.32917C7.21212 3.97474 6.5 4.35586 6.5 4.99481V19.0052C6.5 19.6441 7.21212 20.0253 7.74376 19.6708L9.01327 18.8245C9.30314 18.6312 9.68475 18.6478 9.95679 18.8654L11.5002 20.1002C11.7924 20.3339 12.2076 20.3339 12.4998 20.1002L14.0432 18.8654C14.3153 18.6478 14.6969 18.6312 14.9867 18.8245L16.2562 19.6708C16.7879 20.0253 17.5 19.6441 17.5 19.0052Z'
      stroke={color}
    />
    <path d='M9.5 9.5H14.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 12H14.5' stroke={color} strokeLinecap='round' />
    <path d='M9.5 14.5H14.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const TicketDuotone: React.FC<IconComponentProps> = ({
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
      d='M3 8.5C3 7.10218 3 6.40326 3.22836 5.85195C3.53284 5.11687 4.11687 4.53284 4.85195 4.22836C5.40326 4 6.10218 4 7.5 4H16.5C17.8978 4 18.5967 4 19.1481 4.22836C19.8831 4.53284 20.4672 5.11687 20.7716 5.85195C21 6.40326 21 7.10218 21 8.5V9.25C21 9.66421 20.6642 10 20.25 10H20C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14H20.25C20.6642 14 21 14.3358 21 14.75V15.5C21 16.8978 21 17.5967 20.7716 18.1481C20.4672 18.8831 19.8831 19.4672 19.1481 19.7716C18.5967 20 17.8978 20 16.5 20H7.5C6.10218 20 5.40326 20 4.85195 19.7716C4.11687 19.4672 3.53284 18.8831 3.22836 18.1481C3 17.5967 3 16.8978 3 15.5V14.75C3 14.3358 3.33579 14 3.75 14H4C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10H3.75C3.33579 10 3 9.66421 3 9.25V8.5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M11.5964 8.55201C11.7961 8.27883 12.2039 8.27883 12.4036 8.55201L13.3628 9.86385C13.4245 9.94825 13.5111 10.0112 13.6105 10.0438L15.1545 10.5506C15.476 10.6562 15.602 11.044 15.404 11.3184L14.4527 12.636C14.3915 12.7208 14.3584 12.8226 14.3581 12.9271L14.3532 14.5522C14.3522 14.8907 14.0223 15.1303 13.7001 15.0267L12.1531 14.5292C12.0535 14.4972 11.9465 14.4972 11.8469 14.5292L10.2999 15.0267C9.97769 15.1303 9.64781 14.8907 9.64679 14.5522L9.64187 12.9271C9.64155 12.8226 9.60847 12.7208 9.54727 12.636L8.59604 11.3184C8.39796 11.044 8.52396 10.6562 8.84549 10.5506L10.3895 10.0438C10.4889 10.0112 10.5755 9.94825 10.6372 9.86384L11.5964 8.55201Z'
      fill={color}
    />
  </svg>
)

export const TicketDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M3.5 8.5C3.5 6.84315 4.84315 5.5 6.5 5.5H17.5C19.1569 5.5 20.5 6.84315 20.5 8.5V8.75C20.5 9.16421 20.1642 9.5 19.75 9.5V9.5C18.5074 9.5 17.5 10.5074 17.5 11.75V12.25C17.5 13.4926 18.5074 14.5 19.75 14.5V14.5C20.1642 14.5 20.5 14.8358 20.5 15.25V15.5C20.5 17.1569 19.1569 18.5 17.5 18.5H6.5C4.84315 18.5 3.5 17.1569 3.5 15.5V15.25C3.5 14.8358 3.83579 14.5 4.25 14.5V14.5C5.49264 14.5 6.5 13.4926 6.5 12.25V11.75C6.5 10.5074 5.49264 9.5 4.25 9.5V9.5C3.83579 9.5 3.5 9.16421 3.5 8.75V8.5Z'
      stroke={color}
      strokeOpacity='0.25'
    />
    <path
      d='M12.9592 10.159L13.3628 9.86385L12.9592 10.159C13.0826 10.3278 13.2558 10.4536 13.4545 10.5188L14.9986 11.0257L14.0473 12.3433L14.4527 12.636L14.0473 12.3433C13.9249 12.5129 13.8588 12.7165 13.8581 12.9256L13.8532 14.5507L12.3061 14.0532L12.1531 14.5292L12.3061 14.0532C12.1071 13.9892 11.8929 13.9892 11.6939 14.0532L10.1468 14.5507L10.1419 12.9256C10.1412 12.7165 10.0751 12.5129 9.95266 12.3433L9.00144 11.0257L10.5455 10.5188C10.7442 10.4536 10.9174 10.3278 11.0408 10.159L12 8.84712L12.9592 10.159Z'
      stroke={color}
    />
  </svg>
)

export const TicketFill: React.FC<IconComponentProps> = ({
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
      d='M2.22836 5.85195C2 6.40326 2 7.10218 2 8.5V9.25C2 9.66421 2.33579 10 2.75 10H3C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14H2.75C2.33579 14 2 14.3358 2 14.75V15.5C2 16.8978 2 17.5967 2.22836 18.1481C2.53284 18.8831 3.11687 19.4672 3.85195 19.7716C4.40326 20 5.10218 20 6.5 20H17.5C18.8978 20 19.5967 20 20.1481 19.7716C20.8831 19.4672 21.4672 18.8831 21.7716 18.1481C22 17.5967 22 16.8978 22 15.5V14.75C22 14.3358 21.6642 14 21.25 14H21C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10H21.25C21.6642 10 22 9.66421 22 9.25V8.5C22 7.10218 22 6.40326 21.7716 5.85195C21.4672 5.11687 20.8831 4.53284 20.1481 4.22836C19.5967 4 18.8978 4 17.5 4H6.5C5.10218 4 4.40326 4 3.85195 4.22836C3.11687 4.53284 2.53284 5.11687 2.22836 5.85195ZM11.5568 10.6885L11.5568 10.6885C11.4611 10.9359 11.4133 11.0596 11.3239 11.1437C11.2988 11.1673 11.2716 11.1883 11.2426 11.2065C11.1392 11.2711 11.0101 11.2831 10.752 11.3071C10.315 11.3477 10.0965 11.368 10.0298 11.4973C10.016 11.5241 10.0066 11.5531 10.002 11.5831C9.97989 11.7279 10.1405 11.8796 10.4618 12.1829L10.551 12.2671L10.551 12.2671C10.7011 12.4089 10.7762 12.4798 10.8197 12.5683C10.8457 12.6213 10.8632 12.6785 10.8714 12.7375C10.885 12.8357 10.863 12.9386 10.8191 13.1443L10.8191 13.1443L10.8033 13.2178C10.7245 13.5867 10.685 13.7712 10.7343 13.8618C10.7785 13.9433 10.8599 13.9954 10.9499 13.9999C11.0501 14.0048 11.1912 13.8855 11.4735 13.6468C11.6594 13.4895 11.7524 13.4109 11.8557 13.3802C11.95 13.3521 12.05 13.3521 12.1443 13.3802C12.2476 13.4109 12.3406 13.4895 12.5265 13.6468C12.8088 13.8855 12.9499 14.0048 13.0501 13.9999C13.1401 13.9954 13.2215 13.9433 13.2657 13.8618C13.315 13.7712 13.2755 13.5867 13.1967 13.2178L13.1809 13.1443C13.137 12.9386 13.115 12.8358 13.1286 12.7375C13.1368 12.6785 13.1543 12.6213 13.1803 12.5683C13.2238 12.4798 13.2989 12.4089 13.449 12.2671L13.5383 12.1829C13.8595 11.8796 14.0201 11.7279 13.998 11.5831C13.9934 11.5531 13.984 11.5241 13.9702 11.4973C13.9035 11.368 13.685 11.3477 13.248 11.3071C12.9899 11.2831 12.8608 11.2711 12.7574 11.2065C12.7284 11.1883 12.7012 11.1673 12.6761 11.1437C12.5867 11.0596 12.5389 10.9359 12.4432 10.6885C12.2751 10.2536 12.191 10.0361 12.0545 10.0059C12.0186 9.99802 11.9814 9.99802 11.9455 10.0059C11.809 10.0361 11.7249 10.2536 11.5568 10.6885Z'
      fill={color}
    />
  </svg>
)

export const TicketLight: React.FC<IconComponentProps> = ({
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
      d='M3 8.5C3 7.10218 3 6.40326 3.22836 5.85195C3.53284 5.11687 4.11687 4.53284 4.85195 4.22836C5.40326 4 6.10218 4 7.5 4H16.5C17.8978 4 18.5967 4 19.1481 4.22836C19.8831 4.53284 20.4672 5.11687 20.7716 5.85195C21 6.40326 21 7.10218 21 8.5V9.25C21 9.66421 20.6642 10 20.25 10H20C18.8954 10 18 10.8954 18 12V12C18 13.1046 18.8954 14 20 14H20.25C20.6642 14 21 14.3358 21 14.75V15.5C21 16.8978 21 17.5967 20.7716 18.1481C20.4672 18.8831 19.8831 19.4672 19.1481 19.7716C18.5967 20 17.8978 20 16.5 20H7.5C6.10218 20 5.40326 20 4.85195 19.7716C4.11687 19.4672 3.53284 18.8831 3.22836 18.1481C3 17.5967 3 16.8978 3 15.5V14.75C3 14.3358 3.33579 14 3.75 14H4C5.10457 14 6 13.1046 6 12V12C6 10.8954 5.10457 10 4 10H3.75C3.33579 10 3 9.66421 3 9.25V8.5Z'
      stroke={color}
    />
    <path
      d='M11.5568 10.6885C11.7249 10.2536 11.809 10.0361 11.9455 10.0059C11.9814 9.99802 12.0186 9.99802 12.0545 10.0059C12.191 10.0361 12.2751 10.2536 12.4432 10.6885C12.5389 10.9359 12.5867 11.0596 12.6761 11.1437C12.7012 11.1673 12.7284 11.1883 12.7574 11.2065C12.8608 11.2711 12.9899 11.2831 13.248 11.3071C13.685 11.3477 13.9035 11.368 13.9702 11.4973C13.984 11.5241 13.9934 11.5531 13.998 11.5831C14.0201 11.7279 13.8595 11.8796 13.5383 12.1829L13.449 12.2671C13.2989 12.4089 13.2238 12.4798 13.1803 12.5683C13.1543 12.6213 13.1368 12.6785 13.1286 12.7375C13.115 12.8358 13.137 12.9386 13.1809 13.1443L13.1967 13.2178C13.2755 13.5867 13.315 13.7712 13.2657 13.8618C13.2215 13.9433 13.1401 13.9954 13.0501 13.9999C12.9499 14.0048 12.8088 13.8855 12.5265 13.6468C12.3406 13.4895 12.2476 13.4109 12.1443 13.3802C12.05 13.3521 11.95 13.3521 11.8557 13.3802C11.7524 13.4109 11.6594 13.4895 11.4735 13.6468C11.1912 13.8855 11.0501 14.0048 10.9499 13.9999C10.8599 13.9954 10.7785 13.9433 10.7343 13.8618C10.685 13.7712 10.7245 13.5867 10.8033 13.2178L10.8191 13.1443C10.863 12.9386 10.885 12.8358 10.8714 12.7375C10.8632 12.6785 10.8457 12.6213 10.8197 12.5683C10.7762 12.4798 10.7011 12.4089 10.551 12.2671L10.4617 12.1829C10.1405 11.8796 9.97989 11.7279 10.002 11.5831C10.0066 11.5531 10.016 11.5241 10.0298 11.4973C10.0965 11.368 10.315 11.3477 10.752 11.3071C11.0101 11.2831 11.1392 11.2711 11.2426 11.2065C11.2716 11.1883 11.2988 11.1673 11.3239 11.1437C11.4133 11.0596 11.4611 10.9359 11.5568 10.6885Z'
      fill={color}
      stroke={color}
    />
  </svg>
)

export const TicketUse: React.FC<IconComponentProps> = ({
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
      d='M19.908 19.782L19.454 18.891L19.908 19.782ZM20.782 18.908L19.891 18.454L20.782 18.908ZM19.908 4.21799L20.362 3.32698L19.908 4.21799ZM20.782 5.09202L21.673 4.63803L20.782 5.09202ZM4.09202 4.21799L3.63803 3.32698L4.09202 4.21799ZM3.21799 5.09202L2.32698 4.63803L3.21799 5.09202ZM6.2 5H17.8V3H6.2V5ZM17.8 19H6.2V21H17.8V19ZM20 7.2V9.76923H22V7.2H20ZM20.7692 9H20V11H20.7692V9ZM20 14.2308V16.8H22V14.2308H20ZM20 15H20.7692V13H20V15ZM4 9H3.23077V11H4V9ZM4 9.76923V7.2H2V9.76923H4ZM4 16.8V14.2308H2V16.8H4ZM3.23077 15H4V13H3.23077V15ZM4 15C5.65685 15 7 13.6569 7 12H5C5 12.5523 4.55228 13 4 13V15ZM4 14.2308C4 14.6556 3.6556 15 3.23077 15V13C2.55104 13 2 13.551 2 14.2308H4ZM3.23077 9C3.6556 9 4 9.3444 4 9.76923H2C2 10.449 2.55103 11 3.23077 11V9ZM4 11C4.55228 11 5 11.4477 5 12H7C7 10.3431 5.65685 9 4 9V11ZM17 12C17 13.6569 18.3431 15 20 15V13C19.4477 13 19 12.5523 19 12H17ZM22 14.2308C22 13.551 21.449 13 20.7692 13V15C20.3444 15 20 14.6556 20 14.2308H22ZM20 9.76923C20 9.3444 20.3444 9 20.7692 9V11C21.449 11 22 10.449 22 9.76923H20ZM20 9C18.3431 9 17 10.3431 17 12H19C19 11.4477 19.4477 11 20 11V9ZM6.2 19C5.62345 19 5.25117 18.9992 4.96784 18.9761C4.69617 18.9539 4.59545 18.9162 4.54601 18.891L3.63803 20.673C4.01641 20.8658 4.40963 20.9371 4.80497 20.9694C5.18864 21.0008 5.65645 21 6.2 21V19ZM2 16.8C2 17.3436 1.99922 17.8114 2.03057 18.195C2.06287 18.5904 2.13419 18.9836 2.32698 19.362L4.10899 18.454C4.0838 18.4045 4.04612 18.3038 4.02393 18.0322C4.00078 17.7488 4 17.3766 4 16.8H2ZM4.54601 18.891C4.35785 18.7951 4.20487 18.6422 4.10899 18.454L2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673L4.54601 18.891ZM17.8 21C18.3436 21 18.8114 21.0008 19.195 20.9694C19.5904 20.9371 19.9836 20.8658 20.362 20.673L19.454 18.891C19.4045 18.9162 19.3038 18.9539 19.0322 18.9761C18.7488 18.9992 18.3766 19 17.8 19V21ZM20 16.8C20 17.3766 19.9992 17.7488 19.9761 18.0322C19.9539 18.3038 19.9162 18.4045 19.891 18.454L21.673 19.362C21.8658 18.9836 21.9371 18.5904 21.9694 18.195C22.0008 17.8114 22 17.3436 22 16.8H20ZM20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362L19.891 18.454C19.7951 18.6422 19.6422 18.7951 19.454 18.891L20.362 20.673ZM17.8 5C18.3766 5 18.7488 5.00078 19.0322 5.02393C19.3038 5.04612 19.4045 5.0838 19.454 5.10899L20.362 3.32698C19.9836 3.13419 19.5904 3.06287 19.195 3.03057C18.8114 2.99922 18.3436 3 17.8 3V5ZM22 7.2C22 6.65645 22.0008 6.18864 21.9694 5.80497C21.9371 5.40963 21.8658 5.01641 21.673 4.63803L19.891 5.54601C19.9162 5.59545 19.9539 5.69617 19.9761 5.96784C19.9992 6.25117 20 6.62345 20 7.2H22ZM19.454 5.10899C19.6422 5.20487 19.7951 5.35785 19.891 5.54601L21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698L19.454 5.10899ZM6.2 3C5.65645 3 5.18864 2.99922 4.80497 3.03057C4.40963 3.06287 4.01641 3.13419 3.63803 3.32698L4.54601 5.10899C4.59545 5.0838 4.69617 5.04612 4.96784 5.02393C5.25117 5.00078 5.62345 5 6.2 5V3ZM4 7.2C4 6.62345 4.00078 6.25117 4.02393 5.96784C4.04612 5.69617 4.0838 5.59545 4.10899 5.54601L2.32698 4.63803C2.13419 5.01641 2.06287 5.40963 2.03057 5.80497C1.99922 6.18864 2 6.65645 2 7.2H4ZM3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803L4.10899 5.54601C4.20487 5.35785 4.35785 5.20487 4.54601 5.10899L3.63803 3.32698Z'
      fill={color}
    />
    <path d='M13 9V10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M13 4V5' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M13 14V15' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M13 19V20' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const TicketUseDuotone: React.FC<IconComponentProps> = ({
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
      d='M14 4H7.5C6.10218 4 5.40326 4 4.85195 4.22836C4.11687 4.53284 3.53284 5.11687 3.22836 5.85195C3 6.40326 3 7.10218 3 8.5V9.25C3 9.66421 3.33579 10 3.75 10H4C5.10457 10 6 10.8954 6 12C6 13.1046 5.10457 14 4 14H3.75C3.33579 14 3 14.3358 3 14.75V15.5C3 16.8978 3 17.5967 3.22836 18.1481C3.53284 18.8831 4.11687 19.4672 4.85195 19.7716C5.40326 20 6.10218 20 7.5 20H14V19C14 18.4477 14.4477 18 15 18V16C14.4477 16 14 15.5523 14 15V14C14 13.4477 14.4477 13 15 13V11C14.4477 11 14 10.5523 14 10V9C14 8.44772 14.4477 8 15 8V6C14.4477 6 14 5.55228 14 5V4Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15 6V8C15.5523 8 16 8.44772 16 9V10C16 10.5523 15.5523 11 15 11V13C15.5523 13 16 13.4477 16 14V15C16 15.5523 15.5523 16 15 16V18C15.5523 18 16 18.4477 16 19V20H16.5C17.8978 20 18.5967 20 19.1481 19.7716C19.8831 19.4672 20.4672 18.8831 20.7716 18.1481C21 17.5967 21 16.8978 21 15.5V14.75C21 14.3358 20.6642 14 20.25 14H20C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10H20.25C20.6642 10 21 9.66421 21 9.25V8.5C21 7.10218 21 6.40326 20.7716 5.85195C20.4672 5.11687 19.8831 4.53284 19.1481 4.22836C18.5967 4 17.8978 4 16.5 4H16V5C16 5.55228 15.5523 6 15 6Z'
      fill={color}
      fillOpacity='0.25'
    />
  </svg>
)

export const TicketUseDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M5.91473 4.55764L6.01227 5.04804L5.91473 4.55764ZM3.55764 6.91473L4.04804 7.01227L3.55764 6.91473ZM3.55764 17.0853L3.06725 17.1828L3.55764 17.0853ZM5.91473 19.4424L5.81718 19.9327H5.81718L5.91473 19.4424ZM12.8505 8.0111L12.7764 7.51662L12.8505 8.0111ZM12.8505 13.0111L12.7764 12.5166L12.8505 13.0111ZM12.8505 18.0111L12.7764 17.5166L12.8505 18.0111ZM12.8505 10.9889L12.9246 10.4944L12.8505 10.9889ZM12.8505 15.9889L12.7764 16.4834L12.8505 15.9889ZM12.9246 5.49443C12.6844 5.45842 12.5 5.25029 12.5 5H11.5C11.5 5.75268 12.0539 6.37509 12.7764 6.48338L12.9246 5.49443ZM12.5 5V4.65H11.5V5H12.5ZM11.85 4H7.25V5H11.85V4ZM7.25 4C6.57698 4 6.16745 3.99758 5.81718 4.06725L6.01227 5.04804C6.2416 5.00242 6.52905 5 7.25 5V4ZM5.81718 4.06725C4.42877 4.34342 3.34342 5.42877 3.06725 6.81718L4.04804 7.01227C4.2453 6.02055 5.02055 5.2453 6.01227 5.04804L5.81718 4.06725ZM3.06725 6.81718C2.99758 7.16745 3 7.57698 3 8.25H4C4 7.52905 4.00242 7.2416 4.04804 7.01227L3.06725 6.81718ZM3 8.25V8.75H4V8.25H3ZM3 8.75C3 9.44036 3.55964 10 4.25 10V9C4.11193 9 4 8.88807 4 8.75H3ZM4.25 10C5.2165 10 6 10.7835 6 11.75H7C7 10.2312 5.76878 9 4.25 9V10ZM6 11.75V12.25H7V11.75H6ZM6 12.25C6 13.2165 5.2165 14 4.25 14V15C5.76878 15 7 13.7688 7 12.25H6ZM4.25 14C3.55964 14 3 14.5596 3 15.25H4C4 15.1119 4.11193 15 4.25 15V14ZM3 15.25V15.75H4V15.25H3ZM3 15.75C3 16.423 2.99758 16.8325 3.06725 17.1828L4.04804 16.9877C4.00242 16.7584 4 16.4709 4 15.75H3ZM3.06725 17.1828C3.34342 18.5712 4.42877 19.6566 5.81718 19.9327L6.01227 18.952C5.02055 18.7547 4.2453 17.9795 4.04804 16.9877L3.06725 17.1828ZM5.81718 19.9327C6.16746 20.0024 6.57698 20 7.25 20V19C6.52905 19 6.2416 18.9976 6.01227 18.952L5.81718 19.9327ZM7.25 20H11.85V19H7.25V20ZM12.5 19.35V19H11.5V19.35H12.5ZM12.5 19C12.5 18.7497 12.6844 18.5416 12.9246 18.5056L12.7764 17.5166C12.0539 17.6249 11.5 18.2473 11.5 19H12.5ZM12.5 16.15V17.85H13.5V16.15H12.5ZM11.5 15C11.5 15.7527 12.0539 16.3751 12.7764 16.4834L12.9246 15.4944C12.6844 15.4584 12.5 15.2503 12.5 15H11.5ZM11.5 14V15H12.5V14H11.5ZM12.7764 12.5166C12.0539 12.6249 11.5 13.2473 11.5 14H12.5C12.5 13.7497 12.6844 13.5416 12.9246 13.5056L12.7764 12.5166ZM12.5 11.15V12.85H13.5V11.15H12.5ZM11.5 10C11.5 10.7527 12.0539 11.3751 12.7764 11.4834L12.9246 10.4944C12.6844 10.4584 12.5 10.2503 12.5 10H11.5ZM11.5 9V10H12.5V9H11.5ZM12.7764 7.51662C12.0539 7.62491 11.5 8.24732 11.5 9H12.5C12.5 8.74971 12.6844 8.54158 12.9246 8.50557L12.7764 7.51662ZM12.5 6.15V7.85H13.5V6.15H12.5ZM12.9246 8.50557C13.205 8.46356 13.5 8.22453 13.5 7.85H12.5C12.5 7.64115 12.6599 7.53408 12.7764 7.51662L12.9246 8.50557ZM12.9246 13.5056C13.205 13.4636 13.5 13.2245 13.5 12.85H12.5C12.5 12.6412 12.6599 12.5341 12.7764 12.5166L12.9246 13.5056ZM12.9246 18.5056C13.205 18.4636 13.5 18.2245 13.5 17.85H12.5C12.5 17.6412 12.6599 17.5341 12.7764 17.5166L12.9246 18.5056ZM11.85 20C12.209 20 12.5 19.709 12.5 19.35H11.5C11.5 19.1567 11.6567 19 11.85 19V20ZM13.5 11.15C13.5 10.7755 13.205 10.5364 12.9246 10.4944L12.7764 11.4834C12.6599 11.4659 12.5 11.3588 12.5 11.15H13.5ZM12.5 4.65C12.5 4.29101 12.209 4 11.85 4V5C11.6567 5 11.5 4.8433 11.5 4.65H12.5ZM13.5 16.15C13.5 15.7755 13.205 15.5364 12.9246 15.4944L12.7764 16.4834C12.6599 16.4659 12.5 16.3588 12.5 16.15H13.5ZM12.7764 6.48338C12.6599 6.46592 12.5 6.35885 12.5 6.15H13.5C13.5 5.77547 13.205 5.53644 12.9246 5.49443L12.7764 6.48338Z'
      fill={color}
    />
    <path
      d='M18.0853 19.4424L18.1828 19.9327H18.1828L18.0853 19.4424ZM20.4424 17.0853L20.9327 17.1828V17.1828L20.4424 17.0853ZM20.4424 6.91473L20.9327 6.81718V6.81718L20.4424 6.91473ZM18.0853 4.55764L18.1828 4.06725L18.0853 4.55764ZM15 18.5C15.2762 18.5 15.5 18.7239 15.5 19H16.5C16.5 18.1716 15.8284 17.5 15 17.5V18.5ZM15.5 19V19.35H16.5V19H15.5ZM16.15 20H16.75V19H16.15V20ZM16.75 20C17.423 20 17.8325 20.0024 18.1828 19.9327L17.9877 18.952C17.7584 18.9976 17.4709 19 16.75 19V20ZM18.1828 19.9327C19.5712 19.6566 20.6566 18.5712 20.9327 17.1828L19.952 16.9877C19.7547 17.9795 18.9795 18.7547 17.9877 18.952L18.1828 19.9327ZM20.9327 17.1828C21.0024 16.8325 21 16.423 21 15.75H20C20 16.4709 19.9976 16.7584 19.952 16.9877L20.9327 17.1828ZM21 15.75V15.25H20V15.75H21ZM21 15.25C21 14.5596 20.4404 14 19.75 14V15C19.8881 15 20 15.1119 20 15.25H21ZM19.75 14C18.7835 14 18 13.2165 18 12.25H17C17 13.7688 18.2312 15 19.75 15V14ZM18 12.25V11.75H17V12.25H18ZM18 11.75C18 10.7835 18.7835 10 19.75 10V9C18.2312 9 17 10.2312 17 11.75H18ZM19.75 10C20.4404 10 21 9.44036 21 8.75H20C20 8.88807 19.8881 9 19.75 9V10ZM21 8.75V8.25H20V8.75H21ZM21 8.25C21 7.57698 21.0024 7.16746 20.9327 6.81718L19.952 7.01227C19.9976 7.2416 20 7.52905 20 8.25H21ZM20.9327 6.81718C20.6566 5.42877 19.5712 4.34342 18.1828 4.06725L17.9877 5.04804C18.9795 5.2453 19.7547 6.02055 19.952 7.01227L20.9327 6.81718ZM18.1828 4.06725C17.8325 3.99758 17.423 4 16.75 4V5C17.4709 5 17.7584 5.00242 17.9877 5.04804L18.1828 4.06725ZM16.75 4H16.15V5H16.75V4ZM15.5 4.65V5H16.5V4.65H15.5ZM15.5 5C15.5 5.27614 15.2762 5.5 15 5.5V6.5C15.8284 6.5 16.5 5.82843 16.5 5H15.5ZM15.5 7.99999V6.00001H14.5V7.99999H15.5ZM16.5 9C16.5 8.17157 15.8284 7.5 15 7.5V8.5C15.2762 8.5 15.5 8.72386 15.5 9H16.5ZM16.5 10V9H15.5V10H16.5ZM15 11.5C15.8284 11.5 16.5 10.8284 16.5 10H15.5C15.5 10.2761 15.2762 10.5 15 10.5V11.5ZM15.5 13V11H14.5V13H15.5ZM16.5 14C16.5 13.1716 15.8284 12.5 15 12.5V13.5C15.2762 13.5 15.5 13.7239 15.5 14H16.5ZM16.5 15V14H15.5V15H16.5ZM15 16.5C15.8284 16.5 16.5 15.8284 16.5 15H15.5C15.5 15.2761 15.2762 15.5 15 15.5V16.5ZM15.5 18V16H14.5V18H15.5ZM14.5 13C14.5 13.2761 14.7239 13.5 15 13.5V12.5C15.2761 12.5 15.5 12.7239 15.5 13H14.5ZM15 10.5C14.7238 10.5 14.5 10.7239 14.5 11H15.5C15.5 11.2761 15.2762 11.5 15 11.5V10.5ZM15 15.5C14.7238 15.5 14.5 15.7239 14.5 16H15.5C15.5 16.2761 15.2762 16.5 15 16.5V15.5ZM15 17.5C15.2761 17.5 15.5 17.7239 15.5 18H14.5C14.5 18.2761 14.7239 18.5 15 18.5V17.5ZM14.5 7.99999C14.5 8.27614 14.7239 8.5 15 8.5V7.5C15.2761 7.5 15.5 7.72385 15.5 7.99999H14.5ZM15 5.5C14.7238 5.5 14.5 5.72392 14.5 6.00001H15.5C15.5 6.27609 15.2762 6.5 15 6.5V5.5ZM16.15 4C15.791 4 15.5 4.29101 15.5 4.65H16.5C16.5 4.8433 16.3433 5 16.15 5V4ZM15.5 19.35C15.5 19.709 15.791 20 16.15 20V19C16.3433 19 16.5 19.1567 16.5 19.35H15.5Z'
      fill={color}
      fillOpacity='0.25'
    />
  </svg>
)

export const TicketUseFill: React.FC<IconComponentProps> = ({
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
      d='M14 4H7.5C6.10218 4 5.40326 4 4.85195 4.22836C4.11687 4.53284 3.53284 5.11687 3.22836 5.85195C3 6.40326 3 7.10218 3 8.5V9.25C3 9.66421 3.33579 10 3.75 10H4C5.10457 10 6 10.8954 6 12C6 13.1046 5.10457 14 4 14H3.75C3.33579 14 3 14.3358 3 14.75V15.5C3 16.8978 3 17.5967 3.22836 18.1481C3.53284 18.8831 4.11687 19.4672 4.85195 19.7716C5.40326 20 6.10218 20 7.5 20H14V19C14 18.4477 14.4477 18 15 18V16C14.4477 16 14 15.5523 14 15V14C14 13.4477 14.4477 13 15 13V11C14.4477 11 14 10.5523 14 10V9C14 8.44772 14.4477 8 15 8V6C14.4477 6 14 5.55228 14 5V4Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15 6V8C15.5523 8 16 8.44772 16 9V10C16 10.5523 15.5523 11 15 11V13C15.5523 13 16 13.4477 16 14V15C16 15.5523 15.5523 16 15 16V18C15.5523 18 16 18.4477 16 19V20H16.5C17.8978 20 18.5967 20 19.1481 19.7716C19.8831 19.4672 20.4672 18.8831 20.7716 18.1481C21 17.5967 21 16.8978 21 15.5V14.75C21 14.3358 20.6642 14 20.25 14H20C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10H20.25C20.6642 10 21 9.66421 21 9.25V8.5C21 7.10218 21 6.40326 20.7716 5.85195C20.4672 5.11687 19.8831 4.53284 19.1481 4.22836C18.5967 4 17.8978 4 16.5 4H16V5C16 5.55228 15.5523 6 15 6Z'
      fill={color}
    />
  </svg>
)

export const TicketUseLight: React.FC<IconComponentProps> = ({
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
      d='M4.59202 4.71799L4.36502 4.27248L4.36502 4.27248L4.59202 4.71799ZM3.71799 5.59202L3.27248 5.36502L3.27248 5.36502L3.71799 5.59202ZM3.71799 18.408L4.16349 18.181H4.16349L3.71799 18.408ZM4.59202 19.282L4.81901 18.8365H4.81901L4.59202 19.282ZM19.408 19.282L19.181 18.8365H19.181L19.408 19.282ZM20.282 18.408L19.8365 18.181V18.181L20.282 18.408ZM20.2692 14.4187L20.2546 13.919H20.2546L20.2692 14.4187ZM20.0356 14.4256L20.0502 14.9254L20.0356 14.4256ZM20.282 5.59202L19.8365 5.81901V5.81901L20.282 5.59202ZM19.408 4.71799L19.181 5.16349V5.16349L19.408 4.71799ZM6.7 5H12.25V4H6.7V5ZM4.81901 5.16349C4.95069 5.0964 5.12454 5.05031 5.42712 5.02559C5.73554 5.00039 6.1317 5 6.7 5V4C6.1482 4 5.70428 3.99961 5.34569 4.02891C4.98126 4.05868 4.66117 4.12159 4.36502 4.27248L4.81901 5.16349ZM4.16349 5.81901C4.3073 5.53677 4.53677 5.3073 4.81901 5.16349L4.36502 4.27248C3.89462 4.51217 3.51217 4.89462 3.27248 5.36502L4.16349 5.81901ZM4 7.7C4 7.1317 4.00039 6.73554 4.02559 6.42712C4.05031 6.12454 4.0964 5.95069 4.16349 5.81901L3.27248 5.36502C3.12159 5.66117 3.05868 5.98126 3.02891 6.34569C2.99961 6.70428 3 7.1482 3 7.7H4ZM4 9.26923V7.7H3V9.26923H4ZM3.73077 9C3.87946 9 4 9.12054 4 9.26923H3C3 9.67282 3.32718 10 3.73077 10V9ZM4 9H3.73077V10H4V9ZM7 12C7 10.3431 5.65685 9 4 9V10C5.10457 10 6 10.8954 6 12H7ZM4 15C5.65685 15 7 13.6569 7 12H6C6 13.1046 5.10457 14 4 14V15ZM3.73077 15H4V14H3.73077V15ZM4 14.7308C4 14.8795 3.87946 15 3.73077 15V14C3.32718 14 3 14.3272 3 14.7308H4ZM4 16.3V14.7308H3V16.3H4ZM4.16349 18.181C4.0964 18.0493 4.05031 17.8755 4.02559 17.5729C4.00039 17.2645 4 16.8683 4 16.3H3C3 16.8518 2.99961 17.2957 3.02891 17.6543C3.05868 18.0187 3.12159 18.3388 3.27248 18.635L4.16349 18.181ZM4.81901 18.8365C4.53677 18.6927 4.3073 18.4632 4.16349 18.181L3.27248 18.635C3.51217 19.1054 3.89462 19.4878 4.36502 19.7275L4.81901 18.8365ZM6.7 19C6.1317 19 5.73554 18.9996 5.42712 18.9744C5.12454 18.9497 4.95069 18.9036 4.81901 18.8365L4.36502 19.7275C4.66117 19.8784 4.98126 19.9413 5.34569 19.9711C5.70428 20.0004 6.1482 20 6.7 20V19ZM12.25 19H6.7V20H12.25V19ZM13 19.25V19H12V19.25H13ZM13 19C13 18.7239 13.2239 18.5 13.5 18.5V17.5C12.6716 17.5 12 18.1716 12 19H13ZM13.5 18.5C13.7761 18.5 14 18.7239 14 19H15C15 18.1716 14.3284 17.5 13.5 17.5V18.5ZM14 19V19.25H15V19H14ZM17.3 19H14.75V20H17.3V19ZM19.181 18.8365C19.0493 18.9036 18.8755 18.9497 18.5729 18.9744C18.2645 18.9996 17.8683 19 17.3 19V20C17.8518 20 18.2957 20.0004 18.6543 19.9711C19.0187 19.9413 19.3388 19.8784 19.635 19.7275L19.181 18.8365ZM19.8365 18.181C19.6927 18.4632 19.4632 18.6927 19.181 18.8365L19.635 19.7275C20.1054 19.4878 20.4878 19.1054 20.7275 18.635L19.8365 18.181ZM20 16.3C20 16.8683 19.9996 17.2645 19.9744 17.5729C19.9497 17.8755 19.9036 18.0493 19.8365 18.181L20.7275 18.635C20.8784 18.3388 20.9413 18.0187 20.9711 17.6543C21.0004 17.2957 21 16.8518 21 16.3H20ZM20 14.6428V16.3H21V14.6428H20ZM20.2839 14.9185C20.1285 14.9231 20 14.7983 20 14.6428H21C21 14.2346 20.6627 13.907 20.2546 13.919L20.2839 14.9185ZM20.0502 14.9254L20.2839 14.9185L20.2546 13.919L20.0209 13.9258L20.0502 14.9254ZM17 11.9633C17 13.634 18.3803 14.9744 20.0502 14.9254L20.0209 13.9258C18.9145 13.9583 18 13.0702 18 11.9633H17ZM19.9633 9C18.3267 9 17 10.3267 17 11.9633H18C18 10.879 18.879 10 19.9633 10V9ZM20.2692 9H19.9633V10H20.2692V9ZM20 9.26923C20 9.12054 20.1205 9 20.2692 9V10C20.6728 10 21 9.67283 21 9.26923H20ZM20 7.7V9.26923H21V7.7H20ZM19.8365 5.81901C19.9036 5.95069 19.9497 6.12454 19.9744 6.42712C19.9996 6.73554 20 7.1317 20 7.7H21C21 7.1482 21.0004 6.70428 20.9711 6.34569C20.9413 5.98126 20.8784 5.66117 20.7275 5.36502L19.8365 5.81901ZM19.181 5.16349C19.4632 5.3073 19.6927 5.53677 19.8365 5.81901L20.7275 5.36502C20.4878 4.89462 20.1054 4.51217 19.635 4.27248L19.181 5.16349ZM17.3 5C17.8683 5 18.2645 5.00039 18.5729 5.02559C18.8755 5.05031 19.0493 5.0964 19.181 5.16349L19.635 4.27248C19.3388 4.12159 19.0187 4.05868 18.6543 4.02891C18.2957 3.99961 17.8518 4 17.3 4V5ZM14.75 5H17.3V4H14.75V5ZM14 4.75V5H15V4.75H14ZM14 5C14 5.27614 13.7761 5.5 13.5 5.5V6.5C14.3284 6.5 15 5.82843 15 5H14ZM13.5 5.5C13.2239 5.5 13 5.27614 13 5H12C12 5.82843 12.6716 6.5 13.5 6.5V5.5ZM13 5V4.75H12V5H13ZM13.5 8.5C13.7761 8.5 14 8.72386 14 9H15C15 8.17157 14.3284 7.5 13.5 7.5V8.5ZM13 9C13 8.72386 13.2239 8.5 13.5 8.5V7.5C12.6716 7.5 12 8.17157 12 9H13ZM13 10V9H12V10H13ZM13.5 10.5C13.2239 10.5 13 10.2761 13 10H12C12 10.8284 12.6716 11.5 13.5 11.5V10.5ZM14 10C14 10.2761 13.7761 10.5 13.5 10.5V11.5C14.3284 11.5 15 10.8284 15 10H14ZM14 9V10H15V9H14ZM13.5 13.5C13.7761 13.5 14 13.7239 14 14H15C15 13.1716 14.3284 12.5 13.5 12.5V13.5ZM13 14C13 13.7239 13.2239 13.5 13.5 13.5V12.5C12.6716 12.5 12 13.1716 12 14H13ZM13 15V14H12V15H13ZM13.5 15.5C13.2239 15.5 13 15.2761 13 15H12C12 15.8284 12.6716 16.5 13.5 16.5V15.5ZM14 15C14 15.2761 13.7761 15.5 13.5 15.5V16.5C14.3284 16.5 15 15.8284 15 15H14ZM14 14V15H15V14H14ZM14 19.25C14 19.6642 14.3358 20 14.75 20V19C14.8881 19 15 19.1119 15 19.25H14ZM14.75 4C14.3358 4 14 4.33579 14 4.75H15C15 4.88807 14.8881 5 14.75 5V4ZM12.25 20C12.6642 20 13 19.6642 13 19.25H12C12 19.1119 12.1119 19 12.25 19V20ZM12.25 5C12.1119 5 12 4.88807 12 4.75H13C13 4.33579 12.6642 4 12.25 4V5Z'
      fill={color}
    />
  </svg>
)

export const TrashOne: React.FC<IconComponentProps> = ({
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
      d='M21.0001 6H3.00006V9C4.10463 9 5.00006 9.89543 5.00006 11V15C5.00006 17.8284 5.00006 19.2426 5.87874 20.1213C6.75742 21 8.17163 21 11.0001 21H13.0001C15.8285 21 17.2427 21 18.1214 20.1213C19.0001 19.2426 19.0001 17.8284 19.0001 15V11C19.0001 9.89543 19.8955 9 21.0001 9V6ZM10.5001 11C10.5001 10.4477 10.0523 10 9.50006 10C8.94778 10 8.50006 10.4477 8.50006 11V16C8.50006 16.5523 8.94778 17 9.50006 17C10.0523 17 10.5001 16.5523 10.5001 16V11ZM15.5001 11C15.5001 10.4477 15.0523 10 14.5001 10C13.9478 10 13.5001 10.4477 13.5001 11V16C13.5001 16.5523 13.9478 17 14.5001 17C15.0523 17 15.5001 16.5523 15.5001 16V11Z'
      fill={color}
    />
    <path
      d='M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const Trash: React.FC<IconComponentProps> = ({
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
    <path d='M10 15L10 12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M14 15L14 12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const TrashDuotone: React.FC<IconComponentProps> = ({
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
      d='M4 7.5C4 7.2643 4 7.14645 4.07322 7.07322C4.14645 7 4.2643 7 4.5 7H19.5C19.7357 7 19.8536 7 19.9268 7.07322C20 7.14645 20 7.2643 20 7.5V7.75155C20 7.84249 20 7.88797 19.986 7.92806C19.974 7.96233 19.9547 7.99358 19.9294 8.01963C19.8998 8.0501 19.8591 8.07044 19.7778 8.11111C19.127 8.43649 18.8017 8.59917 18.565 8.84298C18.3626 9.0514 18.2082 9.30138 18.1122 9.57554C18 9.89627 18 10.2601 18 10.9876V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10.9876C6 10.2601 6 9.89627 5.88778 9.57554C5.79185 9.30138 5.63735 9.0514 5.43503 8.84298C5.19835 8.59917 4.87297 8.43649 4.22222 8.11111C4.14088 8.07044 4.10021 8.0501 4.07062 8.01963C4.04533 7.99358 4.02602 7.96233 4.01403 7.92806C4 7.88797 4 7.84249 4 7.75155V7.5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M10.0681 4.37059C10.1821 4.26427 10.4332 4.17033 10.7825 4.10332C11.1318 4.03632 11.5597 4 12 4C12.4403 4 12.8682 4.03632 13.2175 4.10332C13.5668 4.17033 13.8179 4.26427 13.9319 4.37059'
      stroke={color}
      strokeLinecap='round'
    />
    <rect x='14' y='11' width='1' height='6' rx='0.5' fill={color} />
    <rect x='9' y='11' width='1' height='6' rx='0.5' fill={color} />
  </svg>
)

export const TrashDuotoneLine: React.FC<IconComponentProps> = ({
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
    <path d='M10 15L10 12' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M14 15L14 12' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M3 7H21C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      d='M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const TrashLight: React.FC<IconComponentProps> = ({
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
    <path d='M9.5 14.5L9.5 11.5' stroke={color} strokeLinecap='round' />
    <path d='M14.5 14.5L14.5 11.5' stroke={color} strokeLinecap='round' />
    <path
      d='M3 6.5H21V6.5C19.5955 6.5 18.8933 6.5 18.3889 6.83706C18.1705 6.98298 17.983 7.17048 17.8371 7.38886C17.5 7.89331 17.5 8.59554 17.5 10V15.5C17.5 17.3856 17.5 18.3284 16.9142 18.9142C16.3284 19.5 15.3856 19.5 13.5 19.5H10.5C8.61438 19.5 7.67157 19.5 7.08579 18.9142C6.5 18.3284 6.5 17.3856 6.5 15.5V10C6.5 8.59554 6.5 7.89331 6.16294 7.38886C6.01702 7.17048 5.82952 6.98298 5.61114 6.83706C5.10669 6.5 4.40446 6.5 3 6.5V6.5Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M9.5 3.50024C9.5 3.50024 10 2.5 12 2.5C14 2.5 14.5 3.5 14.5 3.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const Wallet: React.FC<IconComponentProps> = ({
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
      d='M3.00001 6.5V6.5C3.00001 5.11929 4.1193 4 5.50001 4L19.2857 4C19.4852 4 19.585 4 19.6651 4.02806C19.8088 4.07831 19.9217 4.19124 19.9719 4.33486C20 4.41505 20 4.51479 20 4.71429V4.71429C20 5.91124 20 6.50972 19.8317 6.99084C19.5301 7.85258 18.8526 8.53011 17.9908 8.83165C17.5097 9 16.9112 9 15.7143 9L15 9M3.00001 6.5V6.5C3.00001 7.88071 4.11929 9 5.50001 9L19 9C19.9428 9 20.4142 9 20.7071 9.29289C21 9.58579 21 10.0572 21 11L21 13M3.00001 6.5L3.00001 17C3.00001 18.8856 3.00001 19.8284 3.58579 20.4142C4.17158 21 5.11439 21 7.00001 21L19 21C19.9428 21 20.4142 21 20.7071 20.7071C21 20.4142 21 19.9428 21 19L21 17M21 17H17C16.0572 17 15.5858 17 15.2929 16.7071C15 16.4142 15 15.9428 15 15V15C15 14.0572 15 13.5858 15.2929 13.2929C15.5858 13 16.0572 13 17 13H21M21 17L21 13'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const WalletAlt: React.FC<IconComponentProps> = ({
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
      d='M14.25 4H9.75C6.56802 4 4.97703 4 3.98851 5.00421C3 6.00841 3 7.62465 3 10.8571V13.1429C3 16.3753 3 17.9916 3.98851 18.9958C4.97703 20 6.56802 20 9.75 20H14.25C17.432 20 19.023 20 20.0115 18.9958C21 17.9916 21 16.3753 21 13.1429V10.8571C21 7.62465 21 6.00841 20.0115 5.00421C19.023 4 17.432 4 14.25 4Z'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M7 8H10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M19 16H17C16.0572 16 15.5858 16 15.2929 15.7071C15 15.4142 15 14.9428 15 14C15 13.0572 15 12.5858 15.2929 12.2929C15.5858 12 16.0572 12 17 12H19C19.9428 12 20.4142 12 20.7071 12.2929C21 12.5858 21 13.0572 21 14C21 14.9428 21 15.4142 20.7071 15.7071C20.4142 16 19.9428 16 19 16Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const WalletAltDuotone: React.FC<IconComponentProps> = ({
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
      d='M3 10C3 7.17157 3 5.75736 3.87868 4.87868C4.75736 4 6.17157 4 9 4H15C17.8284 4 19.2426 4 20.1213 4.87868C21 5.75736 21 7.17157 21 10V11.7C21 11.8414 21 11.9121 20.9561 11.9561C20.9121 12 20.8414 12 20.7 12H16.5C16.0353 12 15.803 12 15.6098 12.0384C14.8164 12.1962 14.1962 12.8164 14.0384 13.6098C14 13.803 14 14.0353 14 14.5C14 14.9647 14 15.197 14.0384 15.3902C14.1962 16.1836 14.8164 16.8038 15.6098 16.9616C15.803 17 16.0353 17 16.5 17H20.8571C20.936 17 21 17.064 21 17.1429C21 18.7208 19.7208 20 18.1429 20H9C6.17157 20 4.75736 20 3.87868 19.1213C3 18.2426 3 16.8284 3 14V10Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M14 14C14 12.8954 14.8954 12 16 12H20.85C20.9328 12 21 12.0672 21 12.15V16.85C21 16.9328 20.9328 17 20.85 17H16C14.8954 17 14 16.1046 14 15V14Z'
      fill={color}
    />
    <rect x='6' y='7' width='6' height='1' rx='0.5' fill={color} />
  </svg>
)

export const WalletAltDuotoneLine: React.FC<IconComponentProps> = ({
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
    <rect x='15' y='12' width='6' height='4' fill={color} fillOpacity='0.25' />
    <path
      d='M14.25 4H9.75C6.56802 4 4.97703 4 3.98851 5.00421C3 6.00841 3 7.62465 3 10.8571V13.1429C3 16.3753 3 17.9916 3.98851 18.9958C4.97703 20 6.56802 20 9.75 20H14.25C17.432 20 19.023 20 20.0115 18.9958C21 17.9916 21 16.3753 21 13.1429V10.8571C21 7.62465 21 6.00841 20.0115 5.00421C19.023 4 17.432 4 14.25 4Z'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M7 8H10' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M19 16H17C16.0572 16 15.5858 16 15.2929 15.7071C15 15.4142 15 14.9428 15 14C15 13.0572 15 12.5858 15.2929 12.2929C15.5858 12 16.0572 12 17 12H19C19.9428 12 20.4142 12 20.7071 12.2929C21 12.5858 21 13.0572 21 14C21 14.9428 21 15.4142 20.7071 15.7071C20.4142 16 19.9428 16 19 16Z'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const WalletAltFill: React.FC<IconComponentProps> = ({
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
      d='M2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H18C18.93 21 19.395 21 19.7765 20.8978C20.8117 20.6204 21.6204 19.8117 21.8978 18.7765C22 18.395 22 17.93 22 17H16C14.3431 17 13 15.6569 13 14C13 12.3431 14.3431 11 16 11H22V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.87868ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H7Z'
      fill={color}
    />
    <path d='M17 14H16' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const WalletAltLight: React.FC<IconComponentProps> = ({
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
      d='M14.25 4H9.75C6.56802 4 4.97703 4 3.98851 5.00421C3 6.00841 3 7.62465 3 10.8571V13.1429C3 16.3753 3 17.9916 3.98851 18.9958C4.97703 20 6.56802 20 9.75 20H14.25C17.432 20 19.023 20 20.0115 18.9958C21 17.9916 21 16.3753 21 13.1429V10.8571C21 7.62465 21 6.00841 20.0115 5.00421C19.023 4 17.432 4 14.25 4Z'
      stroke={color}
    />
    <path d='M7 8H10' stroke={color} strokeLinecap='round' />
    <path
      d='M19 16H17C16.0572 16 15.5858 16 15.2929 15.7071C15 15.4142 15 14.9428 15 14C15 13.0572 15 12.5858 15.2929 12.2929C15.5858 12 16.0572 12 17 12H19C19.9428 12 20.4142 12 20.7071 12.2929C21 12.5858 21 13.0572 21 14C21 14.9428 21 15.4142 20.7071 15.7071C20.4142 16 19.9428 16 19 16Z'
      stroke={color}
    />
  </svg>
)

export const WalletDuotone: React.FC<IconComponentProps> = ({
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
      d='M3 6C3 4.89543 3.89543 4 5 4H19.5C19.7761 4 20 4.22386 20 4.5V6C20 7.10457 19.1046 8 18 8H5C3.89543 8 3 7.10457 3 6Z'
      fill={color}
    />
    <path
      d='M3 16V6C3 7.10457 3.89543 8 5 8H19C20.1046 8 21 8.89543 21 10V12.85C21 12.9328 20.9328 13 20.85 13H18C16.8954 13 16 13.8954 16 15C16 16.1046 16.8954 17 18 17H20.85C20.9328 17 21 17.0672 21 17.15V18C21 19.1046 20.1046 20 19 20H7C4.79086 20 3 18.2091 3 16Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M15 15C15 13.8954 15.8954 13 17 13H20.85C20.9328 13 21 13.0672 21 13.15V16.85C21 16.9328 20.9328 17 20.85 17H17C15.8954 17 15 16.1046 15 15Z'
      fill={color}
    />
    <rect x='5' y='10' width='6' height='1' rx='0.5' fill={color} />
  </svg>
)

export const WalletDuotoneLine: React.FC<IconComponentProps> = ({
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
    <rect x='15' y='13' width='6' height='4' fill={color} fillOpacity='0.25' />
    <path
      d='M20 7V4H5.5C4.11929 4 3 5.11929 3 6.5C3 7.88071 4.11929 9 5.5 9H18L20 7Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M3.00001 6.5V6.5C3.00001 5.11929 4.1193 4 5.50001 4L19.2857 4C19.4852 4 19.585 4 19.6651 4.02806C19.8088 4.07831 19.9217 4.19124 19.9719 4.33486C20 4.41505 20 4.51479 20 4.71429V4.71429C20 5.91124 20 6.50972 19.8317 6.99084C19.5301 7.85258 18.8526 8.53011 17.9908 8.83165C17.5097 9 16.9112 9 15.7143 9L15 9M3.00001 6.5V6.5C3.00001 7.88071 4.11929 9 5.50001 9L19 9C19.9428 9 20.4142 9 20.7071 9.29289C21 9.58579 21 10.0572 21 11L21 13M3.00001 6.5L3.00001 17C3.00001 18.8856 3.00001 19.8284 3.58579 20.4142C4.17158 21 5.11439 21 7.00001 21L19 21C19.9428 21 20.4142 21 20.7071 20.7071C21 20.4142 21 19.9428 21 19L21 17M21 17H17C16.0572 17 15.5858 17 15.2929 16.7071C15 16.4142 15 15.9428 15 15V15C15 14.0572 15 13.5858 15.2929 13.2929C15.5858 13 16.0572 13 17 13H21M21 17L21 13'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const WalletFill: React.FC<IconComponentProps> = ({
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
      d='M20 5C20.5523 5 21 4.55228 21 4C21 3.44772 20.5523 3 20 3V5ZM5.50001 5L20 5V3L5.50001 3L5.50001 5ZM5.50001 10H13.5V8L5.50001 8V10ZM4.00001 6.5C4.00001 5.67157 4.67158 5 5.50001 5L5.50001 3C3.56701 3 2.00001 4.567 2.00001 6.5L4.00001 6.5ZM2.00001 6.5C2.00001 8.433 3.56701 10 5.50001 10V8C4.67158 8 4.00001 7.32843 4.00001 6.5L2.00001 6.5Z'
      fill={color}
    />
    <path d='M3 12L3 6.5' stroke={color} strokeWidth='2' />
    <path
      d='M3 8.5H2.5V9L2.5 19V19.0329C2.49998 19.4762 2.49995 19.8581 2.54107 20.1639C2.58514 20.4917 2.68451 20.8058 2.93934 21.0607L2.93934 21.0607C3.19417 21.3155 3.50835 21.4149 3.83611 21.4589C4.14193 21.5 4.52384 21.5 4.96708 21.5L5 21.5L19 21.5C19.011 21.5 19.022 21.5 19.0329 21.5C19.4762 21.5 19.8581 21.5 20.1639 21.4589C20.4917 21.4149 20.8058 21.3155 21.0607 21.0607C21.3155 20.8058 21.4149 20.4917 21.4589 20.1639C21.5 19.8581 21.5 19.4762 21.5 19.0329C21.5 19.022 21.5 19.011 21.5 19V18V17.5H21H18C16.6193 17.5 15.5 16.3807 15.5 15C15.5 13.6193 16.6193 12.5 18 12.5H21H21.5V12V11L21.5 10.9671C21.5 10.5238 21.5 10.1419 21.4589 9.8361C21.4149 9.50835 21.3155 9.19417 21.0607 8.93934C20.8058 8.68451 20.4917 8.58514 20.1639 8.54107C19.8581 8.49995 19.4762 8.49997 19.0329 8.5L19 8.5L3 8.5Z'
      fill={color}
      stroke={color}
    />
  </svg>
)

export const WalletLight: React.FC<IconComponentProps> = ({
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
      d='M4.5 6.5V6.5C4.5 5.39543 5.39543 4.5 6.5 4.5L17.9286 4.5C17.9949 4.5 18.0281 4.5 18.056 4.50314C18.2878 4.52926 18.4707 4.71221 18.4969 4.94402C18.5 4.97192 18.5 5.00509 18.5 5.07143V5.07143C18.5 5.46946 18.5 5.66848 18.4811 5.83589C18.3244 7.22675 17.2268 8.32442 15.8359 8.48114C15.6685 8.5 15.4695 8.5 15.0714 8.5H15M4.5 6.5V6.5C4.5 7.60457 5.39543 8.5 6.5 8.5L17.5 8.5C18.4428 8.5 18.9142 8.5 19.2071 8.79289C19.5 9.08579 19.5 9.55719 19.5 10.5V12.5M4.5 6.5L4.5 15.5C4.5 17.3856 4.5 18.3284 5.08579 18.9142C5.67157 19.5 6.61438 19.5 8.5 19.5L17.5 19.5C18.4428 19.5 18.9142 19.5 19.2071 19.2071C19.5 18.9142 19.5 18.4428 19.5 17.5V16.5M19.5 16.5H17.5C16.5572 16.5 16.0858 16.5 15.7929 16.2071C15.5 15.9142 15.5 15.4428 15.5 14.5V14.5C15.5 13.5572 15.5 13.0858 15.7929 12.7929C16.0858 12.5 16.5572 12.5 17.5 12.5H19.5M19.5 16.5V12.5'
      stroke={color}
    />
  </svg>
)

export const DelAlt: React.FC<IconComponentProps> = ({
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
    <ellipse cx='12' cy='7' rx='7' ry='3' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M5 7L6.99621 17.9792C6.99868 17.9927 7.00522 18.0052 7.01497 18.015V18.015C9.76813 20.7681 14.2319 20.7681 16.985 18.015V18.015C16.9948 18.0052 17.0013 17.9927 17.0038 17.9792L19 7'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DelAltDuotone: React.FC<IconComponentProps> = ({
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
    <ellipse cx='12' cy='7' rx='7' ry='3' fill={color} fillOpacity='0.25' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 9.99952C15.3357 9.99952 18.1265 8.99957 18.8293 7.66094C18.8407 7.63914 18.8909 7.65418 18.8868 7.67846L17.1124 18.3249C17.04 18.7593 16.8098 19.1517 16.466 19.4267C13.855 21.5155 10.145 21.5155 7.53401 19.4267C7.19015 19.1517 6.95995 18.7593 6.88756 18.3249L5.11315 7.67846C5.1091 7.65417 5.15923 7.63913 5.17068 7.66094C5.8735 8.99957 8.66427 9.99952 12 9.99952Z'
      fill={color}
    />
  </svg>
)

export const DelAltDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M17.0038 17.9792L18.7155 8.56456C18.8322 7.9227 18.8906 7.60178 18.7282 7.51633C18.5659 7.43088 18.3344 7.66067 17.8714 8.12025L16.985 9L12 10L6.99621 9L6.13263 8.13478C5.66847 7.66974 5.43639 7.43722 5.27345 7.5225C5.1105 7.60778 5.16927 7.931 5.28681 8.57744L6.99621 17.9792C6.99868 17.9927 7.00522 18.0052 7.01497 18.015C9.76813 20.7681 14.2319 20.7681 16.985 18.015C16.9948 18.0052 17.0013 17.9927 17.0038 17.9792Z'
      fill={color}
      fillOpacity='0.25'
    />
    <ellipse cx='12' cy='7' rx='7' ry='3' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M5 7L6.99621 17.9792C6.99868 17.9927 7.00522 18.0052 7.01497 18.015V18.015C9.76813 20.7681 14.2319 20.7681 16.985 18.015V18.015C16.9948 18.0052 17.0013 17.9927 17.0038 17.9792L19 7'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const DelAltFill: React.FC<IconComponentProps> = ({
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
    <ellipse cx='12' cy='7' rx='7' ry='3' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M7 18L5 7L8 10H16L19 7L17 18L14 20H10L7 18Z' fill={color} />
    <path
      d='M5 7L6.99621 17.9792C6.99868 17.9927 7.00522 18.0052 7.01497 18.015V18.015C9.76813 20.7681 14.2319 20.7681 16.985 18.015V18.015C16.9948 18.0052 17.0013 17.9927 17.0038 17.9792L19 7'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DelAltLight: React.FC<IconComponentProps> = ({
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
      d='M18.5 7C18.5 8.5 15.5 9.5 12 9.5C8.5 9.5 5.5 8.5 5.5 7C5.5 5.5 8.5 4.5 12 4.5C15.5 4.5 18.5 5.5 18.5 7Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M5.5 7L7.3131 17.4253C7.42821 18.0872 7.89747 18.6325 8.53486 18.845V18.845C10.7841 19.5947 13.2159 19.5947 15.4651 18.845V18.845C16.1025 18.6325 16.5718 18.0872 16.6869 17.4253L18.5 7'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const GiftAlt: React.FC<IconComponentProps> = ({
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
      x='2'
      y='10'
      width='18'
      height='3'
      rx='1.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M5 13V19.4C5 19.9601 5 20.2401 5.10899 20.454C5.20487 20.6422 5.35785 20.7951 5.54601 20.891C5.75992 21 6.03995 21 6.6 21H15.4C15.9601 21 16.2401 21 16.454 20.891C16.6422 20.7951 16.7951 20.6422 16.891 20.454C17 20.2401 17 19.9601 17 19.4V13'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M12 6.5V10H8.5C6.567 10 5 8.433 5 6.5C5 4.567 6.567 3 8.5 3C10.433 3 12 4.567 12 6.5Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M12 7.5V10H14.5C15.8807 10 17 8.88071 17 7.5C17 6.11929 15.8807 5 14.5 5C13.1193 5 12 6.11929 12 7.5Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M12 13V21' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const GiftAltLight: React.FC<IconComponentProps> = ({
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
      d='M2.5 11C2.5 10.1716 3.17157 9.5 4 9.5H20C20.8284 9.5 21.5 10.1716 21.5 11V11C21.5 11.8284 20.8284 12.5 20 12.5H4C3.17157 12.5 2.5 11.8284 2.5 11V11Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M4.5 12.5V19.7C4.5 19.98 4.5 20.12 4.5545 20.227C4.60243 20.3211 4.67892 20.3976 4.773 20.4455C4.87996 20.5 5.01997 20.5 5.3 20.5H18.7C18.98 20.5 19.12 20.5 19.227 20.4455C19.3211 20.3976 19.3976 20.3211 19.4455 20.227C19.5 20.12 19.5 19.98 19.5 19.7V12.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M13.5 7V9.5H9.5C7.84315 9.5 6.5 8.15685 6.5 6.5C6.5 4.84315 7.84315 3.5 9.5 3.5H10C11.933 3.5 13.5 5.067 13.5 7Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M13.5 7V9.5H16C17.3807 9.5 18.5 8.38071 18.5 7C18.5 5.61929 17.3807 4.5 16 4.5C14.6193 4.5 13.5 5.61929 13.5 7Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M13.5 12.5V20.5' stroke={color} strokeLinecap='round' />
  </svg>
)
