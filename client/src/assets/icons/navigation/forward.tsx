import type { IconBaseProps } from '@/types/BaseProps'

const IconForward: React.FC<IconBaseProps> = ({
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
      d='M13.2871 22.5C13.1552 22.4981 13.0294 22.4442 12.9371 22.3501C12.8448 22.255 12.7932 22.1277 12.7932 21.9953C12.7932 21.8628 12.8448 21.7356 12.9371 21.6405L18.5871 16.0035L12.9371 10.3566C12.8429 10.2625 12.79 10.1349 12.79 10.0018C12.79 9.86869 12.8429 9.74106 12.9371 9.64696C13.0312 9.55286 13.1589 9.5 13.2921 9.5C13.4252 9.5 13.5529 9.55286 13.6471 9.64696L19.9971 16.0035L13.6471 22.3501C13.5517 22.4458 13.4222 22.4997 13.2871 22.5Z'
      fill={color}
    />
  </svg>
)

export default IconForward
