import { type FC } from 'react'

import { type IconBaseProps } from '@/interfaces/misc'

export const IconLupe: FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => {
  return (
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
}

export const IconClose: FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill={color}
      height={size}
      stroke={color}
      strokeWidth='0'
      style={sx}
      viewBox='0 0 512 512'
      width={size}
    >
      <path d='M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z'></path>
    </svg>
  )
}
