import type { IconBaseProps } from '@/types/BaseProps'

const IconDown: React.FC<IconBaseProps> = ({
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
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16.007 19.997L22.357 13.647C22.4512 13.5529 22.5041 13.4252 22.5041 13.292C22.5041 13.1589 22.4512 13.0312 22.357 12.937C22.2629 12.8429 22.1352 12.79 22.002 12.79C21.8689 12.79 21.7412 12.8429 21.647 12.937L16.007 18.587L10.357 12.937C10.2629 12.8429 10.1352 12.79 10.002 12.79C9.86889 12.79 9.7412 12.8429 9.64705 12.937C9.5529 13.0312 9.5 13.1589 9.5 13.292C9.5 13.4252 9.5529 13.5529 9.64705 13.647L16.007 19.997Z'
      fill={color}
    />
  </svg>
)

export default IconDown
