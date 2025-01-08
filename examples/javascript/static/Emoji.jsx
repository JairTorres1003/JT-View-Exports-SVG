/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const Angry = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M7.88124 16.2441C8.37391 15.8174 9.02309 15.5091 9.72265 15.3072C10.4301 15.103 11.2142 15 12 15C12.7858 15 13.5699 15.103 14.2774 15.3072C14.9769 15.5091 15.6261 15.8174 16.1188 16.2441'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M17 8L14 10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M7 8L10 10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <circle
      cx='8'
      cy='10'
      r='1.25'
      fill={color}
      stroke={color}
      strokeWidth='0.5'
      strokeLinecap='round'
    />
    <circle
      cx='16'
      cy='10'
      r='1.25'
      fill={color}
      stroke={color}
      strokeWidth='0.5'
      strokeLinecap='round'
    />
  </svg>
)

export const AngryLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9.5' stroke={color} strokeLinecap='round' />
    <path
      d='M8.20857 16.622C8.63044 16.2567 9.20751 15.9763 9.86133 15.7876C10.5191 15.5977 11.256 15.5 12 15.5C12.744 15.5 13.4809 15.5977 14.1387 15.7876C14.7925 15.9763 15.3696 16.2567 15.7914 16.622'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M17 8L14 10' stroke={color} strokeLinecap='round' />
    <path d='M7 8L10 10' stroke={color} strokeLinecap='round' />
    <circle cx='8' cy='10' r='1' fill={color} />
    <circle cx='16' cy='10' r='1' fill={color} />
  </svg>
)

export const Lol = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <circle
      cx='9'
      cy='10'
      r='1.25'
      fill={color}
      stroke={color}
      strokeWidth='0.5'
      strokeLinecap='round'
    />
    <circle
      cx='15'
      cy='10'
      r='1.25'
      fill={color}
      stroke={color}
      strokeWidth='0.5'
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.62886 15C8.34908 15 8.20919 15 8.13456 15.1068C8.05993 15.2136 8.1032 15.3318 8.18974 15.5683C8.70586 16.9788 10.2166 18 12 18C13.7833 18 15.2941 16.9788 15.8102 15.5683C15.8968 15.3318 15.94 15.2136 15.8654 15.1068C15.7908 15 15.6509 15 15.3711 15H8.62886Z'
      fill={color}
    />
  </svg>
)

export const LolLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9.5' stroke={color} strokeLinecap='round' />
    <circle cx='9' cy='10' r='1' fill={color} stroke={color} strokeLinecap='round' />
    <circle cx='15' cy='10' r='1' fill={color} stroke={color} strokeLinecap='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.62886 15C8.34908 15 8.20919 15 8.13456 15.1068C8.05993 15.2136 8.1032 15.3318 8.18974 15.5683C8.70586 16.9788 10.2166 18 12 18C13.7833 18 15.2941 16.9788 15.8102 15.5683C15.8968 15.3318 15.94 15.2136 15.8654 15.1068C15.7908 15 15.6509 15 15.3711 15H8.62886Z'
      fill={color}
    />
  </svg>
)

export const Rofl = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M16 8L8 11' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M8 8L16 11' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M8 14.5556C8 14.504 8 14.4782 8.0019 14.4564C8.02305 14.2147 8.2147 14.0231 8.45642 14.0019C8.47817 14 8.50396 14 8.55556 14H15.4444C15.496 14 15.5218 14 15.5436 14.0019C15.7853 14.0231 15.9769 14.2147 15.9981 14.4564C16 14.4782 16 14.504 16 14.5556V15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15V14.5556Z'
      fill={color}
    />
  </svg>
)

export const RoflLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9.5' stroke={color} strokeLinecap='round' />
    <path d='M16 8L8 11' stroke={color} strokeLinecap='round' />
    <path d='M8 8L16 11' stroke={color} strokeLinecap='round' />
    <path
      d='M8 14.5556C8 14.504 8 14.4782 8.0019 14.4564C8.02305 14.2147 8.2147 14.0231 8.45642 14.0019C8.47817 14 8.50396 14 8.55556 14H15.4444C15.496 14 15.5218 14 15.5436 14.0019C15.7853 14.0231 15.9769 14.2147 15.9981 14.4564C16 14.4782 16 14.504 16 14.5556V15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15V14.5556Z'
      fill={color}
    />
  </svg>
)

export const Sad = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M7.88124 16.2441C8.37391 15.8174 9.02309 15.5091 9.72265 15.3072C10.4301 15.103 11.2142 15 12 15C12.7858 15 13.5699 15.103 14.2774 15.3072C14.9769 15.5091 15.6261 15.8174 16.1188 16.2441'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <circle
      cx='9'
      cy='10'
      r='1.25'
      fill={color}
      stroke={color}
      strokeWidth='0.5'
      strokeLinecap='round'
    />
    <circle
      cx='15'
      cy='10'
      r='1.25'
      fill={color}
      stroke={color}
      strokeWidth='0.5'
      strokeLinecap='round'
    />
  </svg>
)

export const SadAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M7.88124 16.2441C8.37391 15.8174 9.02309 15.5091 9.72265 15.3072C10.4301 15.103 11.2142 15 12 15C12.7858 15 13.5699 15.103 14.2774 15.3072C14.9769 15.5091 15.6261 15.8174 16.1188 16.2441'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <mask
      id='path-3-outside-1_2165_4321'
      maskUnits='userSpaceOnUse'
      x='7'
      y='8'
      width='4'
      height='3'
      fill='black'
    >
      <rect fill='white' x='7' y='8' width='4' height='3' />
      <path d='M9.5 9C9.74028 9 9.86042 9 9.93306 9.12245C10.0057 9.2449 9.96299 9.32308 9.87758 9.47943C9.8323 9.56233 9.7751 9.63911 9.70711 9.70711C9.51957 9.89464 9.26522 10 9 10C8.73478 10 8.48043 9.89464 8.29289 9.70711C8.2249 9.63911 8.16771 9.56233 8.12242 9.47944C8.03701 9.32308 7.9943 9.2449 8.06694 9.12245C8.13958 9 8.25972 9 8.5 9L9 9H9.5Z' />
    </mask>
    <path
      d='M9.5 9C9.74028 9 9.86042 9 9.93306 9.12245C10.0057 9.2449 9.96299 9.32308 9.87758 9.47943C9.8323 9.56233 9.7751 9.63911 9.70711 9.70711C9.51957 9.89464 9.26522 10 9 10C8.73478 10 8.48043 9.89464 8.29289 9.70711C8.2249 9.63911 8.16771 9.56233 8.12242 9.47944C8.03701 9.32308 7.9943 9.2449 8.06694 9.12245C8.13958 9 8.25972 9 8.5 9L9 9H9.5Z'
      fill={color}
    />
    <path
      d='M9.5 9C9.74028 9 9.86042 9 9.93306 9.12245C10.0057 9.2449 9.96299 9.32308 9.87758 9.47943C9.8323 9.56233 9.7751 9.63911 9.70711 9.70711C9.51957 9.89464 9.26522 10 9 10C8.73478 10 8.48043 9.89464 8.29289 9.70711C8.2249 9.63911 8.16771 9.56233 8.12242 9.47944C8.03701 9.32308 7.9943 9.2449 8.06694 9.12245C8.13958 9 8.25972 9 8.5 9L9 9H9.5Z'
      stroke={color}
      strokeLinecap='round'
      mask='url(#path-3-outside-1_2165_4321)'
    />
    <mask
      id='path-4-outside-2_2165_4321'
      maskUnits='userSpaceOnUse'
      x='13'
      y='8'
      width='4'
      height='3'
      fill='black'
    >
      <rect fill='white' x='13' y='8' width='4' height='3' />
      <path d='M15.5 9C15.7403 9 15.8604 9 15.9331 9.12245C16.0057 9.2449 15.963 9.32308 15.8776 9.47943C15.8323 9.56233 15.7751 9.63911 15.7071 9.70711C15.5196 9.89464 15.2652 10 15 10C14.7348 10 14.4804 9.89464 14.2929 9.70711C14.2249 9.63911 14.1677 9.56233 14.1224 9.47944C14.037 9.32308 13.9943 9.2449 14.0669 9.12245C14.1396 9 14.2597 9 14.5 9L15 9H15.5Z' />
    </mask>
    <path
      d='M15.5 9C15.7403 9 15.8604 9 15.9331 9.12245C16.0057 9.2449 15.963 9.32308 15.8776 9.47943C15.8323 9.56233 15.7751 9.63911 15.7071 9.70711C15.5196 9.89464 15.2652 10 15 10C14.7348 10 14.4804 9.89464 14.2929 9.70711C14.2249 9.63911 14.1677 9.56233 14.1224 9.47944C14.037 9.32308 13.9943 9.2449 14.0669 9.12245C14.1396 9 14.2597 9 14.5 9L15 9H15.5Z'
      fill={color}
    />
    <path
      d='M15.5 9C15.7403 9 15.8604 9 15.9331 9.12245C16.0057 9.2449 15.963 9.32308 15.8776 9.47943C15.8323 9.56233 15.7751 9.63911 15.7071 9.70711C15.5196 9.89464 15.2652 10 15 10C14.7348 10 14.4804 9.89464 14.2929 9.70711C14.2249 9.63911 14.1677 9.56233 14.1224 9.47944C14.037 9.32308 13.9943 9.2449 14.0669 9.12245C14.1396 9 14.2597 9 14.5 9L15 9H15.5Z'
      stroke={color}
      strokeLinecap='round'
      mask='url(#path-4-outside-2_2165_4321)'
    />
  </svg>
)

export const SadAlt2 = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M8.32429 16.2726C8.74217 16.1822 9.3005 16.1149 9.92802 16.0696C10.5633 16.0237 11.2773 16 12 16C12.7227 16 13.4367 16.0237 14.072 16.0696C14.6995 16.1149 15.2578 16.1822 15.6757 16.2726'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <mask
      id='path-3-outside-1_2165_4331'
      maskUnits='userSpaceOnUse'
      x='7'
      y='9'
      width='4'
      height='3'
      fill='black'
    >
      <rect fill='white' x='7' y='9' width='4' height='3' />
      <path d='M9.5 10C9.74028 10 9.86042 10 9.93306 10.1225C10.0057 10.2449 9.96299 10.3231 9.87758 10.4794C9.8323 10.5623 9.7751 10.6391 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.2249 10.6391 8.16771 10.5623 8.12242 10.4794C8.03701 10.3231 7.9943 10.2449 8.06694 10.1225C8.13958 10 8.25972 10 8.5 10L9 10H9.5Z' />
    </mask>
    <path
      d='M9.5 10C9.74028 10 9.86042 10 9.93306 10.1225C10.0057 10.2449 9.96299 10.3231 9.87758 10.4794C9.8323 10.5623 9.7751 10.6391 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.2249 10.6391 8.16771 10.5623 8.12242 10.4794C8.03701 10.3231 7.9943 10.2449 8.06694 10.1225C8.13958 10 8.25972 10 8.5 10L9 10H9.5Z'
      fill={color}
    />
    <path
      d='M9.5 10C9.74028 10 9.86042 10 9.93306 10.1225C10.0057 10.2449 9.96299 10.3231 9.87758 10.4794C9.8323 10.5623 9.7751 10.6391 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.2249 10.6391 8.16771 10.5623 8.12242 10.4794C8.03701 10.3231 7.9943 10.2449 8.06694 10.1225C8.13958 10 8.25972 10 8.5 10L9 10H9.5Z'
      stroke={color}
      strokeLinecap='round'
      mask='url(#path-3-outside-1_2165_4331)'
    />
    <mask
      id='path-4-outside-2_2165_4331'
      maskUnits='userSpaceOnUse'
      x='13'
      y='9'
      width='4'
      height='3'
      fill='black'
    >
      <rect fill='white' x='13' y='9' width='4' height='3' />
      <path d='M15.5 10C15.7403 10 15.8604 10 15.9331 10.1225C16.0057 10.2449 15.963 10.3231 15.8776 10.4794C15.8323 10.5623 15.7751 10.6391 15.7071 10.7071C15.5196 10.8946 15.2652 11 15 11C14.7348 11 14.4804 10.8946 14.2929 10.7071C14.2249 10.6391 14.1677 10.5623 14.1224 10.4794C14.037 10.3231 13.9943 10.2449 14.0669 10.1225C14.1396 10 14.2597 10 14.5 10L15 10H15.5Z' />
    </mask>
    <path
      d='M15.5 10C15.7403 10 15.8604 10 15.9331 10.1225C16.0057 10.2449 15.963 10.3231 15.8776 10.4794C15.8323 10.5623 15.7751 10.6391 15.7071 10.7071C15.5196 10.8946 15.2652 11 15 11C14.7348 11 14.4804 10.8946 14.2929 10.7071C14.2249 10.6391 14.1677 10.5623 14.1224 10.4794C14.037 10.3231 13.9943 10.2449 14.0669 10.1225C14.1396 10 14.2597 10 14.5 10L15 10H15.5Z'
      fill={color}
    />
    <path
      d='M15.5 10C15.7403 10 15.8604 10 15.9331 10.1225C16.0057 10.2449 15.963 10.3231 15.8776 10.4794C15.8323 10.5623 15.7751 10.6391 15.7071 10.7071C15.5196 10.8946 15.2652 11 15 11C14.7348 11 14.4804 10.8946 14.2929 10.7071C14.2249 10.6391 14.1677 10.5623 14.1224 10.4794C14.037 10.3231 13.9943 10.2449 14.0669 10.1225C14.1396 10 14.2597 10 14.5 10L15 10H15.5Z'
      stroke={color}
      strokeLinecap='round'
      mask='url(#path-4-outside-2_2165_4331)'
    />
  </svg>
)

export const SadAlt2Light = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9.5' stroke={color} strokeLinecap='round' />
    <path
      d='M8.4301 16.7613C8.81457 16.6781 9.34621 16.6129 9.96401 16.5683C10.5857 16.5234 11.2876 16.5 12 16.5C12.7124 16.5 13.4143 16.5234 14.036 16.5683C14.6538 16.6129 15.1854 16.6781 15.5699 16.7613'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M9.5 10C9.74028 10 9.86042 10 9.93306 10.1225C10.0057 10.2449 9.96299 10.3231 9.87758 10.4794C9.8323 10.5623 9.7751 10.6391 9.70711 10.7071C9.51957 10.8946 9.26522 11 9 11C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.2249 10.6391 8.16771 10.5623 8.12242 10.4794C8.03701 10.3231 7.9943 10.2449 8.06694 10.1225C8.13958 10 8.25972 10 8.5 10L9 10H9.5Z'
      fill={color}
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M15.5 10C15.7403 10 15.8604 10 15.9331 10.1225C16.0057 10.2449 15.963 10.3231 15.8776 10.4794C15.8323 10.5623 15.7751 10.6391 15.7071 10.7071C15.5196 10.8946 15.2652 11 15 11C14.7348 11 14.4804 10.8946 14.2929 10.7071C14.2249 10.6391 14.1677 10.5623 14.1224 10.4794C14.037 10.3231 13.9943 10.2449 14.0669 10.1225C14.1396 10 14.2597 10 14.5 10L15 10H15.5Z'
      fill={color}
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const SadAltLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9.5' stroke={color} strokeLinecap='round' />
    <path
      d='M8.20857 16.622C8.63044 16.2567 9.20751 15.9763 9.86133 15.7876C10.5191 15.5977 11.256 15.5 12 15.5C12.744 15.5 13.4809 15.5977 14.1387 15.7876C14.7925 15.9763 15.3696 16.2567 15.7914 16.622'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M9.5 9C9.74028 9 9.86042 9 9.93306 9.12245C10.0057 9.2449 9.96299 9.32308 9.87758 9.47943C9.8323 9.56233 9.7751 9.63911 9.70711 9.70711C9.51957 9.89464 9.26522 10 9 10C8.73478 10 8.48043 9.89464 8.29289 9.70711C8.2249 9.63911 8.16771 9.56233 8.12242 9.47944C8.03701 9.32308 7.9943 9.2449 8.06694 9.12245C8.13958 9 8.25972 9 8.5 9L9 9H9.5Z'
      fill={color}
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M15.5 9C15.7403 9 15.8604 9 15.9331 9.12245C16.0057 9.2449 15.963 9.32308 15.8776 9.47943C15.8323 9.56233 15.7751 9.63911 15.7071 9.70711C15.5196 9.89464 15.2652 10 15 10C14.7348 10 14.4804 9.89464 14.2929 9.70711C14.2249 9.63911 14.1677 9.56233 14.1224 9.47944C14.037 9.32308 13.9943 9.2449 14.0669 9.12245C14.1396 9 14.2597 9 14.5 9L15 9H15.5Z'
      fill={color}
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const SadLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9.5' stroke={color} strokeLinecap='round' />
    <path
      d='M8.20857 16.622C8.63044 16.2567 9.20751 15.9763 9.86133 15.7876C10.5191 15.5977 11.256 15.5 12 15.5C12.744 15.5 13.4809 15.5977 14.1387 15.7876C14.7925 15.9763 15.3696 16.2567 15.7914 16.622'
      stroke={color}
      strokeLinecap='round'
    />
    <circle cx='9' cy='10' r='1' fill={color} stroke={color} strokeLinecap='round' />
    <circle cx='15' cy='10' r='1' fill={color} stroke={color} strokeLinecap='round' />
  </svg>
)

export const Wow = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <circle
      cx='9'
      cy='9'
      r='1.25'
      fill={color}
      stroke={color}
      strokeWidth='0.5'
      strokeLinecap='round'
    />
    <circle
      cx='15'
      cy='9'
      r='1.25'
      fill={color}
      stroke={color}
      strokeWidth='0.5'
      strokeLinecap='round'
    />
    <path
      d='M15 15.5C15 16.8807 13.6569 18 12 18C10.3431 18 9 16.8807 9 15.5C9 14.1193 10.3431 13 12 13C13.6569 13 15 14.1193 15 15.5Z'
      fill={color}
    />
  </svg>
)

export const WowLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9.5' stroke={color} strokeLinecap='round' />
    <circle cx='9' cy='9' r='1' fill={color} stroke={color} strokeLinecap='round' />
    <circle cx='15' cy='9' r='1' fill={color} stroke={color} strokeLinecap='round' />
    <path
      d='M15 15.5C15 16.8807 13.6569 18 12 18C10.3431 18 9 16.8807 9 15.5C9 14.1193 10.3431 13 12 13C13.6569 13 15 14.1193 15 15.5Z'
      fill={color}
    />
  </svg>
)

export const HappyOne = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M9.40192 13.5C9.66523 13.9561 10.0439 14.3348 10.5 14.5981C10.9561 14.8614 11.4734 15 12 15C12.5266 15 13.0439 14.8614 13.5 14.5981C13.9561 14.3348 14.3348 13.9561 14.5981 13.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <rect
      x='6.875'
      y='7.875'
      width='3.25'
      height='2.25'
      rx='1.125'
      fill={color}
      stroke={color}
      strokeWidth='0.25'
      strokeLinecap='round'
    />
    <rect
      x='13.875'
      y='7.875'
      width='3.25'
      height='2.25'
      rx='1.125'
      fill={color}
      stroke={color}
      strokeWidth='0.25'
      strokeLinecap='round'
    />
  </svg>
)

export const Happy = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M7.88124 15.7559C8.37391 16.1826 9.02309 16.4909 9.72265 16.6928C10.4301 16.897 11.2142 17 12 17C12.7858 17 13.5699 16.897 14.2774 16.6928C14.9769 16.4909 15.6261 16.1826 16.1188 15.7559'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <circle
      cx='9'
      cy='10'
      r='1.25'
      fill={color}
      stroke={color}
      strokeWidth='0.5'
      strokeLinecap='round'
    />
    <circle
      cx='15'
      cy='10'
      r='1.25'
      fill={color}
      stroke={color}
      strokeWidth='0.5'
      strokeLinecap='round'
    />
  </svg>
)

export const HappyLightOne = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9.5' stroke={color} strokeLinecap='round' />
    <path
      d='M9.83494 13.25C10.0544 13.63 10.37 13.9456 10.75 14.1651C11.13 14.3845 11.5612 14.5 12 14.5C12.4388 14.5 12.87 14.3845 13.25 14.1651C13.63 13.9456 13.9456 13.63 14.1651 13.25'
      stroke={color}
      strokeLinecap='round'
    />
    <rect x='7' y='8' width='3' height='2' rx='1' fill={color} />
    <rect x='14' y='8' width='3' height='2' rx='1' fill={color} />
  </svg>
)

export const HappyLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9.5' stroke={color} strokeLinecap='round' />
    <path
      d='M8.20857 15.378C8.63044 15.7433 9.20751 16.0237 9.86133 16.2124C10.5191 16.4023 11.256 16.5 12 16.5C12.744 16.5 13.4809 16.4023 14.1387 16.2124C14.7925 16.0237 15.3696 15.7433 15.7914 15.378'
      stroke={color}
      strokeLinecap='round'
    />
    <circle cx='9' cy='10' r='1' fill={color} stroke={color} strokeLinecap='round' />
    <circle cx='15' cy='10' r='1' fill={color} stroke={color} strokeLinecap='round' />
  </svg>
)

export const ThumbDownOne = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M8.85 5H6C5.44772 5 5 5.44771 5 6V12C5 12.5523 5.44772 13 6 13H8.85C8.93284 13 9 12.9328 9 12.85V5.15C9 5.06716 8.93284 5 8.85 5Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M9 13L10.8321 15.7481C10.9416 15.9123 11 16.1054 11 16.3028V19C11 19.5523 11.4477 20 12 20H13C14.1046 20 15 19.1046 15 18V13'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M13 13H17.7655C18.9575 13 19.8849 11.9639 19.7532 10.7791L19.1977 5.77914C19.0851 4.76627 18.229 4 17.2099 4H13.4142C13.149 4 12.8946 4.10536 12.7071 4.29289L12.2929 4.70711C12.1054 4.89464 11.851 5 11.5858 5H9'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const ThumbDown = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M15.65 6.5L18.5 6.5C19.0523 6.5 19.5 6.94772 19.5 7.5L19.5 12.5C19.5 13.0523 19.0523 13.5 18.5 13.5L15.65 13.5C15.5672 13.5 15.5 13.4328 15.5 13.35L15.5 6.65C15.5 6.56716 15.5672 6.5 15.65 6.5Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M15.5 12.5L13.6056 16.2889C13.5361 16.4277 13.5 16.5808 13.5 16.7361L13.5 18.5C13.5 19.0523 13.0523 19.5 12.5 19.5V19.5C11.3954 19.5 10.5 18.6046 10.5 17.5L10.5 13.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M12.5 13.5L6.5028 13.5C5.83629 13.5 5.35632 12.8603 5.54269 12.2204L7.29019 6.22037C7.41451 5.79352 7.80571 5.5 8.2503 5.5L12.0858 5.5C12.351 5.5 12.6054 5.60536 12.7929 5.79289L13.2071 6.20711C13.3946 6.39464 13.649 6.5 13.9142 6.5L15.5 6.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const ThumbUpOne = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M8.85 19H6C5.44772 19 5 18.5523 5 18V12C5 11.4477 5.44772 11 6 11H8.85C8.93284 11 9 11.0672 9 11.15V18.85C9 18.9328 8.93284 19 8.85 19Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M9 11L10.8321 8.25192C10.9416 8.08766 11 7.89465 11 7.69722V5C11 4.44772 11.4477 4 12 4H13C14.1046 4 15 4.89543 15 6V11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M13 11H17.7655C18.9575 11 19.8849 12.0361 19.7532 13.2209L19.1977 18.2209C19.0851 19.2337 18.229 20 17.2099 20H13.4142C13.149 20 12.8946 19.8946 12.7071 19.7071L12.2929 19.2929C12.1054 19.1054 11.851 19 11.5858 19H9'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const ThumbUp = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M8.35 17.5H5.5C4.94772 17.5 4.5 17.0523 4.5 16.5V11.5C4.5 10.9477 4.94772 10.5 5.5 10.5H8.35C8.43284 10.5 8.5 10.5672 8.5 10.65V17.35C8.5 17.4328 8.43284 17.5 8.35 17.5Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M8.5 11.5L10.3944 7.71115C10.4639 7.57229 10.5 7.41918 10.5 7.26393V5.5C10.5 4.94772 10.9477 4.5 11.5 4.5V4.5C12.6046 4.5 13.5 5.39543 13.5 6.5V10.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M11.5 10.5H17.4972C18.1637 10.5 18.6437 11.1397 18.4573 11.7796L16.7098 17.7796C16.5855 18.2065 16.1943 18.5 15.7497 18.5H11.9142C11.649 18.5 11.3946 18.3946 11.2071 18.2071L10.7929 17.7929C10.6054 17.6054 10.351 17.5 10.0858 17.5H8.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)
