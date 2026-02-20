import type { IconBaseProps } from '@/types/BaseProps'

const IconPlus: React.FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => (
  <svg
    width={size}
    height={size}
    fill='none'
    style={sx}
    className={className}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M28 15.0769V16.9231H16.9231V28H15.0769V16.9231H4V15.0769H15.0769V4H16.9231V15.0769H28Z'
      fill={color}
    />
  </svg>
)

export default IconPlus
