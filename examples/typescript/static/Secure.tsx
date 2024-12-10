import React from 'react'

import { type IconComponentProps } from '../types'

export const Chield: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M18.712 4.78862L12.7878 2.24968C12.2847 2.03406 11.7153 2.03406 11.2122 2.24968L5.28797 4.78862C4.47806 5.13572 3.99073 5.972 4.08804 6.84777L4.73939 12.7099C4.93906 14.5069 5.8263 16.157 7.21529 17.3144L10.7196 20.2347C11.4613 20.8528 12.5387 20.8528 13.2804 20.2347L16.7847 17.3144C18.1737 16.157 19.0609 14.5069 19.2606 12.7099L19.912 6.84777C20.0093 5.972 19.5219 5.13572 18.712 4.78862Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const ChieldAlt: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M16.8 16.4L15 17.75C13.2222 19.0833 10.7778 19.0833 9 17.75L7.2 16.4C5.18555 14.8892 4 12.5181 4 10V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V10C20 12.5181 18.8144 14.8892 16.8 16.4Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <circle cx='12' cy='10' r='1' fill={color} />
    <circle cx='9' cy='10' r='1' fill={color} />
    <circle cx='15' cy='10' r='1' fill={color} />
  </svg>
)

export const ChieldAltDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M15.5453 4.5194L18.3939 5.74025C18.7616 5.89783 19 6.25937 19 6.6594V12.9123C19 14.85 18.0642 16.6684 16.4874 17.7947L12.5812 20.5848C12.2335 20.8332 11.7665 20.8332 11.4188 20.5848L7.51257 17.7947C5.93579 16.6684 5 14.85 5 12.9123V6.6594C5 6.25937 5.2384 5.89783 5.60608 5.74025L8.45473 4.5194C10.7187 3.54914 13.2813 3.54914 15.5453 4.5194Z'
      fill={color}
      fillOpacity='0.25'
    />
    <circle cx='12' cy='10.5' r='0.5' fill={color} />
    <circle cx='9.5' cy='10.5' r='0.5' fill={color} />
    <circle cx='14.5' cy='10.5' r='0.5' fill={color} />
  </svg>
)

export const ChieldAltDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M16.8 16.4L15 17.75C13.2222 19.0833 10.7778 19.0833 9 17.75L7.2 16.4C5.18555 14.8892 4 12.5181 4 10V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V10C20 12.5181 18.8144 14.8892 16.8 16.4Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <circle cx='12' cy='10' r='1' fill={color} />
    <circle cx='9' cy='10' r='1' fill={color} />
    <circle cx='15' cy='10' r='1' fill={color} />
  </svg>
)

export const ChieldAltFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M15 17.75L16.8 16.4C18.8144 14.8892 20 12.5181 20 10V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V10C4 12.5181 5.18555 14.8892 7.2 16.4L9 17.75C10.7778 19.0833 13.2222 19.0833 15 17.75ZM10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10ZM13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10ZM15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z'
      fill={color}
    />
  </svg>
)

export const ChieldAltLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M16.8 16.4L15 17.75C13.2222 19.0833 10.7778 19.0833 9 17.75L7.2 16.4C5.18555 14.8892 4 12.5181 4 10V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V10C20 12.5181 18.8144 14.8892 16.8 16.4Z'
      stroke={color}
      strokeLinecap='round'
    />
    <circle cx='12' cy='10' r='1' fill={color} />
    <circle cx='9' cy='10' r='1' fill={color} />
    <circle cx='15' cy='10' r='1' fill={color} />
  </svg>
)

export const ChieldCheck: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M18.7022 5.78441L12.7878 3.24968C12.2847 3.03406 11.7153 3.03406 11.2122 3.24968L5.29778 5.78441C4.47855 6.13551 3.99051 6.98635 4.10106 7.87077L4.71405 12.7747C4.9342 14.5359 5.81517 16.1477 7.1787 17.284L10.7196 20.2347C11.4613 20.8528 12.5387 20.8528 13.2804 20.2347L16.8213 17.284C18.1848 16.1477 19.0658 14.5359 19.286 12.7747L19.8989 7.87077C20.0095 6.98635 19.5215 6.13551 18.7022 5.78441Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M9 12L11.5687 14.5687C11.7918 14.7918 12.1633 14.7551 12.3383 14.4925L16 9'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const ChieldCheckDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M15.5453 4.5194L18.3939 5.74025C18.7616 5.89783 19 6.25937 19 6.6594V12.9123C19 14.85 18.0642 16.6684 16.4874 17.7947L12.5812 20.5848C12.2335 20.8332 11.7665 20.8332 11.4188 20.5848L7.51257 17.7947C5.93579 16.6684 5 14.85 5 12.9123V6.6594C5 6.25937 5.2384 5.89783 5.60608 5.74025L8.45473 4.5194C10.7187 3.54914 13.2813 3.54914 15.5453 4.5194Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M9.5 12.5L11.3939 14.3939C11.4525 14.4525 11.5475 14.4525 11.6061 14.3939L15.5 10.5'
      stroke={color}
    />
  </svg>
)

export const ChieldCheckDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M18.5447 6.15207L12.6303 3.61734C12.2278 3.44484 11.7722 3.44484 11.3697 3.61734L5.45535 6.15207C4.79996 6.43295 4.40953 7.11362 4.49798 7.82116L5.11096 12.725C5.31853 14.3856 6.14916 15.9053 7.43478 16.9767L10.9757 19.9274C11.5691 20.4219 12.4309 20.4219 13.0243 19.9274L16.5652 16.9767C17.8508 15.9053 18.6815 14.3856 18.889 12.725L19.502 7.82116C19.5905 7.11362 19.2 6.43295 18.5447 6.15207Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      d='M9 12L11.5687 14.5687C11.7918 14.7918 12.1633 14.7551 12.3383 14.4925L16 9'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const ChieldCheckFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M18.3939 5.74002L13.1818 3.50624C12.4271 3.18282 11.5729 3.18282 10.8182 3.50624L5.60608 5.74002C5.2384 5.8976 5 6.25914 5 6.65917V11.9121C5 13.8498 5.93579 15.6682 7.51257 16.7945L10.8375 19.1694C11.5329 19.6661 12.4671 19.6661 13.1625 19.1694L16.4874 16.7945C18.0642 15.6682 19 13.8498 19 11.9121V6.65917C19 6.25914 18.7616 5.8976 18.3939 5.74002ZM15.7809 9.62469C16.1259 9.19343 16.056 8.56414 15.6247 8.21913C15.1934 7.87412 14.5641 7.94404 14.2191 8.37531L10.9171 12.5029L9.70711 11.2929C9.31658 10.9024 8.68342 10.9024 8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L9.89788 14.3121C10.53 14.9443 11.5714 14.8866 12.1298 14.1885L15.7809 9.62469Z'
      fill={color}
    />
  </svg>
)

export const ChieldCheckLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M12.773 3.70613L18.7577 5.30204C19.1954 5.41878 19.5 5.81523 19.5 6.26828V12.2889C19.5 14.295 18.4974 16.1684 16.8282 17.2812L12.5547 20.1302C12.2188 20.3541 11.7812 20.3541 11.4453 20.1302L7.1718 17.2812C5.50261 16.1684 4.5 14.295 4.5 12.2889V6.26828C4.5 5.81523 4.80458 5.41878 5.24234 5.30204L11.227 3.70613C11.7335 3.57107 12.2665 3.57107 12.773 3.70613Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M9.5 11.5L11.3232 13.3232C11.4209 13.4209 11.5791 13.4209 11.6768 13.3232L15 10'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const ChieldDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M16.4874 17.7947L12.5812 20.5848C12.2335 20.8332 11.7665 20.8332 11.4188 20.5848L7.51257 17.7947C5.93579 16.6684 5 14.85 5 12.9123V9.15C5 9.06716 5.06716 9 5.15 9H18.85C18.9328 9 19 9.06716 19 9.15V12.9123C19 14.85 18.0642 16.6684 16.4874 17.7947Z'
      fill={color}
    />
    <path
      d='M15.5453 4.5194L18.3939 5.74025C18.7616 5.89783 19 6.25937 19 6.6594V7.85C19 7.93284 18.9328 8 18.85 8H5.15C5.06716 8 5 7.93284 5 7.85V6.6594C5 6.25937 5.2384 5.89783 5.60608 5.74025L8.45473 4.5194C10.7187 3.54914 13.2813 3.54914 15.5453 4.5194Z'
      fill={color}
      fillOpacity='0.25'
    />
  </svg>
)

export const ChieldDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M18.5545 5.15627L12.6303 2.61734C12.2278 2.44484 11.7722 2.44484 11.3697 2.61734L5.44554 5.15627C4.79761 5.43396 4.40775 6.10298 4.4856 6.8036L5.13695 12.6657C5.3252 14.3601 6.16174 15.9158 7.47136 17.0072L10.9757 19.9274C11.5691 20.4219 12.4309 20.4219 13.0243 19.9274L16.5286 17.0072C17.8383 15.9158 18.6748 14.3601 18.8631 12.6657L19.5144 6.8036C19.5922 6.10298 19.2024 5.43396 18.5545 5.15627Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const ChieldFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M13.1818 3.50648L18.3939 5.74026C18.7616 5.89784 19 6.25938 19 6.65941V11.9123C19 13.85 18.0642 15.6684 16.4874 16.7947L13.1625 19.1697C12.4671 19.6664 11.5329 19.6664 10.8375 19.1697L7.51257 16.7947C5.93579 15.6684 5 13.85 5 11.9123V6.65941C5 6.25938 5.2384 5.89784 5.60608 5.74026L10.8182 3.50648C11.5729 3.18306 12.4271 3.18306 13.1818 3.50648Z'
      fill={color}
    />
  </svg>
)

export const ChieldLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M18.5151 5.24819L12.5909 2.70925C12.2136 2.54754 11.7864 2.54754 11.4091 2.70925L5.48493 5.24819C4.8775 5.50852 4.512 6.13572 4.58498 6.79255L5.23633 12.6547C5.42174 14.3233 6.24561 15.8555 7.53538 16.9303L11.0397 19.8506C11.596 20.3142 12.404 20.3142 12.9603 19.8506L16.4646 16.9303C17.7544 15.8555 18.5783 14.3233 18.7637 12.6547L19.415 6.79255C19.488 6.13572 19.1225 5.50852 18.5151 5.24819Z'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const Key: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='9' cy='14' r='4' stroke={color} strokeWidth='2' />
    <path
      d='M12 11L15.5 7.5M17 6L15.5 7.5M15.5 7.5L18 10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const KeyAlt: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M3 7C3 5.59987 3 4.8998 3.27248 4.36502C3.51217 3.89462 3.89462 3.51217 4.36502 3.27248C4.8998 3 5.59987 3 7 3H17C18.4001 3 19.1002 3 19.635 3.27248C20.1054 3.51217 20.4878 3.89462 20.7275 4.36502C21 4.8998 21 5.59987 21 7V17C21 18.4001 21 19.1002 20.7275 19.635C20.4878 20.1054 20.1054 20.4878 19.635 20.7275C19.1002 21 18.4001 21 17 21H7C5.59987 21 4.8998 21 4.36502 20.7275C3.89462 20.4878 3.51217 20.1054 3.27248 19.635C3 19.1002 3 18.4001 3 17V7Z'
      stroke={color}
      strokeWidth='2'
    />
    <circle cx='8' cy='12' r='2' stroke={color} strokeWidth='2' />
    <path
      d='M10 12H14M17 14V12.15C17 12.0672 16.9328 12 16.85 12H14M14 12V14'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const KeyAltDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      fill={color}
      fillOpacity='0.25'
    />
    <circle cx='8.5' cy='11.5' r='2' stroke={color} />
    <path
      d='M10.5 11.5H15.5M17.5 13.5V11.65C17.5 11.5672 17.4328 11.5 17.35 11.5H15.5M15.5 11.5V13.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const KeyAltDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M3.5 7.5C3.5 6.09987 3.5 5.3998 3.77248 4.86502C4.01217 4.39462 4.39462 4.01217 4.86502 3.77248C5.3998 3.5 6.09987 3.5 7.5 3.5H16.5C17.9001 3.5 18.6002 3.5 19.135 3.77248C19.6054 4.01217 19.9878 4.39462 20.2275 4.86502C20.5 5.3998 20.5 6.09987 20.5 7.5V16.5C20.5 17.9001 20.5 18.6002 20.2275 19.135C19.9878 19.6054 19.6054 19.9878 19.135 20.2275C18.6002 20.5 17.9001 20.5 16.5 20.5H7.5C6.09987 20.5 5.3998 20.5 4.86502 20.2275C4.39462 19.9878 4.01217 19.6054 3.77248 19.135C3.5 18.6002 3.5 17.9001 3.5 16.5V7.5Z'
      stroke={color}
      strokeOpacity='0.25'
    />
    <circle cx='8.5' cy='11.5' r='2' stroke={color} />
    <path
      d='M10.5 11.5H15.5M17.5 13.5V11.65C17.5 11.5672 17.4328 11.5 17.35 11.5H15.5M15.5 11.5V13.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const KeyAltFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M3 7C3 5.59987 3 4.8998 3.27248 4.36502C3.51217 3.89462 3.89462 3.51217 4.36502 3.27248C4.8998 3 5.59987 3 7 3H17C18.4001 3 19.1002 3 19.635 3.27248C20.1054 3.51217 20.4878 3.89462 20.7275 4.36502C21 4.8998 21 5.59987 21 7V17C21 18.4001 21 19.1002 20.7275 19.635C20.4878 20.1054 20.1054 20.4878 19.635 20.7275C19.1002 21 18.4001 21 17 21H7H6.99997C5.59986 21 4.8998 21 4.36502 20.7275C3.89462 20.4878 3.51217 20.1054 3.27248 19.635C3 19.1002 3 18.4001 3 17V7ZM10.8293 11C10.4175 9.83481 9.30622 9 8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15C9.30622 15 10.4175 14.1652 10.8293 13H13V14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14V13H16V14C16 14.5523 16.4477 15 17 15C17.5523 15 18 14.5523 18 14V12.15C18 11.5149 17.4851 11 16.85 11H14H10.8293ZM9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12Z'
      fill={color}
    />
  </svg>
)

export const KeyAltLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M3.5 7.5C3.5 6.09987 3.5 5.3998 3.77248 4.86502C4.01217 4.39462 4.39462 4.01217 4.86502 3.77248C5.3998 3.5 6.09987 3.5 7.5 3.5H16.5C17.9001 3.5 18.6002 3.5 19.135 3.77248C19.6054 4.01217 19.9878 4.39462 20.2275 4.86502C20.5 5.3998 20.5 6.09987 20.5 7.5V16.5C20.5 17.9001 20.5 18.6002 20.2275 19.135C19.9878 19.6054 19.6054 19.9878 19.135 20.2275C18.6002 20.5 17.9001 20.5 16.5 20.5H7.5C6.09987 20.5 5.3998 20.5 4.86502 20.2275C4.39462 19.9878 4.01217 19.6054 3.77248 19.135C3.5 18.6002 3.5 17.9001 3.5 16.5V7.5Z'
      stroke={color}
    />
    <circle cx='8.5' cy='11.5' r='2' stroke={color} />
    <path
      d='M10.5 11.5H15.5M17.5 13.5V11.65C17.5 11.5672 17.4328 11.5 17.35 11.5H15.5M15.5 11.5V13.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const KeyDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M18.8964 10H8V14H13.5H14.7324C14.8996 14 15.0557 13.9164 15.1484 13.7774L15.584 13.124C15.7819 12.8272 16.2181 12.8272 16.416 13.124L16.792 13.688C16.8909 13.8364 17.1091 13.8364 17.208 13.688L17.584 13.124C17.7819 12.8272 18.2181 12.8272 18.416 13.124L18.8308 13.7463C18.9184 13.8775 19.1041 13.8959 19.2156 13.7844L20.8232 12.1768C20.9209 12.0791 20.9209 11.9209 20.8232 11.8232L19.0732 10.0732C19.0263 10.0263 18.9628 10 18.8964 10Z'
      fill={color}
      fillOpacity='0.25'
    />
    <rect x='10' y='11' width='6' height='1' rx='0.5' fill={color} />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.58579 8.58579C3 9.17157 3 10.1144 3 12C3 13.8856 3 14.8284 3.58579 15.4142C4.17157 16 5.11438 16 7 16C8.88562 16 9.82843 16 10.4142 15.4142C11 14.8284 11 13.8856 11 12C11 10.1144 11 9.17157 10.4142 8.58579C9.82843 8 8.88562 8 7 8C5.11438 8 4.17157 8 3.58579 8.58579ZM6 10C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11C7 10.4477 6.55228 10 6 10Z'
      fill={color}
    />
  </svg>
)

export const KeyDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='9' cy='14' r='4' fill={color} fillOpacity='0.25' stroke={color} strokeWidth='1.2' />
    <path
      d='M12 11L15.5 7.5M17 6L15.5 7.5M15.5 7.5L18 10'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const KeyFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='8' cy='15' r='3' fill={color} stroke={color} strokeWidth='2' />
    <path
      d='M18.2071 6.20711C18.5976 5.81658 18.5976 5.18342 18.2071 4.79289C17.8166 4.40237 17.1834 4.40237 16.7929 4.79289L18.2071 6.20711ZM18.2929 9.70711L19 10.4142L20.4142 9L19.7071 8.29289L18.2929 9.70711ZM16.2929 9.70711L17 10.4142L18.4142 9L17.7071 8.29289L16.2929 9.70711ZM9.29289 12.2929C8.90237 12.6834 8.90237 13.3166 9.29289 13.7071C9.68342 14.0976 10.3166 14.0976 10.7071 13.7071L9.29289 12.2929ZM15.7929 11.2071L16.5 11.9142L17.9142 10.5L17.2071 9.79289L15.7929 11.2071ZM17.2071 7.20711L18.2071 6.20711L16.7929 4.79289L15.7929 5.79289L17.2071 7.20711ZM15.7929 7.20711L18.2929 9.70711L19.7071 8.29289L17.2071 5.79289L15.7929 7.20711ZM16.2071 8.20711L17.2071 7.20711L15.7929 5.79289L14.7929 6.79289L16.2071 8.20711ZM14.7929 8.20711L16.2929 9.70711L17.7071 8.29289L16.2071 6.79289L14.7929 8.20711ZM10.7071 13.7071L15.2071 9.20711L13.7929 7.79289L9.29289 12.2929L10.7071 13.7071ZM15.2071 9.20711L16.2071 8.20711L14.7929 6.79289L13.7929 7.79289L15.2071 9.20711ZM13.7929 9.20711L15.7929 11.2071L17.2071 9.79289L15.2071 7.79289L13.7929 9.20711Z'
      fill={color}
    />
  </svg>
)

export const KeyLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='9' cy='14' r='4' stroke={color} />
    <path d='M12 11L15.5 7.5M17 6L15.5 7.5M15.5 7.5L18 10' stroke={color} strokeLinecap='round' />
  </svg>
)

export const Lock: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M4 13C4 11.1144 4 10.1716 4.58579 9.58579C5.17157 9 6.11438 9 8 9H16C17.8856 9 18.8284 9 19.4142 9.58579C20 10.1716 20 11.1144 20 13V15C20 17.8284 20 19.2426 19.1213 20.1213C18.2426 21 16.8284 21 14 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V13Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M16 8V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7V8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <circle cx='12' cy='15' r='2' fill={color} />
  </svg>
)

export const LockAlt: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M4 13C4 11.1144 4 10.1716 4.58579 9.58579C5.17157 9 6.11438 9 8 9H16C17.8856 9 18.8284 9 19.4142 9.58579C20 10.1716 20 11.1144 20 13V15C20 17.8284 20 19.2426 19.1213 20.1213C18.2426 21 16.8284 21 14 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V13Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M16 8V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7V8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const LockAltDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M4.5 13.5C4.5 11.6144 4.5 10.6716 5.08579 10.0858C5.67157 9.5 6.61438 9.5 8.5 9.5H15.5C17.3856 9.5 18.3284 9.5 18.9142 10.0858C19.5 10.6716 19.5 11.6144 19.5 13.5V14.5C19.5 17.3284 19.5 18.7426 18.6213 19.6213C17.7426 20.5 16.3284 20.5 13.5 20.5H10.5C7.67157 20.5 6.25736 20.5 5.37868 19.6213C4.5 18.7426 4.5 17.3284 4.5 14.5V13.5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M16.5 9.5V8C16.5 5.51472 14.4853 3.5 12 3.5V3.5C9.51472 3.5 7.5 5.51472 7.5 8V9.5'
      stroke={color}
    />
  </svg>
)

export const LockAltDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M4.5 13.5C4.5 11.6144 4.5 10.6716 5.08579 10.0858C5.67157 9.5 6.61438 9.5 8.5 9.5H15.5C17.3856 9.5 18.3284 9.5 18.9142 10.0858C19.5 10.6716 19.5 11.6144 19.5 13.5V14.5C19.5 17.3284 19.5 18.7426 18.6213 19.6213C17.7426 20.5 16.3284 20.5 13.5 20.5H10.5C7.67157 20.5 6.25736 20.5 5.37868 19.6213C4.5 18.7426 4.5 17.3284 4.5 14.5V13.5Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
    />
    <path
      d='M16.5 9.5V8C16.5 5.51472 14.4853 3.5 12 3.5V3.5C9.51472 3.5 7.5 5.51472 7.5 8V9.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const LockAltFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M16 8V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7V8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M3 13C3 10.1716 3 8.75736 3.87868 7.87868C4.75736 7 6.17157 7 9 7H15C17.8284 7 19.2426 7 20.1213 7.87868C21 8.75736 21 10.1716 21 13V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V13Z'
      fill={color}
    />
  </svg>
)

export const LockAltLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M4.5 13.5C4.5 11.6144 4.5 10.6716 5.08579 10.0858C5.67157 9.5 6.61438 9.5 8.5 9.5H15.5C17.3856 9.5 18.3284 9.5 18.9142 10.0858C19.5 10.6716 19.5 11.6144 19.5 13.5V14.5C19.5 17.3284 19.5 18.7426 18.6213 19.6213C17.7426 20.5 16.3284 20.5 13.5 20.5H10.5C7.67157 20.5 6.25736 20.5 5.37868 19.6213C4.5 18.7426 4.5 17.3284 4.5 14.5V13.5Z'
      stroke={color}
    />
    <path
      d='M16.5 9.5V8C16.5 5.51472 14.4853 3.5 12 3.5V3.5C9.51472 3.5 7.5 5.51472 7.5 8V9.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const LockDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M4 12C4 11.0572 4 10.5858 4.29289 10.2929C4.58579 10 5.05719 10 6 10H18C18.9428 10 19.4142 10 19.7071 10.2929C20 10.5858 20 11.0572 20 12V18.0375C20 18.4185 20 18.6091 19.9711 18.7772C19.8575 19.4381 19.4203 19.9981 18.8067 20.2685C18.6506 20.3374 18.4658 20.3836 18.0961 20.476C16.8589 20.7853 16.2403 20.9399 15.6215 21.0539C13.2273 21.4947 10.7727 21.4947 8.37847 21.0539C7.75968 20.9399 7.14108 20.7853 5.90388 20.476C5.53423 20.3836 5.34941 20.3374 5.19329 20.2685C4.5797 19.9981 4.14248 19.4381 4.0289 18.7772C4 18.6091 4 18.4185 4 18.0375V12Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M16.5 10V9C16.5 6.51472 14.4853 4.5 12 4.5V4.5C9.51472 4.5 7.5 6.51472 7.5 9V10'
      stroke={color}
    />
    <circle cx='12' cy='15' r='2' fill={color} />
    <path d='M12 16V18.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const LockDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M4 13C4 11.1144 4 10.1716 4.58579 9.58579C5.17157 9 6.11438 9 8 9H16C17.8856 9 18.8284 9 19.4142 9.58579C20 10.1716 20 11.1144 20 13V15C20 17.8284 20 19.2426 19.1213 20.1213C18.2426 21 16.8284 21 14 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V13Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M16 8V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7V8'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <circle cx='12' cy='15' r='2' fill={color} />
  </svg>
)

export const LockFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M16 8V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7V8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.87868 7.87868C3 8.75736 3 10.1716 3 13V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V13C21 10.1716 21 8.75736 20.1213 7.87868C19.2426 7 17.8284 7 15 7H9C6.17157 7 4.75736 7 3.87868 7.87868ZM12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15ZM15 14C15 15.3062 14.1652 16.4175 13 16.8293V19H11V16.8293C9.83481 16.4175 9 15.3062 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14Z'
      fill={color}
    />
  </svg>
)

export const LockLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='15' r='2' fill={color} />
    <path
      d='M4.5 13.5C4.5 11.6144 4.5 10.6716 5.08579 10.0858C5.67157 9.5 6.61438 9.5 8.5 9.5H15.5C17.3856 9.5 18.3284 9.5 18.9142 10.0858C19.5 10.6716 19.5 11.6144 19.5 13.5V14.5C19.5 17.3284 19.5 18.7426 18.6213 19.6213C17.7426 20.5 16.3284 20.5 13.5 20.5H10.5C7.67157 20.5 6.25736 20.5 5.37868 19.6213C4.5 18.7426 4.5 17.3284 4.5 14.5V13.5Z'
      stroke={color}
    />
    <path
      d='M16.5 9.5V8C16.5 5.51472 14.4853 3.5 12 3.5V3.5C9.51472 3.5 7.5 5.51472 7.5 8V9.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const Unlock: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M4 13.0002C4 11.1146 4 10.1718 4.58579 9.58603C5.17157 9.00024 6.11438 9.00024 8 9.00024H16C17.8856 9.00024 18.8284 9.00024 19.4142 9.58603C20 10.1718 20 11.1146 20 13.0002V15.0002C20 17.8287 20 19.2429 19.1213 20.1216C18.2426 21.0002 16.8284 21.0002 14 21.0002H10C7.17157 21.0002 5.75736 21.0002 4.87868 20.1216C4 19.2429 4 17.8287 4 15.0002V13.0002Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M16.4999 9.00006L16.5775 8.37947C16.8364 6.30788 15.9043 4.2675 14.1688 3.10709V3.10709C12.1023 1.72543 9.36726 1.89573 7.48819 3.52305L6.66986 4.23174'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <circle cx='12' cy='15' r='2' fill={color} />
  </svg>
)

export const UnlockDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M4 12C4 11.0572 4 10.5858 4.29289 10.2929C4.58579 10 5.05719 10 6 10H18C18.9428 10 19.4142 10 19.7071 10.2929C20 10.5858 20 11.0572 20 12V18.0375C20 18.4185 20 18.6091 19.9711 18.7772C19.8575 19.4381 19.4203 19.9981 18.8067 20.2685C18.6506 20.3374 18.4658 20.3836 18.0961 20.476C16.8589 20.7853 16.2403 20.9399 15.6215 21.0539C13.2273 21.4947 10.7727 21.4947 8.37847 21.0539C7.75968 20.9399 7.14108 20.7853 5.90388 20.476C5.53423 20.3836 5.34941 20.3374 5.19329 20.2685C4.5797 19.9981 4.14248 19.4381 4.0289 18.7772C4 18.6091 4 18.4185 4 18.0375V12Z'
      fill={color}
      fillOpacity='0.25'
    />
    <circle cx='12' cy='15' r='2' fill={color} />
    <path d='M12 16V18.5' stroke={color} strokeLinecap='round' />
    <path
      d='M16.5 10V7C16.5 4.51472 14.4853 2.5 12 2.5V2.5C9.51472 2.5 7.5 4.51472 7.5 7V8'
      stroke={color}
    />
  </svg>
)

export const UnlockDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M4 13.0002C4 11.1146 4 10.1718 4.58579 9.58603C5.17157 9.00024 6.11438 9.00024 8 9.00024H16C17.8856 9.00024 18.8284 9.00024 19.4142 9.58603C20 10.1718 20 11.1146 20 13.0002V15.0002C20 17.8287 20 19.2429 19.1213 20.1216C18.2426 21.0002 16.8284 21.0002 14 21.0002H10C7.17157 21.0002 5.75736 21.0002 4.87868 20.1216C4 19.2429 4 17.8287 4 15.0002V13.0002Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M16.4999 9.00006L16.5775 8.37947C16.8364 6.30788 15.9043 4.2675 14.1688 3.10709V3.10709C12.1023 1.72543 9.36726 1.89573 7.48819 3.52305L6.66986 4.23174'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <circle cx='12' cy='15' r='2' fill={color} />
  </svg>
)

export const UnlockFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M3.87868 7.87868C3 8.75736 3 10.1716 3 13V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V13C21 10.1716 21 8.75736 20.1213 7.87868C19.2426 7 17.8284 7 15 7H9C6.17157 7 4.75736 7 3.87868 7.87868ZM12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15ZM15 14C15 15.3062 14.1652 16.4175 13 16.8293V19H11V16.8293C9.83481 16.4175 9 15.3062 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14Z'
      fill={color}
    />
    <path
      d='M16.5 7.99981V7.99981C16.8043 6.17359 16.0108 4.33842 14.4717 3.30935L14.0979 3.05946C12.0734 1.70579 9.3937 1.87263 7.55269 3.46699L6.66992 4.23149'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const UnlockLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M4 13.0002C4 11.1146 4 10.1718 4.58579 9.58603C5.17157 9.00024 6.11438 9.00024 8 9.00024H16C17.8856 9.00024 18.8284 9.00024 19.4142 9.58603C20 10.1718 20 11.1146 20 13.0002V15.0002C20 17.8287 20 19.2429 19.1213 20.1216C18.2426 21.0002 16.8284 21.0002 14 21.0002H10C7.17157 21.0002 5.75736 21.0002 4.87868 20.1216C4 19.2429 4 17.8287 4 15.0002V13.0002Z'
      stroke={color}
    />
    <path
      d='M16.4999 9.00006L16.5775 8.37947C16.8364 6.30788 15.9043 4.2675 14.1688 3.10709V3.10709C12.1023 1.72543 9.36726 1.89573 7.48819 3.52305L6.66986 4.23174'
      stroke={color}
      strokeLinecap='round'
    />
    <circle cx='12' cy='15' r='2' fill={color} />
  </svg>
)

export const HideEye: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M6.8874 5.17157C7.46546 4.59351 7.75449 4.30448 8.12203 4.15224C8.48957 4 8.89832 4 9.71582 4H14.326C15.1517 4 15.5646 4 15.9351 4.15505C16.3056 4.31011 16.5954 4.60419 17.175 5.19234L18.849 6.89105C19.4171 7.46745 19.7011 7.75566 19.8505 8.12024C20 8.48482 20 8.88945 20 9.69871V14.3431C20 15.1606 20 15.5694 19.8478 15.9369C19.6955 16.3045 19.4065 16.5935 18.8284 17.1716L17.1716 18.8284C16.5935 19.4065 16.3045 19.6955 15.9369 19.8478C15.5694 20 15.1606 20 14.3431 20H9.69871C8.88945 20 8.48482 20 8.12024 19.8505C7.75566 19.7011 7.46745 19.4171 6.89105 18.849L5.19235 17.175C4.60419 16.5954 4.31011 16.3056 4.15505 15.9351C4 15.5646 4 15.1517 4 14.326V9.71583C4 8.89832 4 8.48957 4.15224 8.12203C4.30448 7.75449 4.59351 7.46546 5.17157 6.8874L6.8874 5.17157Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M8 11L8.42229 11.2111C10.6745 12.3373 13.3255 12.3373 15.5777 11.2111L16 11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M12 12.5V14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 12L8.5 13' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M15 12L15.5 13' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const HideEyeDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M6.8874 5.17157C7.46546 4.59351 7.75449 4.30448 8.12203 4.15224C8.48957 4 8.89832 4 9.71582 4H14.326C15.1517 4 15.5646 4 15.9351 4.15505C16.3056 4.31011 16.5954 4.60419 17.175 5.19234L18.849 6.89105C19.4171 7.46745 19.7011 7.75566 19.8505 8.12024C20 8.48482 20 8.88945 20 9.69871V14.3431C20 15.1606 20 15.5694 19.8478 15.9369C19.6955 16.3045 19.4065 16.5935 18.8284 17.1716L17.1716 18.8284C16.5935 19.4065 16.3045 19.6955 15.9369 19.8478C15.5694 20 15.1606 20 14.3431 20H9.69871C8.88945 20 8.48482 20 8.12024 19.8505C7.75566 19.7011 7.46745 19.4171 6.89105 18.849L5.19235 17.175C4.60419 16.5954 4.31011 16.3056 4.15505 15.9351C4 15.5646 4 15.1517 4 14.326V9.71583C4 8.89832 4 8.48957 4.15224 8.12203C4.30448 7.75449 4.59351 7.46546 5.17157 6.8874L6.8874 5.17157Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M8 11L8.42229 11.2111C10.6745 12.3373 13.3255 12.3373 15.5777 11.2111L16 11'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path d='M12 12.5V14' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M9 12L8.5 13' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M15 12L15.5 13' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const HideEyeFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M6.8874 5.17157L6.8874 5.17157L5.17157 6.8874C4.59351 7.46546 4.30448 7.75449 4.15224 8.12203C4 8.48957 4 8.89832 4 9.71583V14.326C4 15.1517 4 15.5646 4.15505 15.9351C4.31011 16.3056 4.60419 16.5954 5.19235 17.175L6.89105 18.849C7.46745 19.4171 7.75566 19.7011 8.12024 19.8505C8.48482 20 8.88945 20 9.69871 20H14.3431C15.1606 20 15.5694 20 15.9369 19.8478C16.3045 19.6955 16.5935 19.4065 17.1716 18.8284L18.8284 17.1716C19.4065 16.5935 19.6955 16.3045 19.8478 15.9369C20 15.5694 20 15.1606 20 14.3431V9.69871C20 8.88945 20 8.48482 19.8505 8.12024C19.7011 7.75566 19.4171 7.46745 18.849 6.89105L17.175 5.19234C16.5954 4.60419 16.3056 4.31011 15.9351 4.15505C15.5646 4 15.1517 4 14.326 4H9.71582C8.89832 4 8.48957 4 8.12203 4.15224C7.75449 4.30448 7.46546 4.59351 6.8874 5.17157ZM8.44721 10.1056C7.95324 9.85858 7.35256 10.0588 7.10557 10.5528C6.85858 11.0468 7.05881 11.6474 7.55279 11.8944L7.85836 12.0472L7.60557 12.5528C7.35858 13.0468 7.55881 13.6474 8.05279 13.8944C8.54676 14.1414 9.14744 13.9412 9.39443 13.4472L9.73496 12.7661C10.1518 12.8745 10.5746 12.9525 11 13V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V13C13.4254 12.9525 13.8482 12.8745 14.265 12.7661L14.6056 13.4472C14.8526 13.9412 15.4532 14.1414 15.9472 13.8944C16.4412 13.6474 16.6414 13.0468 16.3944 12.5528L16.1416 12.0472L16.4472 11.8944C16.9412 11.6474 17.1414 11.0468 16.8944 10.5528C16.6474 10.0588 16.0468 9.85858 15.5528 10.1056L15.1305 10.3167C13.1598 11.3021 10.8402 11.3021 8.86951 10.3167L8.44721 10.1056Z'
      fill={color}
    />
  </svg>
)

export const HideEyeLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M6.8874 5.17157C7.46546 4.59351 7.75449 4.30448 8.12203 4.15224C8.48957 4 8.89832 4 9.71582 4H14.326C15.1517 4 15.5646 4 15.9351 4.15505C16.3056 4.31011 16.5954 4.60419 17.175 5.19234L18.849 6.89105C19.4171 7.46745 19.7011 7.75566 19.8505 8.12024C20 8.48482 20 8.88945 20 9.69871V14.3431C20 15.1606 20 15.5694 19.8478 15.9369C19.6955 16.3045 19.4065 16.5935 18.8284 17.1716L17.1716 18.8284C16.5935 19.4065 16.3045 19.6955 15.9369 19.8478C15.5694 20 15.1606 20 14.3431 20H9.69871C8.88945 20 8.48482 20 8.12024 19.8505C7.75566 19.7011 7.46745 19.4171 6.89105 18.849L5.19235 17.175C4.60419 16.5954 4.31011 16.3056 4.15505 15.9351C4 15.5646 4 15.1517 4 14.326V9.71583C4 8.89832 4 8.48957 4.15224 8.12203C4.30448 7.75449 4.59351 7.46546 5.17157 6.8874L6.8874 5.17157Z'
      stroke={color}
    />
    <path
      d='M8 11L8.42229 11.2111C10.6745 12.3373 13.3255 12.3373 15.5777 11.2111L16 11'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M12 12.5V14' stroke={color} strokeLinecap='round' />
    <path d='M9 12L8.5 13' stroke={color} strokeLinecap='round' />
    <path d='M15 12L15.5 13' stroke={color} strokeLinecap='round' />
  </svg>
)
