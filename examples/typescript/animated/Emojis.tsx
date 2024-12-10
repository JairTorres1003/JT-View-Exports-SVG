import React from 'react'

import { type IconAnimatedComponentProps } from '../types'

export const Happy: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes happy{0%{stroke-dashoffset:0}to{stroke-dashoffset:200}}'}</style>
    <circle cx='12.735' cy='12' r='7' stroke={color} strokeWidth='1.5'></circle>
    <circle cx='9.735' cy='10.277' r='1' fill={color}></circle>
    <circle cx='15.735' cy='10.277' r='1' fill={color}></circle>
    <path
      stroke={secondaryColor}
      strokeLinecap='round'
      d='M15.735 14.147l-.049.04a4.631 4.631 0 01-5.951-.04'
      style={{
        animation: `happy ${speed}s infinite linear`,
      }}
      strokeDasharray='100'
    ></path>
  </svg>
)
export const Love: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes love-face{0%,to{transform:scale(.9)}50%{transform:scale(1.2)}}'}</style>
    <circle cx='12.867' cy='12' r='7' stroke={color} strokeWidth='1.5'></circle>
    <path
      stroke={color}
      strokeLinecap='round'
      d='M15.867 14.147l-.048.04a4.631 4.631 0 01-5.952-.04'
    ></path>
    <path
      fill={secondaryColor}
      d='M9.792 9.65c.042.042.11.042.151 0a.694.694 0 011.122.22.667.667 0 01-.149.738l-.698.687a.5.5 0 01-.701 0l-.698-.687a.672.672 0 010-.957.694.694 0 01.973 0zm6 0c.042.042.11.042.151 0a.694.694 0 011.122.22.667.667 0 01-.149.738l-.698.687a.5.5 0 01-.701 0l-.698-.687a.672.672 0 010-.957.693.693 0 01.973 0z'
      style={{
        animation: `love-face ${speed}s ease-in-out infinite both`,
        transformOrigin: 'center center',
      }}
    ></path>
  </svg>
)
export const Neutral: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes neutral{0%{stroke-dashoffset:0}to{stroke-dashoffset:150}}'}</style>
    <circle cx='12.867' cy='12' r='7' stroke={color} strokeWidth='1.5'></circle>
    <circle cx='9.867' cy='10.277' r='1' fill={color}></circle>
    <circle cx='15.867' cy='10.277' r='1' fill={color}></circle>
    <path
      stroke={secondaryColor}
      strokeLinecap='round'
      d='M9.867 14.147h6'
      style={{
        animation: `neutral ${speed}s infinite linear alternate-reverse`,
      }}
      strokeDasharray='100'
    ></path>
  </svg>
)
export const Sad: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 4,
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
    <style>{'@keyframes sad{0%{stroke-dashoffset:0}to{stroke-dashoffset:200}}'}</style>
    <circle cx='12' cy='12' r='7' stroke={color} strokeWidth='1.5'></circle>
    <circle cx='9' cy='10.277' r='1' fill={color}></circle>
    <circle cx='15' cy='10.277' r='1' fill={color}></circle>
    <path
      stroke={secondaryColor}
      strokeLinecap='round'
      d='M15 15.25l-.049-.04A4.631 4.631 0 009 15.25'
      style={{
        animation: `sad ${speed}s infinite linear`,
      }}
      strokeDasharray='100'
    ></path>
  </svg>
)
export const UpsideDown: React.FC<IconAnimatedComponentProps> = ({
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
        '@keyframes upside{0%{transform:rotateZ(0)}50%{transform:rotateZ(180deg)}to{transform:rotateZ(360deg)}}'
      }
    </style>
    <g
      style={{
        animation: `upside ${speed}s cubic-bezier(.91,.23,.15,.88) both infinite alternate-reverse`,
        transformOrigin: 'center center',
      }}
    >
      <circle
        cx='12'
        cy='12'
        r='7'
        stroke={color}
        strokeWidth='1.5'
        transform='rotate(-180 12 12)'
      ></circle>
      <circle cx='15' cy='13.723' r='1' fill={color} transform='rotate(-180 15 13.723)'></circle>
      <circle cx='9' cy='13.723' r='1' fill={color} transform='rotate(-180 9 13.723)'></circle>
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        d='M9 9.853l.049-.04a4.631 4.631 0 015.951.04'
      ></path>
    </g>
  </svg>
)
export const Wow: React.FC<IconAnimatedComponentProps> = ({
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
        '@keyframes wow{0%,to{transform:translate(0,0) scaleX(.8) scaleY(.8)}50%{transform:translate(0,-1px) scaleX(1.1) scaleY(1.1)}}'
      }
    </style>
    <circle cx='12.602' cy='12' r='7' stroke={color} strokeWidth='1.5'></circle>
    <g
      style={{
        animation: `wow cubic-bezier(1,-.1,0,1.04) ${speed}s infinite`,
        transformOrigin: '50% 50%',
      }}
    >
      <circle cx='9.602' cy='10.277' r='1' fill={color}></circle>
      <circle cx='15.602' cy='10.277' r='1' fill={color}></circle>
      <ellipse cx='12.602' cy='14.5' stroke={secondaryColor} rx='2' ry='2.5'></ellipse>
    </g>
  </svg>
)
