import type { FC } from 'react'

import type { IconBaseProps } from '@/types/BaseProps'

export const IconLupe: FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
  >
    <circle cx='11' cy='11' r='7' stroke={color} strokeWidth='2' />
    <path
      d='M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M20 20L17 17' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const IconClose: FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    style={sx}
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill='none'
  >
    <path
      d='M15.9879 16.8849L21.9158 22.814C22.0349 22.9331 22.1965 23 22.3649 23C22.5333 23 22.6949 22.9331 22.814 22.814C22.9331 22.6948 23 22.5332 23 22.3647C23 22.1963 22.9331 22.0347 22.814 21.9156L16.8951 15.9956L22.8051 10.0845C22.9242 9.96534 22.991 9.80374 22.991 9.63527C22.991 9.46679 22.9242 9.30526 22.8051 9.18613C22.686 9.067 22.5243 9 22.3559 9C22.1875 9 22.026 9.067 21.9069 9.18613L15.9969 15.0972L10.0868 9.18606C9.96771 9.06693 9.8062 9.00004 9.63776 9.00004C9.46932 9.00004 9.30774 9.06693 9.18863 9.18606C9.06953 9.30518 9.00265 9.46679 9.00265 9.63526C9.00265 9.80373 9.06953 9.96527 9.18863 10.0844L15.0987 15.9956L9.17972 21.9156C9.12132 21.9747 9.07529 22.0449 9.04444 22.122C9.01359 22.1991 8.99857 22.2818 9.00011 22.3648C8.99976 22.5321 9.06411 22.6931 9.17972 22.814C9.29883 22.9331 9.46034 23 9.62878 23C9.79722 23 9.95879 22.9331 10.0779 22.814L15.9879 16.8849Z'
      fill={color}
    />
  </svg>
)

export const IconCodeTag: FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => (
  <svg
    stroke={color}
    fill={color}
    width={size}
    height={size}
    style={sx}
    className={className}
    strokeWidth='0'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z'></path>
  </svg>
)

export const IconCopy: FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => (
  <svg
    stroke={color}
    fill={color}
    width={size}
    height={size}
    style={sx}
    className={className}
    strokeWidth='0'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 4l1-1h5.414L14 6.586V14l-1 1H5l-1-1V4zm9 3l-3-3H5v10h8V7z'
    ></path>
    <path fillRule='evenodd' clipRule='evenodd' d='M3 1L2 2v10l1 1V2h6.414l-1-1H3z'></path>
  </svg>
)

export const IconRefresh: FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => (
  <svg
    stroke={color}
    fill={color}
    width={size}
    height={size}
    style={sx}
    className={className}
    strokeWidth='0'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.681 3H2V2h3.5l.5.5V6H5V4a5 5 0 1 0 4.53-.761l.302-.954A6 6 0 1 1 4.681 3z'
    ></path>
  </svg>
)

export const IconAdd: FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => (
  <svg
    stroke={color}
    fill={color}
    width={size}
    height={size}
    style={sx}
    className={className}
    strokeWidth='0'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M14 7v1H8v6H7V8H1V7h6V1h1v6h6z'></path>
  </svg>
)

export const IconSortAsc: FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => (
  <svg
    stroke={color}
    fill={color}
    width={size}
    height={size}
    style={sx}
    className={className}
    strokeWidth='0'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M18.5 17.25a.75.75 0 0 1-1.5 0V7.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L18.5 7.56v9.69Zm-15.75.25a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5h-9.5Zm0-5a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 0 1.5h-5.5Zm0-5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5h-3.5Z'></path>
  </svg>
)

export const IconSortDesc: FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => (
  <svg
    stroke={color}
    fill={color}
    width={size}
    height={size}
    style={sx}
    className={className}
    strokeWidth='0'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M18.5 16.44V6.75a.75.75 0 0 0-1.5 0v9.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22ZM2 7.25a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 2 7.25Zm0 5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z'></path>
  </svg>
)
