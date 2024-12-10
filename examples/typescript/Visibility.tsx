import React from 'react'

import { type IconComponentProps } from './types'

export const View: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='3' stroke={color} strokeWidth='2' />
    <path
      d='M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const ViewAltOne: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='3' stroke={color} strokeWidth='2' />
    <path d='M21 12C21 12 20 4 12 4C4 4 3 12 3 12' stroke={color} strokeWidth='2' />
  </svg>
)

export const ViewAlt: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='1' stroke={color} strokeWidth='2' />
    <path
      d='M18.2265 11.3805C18.3552 11.634 18.4195 11.7607 18.4195 12C18.4195 12.2393 18.3552 12.366 18.2265 12.6195C17.6001 13.8533 15.812 16.5 12 16.5C8.18799 16.5 6.39992 13.8533 5.77348 12.6195C5.64481 12.366 5.58048 12.2393 5.58048 12C5.58048 11.7607 5.64481 11.634 5.77348 11.3805C6.39992 10.1467 8.18799 7.5 12 7.5C15.812 7.5 17.6001 10.1467 18.2265 11.3805Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M17 4H17.2C18.9913 4 19.887 4 20.4435 4.5565C21 5.11299 21 6.00866 21 7.8V8M17 20H17.2C18.9913 20 19.887 20 20.4435 19.4435C21 18.887 21 17.9913 21 16.2V16M7 4H6.8C5.00866 4 4.11299 4 3.5565 4.5565C3 5.11299 3 6.00866 3 7.8V8M7 20H6.8C5.00866 20 4.11299 20 3.5565 19.4435C3 18.887 3 17.9913 3 16.2V16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const ViewAltDuotoneOne: React.FC<IconComponentProps> = ({
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
      d='M12 4C17.2537 4 19.4885 7.45014 20.4037 9.81894C20.7417 10.6937 20.9107 11.131 20.6127 11.5655C20.3148 12 19.788 12 18.7344 12H5.26556C4.21197 12 3.68518 12 3.38726 11.5655C3.08933 11.131 3.25832 10.6937 3.59628 9.81894C4.51152 7.45014 6.74632 4 12 4Z'
      fill={color}
      fillOpacity='0.25'
    />
    <circle cx='12' cy='11' r='4' fill={color} />
  </svg>
)

export const ViewAltDuotone: React.FC<IconComponentProps> = ({
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
      d='M18.4379 10.8112C18.6892 11.2462 18.8149 11.4637 18.8149 12C18.8149 12.5363 18.6892 12.7538 18.4379 13.1888C17.5834 14.6675 15.6561 17 12 17C8.34394 17 6.41663 14.6675 5.56211 13.1888C5.31076 12.7538 5.18508 12.5363 5.18508 12C5.18508 11.4637 5.31076 11.2462 5.56211 10.8112C6.41663 9.33247 8.34394 7 12 7C15.6561 7 17.5834 9.33247 18.4379 10.8112Z'
      fill={color}
      fillOpacity='0.25'
    />
    <circle cx='12' cy='12' r='3' fill={color} />
    <path
      d='M17.5 3.5H17.7C19.4913 3.5 20.387 3.5 20.9435 4.0565C21.5 4.61299 21.5 5.50866 21.5 7.3V7.5M17.5 20.5H17.7C19.4913 20.5 20.387 20.5 20.9435 19.9435C21.5 19.387 21.5 18.4913 21.5 16.7V16.5M6.5 3.5H6.3C4.50866 3.5 3.61299 3.5 3.0565 4.0565C2.5 4.61299 2.5 5.50866 2.5 7.3V7.5M6.5 20.5H6.3C4.50866 20.5 3.61299 20.5 3.0565 19.9435C2.5 19.387 2.5 18.4913 2.5 16.7V16.5'
      stroke={color}
      strokeOpacity='0.25'
      strokeLinecap='round'
    />
  </svg>
)

export const ViewAltDuotoneLineOne: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='3.4' stroke={color} strokeWidth='1.2' />
    <path
      d='M21 12C21 12 20 4 12 4C4 4 3 12 3 12'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
    />
  </svg>
)

export const ViewAltDuotoneLine: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='2.5' stroke={color} />
    <path
      d='M18.2265 11.3805C18.3552 11.634 18.4195 11.7607 18.4195 12C18.4195 12.2393 18.3552 12.366 18.2265 12.6195C17.6001 13.8533 15.812 16.5 12 16.5C8.18799 16.5 6.39992 13.8533 5.77348 12.6195C5.64481 12.366 5.58048 12.2393 5.58048 12C5.58048 11.7607 5.64481 11.634 5.77348 11.3805C6.39992 10.1467 8.18799 7.5 12 7.5C15.812 7.5 17.6001 10.1467 18.2265 11.3805Z'
      stroke={color}
    />
    <path
      d='M17.5 3.5H17.7C19.4913 3.5 20.387 3.5 20.9435 4.0565C21.5 4.61299 21.5 5.50866 21.5 7.3V7.5M17.5 20.5H17.7C19.4913 20.5 20.387 20.5 20.9435 19.9435C21.5 19.387 21.5 18.4913 21.5 16.7V16.5M6.5 3.5H6.3C4.50866 3.5 3.61299 3.5 3.0565 4.0565C2.5 4.61299 2.5 5.50866 2.5 7.3V7.5M6.5 20.5H6.3C4.50866 20.5 3.61299 20.5 3.0565 19.9435C2.5 19.387 2.5 18.4913 2.5 16.7V16.5'
      stroke={color}
      strokeOpacity='0.25'
      strokeLinecap='round'
    />
  </svg>
)

export const ViewAltFillOne: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='4' fill={color} />
    <path d='M21 12C21 12 20 4 12 4C4 4 3 12 3 12' stroke={color} strokeWidth='2' />
  </svg>
)

export const ViewAltFill: React.FC<IconComponentProps> = ({
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
      d='M17 4H17.2C18.9913 4 19.887 4 20.4435 4.5565C21 5.11299 21 6.00866 21 7.8V8M17 20H17.2C18.9913 20 19.887 20 20.4435 19.4435C21 18.887 21 17.9913 21 16.2V16M7 4H6.8C5.00866 4 4.11299 4 3.5565 4.5565C3 5.11299 3 6.00866 3 7.8V8M7 20H6.8C5.00866 20 4.11299 20 3.5565 19.4435C3 18.887 3 17.9913 3 16.2V16'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.8149 12C18.8149 11.4637 18.6892 11.2462 18.4379 10.8112C17.5834 9.33247 15.6561 7 12 7C8.34395 7 6.41664 9.33247 5.56212 10.8112C5.31077 11.2462 5.18509 11.4637 5.18509 12C5.18509 12.5363 5.31077 12.7538 5.56212 13.1888C6.41664 14.6675 8.34395 17 12 17C15.6561 17 17.5834 14.6675 18.4379 13.1888C18.6892 12.7538 18.8149 12.5363 18.8149 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00001 10.3431 9.00001 12C9.00001 13.6569 10.3432 15 12 15Z'
      fill={color}
    />
  </svg>
)

export const ViewAltLightOne: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='3.5' stroke={color} />
    <path d='M21 12C21 12 20 4 12 4C4 4 3 12 3 12' stroke={color} />
  </svg>
)

export const ViewAltLight: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='2.5' stroke={color} />
    <path
      d='M18.2265 11.3805C18.3552 11.634 18.4195 11.7607 18.4195 12C18.4195 12.2393 18.3552 12.366 18.2265 12.6195C17.6001 13.8533 15.812 16.5 12 16.5C8.18799 16.5 6.39992 13.8533 5.77348 12.6195C5.64481 12.366 5.58048 12.2393 5.58048 12C5.58048 11.7607 5.64481 11.634 5.77348 11.3805C6.39992 10.1467 8.18799 7.5 12 7.5C15.812 7.5 17.6001 10.1467 18.2265 11.3805Z'
      stroke={color}
    />
    <path
      d='M17.5 3.5H17.7C19.4913 3.5 20.387 3.5 20.9435 4.0565C21.5 4.61299 21.5 5.50866 21.5 7.3V7.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M17.5 20.5H17.7C19.4913 20.5 20.387 20.5 20.9435 19.9435C21.5 19.387 21.5 18.4913 21.5 16.7V16.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M6.5 3.5H6.3C4.50866 3.5 3.61299 3.5 3.0565 4.0565C2.5 4.61299 2.5 5.50866 2.5 7.3V7.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M6.5 20.5H6.3C4.50866 20.5 3.61299 20.5 3.0565 19.9435C2.5 19.387 2.5 18.4913 2.5 16.7V16.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const ViewDuotone: React.FC<IconComponentProps> = ({
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
      d='M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z'
      fill={color}
      fillOpacity='0.25'
    />
    <circle cx='12' cy='12' r='3' fill={color} />
  </svg>
)

export const ViewDuotoneLine: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='3.4' stroke={color} strokeWidth='1.2' />
    <path
      d='M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='1.2'
    />
  </svg>
)

export const ViewFill: React.FC<IconComponentProps> = ({
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
      d='M20.7703 12C20.7703 11.6412 20.5762 11.4056 20.188 10.9343C18.768 9.21014 15.6357 6 12 6C8.36428 6 5.23207 9.21014 3.81198 10.9343C3.42382 11.4056 3.22974 11.6412 3.22974 12C3.22974 12.3588 3.42382 12.5944 3.81198 13.0657C5.23207 14.7899 8.36428 18 12 18C15.6357 18 18.768 14.7899 20.188 13.0657C20.5762 12.5944 20.7703 12.3588 20.7703 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00002 10.3431 9.00002 12C9.00002 13.6569 10.3432 15 12 15Z'
      fill={color}
    />
  </svg>
)

export const ViewHide: React.FC<IconComponentProps> = ({
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
      d='M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L15.9202 12.7988ZM8.66676 9.78799C8.24547 10.4216 8 11.1821 8 12C8 14.2091 9.79086 16 12 16C12.8179 16 13.5784 15.7545 14.212 15.3332L12.7381 13.8594C12.5098 13.9501 12.2607 14 12 14C10.8954 14 10 13.1046 10 12C10 11.7393 10.0499 11.4902 10.1406 11.2619L8.66676 9.78799Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.5191 17.6405L15.0499 16.1712C14.0776 16.6805 13.0477 17 12 17C10.4742 17 8.98616 16.3224 7.65914 15.3677C6.34002 14.4186 5.26409 13.2558 4.58386 12.43C4.48409 12.3088 4.40958 12.2182 4.34785 12.1385C4.29899 12.0754 4.26786 12.0315 4.24756 12C4.26786 11.9685 4.29899 11.9246 4.34785 11.8615C4.40958 11.7818 4.48409 11.6912 4.58386 11.57C5.24928 10.7622 6.29335 9.63187 7.57331 8.69463L6.14458 7.2659C4.79643 8.29616 3.72247 9.47005 3.04009 10.2985C3.01651 10.3272 2.99192 10.3566 2.96662 10.3869L2.96661 10.3869C2.65318 10.7624 2.22974 11.2696 2.22974 12C2.22974 12.7304 2.65318 13.2376 2.9666 13.6131L2.96682 13.6133C2.99205 13.6435 3.01657 13.6729 3.04009 13.7015C3.77996 14.5998 4.98018 15.9041 6.49111 16.9912C7.99416 18.0725 9.89008 19 12 19C13.67 19 15.206 18.419 16.5191 17.6405ZM8.80682 5.6855C9.79062 5.26871 10.8643 5 12 5C14.1099 5 16.0059 5.92747 17.5089 7.00885C19.0198 8.0959 20.2201 9.40025 20.9599 10.2985C20.9835 10.3272 21.0081 10.3566 21.0334 10.3869L21.0334 10.3869C21.3468 10.7624 21.7703 11.2696 21.7703 12C21.7703 12.7304 21.3468 13.2376 21.0334 13.6131C21.0081 13.6434 20.9835 13.6728 20.9599 13.7015C20.4733 14.2923 19.7874 15.0589 18.945 15.8237L17.529 14.4077C18.3089 13.708 18.9539 12.9912 19.4162 12.43C19.5159 12.3088 19.5904 12.2182 19.6522 12.1385C19.701 12.0754 19.7322 12.0315 19.7525 12C19.7322 11.9685 19.701 11.9246 19.6522 11.8615C19.5904 11.7818 19.5159 11.6912 19.4162 11.57C18.7359 10.7442 17.66 9.58138 16.3409 8.63233C15.0139 7.6776 13.5258 7 12 7C11.449 7 10.9029 7.08837 10.3676 7.24624L8.80682 5.6855Z'
      fill={color}
    />
    <path d='M5 2L21 18' stroke={color} strokeWidth='2' />
  </svg>
)

export const ViewHideDuotone: React.FC<IconComponentProps> = ({
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
      d='M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L15.9202 12.7988ZM8.66676 9.78799C8.24547 10.4216 8 11.1821 8 12C8 14.2091 9.79086 16 12 16C12.8179 16 13.5784 15.7545 14.212 15.3332L8.66676 9.78799Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.7872 16.9085L6.85842 7.97974C5.54385 8.96489 4.48541 10.1167 3.81198 10.9343C3.42382 11.4056 3.22974 11.6412 3.22974 12C3.22974 12.3588 3.42382 12.5944 3.81198 13.0657C5.23207 14.7899 8.36428 18 12 18C13.3529 18 14.636 17.5555 15.7872 16.9085ZM9.57695 6.45563C10.3479 6.17115 11.1605 6 12 6C15.6357 6 18.768 9.21014 20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C19.7137 13.6416 19.0484 14.3833 18.2371 15.1157L9.57695 6.45563Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L15.9202 12.7988ZM8.66676 9.78799C8.24547 10.4216 8 11.1821 8 12C8 14.2091 9.79086 16 12 16C12.8179 16 13.5784 15.7545 14.212 15.3332L8.66676 9.78799Z'
      fill={color}
    />
    <path d='M8 5L20 17' stroke={color} strokeWidth='1.2' />
  </svg>
)

export const ViewHideDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L12.3421 9.22069C13.615 9.37575 14.6243 10.385 14.7793 11.6579L15.9202 12.7988ZM9.54012 10.6614C9.32325 11.059 9.2 11.5151 9.2 12C9.2 13.5464 10.4536 14.8 12 14.8C12.4849 14.8 12.941 14.6768 13.3386 14.4599L14.212 15.3332C13.5784 15.7545 12.8179 16 12 16C9.79086 16 8 14.2091 8 12C8 11.1821 8.24547 10.4216 8.66676 9.78799L9.54012 10.6614Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L12.3421 9.22069C13.615 9.37575 14.6243 10.385 14.7793 11.6579L15.9202 12.7988ZM9.54012 10.6614C9.32325 11.059 9.2 11.5151 9.2 12C9.2 13.5464 10.4536 14.8 12 14.8C12.4849 14.8 12.941 14.6768 13.3386 14.4599L14.212 15.3332C13.5784 15.7545 12.8179 16 12 16C9.79086 16 8 14.2091 8 12C8 11.1821 8.24547 10.4216 8.66676 9.78799L9.54012 10.6614Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.2269 17.3482L15.3456 16.4669C14.2995 17.032 13.1682 17.4 12 17.4C10.3574 17.4 8.78776 16.6725 7.42553 15.6924C6.06805 14.7157 4.96726 13.5246 4.2751 12.6843C4.07002 12.4353 3.95903 12.2981 3.89057 12.1833C3.83749 12.0943 3.82973 12.0508 3.82973 12C3.82973 11.9493 3.83749 11.9057 3.89057 11.8167C3.95903 11.702 4.07002 11.5648 4.2751 11.3158C4.94359 10.5041 5.99326 9.36534 7.28721 8.40856L6.43 7.55135C5.09517 8.56386 4.02754 9.72884 3.34884 10.5529L3.28531 10.6297C2.95969 11.0225 2.62973 11.4206 2.62973 12C2.62973 12.5794 2.95969 12.9775 3.28531 13.3704L3.34884 13.4472C4.07678 14.331 5.25214 15.607 6.72471 16.6665C8.19255 17.7225 10.0069 18.6 12 18.6C13.5418 18.6 14.9767 18.0749 16.2269 17.3482ZM9.11302 5.99173C10.0141 5.62814 10.9838 5.40002 12 5.40002C13.9931 5.40002 15.8075 6.27752 17.2753 7.33357C18.7479 8.39302 19.9232 9.66906 20.6512 10.5529L20.7147 10.6297C21.0403 11.0225 21.3703 11.4206 21.3703 12C21.3703 12.5794 21.0403 12.9775 20.7147 13.3704L20.6512 13.4472C20.1695 14.032 19.4919 14.7886 18.6618 15.5406L17.8122 14.6909C18.6047 13.9781 19.2578 13.2513 19.7249 12.6843C19.93 12.4353 20.041 12.2981 20.1094 12.1833C20.1625 12.0943 20.1703 12.0508 20.1703 12C20.1703 11.9493 20.1625 11.9057 20.1094 11.8167C20.041 11.702 19.93 11.5648 19.7249 11.3158C19.0328 10.4754 17.932 9.28431 16.5745 8.30766C15.2123 7.3276 13.6426 6.60002 12 6.60002C11.3344 6.60002 10.6808 6.71949 10.0481 6.9268L9.11302 5.99173Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M5 2L21 18' stroke={color} strokeWidth='1.2' />
  </svg>
)

export const ViewHideFill: React.FC<IconComponentProps> = ({
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
      d='M18.2371 15.1157C19.0484 14.3833 19.7137 13.6416 20.188 13.0657C20.5762 12.5944 20.7703 12.3588 20.7703 12C20.7703 11.6412 20.5762 11.4056 20.188 10.9343C18.768 9.21014 15.6357 6 12 6C11.1605 6 10.3479 6.17115 9.57695 6.45563L12.1238 9.00251C13.6822 9.06577 14.9342 10.3178 14.9975 11.8762L18.2371 15.1157ZM9.39308 10.5144C9.14295 10.9524 9.00001 11.4595 9.00001 12C9.00001 13.6569 10.3432 15 12 15C12.5405 15 13.0476 14.8571 13.4856 14.6069L15.7872 16.9085C14.636 17.5555 13.3529 18 12 18C8.36428 18 5.23207 14.7899 3.81198 13.0657C3.42382 12.5944 3.22974 12.3588 3.22974 12C3.22974 11.6412 3.42382 11.4056 3.81198 10.9343C4.48541 10.1167 5.54385 8.96489 6.85842 7.97974L9.39308 10.5144Z'
      fill={color}
    />
    <path d='M5 2L21 18' stroke={color} strokeWidth='2' />
  </svg>
)

export const ViewHideLight: React.FC<IconComponentProps> = ({
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
      d='M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L12.1239 9.00251C13.6822 9.06583 14.9342 10.3178 14.9975 11.8761L15.9202 12.7988ZM9.39311 10.5143C9.14295 10.9523 9 11.4595 9 12C9 13.6569 10.3431 15 12 15C12.5405 15 13.0477 14.857 13.4857 14.6069L14.212 15.3332C13.5784 15.7545 12.8179 16 12 16C9.79086 16 8 14.2091 8 12C8 11.1821 8.24547 10.4216 8.66676 9.78799L9.39311 10.5143Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.1537 17.2751L15.4193 16.5406C14.3553 17.1196 13.1987 17.5 12 17.5C10.3282 17.5 8.73816 16.7599 7.36714 15.7735C6.00006 14.79 4.89306 13.5918 4.19792 12.7478C3.77356 12.2326 3.72974 12.1435 3.72974 12C3.72974 11.8565 3.77356 11.7674 4.19792 11.2522C4.86721 10.4396 5.9183 9.29863 7.21572 8.33704L6.50139 7.62271C5.16991 8.63072 4.10383 9.79349 3.42604 10.6164L3.36723 10.6876C3.03671 11.087 2.72974 11.4579 2.72974 12C2.72974 12.5421 3.0367 12.913 3.36723 13.3124L3.42604 13.3836C4.15099 14.2638 5.32014 15.5327 6.78312 16.5853C8.24216 17.635 10.0361 18.5 12 18.5C13.5101 18.5 14.9196 17.9886 16.1537 17.2751ZM9.18993 6.06861C10.0698 5.71828 11.0135 5.5 12 5.5C13.9639 5.5 15.7579 6.365 17.2169 7.41472C18.6799 8.46727 19.849 9.73623 20.574 10.6164L20.6328 10.6876C20.9633 11.087 21.2703 11.4579 21.2703 12C21.2703 12.5421 20.9633 12.913 20.6328 13.3124L20.574 13.3836C20.0935 13.9669 19.418 14.721 18.5911 15.4697L17.883 14.7617C18.6787 14.0456 19.3338 13.3164 19.8021 12.7478C20.2265 12.2326 20.2703 12.1435 20.2703 12C20.2703 11.8565 20.2265 11.7674 19.8021 11.2522C19.107 10.4082 18 9.21001 16.6329 8.22646C15.2619 7.24007 13.6718 6.5 12 6.5C11.3056 6.5 10.6253 6.62768 9.96897 6.84765L9.18993 6.06861Z'
      fill={color}
    />
    <path d='M5 2L21 18' stroke={color} />
  </svg>
)

export const ViewHorizontOne: React.FC<IconComponentProps> = ({
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
      d='M12.4208 7.60217C13.1521 9.00246 13.5226 10.563 13.4989 12.1426C13.4752 13.7222 13.058 15.2709 12.285 16.6486'
      stroke={color}
    />
    <path
      d='M14.5 5.5C11.7189 9.20812 4.64088 11.6272 3.62274 11.9605C3.57878 11.9748 3.57584 12.0335 3.61809 12.0523C4.61914 12.4983 11.7146 15.7146 14.5 18.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M13.233 14.4891C12.8905 14.5212 12.545 14.4822 12.2182 14.3746C11.8915 14.267 11.5904 14.0932 11.3339 13.8639C11.0774 13.6346 10.871 13.3549 10.7276 13.0422C10.5842 12.7295 10.5068 12.3905 10.5004 12.0466C10.494 11.7026 10.5587 11.361 10.6903 11.0432C10.822 10.7254 11.0179 10.4381 11.2656 10.1995C11.5134 9.96079 11.8078 9.77583 12.1303 9.65615C12.4528 9.53647 12.7966 9.48465 13.1401 9.50393'
      stroke={color}
    />
    <path d='M16.5 12H20.5' stroke={color} strokeLinecap='round' />
    <path d='M16.5 9.5L20.5 8' stroke={color} strokeLinecap='round' />
    <path d='M16.5 14.5L20.5 16' stroke={color} strokeLinecap='round' />
  </svg>
)

export const ViewHorizont: React.FC<IconComponentProps> = ({
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
      d='M11.9776 7.83364C12.6704 9.16023 13.0214 10.6386 12.999 12.1351C12.9765 13.6315 12.5812 15.0987 11.8489 16.4039'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M14 5C11.1857 7.81427 3.97138 11.5086 3.0889 11.9552C3.05214 11.9738 3.05214 12.0262 3.0889 12.0448C3.97137 12.4914 11.1857 16.1857 14 19'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M16 12H21' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M16 9L21 7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M16 15L21 17' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M11.794 7.4996C12.5424 8.79567 12.9557 10.2579 12.9966 11.7539C13.0376 13.25 12.7047 14.7326 12.0283 16.0677'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M12.5176 13.9315C12.2213 14.0109 11.9107 14.0211 11.6098 13.9612C11.3089 13.9014 11.0259 13.7731 10.7825 13.5863C10.5391 13.3996 10.3419 13.1593 10.2063 12.8842C10.0706 12.6091 10 12.3064 10 11.9996C10 11.6929 10.0706 11.3902 10.2063 11.1151C10.3419 10.8399 10.5391 10.5997 10.7825 10.4129C11.0259 10.2262 11.3089 10.0979 11.6098 10.0381C11.9107 9.97821 12.2213 9.98838 12.5176 10.0678'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const ViewHorizontDuotone: React.FC<IconComponentProps> = ({
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
      d='M12.864 7.37071C13.6338 8.8447 14.0238 10.4874 13.9989 12.1501C13.9739 13.8128 13.5347 15.4431 12.721 16.8933L4 12L12.864 7.37071Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M14.5 5.5C11.7189 9.20812 4.64088 11.6272 3.62274 11.9605C3.57878 11.9748 3.57584 12.0335 3.61809 12.0523C4.61914 12.4983 11.7146 15.7146 14.5 18.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.5498 9.03333C13.862 10.0384 14.0148 11.0902 13.9989 12.1501C13.9845 13.109 13.8323 14.0572 13.5499 14.9662C12.1066 14.7491 11 13.5037 11 11.9998C11 10.4959 12.1065 9.25052 13.5498 9.03333Z'
      fill={color}
    />
    <path d='M16.5 12H20.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path d='M16.5 9.5L20.5 8' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path d='M16.5 14.5L20.5 16' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
  </svg>
)

export const ViewHorizontDuotoneLine: React.FC<IconComponentProps> = ({
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
      d='M12.4208 7.60217C13.1521 9.00246 13.5226 10.563 13.4989 12.1426C13.4752 13.7222 13.058 15.2709 12.285 16.6486'
      stroke={color}
    />
    <path
      d='M14.5 5.5C11.7189 9.20812 4.64088 11.6272 3.62274 11.9605C3.57878 11.9748 3.57584 12.0335 3.61809 12.0523C4.61914 12.4983 11.7146 15.7146 14.5 18.5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M13.233 14.4891C12.8905 14.5212 12.545 14.4822 12.2182 14.3746C11.8915 14.267 11.5904 14.0932 11.3339 13.8639C11.0774 13.6346 10.871 13.3549 10.7276 13.0422C10.5842 12.7295 10.5068 12.3905 10.5004 12.0466C10.494 11.7026 10.5587 11.361 10.6903 11.0432C10.822 10.7254 11.0179 10.4381 11.2656 10.1995C11.5134 9.96079 11.8078 9.77583 12.1303 9.65615C12.4528 9.53647 12.7966 9.48465 13.1401 9.50393'
      stroke={color}
    />
    <path d='M16.5 12H20.5' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path d='M16.5 9.5L20.5 8' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
    <path d='M16.5 14.5L20.5 16' stroke={color} strokeOpacity='0.25' strokeLinecap='round' />
  </svg>
)

export const ViewHorizontFill: React.FC<IconComponentProps> = ({
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
      d='M11.7248 7.3818C12.4927 8.66636 12.9282 10.1221 12.9919 11.6174C13.0555 13.1127 12.7452 14.6002 12.0892 15.9453'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M14 5C11.1857 7.81427 3.97138 11.5086 3.0889 11.9552C3.05214 11.9738 3.05214 12.0262 3.0889 12.0448C3.97137 12.4914 11.1857 16.1857 14 19'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M16 12H21' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M16 9L21 7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M16 15L21 17' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.6873 9.51874C13.4971 8.77627 13.2215 8.05531 12.864 7.37073L4 12L12.721 16.8933C13.1484 16.1315 13.4725 15.3201 13.6875 14.4804C13.2067 14.8081 12.6257 14.9996 12 14.9996C10.3431 14.9996 9 13.6565 9 11.9996C9 10.3428 10.3431 8.99963 12 8.99963C12.6256 8.99963 13.2065 9.19115 13.6873 9.51874Z'
      fill={color}
    />
  </svg>
)

export const ViewLight: React.FC<IconComponentProps> = ({
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
    <circle cx='12' cy='12' r='3.5' stroke={color} />
    <path
      d='M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z'
      stroke={color}
    />
  </svg>
)
