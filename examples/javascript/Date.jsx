/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const Calendar = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='6' width='18' height='15' rx='2' stroke={color} strokeWidth='2' />
    <path d='M4 11H20' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 16H15' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M8 3L8 7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M16 3L16 7' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const CalendarAdd = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='6' width='18' height='15' rx='2' stroke={color} strokeWidth='2' />
    <path d='M4 11H20' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M10 16H14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 14L12 18' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M8 3L8 7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M16 3L16 7' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const CalendarAddDuotone = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M7 4.43245C7 4.27684 7 4.19903 6.9491 4.15423C6.89819 4.10944 6.82244 4.11915 6.67094 4.13857C5.54965 4.28229 4.76806 4.57508 4.17157 5.17157C3 6.34315 3 8.22876 3 12C3 15.7712 3 17.6569 4.17157 18.8284C5.34315 20 7.22876 20 11 20H13C16.7712 20 18.6569 20 19.8284 18.8284C21 17.6569 21 15.7712 21 12C21 8.22876 21 6.34315 19.8284 5.17157C19.2319 4.57508 18.4504 4.28229 17.3291 4.13857C17.1776 4.11915 17.1018 4.10944 17.0509 4.15424C17 4.19903 17 4.27684 17 4.43245L17 6.5C17 7.32843 16.3284 8 15.5 8C14.6716 8 14 7.32843 14 6.5L14 4.30005C14 4.15898 14 4.08844 13.9561 4.04451C13.9123 4.00059 13.8418 4.0005 13.7009 4.00031C13.4748 4 13.2412 4 13 4H11C10.7588 4 10.5252 4 10.2991 4.00031C10.1582 4.0005 10.0877 4.00059 10.0439 4.04452C10 4.08844 10 4.15898 10 4.30005L10 6.5C10 7.32843 9.32843 8 8.50001 8C7.67158 8 7 7.32843 7 6.5L7 4.43245Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M8.5 2.5L8.5 6.5' stroke={color} strokeLinecap='round' />
    <path d='M15.5 2.5L15.5 6.5' stroke={color} strokeLinecap='round' />
    <path d='M12 16L12 10' stroke={color} strokeWidth='1.2' strokeLinecap='square' />
    <path d='M15 13L9 13' stroke={color} strokeWidth='1.2' strokeLinecap='square' />
  </svg>
)

export const CalendarAddDuotoneLine = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M5.59202 19.282L5.81901 18.8365L5.59202 19.282ZM4.71799 18.408L5.16349 18.181L4.71799 18.408ZM18.408 19.282L18.181 18.8365L18.408 19.282ZM19.282 18.408L18.8365 18.181L19.282 18.408ZM18.408 5.71799L18.181 6.16349L18.408 5.71799ZM19.282 6.59202L18.8365 6.81901L19.282 6.59202ZM5.59202 5.71799L5.81901 6.16349L5.59202 5.71799ZM4.71799 6.59202L5.16349 6.81901L4.71799 6.59202ZM9 3.5C9 3.22386 8.77614 3 8.5 3C8.22386 3 8 3.22386 8 3.5H9ZM8 7.5C8 7.77614 8.22386 8 8.5 8C8.77614 8 9 7.77614 9 7.5H8ZM16 3.5C16 3.22386 15.7761 3 15.5 3C15.2239 3 15 3.22386 15 3.5L16 3.5ZM15 7.5C15 7.77614 15.2239 8 15.5 8C15.7761 8 16 7.77614 16 7.5H15ZM7.7 6H16.3V5H7.7V6ZM16.3 19H7.7V20H16.3V19ZM19 8.7V9.5H20V8.7H19ZM19 9.5V16.3H20V9.5H19ZM5 16.3V9.5H4V16.3H5ZM5 9.5V8.7H4V9.5H5ZM19.5 9H4.5V10H19.5V9ZM7.7 19C7.1317 19 6.73554 18.9996 6.42712 18.9744C6.12454 18.9497 5.95069 18.9036 5.81901 18.8365L5.36502 19.7275C5.66117 19.8784 5.98126 19.9413 6.34569 19.9711C6.70428 20.0004 7.1482 20 7.7 20V19ZM4 16.3C4 16.8518 3.99961 17.2957 4.02891 17.6543C4.05868 18.0187 4.12159 18.3388 4.27248 18.635L5.16349 18.181C5.0964 18.0493 5.05031 17.8755 5.02559 17.5729C5.00039 17.2645 5 16.8683 5 16.3H4ZM5.81901 18.8365C5.53677 18.6927 5.3073 18.4632 5.16349 18.181L4.27248 18.635C4.51217 19.1054 4.89462 19.4878 5.36502 19.7275L5.81901 18.8365ZM16.3 20C16.8518 20 17.2957 20.0004 17.6543 19.9711C18.0187 19.9413 18.3388 19.8784 18.635 19.7275L18.181 18.8365C18.0493 18.9036 17.8755 18.9497 17.5729 18.9744C17.2645 18.9996 16.8683 19 16.3 19V20ZM19 16.3C19 16.8683 18.9996 17.2645 18.9744 17.5729C18.9497 17.8755 18.9036 18.0493 18.8365 18.181L19.7275 18.635C19.8784 18.3388 19.9413 18.0187 19.9711 17.6543C20.0004 17.2957 20 16.8518 20 16.3H19ZM18.635 19.7275C19.1054 19.4878 19.4878 19.1054 19.7275 18.635L18.8365 18.181C18.6927 18.4632 18.4632 18.6927 18.181 18.8365L18.635 19.7275ZM16.3 6C16.8683 6 17.2645 6.00039 17.5729 6.02559C17.8755 6.05031 18.0493 6.0964 18.181 6.16349L18.635 5.27248C18.3388 5.12159 18.0187 5.05868 17.6543 5.02891C17.2957 4.99961 16.8518 5 16.3 5V6ZM20 8.7C20 8.1482 20.0004 7.70428 19.9711 7.34569C19.9413 6.98126 19.8784 6.66117 19.7275 6.36502L18.8365 6.81901C18.9036 6.95069 18.9497 7.12454 18.9744 7.42712C18.9996 7.73554 19 8.1317 19 8.7H20ZM18.181 6.16349C18.4632 6.3073 18.6927 6.53677 18.8365 6.81901L19.7275 6.36502C19.4878 5.89462 19.1054 5.51217 18.635 5.27248L18.181 6.16349ZM7.7 5C7.1482 5 6.70428 4.99961 6.34569 5.02891C5.98126 5.05868 5.66117 5.12159 5.36502 5.27248L5.81901 6.16349C5.95069 6.0964 6.12454 6.05031 6.42712 6.02559C6.73554 6.00039 7.1317 6 7.7 6V5ZM5 8.7C5 8.1317 5.00039 7.73554 5.02559 7.42712C5.05031 7.12454 5.0964 6.95069 5.16349 6.81901L4.27248 6.36502C4.12159 6.66117 4.05868 6.98126 4.02891 7.34569C3.99961 7.70428 4 8.1482 4 8.7H5ZM5.36502 5.27248C4.89462 5.51217 4.51217 5.89462 4.27248 6.36502L5.16349 6.81901C5.3073 6.53677 5.53677 6.3073 5.81901 6.16349L5.36502 5.27248ZM8 3.5V7.5H9V3.5H8ZM15 3.5L15 7.5H16L16 3.5L15 3.5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M12 17L12 12' stroke={color} strokeLinecap='round' />
    <path d='M14.5 14.5L9.5 14.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const CalendarAddFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9C22 9.4714 22 9.70711 21.8536 9.85355C21.7071 10 21.4714 10 21 10H3C2.5286 10 2.29289 10 2.14645 9.85355C2 9.70711 2 9.4714 2 9Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V13C22 12.5286 22 12.2929 21.8536 12.1464C21.7071 12 21.4714 12 21 12H3C2.5286 12 2.29289 12 2.14645 12.1464C2 12.2929 2 12.5286 2 13V18ZM8 17C8 16.4477 8.44772 16 9 16H11V14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14V16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H13V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V18H9C8.44772 18 8 17.5523 8 17Z'
      fill={color}
    />
    <path d='M7 3L7 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M17 3L17 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const CalendarAddLight = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19.5 9.5V8.7C19.5 7.57989 19.5 7.01984 19.282 6.59202C19.0903 6.21569 18.7843 5.90973 18.408 5.71799C17.9802 5.5 17.4201 5.5 16.3 5.5H7.7C6.5799 5.5 6.01984 5.5 5.59202 5.71799C5.21569 5.90973 4.90973 6.21569 4.71799 6.59202C4.5 7.01984 4.5 7.57989 4.5 8.7V9.5M19.5 9.5V16.3C19.5 17.4201 19.5 17.9802 19.282 18.408C19.0903 18.7843 18.7843 19.0903 18.408 19.282C17.9802 19.5 17.4201 19.5 16.3 19.5H7.7C6.57989 19.5 6.01984 19.5 5.59202 19.282C5.21569 19.0903 4.90973 18.7843 4.71799 18.408C4.5 17.9802 4.5 17.4201 4.5 16.3V9.5M19.5 9.5H4.5'
      stroke={color}
    />
    <path d='M8.5 3.5L8.5 7.5M15.5 3.5L15.5 7.5' stroke={color} strokeLinecap='round' />
    <path d='M12 17L12 12' stroke={color} strokeLinecap='round' />
    <path d='M14.5 14.5L9.5 14.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const CalendarDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
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
      d='M7 4.43245C7 4.27684 7 4.19903 6.9491 4.15423C6.89819 4.10944 6.82244 4.11915 6.67094 4.13857C5.54965 4.28229 4.76806 4.57508 4.17157 5.17157C3 6.34315 3 8.22876 3 12C3 15.7712 3 17.6569 4.17157 18.8284C5.34315 20 7.22876 20 11 20H13C16.7712 20 18.6569 20 19.8284 18.8284C21 17.6569 21 15.7712 21 12C21 8.22876 21 6.34315 19.8284 5.17157C19.2319 4.57508 18.4504 4.28229 17.3291 4.13857C17.1776 4.11915 17.1018 4.10944 17.0509 4.15424C17 4.19903 17 4.27684 17 4.43245L17 6.5C17 7.32843 16.3284 8 15.5 8C14.6716 8 14 7.32843 14 6.5L14 4.30005C14 4.15898 14 4.08844 13.9561 4.04451C13.9123 4.00059 13.8418 4.0005 13.7009 4.00031C13.4748 4 13.2412 4 13 4H11C10.7588 4 10.5252 4 10.2991 4.00031C10.1582 4.0005 10.0877 4.00059 10.0439 4.04452C10 4.08844 10 4.15898 10 4.30005L10 6.5C10 7.32843 9.32843 8 8.50001 8C7.67158 8 7 7.32843 7 6.5L7 4.43245Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M8.5 2.5L8.5 6.5' stroke={color} strokeLinecap='round' />
    <path d='M15.5 2.5L15.5 6.5' stroke={color} strokeLinecap='round' />
    <circle cx='7.5' cy='10.5' r='0.5' fill={color} />
    <circle cx='10.5' cy='10.5' r='0.5' fill={color} />
    <circle cx='13.5' cy='10.5' r='0.5' fill={color} />
    <circle cx='16.5' cy='10.5' r='0.5' fill={color} />
    <circle cx='7.5' cy='13.5' r='0.5' fill={color} />
    <circle cx='10.5' cy='13.5' r='0.5' fill={color} />
    <circle cx='13.5' cy='13.5' r='0.5' fill={color} />
    <circle cx='16.5' cy='13.5' r='0.5' fill={color} />
    <circle cx='7.5' cy='16.5' r='0.5' fill={color} />
    <circle cx='10.5' cy='16.5' r='0.5' fill={color} />
    <circle cx='13.5' cy='16.5' r='0.5' fill={color} />
    <circle cx='16.5' cy='16.5' r='0.5' fill={color} />
  </svg>
)

export const CalendarDuotoneLine = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V11H3V10Z'
      stroke={color}
      strokeWidth='1.2'
    />
    <rect x='3' y='6' width='18' height='15' rx='2' stroke={color} strokeWidth='1.2' />
    <path
      d='M9 16H15'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path d='M8 3L8 7' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M16 3L16 7' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const CalendarFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9C22 9.4714 22 9.70711 21.8536 9.85355C21.7071 10 21.4714 10 21 10H3C2.5286 10 2.29289 10 2.14645 9.85355C2 9.70711 2 9.4714 2 9Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.58579 21.4142C2 20.8284 2 19.8856 2 18V13C2 12.5286 2 12.2929 2.14645 12.1464C2.29289 12 2.5286 12 3 12H21C21.4714 12 21.7071 12 21.8536 12.1464C22 12.2929 22 12.5286 22 13V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22H6C4.11438 22 3.17157 22 2.58579 21.4142ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16H8Z'
      fill={color}
    />
    <path d='M7 3L7 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M17 3L17 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const CalendarLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='6' width='18' height='15' rx='2' stroke={color} />
    <path d='M3 11L21 11' stroke={color} strokeLinecap='round' />
    <path d='M9 16H15' stroke={color} strokeLinecap='round' />
    <path d='M8 3L8 7' stroke={color} strokeLinecap='round' />
    <path d='M16 3L16 7' stroke={color} strokeLinecap='round' />
  </svg>
)

export const DateFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9C22 9.4714 22 9.70711 21.8536 9.85355C21.7071 10 21.4714 10 21 10H3C2.5286 10 2.29289 10 2.14645 9.85355C2 9.70711 2 9.4714 2 9Z'
      fill={color}
    />
    <path
      d='M2 18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V13C22 12.5286 22 12.2929 21.8536 12.1464C21.7071 12 21.4714 12 21 12H3C2.5286 12 2.29289 12 2.14645 12.1464C2 12.2929 2 12.5286 2 13V18Z'
      fill={color}
    />
    <path d='M7 3L7 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M17 3L17 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const DateRange = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='6' width='18' height='15' rx='2' stroke={color} strokeWidth='2' />
    <path
      d='M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z'
      fill={color}
    />
    <path d='M7 3L7 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M17 3L17 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <rect x='7' y='12' width='4' height='2' rx='0.5' fill={color} />
    <rect x='7' y='16' width='4' height='2' rx='0.5' fill={color} />
    <rect x='13' y='12' width='4' height='2' rx='0.5' fill={color} />
    <rect x='13' y='16' width='4' height='2' rx='0.5' fill={color} />
  </svg>
)

export const DateRangeDuotone = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z'
      fill={color}
      fillOpacity='0.25'
    />
    <rect x='3' y='6' width='18' height='15' rx='2' stroke={color} strokeWidth='1.2' />
    <path d='M7 3L7 6' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M17 3L17 6' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <rect x='7' y='12' width='4' height='2' rx='0.5' fill={color} />
    <rect x='7' y='16' width='4' height='2' rx='0.5' fill={color} />
    <rect x='13' y='12' width='4' height='2' rx='0.5' fill={color} />
    <rect x='13' y='16' width='4' height='2' rx='0.5' fill={color} />
  </svg>
)

export const DateRangeDuotoneLine = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M17 3L17 7' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M7 3L7 7' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V11H3V10Z'
      stroke={color}
      strokeWidth='1.2'
    />
    <rect x='3' y='6' width='18' height='15' rx='2' stroke={color} strokeWidth='1.2' />
    <path
      d='M6 15H10'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      d='M14 15H18'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      d='M6 18H10'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      d='M14 18H18'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const DateRangeFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9C22 9.4714 22 9.70711 21.8536 9.85355C21.7071 10 21.4714 10 21 10H3C2.5286 10 2.29289 10 2.14645 9.85355C2 9.70711 2 9.4714 2 9Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V13C22 12.5286 22 12.2929 21.8536 12.1464C21.7071 12 21.4714 12 21 12H3C2.5286 12 2.29289 12 2.14645 12.1464C2 12.2929 2 12.5286 2 13V18ZM7 15C7 14.5286 7 14.2929 7.14645 14.1464C7.29289 14 7.5286 14 8 14H10C10.4714 14 10.7071 14 10.8536 14.1464C11 14.2929 11 14.5286 11 15C11 15.4714 11 15.7071 10.8536 15.8536C10.7071 16 10.4714 16 10 16H8C7.5286 16 7.29289 16 7.14645 15.8536C7 15.7071 7 15.4714 7 15ZM7.14645 18.1464C7 18.2929 7 18.5286 7 19C7 19.4714 7 19.7071 7.14645 19.8536C7.29289 20 7.5286 20 8 20H10C10.4714 20 10.7071 20 10.8536 19.8536C11 19.7071 11 19.4714 11 19C11 18.5286 11 18.2929 10.8536 18.1464C10.7071 18 10.4714 18 10 18H8C7.5286 18 7.29289 18 7.14645 18.1464ZM13 15C13 14.5286 13 14.2929 13.1464 14.1464C13.2929 14 13.5286 14 14 14H16C16.4714 14 16.7071 14 16.8536 14.1464C17 14.2929 17 14.5286 17 15C17 15.4714 17 15.7071 16.8536 15.8536C16.7071 16 16.4714 16 16 16H14C13.5286 16 13.2929 16 13.1464 15.8536C13 15.7071 13 15.4714 13 15ZM13.1464 18.1464C13 18.2929 13 18.5286 13 19C13 19.4714 13 19.7071 13.1464 19.8536C13.2929 20 13.5286 20 14 20H16C16.4714 20 16.7071 20 16.8536 19.8536C17 19.7071 17 19.4714 17 19C17 18.5286 17 18.2929 16.8536 18.1464C16.7071 18 16.4714 18 16 18H14C13.5286 18 13.2929 18 13.1464 18.1464Z'
      fill={color}
    />
    <path d='M7 3L7 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M17 3L17 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const DateRangeLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='6' width='18' height='15' rx='2' stroke={color} />
    <path
      d='M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z'
      fill={color}
    />
    <path d='M7 3L7 6' stroke={color} strokeLinecap='round' />
    <path d='M17 3L17 6' stroke={color} strokeLinecap='round' />
    <rect x='7' y='12' width='4' height='2' rx='0.5' fill={color} />
    <rect x='7' y='16' width='4' height='2' rx='0.5' fill={color} />
    <rect x='13' y='12' width='4' height='2' rx='0.5' fill={color} />
    <rect x='13' y='16' width='4' height='2' rx='0.5' fill={color} />
  </svg>
)

export const DateToday = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='6' width='18' height='15' rx='2' stroke={color} strokeWidth='2' />
    <path
      d='M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z'
      fill={color}
    />
    <path d='M7 3L7 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M17 3L17 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const DateTodayDuotone = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M7 4.01833C6.46047 4.04114 6.07192 4.09237 5.72883 4.20736C4.53947 4.60599 3.60599 5.53947 3.20736 6.72883C3 7.3475 3 8.11402 3 9.64706C3 9.74287 3 9.79078 3.01296 9.82945C3.03787 9.90378 3.09622 9.96213 3.17055 9.98704C3.20922 10 3.25713 10 3.35294 10H20.6471C20.7429 10 20.7908 10 20.8294 9.98704C20.9038 9.96213 20.9621 9.90378 20.987 9.82945C21 9.79078 21 9.74287 21 9.64706C21 8.11402 21 7.3475 20.7926 6.72883C20.394 5.53947 19.4605 4.60599 18.2712 4.20736C17.9281 4.09237 17.5395 4.04114 17 4.01833L17 6.5C17 7.32843 16.3284 8 15.5 8C14.6716 8 14 7.32843 14 6.5L14 4H10L10 6.5C10 7.32843 9.32843 8 8.50001 8C7.67158 8 7 7.32843 7 6.5L7 4.01833Z'
      fill={color}
    />
    <path
      d='M3 11.5C3 11.2643 3 11.1464 3.07322 11.0732C3.14645 11 3.2643 11 3.5 11H20.5C20.7357 11 20.8536 11 20.9268 11.0732C21 11.1464 21 11.2643 21 11.5V12C21 15.7712 21 17.6569 19.8284 18.8284C18.6569 20 16.7712 20 13 20H11C7.22876 20 5.34315 20 4.17157 18.8284C3 17.6569 3 15.7712 3 12V11.5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M8.5 2.5L8.5 6.5' stroke={color} strokeLinecap='round' />
    <path d='M15.5 2.5L15.5 6.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const DateTodayDuotoneLine = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V11H3V10Z'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
    />
    <rect x='3' y='6' width='18' height='15' rx='2' stroke={color} strokeWidth='1.2' />
    <path d='M7 3L7 8' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M17 3L17 8' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const DateTodayLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='6' width='18' height='15' rx='2' stroke={color} />
    <path
      d='M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z'
      fill={color}
    />
    <path d='M7 3L7 6' stroke={color} strokeLinecap='round' />
    <path d='M17 3L17 6' stroke={color} strokeLinecap='round' />
  </svg>
)
