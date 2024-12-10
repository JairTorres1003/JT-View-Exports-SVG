import React from 'react'

export const Package = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 21V13M12 21L4.94 16.5875C4.48048 16.3003 4.25072 16.1567 4.12536 15.9305C4 15.7043 4 15.4334 4 14.8915V8M12 21L16 18.5L19.06 16.5875C19.5195 16.3003 19.7493 16.1567 19.8746 15.9305C20 15.7043 20 15.4334 20 14.8915V8M12 13L4 8M12 13L20 8M4 8L10.94 3.6625C11.4555 3.34033 11.7132 3.17925 12 3.17925C12.2868 3.17925 12.5445 3.34033 13.06 3.6625L20 8'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M15 14.5C15 15.0523 15.4477 15.5 16 15.5C16.5523 15.5 17 15.0523 17 14.5H15ZM15.8746 10.5695L16.7493 10.0847L15.8746 10.5695ZM7.47 6.348L14.53 10.7605L15.59 9.0645L8.53 4.652L7.47 6.348ZM17 14.5V11.6085H15V14.5H17ZM14.53 10.7605C14.7757 10.9141 14.9004 10.9932 14.9843 11.0575C15.0512 11.1089 15.027 11.1029 15 11.0542L16.7493 10.0847C16.5969 9.80984 16.3951 9.61902 16.201 9.47022C16.0238 9.33438 15.8038 9.19813 15.59 9.0645L14.53 10.7605ZM17 11.6085C17 11.3564 17.0011 11.0976 16.9798 10.8753C16.9565 10.6319 16.9016 10.3596 16.7493 10.0847L15 11.0542C14.973 11.0056 14.9808 10.9818 14.9889 11.0659C14.9989 11.1711 15 11.3187 15 11.6085H17Z'
      fill={color}
    />
  </svg>
)

export const PackageBox = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M10 12H7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M13 16H7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M5.5 20H18.5C19.3284 20 20 19.3284 20 18.5V8.23607C20 8.08082 19.9639 7.92771 19.8944 7.78885L18.5528 5.10557C18.214 4.428 17.5215 4 16.7639 4H7.23607C6.47852 4 5.786 4.428 5.44721 5.10557L4.10557 7.78885C4.03615 7.92771 4 8.08082 4 8.23607V18.5C4 19.3284 4.67157 20 5.5 20Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M5 8H19' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <rect x='14' y='11' width='3' height='3' rx='0.5' fill={color} />
  </svg>
)

export const PackageBoxAlt = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M10 14H7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M13 17H7' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <rect
      x='13'
      y='7'
      width='4'
      height='4'
      rx='1'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const PackageBoxClose = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 8V4' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M11 16H8' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M5.5 20H18.5C19.3284 20 20 19.3284 20 18.5V8.23607C20 8.08082 19.9639 7.92771 19.8944 7.78885L18.5528 5.10557C18.214 4.428 17.5215 4 16.7639 4H7.23607C6.47852 4 5.786 4.428 5.44721 5.10557L4.10557 7.78885C4.03615 7.92771 4 8.08082 4 8.23607V18.5C4 19.3284 4.67157 20 5.5 20Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M5 8H19' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const PackageCar = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='16' cy='19' r='2' stroke={color} strokeWidth='2' />
    <circle cx='9' cy='19' r='2' stroke={color} strokeWidth='2' />
    <path
      d='M5 14H11V7M11 7V9H4V17C4 18.1046 4.89543 19 6 19H7M11 7H15L19.6247 10.6998C19.8619 10.8895 20 11.1768 20 11.4806V13M17 9H16V13H20M20 13V17C20 18.1046 19.1046 19 18 19V19M14 19H11'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const PackageFavourite = ({
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
      d='M5.5 20H18.5C19.3284 20 20 19.3284 20 18.5V8.23607C20 8.08082 19.9639 7.92771 19.8944 7.78885L18.5528 5.10557C18.214 4.428 17.5215 4 16.7639 4H7.23607C6.47852 4 5.786 4.428 5.44721 5.10557L4.10557 7.78885C4.03615 7.92771 4 8.08082 4 8.23607V18.5C4 19.3284 4.67157 20 5.5 20Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path d='M5 8H19' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M10 4L9 8V14L12 12L15 14V8L14 4'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const PackageFavouriteAlt = ({
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
      d='M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M15 5V12L12 10L9 12V5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const PackageSearch = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 13V20.0979C12 20.4968 12 20.6962 11.8712 20.7676C11.7424 20.839 11.5733 20.7333 11.235 20.5219L4.94 16.5875C4.48048 16.3003 4.25072 16.1567 4.12536 15.9305C4 15.7043 4 15.4334 4 14.8915V8M12 13L4 8M12 13L17.2864 9.696C18.5043 8.93483 19.1132 8.55425 19.1132 8C19.1132 7.44575 18.5043 7.06517 17.2864 6.304L13.06 3.6625C12.5445 3.34033 12.2868 3.17925 12 3.17925C11.7132 3.17925 11.4555 3.34033 10.94 3.6625L4 8'
      stroke={color}
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <path
      d='M19 12C19 12.5523 19.4477 13 20 13C20.5523 13 21 12.5523 21 12H19ZM19.8746 8.06948L19 8.55425L19.8746 8.06948ZM19 9.1085V12H21V9.1085H19ZM19.59 6.5645L16.53 4.652L15.47 6.348L18.53 8.2605L19.59 6.5645ZM21 9.1085C21 8.85636 21.0011 8.59761 20.9798 8.37533C20.9565 8.13186 20.9016 7.85958 20.7493 7.58471L19 8.55425C18.973 8.50555 18.9808 8.48184 18.9889 8.56585C18.9989 8.67107 19 8.81873 19 9.1085H21ZM18.53 8.2605C18.7757 8.41407 18.9004 8.49322 18.9843 8.55753C19.0512 8.60887 19.027 8.60294 19 8.55425L20.7493 7.58471C20.5969 7.30984 20.3951 7.11902 20.201 6.97022C20.0238 6.83438 19.8038 6.69813 19.59 6.5645L18.53 8.2605Z'
      fill={color}
    />
    <circle cx='17.5' cy='16.5' r='2.5' stroke={color} strokeWidth='2' />
    <path d='M21 20L19.5 18.5' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path
      d='M14.53 20.598C14.9983 20.3053 15.1407 19.6883 14.848 19.22C14.5553 18.7517 13.9383 18.6093 13.47 18.902L14.53 20.598ZM11 20.375L10.47 21.223L11 20.375ZM11.9368 20.8188L11.8736 21.8168L11.9368 20.8188ZM12.0632 20.8188L12 19.8208L12.0632 20.8188ZM11.53 19.527L8.53 17.652L7.47 19.348L10.47 21.223L11.53 19.527ZM13.47 18.902L12.97 19.2145L14.03 20.9105L14.53 20.598L13.47 18.902ZM12.97 19.2145L12.47 19.527L13.53 21.223L14.03 20.9105L12.97 19.2145ZM10.47 21.223C10.6827 21.3559 10.8989 21.4922 11.0953 21.5911C11.3093 21.6988 11.5649 21.7972 11.8736 21.8168L12 19.8208C12.0564 19.8243 12.0717 19.8435 11.9945 19.8046C11.8997 19.7569 11.7736 19.6793 11.53 19.527L10.47 21.223ZM12.47 19.527C12.2264 19.6793 12.1003 19.7569 12.0055 19.8046C11.9283 19.8435 11.9436 19.8243 12 19.8208L12.1264 21.8168C12.4351 21.7972 12.6907 21.6988 12.9047 21.5911C13.1011 21.4922 13.3173 21.3559 13.53 21.223L12.47 19.527ZM11.8736 21.8168C11.9578 21.8221 12.0422 21.8221 12.1264 21.8168L12 19.8208L11.8736 21.8168Z'
      fill={color}
    />
  </svg>
)
