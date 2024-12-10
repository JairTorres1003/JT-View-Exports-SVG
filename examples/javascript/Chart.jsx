/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const Bubble = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='17' cy='8' r='4' stroke={color} strokeWidth='2' />
    <circle cx='12' cy='17' r='3' stroke={color} strokeWidth='2' />
    <circle cx='6.5' cy='9.5' r='2.5' stroke={color} strokeWidth='2' />
  </svg>
)

export const BubbleLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='17' cy='8' r='4' stroke={color} />
    <circle cx='12' cy='17' r='3' stroke={color} />
    <circle cx='6.5' cy='9.5' r='2.5' stroke={color} />
  </svg>
)

export const Chart = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M8 10L8 16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 12V16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 8V16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect x='3' y='4' width='18' height='16' rx='2' stroke={color} strokeWidth='2' />
  </svg>
)

export const ChartAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect x='3' y='3' width='18' height='18' rx='2' stroke={color} strokeWidth='2' />
  </svg>
)

export const ChartAltDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='3' width='18' height='18' rx='2' fill={color} fillOpacity='0.25' />
    <path
      d='M18 8L14.1047 12.8691C14.0488 12.9389 13.9447 12.9447 13.8815 12.8815L11.1161 10.1161C11.0538 10.0538 10.9513 10.0584 10.8948 10.1262L6 16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChartAltDuotoneLine = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='3' width='18' height='18' rx='2' fill={color} fillOpacity='0.25' />
    <path
      d='M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChartAltFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V8C22 5.17157 22 3.75736 21.1213 2.87868C20.2426 2 18.8284 2 16 2H8C5.17157 2 3.75736 2 2.87868 2.87868ZM17.8321 9.5547C18.1384 9.09517 18.0142 8.4743 17.5547 8.16795C17.0952 7.8616 16.4743 7.98577 16.1679 8.4453L13.1238 13.0115L12.6651 12.094C11.9783 10.7205 10.0639 10.6013 9.2121 11.8791L6.16795 16.4453C5.8616 16.9048 5.98577 17.5257 6.4453 17.8321C6.90483 18.1384 7.5257 18.0142 7.83205 17.5547L10.8762 12.9885L11.3349 13.906C12.0217 15.2795 13.9361 15.3987 14.7879 14.1209L17.8321 9.5547Z'
      fill={color}
    />
  </svg>
)

export const ChartAltLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect x='3' y='3' width='18' height='18' rx='2' stroke={color} />
  </svg>
)

export const ChartDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='4' width='18' height='16' rx='2' fill={color} fillOpacity='0.25' />
    <path
      d='M8 10L8 16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 12V16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 8V16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChartDuotoneLine = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='4' width='18' height='16' rx='2' fill={color} fillOpacity='0.25' />
    <path
      d='M8 10L8 16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 12V16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 8V16'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ChartFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.87868ZM16 8C16.5523 8 17 8.44772 17 9V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V9C15 8.44772 15.4477 8 16 8ZM9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11V17C7 17.5523 7.44772 18 8 18C8.55229 18 9 17.5523 9 17V11ZM13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13Z'
      fill={color}
    />
  </svg>
)

export const ChartLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M8 10L8 16' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 12V16' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16 8V16' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <rect x='3' y='4' width='18' height='16' rx='2' stroke={color} />
  </svg>
)

export const ChartPin = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M15.5 10.5L12.5 13.5L10.5 11.5L7.5 14.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14 5H7.2C6.07989 5 5.51984 5 5.09202 5.21799C4.71569 5.40973 4.40973 5.71569 4.21799 6.09202C4 6.51984 4 7.07989 4 8.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H15.8C16.9201 20 17.4802 20 17.908 19.782C18.2843 19.5903 18.5903 19.2843 18.782 18.908C19 18.4802 19 17.9201 19 16.8V10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <circle cx='19' cy='5' r='2' fill={color} />
  </svg>
)

export const ChartPinLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M15.5 10.5L12.5 13.5L10.5 11.5L7.5 14.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.5 4.5H7.7C6.57989 4.5 6.01984 4.5 5.59202 4.71799C5.21569 4.90973 4.90973 5.21569 4.71799 5.59202C4.5 6.01984 4.5 6.57989 4.5 7.7V16.3C4.5 17.4201 4.5 17.9802 4.71799 18.408C4.90973 18.7843 5.21569 19.0903 5.59202 19.282C6.01984 19.5 6.57989 19.5 7.7 19.5H16.3C17.4201 19.5 17.9802 19.5 18.408 19.282C18.7843 19.0903 19.0903 18.7843 19.282 18.408C19.5 17.9802 19.5 17.4201 19.5 16.3V9.5'
      stroke={color}
      strokeLinecap='round'
    />
    <circle cx='18.5' cy='5.5' r='2' stroke={color} strokeLinecap='round' />
  </svg>
)

export const ColumUp = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M21 20H3' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M10 16V10C10 8.89543 9.10457 8 8 8V8C6.89543 8 6 8.89543 6 10V16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M18 16V6C18 4.89543 17.1046 4 16 4V4C14.8954 4 14 4.89543 14 6V16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const ColumUpFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M19 19H5' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M11 14V10C11 8.89543 10.1046 8 9 8C7.89543 8 7 8.89543 7 10V14C7 15.1046 7.89543 16 9 16C10.1046 16 11 15.1046 11 14Z'
      fill={color}
    />
    <path
      d='M17 14V6C17 4.89543 16.1046 4 15 4C13.8954 4 13 4.89543 13 6V14C13 15.1046 13.8954 16 15 16C16.1046 16 17 15.1046 17 14Z'
      fill={color}
    />
  </svg>
)

export const ColumUpLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M21 20H3' stroke={color} strokeLinecap='round' />
    <path
      d='M10 16V10C10 8.89543 9.10457 8 8 8V8C6.89543 8 6 8.89543 6 10V16'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M18 16V6C18 4.89543 17.1046 4 16 4V4C14.8954 4 14 4.89543 14 6V16'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const Critical = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21 16C21 13.6131 20.0518 11.3239 18.364 9.63604C16.6761 7.94821 14.3869 7 12 7C9.61305 7 7.32387 7.94821 5.63604 9.63604C3.94821 11.3239 3 13.6131 3 16L8.00506 16C8.00506 14.9405 8.42595 13.9243 9.17515 13.1751C9.92435 12.426 10.9405 12.0051 12 12.0051C13.0595 12.0051 14.0757 12.426 14.8249 13.1751C15.574 13.9243 15.9949 14.9405 15.9949 16H21Z'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M12 7L12 12' stroke={color} strokeWidth='2' />
    <path d='M18.364 9.63574L15.364 12.6357' stroke={color} strokeWidth='2' />
    <path d='M5.63599 9.63574L9.00011 12.9999' stroke={color} strokeWidth='2' />
  </svg>
)

export const CriticalDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.5207 10.1859C18.6222 10.0844 18.7884 10.0888 18.8809 10.1986C20.1908 11.7521 20.9399 13.7085 20.9966 15.7498C21.0004 15.8878 20.8881 15.9998 20.75 15.9998H16.245C16.1069 15.9998 15.9958 15.8877 15.9872 15.7499C15.9416 15.0221 15.6978 14.3235 15.2864 13.7283C15.2148 13.6247 15.2229 13.4837 15.312 13.3946L18.5207 10.1859ZM17.8009 9.1186C17.9106 9.21112 17.9151 9.37732 17.8136 9.47881L14.6048 12.6876C14.5158 12.7766 14.3748 12.7848 14.2712 12.7132C13.805 12.391 13.2753 12.1717 12.7179 12.0698C12.594 12.0472 12.5 11.9417 12.5 11.8158V7.27794C12.5 7.13441 12.6207 7.02003 12.7637 7.0322C14.6178 7.19002 16.3782 7.9192 17.8009 9.1186ZM11.5 7.27794C11.5 7.13441 11.3794 7.02003 11.2364 7.0322C9.38228 7.19002 7.62183 7.9192 6.19917 9.11862C6.08943 9.21113 6.08499 9.37733 6.18648 9.47882L9.39524 12.6876C9.48431 12.7766 9.62529 12.7848 9.72892 12.7132C10.1951 12.391 10.7247 12.1717 11.2822 12.0698C11.4061 12.0472 11.5 11.9417 11.5 11.8158V7.27794ZM8.71367 13.7283C8.7853 13.6247 8.77716 13.4837 8.68808 13.3946L5.47935 10.1859C5.37787 10.0844 5.21167 10.0889 5.11915 10.1986C3.80929 11.7521 3.06018 13.7085 3.00351 15.7498C2.99968 15.8878 3.11197 15.9998 3.25004 15.9998L7.7551 15.9998C7.89317 15.9998 8.00429 15.8877 8.01292 15.7499C8.05849 15.0221 8.30232 14.3235 8.71367 13.7283Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.5 11.8056C12.5 11.9316 12.594 12.0371 12.7179 12.0597C13.278 12.1617 13.8101 12.3821 14.2782 12.706C14.3819 12.7776 14.5229 12.7695 14.612 12.6804L18.5228 8.76961C18.6239 8.66851 18.6199 8.5031 18.5114 8.41C16.8974 7.02517 14.8828 6.19071 12.7623 6.02867C12.6198 6.01778 12.5 6.13194 12.5 6.27491V11.8056Z'
      fill={color}
    />
  </svg>
)

export const CriticalDuotoneLine = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.5207 10.1859C18.6222 10.0844 18.7884 10.0888 18.8809 10.1986C20.1908 11.7521 20.9399 13.7085 20.9966 15.7498C21.0004 15.8878 20.8881 15.9998 20.75 15.9998H16.245C16.1069 15.9998 15.9958 15.8877 15.9872 15.7499C15.9416 15.0221 15.6978 14.3235 15.2864 13.7283C15.2148 13.6247 15.2229 13.4837 15.312 13.3946L18.5207 10.1859ZM17.8009 9.1186C17.9106 9.21112 17.9151 9.37732 17.8136 9.47881L14.6048 12.6876C14.5158 12.7766 14.3748 12.7848 14.2712 12.7132C13.805 12.391 13.2753 12.1717 12.7179 12.0698C12.594 12.0472 12.5 11.9417 12.5 11.8158V7.27794C12.5 7.13441 12.6207 7.02003 12.7637 7.0322C14.6178 7.19002 16.3782 7.9192 17.8009 9.1186ZM11.5 7.27794C11.5 7.13441 11.3794 7.02003 11.2364 7.0322C9.38228 7.19002 7.62183 7.9192 6.19917 9.11862C6.08943 9.21113 6.08499 9.37733 6.18648 9.47882L9.39524 12.6876C9.48431 12.7766 9.62528 12.7848 9.72892 12.7132C10.1951 12.391 10.7247 12.1717 11.2822 12.0698C11.4061 12.0472 11.5 11.9417 11.5 11.8158V7.27794ZM8.71367 13.7283C8.7853 13.6247 8.77716 13.4837 8.68808 13.3946L5.47935 10.1859C5.37787 10.0844 5.21167 10.0889 5.11915 10.1986C3.80929 11.7521 3.06018 13.7085 3.00351 15.7498C2.99968 15.8878 3.11197 15.9998 3.25004 15.9998L7.7551 15.9998C7.89317 15.9998 8.00429 15.8877 8.01292 15.7499C8.05849 15.0221 8.30232 14.3235 8.71367 13.7283Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.5 11.8158C12.5 11.9417 12.5939 12.0472 12.7179 12.0698C13.2753 12.1717 13.8049 12.391 14.2711 12.7132C14.3748 12.7848 14.5157 12.7766 14.6048 12.6876L17.8135 9.47881C17.915 9.37732 17.9106 9.21112 17.8009 9.1186C16.3782 7.9192 14.6178 7.19002 12.7637 7.0322C12.6207 7.02003 12.5 7.13441 12.5 7.27794V11.8158Z'
      fill={color}
    />
  </svg>
)

export const CriticalFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.9445 15.002C21.0058 15.5509 20.5523 16 20 16H16.9949C16.4427 16 16.0073 15.5455 15.8704 15.0104C15.7353 14.4818 15.4927 13.9845 15.1561 13.5508L18.7076 9.99928C19.9577 11.3965 20.7376 13.1468 20.9445 15.002ZM18.0004 9.29219C16.4788 7.93089 14.5386 7.12726 12.5 7.01392V12.0365C13.2101 12.126 13.8835 12.4049 14.4489 12.8437L18.0004 9.29219ZM9.55107 12.8437C10.1165 12.4049 10.7899 12.126 11.5 12.0365V7.01392C9.46143 7.12726 7.52123 7.9309 5.99956 9.2922L9.55107 12.8437ZM5.29244 9.9993C4.04232 11.3966 3.26243 13.1468 3.05548 15.002C2.99425 15.5509 3.44772 16 4 16H7.00506C7.55735 16 7.99274 15.5455 8.12956 15.0104C8.26474 14.4818 8.5073 13.9845 8.84393 13.5508L5.29244 9.9993Z'
      fill={color}
    />
  </svg>
)

export const CriticalLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21 16C21 13.6131 20.0518 11.3239 18.364 9.63604C16.6761 7.94821 14.3869 7 12 7C9.61305 7 7.32387 7.94821 5.63604 9.63604C3.94821 11.3239 3 13.6131 3 16L8.00506 16C8.00506 14.9405 8.42595 13.9243 9.17515 13.1751C9.92435 12.426 10.9405 12.0051 12 12.0051C13.0595 12.0051 14.0757 12.426 14.8249 13.1751C15.574 13.9243 15.9949 14.9405 15.9949 16H21Z'
      stroke={color}
    />
    <path d='M12 7L12 12' stroke={color} />
    <path d='M18.364 9.63574L14.9999 12.9998' stroke={color} />
    <path d='M5.63599 9.63574L9.00011 12.9999' stroke={color} />
  </svg>
)

export const LineUp = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21 6L15.7071 11.2929C15.3166 11.6834 14.6834 11.6834 14.2929 11.2929L12.7071 9.70711C12.3166 9.31658 11.6834 9.31658 11.2929 9.70711L7 14'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3 3V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H21'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const LineUpLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21 6L15.7071 11.2929C15.3166 11.6834 14.6834 11.6834 14.2929 11.2929L12.7071 9.70711C12.3166 9.31658 11.6834 9.31658 11.2929 9.70711L7 14'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3 3V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H21'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const Pipe = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.30676 16.3821C5.64514 16.899 6.04391 17.3775 6.4968 17.8067C7.61899 18.8703 9.02535 19.586 10.5458 19.8671C12.0662 20.1482 13.6354 19.9826 15.0637 19.3905C16.492 18.7984 17.7181 17.8051 18.5937 16.5308C19.4693 15.2564 19.9569 13.7557 19.9974 12.21C20.0379 10.6644 19.6296 9.14014 18.822 7.82167C18.0144 6.5032 16.842 5.44701 15.4467 4.78089C14.5024 4.33008 13.4834 4.07101 12.4481 4.01294L13.0032 6.08484C13.5483 6.17728 14.0809 6.34509 14.585 6.58577C15.6315 7.08536 16.5108 7.8775 17.1165 8.86635C17.7223 9.8552 18.0284 10.9984 17.9981 12.1576C17.9677 13.3168 17.602 14.4424 16.9453 15.3982C16.2886 16.3539 15.369 17.0989 14.2978 17.543C13.2266 17.9871 12.0496 18.1112 10.9093 17.9004C9.76905 17.6896 8.71427 17.1529 7.87263 16.3551C7.69689 16.1886 7.53201 16.0121 7.37866 15.8269L5.30676 16.3821Z'
      fill={color}
    />
    <path
      d='M5.91239 4.06647C6.68924 3.47037 7.54796 2.99272 8.46042 2.64739C8.87978 2.48868 9.08946 2.40932 9.28694 2.51053C9.48442 2.61174 9.54649 2.84338 9.67063 3.30667L11.7412 11.0341C11.8632 11.4894 11.9242 11.7171 11.8206 11.8964C11.7171 12.0758 11.4894 12.1368 11.0341 12.2588L3.30667 14.3294C2.84338 14.4535 2.61174 14.5156 2.42535 14.3952C2.23896 14.2747 2.20284 14.0535 2.13061 13.6109C1.97344 12.6481 1.95774 11.6656 2.08555 10.6947C2.25696 9.39275 2.68314 8.13728 3.33975 7C3.99636 5.86272 4.87054 4.8659 5.91239 4.06647Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const PipeDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.96534 15.1698C5.41324 15.3177 5.13719 15.3917 5.04753 15.6344C4.95788 15.8772 5.10656 16.0939 5.40393 16.5272C5.72068 16.9887 6.08649 17.4179 6.49671 17.8067C7.6189 18.8704 9.02527 19.586 10.5457 19.8671C12.0661 20.1482 13.6353 19.9827 15.0636 19.3906C16.4919 18.7985 17.718 17.8051 18.5936 16.5308C19.4692 15.2565 19.9568 13.7557 19.9973 12.21C20.0378 10.6644 19.6295 9.14016 18.8219 7.82169C18.0143 6.50322 16.8419 5.44703 15.4466 4.78091C14.5556 4.35554 13.598 4.10087 12.623 4.02471C12.099 3.98377 11.837 3.96331 11.6716 4.16234C11.5062 4.36137 11.5802 4.63744 11.7281 5.18957L13.3712 11.3219L13.3738 11.3313C13.3862 11.3763 13.4279 11.5281 13.4473 11.6788C13.4741 11.8861 13.4907 12.2937 13.2452 12.7188C12.9998 13.1439 12.6385 13.3333 12.4456 13.4139C12.3054 13.4724 12.1531 13.5121 12.1079 13.5239L12.0985 13.5264L5.96534 15.1698Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M9.67063 3.30667C9.54649 2.84338 9.48442 2.61174 9.28694 2.51053C9.08946 2.40932 8.87978 2.48868 8.46042 2.64739C7.54796 2.99272 6.68924 3.47037 5.91239 4.06647C4.87054 4.8659 3.99636 5.86272 3.33975 7C2.68314 8.13728 2.25696 9.39275 2.08555 10.6947C1.95774 11.6656 1.97344 12.6481 2.13061 13.6109C2.20284 14.0535 2.23896 14.2747 2.42535 14.3952C2.61174 14.5156 2.84338 14.4535 3.30667 14.3294L11.0341 12.2588C11.4894 12.1368 11.7171 12.0758 11.8206 11.8964C11.9242 11.7171 11.8632 11.4894 11.7412 11.0341L9.67063 3.30667Z'
      fill={color}
    />
  </svg>
)

export const PipeDuotoneLine = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.96534 15.1698C5.41324 15.3177 5.13719 15.3917 5.04753 15.6344C4.95788 15.8772 5.10656 16.0939 5.40393 16.5272C5.72068 16.9887 6.08649 17.4179 6.49671 17.8067C7.6189 18.8704 9.02527 19.586 10.5457 19.8671C12.0661 20.1482 13.6353 19.9827 15.0636 19.3906C16.4919 18.7985 17.718 17.8051 18.5936 16.5308C19.4692 15.2565 19.9568 13.7557 19.9973 12.21C20.0378 10.6644 19.6295 9.14016 18.8219 7.82169C18.0143 6.50322 16.8419 5.44703 15.4466 4.78091C14.5556 4.35554 13.598 4.10087 12.623 4.02471C12.099 3.98377 11.837 3.96331 11.6716 4.16234C11.5062 4.36137 11.5802 4.63744 11.7281 5.18957L13.3712 11.3219L13.3738 11.3313C13.3862 11.3763 13.4279 11.5281 13.4473 11.6788C13.4741 11.8861 13.4907 12.2937 13.2452 12.7188C12.9998 13.1439 12.6385 13.3333 12.4456 13.4139C12.3054 13.4724 12.1531 13.5121 12.1079 13.5239L12.0985 13.5264L5.96534 15.1698Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M9.67063 3.30667C9.54649 2.84338 9.48442 2.61174 9.28694 2.51053C9.08946 2.40932 8.87978 2.48868 8.46042 2.64739C7.54796 2.99272 6.68924 3.47037 5.91239 4.06647C4.87054 4.8659 3.99636 5.86272 3.33975 7C2.68314 8.13728 2.25696 9.39275 2.08555 10.6947C1.95774 11.6656 1.97344 12.6481 2.13061 13.6109C2.20284 14.0535 2.23896 14.2747 2.42535 14.3952C2.61174 14.5156 2.84338 14.4535 3.30667 14.3294L11.0341 12.2588C11.4894 12.1368 11.7171 12.0758 11.8206 11.8964C11.9242 11.7171 11.8632 11.4894 11.7412 11.0341L9.67063 3.30667Z'
      fill={color}
    />
  </svg>
)

export const PipeFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.51669 4.79613C5.84343 6.09112 4 8.83028 4 12C4 12.1969 4.00711 12.3921 4.0211 12.5855L10.1629 10.9398L8.51669 4.79613ZM11.4148 4.02107L13.1901 10.6463L13.2017 10.6897C13.2517 10.8754 13.3222 11.1373 13.3532 11.3775C13.3922 11.6802 13.4014 12.159 13.1197 12.6469C12.838 13.1348 12.4188 13.3662 12.1371 13.4838C11.9136 13.5771 11.6515 13.647 11.4657 13.6965L11.4223 13.7081L4.79626 15.4836C6.0913 18.1567 8.83039 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C11.8032 4 11.6081 4.00711 11.4148 4.02107Z'
      fill={color}
    />
    <path
      d='M9.92945 4.27259C9.67849 3.33602 9.55302 2.86773 9.12083 2.67286C8.68865 2.47799 8.30723 2.66782 7.54439 3.04748C6.97028 3.33321 6.42361 3.67419 5.91239 4.06647C4.87054 4.8659 3.99636 5.86272 3.33975 7C2.68314 8.13728 2.25696 9.39275 2.08555 10.6947C2.00144 11.3336 1.97948 11.9775 2.01909 12.6176C2.07171 13.4681 2.09803 13.8933 2.48288 14.1701C2.86773 14.447 3.33602 14.3215 4.27259 14.0706L10.0681 12.5176C10.9788 12.2736 11.4342 12.1516 11.6413 11.7929C11.8484 11.4342 11.7264 10.9788 11.4824 10.0681L9.92945 4.27259Z'
      fill={color}
    />
  </svg>
)

export const PipeLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.81702 16.2453C6.11379 16.6776 6.45649 17.0796 6.84073 17.4438C7.89279 18.441 9.21126 19.1119 10.6366 19.3754C12.062 19.6389 13.5332 19.4837 14.8722 18.9286C16.2113 18.3735 17.3607 17.4423 18.1816 16.2476C19.0025 15.0529 19.4595 13.6459 19.4975 12.1969C19.5355 10.7479 19.1528 9.31888 18.3956 8.08282C17.6385 6.84675 16.5394 5.85658 15.2313 5.23209C14.3961 4.83339 13.4986 4.59466 12.5848 4.52319L12.862 5.55777C13.5308 5.64725 14.1852 5.8408 14.8004 6.13453C15.9341 6.67575 16.8867 7.5339 17.5429 8.60516C18.1991 9.67641 18.5308 10.9149 18.4979 12.1707C18.4649 13.4265 18.0688 14.6459 17.3574 15.6813C16.646 16.7167 15.6498 17.5238 14.4893 18.0049C13.3288 18.486 12.0538 18.6204 10.8184 18.3921C9.5831 18.1637 8.44043 17.5822 7.52865 16.718C7.28283 16.485 7.05664 16.2342 6.85159 15.9681L5.81702 16.2453Z'
      fill={color}
    />
    <path
      d='M5.91239 4.06647C6.68924 3.47037 7.54796 2.99272 8.46042 2.64739C8.87978 2.48868 9.08946 2.40932 9.28694 2.51053C9.48442 2.61174 9.54649 2.84338 9.67063 3.30667L11.7412 11.0341C11.8632 11.4894 11.9242 11.7171 11.8206 11.8964C11.7171 12.0758 11.4894 12.1368 11.0341 12.2588L3.30667 14.3294C2.84338 14.4535 2.61174 14.5156 2.42535 14.3952C2.23896 14.2747 2.20284 14.0535 2.13061 13.6109C1.97344 12.6481 1.95774 11.6656 2.08555 10.6947C2.25696 9.39275 2.68314 8.13728 3.33975 7C3.99636 5.86272 4.87054 4.8659 5.91239 4.06647Z'
      stroke={color}
    />
  </svg>
)

export const Waterfall = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M21 21H3' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M4 16V14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M12 12V9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M8 16V10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M16 13V11' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M20 15V5' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const WaterfallLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M21 21H3' stroke={color} strokeLinecap='round' />
    <path d='M4 16V14' stroke={color} strokeLinecap='round' />
    <path d='M12 12V9' stroke={color} strokeLinecap='round' />
    <path d='M8 16V10' stroke={color} strokeLinecap='round' />
    <path d='M16 13V11' stroke={color} strokeLinecap='round' />
    <path d='M20 15V5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const Candlestick = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M8 3V6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M8 14V17' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <rect x='6' y='6' width='4' height='8' rx='0.8' stroke={color} strokeWidth='2' />
    <path d='M16 7V12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M16 17V20' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <rect x='14' y='12' width='4' height='5' rx='0.8' stroke={color} strokeWidth='2' />
  </svg>
)

export const CandlestickDuotoneLine = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M7.5 3.5V6.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path d='M7.5 14.5V18.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path
      d='M5 7.8C5 6.80589 5.80589 6 6.8 6H8.2C9.19411 6 10 6.80589 10 7.8V13.2C10 14.1941 9.19411 15 8.2 15H6.8C5.80589 15 5 14.1941 5 13.2V7.8Z'
      fill={color}
    />
    <path d='M16.5 6.5V11.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path d='M16.5 16.5V20.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path
      d='M14 12.8C14 11.8059 14.8059 11 15.8 11H17.2C18.1941 11 19 11.8059 19 12.8V15.2C19 16.1941 18.1941 17 17.2 17H15.8C14.8059 17 14 16.1941 14 15.2V12.8Z'
      fill={color}
    />
  </svg>
)

export const CandlestickLight = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M7.5 3.5V6.5' stroke={color} strokeLinecap='round' />
    <path d='M7.5 14.5V18.5' stroke={color} strokeLinecap='round' />
    <path
      d='M6.8 6.5C6.08203 6.5 5.5 7.08203 5.5 7.8V13.2C5.5 13.918 6.08203 14.5 6.8 14.5H8.2C8.91797 14.5 9.5 13.918 9.5 13.2V7.8C9.5 7.08203 8.91797 6.5 8.2 6.5H6.8Z'
      stroke={color}
    />
    <path d='M16.5 6.5V11.5' stroke={color} strokeLinecap='round' />
    <path d='M16.5 16.5V20.5' stroke={color} strokeLinecap='round' />
    <path
      d='M15.8 11.5C15.082 11.5 14.5 12.082 14.5 12.8V15.2C14.5 15.918 15.082 16.5 15.8 16.5H17.2C17.918 16.5 18.5 15.918 18.5 15.2V12.8C18.5 12.082 17.918 11.5 17.2 11.5H15.8Z'
      stroke={color}
    />
  </svg>
)

export const DoughnutChart = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9' stroke={color} strokeWidth='2' />
    <circle cx='12' cy='12' r='4' stroke={color} strokeWidth='2' />
    <path
      d='M12 3V7.5M18 18L15 15M18 6L15 9M3 12H7.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DoughnutChartLight = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9' stroke={color} />
    <circle cx='12' cy='12' r='4' stroke={color} />
    <path d='M12 3V7.5M18 18L15 15M18 6L15 9M3 12H7.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const PieChart = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9' stroke={color} strokeWidth='2' />
    <path d='M12 12H21' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M12 3V11.9379C12 11.9777 12.0158 12.0158 12.0439 12.0439L18 18'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const PieChartFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.9062 17.2313C18.2988 17.6801 18.999 17.6894 19.3437 17.2029C19.9558 16.3389 20.4142 15.3686 20.692 14.3343C21.0117 13.1439 21.0818 11.9071 20.9056 10.7001C20.8195 10.1101 20.1915 9.80044 19.6379 10.0219L14.9933 11.8797C14.3531 12.1358 14.1581 12.9478 14.6121 13.4667L17.9062 17.2313ZM19.3454 6.79949C19.6899 7.28615 19.4487 7.94349 18.8951 8.16495L14.3714 9.97442C13.7145 10.2372 13 9.75341 13 9.04594V4.17377C13 3.57748 13.5207 3.1094 14.1006 3.24857C15.1931 3.51082 16.2331 3.97682 17.1636 4.62861C18.015 5.22503 18.7515 5.96075 19.3454 6.79949Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11 3.15568C11 2.56386 10.4871 2.09743 9.90834 2.22122C8.99701 2.41615 8.11402 2.73824 7.28604 3.18081C5.83571 3.95602 4.59895 5.07696 3.68531 6.44432C2.77167 7.81168 2.20935 9.38326 2.04816 11.0198C1.88697 12.6564 2.13188 14.3075 2.76121 15.8269C3.39053 17.3462 4.38485 18.6869 5.65607 19.7301C6.92729 20.7734 8.43619 21.487 10.0491 21.8079C11.662 22.1287 13.3292 22.0468 14.9028 21.5694C15.5873 21.3618 16.245 21.0821 16.8653 20.7367C17.3823 20.4487 17.4612 19.7599 17.0715 19.3145L11.2845 12.7009C11.1011 12.4913 11 12.2222 11 11.9436V3.15568Z'
      fill={color}
    />
  </svg>
)

export const PieChartLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9' stroke={color} />
    <path d='M12 12H21' stroke={color} strokeLinecap='round' />
    <path
      d='M12 3V11.9379C12 11.9777 12.0158 12.0158 12.0439 12.0439L18 18'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const PyramidChart = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M11.8658 3.26833L3.10854 20.7829C3.05867 20.8827 3.1312 21 3.2427 21H20.7573C20.8688 21 20.9413 20.8827 20.8915 20.7829L12.1342 3.26833C12.0789 3.15777 11.9211 3.15777 11.8658 3.26833Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M19 17H5' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M17 13H7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M15 9H9' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const PyramidChartLight = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M11.8658 3.26833L3.10854 20.7829C3.05867 20.8827 3.1312 21 3.2427 21H20.7573C20.8688 21 20.9413 20.8827 20.8915 20.7829L12.1342 3.26833C12.0789 3.15777 11.9211 3.15777 11.8658 3.26833Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M19 17H5' stroke={color} strokeLinecap='round' />
    <path d='M17 13H7' stroke={color} strokeLinecap='round' />
    <path d='M15 9H9' stroke={color} strokeLinecap='round' />
  </svg>
)

export const TableSettings = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9 18H5C3.89543 18 3 17.1046 3 16V6C3 4.89543 3.89543 4 5 4H17C18.1046 4 19 4.89543 19 6V8'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M4 8H20' stroke={color} strokeWidth='2' />
    <path d='M4 13H9' stroke={color} strokeWidth='2' />
    <path
      d='M11.5408 16.9723C11.2045 16.3677 11.2045 15.6323 11.5408 15.0277L12.2155 13.815L12.9284 12.6244C13.2838 12.0309 13.9207 11.6632 14.6124 11.6521L16 11.63L17.3876 11.6521C18.0793 11.6632 18.7162 12.0309 19.0716 12.6244L19.7845 13.815L20.4592 15.0277C20.7955 15.6323 20.7955 16.3677 20.4592 16.9723L19.7845 18.185L19.0716 19.3756C18.7162 19.9691 18.0793 20.3368 17.3876 20.3479L16 20.37L14.6124 20.3479C13.9207 20.3368 13.2838 19.9691 12.9284 19.3756L12.2155 18.185L11.5408 16.9723Z'
      stroke={color}
      strokeWidth='2'
    />
    <circle cx='16' cy='16' r='1' fill={color} />
  </svg>
)

export const TableSettingsLight = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
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
      d='M11.5 18.5H5.5C4.39543 18.5 3.5 17.6046 3.5 16.5V8.5M3.5 8.5V6.5C3.5 5.39543 4.39543 4.5 5.5 4.5H18.5C19.6046 4.5 20.5 5.39543 20.5 6.5V8.35C20.5 8.43284 20.4328 8.5 20.35 8.5H3.5Z'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M3.5 13.5H9.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M13.649 16.1667C13.4121 15.7409 13.2937 15.528 13.2473 15.3025C13.2062 15.1029 13.2062 14.8971 13.2473 14.6975C13.2937 14.472 13.4121 14.2591 13.649 13.8333L13.9724 13.252L14.3141 12.6813C14.5644 12.2633 14.6896 12.0543 14.8617 11.9013C15.014 11.7659 15.1922 11.663 15.3856 11.5988C15.6041 11.5263 15.8477 11.5224 16.3349 11.5146L17 11.504L17.6651 11.5146C18.1523 11.5224 18.3959 11.5263 18.6144 11.5988C18.8078 11.663 18.986 11.7659 19.1383 11.9013C19.3104 12.0543 19.4356 12.2633 19.6859 12.6813L20.0276 13.252L20.351 13.8333C20.5879 14.2591 20.7063 14.472 20.7527 14.6975C20.7938 14.8971 20.7938 15.1029 20.7527 15.3025C20.7063 15.528 20.5879 15.7409 20.351 16.1667L20.0276 16.748L19.6859 17.3187C19.4356 17.7367 19.3104 17.9457 19.1383 18.0987C18.986 18.2341 18.8078 18.337 18.6144 18.4012C18.3959 18.4737 18.1523 18.4776 17.6651 18.4854L17 18.496L16.3349 18.4854C15.8477 18.4776 15.6041 18.4737 15.3856 18.4012C15.1922 18.337 15.014 18.2341 14.8617 18.0987C14.6896 17.9457 14.5644 17.7367 14.3141 17.3187L13.9724 16.748L13.649 16.1667Z'
      stroke={color}
      strokeLinejoin='round'
    />
    <circle cx='17' cy='15' r='1' fill={color} />
  </svg>
)
