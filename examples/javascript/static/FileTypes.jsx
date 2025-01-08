/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const Blank = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M14.1716 21H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H17C18.8856 3 19.8284 3 20.4142 3.58579C21 4.17157 21 5.11438 21 7V14.1716C21 14.5803 21 14.7847 20.9239 14.9685C20.8478 15.1522 20.7032 15.2968 20.4142 15.5858L15.5858 20.4142C15.2968 20.7032 15.1522 20.8478 14.9685 20.9239C14.7847 21 14.5803 21 14.1716 21Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M14 21V16.3333C14 15.2334 14 14.6834 14.3417 14.3417C14.6834 14 15.2334 14 16.3333 14H21'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const BlankAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12.1716 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H15C16.8856 3 17.8284 3 18.4142 3.58579C19 4.17157 19 5.11438 19 7V14.1716C19 14.5803 19 14.7847 18.9239 14.9685C18.8478 15.1522 18.7032 15.2968 18.4142 15.5858L13.5858 20.4142C13.2968 20.7032 13.1522 20.8478 12.9685 20.9239C12.7847 21 12.5803 21 12.1716 21Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M12 21V16.3333C12 15.2334 12 14.6834 12.3417 14.3417C12.6834 14 13.2334 14 14.3333 14H19'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const BlankAltDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 19C5 20.1046 5.89543 21 7 21H11.75C11.8881 21 12 20.8881 12 20.75V16C12 14.8954 12.8954 14 14 14H18.75C18.8881 14 19 13.8881 19 13.75V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M13 16V20.3964C13 20.6192 13.2693 20.7307 13.4268 20.5732L18.5732 15.4268C18.7307 15.2693 18.6192 15 18.3964 15H14C13.4477 15 13 15.4477 13 16Z'
      fill={color}
    />
  </svg>
)

export const BlankAltDuotoneLine = ({
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
      d='M12 16.3333V21H13L19 15V14H14.3333C13.2334 14 12.6834 14 12.3417 14.3417C12 14.6834 12 15.2334 12 16.3333Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M12.1716 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H15C16.8856 3 17.8284 3 18.4142 3.58579C19 4.17157 19 5.11438 19 7V14.1716C19 14.5803 19 14.7847 18.9239 14.9685C18.8478 15.1522 18.7032 15.2968 18.4142 15.5858L13.5858 20.4142C13.2968 20.7032 13.1522 20.8478 12.9685 20.9239C12.7847 21 12.5803 21 12.1716 21Z'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M12 21V16.3333C12 15.2334 12 14.6834 12.3417 14.3417C12.6834 14 13.2334 14 14.3333 14H19'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const BlankAltFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7 2C5.34315 2 4 3.34315 4 5V19C4 20.6569 5.34315 22 7 22H11V17L11 16.9384C10.9999 16.2843 10.9999 15.6965 11.0638 15.2208C11.1337 14.7015 11.2958 14.1687 11.7322 13.7322C12.1687 13.2958 12.7015 13.1337 13.2208 13.0638C13.6966 12.9999 14.2843 12.9999 14.9384 13L15 13H20V5C20 3.34315 18.6569 2 17 2H7ZM19.7305 15H15C14.2646 15 13.8137 15.0021 13.4873 15.046C13.2005 15.0846 13.1526 15.1394 13.1469 15.1459L13.1464 15.1464L13.1459 15.1469C13.1394 15.1526 13.0846 15.2005 13.046 15.4873C13.0021 15.8137 13 16.2646 13 17V21.7305C13.324 21.5831 13.6222 21.3778 13.8787 21.1213L19.1213 15.8787C19.3778 15.6222 19.5831 15.324 19.7305 15Z'
      fill={color}
    />
  </svg>
)

export const BlankAltLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12.1716 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H15C16.8856 3 17.8284 3 18.4142 3.58579C19 4.17157 19 5.11438 19 7V14.1716C19 14.5803 19 14.7847 18.9239 14.9685C18.8478 15.1522 18.7032 15.2968 18.4142 15.5858L13.5858 20.4142C13.2968 20.7032 13.1522 20.8478 12.9685 20.9239C12.7847 21 12.5803 21 12.1716 21Z'
      stroke={color}
    />
    <path
      d='M12 21V16.3333C12 15.2334 12 14.6834 12.3417 14.3417C12.6834 14 13.2334 14 14.3333 14H19'
      stroke={color}
    />
  </svg>
)

export const BlankDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M2 19C2 20.1046 2.89543 21 4 21H14.75C14.8881 21 15 20.8881 15 20.75V16C15 14.8954 15.8954 14 17 14H21.75C21.8881 14 22 13.8881 22 13.75V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V19Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M16 16V20.3964C16 20.6192 16.2693 20.7307 16.4268 20.5732L21.5732 15.4268C21.7307 15.2693 21.6192 15 21.3964 15H17C16.4477 15 16 15.4477 16 16Z'
      fill={color}
    />
  </svg>
)

export const BlankDuotoneLine = ({
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
      d='M14 16.3333V21H15L21 15V14H16.3333C15.2334 14 14.6834 14 14.3417 14.3417C14 14.6834 14 15.2334 14 16.3333Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M14.1716 21H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H17C18.8856 3 19.8284 3 20.4142 3.58579C21 4.17157 21 5.11438 21 7V14.1716C21 14.5803 21 14.7847 20.9239 14.9685C20.8478 15.1522 20.7032 15.2968 20.4142 15.5858L15.5858 20.4142C15.2968 20.7032 15.1522 20.8478 14.9685 20.9239C14.7847 21 14.5803 21 14.1716 21Z'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M14 21V16.3333C14 15.2334 14 14.6834 14.3417 14.3417C14.6834 14 15.2334 14 16.3333 14H21'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const BlankFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H13V17L13 16.9384C12.9999 16.2843 12.9999 15.6965 13.0638 15.2208C13.1337 14.7015 13.2958 14.1687 13.7322 13.7322C14.1687 13.2958 14.7015 13.1337 15.2208 13.0638C15.6966 12.9999 16.2843 12.9999 16.9384 13L17 13H22V5C22 3.34315 20.6569 2 19 2H5ZM21.7305 15H17C16.2646 15 15.8137 15.0021 15.4873 15.046C15.2005 15.0846 15.1526 15.1394 15.1469 15.1459L15.1464 15.1464L15.1459 15.1469C15.1394 15.1526 15.0846 15.2005 15.046 15.4873C15.0021 15.8137 15 16.2646 15 17V21.7305C15.324 21.5831 15.6222 21.3778 15.8787 21.1213L21.1213 15.8787C21.3778 15.6222 21.5831 15.324 21.7305 15Z'
      fill={color}
    />
  </svg>
)

export const BlankLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M14.1716 21H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H17C18.8856 3 19.8284 3 20.4142 3.58579C21 4.17157 21 5.11438 21 7V14.1716C21 14.5803 21 14.7847 20.9239 14.9685C20.8478 15.1522 20.7032 15.2968 20.4142 15.5858L15.5858 20.4142C15.2968 20.7032 15.1522 20.8478 14.9685 20.9239C14.7847 21 14.5803 21 14.1716 21Z'
      stroke={color}
    />
    <path
      d='M14 21V16.3333C14 15.2334 14 14.6834 14.3417 14.3417C14.6834 14 15.2334 14 16.3333 14H21'
      stroke={color}
    />
  </svg>
)

export const File = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M13.1716 3H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V8.82843C19 8.41968 19 8.2153 18.9239 8.03153C18.8478 7.84776 18.7032 7.70324 18.4142 7.41421L14.5858 3.58579C14.2968 3.29676 14.1522 3.15224 13.9685 3.07612C13.7847 3 13.5803 3 13.1716 3Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M13 3V7C13 7.94281 13 8.41421 13.2929 8.70711C13.5858 9 14.0572 9 15 9H19'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const FileDock = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M13.1716 3H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V8.82843C19 8.41968 19 8.2153 18.9239 8.03153C18.8478 7.84776 18.7032 7.70324 18.4142 7.41421L14.5858 3.58579C14.2968 3.29676 14.1522 3.15224 13.9685 3.07612C13.7847 3 13.5803 3 13.1716 3Z'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M9 13L15 13' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 17L13 17' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M13 3V7C13 7.94281 13 8.41421 13.2929 8.70711C13.5858 9 14.0572 9 15 9H19'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const FileDockAdd = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M9 13L15 13' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 9L13 9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 17L13 17' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M19 13V15C19 17.8284 19 19.2426 18.1213 20.1213C17.2426 21 15.8284 21 13 21H11C8.17157 21 6.75736 21 5.87868 20.1213C5 19.2426 5 17.8284 5 15V9C5 6.17157 5 4.75736 5.87868 3.87868C6.75736 3 8.17157 3 11 3V3'
      stroke={color}
      strokeWidth='2'
    />
    <path d='M18 3L18 9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M21 6L15 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const FileDockAddFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 2C13.4992 2 14.7004 2 15.6773 2.07361C15.5629 2.3601 15.5 2.6727 15.5 3V3.5H15C13.6193 3.5 12.5 4.61929 12.5 6C12.5 7.38071 13.6193 8.5 15 8.5H15.5V9C15.5 10.3807 16.6193 11.5 18 11.5C18.8178 11.5 19.5439 11.1073 20 10.5002V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H8ZM8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H14C14.5523 16 15 15.5523 15 15C15 14.4477 14.5523 14 14 14H8ZM8 17C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19H12C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17H8Z'
      fill={color}
    />
    <path d='M18 3L18 9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M21 6L15 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const FileDockDuotoneOne = ({
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
      d='M5 5C5 3.89543 5.89543 3 7 3H11.75C11.8881 3 12 3.11193 12 3.25V8C12 9.10457 12.8954 10 14 10H18.75C18.8881 10 19 10.1119 19 10.25V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M13 8V3.60355C13 3.38083 13.2693 3.26929 13.4268 3.42678L18.5732 8.57322C18.7307 8.73071 18.6192 9 18.3964 9H14C13.4477 9 13 8.55228 13 8Z'
      fill={color}
    />
    <path d='M8.5 13.5L14.5 13.5' stroke={color} strokeLinecap='round' />
    <path d='M8.5 16.5L13.5 16.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const FileDockDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 5C5 3.89543 5.89543 3 7 3H11.75C11.8881 3 12 3.11193 12 3.25V8C12 9.10457 12.8954 10 14 10H18.75C18.8881 10 19 10.1119 19 10.25V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M13 8V3.60355C13 3.38083 13.2693 3.26929 13.4268 3.42678L18.5732 8.57322C18.7307 8.73071 18.6192 9 18.3964 9H14C13.4477 9 13 8.55228 13 8Z'
      fill={color}
    />
    <path d='M12 11.5V17.5' stroke={color} strokeLinecap='round' />
    <path d='M9 14.5H15' stroke={color} strokeLinecap='round' />
  </svg>
)

export const FileDockDuotoneLineOne = ({
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
      d='M13 7V3H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V9H15C14.0572 9 13.5858 9 13.2929 8.70711C13 8.41421 13 7.94281 13 7Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M13.1716 3H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V8.82843C19 8.41968 19 8.2153 18.9239 8.03153C18.8478 7.84776 18.7032 7.70324 18.4142 7.41421L14.5858 3.58579C14.2968 3.29676 14.1522 3.15224 13.9685 3.07612C13.7847 3 13.5803 3 13.1716 3Z'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M9 13L15 13' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M9 17L13 17' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M13 3V7C13 7.94281 13 8.41421 13.2929 8.70711C13.5858 9 14.0572 9 15 9H19'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const FileDockDuotoneLine = ({
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
    <rect x='5' y='8' width='11' height='13' rx='2' fill={color} fillOpacity='0.25' />
    <path d='M8 14L14 14' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M8 11L12 11' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M8 17L12 17' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M19 13V15C19 17.8284 19 19.2426 18.1213 20.1213C17.2426 21 15.8284 21 13 21H11C8.17157 21 6.75736 21 5.87868 20.1213C5 19.2426 5 17.8284 5 15V9C5 6.17157 5 4.75736 5.87868 3.87868C6.75736 3 8.17157 3 11 3H12'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path d='M18 3L18 9' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M21 6L15 6' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const FileDockFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 2V7L12 7.05441C11.9999 7.47848 11.9998 7.8906 12.0455 8.23052C12.097 8.61372 12.2226 9.051 12.5858 9.41421C12.949 9.77743 13.3863 9.90295 13.7695 9.95447C14.1094 10.0002 14.5215 10.0001 14.9456 10H14.9456H14.9456H14.9456L15 10H20V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H12ZM14 2.00462V7C14 7.49967 14.0021 7.77383 14.0277 7.96402L14.0287 7.97131L14.036 7.97231C14.2262 7.99788 14.5003 8 15 8H19.9954C19.9852 7.58836 19.9525 7.31595 19.8478 7.06306C19.6955 6.69552 19.4065 6.40649 18.8284 5.82843L16.1716 3.17157C15.5935 2.59351 15.3045 2.30448 14.9369 2.15224C14.684 2.04749 14.4116 2.01481 14 2.00462ZM8 13C8 12.4477 8.44772 12 9 12L15 12C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14L9 14C8.44772 14 8 13.5523 8 13ZM9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H9Z'
      fill={color}
    />
  </svg>
)

export const FileDockLightOne = ({
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
    <path d='M8.5 12.5L15.5 12.5' stroke={color} strokeLinecap='round' />
    <path d='M8.5 15.5L12.5 15.5' stroke={color} strokeLinecap='round' />
    <path
      d='M5.5 5.9C5.5 5.05992 5.5 4.63988 5.66349 4.31901C5.8073 4.03677 6.03677 3.8073 6.31901 3.66349C6.63988 3.5 7.05992 3.5 7.9 3.5H12.5059C12.8728 3.5 13.0562 3.5 13.2288 3.54145C13.3819 3.57819 13.5282 3.6388 13.6624 3.72104C13.8138 3.8138 13.9435 3.94352 14.2029 4.20294L17.7971 7.79706C18.0565 8.05648 18.1862 8.1862 18.279 8.33757C18.3612 8.47178 18.4218 8.6181 18.4586 8.77115C18.5 8.94378 18.5 9.12723 18.5 9.49411V18.1C18.5 18.9401 18.5 19.3601 18.3365 19.681C18.1927 19.9632 17.9632 20.1927 17.681 20.3365C17.3601 20.5 16.9401 20.5 16.1 20.5H7.9C7.05992 20.5 6.63988 20.5 6.31901 20.3365C6.03677 20.1927 5.8073 19.9632 5.66349 19.681C5.5 19.3601 5.5 18.9401 5.5 18.1V5.9Z'
      stroke={color}
    />
    <path
      d='M12.5 3.5V7.1C12.5 7.94008 12.5 8.36012 12.6635 8.68099C12.8073 8.96323 13.0368 9.1927 13.319 9.33651C13.6399 9.5 14.0599 9.5 14.9 9.5H18.5'
      stroke={color}
    />
  </svg>
)

export const FileDockLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M19 13V15C19 17.8284 19 19.2426 18.1213 20.1213C17.2426 21 15.8284 21 13 21H11C8.17157 21 6.75736 21 5.87868 20.1213C5 19.2426 5 17.8284 5 15V9C5 6.17157 5 4.75736 5.87868 3.87868C6.75736 3 8.17157 3 11 3H12'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M18 3L18 9' stroke={color} strokeLinecap='round' />
    <path d='M21 6L15 6' stroke={color} strokeLinecap='round' />
    <path d='M9 13L15 13' stroke={color} strokeLinecap='round' />
    <path d='M9 9L13 9' stroke={color} strokeLinecap='round' />
    <path d='M9 17L13 17' stroke={color} strokeLinecap='round' />
  </svg>
)

export const FileDockSearchOne = ({
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
    <rect x='5' y='3' width='14' height='18' rx='2' fill={color} fillOpacity='0.25' />
    <circle cx='15.5' cy='16.5' r='2' stroke={color} />
    <path d='M18 19L19.5 20.5' stroke={color} strokeLinecap='round' />
    <path d='M7.5 6.5L14.5 6.5' stroke={color} strokeLinecap='round' />
    <path d='M7.5 9.5L11.5 9.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const FileDockSearch = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M9 7L13 7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 15L12 15' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M9 11L15 11' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M19 11V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H11C8.17157 3 6.75736 3 5.87868 3.87868C5 4.75736 5 6.17157 5 9V15C5 17.8284 5 19.2426 5.87868 20.1213C6.75736 21 8.17157 21 11 21H12'
      stroke={color}
      strokeWidth='2'
    />
    <circle cx='17.5' cy='17.5' r='2.5' stroke={color} strokeWidth='2' />
    <path d='M21 21L19.5 19.5' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const FileDockSearchFill = ({
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
    <circle cx='17.5' cy='17.5' r='2.5' stroke={color} strokeWidth='2' />
    <path d='M21 21L19.5 19.5' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V13.1689C19.2646 12.7435 18.4107 12.5 17.5 12.5C14.7386 12.5 12.5 14.7386 12.5 17.5C12.5 19.4428 13.6081 21.1269 15.2268 21.9546C14.337 22 13.2765 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10ZM8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H12C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5H8ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9L8 9ZM8 13C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13H8Z'
      fill={color}
    />
  </svg>
)

export const FileDockSearchLight = ({
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
    <path d='M9 7L13 7' stroke={color} strokeLinecap='round' />
    <path d='M9 15L12 15' stroke={color} strokeLinecap='round' />
    <path d='M9 11L15 11' stroke={color} strokeLinecap='round' />
    <path
      d='M19 11V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H11C8.17157 3 6.75736 3 5.87868 3.87868C5 4.75736 5 6.17157 5 9V15C5 17.8284 5 19.2426 5.87868 20.1213C6.75736 21 8.17157 21 11 21H12'
      stroke={color}
      strokeLinecap='round'
    />
    <circle cx='17.5' cy='17.5' r='2.5' stroke={color} strokeLinecap='round' />
    <path d='M21 21L19.5 19.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const FileDockSearchLine = ({
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
    <rect x='5' y='3' width='11' height='13' rx='2' fill={color} fillOpacity='0.25' />
    <path d='M9 7L13 7' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M9 15L12 15' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M9 11L15 11' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path
      d='M19 11V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H11C8.17157 3 6.75736 3 5.87868 3.87868C5 4.75736 5 6.17157 5 9V15C5 17.8284 5 19.2426 5.87868 20.1213C6.75736 21 8.17157 21 11 21H12'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <circle cx='17.5' cy='17.5' r='2.5' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
    <path d='M21 21L19.5 19.5' stroke={color} strokeWidth='1.2' strokeLinecap='round' />
  </svg>
)

export const FileDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 5C5 3.89543 5.89543 3 7 3H11.75C11.8881 3 12 3.11193 12 3.25V8C12 9.10457 12.8954 10 14 10H18.75C18.8881 10 19 10.1119 19 10.25V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M13 8V3.60355C13 3.38083 13.2693 3.26929 13.4268 3.42678L18.5732 8.57322C18.7307 8.73071 18.6192 9 18.3964 9H14C13.4477 9 13 8.55228 13 8Z'
      fill={color}
    />
  </svg>
)

export const FileDuotoneLine = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M13 7V3H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V9H15C14.0572 9 13.5858 9 13.2929 8.70711C13 8.41421 13 7.94281 13 7Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M13.1716 3H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V8.82843C19 8.41968 19 8.2153 18.9239 8.03153C18.8478 7.84776 18.7032 7.70324 18.4142 7.41421L14.5858 3.58579C14.2968 3.29676 14.1522 3.15224 13.9685 3.07612C13.7847 3 13.5803 3 13.1716 3Z'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M13 3V7C13 7.94281 13 8.41421 13.2929 8.70711C13.5858 9 14.0572 9 15 9H19'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const FileFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 2V7L12 7.05441C11.9999 7.47848 11.9998 7.8906 12.0455 8.23052C12.097 8.61372 12.2226 9.051 12.5858 9.41421C12.949 9.77743 13.3863 9.90295 13.7695 9.95447C14.1094 10.0002 14.5215 10.0001 14.9456 10H14.9456L15 10H20V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H12ZM14 2.00462V7C14 7.49967 14.0021 7.77383 14.0277 7.96402L14.0287 7.97131L14.036 7.97231C14.2262 7.99788 14.5003 8 15 8H19.9954C19.9852 7.58836 19.9525 7.31595 19.8478 7.06306C19.6955 6.69552 19.4065 6.40649 18.8284 5.82843L16.1716 3.17157C15.5935 2.59351 15.3045 2.30448 14.9369 2.15224C14.684 2.04749 14.4116 2.01481 14 2.00462Z'
      fill={color}
    />
  </svg>
)

export const FileLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5.5 5.9C5.5 5.05992 5.5 4.63988 5.66349 4.31901C5.8073 4.03677 6.03677 3.8073 6.31901 3.66349C6.63988 3.5 7.05992 3.5 7.9 3.5H12.5059C12.8728 3.5 13.0562 3.5 13.2288 3.54145C13.3819 3.57819 13.5282 3.6388 13.6624 3.72104C13.8138 3.8138 13.9435 3.94352 14.2029 4.20294L17.7971 7.79706C18.0565 8.05648 18.1862 8.1862 18.279 8.33757C18.3612 8.47178 18.4218 8.6181 18.4586 8.77115C18.5 8.94378 18.5 9.12723 18.5 9.49411V18.1C18.5 18.9401 18.5 19.3601 18.3365 19.681C18.1927 19.9632 17.9632 20.1927 17.681 20.3365C17.3601 20.5 16.9401 20.5 16.1 20.5H7.9C7.05992 20.5 6.63988 20.5 6.31901 20.3365C6.03677 20.1927 5.8073 19.9632 5.66349 19.681C5.5 19.3601 5.5 18.9401 5.5 18.1V5.9Z'
      stroke={color}
    />
    <path
      d='M12.5 3.5V7.1C12.5 7.94008 12.5 8.36012 12.6635 8.68099C12.8073 8.96323 13.0368 9.1927 13.319 9.33651C13.6399 9.5 14.0599 9.5 14.9 9.5H18.5'
      stroke={color}
    />
  </svg>
)

export const LoadList = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M3 4H21' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M5 4H19V15.8C19 16.9201 19 17.4802 18.782 17.908C18.5903 18.2843 18.2843 18.5903 17.908 18.782C17.4802 19 16.9201 19 15.8 19H8.2C7.07989 19 6.51984 19 6.09202 18.782C5.71569 18.5903 5.40973 18.2843 5.21799 17.908C5 17.4802 5 16.9201 5 15.8V4Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M12 15V9' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M9 12L11.8939 9.10607C11.9525 9.04749 12.0475 9.04749 12.1061 9.10607L15 12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const LoadListAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M3 3H21' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M5 3H19V17.9006C19 17.9373 19 17.9556 18.9959 17.9729C18.9922 17.9882 18.9861 18.0028 18.9779 18.0162C18.9686 18.0314 18.9556 18.0444 18.9297 18.0703L16.0703 20.9297C16.0444 20.9556 16.0314 20.9686 16.0162 20.9779C16.0028 20.9861 15.9882 20.9922 15.9729 20.9959C15.9556 21 15.9373 21 15.9006 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V3Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M14 21V16.15C14 16.0672 14.0672 16 14.15 16H19'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M12 13V7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M9 10L11.8939 7.10607C11.9525 7.04749 12.0475 7.04749 12.1061 7.10607L15 10'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const LoadListAltFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M3 3H21' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19 3H5V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12.76C12.844 21 12.886 21 12.9181 20.9837C12.9463 20.9693 12.9693 20.9463 12.9837 20.9181C13 20.886 13 20.844 13 20.76V18.2C13 17.0799 13 16.5198 13.218 16.092C13.4097 15.7157 13.7157 15.4097 14.092 15.218C14.5198 15 15.0799 15 16.2 15H18.76C18.844 15 18.886 15 18.9181 14.9837C18.9463 14.9693 18.9693 14.9463 18.9837 14.9181C19 14.886 19 14.844 19 14.76V3ZM11 13V9.41421L9.70711 10.7071C9.31658 11.0976 8.68342 11.0976 8.29289 10.7071C7.90237 10.3166 7.90237 9.68342 8.29289 9.29289L11.1868 6.39896C11.2053 6.38051 11.2242 6.36282 11.2436 6.34589C11.4269 6.13403 11.6978 6 12 6C12.3022 6 12.5731 6.13403 12.7564 6.34589C12.7758 6.36282 12.7947 6.38051 12.8132 6.39896L15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071C15.3166 11.0976 14.6834 11.0976 14.2929 10.7071L13 9.41421V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13Z'
      fill={color}
    />
    <path
      d='M15.2561 20.7439L18.7439 17.2561C18.8384 17.1616 18.7715 17 18.6379 17H15.5C15.2239 17 15 17.2239 15 17.5V20.6379C15 20.7715 15.1616 20.8384 15.2561 20.7439Z'
      fill={color}
    />
  </svg>
)

export const LoadListAltLightOne = ({
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
      d='M2 4.5C2 4.22386 2.22386 4 2.5 4H21.5C21.7761 4 22 4.22386 22 4.5C22 4.77614 21.7761 5 21.5 5H20.1395C20.0625 5 20 5.06247 20 5.13953V16.9379C20 16.9777 19.9842 17.0158 19.9561 17.0439L17.0439 19.9561C17.0158 19.9842 16.9777 20 16.9379 20H6C4.89543 20 4 19.1046 4 18V5.13953C4 5.06247 3.93753 5 3.86047 5H2.5C2.22386 5 2 4.77614 2 4.5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M12 15.5V10' stroke={color} strokeLinecap='round' />
    <path
      d='M9.5 11.5L11.9063 9.57496C11.9611 9.53114 12.0389 9.53114 12.0937 9.57496L14.5 11.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M2.5 4.5H21.5' stroke={color} strokeLinecap='round' />
    <path
      d='M17.0439 19.9561L19.9561 17.0439C19.9842 17.0158 20 16.9777 20 16.9379V16.15C20 16.0672 19.9328 16 19.85 16H17C16.4477 16 16 16.4477 16 17V19.85C16 19.9328 16.0672 20 16.15 20H16.9379C16.9777 20 17.0158 19.9842 17.0439 19.9561Z'
      fill={color}
    />
  </svg>
)

export const LoadListAltLight = ({
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
    <path d='M2.5 4.5H21.5' stroke={color} strokeLinecap='round' />
    <path
      d='M5.5 4.5H18.5V15.8373C18.5 16.0818 18.5 16.2041 18.4724 16.3192C18.4479 16.4213 18.4075 16.5188 18.3526 16.6083C18.2908 16.7092 18.2043 16.7957 18.0314 16.9686L15.9686 19.0314C15.7957 19.2043 15.7092 19.2908 15.6083 19.3526C15.5188 19.4075 15.4213 19.4479 15.3192 19.4724C15.2041 19.5 15.0818 19.5 14.8373 19.5H7.9C7.05992 19.5 6.63988 19.5 6.31901 19.3365C6.03677 19.1927 5.8073 18.9632 5.66349 18.681C5.5 18.3601 5.5 17.9401 5.5 17.1V4.5Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M12 13.5V8' stroke={color} strokeLinecap='round' />
    <path
      d='M9.5 9.5L11.9063 7.57496C11.9611 7.53114 12.0389 7.53114 12.0937 7.57496L14.5 9.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M18.5 15.5H16.1C15.5399 15.5 15.2599 15.5 15.046 15.609C14.8578 15.7049 14.7049 15.8578 14.609 16.046C14.5 16.2599 14.5 16.5399 14.5 17.1V19.5'
      stroke={color}
    />
  </svg>
)

export const LoadListAltLiту = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 13.5V8' stroke={color} strokeLinecap='round' />
    <path
      d='M9.5 9.5L11.9063 7.57496C11.9611 7.53114 12.0389 7.53114 12.0937 7.57496L14.5 9.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5V4ZM21.5 5C21.7761 5 22 4.77614 22 4.5C22 4.22386 21.7761 4 21.5 4V5ZM5.5 4.5V4H5V4.5H5.5ZM18.5 4.5H19V4H18.5V4.5ZM15.6083 19.3526L15.8695 19.779L15.6083 19.3526ZM15.3192 19.4724L15.436 19.9586L15.3192 19.4724ZM5.66349 18.681L5.21799 18.908L5.66349 18.681ZM6.31901 19.3365L6.09202 19.782L6.31901 19.3365ZM18.4724 16.3192L18.9586 16.436L18.4724 16.3192ZM18.3526 16.6083L18.779 16.8695L18.3526 16.6083ZM15.046 15.609L14.819 15.1635L15.046 15.609ZM14.609 16.046L14.1635 15.819L14.609 16.046ZM2.5 5H21.5V4H2.5V5ZM5.5 5H18.5V4H5.5V5ZM18 4.5V15.8373H19V4.5H18ZM6 17.1V4.5H5V17.1H6ZM17.6778 16.6151L15.6151 18.6778L16.3222 19.3849L18.3849 17.3222L17.6778 16.6151ZM14.8373 19H7.9V20H14.8373V19ZM15.6151 18.6778C15.4253 18.8676 15.3858 18.9026 15.347 18.9263L15.8695 19.779C16.0326 19.679 16.1661 19.541 16.3222 19.3849L15.6151 18.6778ZM14.8373 20C15.058 20 15.2499 20.0032 15.436 19.9586L15.2025 18.9862C15.1583 18.9968 15.1056 19 14.8373 19V20ZM15.347 18.9263C15.3023 18.9537 15.2535 18.9739 15.2025 18.9862L15.436 19.9586C15.589 19.9218 15.7353 19.8612 15.8695 19.779L15.347 18.9263ZM5 17.1C5 17.5118 4.99961 17.8507 5.0221 18.1259C5.04506 18.407 5.09434 18.6653 5.21799 18.908L6.10899 18.454C6.06915 18.3758 6.03669 18.2637 6.01878 18.0445C6.00039 17.8194 6 17.5283 6 17.1H5ZM7.9 19C7.47171 19 7.18056 18.9996 6.95552 18.9812C6.73631 18.9633 6.62421 18.9309 6.54601 18.891L6.09202 19.782C6.33469 19.9057 6.59304 19.9549 6.87409 19.9779C7.1493 20.0004 7.48821 20 7.9 20V19ZM5.21799 18.908C5.40973 19.2843 5.71569 19.5903 6.09202 19.782L6.54601 18.891C6.35785 18.7951 6.20487 18.6422 6.10899 18.454L5.21799 18.908ZM18 15.8373C18 16.1056 17.9968 16.1583 17.9862 16.2025L18.9586 16.436C19.0032 16.2499 19 16.058 19 15.8373H18ZM18.3849 17.3222C18.541 17.1661 18.679 17.0326 18.779 16.8695L17.9263 16.347C17.9026 16.3858 17.8676 16.4253 17.6778 16.6151L18.3849 17.3222ZM17.9862 16.2025C17.9739 16.2535 17.9537 16.3023 17.9263 16.347L18.779 16.8695C18.8612 16.7353 18.9218 16.589 18.9586 16.436L17.9862 16.2025ZM18.5 15H16.1V16H18.5V15ZM14 17.1V19.5H15V17.1H14ZM16.1 15C15.8282 15 15.5943 14.9996 15.4025 15.0153C15.2048 15.0314 15.0082 15.0671 14.819 15.1635L15.273 16.0545C15.2977 16.0419 15.3481 16.0231 15.4839 16.012C15.6256 16.0004 15.8117 16 16.1 16V15ZM15 17.1C15 16.8117 15.0004 16.6256 15.012 16.4839C15.0231 16.3481 15.0419 16.2977 15.0545 16.273L14.1635 15.819C14.0671 16.0082 14.0314 16.2048 14.0153 16.4025C13.9996 16.5943 14 16.8282 14 17.1H15ZM14.819 15.1635C14.5368 15.3073 14.3073 15.5368 14.1635 15.819L15.0545 16.273C15.1024 16.1789 15.1789 16.1024 15.273 16.0545L14.819 15.1635Z'
      fill={color}
      fillOpacity='0.25'
    />
  </svg>
)

export const LoadListDuono = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M2 4.5C2 4.22386 2.22386 4 2.5 4H21.5C21.7761 4 22 4.22386 22 4.5C22 4.77614 21.7761 5 21.5 5H20.1395C20.0625 5 20 5.06247 20 5.13953V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V5.13953C4 5.06247 3.93753 5 3.86047 5H2.5C2.22386 5 2 4.77614 2 4.5Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M12 15.5V10' stroke={color} strokeLinecap='round' />
    <path
      d='M9.5 11.5L11.9063 9.57496C11.9611 9.53114 12.0389 9.53114 12.0937 9.57496L14.5 11.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M2.5 4.5H21.5' stroke={color} strokeLinecap='round' />
  </svg>
)

export const LoadListFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M3 4H21' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19 4H5V15.8C5 16.9201 5 17.4802 5.21799 17.908C5.40973 18.2843 5.71569 18.5903 6.09202 18.782C6.51984 19 7.0799 19 8.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V4ZM11 15V11.4142L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11.1868 8.39896C11.2053 8.38051 11.2242 8.36282 11.2436 8.34589C11.4269 8.13403 11.6978 8 12 8C12.3022 8 12.5731 8.13403 12.7564 8.34589C12.7758 8.36282 12.7947 8.38051 12.8132 8.39896L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071C15.3166 13.0976 14.6834 13.0976 14.2929 12.7071L13 11.4142V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15Z'
      fill={color}
    />
  </svg>
)

export const LoadListLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M2.5 4.5H21.5' stroke={color} strokeLinecap='round' />
    <path
      d='M4.5 4.5H19.5V17.1C19.5 17.9401 19.5 18.3601 19.3365 18.681C19.1927 18.9632 18.9632 19.1927 18.681 19.3365C18.3601 19.5 17.9401 19.5 17.1 19.5H6.9C6.05992 19.5 5.63988 19.5 5.31901 19.3365C5.03677 19.1927 4.8073 18.9632 4.66349 18.681C4.5 18.3601 4.5 17.9401 4.5 17.1V4.5Z'
      stroke={color}
      strokeLinecap='round'
    />
    <path d='M12 15.5V10' stroke={color} strokeLinecap='round' />
    <path
      d='M9.5 11.5L11.9063 9.57496C11.9611 9.53114 12.0389 9.53114 12.0937 9.57496L14.5 11.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const LoadListLine = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5V4ZM21.5 5C21.7761 5 22 4.77614 22 4.5C22 4.22386 21.7761 4 21.5 4V5ZM4.5 4.5V4H4V4.5H4.5ZM19.5 4.5H20V4H19.5V4.5ZM5.31901 19.3365L5.09202 19.782L5.31901 19.3365ZM4.66349 18.681L4.21799 18.908L4.66349 18.681ZM19.3365 18.681L19.782 18.908L19.3365 18.681ZM18.681 19.3365L18.908 19.782L18.681 19.3365ZM2.5 5H21.5V4H2.5V5ZM4.5 5H19.5V4H4.5V5ZM19 4.5V17.1H20V4.5H19ZM17.1 19H6.9V20H17.1V19ZM5 17.1V4.5H4V17.1H5ZM6.9 19C6.47171 19 6.18056 18.9996 5.95552 18.9812C5.73631 18.9633 5.62421 18.9309 5.54601 18.891L5.09202 19.782C5.33469 19.9057 5.59304 19.9549 5.87409 19.9779C6.1493 20.0004 6.48821 20 6.9 20V19ZM4 17.1C4 17.5118 3.99961 17.8507 4.0221 18.1259C4.04506 18.407 4.09434 18.6653 4.21799 18.908L5.10899 18.454C5.06915 18.3758 5.03669 18.2637 5.01878 18.0445C5.00039 17.8194 5 17.5283 5 17.1H4ZM5.54601 18.891C5.35785 18.7951 5.20487 18.6422 5.10899 18.454L4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782L5.54601 18.891ZM19 17.1C19 17.5283 18.9996 17.8194 18.9812 18.0445C18.9633 18.2637 18.9309 18.3758 18.891 18.454L19.782 18.908C19.9057 18.6653 19.9549 18.407 19.9779 18.1259C20.0004 17.8507 20 17.5118 20 17.1H19ZM17.1 20C17.5118 20 17.8507 20.0004 18.1259 19.9779C18.407 19.9549 18.6653 19.9057 18.908 19.782L18.454 18.891C18.3758 18.9309 18.2637 18.9633 18.0445 18.9812C17.8194 18.9996 17.5283 19 17.1 19V20ZM18.891 18.454C18.7951 18.6422 18.6422 18.7951 18.454 18.891L18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908L18.891 18.454Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M12 15.5V10' stroke={color} strokeLinecap='round' />
    <path
      d='M9.5 11.5L11.9063 9.57496C11.9611 9.53114 12.0389 9.53114 12.0937 9.57496L14.5 11.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)
