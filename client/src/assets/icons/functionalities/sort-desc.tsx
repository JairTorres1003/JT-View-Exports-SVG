import type { IconBaseProps } from '@/types/BaseProps'

const IconSortDesc: React.FC<IconBaseProps> = ({
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

export default IconSortDesc
