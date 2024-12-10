/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const Materials = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 7L10 3L21 7M3 7V12L14 16L21 12V7M3 7L14 11L21 7'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path d='M3 12V17L14 21L21 17V12' stroke={color} strokeWidth='2' strokeLinejoin='round' />
  </svg>
)

export const MaterialsLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 7L10 3L21 7M3 7V12L14 16L21 12V7M3 7L14 11L21 7'
      stroke={color}
      strokeLinejoin='round'
    />
    <path d='M3 12V17L14 21L21 17V12' stroke={color} strokeLinejoin='round' />
  </svg>
)

export const Pressure = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20.6933 17.3294C21.0506 15.9959 21.0964 14.5982 20.8271 13.2442C20.5577 11.8902 19.9806 10.6164 19.1402 9.52115C18.2998 8.42593 17.2187 7.53872 15.9806 6.92815C14.7425 6.31757 13.3805 6 12 6C10.6195 6 9.25752 6.31757 8.0194 6.92815C6.78128 7.53872 5.70021 8.42593 4.85982 9.52115C4.01943 10.6164 3.44225 11.8902 3.17293 13.2442C2.90361 14.5982 2.94937 15.9959 3.30667 17.3294'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M12.7657 15.5823C13.2532 16.2916 12.9104 17.3738 12 17.9994C11.0897 18.625 9.95652 18.5571 9.46906 17.8477C8.94955 17.0917 7.15616 12.8409 6.06713 10.2114C5.86203 9.71621 6.4677 9.3 6.85648 9.669C8.92077 11.6283 12.2462 14.8263 12.7657 15.5823Z'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M12 6V8' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M5.63599 8.63574L7.0502 10.05' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M18.364 8.63574L16.9498 10.05' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M20.6934 17.3291L18.7615 16.8115'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M3.30664 17.3291L5.23849 16.8115'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const PressureLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20.6933 17.3294C21.0506 15.9959 21.0964 14.5982 20.8271 13.2442C20.5577 11.8902 19.9806 10.6164 19.1402 9.52115C18.2998 8.42593 17.2187 7.53872 15.9806 6.92815C14.7425 6.31757 13.3805 6 12 6C10.6195 6 9.25752 6.31757 8.0194 6.92815C6.78128 7.53872 5.70021 8.42593 4.85982 9.52115C4.01943 10.6164 3.44225 11.8902 3.17293 13.2442C2.90361 14.5982 2.94937 15.9959 3.30667 17.3294'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M12.7657 15.5823C13.2532 16.2916 12.9104 17.3738 12 17.9994C11.0897 18.625 9.95652 18.5571 9.46906 17.8477C8.94955 17.0917 7.15616 12.8409 6.06713 10.2114C5.86203 9.71621 6.4677 9.3 6.85648 9.669C8.92077 11.6283 12.2462 14.8263 12.7657 15.5823Z'
      stroke={color}
    />
    <path d='M12 6V8' stroke={color} strokeLinecap='round' />
    <path d='M5.63599 8.63574L7.0502 10.05' stroke={color} strokeLinecap='round' />
    <path d='M18.364 8.63574L16.9498 10.05' stroke={color} strokeLinecap='round' />
    <path d='M20.6934 17.3291L18.7615 16.8115' stroke={color} strokeLinecap='round' />
    <path d='M3.30664 17.3291L5.23849 16.8115' stroke={color} strokeLinecap='round' />
  </svg>
)

export const Turbine = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg width='26' height='24' viewBox='0 0 26 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M14.7007 11.0181L19.2393 8.39775C19.6198 8.17808 20.1063 8.30844 20.326 8.68892L20.4227 8.85641C21.0482 9.93988 21.0715 11.2692 20.4842 12.3739C19.7688 13.7197 18.1343 14.283 16.7416 13.6637L14.7944 12.7979C14.0476 12.4658 13.9929 11.4268 14.7007 11.0181Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M14.7008 12.9818L19.2394 15.6022C19.6199 15.8219 19.7503 16.3084 19.5306 16.6889L19.4339 16.8563C18.8084 17.9398 17.6688 18.6246 16.4185 18.6684C14.8952 18.7217 13.5902 17.5879 13.4301 16.0722L13.2063 13.9529C13.1205 13.1401 13.993 12.5732 14.7008 12.9818Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M13 13.9638V19.2045C13 19.6438 12.6438 20 12.2045 20H12.0111C10.76 20 9.59719 19.3555 8.93412 18.2946C8.12631 17.0021 8.45569 15.305 9.68835 14.4085L11.4118 13.155C12.0728 12.6743 13 13.1465 13 13.9638Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M11.2993 12.9819L6.7607 15.6023C6.38022 15.8219 5.8937 15.6916 5.67403 15.3111L5.57733 15.1436C4.95179 14.0601 4.92852 12.7308 5.51577 11.6261C6.2312 10.2803 7.86566 9.71699 9.25835 10.3363L11.2056 11.2021C11.9524 11.5342 12.0071 12.5732 11.2993 12.9819Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M11.2991 11.018L6.76045 8.39763C6.37997 8.17796 6.24961 7.69144 6.46928 7.31096L6.56598 7.14347C7.19152 6.06 8.33109 5.37521 9.58141 5.33143C11.1046 5.27809 12.4097 6.41192 12.5698 7.92767L12.7935 10.047C12.8794 10.8597 12.0069 11.4266 11.2991 11.018Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M13 10.0362V4.79549C13 4.35616 13.3562 4 13.7955 4H13.9889C15.24 4 16.4028 4.6445 17.0659 5.70541C17.8737 6.99791 17.5443 8.69505 16.3117 9.59153L14.5882 10.845C13.9272 11.3257 13 10.8535 13 10.0362Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const TurbineLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M13.7007 11.0181L18.2393 8.39775C18.6198 8.17808 19.1063 8.30844 19.326 8.68892L19.4227 8.85641C20.0482 9.93988 20.0715 11.2692 19.4842 12.3739C18.7688 13.7197 17.1343 14.283 15.7416 13.6637L13.7944 12.7979C13.0476 12.4658 12.9929 11.4268 13.7007 11.0181Z'
      stroke={color}
    />
    <path
      d='M12 13.9638V19.2045C12 19.6438 11.6438 20 11.2045 20H11.0111C9.76002 20 8.59719 19.3555 7.93412 18.2946C7.12631 17.0021 7.45569 15.305 8.68835 14.4085L10.4118 13.155C11.0728 12.6743 12 13.1465 12 13.9638Z'
      stroke={color}
    />
    <path
      d='M13.7007 12.9818L18.2393 15.6022C18.6198 15.8218 18.7501 16.3083 18.5305 16.6888L18.4338 16.8563C17.8082 17.9398 16.6687 18.6246 15.4183 18.6684C13.8951 18.7217 12.59 17.5879 12.43 16.0721L12.2062 13.9528C12.1204 13.1401 12.9929 12.5731 13.7007 12.9818Z'
      stroke={color}
    />
    <path
      d='M10.2993 12.9819L5.7607 15.6023C5.38022 15.8219 4.8937 15.6916 4.67403 15.3111L4.57733 15.1436C3.95179 14.0601 3.92852 12.7308 4.51577 11.6261C5.2312 10.2803 6.86566 9.71699 8.25835 10.3363L10.2056 11.2021C10.9524 11.5342 11.0071 12.5732 10.2993 12.9819Z'
      stroke={color}
    />
    <path
      d='M10.2991 11.018L5.76045 8.39766C5.37997 8.17799 5.24961 7.69147 5.46928 7.31099L5.56598 7.1435C6.19152 6.06003 7.33109 5.37524 8.58141 5.33146C10.1046 5.27812 11.4097 6.41195 11.5698 7.9277L11.7935 10.047C11.8794 10.8598 11.0069 11.4267 10.2991 11.018Z'
      stroke={color}
    />
    <path
      d='M12 10.0362V4.79549C12 4.35616 12.3562 4 12.7955 4H12.9889C14.24 4 15.4028 4.6445 16.0659 5.70541C16.8737 6.99791 16.5443 8.69505 15.3117 9.59153L13.5882 10.845C12.9272 11.3257 12 10.8535 12 10.0362Z'
      stroke={color}
    />
  </svg>
)

export const Humidity = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 14.5714C20 18.7526 16.3364 22 12 22C7.66359 22 4 18.7526 4 14.5714C4 12 5.30472 9.45232 6.71637 7.42349C8.1468 5.36767 9.79177 3.69743 10.6777 2.85537M20 14.5714L10.6777 2.85537M20 14.5714C20 12 18.6953 9.45232 17.2836 7.42349C15.8532 5.36767 14.2082 3.69743 13.3223 2.85537C12.5778 2.14778 11.4222 2.14778 10.6777 2.85537M20 14.5714L10.6777 2.85537'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M12 18C11.4747 18 10.9546 17.8965 10.4693 17.6955C9.98396 17.4945 9.54301 17.1999 9.17157 16.8284C8.80014 16.457 8.5055 16.016 8.30448 15.5307C8.10346 15.0454 8 14.5253 8 14'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const HumidityLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 21.5C16.1012 21.5 19.5 18.4372 19.5 14.5714C19.5 12.1555 18.2672 9.71249 16.8732 7.70906C15.4698 5.69214 13.8515 4.04821 12.9778 3.21778C12.4263 2.69364 11.5737 2.69364 11.0222 3.21779C10.1485 4.04821 8.53016 5.69214 7.1268 7.70906C5.73282 9.71249 4.5 12.1555 4.5 14.5714C4.5 18.4372 7.8988 21.5 12 21.5Z'
      stroke={color}
    />
    <path
      d='M12 18C11.4747 18 10.9546 17.8965 10.4693 17.6955C9.98396 17.4945 9.54301 17.1999 9.17157 16.8284C8.80014 16.457 8.5055 16.016 8.30448 15.5307C8.10346 15.0454 8 14.5253 8 14'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const Oil = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18 8L13 11L11 9H7M18 8L21 11M18 8L14 15H3V9H7M7 9V4M7 4H4M7 4H10'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M3 21L4.5 19.5C4.57965 19.4203 4.61948 19.3805 4.65474 19.3485C5.41756 18.6551 6.58244 18.6551 7.34526 19.3485C7.38052 19.3805 7.42035 19.4203 7.5 19.5L7.64853 19.6485C8.39493 20.3949 9.60507 20.3949 10.3515 19.6485L10.7252 19.2748C11.3847 18.6153 12.4827 18.724 13 19.5V19.5C13.5173 20.276 14.6153 20.3847 15.2748 19.7252L15.6485 19.3515C16.3949 18.6051 17.6051 18.6051 18.3515 19.3515L20 21'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
  </svg>
)

export const OilLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18 8L13 11L11 9H7M18 8L21 11M18 8L14 15H3V9H7M7 9V4M7 4H4M7 4H10'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M3 21L4.5 19.5C4.57965 19.4203 4.61948 19.3805 4.65474 19.3485C5.41756 18.6551 6.58244 18.6551 7.34526 19.3485C7.38052 19.3805 7.42035 19.4203 7.5 19.5L7.64853 19.6485C8.39493 20.3949 9.60507 20.3949 10.3515 19.6485L10.7252 19.2748C11.3847 18.6153 12.4827 18.724 13 19.5V19.5C13.5173 20.276 14.6153 20.3847 15.2748 19.7252L15.6485 19.3515C16.3949 18.6051 17.6051 18.6051 18.3515 19.3515L20 21'
      stroke={color}
      strokeLinejoin='round'
    />
  </svg>
)
