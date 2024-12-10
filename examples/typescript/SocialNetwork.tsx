import React from 'react'

import { type IconComponentProps } from './types'

export const Chat: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M9 11L15 11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15H15'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatAlt: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 12C20 8.22876 20 6.34315 18.8284 5.17157C17.6569 4 15.7712 4 12 4V4C8.22876 4 6.34315 4 5.17157 5.17157C4 6.34315 4 8.22876 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C15.7712 20 17.6569 20 18.8284 18.8284C20 17.6569 20 15.7712 20 12V12Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M9 10L15 10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 14H12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatAlt2: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 9L15 9'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 13H12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatAlt2Duotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M8.5 9.5L15.5 9.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 12.5L13.5 12.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const ChatAlt2DuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 9L15 9'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 13H12'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatAlt2Fill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M20 11C20 8.19108 20 6.78661 19.3259 5.77772C19.034 5.34096 18.659 4.96596 18.2223 4.67412C17.2134 4 15.8089 4 13 4H11C8.19108 4 6.78661 4 5.77772 4.67412C5.34096 4.96596 4.96596 5.34096 4.67412 5.77772C4 6.78661 4 8.19108 4 11C4 13.8089 4 15.2134 4.67412 16.2223C4.96596 16.659 5.34096 17.034 5.77772 17.3259C6.65907 17.9148 7.8423 17.9892 10 17.9986V18L11.1056 20.2111C11.4741 20.9482 12.5259 20.9482 12.8944 20.2111L14 18V17.9986C16.1577 17.9892 17.3409 17.9148 18.2223 17.3259C18.659 17.034 19.034 16.659 19.3259 16.2223C20 15.2134 20 13.8089 20 11ZM9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10H15C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8H9ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H12C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12H9Z'
      fill={color}
    />
  </svg>
)

export const ChatAlt2Light: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 9L15 9' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 13H12' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const ChatAlt3: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19.3259 5.77772L18.4944 6.33329V6.33329L19.3259 5.77772ZM19.3259 16.2223L18.4944 15.6667V15.6667L19.3259 16.2223ZM18.2223 17.3259L17.6667 16.4944H17.6667L18.2223 17.3259ZM14 17.9986L13.9956 16.9986C13.4451 17.001 13 17.4481 13 17.9986H14ZM14 18L14.8944 18.4472C14.9639 18.3084 15 18.1552 15 18H14ZM10 18H9C9 18.1552 9.03615 18.3084 9.10557 18.4472L10 18ZM10 17.9986H11C11 17.4481 10.5549 17.001 10.0044 16.9986L10 17.9986ZM5.77772 17.3259L6.33329 16.4944H6.33329L5.77772 17.3259ZM4.67412 16.2223L5.50559 15.6667L5.50559 15.6667L4.67412 16.2223ZM4.67412 5.77772L5.50559 6.33329L4.67412 5.77772ZM5.77772 4.67412L6.33329 5.50559L5.77772 4.67412ZM18.2223 4.67412L17.6667 5.50559L17.6667 5.50559L18.2223 4.67412ZM21 11C21 9.61635 21.0012 8.50334 20.9106 7.61264C20.8183 6.70523 20.6225 5.91829 20.1573 5.22215L18.4944 6.33329C18.7034 6.64604 18.8446 7.06578 18.9209 7.81505C18.9988 8.58104 19 9.57473 19 11H21ZM20.1573 16.7779C20.6225 16.0817 20.8183 15.2948 20.9106 14.3874C21.0012 13.4967 21 12.3836 21 11H19C19 12.4253 18.9988 13.419 18.9209 14.1849C18.8446 14.9342 18.7034 15.354 18.4944 15.6667L20.1573 16.7779ZM18.7779 18.1573C19.3238 17.7926 19.7926 17.3238 20.1573 16.7779L18.4944 15.6667C18.2755 15.9943 17.9943 16.2755 17.6667 16.4944L18.7779 18.1573ZM14.0044 18.9986C15.0785 18.9939 15.9763 18.9739 16.7267 18.8701C17.4931 18.7642 18.1699 18.5636 18.7779 18.1573L17.6667 16.4944C17.3934 16.6771 17.0378 16.8081 16.4528 16.889C15.8518 16.9721 15.0792 16.9939 13.9956 16.9986L14.0044 18.9986ZM15 18V17.9986H13V18H15ZM13.7889 20.6584L14.8944 18.4472L13.1056 17.5528L12 19.7639L13.7889 20.6584ZM10.2111 20.6584C10.9482 22.1325 13.0518 22.1325 13.7889 20.6584L12 19.7639L12 19.7639L10.2111 20.6584ZM9.10557 18.4472L10.2111 20.6584L12 19.7639L10.8944 17.5528L9.10557 18.4472ZM9 17.9986V18H11V17.9986H9ZM5.22215 18.1573C5.83014 18.5636 6.50685 18.7642 7.2733 18.8701C8.02368 18.9739 8.92154 18.9939 9.99564 18.9986L10.0044 16.9986C8.92075 16.9939 8.14815 16.9721 7.54716 16.889C6.96223 16.8081 6.60665 16.6771 6.33329 16.4944L5.22215 18.1573ZM3.84265 16.7779C4.20744 17.3238 4.6762 17.7926 5.22215 18.1573L6.33329 16.4944C6.00572 16.2755 5.72447 15.9943 5.50559 15.6667L3.84265 16.7779ZM3 11C3 12.3836 2.99879 13.4967 3.0894 14.3874C3.18171 15.2948 3.3775 16.0817 3.84265 16.7779L5.50559 15.6667C5.29662 15.354 5.15535 14.9342 5.07913 14.1849C5.00121 13.419 5 12.4253 5 11H3ZM3.84265 5.22215C3.3775 5.91829 3.18171 6.70523 3.0894 7.61264C2.99879 8.50334 3 9.61635 3 11H5C5 9.57473 5.00121 8.58104 5.07913 7.81505C5.15535 7.06578 5.29662 6.64604 5.50559 6.33329L3.84265 5.22215ZM5.22215 3.84265C4.6762 4.20744 4.20744 4.6762 3.84265 5.22215L5.50559 6.33329C5.72447 6.00572 6.00572 5.72447 6.33329 5.50559L5.22215 3.84265ZM11 3C9.61635 3 8.50334 2.99879 7.61264 3.0894C6.70523 3.18171 5.91829 3.3775 5.22215 3.84265L6.33329 5.50559C6.64604 5.29662 7.06578 5.15535 7.81505 5.07913C8.58104 5.00121 9.57473 5 11 5V3ZM13 3H11V5H13V3ZM18.7779 3.84265C18.0817 3.3775 17.2948 3.18171 16.3874 3.0894C15.4967 2.99879 14.3836 3 13 3V5C14.4253 5 15.419 5.00121 16.1849 5.07913C16.9342 5.15535 17.354 5.29662 17.6667 5.50559L18.7779 3.84265ZM20.1573 5.22215C19.7926 4.6762 19.3238 4.20744 18.7779 3.84265L17.6667 5.50559C17.9943 5.72447 18.2755 6.00572 18.4944 6.33329L20.1573 5.22215Z'
      fill={color}
    />
    <circle cx='16' cy='11' r='1' fill={color} stroke={color} strokeLinecap='round' />
    <circle cx='12' cy='11' r='1' fill={color} stroke={color} strokeLinecap='round' />
    <circle cx='8' cy='11' r='1' fill={color} stroke={color} strokeLinecap='round' />
  </svg>
)

export const ChatAlt3Duotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z'
      fill={color}
      fillOpacity='0.25'
    />
    <circle cx='16' cy='11' r='1' fill={color} />
    <circle cx='12' cy='11' r='1' fill={color} />
    <circle cx='8' cy='11' r='1' fill={color} />
  </svg>
)

export const ChatAlt3DuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M19.3259 5.77772L18.827 6.11106L18.827 6.11106L19.3259 5.77772ZM19.3259 16.2223L18.827 15.8889L18.827 15.8889L19.3259 16.2223ZM18.2223 17.3259L17.8889 16.827L17.8889 16.827L18.2223 17.3259ZM14 17.9986L13.9974 17.3986C13.667 17.4001 13.4 17.6683 13.4 17.9986H14ZM14 18L14.5367 18.2683C14.5783 18.185 14.6 18.0931 14.6 18H14ZM10 18H9.4C9.4 18.0931 9.42169 18.185 9.46334 18.2683L10 18ZM10 17.9986H10.6C10.6 17.6683 10.333 17.4001 10.0026 17.3986L10 17.9986ZM5.77772 17.3259L6.11106 16.827L6.11106 16.827L5.77772 17.3259ZM4.67412 16.2223L5.173 15.8889L5.173 15.8889L4.67412 16.2223ZM4.67412 5.77772L5.173 6.11106L4.67412 5.77772ZM5.77772 4.67412L6.11106 5.173L5.77772 4.67412ZM18.2223 4.67412L17.8889 5.173L17.8889 5.173L18.2223 4.67412ZM20.6 11C20.6 9.60803 20.6007 8.51888 20.5127 7.65313C20.4236 6.77734 20.2387 6.06384 19.8248 5.44438L18.827 6.11106C19.0872 6.50049 19.2394 6.99367 19.3188 7.77457C19.3993 8.5655 19.4 9.58305 19.4 11H20.6ZM19.8248 16.5556C20.2387 15.9362 20.4236 15.2227 20.5127 14.3469C20.6007 13.4811 20.6 12.392 20.6 11H19.4C19.4 12.417 19.3993 13.4345 19.3188 14.2254C19.2394 15.0063 19.0872 15.4995 18.827 15.8889L19.8248 16.5556ZM18.5556 17.8248C19.0579 17.4892 19.4892 17.0579 19.8248 16.5556L18.827 15.8889C18.5789 16.2602 18.2602 16.5789 17.8889 16.827L18.5556 17.8248ZM14.0026 18.5986C15.0786 18.5939 15.9514 18.5735 16.6719 18.4739C17.4021 18.373 18.0146 18.1863 18.5556 17.8248L17.8889 16.827C17.5487 17.0544 17.1288 17.1993 16.5076 17.2852C15.8767 17.3724 15.0791 17.3939 13.9974 17.3986L14.0026 18.5986ZM14.6 18V17.9986H13.4V18H14.6ZM13.4311 20.4795L14.5367 18.2683L13.4633 17.7317L12.3578 19.9428L13.4311 20.4795ZM10.5689 20.4795C11.1586 21.6588 12.8414 21.6588 13.4311 20.4795L12.3578 19.9428C12.2104 20.2376 11.7896 20.2376 11.6422 19.9428L10.5689 20.4795ZM9.46334 18.2683L10.5689 20.4795L11.6422 19.9428L10.5367 17.7317L9.46334 18.2683ZM9.4 17.9986V18H10.6V17.9986H9.4ZM5.44438 17.8248C5.98544 18.1863 6.59793 18.373 7.32807 18.4739C8.04857 18.5735 8.92139 18.5939 9.99738 18.5986L10.0026 17.3986C8.92091 17.3939 8.12326 17.3724 7.49239 17.2852C6.87115 17.1993 6.45135 17.0544 6.11106 16.827L5.44438 17.8248ZM4.17524 16.5556C4.51085 17.0579 4.9421 17.4892 5.44438 17.8248L6.11106 16.827C5.73981 16.5789 5.42106 16.2602 5.173 15.8889L4.17524 16.5556ZM3.4 11C3.4 12.392 3.39927 13.4811 3.48735 14.3469C3.57644 15.2227 3.76133 15.9362 4.17524 16.5556L5.173 15.8889C4.9128 15.4995 4.76062 15.0063 4.68118 14.2254C4.60073 13.4345 4.6 12.417 4.6 11H3.4ZM4.17524 5.44438C3.76133 6.06384 3.57644 6.77734 3.48735 7.65313C3.39927 8.51888 3.4 9.60803 3.4 11H4.6C4.6 9.58305 4.60073 8.5655 4.68118 7.77457C4.76062 6.99367 4.9128 6.50049 5.173 6.11106L4.17524 5.44438ZM5.44438 4.17524C4.9421 4.51085 4.51085 4.9421 4.17524 5.44438L5.173 6.11106C5.42106 5.73981 5.73981 5.42106 6.11106 5.173L5.44438 4.17524ZM11 3.4C9.60803 3.4 8.51888 3.39927 7.65313 3.48735C6.77734 3.57644 6.06384 3.76133 5.44438 4.17524L6.11106 5.173C6.50049 4.9128 6.99367 4.76062 7.77457 4.68118C8.5655 4.60073 9.58305 4.6 11 4.6V3.4ZM13 3.4H11V4.6H13V3.4ZM18.5556 4.17524C17.9362 3.76133 17.2227 3.57644 16.3469 3.48735C15.4811 3.39927 14.392 3.4 13 3.4V4.6C14.417 4.6 15.4345 4.60073 16.2254 4.68118C17.0063 4.76062 17.4995 4.9128 17.8889 5.173L18.5556 4.17524ZM19.8248 5.44438C19.4892 4.9421 19.0579 4.51085 18.5556 4.17524L17.8889 5.173C18.2602 5.42106 18.5789 5.73981 18.827 6.11106L19.8248 5.44438Z'
      fill={color}
    />
    <circle
      cx='16'
      cy='11'
      r='1'
      fill={color}
      stroke={color}
      strokeWidth='0.2'
      strokeLinecap='round'
    />
    <circle
      cx='12'
      cy='11'
      r='1'
      fill={color}
      stroke={color}
      strokeWidth='0.2'
      strokeLinecap='round'
    />
    <circle
      cx='8'
      cy='11'
      r='1'
      fill={color}
      stroke={color}
      strokeWidth='0.2'
      strokeLinecap='round'
    />
  </svg>
)

export const ChatAlt3Fill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M20 11C20 8.19108 20 6.78661 19.3259 5.77772C19.034 5.34096 18.659 4.96596 18.2223 4.67412C17.2134 4 15.8089 4 13 4H11C8.19108 4 6.78661 4 5.77772 4.67412C5.34096 4.96596 4.96596 5.34096 4.67412 5.77772C4 6.78661 4 8.19108 4 11C4 13.8089 4 15.2134 4.67412 16.2223C4.96596 16.659 5.34096 17.034 5.77772 17.3259C6.65907 17.9148 7.8423 17.9892 10 17.9986V18L11.1056 20.2111C11.4741 20.9482 12.5259 20.9482 12.8944 20.2111L14 18V17.9986C16.1577 17.9892 17.3409 17.9148 18.2223 17.3259C18.659 17.034 19.034 16.659 19.3259 16.2223C20 15.2134 20 13.8089 20 11ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12ZM13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11ZM17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11Z'
      fill={color}
    />
  </svg>
)

export const ChatAlt3Light: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19.3259 5.77772L18.9101 6.0555L18.9101 6.0555L19.3259 5.77772ZM19.3259 16.2223L18.9101 15.9445H18.9101L19.3259 16.2223ZM18.2223 17.3259L17.9445 16.9101V16.9101L18.2223 17.3259ZM14 17.9986L13.9978 17.4986C13.7225 17.4998 13.5 17.7233 13.5 17.9986H14ZM14 18L14.4472 18.2236C14.4819 18.1542 14.5 18.0776 14.5 18H14ZM10 18H9.5C9.5 18.0776 9.51807 18.1542 9.55279 18.2236L10 18ZM10 17.9986H10.5C10.5 17.7233 10.2775 17.4998 10.0022 17.4986L10 17.9986ZM5.77772 17.3259L6.0555 16.9101L6.0555 16.9101L5.77772 17.3259ZM4.67412 16.2223L5.08986 15.9445H5.08986L4.67412 16.2223ZM4.67412 5.77772L5.08986 6.0555L4.67412 5.77772ZM5.77772 4.67412L6.0555 5.08986L5.77772 4.67412ZM18.2223 4.67412L17.9445 5.08986V5.08986L18.2223 4.67412ZM20.5 11C20.5 9.60594 20.5006 8.52277 20.4132 7.66325C20.3249 6.79537 20.1427 6.10023 19.7416 5.49993L18.9101 6.0555C19.1832 6.4641 19.3381 6.97564 19.4183 7.76445C19.4994 8.56162 19.5 9.58513 19.5 11H20.5ZM19.7416 16.5001C20.1427 15.8998 20.3249 15.2046 20.4132 14.3368C20.5006 13.4772 20.5 12.3941 20.5 11H19.5C19.5 12.4149 19.4994 13.4384 19.4183 14.2355C19.3381 15.0244 19.1832 15.5359 18.9101 15.9445L19.7416 16.5001ZM18.5001 17.7416C18.9914 17.4133 19.4133 16.9914 19.7416 16.5001L18.9101 15.9445C18.6548 16.3267 18.3267 16.6548 17.9445 16.9101L18.5001 17.7416ZM14.0022 18.4986C15.0787 18.4939 15.9452 18.4734 16.6582 18.3749C17.3793 18.2752 17.9757 18.092 18.5001 17.7416L17.9445 16.9101C17.5875 17.1487 17.1516 17.2971 16.5213 17.3843C15.883 17.4725 15.079 17.4939 13.9978 17.4986L14.0022 18.4986ZM14.5 18V17.9986H13.5V18H14.5ZM13.3416 20.4348L14.4472 18.2236L13.5528 17.7764L12.4472 19.9875L13.3416 20.4348ZM10.6584 20.4348C11.2111 21.5403 12.7889 21.5403 13.3416 20.4348L12.4472 19.9875C12.263 20.3561 11.737 20.3561 11.5528 19.9875L10.6584 20.4348ZM9.55279 18.2236L10.6584 20.4348L11.5528 19.9875L10.4472 17.7764L9.55279 18.2236ZM9.5 17.9986V18H10.5V17.9986H9.5ZM5.49993 17.7416C6.02427 18.092 6.62069 18.2752 7.34176 18.3749C8.0548 18.4734 8.92135 18.4939 9.99782 18.4986L10.0022 17.4986C8.92095 17.4939 8.11704 17.4725 7.47869 17.3843C6.84838 17.2971 6.41252 17.1487 6.0555 16.9101L5.49993 17.7416ZM4.25839 16.5001C4.5867 16.9914 5.00858 17.4133 5.49993 17.7416L6.0555 16.9101C5.67334 16.6548 5.34521 16.3267 5.08986 15.9445L4.25839 16.5001ZM3.5 11C3.5 12.3941 3.4994 13.4772 3.58683 14.3368C3.67512 15.2046 3.85728 15.8998 4.25839 16.5001L5.08986 15.9445C4.81684 15.5359 4.66194 15.0244 4.5817 14.2355C4.5006 13.4384 4.5 12.4149 4.5 11H3.5ZM4.25839 5.49993C3.85728 6.10023 3.67512 6.79537 3.58683 7.66325C3.4994 8.52277 3.5 9.60594 3.5 11H4.5C4.5 9.58513 4.5006 8.56162 4.5817 7.76445C4.66194 6.97564 4.81684 6.4641 5.08986 6.0555L4.25839 5.49993ZM5.49993 4.25839C5.00858 4.5867 4.5867 5.00858 4.25839 5.49993L5.08986 6.0555C5.34521 5.67334 5.67334 5.34521 6.0555 5.08986L5.49993 4.25839ZM11 3.5C9.60594 3.5 8.52277 3.4994 7.66325 3.58683C6.79537 3.67512 6.10023 3.85728 5.49993 4.25839L6.0555 5.08986C6.4641 4.81684 6.97564 4.66194 7.76445 4.5817C8.56162 4.5006 9.58513 4.5 11 4.5V3.5ZM13 3.5H11V4.5H13V3.5ZM18.5001 4.25839C17.8998 3.85728 17.2046 3.67512 16.3368 3.58683C15.4772 3.4994 14.3941 3.5 13 3.5V4.5C14.4149 4.5 15.4384 4.5006 16.2355 4.5817C17.0244 4.66194 17.5359 4.81684 17.9445 5.08986L18.5001 4.25839ZM19.7416 5.49993C19.4133 5.00858 18.9914 4.5867 18.5001 4.25839L17.9445 5.08986C18.3267 5.34521 18.6548 5.67334 18.9101 6.0555L19.7416 5.49993Z'
      fill={color}
    />
    <circle cx='16' cy='11' r='1' fill={color} />
    <circle cx='12' cy='11' r='1' fill={color} />
    <circle cx='8' cy='11' r='1' fill={color} />
  </svg>
)

export const ChatAltAddOne: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 12C20 8.22876 20 6.34315 18.8284 5.17157C17.6569 4 15.7712 4 12 4V4C8.22876 4 6.34315 4 5.17157 5.17157C4 6.34315 4 8.22876 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C15.7712 20 17.6569 20 18.8284 18.8284C20 17.6569 20 15.7712 20 12V12Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M9 12L15 12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 9L12 15'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatAltAdd: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M9 12L15 12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 9L12 15'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatAltAddDuotoneOne: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 12C20 9.19974 20 7.79961 19.455 6.73005C18.9757 5.78924 18.2108 5.02433 17.27 4.54497C16.2004 4 14.8003 4 12 4C9.19974 4 7.79961 4 6.73005 4.54497C5.78924 5.02433 5.02433 5.78924 4.54497 6.73005C4 7.79961 4 9.19974 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C14.8003 20 16.2004 20 17.27 19.455C18.2108 18.9757 18.9757 18.2108 19.455 17.27C20 16.2004 20 14.8003 20 12Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M9 12L15 12'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 9L12 15'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatAltAddDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 12C4 9.19974 4 7.79961 4.54497 6.73005C5.02433 5.78924 5.78924 5.02433 6.73005 4.54497C7.79961 4 9.19974 4 12 4C14.8003 4 16.2004 4 17.27 4.54497C18.2108 5.02433 18.9757 5.78924 19.455 6.73005C20 7.79961 20 9.19974 20 12V18C20 18.9428 20 19.4142 19.7071 19.7071C19.4142 20 18.9428 20 18 20H12C9.19974 20 7.79961 20 6.73005 19.455C5.78924 18.9757 5.02433 18.2108 4.54497 17.27C4 16.2004 4 14.8003 4 12Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M12 9V15' stroke={color} strokeLinecap='round' />
    <path d='M9 12H15' stroke={color} strokeLinecap='round' />
  </svg>
)

export const ChatAltAddDuotoneLineOne: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 12C20 8.22876 20 6.34315 18.8284 5.17157C17.6569 4 15.7712 4 12 4C8.22876 4 6.34315 4 5.17157 5.17157C4 6.34315 4 8.22876 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C15.7712 20 17.6569 20 18.8284 18.8284C20 17.6569 20 15.7712 20 12Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M9 12L15 12'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 9L12 15'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatAltAddDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M9 12L15 12'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 9L12 15'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatAltAddFillOne: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5V12C21 7.02944 16.9706 3 12 3ZM12 16.0002C11.4477 16.0002 11 15.5525 11 15.0002V13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H11V9.00024C11 8.44795 11.4477 8.00024 12 8.00024C12.5523 8.00024 13 8.44795 13 9.00024V11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H13V15.0002C13 15.5525 12.5523 16.0002 12 16.0002Z'
      fill={color}
    />
  </svg>
)

export const ChatAltAddFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M20.5433 6.7039C21 7.80653 21 9.20435 21 12C21 14.7956 21 16.1935 20.5433 17.2961C19.9343 18.7663 18.7663 19.9343 17.2961 20.5433C16.1935 21 14.7956 21 12 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15V12C3 9.20435 3 7.80653 3.45672 6.7039C4.06569 5.23373 5.23373 4.06569 6.7039 3.45672C7.80653 3 9.20435 3 12 3C14.7956 3 16.1935 3 17.2961 3.45672C18.7663 4.06569 19.9343 5.23373 20.5433 6.7039ZM12 8.00014C12.5523 8.00014 13 8.44786 13 9.00014V10.9997H15C15.5523 10.9997 16 11.4474 16 11.9997C16 12.5519 15.5523 12.9997 15 12.9997H13V15.0001C13 15.5524 12.5523 16.0001 12 16.0001C11.4477 16.0001 11 15.5524 11 15.0001V12.9997H9C8.44772 12.9997 8 12.5519 8 11.9997C8 11.4474 8.44772 10.9997 9 10.9997H11V9.00014C11 8.44786 11.4477 8.00014 12 8.00014Z'
      fill={color}
    />
  </svg>
)

export const ChatAltAddLightOne: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 12C20 8.22876 20 6.34315 18.8284 5.17157C17.6569 4 15.7712 4 12 4V4C8.22876 4 6.34315 4 5.17157 5.17157C4 6.34315 4 8.22876 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C15.7712 20 17.6569 20 18.8284 18.8284C20 17.6569 20 15.7712 20 12V12Z'
      stroke={color}
    />
    <path d='M9 12L15 12' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 9L12 15' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const ChatAltAddLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12Z'
      stroke={color}
    />
    <path d='M9 12L15 12' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 9L12 15' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const ChatAltDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 12C20 9.19974 20 7.79961 19.455 6.73005C18.9757 5.78924 18.2108 5.02433 17.27 4.54497C16.2004 4 14.8003 4 12 4C9.19974 4 7.79961 4 6.73005 4.54497C5.78924 5.02433 5.02433 5.78924 4.54497 6.73005C4 7.79961 4 9.19974 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C14.8003 20 16.2004 20 17.27 19.455C18.2108 18.9757 18.9757 18.2108 19.455 17.27C20 16.2004 20 14.8003 20 12Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M8.5 10.5L15.5 10.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 13.5L13.5 13.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const ChatAltDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 12C20 8.22876 20 6.34315 18.8284 5.17157C17.6569 4 15.7712 4 12 4C8.22876 4 6.34315 4 5.17157 5.17157C4 6.34315 4 8.22876 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C15.7712 20 17.6569 20 18.8284 18.8284C20 17.6569 20 15.7712 20 12Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M9 10L15 10'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 14H12'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatAltFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M20.5433 6.7039C21 7.80653 21 9.20435 21 12C21 14.7956 21 16.1935 20.5433 17.2961C19.9343 18.7663 18.7663 19.9343 17.2961 20.5433C16.1935 21 14.7956 21 12 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15V12C3 9.20435 3 7.80653 3.45672 6.7039C4.06569 5.23373 5.23373 4.06569 6.7039 3.45672C7.80653 3 9.20435 3 12 3C14.7956 3 16.1935 3 17.2961 3.45672C18.7663 4.06569 19.9343 5.23373 20.5433 6.7039ZM8 9.99966C8 9.44738 8.44772 8.99966 9 8.99966H15C15.5523 8.99966 16 9.44738 16 9.99966C16 10.5519 15.5523 10.9997 15 10.9997H9C8.44772 10.9997 8 10.5519 8 9.99966ZM8 13.9997C8 13.4474 8.44772 12.9997 9 12.9997H12C12.5523 12.9997 13 13.4474 13 13.9997C13 14.5519 12.5523 14.9997 12 14.9997H9C8.44772 14.9997 8 14.5519 8 13.9997Z'
      fill={color}
    />
  </svg>
)

export const ChatAltLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 12C20 8.22876 20 6.34315 18.8284 5.17157C17.6569 4 15.7712 4 12 4V4C8.22876 4 6.34315 4 5.17157 5.17157C4 6.34315 4 8.22876 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C15.7712 20 17.6569 20 18.8284 18.8284C20 17.6569 20 15.7712 20 12V12Z'
      stroke={color}
    />
    <path d='M9 10L15 10' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 14H12' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const ChatDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V18.6667C20 18.9767 20 19.1317 19.9659 19.2588C19.8735 19.6039 19.6039 19.8735 19.2588 19.9659C19.1317 20 18.9767 20 18.6667 20H12C7.58172 20 4 16.4183 4 12Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M8.5 10.5L15.5 10.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 13.5L13.5 13.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const ChatDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M9 11L15 11'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15H15'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5V12C21 7.02944 16.9706 3 12 3ZM8 11C8 10.4477 8.44772 10 9 10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H9C8.44772 12 8 11.5523 8 11ZM11 15C11 14.4477 11.4477 14 12 14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H12C11.4477 16 11 15.5523 11 15Z'
      fill={color}
    />
  </svg>
)

export const ChatLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12Z'
      stroke={color}
    />
    <path d='M9 11L15 11' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 15H15' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const ChatPlusOne: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 4V4C8.22876 4 6.34315 4 5.17157 5.17157C4 6.34315 4 8.22876 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C15.7712 20 17.6569 20 18.8284 18.8284C20 17.6569 20 15.7712 20 12V12'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M9 10L15 10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 14H12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 8L19 2M16 5H22'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatPlus: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M9 11L15 11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 8L5 2'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2 5L8 5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15H15'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatPlusDuotoneOne: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 12C20 9.19974 20 7.79961 19.455 6.73005C18.9757 5.78924 18.2108 5.02433 17.27 4.54497C16.2004 4 14.8003 4 12 4C9.19974 4 7.79961 4 6.73005 4.54497C5.78924 5.02433 5.02433 5.78924 4.54497 6.73005C4 7.79961 4 9.19974 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C14.8003 20 16.2004 20 17.27 19.455C18.2108 18.9757 18.9757 18.2108 19.455 17.27C20 16.2004 20 14.8003 20 12Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M8.5 12.5L15.5 12.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 15.5L13.5 15.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M17.5 3.5V9.5' stroke={color} strokeLinecap='round' />
    <path d='M14.5 6.5H20.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const ChatPlusDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V18.6667C20 18.9767 20 19.1317 19.9659 19.2588C19.8735 19.6039 19.6039 19.8735 19.2588 19.9659C19.1317 20 18.9767 20 18.6667 20H12C7.58172 20 4 16.4183 4 12Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M9.5 10.5L15.5 10.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.5 13.5H13.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.5 3.5V9.5' stroke={color} strokeLinecap='round' />
    <path d='M3.5 6.5H9.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const ChatPlusDuotoneLineOne: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 4V4C8.22876 4 6.34315 4 5.17157 5.17157C4 6.34315 4 8.22876 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C15.7712 20 17.6569 20 18.8284 18.8284C20 17.6569 20 15.7712 20 12V12'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M9 10L15 10'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 14H12'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 8L19 2M16 5H22'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatPlusDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M9 11L15 11'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 8L5 2'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2 5L8 5'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15H15'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatPlusFillOne: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M5 8L5 2'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.2697 9.80446C3.09354 10.5072 3 11.2427 3 12C3 16.9706 7.02944 21 12 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5V12C21 7.02944 16.9706 3 12 3C11.2427 3 10.5072 3.09354 9.80446 3.2697C10.2353 3.71885 10.5 4.32851 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5H7.5V8C7.5 9.38071 6.38071 10.5 5 10.5C4.32851 10.5 3.71885 10.2353 3.2697 9.80446ZM9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H9ZM12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16H15C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14H12Z'
      fill={color}
    />
    <path
      d='M2 5L8 5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatPlusFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M13.7586 3.00598C13.2404 3 12.6591 3 12 3C9.20435 3 7.80653 3 6.7039 3.45672C5.23373 4.06569 4.06569 5.23373 3.45672 6.7039C3 7.80653 3 9.20435 3 12V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H12C14.7956 21 16.1935 21 17.2961 20.5433C18.7663 19.9343 19.9343 18.7663 20.5433 17.2961C21 16.1935 21 14.7956 21 12C21 11.3409 21 10.7596 20.994 10.2414C20.464 10.7133 19.7655 11 19 11C17.3431 11 16 9.65685 16 8C14.3431 8 13 6.65685 13 5C13 4.23453 13.2867 3.53602 13.7586 3.00598ZM9 8.99966C8.44772 8.99966 8 9.44738 8 9.99966C8 10.5519 8.44772 10.9997 9 10.9997H15C15.5523 10.9997 16 10.5519 16 9.99966C16 9.44738 15.5523 8.99966 15 8.99966H9ZM9 12.9997C8.44772 12.9997 8 13.4474 8 13.9997C8 14.5519 8.44772 14.9997 9 14.9997H12C12.5523 14.9997 13 14.5519 13 13.9997C13 13.4474 12.5523 12.9997 12 12.9997H9Z'
      fill={color}
    />
    <path
      d='M19 8L19 2M16 5H22'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChatPlusLightOne: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12.875 5V5C9.22524 5 7.40037 5 6.24184 6.10301C6.19443 6.14814 6.14814 6.19443 6.10301 6.24184C5 7.40037 5 9.22524 5 12.875V17C5 17.9428 5 18.4142 5.29289 18.7071C5.58579 19 6.05719 19 7 19H11.125C14.7748 19 16.5996 19 17.7582 17.897C17.8056 17.8519 17.8519 17.8056 17.897 17.7582C19 16.5996 19 14.7748 19 11.125V11.125'
      stroke={color}
    />
    <path d='M9 10L15 10' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 14H12' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M19 8L19 2M16 5H22' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const ChatPlusLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 5V5C15.866 5 19 8.13401 19 12V16.4545C19 16.9615 19 17.215 18.9543 17.4251C18.7879 18.1902 18.1902 18.7879 17.4251 18.9543C17.215 19 16.9615 19 16.4545 19H12C8.13401 19 5 15.866 5 12V12'
      stroke={color}
    />
    <path d='M9 11L15 11' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 8L5 2' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2 5L8 5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 15H15' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const ChatSearch: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M11.4615 20H4C3.44772 20 3 19.5523 3 19V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V11.3846'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 14H10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 10H13'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx='16.5' cy='15.5' r='2.5' stroke={color} strokeWidth='2' />
    <path d='M18.5 17.5L21.5 20.5' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const ChatSearchDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 12C20 9.19974 20 7.79961 19.455 6.73005C18.9757 5.78924 18.2108 5.02433 17.27 4.54497C16.2004 4 14.8003 4 12 4C9.19974 4 7.79961 4 6.73005 4.54497C5.78924 5.02433 5.02433 5.78924 4.54497 6.73005C4 7.79961 4 9.19974 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C14.8003 20 16.2004 20 17.27 19.455C18.2108 18.9757 18.9757 18.2108 19.455 17.27C20 16.2004 20 14.8003 20 12Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M8.5 8.5L15.5 8.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 11.5L13.5 11.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <circle cx='16.5' cy='15.5' r='2' stroke={color} />
    <path d='M19 18L20.5 19.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const ChatSearchDuotoneLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M14.5 18.5H6.5C5.94772 18.5 5.5 18.0523 5.5 17.5V9.5C5.5 7.29086 7.29086 5.5 9.5 5.5H14.5C16.7091 5.5 18.5 7.29086 18.5 9.5V11.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M7.5 10.5L14.5 10.5'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.5 13.5L12.5 13.5'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx='16.5' cy='15.5' r='2' stroke={color} />
    <path d='M19 18L20.5 19.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const ChatSearchFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='17' cy='16' r='2.5' stroke={color} strokeWidth='2' />
    <path d='M19 18L21 20' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 10.2C2 7.67976 2 6.41965 2.49047 5.45704C2.9219 4.61031 3.61031 3.9219 4.45704 3.49047C5.41965 3 6.67976 3 9.2 3H14.8C17.3202 3 18.5804 3 19.543 3.49047C20.3897 3.9219 21.0781 4.61031 21.5095 5.45704C22 6.41965 22 7.67976 22 10.2V13.7055C21.1304 11.8136 19.2186 10.5 17 10.5C13.9624 10.5 11.5 12.9624 11.5 16C11.5 18.2186 12.8136 20.1304 14.7055 21H5.2C4.0799 21 3.51984 21 3.09202 20.782C2.71569 20.5903 2.40973 20.2843 2.21799 19.908C2 19.4802 2 18.9201 2 17.8V10.2ZM6 10C6 9.44772 6.44772 9 7 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H7C6.44772 11 6 10.5523 6 10ZM6 14C6 13.4477 6.44772 13 7 13H10C10.5523 13 11 13.4477 11 14C11 14.5523 10.5523 15 10 15H7C6.44772 15 6 14.5523 6 14Z'
      fill={color}
    />
  </svg>
)

export const ChatSearchLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M14.5 18.5H6.5C5.94772 18.5 5.5 18.0523 5.5 17.5V9.5C5.5 7.29086 7.29086 5.5 9.5 5.5H14.5C16.7091 5.5 18.5 7.29086 18.5 9.5V11.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M7.5 10.5L14.5 10.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.5 13.5L12.5 13.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <circle cx='16.5' cy='15.5' r='2' stroke={color} />
    <path d='M19 18L20.5 19.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const Comment: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4.32698 6.63803L5.21799 7.09202L4.32698 6.63803ZM4.7682 20.2318L4.06109 19.5247H4.06109L4.7682 20.2318ZM18.362 16.673L18.816 17.564L18.816 17.564L18.362 16.673ZM19.673 15.362L20.564 15.816L20.564 15.816L19.673 15.362ZM19.673 6.63803L20.564 6.18404L20.564 6.18404L19.673 6.63803ZM18.362 5.32698L18.816 4.43597L18.816 4.43597L18.362 5.32698ZM5.63803 5.32698L6.09202 6.21799L5.63803 5.32698ZM7.70711 17.2929L7 16.5858L7.70711 17.2929ZM5 9.8C5 8.94342 5.00078 8.36113 5.03755 7.91104C5.07337 7.47262 5.1383 7.24842 5.21799 7.09202L3.43597 6.18404C3.18868 6.66937 3.09012 7.18608 3.04419 7.74817C2.99922 8.2986 3 8.97642 3 9.8H5ZM5 12V9.8H3V12H5ZM3 12V17H5V12H3ZM3 17V19.9136H5V17H3ZM3 19.9136C3 21.2054 4.56185 21.8524 5.4753 20.9389L4.06109 19.5247C4.40757 19.1782 5 19.4236 5 19.9136H3ZM5.4753 20.9389L8.41421 18L7 16.5858L4.06109 19.5247L5.4753 20.9389ZM15.2 16H8.41421V18H15.2V16ZM17.908 15.782C17.7516 15.8617 17.5274 15.9266 17.089 15.9624C16.6389 15.9992 16.0566 16 15.2 16V18C16.0236 18 16.7014 18.0008 17.2518 17.9558C17.8139 17.9099 18.3306 17.8113 18.816 17.564L17.908 15.782ZM18.782 14.908C18.5903 15.2843 18.2843 15.5903 17.908 15.782L18.816 17.564C19.5686 17.1805 20.1805 16.5686 20.564 15.816L18.782 14.908ZM19 12.2C19 13.0566 18.9992 13.6389 18.9624 14.089C18.9266 14.5274 18.8617 14.7516 18.782 14.908L20.564 15.816C20.8113 15.3306 20.9099 14.8139 20.9558 14.2518C21.0008 13.7014 21 13.0236 21 12.2H19ZM19 9.8V12.2H21V9.8H19ZM18.782 7.09202C18.8617 7.24842 18.9266 7.47262 18.9624 7.91104C18.9992 8.36113 19 8.94342 19 9.8H21C21 8.97642 21.0008 8.2986 20.9558 7.74817C20.9099 7.18608 20.8113 6.66937 20.564 6.18404L18.782 7.09202ZM17.908 6.21799C18.2843 6.40973 18.5903 6.71569 18.782 7.09202L20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597L17.908 6.21799ZM15.2 6C16.0566 6 16.6389 6.00078 17.089 6.03755C17.5274 6.07337 17.7516 6.1383 17.908 6.21799L18.816 4.43597C18.3306 4.18868 17.8139 4.09012 17.2518 4.04419C16.7014 3.99922 16.0236 4 15.2 4V6ZM8.8 6H15.2V4H8.8V6ZM6.09202 6.21799C6.24842 6.1383 6.47262 6.07337 6.91104 6.03755C7.36113 6.00078 7.94342 6 8.8 6V4C7.97642 4 7.2986 3.99922 6.74817 4.04419C6.18608 4.09012 5.66937 4.18868 5.18404 4.43597L6.09202 6.21799ZM5.21799 7.09202C5.40973 6.71569 5.71569 6.40973 6.09202 6.21799L5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404L5.21799 7.09202ZM8.41421 18V16C7.88378 16 7.37507 16.2107 7 16.5858L8.41421 18Z'
      fill={color}
    />
    <path
      d='M8 9L16 9'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 13L13 13'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const CommentDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M5.17157 6.17157C4 7.34315 4 9.22876 4 13V17V18.5858C4 19.4767 5.07714 19.9229 5.70711 19.2929L7.85355 17.1464C7.92581 17.0742 7.96194 17.0381 8.00788 17.019C8.05383 17 8.10492 17 8.20711 17H14C15.8638 17 16.7956 17 17.5307 16.6955C18.5108 16.2895 19.2895 15.5108 19.6955 14.5307C20 13.7956 20 12.8638 20 11C20 9.13623 20 8.20435 19.6955 7.46927C19.2895 6.48915 18.5108 5.71046 17.5307 5.30448C16.7956 5 15.8638 5 14 5H12C8.22876 5 6.34315 5 5.17157 6.17157Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M8.5 9.5L15.5 9.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 12.5L13.5 12.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const CommentDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4.82698 7.13803L5.27248 7.36502L4.82698 7.13803ZM5.2682 18.7318L5.62175 19.0854H5.62175L5.2682 18.7318ZM17.862 16.173L17.635 15.7275L17.862 16.173ZM19.173 14.862L18.7275 14.635L19.173 14.862ZM19.173 7.13803L18.7275 7.36502V7.36502L19.173 7.13803ZM17.862 5.82698L18.089 5.38148V5.38148L17.862 5.82698ZM6.13803 5.82698L6.36502 6.27248L6.13803 5.82698ZM7.20711 16.7929L7.56066 17.1464L7.20711 16.7929ZM5 10.3C5 9.45167 5.00039 8.84549 5.03921 8.37032C5.07756 7.90099 5.15089 7.60366 5.27248 7.36502L4.38148 6.91103C4.17609 7.31413 4.08593 7.75771 4.04253 8.28889C3.99961 8.81423 4 9.46817 4 10.3H5ZM5 11.5V10.3H4V11.5H5ZM4 11.5V16.5H5V11.5H4ZM4 16.5V18.4136H5V16.5H4ZM4 18.4136C4 19.26 5.02329 19.6838 5.62175 19.0854L4.91465 18.3782C4.91754 18.3753 4.92812 18.368 4.94323 18.3654C4.9556 18.3632 4.96421 18.3654 4.96913 18.3674C4.97406 18.3695 4.98164 18.374 4.98888 18.3843C4.99771 18.3968 5 18.4095 5 18.4136H4ZM5.62175 19.0854L7.56066 17.1464L6.85355 16.4393L4.91465 18.3782L5.62175 19.0854ZM14.7 16H7.91421V17H14.7V16ZM17.635 15.7275C17.3963 15.8491 17.099 15.9224 16.6297 15.9608C16.1545 15.9996 15.5483 16 14.7 16V17C15.5318 17 16.1858 17.0004 16.7111 16.9575C17.2423 16.9141 17.6859 16.8239 18.089 16.6185L17.635 15.7275ZM18.7275 14.635C18.4878 15.1054 18.1054 15.4878 17.635 15.7275L18.089 16.6185C18.7475 16.283 19.283 15.7475 19.6185 15.089L18.7275 14.635ZM19 11.7C19 12.5483 18.9996 13.1545 18.9608 13.6297C18.9224 14.099 18.8491 14.3963 18.7275 14.635L19.6185 15.089C19.8239 14.6859 19.9141 14.2423 19.9575 13.7111C20.0004 13.1858 20 12.5318 20 11.7H19ZM19 10.3V11.7H20V10.3H19ZM18.7275 7.36502C18.8491 7.60366 18.9224 7.90099 18.9608 8.37032C18.9996 8.84549 19 9.45167 19 10.3H20C20 9.46817 20.0004 8.81423 19.9575 8.28889C19.9141 7.75771 19.8239 7.31413 19.6185 6.91103L18.7275 7.36502ZM17.635 6.27248C18.1054 6.51217 18.4878 6.89462 18.7275 7.36502L19.6185 6.91103C19.283 6.25247 18.7475 5.71703 18.089 5.38148L17.635 6.27248ZM14.7 6C15.5483 6 16.1545 6.00039 16.6297 6.03921C17.099 6.07756 17.3963 6.15089 17.635 6.27248L18.089 5.38148C17.6859 5.17609 17.2423 5.08593 16.7111 5.04253C16.1858 4.99961 15.5318 5 14.7 5V6ZM9.3 6H14.7V5H9.3V6ZM6.36502 6.27248C6.60366 6.15089 6.90099 6.07756 7.37032 6.03921C7.84549 6.00039 8.45167 6 9.3 6V5C8.46817 5 7.81423 4.99961 7.28889 5.04253C6.75771 5.08593 6.31413 5.17609 5.91103 5.38148L6.36502 6.27248ZM5.27248 7.36502C5.51217 6.89462 5.89462 6.51217 6.36502 6.27248L5.91103 5.38148C5.25247 5.71703 4.71703 6.25247 4.38148 6.91103L5.27248 7.36502ZM7.56066 17.1464C7.65443 17.0527 7.78161 17 7.91421 17V16C7.51639 16 7.13486 16.158 6.85355 16.4393L7.56066 17.1464Z'
      fill={color}
    />
    <path
      d='M8.5 9.5L15.5 9.5M8.5 12.5H13.5'
      stroke={color}
      strokeOpacity='0.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const CommentFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M3 10.4C3 8.15979 3 7.03969 3.43597 6.18404C3.81947 5.43139 4.43139 4.81947 5.18404 4.43597C6.03969 4 7.15979 4 9.4 4H14.6C16.8402 4 17.9603 4 18.816 4.43597C19.5686 4.81947 20.1805 5.43139 20.564 6.18404C21 7.03969 21 8.15979 21 10.4V11.6C21 13.8402 21 14.9603 20.564 15.816C20.1805 16.5686 19.5686 17.1805 18.816 17.564C17.9603 18 16.8402 18 14.6 18H7.41421C7.149 18 6.89464 18.1054 6.70711 18.2929L4.70711 20.2929C4.07714 20.9229 3 20.4767 3 19.5858V18V13V10.4ZM9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10H15C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8H9ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H12C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12H9Z'
      fill={color}
    />
  </svg>
)

export const CommentLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4.82698 7.13803L5.27248 7.36502L4.82698 7.13803ZM5.2682 18.7318L5.62175 19.0854H5.62175L5.2682 18.7318ZM17.862 16.173L17.635 15.7275L17.862 16.173ZM19.173 14.862L18.7275 14.635L19.173 14.862ZM19.173 7.13803L18.7275 7.36502V7.36502L19.173 7.13803ZM17.862 5.82698L18.089 5.38148V5.38148L17.862 5.82698ZM6.13803 5.82698L6.36502 6.27248L6.13803 5.82698ZM7.20711 16.7929L7.56066 17.1464L7.20711 16.7929ZM5 10.3C5 9.45167 5.00039 8.84549 5.03921 8.37032C5.07756 7.90099 5.15089 7.60366 5.27248 7.36502L4.38148 6.91103C4.17609 7.31413 4.08593 7.75771 4.04253 8.28889C3.99961 8.81423 4 9.46817 4 10.3H5ZM5 11.5V10.3H4V11.5H5ZM4 11.5V16.5H5V11.5H4ZM4 16.5V18.4136H5V16.5H4ZM4 18.4136C4 19.26 5.02329 19.6838 5.62175 19.0854L4.91465 18.3782C4.91754 18.3753 4.92812 18.368 4.94323 18.3654C4.9556 18.3632 4.96421 18.3654 4.96913 18.3674C4.97406 18.3695 4.98164 18.374 4.98888 18.3843C4.99771 18.3968 5 18.4095 5 18.4136H4ZM5.62175 19.0854L7.56066 17.1464L6.85355 16.4393L4.91465 18.3782L5.62175 19.0854ZM14.7 16H7.91421V17H14.7V16ZM17.635 15.7275C17.3963 15.8491 17.099 15.9224 16.6297 15.9608C16.1545 15.9996 15.5483 16 14.7 16V17C15.5318 17 16.1858 17.0004 16.7111 16.9575C17.2423 16.9141 17.6859 16.8239 18.089 16.6185L17.635 15.7275ZM18.7275 14.635C18.4878 15.1054 18.1054 15.4878 17.635 15.7275L18.089 16.6185C18.7475 16.283 19.283 15.7475 19.6185 15.089L18.7275 14.635ZM19 11.7C19 12.5483 18.9996 13.1545 18.9608 13.6297C18.9224 14.099 18.8491 14.3963 18.7275 14.635L19.6185 15.089C19.8239 14.6859 19.9141 14.2423 19.9575 13.7111C20.0004 13.1858 20 12.5318 20 11.7H19ZM19 10.3V11.7H20V10.3H19ZM18.7275 7.36502C18.8491 7.60366 18.9224 7.90099 18.9608 8.37032C18.9996 8.84549 19 9.45167 19 10.3H20C20 9.46817 20.0004 8.81423 19.9575 8.28889C19.9141 7.75771 19.8239 7.31413 19.6185 6.91103L18.7275 7.36502ZM17.635 6.27248C18.1054 6.51217 18.4878 6.89462 18.7275 7.36502L19.6185 6.91103C19.283 6.25247 18.7475 5.71703 18.089 5.38148L17.635 6.27248ZM14.7 6C15.5483 6 16.1545 6.00039 16.6297 6.03921C17.099 6.07756 17.3963 6.15089 17.635 6.27248L18.089 5.38148C17.6859 5.17609 17.2423 5.08593 16.7111 5.04253C16.1858 4.99961 15.5318 5 14.7 5V6ZM9.3 6H14.7V5H9.3V6ZM6.36502 6.27248C6.60366 6.15089 6.90099 6.07756 7.37032 6.03921C7.84549 6.00039 8.45167 6 9.3 6V5C8.46817 5 7.81423 4.99961 7.28889 5.04253C6.75771 5.08593 6.31413 5.17609 5.91103 5.38148L6.36502 6.27248ZM5.27248 7.36502C5.51217 6.89462 5.89462 6.51217 6.36502 6.27248L5.91103 5.38148C5.25247 5.71703 4.71703 6.25247 4.38148 6.91103L5.27248 7.36502ZM7.56066 17.1464C7.65443 17.0527 7.78161 17 7.91421 17V16C7.51639 16 7.13486 16.158 6.85355 16.4393L7.56066 17.1464Z'
      fill={color}
    />
    <path d='M8.5 9.5L15.5 9.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 12.5L13.5 12.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const Insta: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
    <circle cx='16.5' cy='7.5' r='1.5' fill={color} />
    <circle cx='12' cy='12' r='3' stroke={color} strokeWidth='2' />
  </svg>
)

export const InstaDuotone: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
    <circle cx='17' cy='7' r='1' fill={color} />
    <circle cx='12' cy='12' r='3' fill={color} />
  </svg>
)

export const InstaDuotoneLine: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3H11C7.22876 3 5.34315 3 4.17157 4.17157ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z'
      stroke={color}
      strokeWidth='1.2'
    />
    <circle cx='16.5' cy='7.5' r='1.5' fill={color} />
    <circle cx='12' cy='12' r='3.4' stroke={color} strokeWidth='1.2' />
  </svg>
)

export const InstaFill: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
      d='M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11ZM18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z'
      fill={color}
    />
  </svg>
)

export const InstaLight: React.FC<IconComponentProps> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
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
    />
    <circle cx='16.5' cy='7.5' r='1.5' fill={color} />
    <circle cx='12' cy='12' r='3.5' stroke={color} />
  </svg>
)
