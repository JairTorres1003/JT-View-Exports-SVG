/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const Chat = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 0.8,
  delay = 0,
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
      {'@keyframes chatMotion{0%,to{transform:translateY(0)}50%{transform:translateY(-1px)}}'}
    </style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M18.25 12v5c0 .69-.56 1.25-1.25 1.25h-5A6.25 6.25 0 1118.25 12z'
    ></path>
    <circle
      cx='9'
      cy='12'
      r='1'
      fill={secondaryColor}
      style={{ animation: `chatMotion ${speed}s ease-in-out infinite` }}
    ></circle>
    <circle
      cx='12'
      cy='12'
      r='1'
      fill={secondaryColor}
      style={{
        animation: `chatMotion ${speed}s ease-in-out infinite`,
        animationDelay: `${delay + 0.3}s`,
      }}
    ></circle>
    <circle
      cx='15'
      cy='12'
      r='1'
      fill={secondaryColor}
      style={{
        animation: `chatMotion ${speed}s ease-in-out infinite`,
        animationDelay: `${delay + 0.5}s`,
      }}
    ></circle>
  </svg>
)
export const Chat2 = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 0.8,
  delay = 0,
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
      {'@keyframes chatMotion2{0%,to{transform:translateY(0)}50%{transform:translateY(-1px)}}'}
    </style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M10 6.75h4A4.25 4.25 0 0118.25 11v6.25H10A4.25 4.25 0 015.75 13v-2A4.25 4.25 0 0110 6.75z'
    ></path>
    <circle
      cx='9'
      cy='12'
      r='1'
      fill={secondaryColor}
      style={{ animation: `chatMotion2 ${speed}s ease-in-out infinite` }}
    ></circle>
    <circle
      cx='12'
      cy='12'
      r='1'
      fill={secondaryColor}
      style={{
        animation: `chatMotion2 ${speed}s ease-in-out infinite`,
        animationDelay: `${delay + 0.3}s`,
      }}
    ></circle>
    <circle
      cx='15'
      cy='12'
      r='1'
      fill={secondaryColor}
      style={{
        animation: `chatMotion2 ${speed}s ease-in-out infinite`,
        animationDelay: `${delay + 0.5}s`,
      }}
    ></circle>
  </svg>
)
export const Chat3 = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
  delay = 0,
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
      {'@keyframes chatMotion3{0%,to{transform:translateY(0)}50%{transform:translateY(-1px)}}'}
    </style>
    <path
      fill={color}
      filRule='evenodd'
      d='M12.121 6.74a5.25 5.25 0 00-4.414 8.093l.177.274-1.057 1.986 2.244-.82.256.162A5.25 5.25 0 1012.12 6.74zm-6.75 5.25a6.75 6.75 0 113.422 5.874l-2.52.876a.95.95 0 01-1.115-1.162l1.115-2.216a6.722 6.722 0 01-.902-3.372z'
      cliRule='evenodd'
    ></path>
    <circle
      cx='9'
      cy='12'
      r='1'
      fill={secondaryColor}
      style={{ animation: `chatMotion3 ${speed}s ease-in-out infinite` }}
    ></circle>
    <circle
      cx='12'
      cy='12'
      r='1'
      fill={secondaryColor}
      style={{
        animation: `chatMotion3 ${speed}s ease-in-out infinite`,
        animationDelay: `${delay + 0.3}s`,
      }}
    ></circle>
    <circle
      cx='15'
      cy='12'
      r='1'
      fill={secondaryColor}
      style={{
        animation: `chatMotion3 ${speed}s ease-in-out infinite`,
        animationDelay: `${delay + 0.5}s`,
      }}
    ></circle>
  </svg>
)
export const Phone = ({
  size = 24,
  color = 'currentColor',
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
        '@keyframes phone{0%,to{transform:rotate(0deg);transform-origin:0 100%}10%,90%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-4deg)}30%,50%,70%{transform:rotate(4deg)}80%{transform:rotate(-2deg)}}'
      }
    </style>
    <path
      fill={color}
      d='M15.758 19a10.761 10.761 0 01-7.603-3.162A10.805 10.805 0 015 8.22c0-.854.339-1.673.941-2.277A3.21 3.21 0 018.214 5c.18-.001.36.015.537.05.172.024.34.067.503.125a.699.699 0 01.455.525l.957 4.2a.7.7 0 01-.182.644c-.09.098-.098.105-.957.553a6.93 6.93 0 003.402 3.423c.454-.868.461-.875.559-.966a.699.699 0 01.643-.182l4.191.959a.699.699 0 01.503.455A3.046 3.046 0 0119 15.829a3.223 3.223 0 01-.968 2.255 3.21 3.21 0 01-2.274.916zM8.215 6.4a1.822 1.822 0 00-1.817 1.82 9.396 9.396 0 002.744 6.63 9.36 9.36 0 006.617 2.75 1.821 1.821 0 001.817-1.82v-.231l-3.242-.75-.202.386c-.315.609-.545 1.05-1.132.812a8.276 8.276 0 01-5.016-5.047c-.251-.546.224-.798.824-1.113l.385-.189L8.444 6.4h-.23z'
      style={{
        animation: `phone ${speed}s cubic-bezier(1,.01,.75,2.17) both infinite`,
      }}
    ></path>
  </svg>
)
