/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const InfinityLoader = ({
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
    <style>{'@keyframes infinity-load{to{stroke-dashoffset:10}}'}</style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M9.743 10.25c3.213 1.96 5.017 4.676 7.248 4.676 2.588 0 2.791-4.8.518-5.668-3.107-1.187-5.178 3.719-8.284 5.03-1.415.677-3.41 1.014-4.09-1.14-.251-.797-.13-1.65.133-2.442v0c.425-1.278 2.132-1.66 3.35-1.081.304.144.668.346 1.125.625z'
      style={{
        animation: `infinity-load ${speed}s infinite cubic-bezier(.65,.05,.36,1)`,
      }}
      strokeDashoffset='100'
      strokeDasharray='100'
    ></path>
  </svg>
)

export const Loader1 = ({
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
        '@keyframes loader1{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
      }
    </style>
    <g
      style={{
        animation: `loader1 ${speed}s cubic-bezier(.18,.89,.32,1.28) infinite both`,
        transformOrigin: 'center center',
      }}
    >
      <path
        stroke={color}
        strokeWidth='1.5'
        d='M11.929 18.373a6.373 6.373 0 100-12.746 6.373 6.373 0 000 12.746z'
      ></path>
      <path
        fill={secondaryColor}
        d='M17.065 14.175a.422.422 0 00.185.542l.71.364a.383.383 0 00.525-.178 7.17 7.17 0 00-2.93-9.101.382.382 0 00-.532.163l-.363.71a.422.422 0 00.166.547 5.578 5.578 0 012.239 6.952z'
      ></path>
    </g>
  </svg>
)

export const Loader2 = ({
  size = 24,
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
        '@keyframes loader2{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
      }
    </style>
    <path
      fill={secondaryColor}
      d='M17.179 13.605a.431.431 0 00.279.514l.775.245a.393.393 0 00.499-.268 7.318 7.318 0 00-4.5-8.658.39.39 0 00-.507.255l-.245.775a.43.43 0 00.261.523 5.69 5.69 0 013.438 6.614z'
      style={{
        animation: `loader2 ${speed}s cubic-bezier(.63,-.71,.32,1.28) infinite both`,
        transformOrigin: 'center center',
      }}
    ></path>
  </svg>
)

export const Loader3 = ({
  size = 24,
  color = 'currentColor',
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
        '@keyframes loader3{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
      }
    </style>
    <path
      fill={color}
      d='M6.685 13.626a1.626 1.626 0 100-3.252 1.626 1.626 0 000 3.252zm5.315 0a1.626 1.626 0 100-3.252 1.626 1.626 0 000 3.252zm5.316 0a1.626 1.626 0 100-3.252 1.626 1.626 0 000 3.252z'
      style={{
        animation: `loader3 ${speed}s cubic-bezier(.63,-.71,.32,1.28) infinite both`,
        transformOrigin: 'center center',
      }}
    ></path>
  </svg>
)

export const Loader4 = ({
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
        '@keyframes loader4{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
      }
    </style>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M12 6.864v1.333m0 7.606v1.333M17.136 12h-1.333m-7.606 0H6.864m8.768 3.632l-.943-.943M9.311 9.311l-.943-.943m0 7.264l.943-.943m5.378-5.378l.943-.943'
      style={{
        animation: `loader4 ${speed}s linear infinite both`,
        transformOrigin: 'center center',
      }}
    ></path>
  </svg>
)

export const Loader5 = ({
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
        '@keyframes loader5{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
      }
    </style>
    <g
      style={{
        animation: `loader5 ${speed}s linear infinite both`,
        transformOrigin: 'center center',
      }}
    >
      <circle cx='12' cy='12' r='4' stroke={color} strokeWidth='1.5'></circle>
      <circle cx='17' cy='7' r='1' fill={secondaryColor}></circle>
    </g>
  </svg>
)

export const Loader6 = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
  speed = 1,
  delay = 0,
}) => (
  <svg
    viewBox='0 0 24 8'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>
      {
        ' @keyframes loader-18 { 0% { transform: scale(1) rotateZ(0) } 50% { transform: scale(1.5) rotateZ(180deg) } 100% { transform: scale(1) rotateZ(360deg) } } '
      }
    </style>
    <g
      style={{
        animation: `loader-18 ${speed}s ease-out infinite both`,
        transformOrigin: '4px',
        animationDelay: `${delay}s`,
      }}
    >
      <circle cx='4' cy='4' r='1.5' fill={color}></circle>
    </g>
    <g
      style={{
        animation: `loader-18 ${speed}s ease-out infinite both`,
        transformOrigin: '11px',
        animationDelay: `${delay + 0.3}s`,
      }}
    >
      <circle cx='11' cy='4' r='1.5' fill={color}></circle>
    </g>
    <g
      style={{
        animation: `loader-18 ${speed}s ease-out infinite both`,
        transformOrigin: '18px',
        animationDelay: `${delay + 0.6}s`,
      }}
    >
      <circle cx='18' cy='4' r='1.5' fill={color}></circle>
    </g>
  </svg>
)

export const Loader7 = ({
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
        '@keyframes loader-7-1{0%{transform:translateX(0)}to{transform:translateX(6px)}}@keyframes loader-7-2{0%{transform:translateX(0)}to{transform:translateX(-6px)}}'
      }
    </style>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M6.853 10h5'
      style={{
        animation: `loader-7-1 ${speed}s cubic-bezier(.86,0,.07,1) infinite alternate both`,
      }}
    ></path>
    <path
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M12.147 14h5'
      style={{
        animation: `loader-7-2 ${speed}s cubic-bezier(.86,0,.07,1) infinite alternate both`,
      }}
    ></path>
  </svg>
)

export const Loader8 = ({
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
        '@keyframes loader8{0%{transform:scale(1) rotateZ(0)}50%{transform:scale(1.5) rotateZ(180deg)}to{transform:scale(1) rotateZ(360deg)}}'
      }
    </style>
    <g
      style={{
        animation: `loader8 ${speed}s cubic-bezier(.72,.08,.38,.87) infinite both`,
        transformOrigin: 'center',
      }}
    >
      <path stroke={color} strokeLinecap='round' strokeWidth='1.5' d='M12.035 8v8M16 12H8'></path>
      <circle cx='12' cy='12' r='1.635' fill={secondaryColor}></circle>
    </g>
  </svg>
)

export const Loader9 = ({
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
      {'@keyframes loader9{0%{transform:translateY(0)}to{transform:translateY(-6px);fill:#0a0a30}}'}
    </style>
    <path stroke={color} strokeLinecap='round' strokeWidth='1.5' d='M10 15.749h4'></path>
    <path
      fill={secondaryColor}
      d='M10.5 12h3v3h-3z'
      style={{
        animation: `loader9 ${speed}s cubic-bezier(.72,.08,.38,.87) alternate infinite both`,
      }}
    ></path>
  </svg>
)

export const Loader10 = ({
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
    <style>{'@keyframes loader10{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'}</style>
    <g
      style={{
        animation: `loader10 ${speed}s cubic-bezier(.63,-.71,.32,1.28) infinite both`,
        transformOrigin: 'center 48%',
      }}
    >
      <path
        fill={color}
        fillRule='evenodd'
        d='M12 7.375a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm-5.75 4.25a5.75 5.75 0 1111.5 0 5.75 5.75 0 01-11.5 0z'
        clipRule='evenodd'
      ></path>
      <path fill={secondaryColor} d='M12.6 16.625a.6.6 0 11-1.2 0 .6.6 0 011.2 0z'></path>
    </g>
  </svg>
)

export const Loader11 = ({
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
        '@keyframes loader11{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
      }
    </style>
    <g
      style={{
        animation: `loader11 ${speed}s cubic-bezier(.63,-.71,.32,1.28) infinite both`,
        transformOrigin: 'center center',
      }}
    >
      <circle cx='12' cy='12' r='5' stroke={color} strokeWidth='1.5'></circle>
      <circle cx='11.989' cy='14.593' r='1' fill={secondaryColor}></circle>
    </g>
  </svg>
)

export const Loader12 = ({
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
    <style>
      {
        '@keyframes loader12{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
      }
    </style>
    <g
      style={{
        animation: `loader12 ${speed}s cubic-bezier(.63,-.71,.32,1.28) infinite both`,
        transformOrigin: 'center center',
      }}
    >
      <circle cx='12' cy='12' r='5' stroke={color} strokeWidth='1.5'></circle>
      <circle cx='12' cy='17' r='2' fill={secondaryColor}></circle>
    </g>
  </svg>
)

export const Loader13 = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 3,
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
        '@keyframes loader13-1{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes loader13-2{0%{transform:rotate(0)}to{transform:rotate(-360deg)}}'
      }
    </style>
    <path
      stroke={color}
      strokeWidth='.8'
      d='M7.157 7.157h10v10h-10z'
      style={{
        animation: `loader13-1 ${speed}s linear infinite both`,
        transformOrigin: 'center center',
      }}
    ></path>
    <path
      stroke={secondaryColor}
      strokeWidth='.8'
      d='M12 5.151l7.071 7.071L12 19.293l-7.071-7.071z'
      style={{
        animation: `loader13-2 ${speed}s linear infinite both`,
        transformOrigin: 'center center',
      }}
    ></path>
  </svg>
)

export const Loader14 = ({
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
        '@keyframes loader14{0%{transform:scale(.2);opacity:.8}80%{transform:scale(1.2);opacity:0}to{transform:scale(2.2);opacity:0}}'
      }
    </style>
    <path
      fill={color}
      d='M10.5 10.5h3v3h-3z'
      style={{
        animation: `loader14 ${speed}s cubic-bezier(.165,.84,.44,1) infinite both`,
        transformOrigin: 'center center',
      }}
    ></path>
  </svg>
)

export const PlayLoader = ({
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
        '@keyframes loader15{0%{transform:scale(.2);opacity:.8}80%{transform:scale(1.2);opacity:0}to{transform:scale(2.2);opacity:0}}'
      }
    </style>
    <circle
      cx='12'
      cy='12'
      r='6'
      fill={color}
      style={{
        animation: `loader15 ${speed}s cubic-bezier(.165,.84,.44,1) infinite both`,
        transformOrigin: 'center center',
      }}
    ></circle>
    <path
      fill={secondaryColor}
      fillRule='evenodd'
      d='M13.41 11.591a.5.5 0 010 .817l-1.73 1.222a.5.5 0 01-.788-.409v-2.442a.5.5 0 01.789-.409l1.729 1.222z'
      clipRule='evenodd'
    ></path>
  </svg>
)
