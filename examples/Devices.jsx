import React from 'react'

export const CPU = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7 11C7 9.11438 7 8.17157 7.58579 7.58579C8.17157 7 9.11438 7 11 7H13C14.8856 7 15.8284 7 16.4142 7.58579C17 8.17157 17 9.11438 17 11V13C17 14.8856 17 15.8284 16.4142 16.4142C15.8284 17 14.8856 17 13 17H11C9.11438 17 8.17157 17 7.58579 16.4142C7 15.8284 7 14.8856 7 13V11Z'
      stroke={color}
      strokeWidth='2'
    />
    <rect x='10' y='10' width='4' height='4' rx='1' fill={color} />
    <path d='M10 7V4' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M14 7V4' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M17 10L20 10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M17 14L20 14' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M10 20V17' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M14 20V17' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M4 10L7 10' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M4 14L7 14' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const CPULight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7 11C7 9.11438 7 8.17157 7.58579 7.58579C8.17157 7 9.11438 7 11 7H13C14.8856 7 15.8284 7 16.4142 7.58579C17 8.17157 17 9.11438 17 11V13C17 14.8856 17 15.8284 16.4142 16.4142C15.8284 17 14.8856 17 13 17H11C9.11438 17 8.17157 17 7.58579 16.4142C7 15.8284 7 14.8856 7 13V11Z'
      stroke={color}
    />
    <rect x='10' y='10' width='4' height='4' rx='1' fill={color} />
    <path d='M10 7V4' stroke={color} strokeLinecap='round' />
    <path d='M14 7V4' stroke={color} strokeLinecap='round' />
    <path d='M17 10L20 10' stroke={color} strokeLinecap='round' />
    <path d='M17 14L20 14' stroke={color} strokeLinecap='round' />
    <path d='M10 20V17' stroke={color} strokeLinecap='round' />
    <path d='M14 20V17' stroke={color} strokeLinecap='round' />
    <path d='M4 10L7 10' stroke={color} strokeLinecap='round' />
    <path d='M4 14L7 14' stroke={color} strokeLinecap='round' />
  </svg>
)

export const Gamepad = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='13' y='14' width='2' height='2' rx='1' fill={color} />
    <rect x='7' y='11' width='2' height='6' rx='1' fill={color} />
    <rect x='11' y='13' width='2' height='6' rx='1' transform='rotate(90 11 13)' fill={color} />
    <rect x='16' y='12' width='2' height='2' rx='1' fill={color} />
    <path
      d='M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const GamepadLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='13' y='14' width='2' height='2' rx='1' fill={color} />
    <path d='M10 14H6' stroke={color} strokeLinecap='round' />
    <path d='M8 12L8 16' stroke={color} strokeLinecap='round' />
    <rect x='16' y='12' width='2' height='2' rx='1' fill={color} />
    <path
      d='M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z'
      stroke={color}
    />
  </svg>
)

export const Mouse = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 10.8C5 8.18126 5 6.87188 5.58944 5.91001C5.91926 5.37178 6.37178 4.91926 6.91001 4.58944C7.87188 4 9.18126 4 11.8 4H12.2C14.8187 4 16.1281 4 17.09 4.58944C17.6282 4.91926 18.0807 5.37178 18.4106 5.91001C19 6.87188 19 8.18126 19 10.8V14C19 14.9288 19 15.3933 18.9487 15.7832C18.5942 18.4756 16.4756 20.5942 13.7832 20.9487C13.3933 21 12.9288 21 12 21V21C11.0712 21 10.6067 21 10.2168 20.9487C7.52444 20.5942 5.40579 18.4756 5.05133 15.7832C5 15.3933 5 14.9288 5 14V10.8Z'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path d='M12 4V9' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const MouseLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 10.8C5 8.18126 5 6.87188 5.58944 5.91001C5.91926 5.37178 6.37178 4.91926 6.91001 4.58944C7.87188 4 9.18126 4 11.8 4H12.2C14.8187 4 16.1281 4 17.09 4.58944C17.6282 4.91926 18.0807 5.37178 18.4106 5.91001C19 6.87188 19 8.18126 19 10.8V14C19 14.9288 19 15.3933 18.9487 15.7832C18.5942 18.4756 16.4756 20.5942 13.7832 20.9487C13.3933 21 12.9288 21 12 21V21C11.0712 21 10.6067 21 10.2168 20.9487C7.52444 20.5942 5.40579 18.4756 5.05133 15.7832C5 15.3933 5 14.9288 5 14V10.8Z'
      stroke={color}
      strokeLinejoin='round'
    />
    <path d='M12 4V9' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const Tablet = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='5' y='3' width='14' height='18' rx='2' stroke={color} strokeWidth='2' />
    <path d='M15 17H9' stroke={color} strokeWidth='2' />
  </svg>
)

export const TabletLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='4.5' y='2.5' width='15' height='19' rx='2.5' stroke={color} />
    <path d='M15 18H9' stroke={color} />
  </svg>
)

export const Desktop = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M4 8C4 7.02892 4.00212 6.40121 4.06431 5.9387C4.12262 5.50496 4.21677 5.36902 4.29289 5.29289C4.36902 5.21677 4.50496 5.12262 4.9387 5.06431C5.40121 5.00212 6.02892 5 7 5H17C17.9711 5 18.5988 5.00212 19.0613 5.06431C19.495 5.12262 19.631 5.21677 19.7071 5.29289C19.7832 5.36902 19.8774 5.50496 19.9357 5.9387C19.9979 6.40121 20 7.02892 20 8V16H4V8Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M3.66667 16C2.74619 16 2 16.7462 2 17.6667C2 18.9553 3.04467 20 4.33333 20H19.6667C20.9553 20 22 18.9553 22 17.6667C22 16.7462 21.2538 16 20.3333 16H3.66667Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const DesktopLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M3.5 8C3.5 7.04306 3.50106 6.37565 3.56876 5.87208C3.63453 5.3829 3.75483 5.12385 3.93934 4.93934C4.12385 4.75483 4.3829 4.63453 4.87208 4.56876C5.37565 4.50106 6.04306 4.5 7 4.5H17C17.9569 4.5 18.6244 4.50106 19.1279 4.56876C19.6171 4.63453 19.8762 4.75483 20.0607 4.93934C20.2452 5.12385 20.3655 5.3829 20.4312 5.87208C20.4989 6.37565 20.5 7.04306 20.5 8V16.5H3.5V8Z'
      stroke={color}
    />
    <path
      d='M3.66667 16.5C3.02233 16.5 2.5 17.0223 2.5 17.6667C2.5 18.6792 3.32081 19.5 4.33333 19.5H19.6667C20.6792 19.5 21.5 18.6792 21.5 17.6667C21.5 17.0223 20.9777 16.5 20.3333 16.5H3.66667Z'
      stroke={color}
    />
  </svg>
)

export const Mobile = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M6.87868 2.87868C6.36902 3.38834 6.17027 4.01669 6.08214 4.67221C5.9999 5.28387 5.99995 6.04768 6 6.93417C6 6.95604 6 6.97798 6 7V17L6 17.0658C5.99995 17.9523 5.9999 18.7161 6.08214 19.3278C6.17027 19.9833 6.36902 20.6117 6.87868 21.1213C7.38834 21.631 8.01669 21.8297 8.67221 21.9179C9.28387 22.0001 10.0477 22.0001 10.9342 22L11 22H13L13.0658 22C13.9523 22.0001 14.7161 22.0001 15.3278 21.9179C15.9833 21.8297 16.6117 21.631 17.1213 21.1213C17.631 20.6117 17.8297 19.9833 17.9179 19.3278C18.0001 18.7161 18.0001 17.9523 18 17.0658L18 17V7L18 6.93417C18.0001 6.04768 18.0001 5.28387 17.9179 4.67221C17.8297 4.01669 17.631 3.38834 17.1213 2.87868C16.6117 2.36902 15.9833 2.17027 15.3278 2.08214C14.7161 1.9999 13.9523 1.99995 13.0658 2C13.044 2 13.022 2 13 2H11C10.978 2 10.956 2 10.9342 2C10.0477 1.99995 9.28387 1.9999 8.67221 2.08214C8.01669 2.17027 7.38834 2.36902 6.87868 2.87868Z'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M7 16H17' stroke={color} strokeWidth='2' />
  </svg>
)

export const MobileLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7.23223 3.23223C6.83096 3.63351 6.65836 4.13876 6.57768 4.73883C6.49997 5.31681 6.49999 6.05169 6.5 6.96342L6.5 7V17L6.5 17.0366C6.49999 17.9483 6.49997 18.6832 6.57768 19.2612C6.65836 19.8612 6.83096 20.3665 7.23223 20.7678C7.63351 21.169 8.13876 21.3416 8.73883 21.4223C9.31681 21.5 10.0517 21.5 10.9634 21.5H11H13H13.0366C13.9483 21.5 14.6832 21.5 15.2612 21.4223C15.8612 21.3416 16.3665 21.169 16.7678 20.7678C17.169 20.3665 17.3416 19.8612 17.4223 19.2612C17.5 18.6832 17.5 17.9483 17.5 17.0366V17V7V6.96343C17.5 6.0517 17.5 5.31681 17.4223 4.73883C17.3416 4.13876 17.169 3.63351 16.7678 3.23223C16.3665 2.83096 15.8612 2.65836 15.2612 2.57768C14.6832 2.49997 13.9483 2.49999 13.0366 2.5L13 2.5H11L10.9634 2.5C10.0517 2.49999 9.31681 2.49997 8.73883 2.57768C8.13876 2.65836 7.63351 2.83096 7.23223 3.23223Z'
      stroke={color}
    />
    <path d='M7 16H17' stroke={color} />
  </svg>
)

export const Watch = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='5' y='5' width='14' height='12' rx='3' stroke={color} strokeWidth='2' />
    <path
      d='M8 4C8 3.05719 8 2.58579 8.29289 2.29289C8.58579 2 9.05719 2 10 2H14C14.9428 2 15.4142 2 15.7071 2.29289C16 2.58579 16 3.05719 16 4V5H8V4Z'
      fill={color}
    />
    <path
      d='M8 20C8 20.9428 8 21.4142 8.29289 21.7071C8.58579 22 9.05719 22 10 22H14C14.9428 22 15.4142 22 15.7071 21.7071C16 21.4142 16 20.9428 16 20V17H8V20Z'
      fill={color}
    />
  </svg>
)

export const WatchAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='7' y='7' width='10' height='10' rx='3' stroke={color} strokeWidth='2' />
    <path
      d='M9 4C9 3.05719 9 2.58579 9.29289 2.29289C9.58579 2 10.0572 2 11 2H13C13.9428 2 14.4142 2 14.7071 2.29289C15 2.58579 15 3.05719 15 4V7H9V4Z'
      fill={color}
    />
    <path
      d='M9 20C9 20.9428 9 21.4142 9.29289 21.7071C9.58579 22 10.0572 22 11 22H13C13.9428 22 14.4142 22 14.7071 21.7071C15 21.4142 15 20.9428 15 20V17H9V20Z'
      fill={color}
    />
  </svg>
)

export const WatchAltLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='6.5' y='6.5' width='11' height='11' rx='2.5' stroke={color} />
    <path
      d='M15 6.5H15.5V6V5L15.5 4.96708C15.5 4.52384 15.5 4.14193 15.4589 3.8361C15.4149 3.50835 15.3155 3.19417 15.0607 2.93934C14.8058 2.68451 14.4917 2.58514 14.1639 2.54107C13.8581 2.49995 13.4762 2.49997 13.0329 2.5L13 2.5H11C10.989 2.5 10.978 2.5 10.9671 2.5C10.5238 2.49997 10.1419 2.49995 9.8361 2.54107C9.50835 2.58514 9.19417 2.68451 8.93934 2.93934C8.68451 3.19417 8.58514 3.50835 8.54107 3.8361C8.49995 4.14193 8.49997 4.52384 8.5 4.96708C8.5 4.97802 8.5 4.98899 8.5 5V6V6.5H9H15Z'
      stroke={color}
    />
    <path
      d='M15 17.5H15.5V18V19L15.5 19.0329C15.5 19.4762 15.5 19.8581 15.4589 20.1639C15.4149 20.4917 15.3155 20.8058 15.0607 21.0607C14.8058 21.3155 14.4917 21.4149 14.1639 21.4589C13.8581 21.5 13.4762 21.5 13.0329 21.5L13 21.5H11C10.989 21.5 10.978 21.5 10.9671 21.5C10.5238 21.5 10.1419 21.5 9.8361 21.4589C9.50835 21.4149 9.19417 21.3155 8.93934 21.0607C8.68451 20.8058 8.58514 20.4917 8.54107 20.1639C8.49995 19.8581 8.49997 19.4762 8.5 19.0329C8.5 19.022 8.5 19.011 8.5 19V18V17.5H9H15Z'
      stroke={color}
    />
  </svg>
)

export const WatchLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='5.5' y='5.5' width='13' height='11' rx='2.5' stroke={color} />
    <path
      d='M15 5.5H15.5V5V4L15.5 3.96708C15.5 3.52384 15.5 3.14193 15.4589 2.8361C15.4149 2.50835 15.3155 2.19417 15.0607 1.93934C14.8058 1.68451 14.4917 1.58514 14.1639 1.54107C13.8581 1.49995 13.4762 1.49997 13.0329 1.5L13 1.5H11C10.989 1.5 10.978 1.5 10.9671 1.5C10.5238 1.49997 10.1419 1.49995 9.8361 1.54107C9.50835 1.58514 9.19417 1.68451 8.93934 1.93934C8.68451 2.19417 8.58514 2.50835 8.54107 2.8361C8.49995 3.14193 8.49997 3.52384 8.5 3.96708C8.5 3.97802 8.5 3.98899 8.5 4V5V5.5H9H15Z'
      stroke={color}
    />
    <path
      d='M15 16.5H15.5V17V20L15.5 20.0329C15.5 20.4762 15.5 20.8581 15.4589 21.1639C15.4149 21.4917 15.3155 21.8058 15.0607 22.0607C14.8058 22.3155 14.4917 22.4149 14.1639 22.4589C13.8581 22.5 13.4762 22.5 13.0329 22.5L13 22.5H11C10.989 22.5 10.978 22.5 10.9671 22.5C10.5238 22.5 10.1419 22.5 9.8361 22.4589C9.50835 22.4149 9.19417 22.3155 8.93934 22.0607C8.68451 21.8058 8.58514 21.4917 8.54107 21.1639C8.49995 20.8581 8.49997 20.4762 8.5 20.0329C8.5 20.022 8.5 20.011 8.5 20V17V16.5H9H15Z'
      stroke={color}
    />
  </svg>
)
