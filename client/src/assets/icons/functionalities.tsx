import type { FC } from 'react'

import type { IconBaseProps } from '@/interfaces/misc'

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
