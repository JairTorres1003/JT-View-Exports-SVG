import type { IconBaseProps } from '@/types/BaseProps'

const IconAnyFile: React.FC<IconBaseProps> = ({
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
    strokeWidth='0'
    viewBox='0 0 44 44'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M27.4997 3.6665H10.9997C10.0272 3.6665 9.09458 4.05281 8.40695 4.74045C7.71932 5.42808 7.33301 6.36071 7.33301 7.33317V36.6665C7.33301 37.639 7.71932 38.5716 8.40695 39.2592C9.09458 39.9469 10.0272 40.3332 10.9997 40.3332H32.9997C33.9721 40.3332 34.9048 39.9469 35.5924 39.2592C36.28 38.5716 36.6663 37.639 36.6663 36.6665V12.8332L27.4997 3.6665Z'
      fill='none'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M25.667 3.6665V10.9998C25.667 11.9723 26.0533 12.9049 26.7409 13.5926C27.4286 14.2802 28.3612 14.6665 29.3337 14.6665H36.667'
      fill='none'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default IconAnyFile
