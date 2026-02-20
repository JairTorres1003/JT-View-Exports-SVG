import type { IconBaseProps } from '@/types/BaseProps'

const IconKebabHorizontal: React.FC<IconBaseProps> = ({
  size = 32,
  className = '',
  color = 'currentColor',
  sx = {},
}) => (
  <svg
    style={sx}
    width={size}
    height={size}
    fill={color}
    stroke={color}
    className={className}
    strokeWidth='0'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M20 14a2 2 0 1 1-.001-3.999A2 2 0 0 1 20 14ZM6 12a2 2 0 1 1-3.999.001A2 2 0 0 1 6 12Zm8 0a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12Z'></path>
  </svg>
)

export default IconKebabHorizontal
