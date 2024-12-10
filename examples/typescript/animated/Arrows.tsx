import React from 'react'

import { type IconAnimatedComponentProps } from '../types'

export const ChevronDownCircle: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes slide-9{to{transform:translateY(1px)}}'}</style>
    <rect width='14' height='14' x='5.523' y='5' stroke={color} strokeWidth='1.5' rx='7'></rect>
    <path
      fill={secondaryColor}
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='.4'
      d='M15.369 11.258a.429.429 0 10-.549-.659l-2.297 1.915-2.297-1.915a.429.429 0 00-.549.659l2.566 2.138a.425.425 0 00.467.061.425.425 0 00.093-.06l2.566-2.14z'
      style={{
        animation: `slide-9 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ChevronRightCircle: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes slide-15{to{transform:translateX(1px)}}'}</style>
    <rect width='14' height='14' x='5.523' y='5' stroke={color} strokeWidth='1.5' rx='7'></rect>
    <path
      fill={secondaryColor}
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='.4'
      d='M11.781 9.154a.429.429 0 00-.659.549L13.038 12l-1.915 2.297a.429.429 0 10.659.549l2.138-2.566a.428.428 0 000-.56l-2.138-2.566z'
      style={{
        animation: `slide-15 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ChevronUpCircle: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes slide-18{to{transform:translateY(-1px)}}'}</style>
    <rect width='14' height='14' x='5.523' y='5' stroke={color} strokeWidth='1.5' rx='7'></rect>
    <path
      fill={secondaryColor}
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='.4'
      d='M15.369 12.742a.429.429 0 11-.549.659l-2.297-1.915-2.297 1.915a.429.429 0 01-.549-.659l2.566-2.138a.425.425 0 01.467-.061.425.425 0 01.093.06l2.566 2.14z'
      style={{
        animation: `slide-18 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ChevronLeftCircle: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes slide-12{to{transform:translateX(-1px)}}'}</style>
    <rect width='14' height='14' x='5.523' y='5' stroke={color} strokeWidth='1.5' rx='7'></rect>
    <path
      fill={secondaryColor}
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='.4'
      d='M13.012 14.846a.429.429 0 00.659-.549L11.757 12l1.914-2.297a.429.429 0 10-.659-.549l-2.138 2.566a.428.428 0 000 .56l2.138 2.566z'
      style={{
        animation: `slide-12 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ChevronDownSquare: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes slide-10{to{transform:translateY(1px)}}'}</style>
    <rect width='14' height='14' x='5.523' y='5' stroke={color} strokeWidth='1.5' rx='4'></rect>
    <path
      fill={secondaryColor}
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='.4'
      d='M15.369 11.258a.429.429 0 10-.549-.659l-2.297 1.915-2.297-1.915a.429.429 0 00-.549.659l2.566 2.138a.425.425 0 00.467.061.425.425 0 00.093-.06l2.566-2.14z'
      style={{
        animation: `slide-10 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ChevronRightSquare: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes slide-16{to{transform:translateX(1px)}}'}</style>
    <rect width='14' height='14' x='5.523' y='5' stroke={color} strokeWidth='1.5' rx='4'></rect>
    <path
      fill={secondaryColor}
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='.4'
      d='M11.781 9.154a.429.429 0 00-.659.549L13.038 12l-1.915 2.297a.429.429 0 10.659.549l2.138-2.566a.428.428 0 000-.56l-2.138-2.566z'
      style={{
        animation: `slide-16 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ChevronUpSquare: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes slide-19{to{transform:translateY(-1px)}}'}</style>
    <rect width='14' height='14' x='5.523' y='5' stroke={color} strokeWidth='1.5' rx='4'></rect>
    <path
      fill={secondaryColor}
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='.4'
      d='M15.369 12.742a.429.429 0 11-.549.659l-2.297-1.915-2.297 1.915a.429.429 0 01-.549-.659l2.566-2.138a.425.425 0 01.467-.061.425.425 0 01.093.06l2.566 2.14z'
      style={{
        animation: `slide-19 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ChevronLeftSquare: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes slide-13{to{transform:translateX(-1px)}}'}</style>
    <rect width='14' height='14' x='5.523' y='5' stroke={color} strokeWidth='1.5' rx='4'></rect>
    <path
      fill={secondaryColor}
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='.4'
      d='M13.012 14.846a.429.429 0 00.659-.549L11.757 12l1.914-2.297a.429.429 0 10-.659-.549l-2.138 2.566a.428.428 0 000 .56l2.138 2.566z'
      style={{
        animation: `slide-13 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ChevronDown: React.FC<Omit<IconAnimatedComponentProps, 'secondaryColor'>> = ({
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
      {`.slide-11 { animation: slide-11 ${speed}s infinite alternate both cubic-bezier(1, -0.01, 0, 0.98); } @keyframes slide-11 { 100% { transform: translateY(2px) } }`}
    </style>
    <path
      className='slide-11'
      fill={color}
      d='M6.832 10.516a.857.857 0 111.097-1.317l4.594 3.828L17.117 9.2a.857.857 0 011.098 1.317l-5.132 4.276a.853.853 0 01-.933.123.85.85 0 01-.187-.123l-5.131-4.276z'
    ></path>
  </svg>
)

export const ChevronRight: React.FC<Omit<IconAnimatedComponentProps, 'secondaryColor'>> = ({
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
    <style>{'@keyframes slide-17{to{transform:translateX(2px)}}'}</style>
    <path
      fill={color}
      d='M11.039 17.692a.857.857 0 01-1.317-1.098L13.55 12 9.722 7.406a.857.857 0 111.317-1.098l4.276 5.132a.848.848 0 01.208.56.854.854 0 01-.208.56l-4.276 5.132z'
      style={{
        animation: `slide-17 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ChevronUp: React.FC<Omit<IconAnimatedComponentProps, 'secondaryColor'>> = ({
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
    <style>{'@keyframes slide-20{to{transform:translateY(-2px)}}'}</style>
    <path
      fill={color}
      d='M18.215 13.484a.857.857 0 11-1.098 1.317l-4.594-3.828L7.93 14.8a.857.857 0 11-1.097-1.317l5.131-4.276a.854.854 0 011.12 0l5.132 4.276z'
      style={{
        animation: `slide-20 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ChevronLeft: React.FC<Omit<IconAnimatedComponentProps, 'secondaryColor'>> = ({
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
    <style>{'@keyframes slide-14{to{transform:translateX(-2px)}}'}</style>
    <path
      fill={color}
      d='M14.008 17.692a.857.857 0 001.317-1.098L11.495 12l3.829-4.594a.857.857 0 00-1.317-1.098L9.73 11.44a.85.85 0 00-.208.56.854.854 0 00.208.56l4.277 5.132z'
      style={{
        animation: `slide-14 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ArrowDown: React.FC<Omit<IconAnimatedComponentProps, 'secondaryColor'>> = ({
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
    <style>{'@keyframes slide-2{to{transform:translateY(2px)}}'}</style>
    <path
      fill={color}
      fillRule='evenodd'
      d='M17.358 12.632a.714.714 0 01-.092 1.006l-4.276 3.564a.712.712 0 01-.933 0L7.78 13.638a.714.714 0 11.915-1.097l3.078 2.565V7.375a.75.75 0 011.5 0v7.73l3.079-2.564a.714.714 0 011.006.091z'
      clipRule='evenodd'
      style={{
        animation: `slide-2 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ArrowRight: React.FC<Omit<IconAnimatedComponentProps, 'secondaryColor'>> = ({
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
      {`.slide-6 { animation: slide-6 ${speed}s infinite alternate both cubic-bezier(1, -0.01, 0, 0.98); } @keyframes slide-6 { 100% { transform: translateX(2px) } }`}
    </style>
    <path
      className='slide-6'
      fill={color}
      fillRule='evenodd'
      d='M13.155 16.834a.714.714 0 001.006-.091l3.564-4.277a.711.711 0 000-.932L14.16 7.257a.714.714 0 00-1.097.915l2.565 3.078H7.9a.75.75 0 000 1.5h7.73l-2.565 3.078a.714.714 0 00.091 1.006z'
      clipRule='evenodd'
    ></path>
  </svg>
)

export const ArrowUp: React.FC<Omit<IconAnimatedComponentProps, 'secondaryColor'>> = ({
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
    <style>{'@keyframes slide-8{to{transform:translateY(2px)}}'}</style>
    <path
      fill={color}
      fillRule='evenodd'
      d='M17.358 11.368a.714.714 0 00-.092-1.006L12.99 6.798a.71.71 0 00-.778-.102.708.708 0 00-.155.102L7.78 10.362a.714.714 0 10.915 1.097l3.078-2.565v7.731a.75.75 0 001.5 0v-7.73l3.079 2.564a.714.714 0 001.006-.091z'
      clipRule='evenodd'
      style={{
        animation: `slide-8 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    ></path>
  </svg>
)

export const ArrowLeft: React.FC<Omit<IconAnimatedComponentProps, 'secondaryColor'>> = ({
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
      {`@keyframes slide-4{to{transform:translateX(2px)}}.prefix__slide-4{animation:slide-4 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)}`}
    </style>
    <g className='prefix__slide-4'>
      <path
        className='prefix__slide-4'
        fill={color}
        fillRule='evenodd'
        d='M11.891 7.166a.714.714 0 00-1.006.091l-3.564 4.277a.71.71 0 00-.102.777.71.71 0 00.102.155l3.564 4.277a.714.714 0 001.098-.915L9.417 12.75h7.731a.75.75 0 100-1.5h-7.73l2.565-3.078a.714.714 0 00-.092-1.006z'
        clipRule='evenodd'
      ></path>
    </g>
  </svg>
)

export const ArrowDownTwo: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes slide-1{to{transform:translateY(2px)}}'}</style>
    <g
      style={{
        animation: `slide-1 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    >
      <path
        fill={color}
        d='M11.773 7.142a.75.75 0 011.5 0h-1.5zm1.5 4.09v.75h-1.5v-.75h1.5zm0-4.09v4.09h-1.5v-4.09h1.5z'
      ></path>
      <path
        stroke={secondaryColor}
        strokeWidth='1.5'
        d='M12.91 15.915l2.143-2.87a.476.476 0 00-.382-.762l-4.295.012a.479.479 0 00-.382.765l2.152 2.858c.19.253.572.254.763-.003z'
      ></path>
    </g>
  </svg>
)

export const ArrowRightTwo: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes slide-5{to{transform:translateX(2px)}}'}</style>
    <g
      style={{
        animation: `slide-5 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    >
      <path
        fill={color}
        d='M7.666 12.75a.75.75 0 010-1.5v1.5zm4.09-1.5h.75v1.5h-.75v-1.5zm-4.09 0h4.09v1.5h-4.09v-1.5z'
      ></path>
      <path
        stroke={secondaryColor}
        strokeWidth='1.5'
        d='M16.438 11.614l-2.87-2.144a.476.476 0 00-.762.382l.012 4.296a.479.479 0 00.766.382l2.857-2.153a.477.477 0 00-.003-.763z'
      ></path>
    </g>
  </svg>
)

export const ArrowUpTwo: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes slide-7{to{transform:translateY(2px)}}'}</style>
    <g
      style={{
        animation: `slide-7 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    >
      <path
        fill={color}
        d='M11.773 16.858a.75.75 0 001.5 0h-1.5zm1.5-4.09v-.75h-1.5v.75h1.5zm0 4.09v-4.09h-1.5v4.09h1.5z'
      ></path>
      <path
        stroke={secondaryColor}
        strokeWidth='1.5'
        d='M12.91 8.085l2.143 2.87a.476.476 0 01-.382.762l-4.295-.012a.479.479 0 01-.382-.765l2.152-2.858a.477.477 0 01.763.003z'
      ></path>
    </g>
  </svg>
)

export const ArrowLeftTwo: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes slide-3{to{transform:translateX(2px)}}'}</style>
    <g
      style={{
        animation: `slide-3 ${speed}s infinite alternate both cubic-bezier(1,-.01,0,.98)`,
      }}
    >
      <path
        fill={color}
        d='M17.38 12.75a.75.75 0 000-1.5v1.5zm-4.09-1.5h-.75v1.5h.75v-1.5zm4.09 0h-4.09v1.5h4.09v-1.5z'
      ></path>
      <path
        stroke={secondaryColor}
        strokeWidth='1.5'
        d='M8.608 11.614l2.87-2.144a.476.476 0 01.762.382l-.012 4.296a.479.479 0 01-.765.382l-2.858-2.153a.477.477 0 01.003-.763z'
      ></path>
    </g>
  </svg>
)
