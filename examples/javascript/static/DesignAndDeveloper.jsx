/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const Ten = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M7.5 18.5V5.5L4.5 8.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M10.5 12C10.5 7 11.5833 5.5 14.5 5.5C17.4167 5.5 18.5 7 18.5 12C18.5 17 17.4167 18.5 14.5 18.5C11.5833 18.5 10.5 17 10.5 12Z'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 7L17 17' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const Eleven = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M8 6V18' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M8 6L5 9'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 12C12 7.5 12.5833 6 15.5 6C18.4167 6 19 7.5 19 12C19 16.5 18.4167 18 15.5 18C12.5833 18 12 16.5 12 12Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13 7L18 17'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const Box3D = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 21V13M12 21L5.83752 16.5982C5.42695 16.305 5.22166 16.1583 5.11083 15.943C5 15.7276 5 15.4753 5 14.9708V8M12 21L18.1625 16.5982C18.573 16.305 18.7783 16.1583 18.8892 15.943C19 15.7276 19 15.4753 19 14.9708V8M12 13L5 8M12 13L19 8M5 8L10.8375 3.83034C11.3989 3.42938 11.6795 3.2289 12 3.2289C12.3205 3.2289 12.6011 3.42938 13.1625 3.83034L19 8'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
  </svg>
)

export const Box3DDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 13V21L5 16V8L12 3L19 8L12 13Z' fill={color} fillOpacity='0.25' />
    <path
      d='M12 21V13M12 21L5.83752 16.5982C5.42695 16.305 5.22166 16.1583 5.11083 15.943C5 15.7276 5 15.4753 5 14.9708V8M12 21L18.1625 16.5982C18.573 16.305 18.7783 16.1583 18.8892 15.943C19 15.7276 19 15.4753 19 14.9708V8M12 13L5 8M12 13L19 8M5 8L10.8375 3.83034C11.3989 3.42938 11.6795 3.2289 12 3.2289C12.3205 3.2289 12.6011 3.42938 13.1625 3.83034L19 8'
      stroke={color}
      strokeWidth='1.2'
      strokeLinejoin='round'
    />
  </svg>
)

export const Box3DFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9.67505 19.3393L6.67505 17.1964C5.8539 16.6099 5.44333 16.3167 5.22166 15.8859C5 15.4552 5 14.9506 5 13.9415V10.0585C5 9.73711 5 9.46693 5.00716 9.234L11 13.5146V20.2313C10.6433 20.0309 10.227 19.7335 9.67505 19.3393ZM13 20.2313C13.3567 20.0309 13.773 19.7335 14.325 19.3393L17.325 17.1964C18.1461 16.6099 18.5567 16.3167 18.7783 15.8859C19 15.4552 19 14.9506 19 13.9415V10.0585C19 9.73711 19 9.46693 18.9928 9.234L13 13.5146V20.2313ZM18.1276 7.39426L12 11.7711L5.87244 7.39426C6.08372 7.2259 6.34653 7.03818 6.67505 6.80352L9.67505 4.66067C10.7977 3.85875 11.3591 3.45779 12 3.45779C12.6409 3.45779 13.2023 3.85875 14.325 4.66067L17.325 6.80352C17.6535 7.03818 17.9163 7.2259 18.1276 7.39426Z'
      fill={color}
    />
  </svg>
)

export const Box3DLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 21V13M12 21L5.83752 16.5982C5.42695 16.305 5.22166 16.1583 5.11083 15.943C5 15.7276 5 15.4753 5 14.9708V8M12 21L18.1625 16.5982C18.573 16.305 18.7783 16.1583 18.8892 15.943C19 15.7276 19 15.4753 19 14.9708V8M12 13L5 8M12 13L19 8M5 8L10.8375 3.83034C11.3989 3.42938 11.6795 3.2289 12 3.2289C12.3205 3.2289 12.6011 3.42938 13.1625 3.83034L19 8'
      stroke={color}
      strokeLinejoin='round'
    />
  </svg>
)

export const Alarm = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9.14939 7.8313C8.57654 5.92179 10.0064 4 12 4V4C13.9936 4 15.4235 5.92179 14.8506 7.8313L13.2873 13.0422C13.2171 13.2762 13.182 13.3932 13.128 13.4895C12.989 13.7371 12.7513 13.9139 12.4743 13.9759C12.3664 14 12.2443 14 12 14V14C11.7557 14 11.6336 14 11.5257 13.9759C11.2487 13.9139 11.011 13.7371 10.872 13.4895C10.818 13.3932 10.7829 13.2762 10.7127 13.0422L9.14939 7.8313Z'
      stroke={color}
      strokeWidth='2'
    />
    <circle cx='12' cy='19' r='2' stroke={color} strokeWidth='2' />
  </svg>
)

export const AlarmDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9.14939 7.83131C8.57654 5.92179 10.0064 4 12 4C13.9936 4 15.4235 5.92179 14.8506 7.8313L13.2873 13.0422C13.2171 13.2762 13.182 13.3932 13.128 13.4895C12.989 13.7371 12.7513 13.9139 12.4743 13.9759C12.3664 14 12.2443 14 12 14C11.7557 14 11.6336 14 11.5257 13.9759C11.2487 13.9139 11.011 13.7371 10.872 13.4895C10.818 13.3932 10.7829 13.2762 10.7127 13.0422L9.14939 7.83131Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <circle
      cx='12'
      cy='19'
      r='2'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const AlarmFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9.14939 7.83131C8.57654 5.92179 10.0064 4 12 4C13.9936 4 15.4235 5.92179 14.8506 7.8313L13.2873 13.0422C13.2171 13.2762 13.182 13.3932 13.128 13.4895C12.989 13.7371 12.7513 13.9139 12.4743 13.9759C12.3664 14 12.2443 14 12 14C11.7557 14 11.6336 14 11.5257 13.9759C11.2487 13.9139 11.011 13.7371 10.872 13.4895C10.818 13.3932 10.7829 13.2762 10.7127 13.0422L9.14939 7.83131Z'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <circle cx='12' cy='19' r='2' fill={color} stroke={color} strokeWidth='2' />
  </svg>
)

export const AlarmLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9.14939 7.8313C8.57654 5.92179 10.0064 4 12 4V4C13.9936 4 15.4235 5.92179 14.8506 7.8313L13.2873 13.0422C13.2171 13.2762 13.182 13.3932 13.128 13.4895C12.989 13.7371 12.7513 13.9139 12.4743 13.9759C12.3664 14 12.2443 14 12 14V14C11.7557 14 11.6336 14 11.5257 13.9759C11.2487 13.9139 11.011 13.7371 10.872 13.4895C10.818 13.3932 10.7829 13.2762 10.7127 13.0422L9.14939 7.8313Z'
      stroke={color}
    />
    <circle cx='12' cy='19' r='2' stroke={color} />
  </svg>
)

export const Bug = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7 14.3333C7 13.0872 7 12.4641 7.26795 12C7.44349 11.696 7.69596 11.4435 8 11.2679C8.4641 11 9.08718 11 10.3333 11H13.6667C14.9128 11 15.5359 11 16 11.2679C16.304 11.4435 16.5565 11.696 16.7321 12C17 12.4641 17 13.0872 17 14.3333V16C17 16.9293 17 17.394 16.9231 17.7804C16.6075 19.3671 15.3671 20.6075 13.7804 20.9231C13.394 21 12.9293 21 12 21V21C11.0707 21 10.606 21 10.2196 20.9231C8.63288 20.6075 7.39249 19.3671 7.07686 17.7804C7 17.394 7 16.9293 7 16V14.3333Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M9 9C9 8.06812 9 7.60218 9.15224 7.23463C9.35523 6.74458 9.74458 6.35523 10.2346 6.15224C10.6022 6 11.0681 6 12 6V6C12.9319 6 13.3978 6 13.7654 6.15224C14.2554 6.35523 14.6448 6.74458 14.8478 7.23463C15 7.60218 15 8.06812 15 9V11H9V9Z'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M12 11V15' stroke={color} strokeWidth='2' />
    <path d='M15 3L13 6' stroke={color} strokeWidth='2' />
    <path d='M9 3L11 6' stroke={color} strokeWidth='2' />
    <path d='M7 16H2' stroke={color} strokeWidth='2' />
    <path d='M22 16H17' stroke={color} strokeWidth='2' />
    <path d='M20 9V10C20 11.6569 18.6569 13 17 13V13' stroke={color} strokeWidth='2' />
    <path d='M20 22V22C20 20.3431 18.6569 19 17 19V19' stroke={color} strokeWidth='2' />
    <path d='M4 9V10C4 11.6569 5.34315 13 7 13V13' stroke={color} strokeWidth='2' />
    <path d='M4 22V22C4 20.3431 5.34315 19 7 19V19' stroke={color} strokeWidth='2' />
  </svg>
)

export const BugDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7 14.3333C7 13.0872 7 12.4641 7.26795 12C7.44349 11.696 7.69596 11.4435 8 11.2679C8.4641 11 9.08718 11 10.3333 11H13.6667C14.9128 11 15.5359 11 16 11.2679C16.304 11.4435 16.5565 11.696 16.7321 12C17 12.4641 17 13.0872 17 14.3333V16C17 16.9293 17 17.394 16.9231 17.7804C16.6075 19.3671 15.3671 20.6075 13.7804 20.9231C13.394 21 12.9293 21 12 21C11.0707 21 10.606 21 10.2196 20.9231C8.63288 20.6075 7.39249 19.3671 7.07686 17.7804C7 17.394 7 16.9293 7 16V14.3333Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M9 9C9 8.06812 9 7.60218 9.15224 7.23463C9.35523 6.74458 9.74458 6.35523 10.2346 6.15224C10.6022 6 11.0681 6 12 6C12.9319 6 13.3978 6 13.7654 6.15224C14.2554 6.35523 14.6448 6.74458 14.8478 7.23463C15 7.60218 15 8.06812 15 9V11H9V9Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M12 11V15' stroke={color} strokeWidth='1.2' />
    <path d='M15 3L13 6' stroke={color} strokeWidth='1.2' />
    <path d='M9 3L11 6' stroke={color} strokeWidth='1.2' />
    <path d='M7 16H2' stroke={color} strokeWidth='1.2' />
    <path d='M22 16H17' stroke={color} strokeWidth='1.2' />
    <path d='M20 9V10C20 11.6569 18.6569 13 17 13V13' stroke={color} strokeWidth='1.2' />
    <path d='M20 22V22C20 20.3431 18.6569 19 17 19V19' stroke={color} strokeWidth='1.2' />
    <path d='M4 9V10C4 11.6569 5.34315 13 7 13V13' stroke={color} strokeWidth='1.2' />
    <path d='M4 22V22C4 20.3431 5.34315 19 7 19V19' stroke={color} strokeWidth='1.2' />
  </svg>
)

export const BugFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7 14.3333C7 13.0872 7 12.4641 7.26795 12C7.44349 11.696 7.69596 11.4435 8 11.2679C8.4641 11 9.08718 11 10.3333 11H13.6667C14.9128 11 15.5359 11 16 11.2679C16.304 11.4435 16.5565 11.696 16.7321 12C17 12.4641 17 13.0872 17 14.3333V16C17 16.9293 17 17.394 16.9231 17.7804C16.6075 19.3671 15.3671 20.6075 13.7804 20.9231C13.394 21 12.9293 21 12 21C11.0707 21 10.606 21 10.2196 20.9231C8.63288 20.6075 7.39249 19.3671 7.07686 17.7804C7 17.394 7 16.9293 7 16V14.3333Z'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M9 9C9 8.06812 9 7.60218 9.15224 7.23463C9.35523 6.74458 9.74458 6.35523 10.2346 6.15224C10.6022 6 11.0681 6 12 6C12.9319 6 13.3978 6 13.7654 6.15224C14.2554 6.35523 14.6448 6.74458 14.8478 7.23463C15 7.60218 15 8.06812 15 9V11H9V9Z'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <path d='M12 11V15' stroke={color} strokeWidth='2' />
    <path d='M15 3L13 6' stroke={color} strokeWidth='2' />
    <path d='M9 3L11 6' stroke={color} strokeWidth='2' />
    <path d='M7 16H2' stroke={color} strokeWidth='2' />
    <path d='M22 16H17' stroke={color} strokeWidth='2' />
    <path d='M20 9V10C20 11.6569 18.6569 13 17 13V13' stroke={color} strokeWidth='2' />
    <path d='M20 22V22C20 20.3431 18.6569 19 17 19V19' stroke={color} strokeWidth='2' />
    <path d='M4 9V10C4 11.6569 5.34315 13 7 13V13' stroke={color} strokeWidth='2' />
    <path d='M4 22V22C4 20.3431 5.34315 19 7 19V19' stroke={color} strokeWidth='2' />
  </svg>
)

export const BugLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7 14.3333C7 13.0872 7 12.4641 7.26795 12C7.44349 11.696 7.69596 11.4435 8 11.2679C8.4641 11 9.08718 11 10.3333 11H13.6667C14.9128 11 15.5359 11 16 11.2679C16.304 11.4435 16.5565 11.696 16.7321 12C17 12.4641 17 13.0872 17 14.3333V16C17 16.9293 17 17.394 16.9231 17.7804C16.6075 19.3671 15.3671 20.6075 13.7804 20.9231C13.394 21 12.9293 21 12 21V21C11.0707 21 10.606 21 10.2196 20.9231C8.63288 20.6075 7.39249 19.3671 7.07686 17.7804C7 17.394 7 16.9293 7 16V14.3333Z'
      stroke={color}
    />
    <path
      d='M9 9C9 8.06812 9 7.60218 9.15224 7.23463C9.35523 6.74458 9.74458 6.35523 10.2346 6.15224C10.6022 6 11.0681 6 12 6V6C12.9319 6 13.3978 6 13.7654 6.15224C14.2554 6.35523 14.6448 6.74458 14.8478 7.23463C15 7.60218 15 8.06812 15 9V11H9V9Z'
      stroke={color}
    />
    <path d='M12 11V15' stroke={color} />
    <path d='M15 3L13 6' stroke={color} />
    <path d='M9 3L11 6' stroke={color} />
    <path d='M7 16H2' stroke={color} />
    <path d='M22 16H17' stroke={color} />
    <path d='M20 9V10C20 11.6569 18.6569 13 17 13V13' stroke={color} />
    <path d='M20 22V22C20 20.3431 18.6569 19 17 19V19' stroke={color} />
    <path d='M4 9V10C4 11.6569 5.34315 13 7 13V13' stroke={color} />
    <path d='M4 22V22C4 20.3431 5.34315 19 7 19V19' stroke={color} />
  </svg>
)

export const CenterPick = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 4L12 20' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M20 6L16 12L20 18'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4 6L8 12L4 18'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const CenterPickAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 6L12 18' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M7 9L9 12M7 15L9 12M9 12H4'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17 9L15 12M17 15L15 12M15 12H20'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const Code = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M16 7L20 12L16 17' stroke={color} strokeWidth='2' />
    <path d='M8 7L4 12L8 17' stroke={color} strokeWidth='2' />
  </svg>
)

export const CodeLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M16 7L20 12L16 17' stroke={color} />
    <path d='M8 7L4 12L8 17' stroke={color} />
  </svg>
)

export const ColorMode = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
    <path
      d='M18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364L12 12L18.364 5.63604Z'
      fill={color}
    />
  </svg>
)

export const ColorModeLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='8.5' stroke={color} />
    <path
      d='M16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426L12 12L16.2426 7.75736Z'
      fill={color}
    />
  </svg>
)

export const Copy = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M14 7V7C14 6.06812 14 5.60218 13.8478 5.23463C13.6448 4.74458 13.2554 4.35523 12.7654 4.15224C12.3978 4 11.9319 4 11 4H8C6.11438 4 5.17157 4 4.58579 4.58579C4 5.17157 4 6.11438 4 8V11C4 11.9319 4 12.3978 4.15224 12.7654C4.35523 13.2554 4.74458 13.6448 5.23463 13.8478C5.60218 14 6.06812 14 7 14V14'
      stroke={color}
      strokeWidth='2'
    />
    <rect x='10' y='10' width='10' height='10' rx='2' stroke={color} strokeWidth='2' />
  </svg>
)

export const CopyAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M15 3H9C6.79086 3 5 4.79086 5 7V15' stroke={color} strokeWidth='2' />
    <path
      d='M9 11.5C9 10.304 9.00149 9.49062 9.0712 8.87226C9.13864 8.27406 9.25916 7.98334 9.41329 7.78248C9.51969 7.64381 9.64381 7.51969 9.78248 7.41329C9.98334 7.25916 10.2741 7.13864 10.8723 7.0712C11.4906 7.00149 12.304 7 13.5 7C14.696 7 15.5094 7.00149 16.1277 7.0712C16.7259 7.13864 17.0167 7.25916 17.2175 7.41329C17.3562 7.51969 17.4803 7.64381 17.5867 7.78248C17.7408 7.98334 17.8614 8.27406 17.9288 8.87226C17.9985 9.49062 18 10.304 18 11.5V15.5C18 16.696 17.9985 17.5094 17.9288 18.1277C17.8614 18.7259 17.7408 19.0167 17.5867 19.2175C17.4803 19.3562 17.3562 19.4803 17.2175 19.5867C17.0167 19.7408 16.7259 19.8614 16.1277 19.9288C15.5094 19.9985 14.696 20 13.5 20C12.304 20 11.4906 19.9985 10.8723 19.9288C10.2741 19.8614 9.98334 19.7408 9.78248 19.5867C9.64381 19.4803 9.51969 19.3562 9.41329 19.2175C9.25916 19.0167 9.13864 18.7259 9.0712 18.1277C9.00149 17.5094 9 16.696 9 15.5V11.5Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const CopyAltLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M15 3H9C6.79086 3 5 4.79086 5 7V15' stroke={color} />
    <path
      d='M8.5 11.5C8.5 10.3156 8.50074 9.46912 8.57435 8.81625C8.64681 8.17346 8.78457 7.78051 9.01662 7.4781C9.14962 7.30477 9.30477 7.14962 9.4781 7.01662C9.78051 6.78457 10.1735 6.64681 10.8163 6.57435C11.4691 6.50074 12.3156 6.5 13.5 6.5C14.6844 6.5 15.5309 6.50074 16.1837 6.57435C16.8265 6.64681 17.2195 6.78457 17.5219 7.01662C17.6952 7.14962 17.8504 7.30477 17.9834 7.4781C18.2154 7.78051 18.3532 8.17346 18.4257 8.81625C18.4993 9.46912 18.5 10.3156 18.5 11.5V15.5C18.5 16.6844 18.4993 17.5309 18.4257 18.1837C18.3532 18.8265 18.2154 19.2195 17.9834 19.5219C17.8504 19.6952 17.6952 19.8504 17.5219 19.9834C17.2195 20.2154 16.8265 20.3532 16.1837 20.4257C15.5309 20.4993 14.6844 20.5 13.5 20.5C12.3156 20.5 11.4691 20.4993 10.8163 20.4257C10.1735 20.3532 9.78051 20.2154 9.4781 19.9834C9.30477 19.8504 9.14962 19.6952 9.01662 19.5219C8.78457 19.2195 8.64681 18.8265 8.57435 18.1837C8.50074 17.5309 8.5 16.6844 8.5 15.5V11.5Z'
      stroke={color}
    />
  </svg>
)

export const CopyLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M14 7V7C14 6.06812 14 5.60218 13.8478 5.23463C13.6448 4.74458 13.2554 4.35523 12.7654 4.15224C12.3978 4 11.9319 4 11 4H8C6.11438 4 5.17157 4 4.58579 4.58579C4 5.17157 4 6.11438 4 8V11C4 11.9319 4 12.3978 4.15224 12.7654C4.35523 13.2554 4.74458 13.6448 5.23463 13.8478C5.60218 14 6.06812 14 7 14V14'
      stroke={color}
    />
    <rect x='10' y='10' width='10' height='10' rx='2' stroke={color} />
  </svg>
)

export const DatabaseOne = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <ellipse cx='12' cy='7' rx='7' ry='3' stroke={color} strokeWidth='2' />
    <path
      d='M5 13C5 13 5 15.3431 5 17C5 18.6569 8.13401 20 12 20C15.866 20 19 18.6569 19 17C19 16.173 19 13 19 13'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='square'
    />
    <path
      d='M5 7C5 7 5 10.3431 5 12C5 13.6569 8.13401 15 12 15C15.866 15 19 13.6569 19 12C19 11.173 19 7 19 7'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const Database = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <ellipse cx='12' cy='6' rx='7' ry='3' stroke={color} strokeWidth='2' />
    <path
      d='M19 18C19 18.394 18.8189 18.7841 18.4672 19.1481C18.1154 19.512 17.5998 19.8427 16.9497 20.1213C16.2997 20.3999 15.5281 20.6209 14.6788 20.7716C13.8295 20.9224 12.9193 21 12 21C11.0807 21 10.1705 20.9224 9.32122 20.7716C8.47194 20.6209 7.70026 20.3999 7.05025 20.1213C6.40024 19.8427 5.88463 19.512 5.53284 19.1481C5.18106 18.7841 5 18.394 5 18'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M19 6V18' stroke={color} strokeWidth='2' />
    <path d='M5 6V18' stroke={color} strokeWidth='2' />
  </svg>
)

export const DatabaseDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 8C9.18741 10.991 14.8126 10.991 19 8V18C14.6624 20.4786 9.33755 20.4786 5 18V8Z'
      fill={color}
      fillOpacity='0.25'
    />
    <ellipse cx='12' cy='7' rx='7' ry='3' stroke={color} strokeWidth='1.2' />
    <path
      d='M5 13C5 13 5 15.3431 5 17C5 18.6569 8.13401 20 12 20C15.866 20 19 18.6569 19 17C19 16.173 19 13 19 13'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='square'
    />
    <path
      d='M5 7C5 7 5 10.3431 5 12C5 13.6569 8.13401 15 12 15C15.866 15 19 13.6569 19 12C19 11.173 19 7 19 7'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const DatabaseFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M20 9.70443C19.5463 10.0634 19.0503 10.3678 18.5513 10.6173C16.7096 11.5381 14.3521 12 12 12C9.64787 12 7.29044 11.5381 5.44872 10.6173C4.94966 10.3678 4.45372 10.0634 4 9.70443V12C4 13.0575 4.83807 14.0759 6.34315 14.8284C7.84341 15.5786 9.87823 16 12 16C14.1218 16 16.1566 15.5786 17.6569 14.8284C19.1619 14.0759 20 13.0575 20 12V9.70443ZM20 15.7044C19.5463 16.0634 19.0503 16.3678 18.5513 16.6173C16.7096 17.5381 14.3521 18 12 18C9.64787 18 7.29044 17.5381 5.44872 16.6173C4.94966 16.3678 4.45372 16.0634 4 15.7044V18C4 20.2091 7.58172 22 12 22C16.4183 22 20 20.2091 20 18V15.7044ZM20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 7.0575 4.83807 8.07589 6.34315 8.82843C7.84341 9.57856 9.87823 10 12 10C14.1218 10 16.1566 9.57856 17.6569 8.82843C19.1619 8.07589 20 7.0575 20 6Z'
      fill={color}
    />
  </svg>
)

export const DatabaseLightOne = ({
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
    <ellipse cx='12' cy='7' rx='7' ry='3' stroke={color} />
    <path
      d='M5 13C5 13 5 15.3431 5 17C5 18.6569 8.13401 20 12 20C15.866 20 19 18.6569 19 17C19 16.173 19 13 19 13'
      stroke={color}
      strokeLinecap='square'
    />
    <path
      d='M5 7C5 7 5 10.3431 5 12C5 13.6569 8.13401 15 12 15C15.866 15 19 13.6569 19 12C19 11.173 19 7 19 7'
      stroke={color}
    />
  </svg>
)

export const DatabaseLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <ellipse cx='12' cy='6' rx='7' ry='3' stroke={color} />
    <path
      d='M19 18C19 18.394 18.8189 18.7841 18.4672 19.1481C18.1154 19.512 17.5998 19.8427 16.9497 20.1213C16.2997 20.3999 15.5281 20.6209 14.6788 20.7716C13.8295 20.9224 12.9193 21 12 21C11.0807 21 10.1705 20.9224 9.32122 20.7716C8.47194 20.6209 7.70026 20.3999 7.05025 20.1213C6.40024 19.8427 5.88463 19.512 5.53284 19.1481C5.18106 18.7841 5 18.394 5 18'
      stroke={color}
    />
    <path d='M19 6V18' stroke={color} />
    <path d='M5 6V18' stroke={color} />
  </svg>
)

export const Email = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21 12C21 10.1195 20.411 8.28625 19.3156 6.7577C18.2203 5.22915 16.6736 4.08209 14.893 3.47763C13.1123 2.87316 11.187 2.84166 9.38744 3.38754C7.58792 3.93341 6.00459 5.02925 4.85982 6.52115C3.71505 8.01304 3.06635 9.82604 3.00482 11.7055C2.94329 13.585 3.47203 15.4366 4.51677 17.0001C5.56152 18.5637 7.06979 19.7608 8.82975 20.4232C10.5897 21.0856 12.513 21.18 14.3294 20.6933'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <circle cx='12' cy='12' r='4' stroke={color} strokeWidth='2' />
    <path
      d='M16 9V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const EmailLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21 12C21 10.1195 20.411 8.28625 19.3156 6.7577C18.2203 5.22915 16.6736 4.08209 14.893 3.47763C13.1123 2.87316 11.187 2.84166 9.38744 3.38754C7.58792 3.93341 6.00459 5.02925 4.85982 6.52115C3.71505 8.01304 3.06635 9.82604 3.00482 11.7055C2.94329 13.585 3.47203 15.4366 4.51677 17.0001C5.56152 18.5637 7.06979 19.7608 8.82975 20.4232C10.5897 21.0856 12.513 21.18 14.3294 20.6933'
      stroke={color}
      strokeLinecap='round'
    />
    <circle cx='12' cy='12' r='4' stroke={color} />
    <path
      d='M16 9V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const Eye = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 5C6.55576 5 3.53109 9.23425 2.45554 11.1164C2.23488 11.5025 2.12456 11.6956 2.1367 11.9836C2.14885 12.2716 2.27857 12.4598 2.53799 12.8362C3.8182 14.6935 7.29389 19 12 19C16.7061 19 20.1818 14.6935 21.462 12.8362C21.7214 12.4598 21.8511 12.2716 21.8633 11.9836C21.8754 11.6956 21.7651 11.5025 21.5445 11.1164C20.4689 9.23425 17.4442 5 12 5Z'
      stroke={color}
      strokeWidth='2'
    />
    <circle cx='12' cy='12' r='4' fill={color} />
  </svg>
)

export const EyeDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M2.45548 11.1164C3.53103 9.23425 6.5557 5 11.9999 5C17.4442 5 20.4689 9.23425 21.5444 11.1164C21.7651 11.5025 21.8754 11.6956 21.8632 11.9836C21.8511 12.2716 21.7214 12.4598 21.462 12.8362C20.1817 14.6935 16.7061 19 11.9999 19C7.29383 19 3.81814 14.6935 2.53794 12.8362C2.27851 12.4598 2.1488 12.2716 2.13665 11.9836C2.1245 11.6956 2.23483 11.5025 2.45548 11.1164ZM11.9999 15C13.6568 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6568 9 11.9999 9C10.3431 9 8.99994 10.3431 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M12 5C6.55576 5 3.53109 9.23425 2.45554 11.1164C2.23488 11.5025 2.12456 11.6956 2.1367 11.9836C2.14885 12.2716 2.27857 12.4598 2.53799 12.8362C3.8182 14.6935 7.29389 19 12 19C16.7061 19 20.1818 14.6935 21.462 12.8362C21.7214 12.4598 21.8511 12.2716 21.8633 11.9836C21.8754 11.6956 21.7651 11.5025 21.5445 11.1164C20.4689 9.23425 17.4442 5 12 5Z'
      stroke={color}
      strokeWidth='1.2'
    />
    <circle cx='12' cy='12' r='3' stroke={color} strokeWidth='1.2' />
  </svg>
)

export const EyeFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M2.97924 10.2709C4.36454 8.19808 7.26851 5 12 5C16.7314 5 19.6354 8.19808 21.0207 10.2709C21.4855 10.9665 21.718 11.3143 21.6968 11.9569C21.6757 12.5995 21.4088 12.9469 20.8752 13.6417C19.2861 15.7107 16.1129 19 12 19C7.88699 19 4.71384 15.7107 3.12471 13.6417C2.59106 12.9469 2.32424 12.5995 2.30308 11.9569C2.28193 11.3143 2.51436 10.9665 2.97924 10.2709ZM11.9999 16C14.2091 16 15.9999 14.2091 15.9999 12C15.9999 9.79086 14.2091 8 11.9999 8C9.79081 8 7.99995 9.79086 7.99995 12C7.99995 14.2091 9.79081 16 11.9999 16Z'
      fill={color}
    />
  </svg>
)

export const EyeLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 5C6.55576 5 3.53109 9.23425 2.45554 11.1164C2.23488 11.5025 2.12456 11.6956 2.1367 11.9836C2.14885 12.2716 2.27857 12.4598 2.53799 12.8362C3.8182 14.6935 7.29389 19 12 19C16.7061 19 20.1818 14.6935 21.462 12.8362C21.7214 12.4598 21.8511 12.2716 21.8633 11.9836C21.8754 11.6956 21.7651 11.5025 21.5445 11.1164C20.4689 9.23425 17.4442 5 12 5Z'
      stroke={color}
    />
    <circle cx='12' cy='12' r='3' stroke={color} />
  </svg>
)

export const Frame = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M8 3V4C8 5.88562 8 6.82843 7.41421 7.41421C6.82843 8 5.88562 8 4 8H3'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M16 3V4C16 5.88562 16 6.82843 16.5858 7.41421C17.1716 8 18.1144 8 20 8H21'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M8 21V20C8 18.1144 8 17.1716 7.41421 16.5858C6.82843 16 5.88562 16 4 16H3'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M16 21V20C16 18.1144 16 17.1716 16.5858 16.5858C17.1716 16 18.1144 16 20 16H21'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
  </svg>
)

export const FrameLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M8 3V4C8 5.88562 8 6.82843 7.41421 7.41421C6.82843 8 5.88562 8 4 8H3'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M16 3V4C16 5.88562 16 6.82843 16.5858 7.41421C17.1716 8 18.1144 8 20 8H21'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M8 21V20C8 18.1144 8 17.1716 7.41421 16.5858C6.82843 16 5.88562 16 4 16H3'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M16 21V20C16 18.1144 16 17.1716 16.5858 16.5858C17.1716 16 18.1144 16 20 16H21'
      stroke={color}
      strokeLinejoin='round'
    />
  </svg>
)

export const ITO = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M6 7C6 6.44772 6.44772 6 7 6H15C16.6569 6 18 7.34315 18 9V17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17V7Z'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M9 6V2' stroke={color} strokeWidth='2' />
    <path d='M9 22V18' stroke={color} strokeWidth='2' />
    <path d='M15 22V18' stroke={color} strokeWidth='2' />
    <path d='M22 15L18 15' stroke={color} strokeWidth='2' />
    <path d='M6 15L2 15' stroke={color} strokeWidth='2' />
    <path d='M6 9L2 9' stroke={color} strokeWidth='2' />
    <path
      d='M15 3C15.7879 3 16.5681 3.15519 17.2961 3.45672C18.0241 3.75825 18.6855 4.20021 19.2426 4.75736C19.7998 5.31451 20.2417 5.97595 20.5433 6.7039C20.8448 7.43185 21 8.21207 21 9'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const ITODuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5.6 7C5.6 6.2268 6.2268 5.6 7 5.6H15C16.8778 5.6 18.4 7.12223 18.4 9V17C18.4 17.7732 17.7732 18.4 17 18.4H7C6.2268 18.4 5.6 17.7732 5.6 17V7Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M9 6V2' stroke={color} strokeWidth='1.2' />
    <path d='M9 22V18' stroke={color} strokeWidth='1.2' />
    <path d='M15 22V18' stroke={color} strokeWidth='1.2' />
    <path d='M22 15L18 15' stroke={color} strokeWidth='1.2' />
    <path d='M6 15L2 15' stroke={color} strokeWidth='1.2' />
    <path d='M6 9L2 9' stroke={color} strokeWidth='1.2' />
    <path
      d='M15 2.6C15.8405 2.6 16.6727 2.76554 17.4492 3.08717C18.2257 3.4088 18.9312 3.88022 19.5255 4.47452C20.1198 5.06881 20.5912 5.77434 20.9128 6.55083C21.2345 7.32731 21.4 8.15954 21.4 9'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const ITOFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='5' y='5' width='14' height='14' rx='2' fill={color} />
    <path d='M9 6V2' stroke={color} strokeWidth='2' />
    <path d='M9 22V18' stroke={color} strokeWidth='2' />
    <path d='M15 22V18' stroke={color} strokeWidth='2' />
    <path d='M22 15L18 15' stroke={color} strokeWidth='2' />
    <path d='M6 15L2 15' stroke={color} strokeWidth='2' />
    <path d='M6 9L2 9' stroke={color} strokeWidth='2' />
    <path
      d='M15 3V3C16.8638 3 17.7956 3 18.5307 3.30448C19.5108 3.71046 20.2895 4.48915 20.6955 5.46927C21 6.20435 21 7.13623 21 9V9'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const ITOLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5.5 7C5.5 6.17157 6.17157 5.5 7 5.5H15C16.933 5.5 18.5 7.067 18.5 9V17C18.5 17.8284 17.8284 18.5 17 18.5H7C6.17157 18.5 5.5 17.8284 5.5 17V7Z'
      stroke={color}
    />
    <path d='M9 6V2' stroke={color} />
    <path d='M9 22V18' stroke={color} />
    <path d='M15 22V18' stroke={color} />
    <path d='M22 15L18 15' stroke={color} />
    <path d='M6 15L2 15' stroke={color} />
    <path d='M6 9L2 9' stroke={color} />
    <path
      d='M15 3V3C16.8638 3 17.7956 3 18.5307 3.30448C19.5108 3.71046 20.2895 4.48915 20.6955 5.46927C21 6.20435 21 7.13623 21 9V9'
      stroke={color}
    />
  </svg>
)

export const Layers = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 4L5 7L12 10L19 7L12 4Z' stroke={color} strokeWidth='2' strokeLinejoin='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.02545 10.044L4.60608 11.0808C4.2384 11.2384 4 11.6 4 12C4 12.4 4.2384 12.7616 4.60608 12.9191L11.6061 15.9191C11.8576 16.0269 12.1424 16.0269 12.3939 15.9191L19.3939 12.9191C19.7616 12.7616 20 12.4 20 12C20 11.6 19.7616 11.2384 19.3939 11.0808L16.9746 10.044L14.436 11.1319L16.4614 12L12 13.912L7.53859 12L9.56404 11.1319L7.02545 10.044Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.02545 15.044L4.60608 16.0808C4.2384 16.2384 4 16.6 4 17C4 17.4 4.2384 17.7616 4.60608 17.9191L11.6061 20.9191C11.8576 21.0269 12.1424 21.0269 12.3939 20.9191L19.3939 17.9191C19.7616 17.7616 20 17.4 20 17C20 16.6 19.7616 16.2384 19.3939 16.0808L16.9746 15.044L14.436 16.1319L16.4614 17L12 18.912L7.53859 17L9.56404 16.1319L7.02545 15.044Z'
      fill={color}
    />
  </svg>
)

export const LayersDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 4L5 7L12 10L19 7L12 4Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.8336 9.49989L12 9.99976L13.1664 9.49988L19 12L12 15L5 12L10.8336 9.49989Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M10.8336 9.49989L11.07 8.9484C10.919 8.88372 10.7482 8.88372 10.5973 8.9484L10.8336 9.49989ZM12 9.99976L11.7636 10.5512C11.9146 10.6159 12.0854 10.6159 12.2363 10.5512L12 9.99976ZM13.1664 9.49988L13.4027 8.94839C13.2518 8.88371 13.0809 8.88371 12.93 8.94839L13.1664 9.49988ZM19 12L19.2364 12.5515C19.457 12.4569 19.6 12.24 19.6 12C19.6 11.76 19.457 11.5431 19.2364 11.4485L19 12ZM12 15L11.7636 15.5515C11.9146 15.6162 12.0854 15.6162 12.2364 15.5515L12 15ZM5 12L4.76365 11.4485C4.54304 11.5431 4.4 11.76 4.4 12C4.4 12.24 4.54304 12.4569 4.76365 12.5515L5 12ZM10.5973 10.0514L11.7636 10.5512L12.2363 9.44827L11.07 8.9484L10.5973 10.0514ZM12.2363 10.5512L13.4027 10.0514L12.93 8.94839L11.7636 9.44827L12.2363 10.5512ZM19.2364 11.4485L13.4027 8.94839L12.93 10.0514L18.7636 12.5515L19.2364 11.4485ZM12.2364 15.5515L19.2364 12.5515L18.7636 11.4485L11.7636 14.4485L12.2364 15.5515ZM4.76365 12.5515L11.7636 15.5515L12.2364 14.4485L5.23635 11.4485L4.76365 12.5515ZM10.5973 8.9484L4.76365 11.4485L5.23635 12.5515L11.07 10.0514L10.5973 8.9484Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.8333 14.5L12 15L13.1667 14.5L19 17L12 20L5 17L10.8333 14.5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M10.8333 14.5L11.0697 13.9485C10.9188 13.8838 10.7479 13.8838 10.597 13.9485L10.8333 14.5ZM12 15L11.7636 15.5515C11.9146 15.6162 12.0854 15.6162 12.2364 15.5515L12 15ZM13.1667 14.5L13.403 13.9485C13.2521 13.8838 13.0812 13.8838 12.9303 13.9485L13.1667 14.5ZM19 17L19.2364 17.5515C19.457 17.4569 19.6 17.24 19.6 17C19.6 16.76 19.457 16.5431 19.2364 16.4485L19 17ZM12 20L11.7636 20.5515C11.9146 20.6162 12.0854 20.6162 12.2364 20.5515L12 20ZM5 17L4.76365 16.4485C4.54304 16.5431 4.4 16.76 4.4 17C4.4 17.24 4.54304 17.4569 4.76365 17.5515L5 17ZM10.597 15.0515L11.7636 15.5515L12.2364 14.4485L11.0697 13.9485L10.597 15.0515ZM12.2364 15.5515L13.403 15.0515L12.9303 13.9485L11.7636 14.4485L12.2364 15.5515ZM19.2364 16.4485L13.403 13.9485L12.9303 15.0515L18.7636 17.5515L19.2364 16.4485ZM12.2364 20.5515L19.2364 17.5515L18.7636 16.4485L11.7636 19.4485L12.2364 20.5515ZM4.76365 17.5515L11.7636 20.5515L12.2364 19.4485L5.23635 16.4485L4.76365 17.5515ZM10.597 13.9485L4.76365 16.4485L5.23635 17.5515L11.0697 15.0515L10.597 13.9485Z'
      fill={color}
    />
  </svg>
)

export const LayersFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M11.1056 3.44721L5.78885 6.10557C5.00831 6.49585 4.61803 6.69098 4.61803 7C4.61803 7.30902 5.00831 7.50415 5.78885 7.89443L11.1056 10.5528C11.5445 10.7722 11.7639 10.882 12 10.882C12.2361 10.882 12.4555 10.7722 12.8944 10.5528L18.2111 7.89443C18.9917 7.50415 19.382 7.30902 19.382 7C19.382 6.69098 18.9917 6.49585 18.2111 6.10557L12.8944 3.44721C12.4555 3.22776 12.2361 3.11803 12 3.11803C11.7639 3.11803 11.5445 3.22776 11.1056 3.44721Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.02217 10.4893C7.62603 10.8135 8.33716 11.169 9.15554 11.5782L10.2113 12.1061C11.0891 12.545 11.528 12.7644 12.0001 12.7644C12.4723 12.7644 12.9112 12.545 13.789 12.1061L14.8447 11.5782C15.6631 11.169 16.3742 10.8135 16.9781 10.4893L18.2113 11.1059C18.9918 11.4961 19.3821 11.6913 19.3821 12.0003C19.3821 12.3093 18.9918 12.5044 18.2113 12.8947L12.8946 15.5531C12.4557 15.7725 12.2362 15.8822 12.0001 15.8822C11.7641 15.8822 11.5446 15.7725 11.1057 15.5531L11.1057 15.5531L5.78898 12.8947C5.00844 12.5044 4.61816 12.3093 4.61816 12.0003C4.61816 11.6913 5.00844 11.4961 5.78898 11.1059L7.02217 10.4893Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.02169 15.4893C7.62567 15.8135 8.33696 16.1692 9.15557 16.5785L10.2113 17.1063C11.0891 17.5452 11.528 17.7647 12.0001 17.7647C12.4723 17.7647 12.9112 17.5452 13.789 17.1063L14.8447 16.5785C15.6633 16.1692 16.3746 15.8135 16.9786 15.4893L18.2113 16.1056C18.9918 16.4959 19.3821 16.691 19.3821 17C19.3821 17.3091 18.9918 17.5042 18.2113 17.8945L12.8946 20.5528C12.4557 20.7723 12.2362 20.882 12.0001 20.882C11.7641 20.882 11.5446 20.7723 11.1057 20.5528L11.1057 20.5528L5.78898 17.8945C5.00844 17.5042 4.61816 17.3091 4.61816 17C4.61816 16.691 5.00844 16.4959 5.78898 16.1056L7.02169 15.4893Z'
      fill={color}
    />
  </svg>
)

export const LayersLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 4L5 7L12 10L19 7L12 4Z' stroke={color} strokeLinejoin='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.66009 10.316L4.80304 11.5404C4.6192 11.6192 4.5 11.8 4.5 12C4.5 12.2 4.6192 12.3808 4.80304 12.4596L11.803 15.4596C11.9288 15.5135 12.0712 15.5135 12.197 15.4596L19.197 12.4596C19.3808 12.3808 19.5 12.2 19.5 12C19.5 11.8 19.3808 11.6192 19.197 11.5404L16.3399 10.316L15.0706 10.86L17.7307 12L12 14.456L6.2693 12L8.92939 10.86L7.66009 10.316Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.66009 15.316L4.80304 16.5404C4.6192 16.6192 4.5 16.8 4.5 17C4.5 17.2 4.6192 17.3808 4.80304 17.4596L11.803 20.4596C11.9288 20.5135 12.0712 20.5135 12.197 20.4596L19.197 17.4596C19.3808 17.3808 19.5 17.2 19.5 17C19.5 16.8 19.3808 16.6192 19.197 16.5404L16.3399 15.316L15.0706 15.86L17.7307 17L12 19.456L6.2693 17L8.92939 15.86L7.66009 15.316Z'
      fill={color}
    />
  </svg>
)

export const Line = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9 15L9 18C9 18.9428 9 19.4142 8.70711 19.7071C8.41421 20 7.94281 20 7 20L6 20C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18L4 17C4 16.0572 4 15.5858 4.29289 15.2929C4.58579 15 5.05719 15 6 15L9 15Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M15 9L15 6C15 5.05719 15 4.58579 15.2929 4.29289C15.5858 4 16.0572 4 17 4L18 4C18.9428 4 19.4142 4 19.7071 4.29289C20 4.58579 20 5.05719 20 6L20 7C20 7.94281 20 8.41421 19.7071 8.70711C19.4142 9 18.9428 9 18 9L15 9Z'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M15 9L9 15' stroke={color} strokeWidth='2' />
  </svg>
)

export const LineAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='6'
      y='13'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 6 13)'
      stroke={color}
      strokeWidth='2'
    />
    <rect
      x='17'
      y='12'
      width='4'
      height='4'
      rx='2'
      transform='rotate(-90 17 12)'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M18 11L16.5 12.5C15.4829 13.5171 14.9744 14.0256 14.3628 14.1384C14.1229 14.1826 13.8771 14.1826 13.6372 14.1384C13.0256 14.0256 12.5171 13.5171 11.5 12.5V12.5C10.4829 11.4829 9.97442 10.9744 9.36277 10.8616C9.12295 10.8174 8.87705 10.8174 8.63723 10.8616C8.02558 10.9744 7.51705 11.4829 6.5 12.5L5 14'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const LineDuotoneOne = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9 15L9 18C9 18.9428 9 19.4142 8.70711 19.7071C8.41421 20 7.94281 20 7 20L6 20C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18L4 17C4 16.0572 4 15.5858 4.29289 15.2929C4.58579 15 5.05719 15 6 15L9 15Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M15 9L15 6C15 5.05719 15 4.58579 15.2929 4.29289C15.5858 4 16.0572 4 17 4L18 4C18.9428 4 19.4142 4 19.7071 4.29289C20 4.58579 20 5.05719 20 6L20 7C20 7.94281 20 8.41421 19.7071 8.70711C19.4142 9 18.9428 9 18 9L15 9Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M15 9L9 15' stroke={color} strokeWidth='1.2' />
  </svg>
)

export const LineDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='6'
      y='13'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 6 13)'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <rect
      x='17'
      y='12'
      width='4'
      height='4'
      rx='2'
      transform='rotate(-90 17 12)'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M18 11L16.5 12.5C15.4829 13.5171 14.9744 14.0256 14.3628 14.1384C14.1229 14.1826 13.8771 14.1826 13.6372 14.1384C13.0256 14.0256 12.5171 13.5171 11.5 12.5V12.5C10.4829 11.4829 9.97442 10.9744 9.36277 10.8616C9.12295 10.8174 8.87705 10.8174 8.63723 10.8616C8.02558 10.9744 7.51705 11.4829 6.5 12.5L5 14'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const LineFillOne = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9 15L9 18C9 18.9428 9 19.4142 8.70711 19.7071C8.41421 20 7.94281 20 7 20L6 20C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18L4 17C4 16.0572 4 15.5858 4.29289 15.2929C4.58579 15 5.05719 15 6 15L9 15Z'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M15 9L15 6C15 5.05719 15 4.58579 15.2929 4.29289C15.5858 4 16.0572 4 17 4L18 4C18.9428 4 19.4142 4 19.7071 4.29289C20 4.58579 20 5.05719 20 6L20 7C20 7.94281 20 8.41421 19.7071 8.70711C19.4142 9 18.9428 9 18 9L15 9Z'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <path d='M15 9L9 15' stroke={color} strokeWidth='2' />
  </svg>
)

export const LineFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='6'
      y='13'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 6 13)'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <rect
      x='17'
      y='12'
      width='4'
      height='4'
      rx='2'
      transform='rotate(-90 17 12)'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M18 11L16.5 12.5C15.4829 13.5171 14.9744 14.0256 14.3628 14.1384C14.1229 14.1826 13.8771 14.1826 13.6372 14.1384C13.0256 14.0256 12.5171 13.5171 11.5 12.5V12.5C10.4829 11.4829 9.97442 10.9744 9.36277 10.8616C9.12295 10.8174 8.87705 10.8174 8.63723 10.8616C8.02558 10.9744 7.51705 11.4829 6.5 12.5L5 14'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const LineLightOne = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9 15L9 18C9 18.9428 9 19.4142 8.70711 19.7071C8.41421 20 7.94281 20 7 20L6 20C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18L4 17C4 16.0572 4 15.5858 4.29289 15.2929C4.58579 15 5.05719 15 6 15L9 15Z'
      stroke={color}
    />
    <path
      d='M15 9L15 6C15 5.05719 15 4.58579 15.2929 4.29289C15.5858 4 16.0572 4 17 4L18 4C18.9428 4 19.4142 4 19.7071 4.29289C20 4.58579 20 5.05719 20 6L20 7C20 7.94281 20 8.41421 19.7071 8.70711C19.4142 9 18.9428 9 18 9L15 9Z'
      stroke={color}
    />
    <path d='M15 9L9 15' stroke={color} />
  </svg>
)

export const LineLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='6' y='13' width='4' height='4' rx='2' transform='rotate(90 6 13)' stroke={color} />
    <rect x='17' y='12' width='4' height='4' rx='2' transform='rotate(-90 17 12)' stroke={color} />
    <path
      d='M18 11L16.5 12.5C15.4829 13.5171 14.9744 14.0256 14.3628 14.1384C14.1229 14.1826 13.8771 14.1826 13.6372 14.1384C13.0256 14.0256 12.5171 13.5171 11.5 12.5V12.5C10.4829 11.4829 9.97442 10.9744 9.36277 10.8616C9.12295 10.8174 8.87705 10.8174 8.63723 10.8616C8.02558 10.9744 7.51705 11.4829 6.5 12.5L5 14'
      stroke={color}
    />
  </svg>
)

export const MoveObject = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M16 20L19 20C19.5523 20 20 19.5523 20 19L20 5C20 4.44772 19.5523 4 19 4L16 4'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 9L15 12M12 15L15 12M15 12H5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 4H10M12 20H10M4 7L4 5C4 4.44772 4.44772 4 5 4L6 4M4 17L4 19C4 19.5523 4.44772 20 5 20H6'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const Nesting = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='18'
      y='15'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 18 15)'
      stroke={color}
      strokeWidth='2'
    />
    <rect
      x='6'
      y='8'
      width='4'
      height='4'
      rx='2'
      transform='rotate(-90 6 8)'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M8 8V13C8 14.8856 8 15.8284 8.58579 16.4142C9.17157 17 10.1144 17 12 17H14'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const NestingDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='18'
      y='15'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 18 15)'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <rect
      x='6'
      y='8'
      width='4'
      height='4'
      rx='2'
      transform='rotate(-90 6 8)'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M8 8V13C8 14.8856 8 15.8284 8.58579 16.4142C9.17157 17 10.1144 17 12 17H14'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const NestingFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='18'
      y='15'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 18 15)'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <rect
      x='6'
      y='8'
      width='4'
      height='4'
      rx='2'
      transform='rotate(-90 6 8)'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M8 8V13C8 14.8856 8 15.8284 8.58579 16.4142C9.17157 17 10.1144 17 12 17H14'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const NestingLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='18' y='15' width='4' height='4' rx='2' transform='rotate(90 18 15)' stroke={color} />
    <rect x='6' y='8' width='4' height='4' rx='2' transform='rotate(-90 6 8)' stroke={color} />
    <path
      d='M8 8V13C8 14.8856 8 15.8284 8.58579 16.4142C9.17157 17 10.1144 17 12 17H14'
      stroke={color}
    />
  </svg>
)

export const Off = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='5' y='7' width='14' height='10' rx='2' stroke={color} strokeWidth='2' />
    <rect x='7' y='9' width='5' height='6' rx='1' fill={color} />
  </svg>
)

export const OffLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='5' y='7' width='14' height='10' rx='2' stroke={color} />
    <rect x='7' y='9' width='5' height='6' rx='1' fill={color} />
  </svg>
)

export const On = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='5' y='7' width='14' height='10' rx='2' stroke={color} strokeWidth='2' />
    <rect x='12' y='9' width='5' height='6' rx='1' fill={color} />
  </svg>
)

export const OnLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='5' y='7' width='14' height='10' rx='2' stroke={color} />
    <rect x='12' y='9' width='5' height='6' rx='1' fill={color} />
  </svg>
)

export const Pen = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='4' y='16' width='16' height='4' rx='2' stroke={color} strokeWidth='2' />
    <path
      d='M4.90949 11.3642L8 16H16L19.0905 11.3642C19.5259 10.7112 19.7436 10.3847 19.7083 10.0289C19.6731 9.67311 19.3956 9.39561 18.8406 8.84062L12 2L5.15938 8.84062C4.60439 9.39561 4.32689 9.67311 4.29166 10.0289C4.25643 10.3847 4.47412 10.7112 4.90949 11.3642Z'
      stroke={color}
      strokeWidth='2'
    />
    <circle cx='12' cy='11' r='2' stroke={color} strokeWidth='2' />
    <path d='M12 2V9' stroke={color} strokeWidth='2' />
  </svg>
)

export const PenLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='4' y='16' width='16' height='4' rx='2' stroke={color} />
    <path
      d='M4.90949 11.3642L8 16H16L19.0905 11.3642C19.5259 10.7112 19.7436 10.3847 19.7083 10.0289C19.6731 9.67311 19.3956 9.39561 18.8406 8.84062L12 2L5.15938 8.84062C4.60439 9.39561 4.32689 9.67311 4.29166 10.0289C4.25643 10.3847 4.47412 10.7112 4.90949 11.3642Z'
      stroke={color}
    />
    <circle cx='12' cy='11' r='2.5' stroke={color} />
    <path d='M12 2V9' stroke={color} />
  </svg>
)

export const Percent = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M20 4L4 20' stroke={color} strokeWidth='2' />
    <circle cx='6.5' cy='7.5' r='3.5' stroke={color} strokeWidth='2' />
    <circle cx='17.5' cy='16.5' r='3.5' stroke={color} strokeWidth='2' />
  </svg>
)

export const PercentLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M18 6L6 18' stroke={color} />
    <circle cx='7' cy='8' r='3.5' stroke={color} />
    <circle cx='17' cy='16' r='3.5' stroke={color} />
  </svg>
)

export const Rename = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M9 5H14M14 5H19M14 5V19M9 19H14M14 19H19' stroke={color} strokeWidth='2' />
    <path d='M11 9H4C2.89543 9 2 9.89543 2 11V15H11' stroke={color} strokeWidth='2' />
    <path d='M17 15H20C21.1046 15 22 14.1046 22 13V9H17' stroke={color} strokeWidth='2' />
  </svg>
)

export const RenameLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M9 5H14M14 5H19M14 5V19M9 19H14M14 19H19' stroke={color} />
    <path d='M11 9H4C2.89543 9 2 9.89543 2 11V15H11' stroke={color} />
    <path d='M17 15H20C21.1046 15 22 14.1046 22 13V9H17' stroke={color} />
  </svg>
)

export const RingMove = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      cx='15'
      cy='12'
      r='6'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15 9L18 12M15 15L18 12M18 12H12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M10.5 8L7 8' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M10.5 16L7 16' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 12L3 12' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const Save = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M16 21V19C16 17.1144 16 16.1716 15.4142 15.5858C14.8284 15 13.8856 15 12 15H11C9.11438 15 8.17157 15 7.58579 15.5858C7 16.1716 7 17.1144 7 19V21'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M7 8H12' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3H16.1716C16.5803 3 16.7847 3 16.9685 3.07612C17.1522 3.15224 17.2968 3.29676 17.5858 3.58579L20.4142 6.41421C20.7032 6.70324 20.8478 6.84776 20.9239 7.03153C21 7.2153 21 7.41968 21 7.82843V15C21 17.8284 21 19.2426 20.1213 20.1213C19.2426 21 17.8284 21 15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15V9Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const SaveDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M3.87868 3.87868C3 4.75736 3 6.17157 3 9V15C3 17.8284 3 19.2426 3.87868 20.1213C4.52055 20.7632 5.44818 20.9362 7.0041 20.9828C7 20.687 7 20.3607 7 20V19C7 17.1144 7 16.1716 7.58579 15.5858C8.17157 15 9.11438 15 11 15H12C13.8856 15 14.8284 15 15.4142 15.5858C16 16.1716 16 17.1144 16 19V20C16 20.367 16 20.6984 15.9957 20.9983C18.1735 20.9863 19.3524 20.8902 20.1213 20.1213C21 19.2426 21 17.8284 21 15V7.82843C21 7.41968 21 7.2153 20.9239 7.03153C20.8478 6.84776 20.7032 6.70325 20.4142 6.41423L20.4142 6.41421L17.5858 3.58579C17.2968 3.29676 17.1522 3.15224 16.9685 3.07612C16.7847 3 16.5803 3 16.1716 3H9C6.17157 3 4.75736 3 3.87868 3.87868Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M16 21V19C16 17.1144 16 16.1716 15.4142 15.5858C14.8284 15 13.8856 15 12 15H11C9.11438 15 8.17157 15 7.58579 15.5858C7 16.1716 7 17.1144 7 19V21'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M7 8H12' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3H16.1716C16.5803 3 16.7847 3 16.9685 3.07612C17.1522 3.15224 17.2968 3.29676 17.5858 3.58579L20.4142 6.41421C20.7032 6.70324 20.8478 6.84776 20.9239 7.03153C21 7.2153 21 7.41968 21 7.82843V15C21 17.8284 21 19.2426 20.1213 20.1213C19.2426 21 17.8284 21 15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15V9Z'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const SaveFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3H15.3431C16.1606 3 16.5694 3 16.9369 3.15224C17.3045 3.30448 17.5935 3.59351 18.1716 4.17157L19.8284 5.82843C20.4065 6.40649 20.6955 6.69552 20.8478 7.06306C21 7.4306 21 7.83935 21 8.65685V15C21 17.8284 21 19.2426 20.1213 20.1213C19.48 20.7626 18.5534 20.9359 17 20.9827V18L17 17.9384C17.0001 17.2843 17.0001 16.6965 16.9362 16.2208C16.8663 15.7015 16.7042 15.1687 16.2678 14.7322C15.8313 14.2958 15.2985 14.1337 14.7792 14.0638C14.3034 13.9999 13.7157 13.9999 13.0616 14L13 14H10L9.93839 14C9.28427 13.9999 8.69655 13.9999 8.22084 14.0638C7.70149 14.1337 7.16867 14.2958 6.73223 14.7322C6.29579 15.1687 6.13366 15.7015 6.06383 16.2208C5.99988 16.6965 5.99993 17.2843 6 17.9384L6 18V20.9239C5.02491 20.828 4.36857 20.6112 3.87868 20.1213C3 19.2426 3 17.8284 3 15V9ZM15 18V21H9C8.64496 21 8.31221 21 8 20.9983V18C8 17.2646 8.00212 16.8137 8.046 16.4873C8.08457 16.2005 8.13942 16.1526 8.14592 16.1469L8.14645 16.1464L8.14692 16.1459C8.1526 16.1394 8.20049 16.0846 8.48734 16.046C8.81369 16.0021 9.26462 16 10 16H13C13.7354 16 14.1863 16.0021 14.5127 16.046C14.7995 16.0846 14.8474 16.1394 14.8531 16.1459L14.8536 16.1464L14.8541 16.1469C14.8606 16.1526 14.9154 16.2005 14.954 16.4873C14.9979 16.8137 15 17.2646 15 18ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H12C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7H7Z'
      fill={color}
    />
  </svg>
)

export const SaveLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M16 21V19C16 17.1144 16 16.1716 15.4142 15.5858C14.8284 15 13.8856 15 12 15H11C9.11438 15 8.17157 15 7.58579 15.5858C7 16.1716 7 17.1144 7 19V21'
      stroke={color}
    />
    <path d='M7 8H12' stroke={color} strokeLinecap='round' />
    <path
      d='M3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3H16.1716C16.5803 3 16.7847 3 16.9685 3.07612C17.1522 3.15224 17.2968 3.29676 17.5858 3.58579L20.4142 6.41421C20.7032 6.70324 20.8478 6.84776 20.9239 7.03153C21 7.2153 21 7.41968 21 7.82843V15C21 17.8284 21 19.2426 20.1213 20.1213C19.2426 21 17.8284 21 15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15V9Z'
      stroke={color}
    />
  </svg>
)

export const Scan = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9 3H8C7.07003 3 6.60504 3 6.22354 3.10222C5.18827 3.37962 4.37962 4.18827 4.10222 5.22354C4 5.60504 4 6.07003 4 7'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M15 3H16C16.93 3 17.395 3 17.7765 3.10222C18.8117 3.37962 19.6204 4.18827 19.8978 5.22354C20 5.60504 20 6.07003 20 7'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M20 15V16C20 17.8692 20 18.8038 19.5981 19.5C19.3348 19.9561 18.9561 20.3348 18.5 20.5981C17.8038 21 16.8692 21 15 21'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M4 15V16C4 17.8692 4 18.8038 4.40192 19.5C4.66523 19.9561 5.04394 20.3348 5.5 20.5981C6.19615 21 7.13077 21 9 21'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M3 15L21 15'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 11L7 15L17 15L17 11C17 10.0572 17 9.58579 16.7071 9.29289C16.4142 9 15.9428 9 15 9L9 9C8.05719 9 7.58579 9 7.29289 9.29289C7 9.58579 7 10.0572 7 11Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ScanAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M20 10L20 9C20 8.07003 20 7.60504 19.8978 7.22354C19.6204 6.18827 18.8117 5.37962 17.7765 5.10222C17.395 5 16.93 5 16 5'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M20 14L20 15C20 15.93 20 16.395 19.8978 16.7765C19.6204 17.8117 18.8117 18.6204 17.7765 18.8978C17.395 19 16.93 19 16 19'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M10 19L9 19C7.13077 19 6.19615 19 5.5 18.5981C5.04394 18.3348 4.66523 17.9561 4.40192 17.5C4 16.8038 4 15.8692 4 14'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M10 5L9 5C7.13077 5 6.19615 5 5.5 5.40192C5.04394 5.66523 4.66523 6.04394 4.40192 6.5C4 7.19615 4 8.13077 4 10'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M10 21L10 3'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ScanAlt2 = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21 10L21 9C21 8.07003 21 7.60504 20.8978 7.22354C20.6204 6.18827 19.8117 5.37962 18.7765 5.10222C18.395 5 17.93 5 17 5'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M3 10L3 9C3 8.07003 3 7.60504 3.10222 7.22354C3.37962 6.18827 4.18827 5.37962 5.22354 5.10222C5.60504 5 6.07003 5 7 5'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M21 14L21 15C21 15.93 21 16.395 20.8978 16.7765C20.6204 17.8117 19.8117 18.6204 18.7765 18.8978C18.395 19 17.93 19 17 19'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M3 14L3 15C3 15.93 3 16.395 3.10222 16.7765C3.37962 17.8117 4.18827 18.6204 5.22354 18.8978C5.60504 19 6.07003 19 7 19'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M12 15L12 9'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 14L8 10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 14L16 10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const ScanAlt2Light = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21 10L21 9C21 8.07003 21 7.60504 20.8978 7.22354C20.6204 6.18827 19.8117 5.37962 18.7765 5.10222C18.395 5 17.93 5 17 5'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M3 10L3 9C3 8.07003 3 7.60504 3.10222 7.22354C3.37962 6.18827 4.18827 5.37962 5.22354 5.10222C5.60504 5 6.07003 5 7 5'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M21 14L21 15C21 15.93 21 16.395 20.8978 16.7765C20.6204 17.8117 19.8117 18.6204 18.7765 18.8978C18.395 19 17.93 19 17 19'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M3 14L3 15C3 15.93 3 16.395 3.10222 16.7765C3.37962 17.8117 4.18827 18.6204 5.22354 18.8978C5.60504 19 6.07003 19 7 19'
      stroke={color}
      strokeLinejoin='round'
    />
    <path d='M12 15L12 9' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8 14L8 10' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16 14L16 10' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const ScanAltLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M20 10L20 9C20 8.07003 20 7.60504 19.8978 7.22354C19.6204 6.18827 18.8117 5.37962 17.7765 5.10222C17.395 5 16.93 5 16 5'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M20 14L20 15C20 15.93 20 16.395 19.8978 16.7765C19.6204 17.8117 18.8117 18.6204 17.7765 18.8978C17.395 19 16.93 19 16 19'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M10 19L9 19C7.13077 19 6.19615 19 5.5 18.5981C5.04394 18.3348 4.66523 17.9561 4.40192 17.5C4 16.8038 4 15.8692 4 14'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M10 5L9 5C7.13077 5 6.19615 5 5.5 5.40192C5.04394 5.66523 4.66523 6.04394 4.40192 6.5C4 7.19615 4 8.13077 4 10'
      stroke={color}
      strokeLinejoin='round'
    />
    <path d='M10 21L10 3' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const ScanLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9 3H8C7.07003 3 6.60504 3 6.22354 3.10222C5.18827 3.37962 4.37962 4.18827 4.10222 5.22354C4 5.60504 4 6.07003 4 7'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M15 3H16C16.93 3 17.395 3 17.7765 3.10222C18.8117 3.37962 19.6204 4.18827 19.8978 5.22354C20 5.60504 20 6.07003 20 7'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M20 15V16C20 17.8692 20 18.8038 19.5981 19.5C19.3348 19.9561 18.9561 20.3348 18.5 20.5981C17.8038 21 16.8692 21 15 21'
      stroke={color}
      strokeLinejoin='round'
    />
    <path
      d='M4 15V16C4 17.8692 4 18.8038 4.40192 19.5C4.66523 19.9561 5.04394 20.3348 5.5 20.5981C6.19615 21 7.13077 21 9 21'
      stroke={color}
      strokeLinejoin='round'
    />
    <path d='M3 15L21 15' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M7 11L7 15L17 15L17 11C17 10.0572 17 9.58579 16.7071 9.29289C16.4142 9 15.9428 9 15 9L9 9C8.05719 9 7.58579 9 7.29289 9.29289C7 9.58579 7 10.0572 7 11Z'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const Server = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7.09607 8.02455L8.07686 8.21964V8.21964L7.09607 8.02455ZM8.03323 5.95619L7.23988 5.34743L7.23988 5.34743L8.03323 5.95619ZM9.78856 4.51564L10.2308 5.41251L10.2308 5.41251L9.78856 4.51564ZM14.2114 4.51564L13.7692 5.41251L13.7692 5.41251L14.2114 4.51564ZM15.9668 5.95619L15.1734 6.56495L15.1734 6.56495L15.9668 5.95619ZM16.9039 8.02455L17.8847 7.82946V7.82946L16.9039 8.02455ZM7.02498 8.50083L6.02997 8.401L7.02498 8.50083ZM7.92388 15.3827L8.84776 15.7654L7.92388 15.3827ZM7.38268 15.9239L7.76537 16.8478L7.38268 15.9239ZM16.6173 15.9239L17 15L16.6173 15.9239ZM16.0761 15.3827L17 15L16.0761 15.3827ZM16.975 8.50083L17.97 8.401L16.975 8.50083ZM17.5 10C18.8807 10 20 11.1193 20 12.5H22C22 10.0147 19.9853 8 17.5 8V10ZM20 12.5C20 13.8807 18.8807 15 17.5 15V17C19.9853 17 22 14.9853 22 12.5H20ZM17 14.5V12.0556H15V14.5H17ZM17 12.0556C17 10.951 16.1046 10.0556 15 10.0556V12.0556V12.0556H17ZM15 10.0556H9V12.0556H15V10.0556ZM9 10.0556C7.89543 10.0556 7 10.951 7 12.0556H9V10.0556ZM7 12.0556V14.5H9V12.0556H7ZM6.5 15C5.11929 15 4 13.8807 4 12.5H2C2 14.9853 4.01472 17 6.5 17V15ZM4 12.5C4 11.1193 5.11929 10 6.5 10V8C4.01472 8 2 10.0147 2 12.5H4ZM6.11529 7.82946C6.07761 8.0189 6.04917 8.20964 6.02997 8.401L8.01998 8.60067C8.03278 8.4731 8.05174 8.34594 8.07686 8.21964L6.11529 7.82946ZM7.23988 5.34743C6.67962 6.07757 6.29483 6.92682 6.11529 7.82946L8.07686 8.21964C8.19656 7.61788 8.45308 7.05172 8.82659 6.56495L7.23988 5.34743ZM9.34627 3.61876C8.52085 4.02581 7.80014 4.61729 7.23988 5.34743L8.82659 6.56495C9.20009 6.07819 9.68057 5.68388 10.2308 5.41251L9.34627 3.61876ZM12 3C11.0797 3 10.1717 3.21171 9.34627 3.61876L10.2308 5.41251C10.7811 5.14114 11.3864 5 12 5V3ZM14.6537 3.61876C13.8283 3.21171 12.9203 3 12 3V5C12.6136 5 13.2189 5.14114 13.7692 5.41251L14.6537 3.61876ZM16.7601 5.34743C16.1999 4.61729 15.4791 4.02581 14.6537 3.61876L13.7692 5.41251C14.3194 5.68388 14.7999 6.07819 15.1734 6.56495L16.7601 5.34743ZM17.8847 7.82946C17.7052 6.92682 17.3204 6.07757 16.7601 5.34743L15.1734 6.56495C15.5469 7.05172 15.8034 7.61788 15.9231 8.21964L17.8847 7.82946ZM17.97 8.401C17.9508 8.20964 17.9224 8.0189 17.8847 7.82946L15.9231 8.21964C15.9483 8.34594 15.9672 8.4731 15.98 8.60067L17.97 8.401ZM6.5 10C7.35073 10 7.94746 9.32346 8.01998 8.60067L6.02997 8.401C6.04736 8.22773 6.20155 8 6.5 8V10ZM7 14.5C7 14.7467 6.99946 14.8816 6.9928 14.9791C6.98676 15.0676 6.97918 15.0503 7 15L8.84776 15.7654C8.9447 15.5313 8.97518 15.3056 8.98817 15.1152C9.00054 14.9338 9 14.7193 9 14.5H7ZM6.5 17C6.71929 17 6.93384 17.0005 7.11523 16.9882C7.3056 16.9752 7.53132 16.9447 7.76537 16.8478L7 15C7.05027 14.9792 7.06763 14.9868 6.97908 14.9928C6.88156 14.9995 6.74665 15 6.5 15V17ZM7 15L7.76537 16.8478C8.25542 16.6448 8.64477 16.2554 8.84776 15.7654L7 15ZM17.5 15C17.2533 15 17.1184 14.9995 17.0209 14.9928C16.9324 14.9868 16.9497 14.9792 17 15L16.2346 16.8478C16.4687 16.9447 16.6944 16.9752 16.8848 16.9882C17.0662 17.0005 17.2807 17 17.5 17V15ZM15 14.5C15 14.7193 14.9995 14.9338 15.0118 15.1152C15.0248 15.3056 15.0553 15.5313 15.1522 15.7654L17 15C17.0208 15.0503 17.0132 15.0676 17.0072 14.9791C17.0005 14.8816 17 14.7467 17 14.5H15ZM17 15L15.1522 15.7654C15.3552 16.2554 15.7446 16.6448 16.2346 16.8478L17 15ZM17.5 8C17.7984 8 17.9526 8.22773 17.97 8.401L15.98 8.60067C16.0525 9.32346 16.6493 10 17.5 10V8Z'
      fill={color}
    />
    <rect x='8' y='11' width='8' height='10' rx='2' stroke={color} strokeWidth='2' />
    <path d='M11.5 16H12.5' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const ServerDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M16.975 8.50083C17.0026 8.7756 17.2239 9 17.5 9C19.433 9 21 10.567 21 12.5C21 14.433 19.433 16 17.5 16C17.0341 16 16.8011 16 16.6173 15.9239C16.3723 15.8224 16.1776 15.6277 16.0761 15.3827C16 15.1989 16 14.9659 16 14.5V13.0556C16 11.951 15.1046 11.0556 14 11.0556H10C8.89543 11.0556 8 11.951 8 13.0556V14.5C8 14.9659 8 15.1989 7.92388 15.3827C7.82239 15.6277 7.62771 15.8224 7.38268 15.9239C7.19891 16 6.96594 16 6.5 16C4.567 16 3 14.433 3 12.5C3 10.567 4.567 9 6.5 9C6.77614 9 6.99741 8.7756 7.02498 8.50083C7.04098 8.34137 7.06467 8.18242 7.09607 8.02455C7.2457 7.27235 7.56635 6.56465 8.03323 5.95619C8.50012 5.34774 9.10071 4.85484 9.78856 4.51564C10.4764 4.17643 11.2331 4 12 4C12.7669 4 13.5236 4.17643 14.2114 4.51564C14.8993 4.85484 15.4999 5.34774 15.9668 5.95619C16.4336 6.56465 16.7543 7.27235 16.9039 8.02455C16.9353 8.18242 16.959 8.34137 16.975 8.50083Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M7.09607 8.02455L7.68454 8.1416L7.68455 8.1416L7.09607 8.02455ZM8.03323 5.95619L7.55722 5.59094L7.55722 5.59094L8.03323 5.95619ZM9.78856 4.51564L10.0539 5.05376V5.05376L9.78856 4.51564ZM14.2114 4.51564L13.9461 5.05376V5.05376L14.2114 4.51564ZM15.9668 5.95619L15.4908 6.32145V6.32145L15.9668 5.95619ZM16.9039 8.02455L17.4924 7.90749V7.90749L16.9039 8.02455ZM7.02498 8.50083L6.42798 8.44093L7.02498 8.50083ZM7.92388 15.3827L8.47821 15.6123L7.92388 15.3827ZM7.38268 15.9239L7.61229 16.4782L7.38268 15.9239ZM16.6173 15.9239L16.8469 15.3696L16.6173 15.9239ZM16.0761 15.3827L16.6304 15.1531L16.0761 15.3827ZM16.975 8.50083L17.572 8.44093L16.975 8.50083ZM17.5 9.6C19.1016 9.6 20.4 10.8984 20.4 12.5H21.6C21.6 10.2356 19.7644 8.4 17.5 8.4V9.6ZM20.4 12.5C20.4 14.1016 19.1016 15.4 17.5 15.4V16.6C19.7644 16.6 21.6 14.7644 21.6 12.5H20.4ZM16.6 14.5V13.0556H15.4V14.5H16.6ZM16.6 13.0556C16.6 11.6196 15.4359 10.4556 14 10.4556V11.6556C14.7732 11.6556 15.4 12.2824 15.4 13.0556H16.6ZM14 10.4556H10V11.6556H14V10.4556ZM10 10.4556C8.56406 10.4556 7.4 11.6196 7.4 13.0556H8.6C8.6 12.2824 9.2268 11.6556 10 11.6556V10.4556ZM7.4 13.0556V14.5H8.6V13.0556H7.4ZM6.5 15.4C4.89837 15.4 3.6 14.1016 3.6 12.5H2.4C2.4 14.7644 4.23563 16.6 6.5 16.6V15.4ZM3.6 12.5C3.6 10.8984 4.89837 9.6 6.5 9.6V8.4C4.23563 8.4 2.4 10.2356 2.4 12.5H3.6ZM6.5076 7.90749C6.47243 8.08431 6.4459 8.26233 6.42798 8.44093L7.62198 8.56073C7.63606 8.42041 7.65691 8.28053 7.68454 8.1416L6.5076 7.90749ZM7.55722 5.59094C7.03431 6.2724 6.67518 7.06503 6.5076 7.90749L7.68455 8.1416C7.81621 7.47967 8.09839 6.85689 8.50925 6.32145L7.55722 5.59094ZM9.52318 3.97751C8.7528 4.35743 8.08013 4.90947 7.55722 5.59094L8.50924 6.32145C8.9201 5.78601 9.44863 5.35226 10.0539 5.05376L9.52318 3.97751ZM12 3.4C11.141 3.4 10.2936 3.5976 9.52318 3.97751L10.0539 5.05376C10.6592 4.75526 11.3251 4.6 12 4.6V3.4ZM14.4768 3.97751C13.7064 3.5976 12.859 3.4 12 3.4V4.6C12.6749 4.6 13.3408 4.75526 13.9461 5.05376L14.4768 3.97751ZM16.4428 5.59094C15.9199 4.90947 15.2472 4.35743 14.4768 3.97751L13.9461 5.05376C14.5514 5.35226 15.0799 5.78601 15.4908 6.32145L16.4428 5.59094ZM17.4924 7.90749C17.3248 7.06503 16.9657 6.2724 16.4428 5.59094L15.4908 6.32145C15.9016 6.85689 16.1838 7.47967 16.3155 8.1416L17.4924 7.90749ZM17.572 8.44093C17.5541 8.26233 17.5276 8.08431 17.4924 7.90749L16.3155 8.1416C16.3431 8.28053 16.3639 8.42041 16.378 8.56073L17.572 8.44093ZM6.5 9.6C7.1209 9.6 7.56744 9.10432 7.62198 8.56073L6.42798 8.44093C6.42842 8.43651 6.43029 8.4302 6.43804 8.42269C6.44245 8.41841 6.44996 8.41267 6.46131 8.40788C6.47319 8.40286 6.48678 8.4 6.5 8.4V9.6ZM7.4 14.5C7.4 14.7412 7.39967 14.892 7.39188 15.0063C7.38445 15.1152 7.37228 15.1465 7.36955 15.1531L8.47821 15.6123C8.5516 15.4351 8.57749 15.258 8.58909 15.088C8.60033 14.9234 8.6 14.7248 8.6 14.5H7.4ZM6.5 16.6C6.72476 16.6 6.92338 16.6003 7.088 16.5891C7.258 16.5775 7.43511 16.5516 7.61229 16.4782L7.15307 15.3696C7.14648 15.3723 7.11522 15.3844 7.00631 15.3919C6.89202 15.3997 6.74118 15.4 6.5 15.4V16.6ZM7.36955 15.1531C7.32895 15.2511 7.25108 15.329 7.15307 15.3696L7.61229 16.4782C8.00434 16.3158 8.31582 16.0043 8.47821 15.6123L7.36955 15.1531ZM17.5 15.4C17.2588 15.4 17.108 15.3997 16.9937 15.3919C16.8848 15.3844 16.8535 15.3723 16.8469 15.3696L16.3877 16.4782C16.5649 16.5516 16.742 16.5775 16.912 16.5891C17.0766 16.6003 17.2752 16.6 17.5 16.6V15.4ZM15.4 14.5C15.4 14.7248 15.3997 14.9234 15.4109 15.088C15.4225 15.258 15.4484 15.4351 15.5218 15.6123L16.6304 15.1531C16.6277 15.1465 16.6156 15.1152 16.6081 15.0063C16.6003 14.892 16.6 14.7412 16.6 14.5H15.4ZM16.8469 15.3696C16.7489 15.329 16.671 15.2511 16.6304 15.1531L15.5218 15.6123C15.6842 16.0043 15.9957 16.3158 16.3877 16.4782L16.8469 15.3696ZM17.5 8.4C17.5132 8.4 17.5268 8.40286 17.5387 8.40788C17.55 8.41267 17.5575 8.41841 17.562 8.42269C17.5697 8.4302 17.5716 8.43651 17.572 8.44093L16.378 8.56073C16.4326 9.10432 16.8791 9.6 17.5 9.6V8.4Z'
      fill={color}
    />
    <rect x='8' y='11' width='8' height='10' rx='2' stroke={color} strokeWidth='1.2' />
    <path d='M11.5 16H12.5' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const ServerFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M17.9792 7.50058C17.999 7.73832 18.009 7.85719 18.0704 7.92116C18.1318 7.98513 18.2542 8.00036 18.499 8.03082C20.4726 8.27643 22 9.95985 22 12C22 14.2091 20.2091 16 18 16H17.5C17.2643 16 17.1464 16 17.0732 15.9268C17 15.8536 17 15.7357 17 15.5V14C17 12.1144 17 11.1716 16.4142 10.5858C15.8284 10 14.8856 10 13 10H11C9.11438 10 8.17157 10 7.58579 10.5858C7 11.1716 7 12.1144 7 14V15.5C7 15.7357 7 15.8536 6.92678 15.9268C6.85355 16 6.7357 16 6.5 16H6C3.79086 16 2 14.2091 2 12C2 9.95985 3.52736 8.27643 5.50099 8.03082C5.74578 8.00036 5.86817 7.98513 5.9296 7.92116C5.99103 7.85719 6.00096 7.73832 6.02082 7.50058C6.03959 7.27582 6.07107 7.05175 6.11529 6.82946C6.29484 5.92682 6.67962 5.07758 7.23988 4.34743C7.80014 3.61729 8.52085 3.02581 9.34627 2.61876C10.1717 2.21171 11.0797 2 12 2C12.9203 2 13.8283 2.21171 14.6537 2.61876C15.4791 3.02581 16.1999 3.61729 16.7601 4.34743C17.3204 5.07757 17.7052 5.92682 17.8847 6.82946C17.9289 7.05175 17.9604 7.27582 17.9792 7.50058Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.58579 11.5858C8 12.1716 8 13.1144 8 15V17C8 18.8856 8 19.8284 8.58579 20.4142C9.17157 21 10.1144 21 12 21C13.8856 21 14.8284 21 15.4142 20.4142C16 19.8284 16 18.8856 16 17V15C16 13.1144 16 12.1716 15.4142 11.5858C14.8284 11 13.8856 11 12 11C10.1144 11 9.17157 11 8.58579 11.5858ZM11.5 15C10.9477 15 10.5 15.4477 10.5 16C10.5 16.5523 10.9477 17 11.5 17H12.5C13.0523 17 13.5 16.5523 13.5 16C13.5 15.4477 13.0523 15 12.5 15H11.5Z'
      fill={color}
    />
  </svg>
)

export const ServerLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7.09607 8.02455L7.58647 8.12209L7.09607 8.02455ZM8.03323 5.95619L7.63656 5.65181V5.65181L8.03323 5.95619ZM9.78856 4.51564L10.0097 4.96407V4.96407L9.78856 4.51564ZM14.2114 4.51564L13.9903 4.96407V4.96407L14.2114 4.51564ZM15.9668 5.95619L15.5701 6.26057V6.26057L15.9668 5.95619ZM16.9039 8.02455L17.3943 7.927V7.927L16.9039 8.02455ZM7.02498 8.50083L6.52748 8.45092L7.02498 8.50083ZM7.92388 15.3827L8.38582 15.574L7.92388 15.3827ZM7.38268 15.9239L7.57403 16.3858L7.38268 15.9239ZM16.6173 15.9239L16.8087 15.4619L16.6173 15.9239ZM16.0761 15.3827L16.5381 15.1913L16.0761 15.3827ZM16.975 8.50083L17.4725 8.45092L16.975 8.50083ZM17.5 9.5C19.1569 9.5 20.5 10.8431 20.5 12.5H21.5C21.5 10.2909 19.7091 8.5 17.5 8.5V9.5ZM20.5 12.5C20.5 14.1569 19.1569 15.5 17.5 15.5V16.5C19.7091 16.5 21.5 14.7091 21.5 12.5H20.5ZM16.5 14.5V12.0556H15.5V14.5H16.5ZM16.5 12.0556C16.5 11.2271 15.8284 10.5556 15 10.5556V11.5556C15.2761 11.5556 15.5 11.7794 15.5 12.0556H16.5ZM15 10.5556H9V11.5556H15V10.5556ZM9 10.5556C8.17157 10.5556 7.5 11.2271 7.5 12.0556H8.5C8.5 11.7794 8.72386 11.5556 9 11.5556V10.5556ZM7.5 12.0556V14.5H8.5V12.0556H7.5ZM6.5 15.5C4.84315 15.5 3.5 14.1569 3.5 12.5H2.5C2.5 14.7091 4.29086 16.5 6.5 16.5V15.5ZM3.5 12.5C3.5 10.8431 4.84315 9.5 6.5 9.5V8.5C4.29086 8.5 2.5 10.2909 2.5 12.5H3.5ZM6.60568 7.927C6.57114 8.10066 6.54508 8.27551 6.52748 8.45092L7.52248 8.55075C7.53688 8.40723 7.5582 8.26418 7.58647 8.12209L6.60568 7.927ZM7.63656 5.65181C7.12299 6.32111 6.77027 7.09958 6.60568 7.927L7.58647 8.12209C7.72113 7.44511 8.00972 6.80818 8.42991 6.26057L7.63656 5.65181ZM9.56741 4.0672C8.81078 4.44033 8.15013 4.98251 7.63656 5.65181L8.42991 6.26057C8.8501 5.71297 9.39064 5.26936 10.0097 4.96407L9.56741 4.0672ZM12 3.5C11.1564 3.5 10.324 3.69407 9.56741 4.0672L10.0097 4.96407C10.6288 4.65879 11.3098 4.5 12 4.5V3.5ZM14.4326 4.0672C13.676 3.69407 12.8436 3.5 12 3.5V4.5C12.6902 4.5 13.3712 4.65879 13.9903 4.96407L14.4326 4.0672ZM16.3634 5.65181C15.8499 4.98251 15.1892 4.44033 14.4326 4.0672L13.9903 4.96407C14.6094 5.26936 15.1499 5.71297 15.5701 6.26057L16.3634 5.65181ZM17.3943 7.927C17.2297 7.09958 16.877 6.32111 16.3634 5.65181L15.5701 6.26057C15.9903 6.80818 16.2789 7.44511 16.4135 8.12209L17.3943 7.927ZM17.4725 8.45092C17.4549 8.27551 17.4289 8.10066 17.3943 7.927L16.4135 8.12209C16.4418 8.26418 16.4631 8.40723 16.4775 8.55075L17.4725 8.45092ZM6.5 9.5C7.06344 9.5 7.47244 9.04953 7.52248 8.55075L6.52748 8.45092C6.52555 8.47013 6.51674 8.48567 6.50765 8.49449C6.50356 8.49845 6.50074 8.49977 6.5002 8.5C6.5001 8.50005 6.50049 8.5 6.5 8.5V9.5ZM7.5 14.5C7.5 14.7398 7.49973 14.8946 7.49164 15.0131C7.48387 15.1271 7.47056 15.1705 7.46194 15.1913L8.38582 15.574C8.45332 15.4111 8.47807 15.2461 8.48933 15.0812C8.50027 14.9208 8.5 14.7261 8.5 14.5H7.5ZM6.5 16.5C6.72613 16.5 6.92077 16.5003 7.08119 16.4893C7.24611 16.4781 7.41106 16.4533 7.57403 16.3858L7.19134 15.4619C7.17053 15.4706 7.12712 15.4839 7.01312 15.4916C6.89463 15.4997 6.73981 15.5 6.5 15.5V16.5ZM7.46194 15.1913C7.41119 15.3139 7.31386 15.4112 7.19134 15.4619L7.57403 16.3858C7.94157 16.2336 8.23358 15.9416 8.38582 15.574L7.46194 15.1913ZM17.5 15.5C17.2602 15.5 17.1054 15.4997 16.9869 15.4916C16.8729 15.4839 16.8295 15.4706 16.8087 15.4619L16.426 16.3858C16.5889 16.4533 16.7539 16.4781 16.9188 16.4893C17.0792 16.5003 17.2739 16.5 17.5 16.5V15.5ZM15.5 14.5C15.5 14.7261 15.4997 14.9208 15.5107 15.0812C15.5219 15.2461 15.5467 15.4111 15.6142 15.574L16.5381 15.1913C16.5294 15.1705 16.5161 15.1271 16.5084 15.0131C16.5003 14.8946 16.5 14.7398 16.5 14.5H15.5ZM16.8087 15.4619C16.6861 15.4112 16.5888 15.3139 16.5381 15.1913L15.6142 15.574C15.7664 15.9416 16.0584 16.2336 16.426 16.3858L16.8087 15.4619ZM17.5 8.5C17.4995 8.5 17.4999 8.50005 17.4998 8.5C17.4993 8.49977 17.4964 8.49845 17.4924 8.49449C17.4833 8.48567 17.4745 8.47013 17.4725 8.45092L16.4775 8.55075C16.5276 9.04953 16.9366 9.5 17.5 9.5V8.5Z'
      fill={color}
    />
    <rect x='8' y='11' width='8' height='10' rx='2' stroke={color} />
    <path d='M11.5 16H12.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const Stackframe = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 8C5 7.05719 5 6.58579 5.29289 6.29289C5.58579 6 6.05719 6 7 6H13.0633C13.5239 6 13.7542 6 13.9558 6.09441C14.1574 6.18882 14.3048 6.36576 14.5997 6.71963L17.933 10.7196C18.4432 11.3318 18.6983 11.638 18.6983 12C18.6983 12.362 18.4432 12.6682 17.933 13.2804L14.5997 17.2804C14.3048 17.6342 14.1574 17.8112 13.9558 17.9056C13.7542 18 13.5239 18 13.0633 18H7C6.05719 18 5.58579 18 5.29289 17.7071C5 17.4142 5 16.9428 5 16V8Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const StackframeDuotone = ({
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
      d='M5 8C5 7.05719 5 6.58579 5.29289 6.29289C5.58579 6 6.05719 6 7 6H13.0633C13.5239 6 13.7542 6 13.9558 6.09441C14.1574 6.18882 14.3048 6.36576 14.5997 6.71963L17.933 10.7196C18.4432 11.3318 18.6983 11.6379 18.6983 12C18.6983 12.3621 18.4432 12.6682 17.933 13.2804L14.5997 17.2804C14.3048 17.6342 14.1574 17.8112 13.9558 17.9056C13.7542 18 13.5239 18 13.0633 18H7C6.05719 18 5.58579 18 5.29289 17.7071C5 17.4142 5 16.9428 5 16V8Z'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const StackframeFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 10C5 8.11438 5 7.17157 5.58579 6.58579C6.17157 6 7.11438 6 9 6H12.1265C13.0478 6 13.5084 6 13.9116 6.18882C14.3147 6.37764 14.6096 6.73152 15.1994 7.43926L16.8661 9.43927C17.8864 10.6637 18.3966 11.2759 18.3966 12C18.3966 12.7241 17.8864 13.3363 16.8661 14.5607L15.1994 16.5607C14.6096 17.2685 14.3147 17.6224 13.9116 17.8112C13.5084 18 13.0478 18 12.1265 18H9C7.11438 18 6.17157 18 5.58579 17.4142C5 16.8284 5 15.8856 5 14V10Z'
      fill={color}
    />
  </svg>
)

export const StackframeLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 8C5 7.05719 5 6.58579 5.29289 6.29289C5.58579 6 6.05719 6 7 6H13.0633C13.5239 6 13.7542 6 13.9558 6.09441C14.1574 6.18882 14.3048 6.36576 14.5997 6.71963L17.933 10.7196C18.4432 11.3318 18.6983 11.638 18.6983 12C18.6983 12.362 18.4432 12.6682 17.933 13.2804L14.5997 17.2804C14.3048 17.6342 14.1574 17.8112 13.9558 17.9056C13.7542 18 13.5239 18 13.0633 18H7C6.05719 18 5.58579 18 5.29289 17.7071C5 17.4142 5 16.9428 5 16V8Z'
      stroke={color}
    />
  </svg>
)

export const Structure = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='4' y='4' width='16' height='5' rx='1' stroke={color} strokeWidth='2' />
    <path
      d='M4 17C4 16.0572 4 15.5858 4.29289 15.2929C4.58579 15 5.05719 15 6 15H9V18C9 18.9428 9 19.4142 8.70711 19.7071C8.41421 20 7.94281 20 7 20H6C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18V17Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M15 15H18C18.9428 15 19.4142 15 19.7071 15.2929C20 15.5858 20 16.0572 20 17V18C20 18.9428 20 19.4142 19.7071 19.7071C19.4142 20 18.9428 20 18 20H17C16.0572 20 15.5858 20 15.2929 19.7071C15 19.4142 15 18.9428 15 18V15Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const StructureLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='4' y='4' width='16' height='7' rx='1' stroke={color} />
    <path
      d='M4 16C4 15.0572 4 14.5858 4.29289 14.2929C4.58579 14 5.05719 14 6 14H10V18C10 18.9428 10 19.4142 9.70711 19.7071C9.41421 20 8.94281 20 8 20H6C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18V16Z'
      stroke={color}
    />
    <path
      d='M14 14H18C18.9428 14 19.4142 14 19.7071 14.2929C20 14.5858 20 15.0572 20 16V18C20 18.9428 20 19.4142 19.7071 19.7071C19.4142 20 18.9428 20 18 20H16C15.0572 20 14.5858 20 14.2929 19.7071C14 19.4142 14 18.9428 14 18V14Z'
      stroke={color}
    />
  </svg>
)

export const Subttasks = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='18'
      y='9'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 18 9)'
      stroke={color}
      strokeWidth='2'
    />
    <rect
      x='18'
      y='17'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 18 17)'
      stroke={color}
      strokeWidth='2'
    />
    <rect
      x='3'
      y='7'
      width='4'
      height='4'
      rx='2'
      transform='rotate(-90 3 7)'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M5 8V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H14'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H14'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const SubttasksAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='16'
      y='9'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 16 9)'
      stroke={color}
      strokeWidth='2'
    />
    <rect
      x='20'
      y='17'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 20 17)'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M5 4V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H16'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H12'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const SubttasksAltDuotone = ({
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
    <rect
      x='16'
      y='9'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 16 9)'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <rect
      x='20'
      y='17'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 20 17)'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M5 4V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H16'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H12'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const SubttasksAltFill = ({
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
    <rect
      x='16'
      y='9'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 16 9)'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <rect
      x='20'
      y='17'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 20 17)'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M5 4V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H16'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H12'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const SubttasksAltLight = ({
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
    <rect x='16' y='9' width='4' height='4' rx='2' transform='rotate(90 16 9)' stroke={color} />
    <rect x='20' y='17' width='4' height='4' rx='2' transform='rotate(90 20 17)' stroke={color} />
    <path
      d='M5 4V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H16'
      stroke={color}
    />
    <path
      d='M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H12'
      stroke={color}
    />
  </svg>
)

export const SubttasksDuotone = ({
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
    <rect
      x='18'
      y='9'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 18 9)'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <rect
      x='18'
      y='17'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 18 17)'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <rect
      x='3'
      y='7'
      width='4'
      height='4'
      rx='2'
      transform='rotate(-90 3 7)'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M5 8V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H14'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H14'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const SubttasksFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='18'
      y='9'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 18 9)'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <rect
      x='18'
      y='17'
      width='4'
      height='4'
      rx='2'
      transform='rotate(90 18 17)'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <rect
      x='3'
      y='7'
      width='4'
      height='4'
      rx='2'
      transform='rotate(-90 3 7)'
      fill={color}
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M5 6V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H14'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H14'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const SubttasksLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='18' y='9' width='4' height='4' rx='2' transform='rotate(90 18 9)' stroke={color} />
    <rect x='18' y='17' width='4' height='4' rx='2' transform='rotate(90 18 17)' stroke={color} />
    <rect x='3' y='7' width='4' height='4' rx='2' transform='rotate(-90 3 7)' stroke={color} />
    <path
      d='M5 8V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H14'
      stroke={color}
    />
    <path
      d='M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H14'
      stroke={color}
    />
  </svg>
)

export const Table = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M15 9H21V18C21 18.9428 21 19.4142 20.7071 19.7071C20.4142 20 19.9428 20 19 20H15V9Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M3 9H9V20H5C4.05719 20 3.58579 20 3.29289 19.7071C3 19.4142 3 18.9428 3 18V9Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <rect x='9' y='9' width='6' height='11' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M3 6C3 5.05719 3 4.58579 3.29289 4.29289C3.58579 4 4.05719 4 5 4H19C19.9428 4 20.4142 4 20.7071 4.29289C21 4.58579 21 5.05719 21 6V9H3V6Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const TableLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M15 9H21V18C21 18.9428 21 19.4142 20.7071 19.7071C20.4142 20 19.9428 20 19 20H15V9Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M3 9H9V20H5C4.05719 20 3.58579 20 3.29289 19.7071C3 19.4142 3 18.9428 3 18V9Z'
      stroke={color}
      strokeLinecap='round'
    />
    <rect x='9' y='9' width='6' height='11' stroke={color} strokeLinecap='round' />
    <path
      d='M3 6C3 5.05719 3 4.58579 3.29289 4.29289C3.58579 4 4.05719 4 5 4H19C19.9428 4 20.4142 4 20.7071 4.29289C21 4.58579 21 5.05719 21 6V9H3V6Z'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const TextOne = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7 6V14.5925C7 16.3108 9.02384 17.2291 10.317 16.0976L11 15.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M4 9H10' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14 9L19 17' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M19 9L14 17' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const Text = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7 6V14.5925C7 16.3108 9.02384 17.2291 10.317 16.0976L11 15.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M4 9H10' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M14 9L19 17'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 9L14 17'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const Widget = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='3'
      y='3'
      width='7'
      height='7'
      rx='1'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <rect
      x='3'
      y='14'
      width='7'
      height='7'
      rx='1'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <rect
      x='14'
      y='3'
      width='7'
      height='7'
      rx='1'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <rect
      x='14'
      y='14'
      width='7'
      height='7'
      rx='1'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const WidgetAdd = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='3'
      y='3'
      width='7'
      height='7'
      rx='1'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <rect
      x='3'
      y='14'
      width='7'
      height='7'
      rx='1'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <rect
      x='14'
      y='3'
      width='7'
      height='7'
      rx='1'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M17.5 14.0002L17.5 21.0004' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M21 17.5001L13.9998 17.5001' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const WidgetAddLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='3' width='7' height='7' rx='1' stroke={color} strokeLinecap='round' />
    <rect x='3' y='14' width='7' height='7' rx='1' stroke={color} strokeLinecap='round' />
    <rect x='14' y='3' width='7' height='7' rx='1' stroke={color} strokeLinecap='round' />
    <path d='M17.5 14.0002L17.5 21.0004' stroke={color} strokeLinecap='round' />
    <path d='M21 17.5001L13.9998 17.5001' stroke={color} strokeLinecap='round' />
  </svg>
)

export const WidgetAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      width='6'
      height='6'
      rx='1'
      transform='matrix(1 0 0 -1 14 10)'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M10 14H14C14.9428 14 15.4142 14 15.7071 14.2929C16 14.5858 16 15.0572 16 16V18C16 18.9428 16 19.4142 15.7071 19.7071C15.4142 20 14.9428 20 14 20H10V14Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M10 10C10 9.05719 10 8.58579 9.70711 8.29289C9.41421 8 8.94281 8 8 8H6C5.05719 8 4.58579 8 4.29289 8.29289C4 8.58579 4 9.05719 4 10V14H10V10Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M10 20H6C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18V14H10V20Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const WidgetAltLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      width='6'
      height='6'
      rx='1'
      transform='matrix(1 0 0 -1 14 10)'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M10 14H14C14.9428 14 15.4142 14 15.7071 14.2929C16 14.5858 16 15.0572 16 16V18C16 18.9428 16 19.4142 15.7071 19.7071C15.4142 20 14.9428 20 14 20H10V14Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M10 10C10 9.05719 10 8.58579 9.70711 8.29289C9.41421 8 8.94281 8 8 8H6C5.05719 8 4.58579 8 4.29289 8.29289C4 8.58579 4 9.05719 4 10V14H10V10Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M10 20H6C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18V14H10V20Z'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const WidgetLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='3' width='7' height='7' rx='1' stroke={color} strokeLinecap='round' />
    <rect x='3' y='14' width='7' height='7' rx='1' stroke={color} strokeLinecap='round' />
    <rect x='14' y='3' width='7' height='7' rx='1' stroke={color} strokeLinecap='round' />
    <rect x='14' y='14' width='7' height='7' rx='1' stroke={color} strokeLinecap='round' />
  </svg>
)

export const Array = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M15 5H20V15C20 16.8856 20 17.8284 19.4142 18.4142C18.8284 19 17.8856 19 16 19H15'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M9 5H6C4.89543 5 4 5.89543 4 7V19H9' stroke={color} strokeWidth='2' />
  </svg>
)

export const ArrayLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M15 5H20V15C20 16.8856 20 17.8284 19.4142 18.4142C18.8284 19 17.8856 19 16 19H15'
      stroke={color}
    />
    <path d='M9 5H6C4.89543 5 4 5.89543 4 7V19H9' stroke={color} />
  </svg>
)

export const ColorPicker = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M8.5 5.5L18.5 15.5' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M14.5 4.5L4 15L3.5 20.5L9 20L19.5 9.5C20.8807 8.11929 20.8807 5.88071 19.5 4.5C18.1193 3.11929 15.8807 3.11929 14.5 4.5Z'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
  </svg>
)

export const GroupShare = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9 6C9 6.39397 9.0776 6.78407 9.22836 7.14805C9.37913 7.51203 9.6001 7.84274 9.87868 8.12132C10.1573 8.3999 10.488 8.62087 10.852 8.77164C11.2159 8.9224 11.606 9 12 9C12.394 9 12.7841 8.9224 13.1481 8.77164C13.512 8.62087 13.8427 8.3999 14.1213 8.12132C14.3999 7.84274 14.6209 7.51203 14.7716 7.14805C14.9224 6.78407 15 6.39396 15 6C15 5.60603 14.9224 5.21593 14.7716 4.85195C14.6209 4.48797 14.3999 4.15725 14.1213 3.87868C13.8427 3.6001 13.512 3.37912 13.148 3.22836C12.7841 3.0776 12.394 3 12 3C11.606 3 11.2159 3.0776 10.8519 3.22836C10.488 3.37913 10.1573 3.6001 9.87868 3.87868C9.6001 4.15726 9.37912 4.48797 9.22836 4.85195C9.0776 5.21593 9 5.60604 9 6L9 6Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M4.43781 13.9015C4.09663 14.0985 3.79758 14.3607 3.55775 14.6733C3.31792 14.9858 3.142 15.3426 3.04004 15.7231C2.93807 16.1037 2.91206 16.5006 2.96348 16.8912C3.0149 17.2818 3.14275 17.6584 3.33974 17.9996C3.53672 18.3408 3.79897 18.6398 4.11153 18.8796C4.42408 19.1195 4.78081 19.2954 5.16136 19.3974C5.5419 19.4993 5.9388 19.5253 6.32939 19.4739C6.71999 19.4225 7.09663 19.2946 7.43781 19.0977C7.779 18.9007 8.07804 18.6384 8.31787 18.3259C8.5577 18.0133 8.73362 17.6566 8.83559 17.276C8.93756 16.8955 8.96357 16.4986 8.91215 16.108C8.86072 15.7174 8.73287 15.3408 8.53589 14.9996C8.33891 14.6584 8.07665 14.3594 7.7641 14.1195C7.45154 13.8797 7.09481 13.7038 6.71427 13.6018C6.33373 13.4998 5.93683 13.4738 5.54623 13.5252C5.15564 13.5767 4.779 13.7045 4.43781 13.9015L4.43781 13.9015Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M19.5622 13.9015C19.9034 14.0985 20.2024 14.3607 20.4422 14.6733C20.6821 14.9859 20.858 15.3426 20.96 15.7231C21.0619 16.1037 21.0879 16.5006 21.0365 16.8912C20.9851 17.2818 20.8572 17.6584 20.6603 17.9996C20.4633 18.3408 20.201 18.6398 19.8885 18.8796C19.5759 19.1195 19.2192 19.2954 18.8386 19.3974C18.4581 19.4993 18.0612 19.5253 17.6706 19.4739C17.28 19.4225 16.9034 19.2946 16.5622 19.0977C16.221 18.9007 15.922 18.6384 15.6821 18.3259C15.4423 18.0133 15.2664 17.6566 15.1644 17.276C15.0624 16.8955 15.0364 16.4986 15.0879 16.108C15.1393 15.7174 15.2671 15.3408 15.4641 14.9996C15.6611 14.6584 15.9234 14.3594 16.2359 14.1195C16.5485 13.8797 16.9052 13.7038 17.2857 13.6018C17.6663 13.4998 18.0632 13.4738 18.4538 13.5252C18.8444 13.5767 19.221 13.7045 19.5622 13.9015L19.5622 13.9015Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.06962 6.64319C9.02341 6.43253 8.99993 6.217 8.99993 6.0003C8.99993 5.60634 9.07753 5.21623 9.22829 4.85225C9.30001 4.67912 9.3876 4.51352 9.48973 4.35747C9.17327 4.44938 8.86149 4.55879 8.55584 4.68539C7.46391 5.13768 6.47176 5.80062 5.63603 6.63634C4.80031 7.47207 4.13737 8.46422 3.68508 9.55616C3.23279 10.6481 3 11.8184 3 13.0003C3 13.7255 3.08765 14.4464 3.25988 15.1475C3.34396 14.981 3.44359 14.8223 3.55768 14.6736C3.79752 14.361 4.09656 14.0988 4.43774 13.9018C4.62541 13.7935 4.82381 13.706 5.02936 13.6407C5.00983 13.4282 5 13.2145 5 13.0003C5 12.0811 5.18106 11.1708 5.53284 10.3215C5.88462 9.47224 6.40024 8.70057 7.05025 8.05056C7.63547 7.46533 8.31932 6.98905 9.06962 6.64319ZM14.9303 6.64313C15.6806 6.989 16.3645 7.4653 16.9497 8.05055C17.5998 8.70056 18.1154 9.47224 18.4672 10.3215C18.8189 11.1708 19 12.081 19 13.0003C19 13.2145 18.9902 13.4282 18.9706 13.6408C19.1761 13.7061 19.3745 13.7935 19.5621 13.9018C19.9033 14.0988 20.2023 14.361 20.4422 14.6736C20.5563 14.8223 20.656 14.9811 20.7401 15.1476C20.9123 14.4465 21 13.7256 21 13.0003C21 11.8184 20.7672 10.6481 20.3149 9.55615C19.8626 8.46422 19.1997 7.47206 18.364 6.63634C17.5282 5.80061 16.5361 5.13768 15.4441 4.68538C15.1385 4.55876 14.8266 4.44935 14.5101 4.35742C14.6122 4.51348 14.6999 4.6791 14.7716 4.85225C14.9223 5.21623 14.9999 5.60633 14.9999 6.0003C14.9999 6.21698 14.9765 6.43249 14.9303 6.64313ZM18.2303 19.4952C18.0439 19.5056 17.8565 19.4987 17.6705 19.4742C17.2799 19.4228 16.9033 19.2949 16.5621 19.098C16.3746 18.9897 16.1998 18.8617 16.0405 18.7164C15.6169 19.0159 15.1603 19.268 14.6788 19.4675C13.8295 19.8192 12.9193 20.0003 12 20.0003C11.0807 20.0003 10.1705 19.8192 9.32122 19.4675C8.83965 19.268 8.38304 19.0158 7.95941 18.7164C7.80015 18.8616 7.62531 18.9897 7.43775 19.098C7.09656 19.2949 6.71992 19.4228 6.32932 19.4742C6.1434 19.4987 5.95604 19.5056 5.7697 19.4952C6.5768 20.2694 7.52156 20.8868 8.55585 21.3152C9.64778 21.7675 10.8181 22.0003 12 22.0003C13.1819 22.0003 14.3522 21.7675 15.4442 21.3152C16.4784 20.8868 17.4232 20.2694 18.2303 19.4952Z'
      fill={color}
    />
  </svg>
)

export const GroupShareLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9 6C9 6.39397 9.0776 6.78407 9.22836 7.14805C9.37913 7.51203 9.6001 7.84274 9.87868 8.12132C10.1573 8.3999 10.488 8.62087 10.852 8.77164C11.2159 8.9224 11.606 9 12 9C12.394 9 12.7841 8.9224 13.1481 8.77164C13.512 8.62087 13.8427 8.3999 14.1213 8.12132C14.3999 7.84274 14.6209 7.51203 14.7716 7.14805C14.9224 6.78407 15 6.39396 15 6C15 5.60603 14.9224 5.21593 14.7716 4.85195C14.6209 4.48797 14.3999 4.15725 14.1213 3.87868C13.8427 3.6001 13.512 3.37912 13.148 3.22836C12.7841 3.0776 12.394 3 12 3C11.606 3 11.2159 3.0776 10.8519 3.22836C10.488 3.37913 10.1573 3.6001 9.87868 3.87868C9.6001 4.15726 9.37912 4.48797 9.22836 4.85195C9.0776 5.21593 9 5.60604 9 6L9 6Z'
      stroke={color}
    />
    <path
      d='M4.43781 13.9015C4.09663 14.0985 3.79758 14.3607 3.55775 14.6733C3.31792 14.9858 3.142 15.3426 3.04004 15.7231C2.93807 16.1037 2.91206 16.5006 2.96348 16.8912C3.0149 17.2818 3.14275 17.6584 3.33974 17.9996C3.53672 18.3408 3.79897 18.6398 4.11153 18.8796C4.42408 19.1195 4.78081 19.2954 5.16136 19.3974C5.5419 19.4993 5.9388 19.5253 6.32939 19.4739C6.71999 19.4225 7.09663 19.2946 7.43781 19.0977C7.779 18.9007 8.07804 18.6384 8.31787 18.3259C8.5577 18.0133 8.73362 17.6566 8.83559 17.276C8.93756 16.8955 8.96357 16.4986 8.91215 16.108C8.86072 15.7174 8.73287 15.3408 8.53589 14.9996C8.33891 14.6584 8.07665 14.3594 7.7641 14.1195C7.45154 13.8797 7.09481 13.7038 6.71427 13.6018C6.33373 13.4998 5.93683 13.4738 5.54623 13.5252C5.15564 13.5767 4.779 13.7045 4.43781 13.9015L4.43781 13.9015Z'
      stroke={color}
    />
    <path
      d='M19.5622 13.9015C19.9034 14.0985 20.2024 14.3607 20.4422 14.6733C20.6821 14.9859 20.858 15.3426 20.96 15.7231C21.0619 16.1037 21.0879 16.5006 21.0365 16.8912C20.9851 17.2818 20.8572 17.6584 20.6603 17.9996C20.4633 18.3408 20.201 18.6398 19.8885 18.8796C19.5759 19.1195 19.2192 19.2954 18.8386 19.3974C18.4581 19.4993 18.0612 19.5253 17.6706 19.4739C17.28 19.4225 16.9034 19.2946 16.5622 19.0977C16.221 18.9007 15.922 18.6384 15.6821 18.3259C15.4423 18.0133 15.2664 17.6566 15.1644 17.276C15.0624 16.8955 15.0364 16.4986 15.0879 16.108C15.1393 15.7174 15.2671 15.3408 15.4641 14.9996C15.6611 14.6584 15.9234 14.3594 16.2359 14.1195C16.5485 13.8797 16.9052 13.7038 17.2857 13.6018C17.6663 13.4998 18.0632 13.4738 18.4538 13.5252C18.8444 13.5767 19.221 13.7045 19.5622 13.9015L19.5622 13.9015Z'
      stroke={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.00254 6.12533C9.0008 6.08372 8.99993 6.04203 8.99993 6.0003C8.99993 5.65294 9.06026 5.30857 9.17787 4.98247C9.03301 5.03346 8.8894 5.08843 8.74719 5.14733C7.71592 5.5745 6.77889 6.2006 5.98959 6.9899C5.20029 7.7792 4.57419 8.71623 4.14702 9.7475C3.71986 10.7788 3.5 11.8841 3.5 13.0003C3.5 13.5265 3.54885 14.0502 3.64523 14.5648C3.86884 14.2999 4.13691 14.0755 4.43774 13.9018C4.47388 13.8809 4.51042 13.8609 4.54733 13.8415C4.51586 13.5628 4.5 13.2819 4.5 13.0003C4.5 12.0154 4.69399 11.0401 5.0709 10.1302C5.44781 9.22024 6.00026 8.39345 6.6967 7.69701C7.36051 7.03319 8.14275 6.5002 9.00254 6.12533ZM14.9973 6.12528C15.8572 6.50014 16.6395 7.03315 17.3033 7.697C17.9997 8.39344 18.5522 9.22023 18.9291 10.1302C19.306 11.0401 19.5 12.0154 19.5 13.0003C19.5 13.282 19.4841 13.5628 19.4527 13.8416C19.4895 13.8609 19.526 13.881 19.5621 13.9018C19.863 14.0755 20.1311 14.3 20.3547 14.565C20.4511 14.0503 20.5 13.5265 20.5 13.0003C20.5 11.8841 20.2801 10.7788 19.853 9.74749C19.4258 8.71622 18.7997 7.77919 18.0104 6.98989C17.2211 6.2006 16.2841 5.57449 15.2528 5.14733C15.1105 5.0884 14.9669 5.03342 14.822 4.98242C14.9396 5.30854 14.9999 5.65292 14.9999 6.0003C14.9999 6.04201 14.9991 6.08368 14.9973 6.12528ZM17.533 19.4529C17.1916 19.3917 16.8631 19.2717 16.5621 19.098C16.5261 19.0772 16.4906 19.0556 16.4555 19.0334C15.9665 19.3945 15.4343 19.6957 14.8701 19.9294C13.9602 20.3063 12.9849 20.5003 12 20.5003C11.0151 20.5003 10.0398 20.3063 9.12988 19.9294C8.56568 19.6957 8.03345 19.3945 7.54443 19.0334C7.50935 19.0556 7.47378 19.0772 7.43775 19.098C7.13681 19.2717 6.80829 19.3917 6.46694 19.4528C7.14728 20.0362 7.91668 20.5093 8.74719 20.8533C9.77846 21.2804 10.8838 21.5003 12 21.5003C13.1162 21.5003 14.2215 21.2804 15.2528 20.8533C16.0833 20.5093 16.8527 20.0362 17.533 19.4529Z'
      fill={color}
    />
  </svg>
)

export const Json = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M14 19H16C17.1046 19 18 18.1046 18 17V14.5616C18 13.6438 18.6246 12.8439 19.5149 12.6213L21.0299 12.2425C21.2823 12.1794 21.2823 11.8206 21.0299 11.7575L19.5149 11.3787C18.6246 11.1561 18 10.3562 18 9.43845V5H14'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M10 5H8C6.89543 5 6 5.89543 6 7V9.43845C6 10.3562 5.37541 11.1561 4.48507 11.3787L2.97014 11.7575C2.71765 11.8206 2.71765 12.1794 2.97014 12.2425L4.48507 12.6213C5.37541 12.8439 6 13.6438 6 14.5616V19H10'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const JsonLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M14 19H16C17.1046 19 18 18.1046 18 17V14.5616C18 13.6438 18.6246 12.8439 19.5149 12.6213L21.0299 12.2425C21.2823 12.1794 21.2823 11.8206 21.0299 11.7575L19.5149 11.3787C18.6246 11.1561 18 10.3562 18 9.43845V5H14'
      stroke={color}
    />
    <path
      d='M10 5H8C6.89543 5 6 5.89543 6 7V9.43845C6 10.3562 5.37541 11.1561 4.48507 11.3787L2.97014 11.7575C2.71765 11.8206 2.71765 12.1794 2.97014 12.2425L4.48507 12.6213C5.37541 12.8439 6 13.6438 6 14.5616V19H10'
      stroke={color}
    />
  </svg>
)

export const Link = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M10 16H7C4.79086 16 3 14.2091 3 12V12C3 9.79086 4.79086 8 7 8H10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 12H8'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14 16H17C19.2091 16 21 14.2091 21 12V12C21 9.79086 19.2091 8 17 8H14'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const LinkAltOne = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M14 10L10 14' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M16 13L18 11C19.3807 9.61929 19.3807 7.38071 18 6V6C16.6193 4.61929 14.3807 4.61929 13 6L11 8M8 11L6 13C4.61929 14.3807 4.61929 16.6193 6 18V18C7.38071 19.3807 9.61929 19.3807 11 18L13 16'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const LinkAltTwo = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5.25105 9.66298L3.66437 8.2526C3.25159 7.88568 2.61952 7.92286 2.2526 8.33565C1.88568 8.74843 1.92286 9.3805 2.33565 9.74742L3.74073 10.9964L3.80945 10.9353C4.31159 10.4889 4.79121 10.0625 5.25105 9.66298ZM7.54554 14.3046C7.90943 14.5953 8.25488 14.8551 8.58673 15.0819C9.70322 15.845 10.771 16.3102 12 16.3102C13.2291 16.3102 14.2968 15.845 15.4133 15.0819C16.4941 14.3432 17.7193 13.2542 19.2559 11.8883L19.2559 11.8883L19.308 11.842L21.6644 9.74742C22.0772 9.3805 22.1143 8.74843 21.7474 8.33565C21.3805 7.92286 20.7484 7.88568 20.3356 8.2526L17.9793 10.3471C16.3786 11.7699 15.2479 12.7725 14.2848 13.4307C13.3452 14.0729 12.672 14.3102 12 14.3102C11.3281 14.3102 10.6549 14.0729 9.71523 13.4307C9.51165 13.2916 9.30058 13.1371 9.07916 12.9664C8.6334 13.3441 8.12999 13.7864 7.54554 14.3046Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.4545 9.69511C16.0906 9.40439 15.7451 9.14457 15.4133 8.91777C14.2968 8.15472 13.2291 7.68945 12 7.68945C10.771 7.68945 9.70322 8.15472 8.58673 8.91777C7.50587 9.65646 6.28075 10.7455 4.74408 12.1114L4.69201 12.1577L2.33565 14.2523C1.92286 14.6192 1.88568 15.2513 2.2526 15.664C2.61952 16.0768 3.25159 16.114 3.66437 15.7471L6.02074 13.6525C7.62139 12.2297 8.75214 11.2272 9.71523 10.569C10.6549 9.9268 11.3281 9.68945 12 9.68945C12.672 9.68945 13.3452 9.9268 14.2848 10.569C14.4884 10.7081 14.6994 10.8626 14.9209 11.0333C15.3666 10.6556 15.87 10.2132 16.4545 9.69511ZM20.2593 13.0033L20.1906 13.0644L20.1905 13.0644C19.6884 13.5108 19.2088 13.9372 18.749 14.3367L20.3356 15.7471C20.7484 16.114 21.3805 16.0768 21.7474 15.664C22.1143 15.2513 22.0772 14.6192 21.6644 14.2523L20.2593 13.0033Z'
      fill={color}
    />
  </svg>
)

export const LinkAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M14 10L10 14'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 13L18 11C19.3807 9.61929 19.3807 7.38071 18 6V6C16.6193 4.61929 14.3807 4.61929 13 6L11 8M8 11L6 13C4.61929 14.3807 4.61929 16.6193 6 18V18C7.38071 19.3807 9.61929 19.3807 11 18L13 16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const LinkAltLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M4.87157 9.99464L3.33219 8.6263C3.1258 8.44284 2.80976 8.46143 2.6263 8.66782C2.44284 8.87421 2.46143 9.19025 2.66782 9.37371L4.11705 10.6619C4.37441 10.4333 4.62579 10.2106 4.87157 9.99464ZM7.92571 13.9682C8.25546 14.2298 8.56828 14.4637 8.86885 14.6691C9.94113 15.4019 10.9102 15.8102 12 15.8102C13.0898 15.8102 14.0589 15.4019 15.1312 14.6691C16.1856 13.9485 17.3907 12.8772 18.9485 11.4925L18.9485 11.4925L18.9758 11.4683L21.3322 9.37371C21.5386 9.19025 21.5572 8.87421 21.3737 8.66782C21.1903 8.46143 20.8742 8.44284 20.6678 8.6263L18.3115 10.7208C16.7207 12.1349 15.5625 13.1631 14.5669 13.8435C13.5831 14.5159 12.8112 14.8102 12 14.8102C11.1888 14.8102 10.4169 14.5159 9.4331 13.8435C9.19629 13.6817 8.95028 13.5001 8.69144 13.2984C8.453 13.5045 8.19872 13.7273 7.92571 13.9682Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.0743 10.0314C15.7446 9.7699 15.4317 9.53599 15.1312 9.33057C14.0589 8.59774 13.0898 8.18945 12 8.18945C10.9102 8.18945 9.94113 8.59774 8.86885 9.33057C7.81445 10.0512 6.60925 11.1225 5.05149 12.5072L5.02418 12.5314L2.66782 14.626C2.46143 14.8094 2.44284 15.1255 2.6263 15.3319C2.80976 15.5383 3.1258 15.5568 3.33219 15.3734L5.68855 13.2788C7.27931 11.8648 8.43752 10.8366 9.4331 10.1562C10.4169 9.48378 11.1888 9.18945 12 9.18945C12.8112 9.18945 13.5831 9.48378 14.5669 10.1562C14.8037 10.318 15.0497 10.4995 15.3086 10.7012C15.547 10.4952 15.8013 10.2724 16.0743 10.0314ZM19.883 13.3378C19.6256 13.5664 19.3742 13.7891 19.1284 14.005L20.6678 15.3734C20.8742 15.5568 21.1903 15.5383 21.3737 15.3319C21.5572 15.1255 21.5386 14.8094 21.3322 14.626L19.883 13.3378Z'
      fill={color}
    />
  </svg>
)

export const LinkLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M10 16H7C4.79086 16 3 14.2091 3 12V12C3 9.79086 4.79086 8 7 8H10'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M16 12H8' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M14 16H17C19.2091 16 21 14.2091 21 12V12C21 9.79086 19.2091 8 17 8H14'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const Remote = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M7 4L11 9L7 14' stroke={color} strokeWidth='2' />
    <path d='M17 10L13 15L17 20' stroke={color} strokeWidth='2' />
  </svg>
)

export const RemoteLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M7 4L11 9L7 14' stroke={color} />
    <path d='M17 10L13 15L17 20' stroke={color} />
  </svg>
)

export const Terminal = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='3' y='5' width='17' height='14' rx='2' stroke={color} strokeWidth='2' />
    <path
      d='M7 10L9 12L7 14'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 14H16' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const TerminalLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M4.5 10.7C4.5 9.57989 4.5 9.01984 4.71799 8.59202C4.90973 8.21569 5.21569 7.90973 5.59202 7.71799C6.01984 7.5 6.5799 7.5 7.7 7.5H16.3C17.4201 7.5 17.9802 7.5 18.408 7.71799C18.7843 7.90973 19.0903 8.21569 19.282 8.59202C19.5 9.01984 19.5 9.57989 19.5 10.7V14.3C19.5 15.4201 19.5 15.9802 19.282 16.408C19.0903 16.7843 18.7843 17.0903 18.408 17.282C17.9802 17.5 17.4201 17.5 16.3 17.5H7.7C6.57989 17.5 6.01984 17.5 5.59202 17.282C5.21569 17.0903 4.90973 16.7843 4.71799 16.408C4.5 15.9802 4.5 15.4201 4.5 14.3V10.7Z'
      stroke={color}
    />
  </svg>
)
