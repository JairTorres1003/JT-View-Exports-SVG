import type { FC } from 'react'

import type { IconBaseProps } from '@/types/BaseProps'

export const IconLupe: FC<IconBaseProps> = ({
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

export const IconClose: FC<IconBaseProps> = ({
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

export const IconCodeTag: FC<IconBaseProps> = ({
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
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z'></path>
  </svg>
)

export const IconCopy: FC<IconBaseProps> = ({
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
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 4l1-1h5.414L14 6.586V14l-1 1H5l-1-1V4zm9 3l-3-3H5v10h8V7z'
    ></path>
    <path fillRule='evenodd' clipRule='evenodd' d='M3 1L2 2v10l1 1V2h6.414l-1-1H3z'></path>
  </svg>
)

export const IconRefresh: FC<IconBaseProps> = ({
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
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.681 3H2V2h3.5l.5.5V6H5V4a5 5 0 1 0 4.53-.761l.302-.954A6 6 0 1 1 4.681 3z'
    ></path>
  </svg>
)

export const IconAdd: FC<IconBaseProps> = ({
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

export const IconSortAsc: FC<IconBaseProps> = ({
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
    <path d='M18.5 17.25a.75.75 0 0 1-1.5 0V7.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L18.5 7.56v9.69Zm-15.75.25a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5h-9.5Zm0-5a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 0 1.5h-5.5Zm0-5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5h-3.5Z'></path>
  </svg>
)

export const IconSortDesc: FC<IconBaseProps> = ({
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

export const IconGoToFile: FC<IconBaseProps> = ({
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
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6 5.914l2.06-2.06v-.708L5.915 1l-.707.707.043.043.25.25 1 1h-3a2.5 2.5 0 0 0 0 5H4V7h-.5a1.5 1.5 0 1 1 0-3h3L5.207 5.293 5.914 6 6 5.914zM11 2H8.328l-1-1H12l.71.29 3 3L16 5v9l-1 1H6l-1-1V6.5l1 .847V14h9V6h-4V2zm1 0v3h3l-3-3z'
    ></path>
  </svg>
)

export const IconGoToManyFiles: FC<IconBaseProps> = ({
  className = '',
  color = 'currentcolor',
  size = 32,
  sx = {},
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    style={sx}
    className={className}
    viewBox='0 0 200 200'
    fill='none'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M87.5 0.5L99 12H133.801V49.5H171.331V138H70.5V75L58.5 63.4253V137.5L70.8325 149.5H121.3V188H20.5V91.5C14.5709 88.4197 12.0109 86.205 8.5 80V188L20.5 199.5H121.3L133 188V149.5H172L183 138V38L145.5 0.5H87.5ZM145.5 38V16.5L167 38H145.5Z'
      fill={color}
    />
    <path
      d='M98.2375 35.675L72.4875 61.425L71.4125 62.5L62.575 53.6625L78.7375 37.5H41.2375C38.7752 37.5 36.337 37.985 34.0622 38.9273C31.7873 39.8695 29.7203 41.2506 27.9792 42.9917C26.2381 44.7328 24.857 46.7998 23.9148 49.0747C22.9725 51.3495 22.4875 53.7877 22.4875 56.25C22.4875 58.7123 22.9725 61.1505 23.9148 63.4253C24.857 65.7002 26.2381 67.7672 27.9792 69.5083C29.7203 71.2494 31.7873 72.6305 34.0622 73.5727C36.337 74.515 38.7752 75 41.2375 75H47.4875V87.5H41.25C32.962 87.5 25.0134 84.2076 19.1529 78.3471C13.2924 72.4866 10 64.538 10 56.25C10 47.962 13.2924 40.0134 19.1529 34.1529C25.0134 28.2924 32.962 25 41.25 25H78.75L66.25 12.5L63.125 9.375L62.5875 8.8375L71.425 0L98.2375 26.825V35.675Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M87.5 0.5L99 12H133.801V49.5H171.331V138H70.5V75L58.5 63.4253V137.5L70.8325 149.5H121.3V188H20.5V91.5C14.5709 88.4197 12.0109 86.205 8.5 80V188L20.5 199.5H121.3L133 188V149.5H172L183 138V38L145.5 0.5H87.5ZM145.5 38V16.5L167 38H145.5Z'
      stroke={color}
    />
    <path
      d='M98.2375 35.675L72.4875 61.425L71.4125 62.5L62.575 53.6625L78.7375 37.5H41.2375C38.7752 37.5 36.337 37.985 34.0622 38.9273C31.7873 39.8695 29.7203 41.2506 27.9792 42.9917C26.2381 44.7328 24.857 46.7998 23.9148 49.0747C22.9725 51.3495 22.4875 53.7877 22.4875 56.25C22.4875 58.7123 22.9725 61.1505 23.9148 63.4253C24.857 65.7002 26.2381 67.7672 27.9792 69.5083C29.7203 71.2494 31.7873 72.6305 34.0622 73.5727C36.337 74.515 38.7752 75 41.2375 75H47.4875V87.5H41.25C32.962 87.5 25.0134 84.2076 19.1529 78.3471C13.2924 72.4866 10 64.538 10 56.25C10 47.962 13.2924 40.0134 19.1529 34.1529C25.0134 28.2924 32.962 25 41.25 25H78.75L66.25 12.5L63.125 9.375L62.5875 8.8375L71.425 0L98.2375 26.825V35.675Z'
      stroke={color}
    />
  </svg>
)
