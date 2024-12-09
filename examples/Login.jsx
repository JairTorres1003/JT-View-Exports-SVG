import React from 'react'

export const SignIn = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C6.81465 2 2.5511 5.94668 2.04938 11H11.5858L8.2929 7.70711L9.70711 6.29289L14.7071 11.2929L15.4142 12L14.7071 12.7071L9.70711 17.7071L8.2929 16.2929L11.5858 13H2.04938C2.5511 18.0533 6.81465 22 12 22Z'
      fill={color}
    />
  </svg>
)

export const SignInCircle = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M4.92893 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.0222 21.4135 8.08879 20.3147 6.4443C19.2159 4.79981 17.6541 3.51808 15.8268 2.76121C13.9996 2.00433 11.9889 1.8063 10.0491 2.19215C8.10929 2.578 6.32746 3.53041 4.92893 4.92893'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M15 12L15.7809 11.3753L16.2806 12L15.7809 12.6247L15 12ZM3 13C2.44771 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11V13ZM11.7809 6.3753L15.7809 11.3753L14.2191 12.6247L10.2191 7.6247L11.7809 6.3753ZM15.7809 12.6247L11.7809 17.6247L10.2191 16.3753L14.2191 11.3753L15.7809 12.6247ZM15 13H3V11H15V13Z'
      fill={color}
    />
  </svg>
)

export const SignInCircleDuotone = ({
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
    <ellipse
      cx='7'
      cy='7'
      rx='7'
      ry='7'
      transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 20 19)'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M11.5 9.5L14 12M14 12L11.5 14.5M14 12H4' stroke={color} strokeLinecap='round' />
  </svg>
)

export const SignInCircleDuotoneLine = ({
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
    <ellipse
      cx='8'
      cy='8'
      rx='8'
      ry='8'
      transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 22 20)'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M5.7 12C5.7 7.41604 9.41604 3.7 14 3.7C18.584 3.7 22.3 7.41604 22.3 12C22.3 16.584 18.584 20.3 14 20.3C9.41604 20.3 5.7 16.584 5.7 12Z'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='0.6'
    />
    <path
      d='M4.92893 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.0222 21.4135 8.08879 20.3147 6.4443C19.2159 4.79981 17.6541 3.51808 15.8268 2.76121C13.9996 2.00433 11.9889 1.8063 10.0491 2.19215C8.10929 2.578 6.32746 3.53041 4.92893 4.92893'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M15 12L15.4685 11.6252L15.7684 12L15.4685 12.3748L15 12ZM3 12.6C2.66863 12.6 2.4 12.3314 2.4 12C2.4 11.6686 2.66863 11.4 3 11.4V12.6ZM11.4685 6.62518L15.4685 11.6252L14.5315 12.3748L10.5315 7.37482L11.4685 6.62518ZM15.4685 12.3748L11.4685 17.3748L10.5315 16.6252L14.5315 11.6252L15.4685 12.3748ZM15 12.6H3V11.4H15V12.6Z'
      fill={color}
    />
  </svg>
)

export const SignInCircleLight = ({
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
      d='M4.92893 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.0222 21.4135 8.08879 20.3147 6.4443C19.2159 4.79981 17.6541 3.51808 15.8268 2.76121C13.9996 2.00433 11.9889 1.8063 10.0491 2.19215C8.10929 2.578 6.32746 3.53041 4.92893 4.92893'
      stroke={color}
    />
    <path
      d='M15 12L15.3904 11.6877L15.6403 12L15.3904 12.3123L15 12ZM3 12.5C2.72386 12.5 2.5 12.2761 2.5 12C2.5 11.7239 2.72386 11.5 3 11.5V12.5ZM11.3904 6.68765L15.3904 11.6877L14.6096 12.3123L10.6096 7.31235L11.3904 6.68765ZM15.3904 12.3123L11.3904 17.3123L10.6096 16.6877L14.6096 11.6877L15.3904 12.3123ZM15 12.5H3V11.5H15V12.5Z'
      fill={color}
    />
  </svg>
)

export const SignInSqure = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M7 7.13193V6.61204C7 4.46614 7 3.3932 7.6896 2.79511C8.37919 2.19703 9.44136 2.34877 11.5657 2.65224L15.8485 3.26408C18.3047 3.61495 19.5327 3.79039 20.2664 4.63628C21 5.48217 21 6.72271 21 9.20377V14.7962C21 17.2773 21 18.5178 20.2664 19.3637C19.5327 20.2096 18.3047 20.385 15.8485 20.7359L11.5657 21.3478C9.44136 21.6512 8.37919 21.803 7.6896 21.2049C7 20.6068 7 19.5339 7 17.388V17.066'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M16 12L16.7809 11.3753L17.2806 12L16.7809 12.6247L16 12ZM4 13C3.44771 13 3 12.5523 3 12C3 11.4477 3.44771 11 4 11V13ZM12.7809 6.3753L16.7809 11.3753L15.2191 12.6247L11.2191 7.6247L12.7809 6.3753ZM16.7809 12.6247L12.7809 17.6247L11.2191 16.3753L15.2191 11.3753L16.7809 12.6247ZM16 13H4V11H16V13Z'
      fill={color}
    />
  </svg>
)

export const SignInSqureDuotone = ({
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
      d='M16.6325 6.54415L10.3162 4.43874C9.6687 4.2229 9 4.70487 9 5.38743V18.6126C9 19.2951 9.66869 19.7771 10.3162 19.5613L16.6325 17.4558C17.4491 17.1836 18 16.4193 18 15.5585V8.44152C18 7.58066 17.4491 6.81638 16.6325 6.54415Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M11.5 9.5L14 12M14 12L11.5 14.5M14 12H4' stroke={color} strokeLinecap='round' />
  </svg>
)

export const SignInSqureDuotoneLine = ({
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
    <path d='M11.5 9.5L14 12M14 12L11.5 14.5M14 12H4' stroke={color} strokeLinecap='round' />
    <path
      d='M8.5 9V4.7198C8.5 4.08876 9.07732 3.61546 9.69612 3.73922L17.6961 5.33922C18.1635 5.43271 18.5 5.84312 18.5 6.3198V17.6802C18.5 18.1569 18.1635 18.5673 17.6961 18.6608L9.69612 20.2608C9.07733 20.3845 8.5 19.9112 8.5 19.2802V15'
      stroke={color}
      strokeOpacity='0.25'
      strokeLinejoin='round'
    />
  </svg>
)

export const SignInSqureFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M15.621 2.66859L11.9314 2.08881C8.71084 1.58272 7.10055 1.32967 6.05027 2.22779C5 3.12591 5 4.75596 5 8.01607V11H10.9194L8.21913 7.62469L9.78087 6.37531L13.7809 11.3753L14.2806 12L13.7809 12.6247L9.78087 17.6247L8.21913 16.3753L10.9194 13H5V15.9831C5 19.2432 5 20.8733 6.05027 21.7714C7.10055 22.6695 8.71084 22.4165 11.9314 21.9104L15.621 21.3306C17.2337 21.0771 18.04 20.9504 18.52 20.3891C19 19.8279 19 19.0116 19 17.3791V6.6201C19 4.98758 19 4.17132 18.52 3.61003C18.04 3.04874 17.2337 2.92202 15.621 2.66859Z'
      fill={color}
    />
  </svg>
)

export const SignInSqureLight = ({
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
      d='M7 7.13193V6.61204C7 4.46614 7 3.3932 7.6896 2.79511C8.37919 2.19703 9.44136 2.34877 11.5657 2.65224L15.8485 3.26408C18.3047 3.61495 19.5327 3.79039 20.2664 4.63628C21 5.48217 21 6.72271 21 9.20377V14.7962C21 17.2773 21 18.5178 20.2664 19.3637C19.5327 20.2096 18.3047 20.385 15.8485 20.7359L11.5657 21.3478C9.44136 21.6512 8.37919 21.803 7.6896 21.2049C7 20.6068 7 19.5339 7 17.388V17.066'
      stroke={color}
    />
    <path
      d='M16 12L16.3904 11.6877L16.6403 12L16.3904 12.3123L16 12ZM4 12.5C3.72386 12.5 3.5 12.2761 3.5 12C3.5 11.7239 3.72386 11.5 4 11.5V12.5ZM12.3904 6.68765L16.3904 11.6877L15.6096 12.3123L11.6096 7.31235L12.3904 6.68765ZM16.3904 12.3123L12.3904 17.3123L11.6096 16.6877L15.6096 11.6877L16.3904 12.3123ZM16 12.5H4V11.5H16V12.5Z'
      fill={color}
    />
  </svg>
)

export const SignOut = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M21.9506 11H12.4142L15.7071 7.70711L14.2929 6.29289L9.29289 11.2929L8.58579 12L9.29289 12.7071L14.2929 17.7071L15.7071 16.2929L12.4142 13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.1853 2 21.4489 5.94668 21.9506 11Z'
      fill={color}
    />
  </svg>
)

export const SignOutCircle = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M8 18.9282C9.21615 19.6303 10.5957 20 12 20C13.4043 20 14.7838 19.6303 16 18.9282C17.2162 18.2261 18.2261 17.2162 18.9282 16C19.6303 14.7838 20 13.4043 20 12C20 10.5957 19.6303 9.21615 18.9282 8C18.2261 6.78385 17.2162 5.77394 16 5.0718C14.7838 4.36965 13.4043 4 12 4C10.5957 4 9.21615 4.36965 8 5.0718'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M2 12L1.21913 11.3753L0.719375 12L1.21913 12.6247L2 12ZM11 13C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11V13ZM5.21913 6.3753L1.21913 11.3753L2.78087 12.6247L6.78087 7.6247L5.21913 6.3753ZM1.21913 12.6247L5.21913 17.6247L6.78087 16.3753L2.78087 11.3753L1.21913 12.6247ZM2 13H11V11H2V13Z'
      fill={color}
    />
  </svg>
)

export const SignOutCircleDuotone = ({
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
    <ellipse
      cx='7'
      cy='7'
      rx='7'
      ry='7'
      transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 22 19)'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M6.5 9.5L4 12M4 12L6.5 14.5M4 12H14' stroke={color} strokeLinecap='round' />
  </svg>
)

export const SignOutCircleDuotoneLine = ({
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
    <ellipse
      cx='6'
      cy='6'
      rx='6'
      ry='6'
      transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 20 18)'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M7.7 12C7.7 8.52061 10.5206 5.7 14 5.7C17.4794 5.7 20.3 8.52061 20.3 12C20.3 15.4794 17.4794 18.3 14 18.3C10.5206 18.3 7.7 15.4794 7.7 12Z'
      stroke={color}
      strokeOpacity='0.25'
      strokeWidth='0.6'
    />
    <path
      d='M8 18.9282C9.21615 19.6303 10.5957 20 12 20C13.4043 20 14.7838 19.6303 16 18.9282C17.2162 18.2261 18.2261 17.2162 18.9282 16C19.6303 14.7838 20 13.4043 20 12C20 10.5957 19.6303 9.21615 18.9282 8C18.2261 6.78385 17.2162 5.77394 16 5.0718C14.7838 4.36965 13.4043 4 12 4C10.5957 4 9.21615 4.36965 8 5.0718'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M2 12L1.53148 11.6252L1.23163 12L1.53148 12.3748L2 12ZM11 12.6C11.3314 12.6 11.6 12.3314 11.6 12C11.6 11.6686 11.3314 11.4 11 11.4V12.6ZM5.53148 6.62518L1.53148 11.6252L2.46852 12.3748L6.46852 7.37482L5.53148 6.62518ZM1.53148 12.3748L5.53148 17.3748L6.46852 16.6252L2.46852 11.6252L1.53148 12.3748ZM2 12.6H11V11.4H2V12.6Z'
      fill={color}
    />
  </svg>
)

export const SignOutCircleLight = ({
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
      d='M8 18.9282C9.21615 19.6303 10.5957 20 12 20C13.4043 20 14.7838 19.6303 16 18.9282C17.2162 18.2261 18.2261 17.2162 18.9282 16C19.6303 14.7838 20 13.4043 20 12C20 10.5957 19.6303 9.21615 18.9282 8C18.2261 6.78385 17.2162 5.77394 16 5.0718C14.7838 4.36965 13.4043 4 12 4C10.5957 4 9.21615 4.36965 8 5.0718'
      stroke={color}
    />
    <path
      d='M2 12L1.60957 11.6877L1.35969 12L1.60957 12.3123L2 12ZM11 12.5C11.2761 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.2761 11.5 11 11.5V12.5ZM5.60957 6.68765L1.60957 11.6877L2.39043 12.3123L6.39043 7.31235L5.60957 6.68765ZM1.60957 12.3123L5.60957 17.3123L6.39043 16.6877L2.39043 11.6877L1.60957 12.3123ZM2 12.5H11V11.5H2V12.5Z'
      fill={color}
    />
  </svg>
)

export const SignOutSqure = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M2 12L1.21913 11.3753L0.719375 12L1.21913 12.6247L2 12ZM11 13C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11V13ZM5.21913 6.3753L1.21913 11.3753L2.78087 12.6247L6.78087 7.6247L5.21913 6.3753ZM1.21913 12.6247L5.21913 17.6247L6.78087 16.3753L2.78087 11.3753L1.21913 12.6247ZM2 13H11V11H2V13Z'
      fill={color}
    />
    <path
      d='M10 8.13193V7.38851C10 5.77017 10 4.961 10.474 4.4015C10.9479 3.84201 11.7461 3.70899 13.3424 3.44293L15.0136 3.1644C18.2567 2.62388 19.8782 2.35363 20.9391 3.25232C22 4.15102 22 5.79493 22 9.08276V14.9172C22 18.2051 22 19.849 20.9391 20.7477C19.8782 21.6464 18.2567 21.3761 15.0136 20.8356L13.3424 20.5571C11.7461 20.291 10.9479 20.158 10.474 19.5985C10 19.039 10 18.2298 10 16.6115V16.066'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const SignOutSqureDuotone = ({
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
      d='M10.3675 6.54415L16.6838 4.43874C17.3313 4.2229 18 4.70487 18 5.38743V18.6126C18 19.2951 17.3313 19.7771 16.6838 19.5613L10.3675 17.4558C9.55086 17.1836 9 16.4193 9 15.5585V8.44152C9 7.58066 9.55086 6.81638 10.3675 6.54415Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path d='M6.5 9.5L4 12M4 12L6.5 14.5M4 12H14' stroke={color} strokeLinecap='round' />
  </svg>
)

export const SignOutSqureDuotoneLine = ({
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
      d='M15.0136 3.1644L16.9379 2.84368C18.3733 2.60445 19.091 2.48483 19.6684 2.61679C20.6188 2.834 21.4044 3.4995 21.7749 4.40127C22 4.94911 22 5.67672 22 7.13193V17.066C22 18.3391 22 18.9756 21.8269 19.4628C21.466 20.479 20.5874 21.2232 19.5258 21.4122C19.0168 21.5028 18.3889 21.3981 17.1331 21.1889L17.1331 21.1889L15.0136 20.8356L15.0136 20.8356C12.6191 20.4365 11.4219 20.237 10.7109 19.3977C10 18.5585 10 17.3448 10 14.9172V9.08276C10 6.65525 10 5.44149 10.7109 4.60226C11.4219 3.76302 12.6191 3.56348 15.0136 3.1644Z'
      fill={color}
      fillOpacity='0.25'
    />
    <path
      d='M3 12L2.53148 11.6252L2.23163 12L2.53148 12.3748L3 12ZM12 12.6C12.3314 12.6 12.6 12.3314 12.6 12C12.6 11.6686 12.3314 11.4 12 11.4V12.6ZM6.53148 6.62518L2.53148 11.6252L3.46852 12.3748L7.46852 7.37482L6.53148 6.62518ZM2.53148 12.3748L6.53148 17.3748L7.46852 16.6252L3.46852 11.6252L2.53148 12.3748ZM3 12.6H12V11.4H3V12.6Z'
      fill={color}
    />
  </svg>
)

export const SignOutSqureFill = ({
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
      d='M8.37905 2.66859L12.0686 2.08881C15.2892 1.58272 16.8995 1.32967 17.9497 2.22779C19 3.12591 19 4.75596 19 8.01607V10.9996H13.0806L15.7809 7.62428L14.2191 6.37489L10.2191 11.3749L9.71938 11.9996L10.2191 12.6243L14.2191 17.6243L15.7809 16.3749L13.0806 12.9996H19V15.9831C19 19.2432 19 20.8733 17.9497 21.7714C16.8995 22.6695 15.2892 22.4165 12.0686 21.9104L8.37905 21.3306C6.76632 21.0771 5.95995 20.9504 5.47998 20.3891C5 19.8279 5 19.0116 5 17.3791V6.6201C5 4.98758 5 4.17132 5.47998 3.61003C5.95995 3.04874 6.76632 2.92202 8.37905 2.66859Z'
      fill={color}
    />
  </svg>
)

export const SignOutSqureLight = ({
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
      d='M2 12L1.60957 11.6877L1.35969 12L1.60957 12.3123L2 12ZM11 12.5C11.2761 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.2761 11.5 11 11.5V12.5ZM5.60957 6.68765L1.60957 11.6877L2.39043 12.3123L6.39043 7.31235L5.60957 6.68765ZM1.60957 12.3123L5.60957 17.3123L6.39043 16.6877L2.39043 11.6877L1.60957 12.3123ZM2 12.5H11V11.5H2V12.5Z'
      fill={color}
    />
    <path
      d='M10 8.13193V7.38851C10 5.77017 10 4.961 10.474 4.4015C10.9479 3.84201 11.7461 3.70899 13.3424 3.44293L15.0136 3.1644C18.2567 2.62388 19.8782 2.35363 20.9391 3.25232C22 4.15102 22 5.79493 22 9.08276V14.9172C22 18.2051 22 19.849 20.9391 20.7477C19.8782 21.6464 18.2567 21.3761 15.0136 20.8356L13.3424 20.5571C11.7461 20.291 10.9479 20.158 10.474 19.5985C10 19.039 10 18.2298 10 16.6115V16.066'
      stroke={color}
    />
  </svg>
)
