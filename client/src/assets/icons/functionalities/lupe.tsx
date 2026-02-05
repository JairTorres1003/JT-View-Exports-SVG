import type { IconBaseProps } from '@/types/BaseProps'

const IconLupe: React.FC<IconBaseProps> = ({
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

export default IconLupe
