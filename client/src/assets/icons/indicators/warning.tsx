import type { IconBaseProps } from '@/types/BaseProps'

const IconWarning: React.FC<IconBaseProps> = ({
  size = 32,
  className = '',
  color = 'currentColor',
  sx = {},
}) => (
  <svg
    style={sx}
    width={size}
    height={size}
    className={className}
    stroke={color}
    fill={color}
    strokeWidth='0'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z'
    ></path>
  </svg>
)

export default IconWarning
