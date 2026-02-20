import type { IconBaseProps } from '@/types/BaseProps'

const IconClose: React.FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => (
  <svg
    stroke={color}
    fill={color}
    strokeWidth='0'
    className={className}
    style={sx}
    viewBox='0 0 16 16'
    width={size}
    height={size}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z'
    />
  </svg>
)

export default IconClose
