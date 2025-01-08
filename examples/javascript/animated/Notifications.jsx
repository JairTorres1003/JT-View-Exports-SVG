/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const Ban = ({ size = 24, color = 'currentColor', sx = {}, className = '', speed = 1 }) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>{'@keyframes ban-n{0%{transform:scale(1)}to{transform:scale(.5)}}'}</style>
    <path
      fill={color}
      fillRule='evenodd'
      d='M4.75 12a7.25 7.25 0 0111.819-5.63L6.37 16.57A7.22 7.22 0 014.75 12zm2.681 5.63A7.25 7.25 0 0017.63 7.431L7.431 17.63zM12 3.25a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5z'
      clipRule='evenodd'
      style={{
        transformOrigin: 'center center',
        animation: `ban-n ${speed}s cubic-bezier(.25,.46,.45,.94) infinite alternate both`,
      }}
    ></path>
  </svg>
)

export const ExclamationCircle = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 0.8,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>
      {
        '@keyframes n-info-cir{0%,to{transform:rotate(0deg);transform-origin:center}10%,90%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-6deg)}30%,50%,70%{transform:rotate(6deg)}80%{transform:rotate(-2deg)}}'
      }
    </style>
    <g
      style={{
        animation: `n-info-cir ${speed}s cubic-bezier(.455,.03,.515,.955) both infinite`,
      }}
    >
      <circle cx='12.29' cy='12' r='8' stroke={color} strokeWidth='1.5'></circle>
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.29 8.143v4.55'
      ></path>
      <circle cx='12.29' cy='14.957' r='.9' fill={secondaryColor}></circle>
    </g>
  </svg>
)

export const ExclamationTriangle = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 0.8,
  delay = 1,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>
      {`@keyframes n-info-tri{0%,to{transform:rotate(0deg);transform-origin:center}10%,90%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-6deg)}30%,50%,70%{transform:rotate(6deg)}80%{transform:rotate(-2deg)}}.prefix__n-info-tri{animation:n-info-tri ${speed}s cubic-bezier(.455,.03,.515,.955) both infinite}`}
    </style>
    <path
      className='prefix__n-info-tri'
      style={{
        animationDelay: `${delay}s`,
      }}
      stroke={color}
      strokeWidth='1.5'
      d='M11.134 6.844a1 1 0 011.732 0l5.954 10.312a1 1 0 01-.866 1.5H6.046a1 1 0 01-.866-1.5l5.954-10.312z'
    ></path>
    <g className='prefix__n-info-tri'>
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 10.284v3.206'
      ></path>
      <circle cx='12' cy='15.605' r='.832' fill={secondaryColor}></circle>
    </g>
  </svg>
)

export const HexagonExclamation = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 0.8,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>
      {`@keyframes n-info-hex{0%,to{transform:rotate(0deg);transform-origin:center}10%,90%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-6deg)}30%,50%,70%{transform:rotate(6deg)}80%{transform:rotate(-2deg)}}.prefix__n-info-hex{animation:n-info-hex ${speed}s cubic-bezier(.455,.03,.515,.955) both infinite}`}
    </style>
    <g className='prefix__n-info-hex'>
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 8.143v4.55'
      ></path>
      <circle cx='12' cy='14.957' r='.9' fill={secondaryColor}></circle>
    </g>
    <path
      className='prefix__n-info-hex'
      style={{ animationDelay: `${delay}s` }}
      stroke={color}
      strokeWidth='1.5'
      d='M19.994 14.753a1 1 0 01-.282.712l-4.007 4.134a1 1 0 01-.702.304l-5.756.09a1 1 0 01-.712-.281l-4.134-4.007a1 1 0 01-.304-.702l-.09-5.756a1 1 0 01.281-.712l4.007-4.134a1 1 0 01.702-.304l5.756-.09a1 1 0 01.712.281l4.134 4.007a1 1 0 01.304.702l.09 5.756z'
    ></path>
  </svg>
)

export const InfoQuestion = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 0.8,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>
      {
        '@keyframes n-info-ques{0%,to{transform:rotate(0deg);transform-origin:center}10%,90%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-6deg)}30%,50%,70%{transform:rotate(6deg)}80%{transform:rotate(-2deg)}}'
      }
    </style>
    <circle cx='12' cy='12' r='8' stroke={color} strokeWidth='1.5'></circle>
    <path
      fill={secondaryColor}
      d='M14.325 9.956c0 .298-.103.605-.308.924a3.726 3.726 0 01-.68.786c-.657.566-.987.983-.987 1.252 0 .595-.233.892-.7.892a.688.688 0 01-.531-.233c-.135-.156-.202-.365-.202-.627s.064-.506.191-.732c.135-.234.294-.44.478-.616.184-.184.368-.361.552-.531.453-.41.68-.782.68-1.115a.627.627 0 00-.277-.53.957.957 0 00-.615-.213.943.943 0 00-.606.212c-.17.135-.332.273-.488.414a.738.738 0 01-.51.202.614.614 0 01-.467-.19.68.68 0 01-.18-.468c0-.333.23-.669.69-1.009a2.47 2.47 0 011.518-.52c.722 0 1.31.202 1.763.605.452.404.679.903.679 1.497zm-2.697 4.449c.248 0 .443.081.584.244.142.156.213.35.213.584a.959.959 0 01-.245.637.787.787 0 01-.615.276.721.721 0 01-.574-.244.903.903 0 01-.201-.595c0-.234.078-.442.233-.626a.776.776 0 01.605-.276z'
      style={{
        animation: `n-info-ques ${speed}s cubic-bezier(.455,.03,.515,.955) both infinite`,
      }}
    ></path>
  </svg>
)

export const Info = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 0.8,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>
      {
        '@keyframes n-info{0%,to{transform:rotate(0deg);transform-origin:center}10%,90%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-6deg)}30%,50%,70%{transform:rotate(6deg)}80%{transform:rotate(-2deg)}}'
      }
    </style>
    <circle cx='12.29' cy='12' r='8' stroke={color} strokeWidth='1.5'></circle>
    <path
      fill={secondaryColor}
      d='M12.924 15.106h.713c.113 0 .17.057.17.17v.554c0 .113-.057.17-.17.17h-2.693c-.113 0-.17-.057-.17-.17v-.554c0-.113.057-.17.17-.17h.713v-3.78h-.611c-.113 0-.17-.056-.17-.169v-.588c0-.114.057-.17.17-.17h1.709c.113 0 .17.056.17.17v4.537zm-1.369-5.714a.804.804 0 01-.215-.577c0-.234.072-.427.215-.577A.776.776 0 0112.143 8c.25 0 .445.08.589.238.15.15.226.343.226.577a.782.782 0 01-.226.577c-.151.15-.35.226-.6.226-.241 0-.434-.075-.577-.226z'
      style={{
        animation: `n-info ${speed}s cubic-bezier(.455,.03,.515,.955) both infinite`,
      }}
    ></path>
  </svg>
)

export const NotificationAdd = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>
      {
        '@keyframes add-notify{0%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}}@keyframes n-add-2{0%,to{transform:rotate(0deg);transform-origin:top center}10%,90%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-4deg)}30%,50%,70%{transform:rotate(4deg)}80%{transform:rotate(-2deg)}}'
      }
    </style>
    <g
      style={{
        animation: `n-add-2 ${speed + 4}s cubic-bezier(.455,.03,.515,.955) both infinite`,
      }}
      stroke={color}
      strokeWidth='1.5'
    >
      <path d='M12 3.398a5 5 0 00-5 5v2c0 .758-.442 1.505-1.005 2.012A3 3 0 008 17.642h8a3 3 0 002.005-5.232C17.442 11.903 17 11.156 17 10.398v-2a5 5 0 00-5-5z'></path>
      <path strokeLinecap='round' d='M14.39 20.312l-.043.01a9.715 9.715 0 01-4.67-.01'></path>
    </g>
    <path
      fill={secondaryColor}
      fillRule='evenodd'
      d='M12.75 9.49a.75.75 0 00-1.5 0v1.401h-1.4a.75.75 0 000 1.5h1.4v1.401a.75.75 0 001.5 0v-1.4h1.4a.75.75 0 000-1.5h-1.4V9.49z'
      clipRule='evenodd'
      style={{
        animation: `add-notify ${speed}s ${speed}s infinite both`,
        transformOrigin: 'center center',
      }}
    ></path>
  </svg>
)

export const NotificationInfo = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1.5,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>
      {
        '@keyframes n-info-2{0%,to{transform:rotate(0deg);transform-origin:top center}10%,90%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-6deg)}30%,50%,70%{transform:rotate(6deg)}80%{transform:rotate(-2deg)}}'
      }
    </style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M12 3.398a5 5 0 00-5 5v2c0 .758-.442 1.505-1.005 2.012A3 3 0 008 17.642h8a3 3 0 002.005-5.232C17.442 11.903 17 11.156 17 10.398v-2a5 5 0 00-5-5z'
    ></path>
    <g
      style={{
        animation: `n-info-2 ${speed}s cubic-bezier(.455,.03,.515,.955) both infinite`,
      }}
    >
      <path
        stroke={color}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.39 20.312l-.043.01a9.715 9.715 0 01-4.67-.01'
      ></path>
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 7.923v3.206'
      ></path>
      <circle cx='12' cy='13.245' r='.832' fill={secondaryColor}></circle>
    </g>
  </svg>
)

export const NotificationRemove = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>
      {
        '@keyframes remove-notify{0%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}}@keyframes n-minus-2{0%,to{transform:rotate(0deg);transform-origin:top center}10%,90%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-4deg)}30%,50%,70%{transform:rotate(4deg)}80%{transform:rotate(-2deg)}}'
      }
    </style>
    <g
      style={{
        animation: `n-minus-2 ${speed + 4}s cubic-bezier(.455,.03,.515,.955) both infinite`,
      }}
      stroke={color}
      strokeWidth='1.5'
    >
      <path d='M12 3.398a5 5 0 00-5 5v2c0 .758-.442 1.505-1.005 2.012A3 3 0 008 17.642h8a3 3 0 002.005-5.232C17.442 11.903 17 11.156 17 10.398v-2a5 5 0 00-5-5z'></path>
      <path strokeLinecap='round' d='M14.39 20.312l-.043.01a9.715 9.715 0 01-4.67-.01'></path>
    </g>
    <path
      fill={secondaryColor}
      fillRule='evenodd'
      d='M9.1 11.641a.75.75 0 01.75-.75h4.3a.75.75 0 010 1.5h-4.3a.75.75 0 01-.75-.75z'
      clipRule='evenodd'
      style={{
        animation: `remove-notify ${speed}s ${speed}s infinite both`,
        transformOrigin: 'center center',
      }}
    ></path>
  </svg>
)

export const NotificationOff = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>{'@keyframes n-off{to{stroke-dashoffset:0}}'}</style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M12 3.398a5 5 0 00-5 5v2c0 .758-.442 1.505-1.005 2.012A3 3 0 008 17.642h8a3 3 0 002.005-5.232C17.442 11.903 17 11.156 17 10.398v-2a5 5 0 00-5-5z'
    ></path>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M14.39 20.312l-.043.01a9.714 9.714 0 01-4.67-.01'
    ></path>
    <path
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M19 5L5 19'
      style={{
        animation: `n-off ${speed}s infinite cubic-bezier(.99,-.1,.01,1.02) alternate`,
      }}
      strokeDashoffset='100'
      strokeDasharray='100'
    ></path>
  </svg>
)

export const NotificationSnooze = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1.5,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>
      {
        '@keyframes n-snooze{0%{transform:scale(.2);opacity:.8}80%{transform:scale(1.2);opacity:1}to{transform:scale(1.2);opacity:0}}'
      }
    </style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M12 3.398a5 5 0 00-5 5v2c0 .758-.442 1.505-1.005 2.012A3 3 0 008 17.642h8a3 3 0 002.005-5.232C17.442 11.903 17 11.156 17 10.398v-2a5 5 0 00-5-5z'
    ></path>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M14.39 20.312l-.043.01a9.714 9.714 0 01-4.67-.01'
    ></path>
    <path
      fill={secondaryColor}
      d='M14.48 13.918H9.676l2.648-3.642H9.677v-.911h4.802l-2.639 3.641h2.64v.912z'
      style={{
        animation: `n-snooze ${speed}s cubic-bezier(.165,.84,.44,1) infinite both`,
        transformOrigin: 'center center',
      }}
    ></path>
  </svg>
)

export const NotificationSquare = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>{'@keyframes n-square{0%,to{transform:scale(1)}50%{transform:scale(.9)}}'}</style>
    <rect width='14' height='14' x='4.283' y='5.717' stroke={color} strokeWidth='1.5' rx='2'></rect>
    <circle
      cx='17.5'
      cy='6.5'
      r='2.217'
      fill={secondaryColor}
      stroke='#fff'
      style={{
        animation: `n-square ${speed}s ease-in-out infinite both`,
        transformOrigin: 'center center',
      }}
    ></circle>
  </svg>
)

export const Notification = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>
      {
        '@keyframes notify{0%,to{transform:rotate(0deg);transform-origin:top center}10%,90%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-6deg)}30%,50%,70%{transform:rotate(6deg)}80%{transform:rotate(-2deg)}}'
      }
    </style>
    <g
      style={{
        animation: `notify ${speed}s cubic-bezier(.455,.03,.515,.955) both infinite`,
      }}
      strokeWidth='1.5'
    >
      <path
        stroke={color}
        d='M12.29 3.398a5 5 0 00-5 5v2c0 .758-.441 1.505-1.005 2.012a3 3 0 002.005 5.232h8a3 3 0 002.006-5.232c-.564-.507-1.005-1.254-1.005-2.012v-2a5 5 0 00-5-5z'
      ></path>
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        d='M14.68 20.312l-.042.01a9.713 9.713 0 01-4.67-.01'
      ></path>
    </g>
  </svg>
)
