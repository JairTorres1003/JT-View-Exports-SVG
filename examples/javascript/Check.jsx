/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const CheckFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z'
      fill={color}
    />
  </svg>
)

export const CheckRing = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
    <path d='M8 12L11 15L16 9' stroke={color} strokeWidth='2' />
  </svg>
)

export const CheckRingDuotone = ({
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
    <circle cx='12' cy='12' r='8' fill={color} fillOpacity='0.25' />
    <path
      d='M9.5 12L11.3939 13.8939C11.4525 13.9525 11.5475 13.9525 11.6061 13.8939L15.5 10'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const CheckRingDuotoneLine = ({
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
    <circle
      cx='12'
      cy='12'
      r='9'
      fill={color}
      fillOpacity='0.25'
      stroke={color}
      strokeWidth='1.2'
    />
    <path d='M8 12L11 15L16 9' stroke={color} strokeWidth='1.2' />
  </svg>
)

export const CheckRingLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='9' stroke={color} />
    <path d='M8 12L11 15L16 9' stroke={color} />
  </svg>
)

export const CheckRoundFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM16.7682 9.64018C17.1218 9.21591 17.0645 8.58534 16.6402 8.23178C16.2159 7.87821 15.5853 7.93554 15.2318 8.35982L11.6338 12.6774C11.2871 13.0934 11.0922 13.3238 10.9366 13.4653L10.9306 13.4707L10.9242 13.4659C10.7564 13.339 10.5415 13.1272 10.1585 12.7443L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L8.74428 14.1585L8.78511 14.1993L8.78512 14.1993C9.11161 14.526 9.4257 14.8402 9.71794 15.0611C10.0453 15.3087 10.474 15.5415 11.0234 15.5165C11.5728 15.4916 11.9787 15.221 12.2823 14.9448C12.5534 14.6983 12.8377 14.3569 13.1333 14.0021L13.1333 14.0021L13.1703 13.9577L16.7682 9.64018Z'
      fill={color}
    />
  </svg>
)

export const Done = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5 14L9 17L18 6' stroke={color} strokeWidth='2' />
  </svg>
)

export const DoneAllAltRound = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M2 14L5.23309 16.4248C5.66178 16.7463 6.26772 16.6728 6.60705 16.2581L15 6'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.8744 15.7802L11.603 17.163C12.4588 17.8477 13.7063 17.716 14.4003 16.8678L22.774 6.63327C23.1237 6.20582 23.0607 5.5758 22.6332 5.22607C22.2058 4.87635 21.5758 4.93935 21.226 5.36679L12.8524 15.6013L11.141 14.2322L9.8744 15.7802Z'
      fill={color}
    />
  </svg>
)

export const DoneAllAltRoundFillOne = ({
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
      d='M2 14L5.23309 16.4248C5.66178 16.7463 6.26772 16.6728 6.60705 16.2581L15 6'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.95117 15.3293L11.8529 16.8507C12.5375 17.3984 13.5355 17.2931 14.0907 16.6145L22.4644 6.37999C22.6742 6.12352 22.6364 5.7455 22.38 5.53567C22.1235 5.32583 21.7455 5.36363 21.5356 5.6201L13.162 15.8546C13.0231 16.0243 12.7737 16.0506 12.6025 15.9137L10.7111 14.4005L9.95117 15.3293Z'
      fill={color}
      fillOpacity='0.25'
    />
  </svg>
)

export const DoneAllAltRoundFill = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg width='26' height='24' viewBox='0 0 26 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.5479 7.26651C18.2474 6.41162 18.1214 5.15157 17.2665 4.45212C16.4116 3.75266 15.1515 3.87866 14.4521 4.73355L6.66618 14.2497L4.2 12.4C3.31634 11.7373 2.06274 11.9164 1.4 12.8C0.737259 13.6837 0.916345 14.9373 1.8 15.6L5.03309 18.0248C6.31916 18.9894 8.13697 18.7688 9.15496 17.5246L17.5479 7.26651Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <mask
      id='path-2-outside-1_2165_3344'
      maskUnits='userSpaceOnUse'
      x='8.86932'
      y='3'
      width='18'
      height='17'
      fill='black'
    >
      <rect fill='white' x='8.86932' y='3' width='18' height='17' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.8693 16.5761L12.603 17.163C13.4588 17.8477 14.7062 17.716 15.4003 16.8678L23.774 6.63327C24.1237 6.20582 24.0607 5.5758 23.6332 5.22607C23.2058 4.87635 22.5758 4.93935 22.226 5.36679L13.8524 15.6013L13.1359 15.0281L11.8693 16.5761Z'
      />
    </mask>
    <path
      d='M12.603 17.163L11.3536 18.7248L11.3536 18.7248L12.603 17.163ZM11.8693 16.5761L10.3214 15.3096L9.04094 16.8747L10.6199 18.1379L11.8693 16.5761ZM15.4003 16.8678L13.8524 15.6013H13.8524L15.4003 16.8678ZM23.774 6.63327L22.226 5.36679V5.36679L23.774 6.63327ZM23.6332 5.22607L22.3668 6.77399L23.6332 5.22607ZM22.226 5.36679L20.6781 4.10032L22.226 5.36679ZM13.8524 15.6013L12.603 17.163L14.1476 18.3988L15.4003 16.8678L13.8524 15.6013ZM13.1359 15.0281L14.3853 13.4664L12.8406 12.2306L11.588 13.7616L13.1359 15.0281ZM13.8524 15.6013L13.1187 15.0144L10.6199 18.1379L11.3536 18.7248L13.8524 15.6013ZM13.8524 15.6013L13.8524 15.6013L11.3536 18.7248C13.0652 20.0941 15.5601 19.8308 16.9482 18.1342L13.8524 15.6013ZM22.226 5.36679L13.8524 15.6013L16.9482 18.1342L25.3219 7.89974L22.226 5.36679ZM22.3668 6.77399C21.9393 6.42426 21.8763 5.79424 22.226 5.36679L25.3219 7.89974C26.3711 6.61741 26.182 4.72734 24.8997 3.67816L22.3668 6.77399ZM23.774 6.63327C23.4242 7.06071 22.7942 7.12372 22.3668 6.77399L24.8997 3.67816C23.6174 2.62898 21.7273 2.81798 20.6781 4.10032L23.774 6.63327ZM15.4003 16.8678L23.774 6.63327L20.6781 4.10032L12.3044 14.3348L15.4003 16.8678ZM11.8865 16.5898L12.603 17.163L15.1017 14.0396L14.3853 13.4664L11.8865 16.5898ZM11.588 13.7616L10.3214 15.3096L13.4172 17.8426L14.6838 16.2946L11.588 13.7616Z'
      fill={color}
      mask='url(#path-2-outside-1_2165_3344)'
    />
  </svg>
)

export const DoneAllAltRoundFillLine = ({
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
      d='M2 14L5.23309 16.4248C5.66178 16.7463 6.26772 16.6728 6.60705 16.2581L15 6'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.95117 15.3293L11.8529 16.8507C12.5375 17.3984 13.5355 17.2931 14.0907 16.6145L22.4644 6.37999C22.6742 6.12352 22.6364 5.7455 22.38 5.53567C22.1235 5.32583 21.7455 5.36363 21.5356 5.6201L13.162 15.8546C13.0231 16.0243 12.7737 16.0506 12.6025 15.9137L10.7111 14.4005L9.95117 15.3293Z'
      fill={color}
      fillOpacity='0.25'
    />
  </svg>
)

export const DoneAllAltRoundLight = ({
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
      d='M2 14L5.23309 16.4248C5.66178 16.7463 6.26772 16.6728 6.60705 16.2581L15 6'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.191 15.3932L11.9153 16.7726C12.5572 17.2861 13.4928 17.1873 14.0133 16.5511L22.387 6.31663C22.5618 6.10291 22.5303 5.7879 22.3166 5.61304C22.1029 5.43817 21.7879 5.46967 21.613 5.6834L13.2393 15.9179C13.0658 16.13 12.754 16.1629 12.54 15.9917L10.8243 14.6192L10.191 15.3932Z'
      fill={color}
    />
  </svg>
)

export const DoneAllRound = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M8.00011 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.1892 12.2368L15.774 6.63327C16.1237 6.20582 16.0607 5.5758 15.6332 5.22607C15.2058 4.87635 14.5758 4.93935 14.226 5.36679L9.65273 10.9564L11.1892 12.2368ZM8.02292 16.1068L6.48641 14.8263L5.83309 15.6248L2.6 13.2C2.15817 12.8687 1.53137 12.9582 1.2 13.4C0.868627 13.8419 0.95817 14.4687 1.4 14.8L4.63309 17.2248C5.49047 17.8679 6.70234 17.7208 7.381 16.8913L8.02292 16.1068Z'
      fill={color}
    />
  </svg>
)

export const DoneAllRoundDuotone = ({
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
      d='M8.00009 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.5653 12.3677L15.4644 6.37999C15.6742 6.12352 15.6364 5.7455 15.3799 5.53567C15.1235 5.32583 14.7455 5.36363 14.5356 5.6201L9.6434 11.5995L10.5653 12.3677ZM8.03225 15.4637L7.11035 14.6954L6.14267 15.8782C6.00694 16.044 5.76456 16.0735 5.59309 15.9449L2.36 13.52C2.0949 13.3212 1.71882 13.3749 1.52 13.64C1.32118 13.9051 1.3749 14.2812 1.64 14.48L4.87309 16.9049C5.559 17.4193 6.52849 17.3016 7.07142 16.638L8.03225 15.4637Z'
      fill={color}
      fillOpacity='0.25'
    />
  </svg>
)

export const DoneAllRoundDuotoneLine = ({
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
      d='M8.00009 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.5653 12.3677L15.4644 6.37999C15.6742 6.12352 15.6364 5.7455 15.3799 5.53567C15.1235 5.32583 14.7455 5.36363 14.5356 5.6201L9.6434 11.5995L10.5653 12.3677ZM8.03225 15.4637L7.11035 14.6954L6.14267 15.8782C6.00694 16.044 5.76456 16.0735 5.59309 15.9449L2.36 13.52C2.0949 13.3212 1.71882 13.3749 1.52 13.64C1.32118 13.9051 1.3749 14.2812 1.64 14.48L4.87309 16.9049C5.559 17.4193 6.52849 17.3016 7.07142 16.638L8.03225 15.4637Z'
      fill={color}
      fillOpacity='0.25'
    />
  </svg>
)

export const DoneAllRoundFill = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
}) => (
  <svg width='26' height='24' viewBox='0 0 26 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M24.548 7.26651C25.2475 6.41162 25.1215 5.15157 24.2666 4.45212C23.4117 3.75266 22.1516 3.87866 21.4522 4.73355L13.7048 14.2026L10.2495 11.4383C9.38697 10.7483 8.12839 10.8881 7.43837 11.7506C6.74835 12.6132 6.8882 13.8717 7.75072 14.5618L11.9784 17.9439C13.2621 18.9709 15.1333 18.7734 16.1743 17.501L24.548 7.26651Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <mask
      id='path-2-outside-1_2165_3319'
      maskUnits='userSpaceOnUse'
      x='-1.00006'
      y='3'
      width='21'
      height='17'
      fill='black'
    >
      <rect fill='white' x='-1.00006' y='3' width='21' height='17' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.8225 11.4628L16.774 6.63327C17.1237 6.20582 17.0607 5.5758 16.6332 5.22607C16.2058 4.87635 15.5758 4.93935 15.226 5.36679L11.286 10.1824L12.8225 11.4628ZM8.38965 16.8807L6.85315 15.6003L6.83309 15.6248L3.6 13.2C3.15817 12.8687 2.53137 12.9582 2.2 13.4C1.86863 13.8419 1.95817 14.4687 2.4 14.8L5.63309 17.2248C6.49047 17.8679 7.70234 17.7208 8.381 16.8913L8.38965 16.8807Z'
      />
    </mask>
    <path
      d='M16.774 6.63327L15.226 5.36679V5.36679L16.774 6.63327ZM12.8225 11.4628L11.5421 12.9993L13.0925 14.2912L14.3704 12.7293L12.8225 11.4628ZM16.6332 5.22607L15.3668 6.77399L16.6332 5.22607ZM15.226 5.36679L16.774 6.63327L15.226 5.36679ZM11.286 10.1824L9.73808 8.91593L8.48296 10.45L10.0056 11.7188L11.286 10.1824ZM8.38965 16.8807L9.93758 18.1472L11.1927 16.6132L9.67002 15.3443L8.38965 16.8807ZM6.85315 15.6003L8.13352 14.0639L6.58316 12.7719L5.30522 14.3339L6.85315 15.6003ZM6.83309 15.6248L5.63309 17.2248L7.16692 18.3752L8.38101 16.8913L6.83309 15.6248ZM3.6 13.2L2.4 14.8L2.4 14.8L3.6 13.2ZM2.2 13.4L0.599997 12.2L2.2 13.4ZM2.4 14.8L3.6 13.2H3.6L2.4 14.8ZM5.63309 17.2248L4.43309 18.8248L4.43309 18.8248L5.63309 17.2248ZM8.381 16.8913L9.92892 18.1578L9.92893 18.1578L8.381 16.8913ZM15.226 5.36679L11.2746 10.1963L14.3704 12.7293L18.3219 7.89974L15.226 5.36679ZM15.3668 6.77399C14.9393 6.42426 14.8763 5.79424 15.226 5.36679L18.3219 7.89974C19.3711 6.61741 19.182 4.72734 17.8997 3.67816L15.3668 6.77399ZM16.774 6.63327C16.4242 7.06071 15.7942 7.12372 15.3668 6.77399L17.8997 3.67816C16.6174 2.62898 14.7273 2.81798 13.6781 4.10032L16.774 6.63327ZM12.8339 11.4489L16.774 6.63327L13.6781 4.10032L9.73808 8.91593L12.8339 11.4489ZM10.0056 11.7188L11.5421 12.9993L14.1029 9.92638L12.5664 8.64596L10.0056 11.7188ZM9.67002 15.3443L8.13352 14.0639L5.57278 17.1368L7.10929 18.4172L9.67002 15.3443ZM8.38101 16.8913L8.40108 16.8668L5.30522 14.3339L5.28516 14.3584L8.38101 16.8913ZM2.4 14.8L5.63309 17.2248L8.03309 14.0248L4.8 11.6L2.4 14.8ZM3.8 14.6C3.46863 15.0419 2.84182 15.1314 2.4 14.8L4.8 11.6C3.47451 10.6059 1.59411 10.8745 0.599997 12.2L3.8 14.6ZM3.6 13.2C4.04183 13.5314 4.13137 14.1582 3.8 14.6L0.599997 12.2C-0.394114 13.5255 -0.125486 15.4059 1.2 16.4L3.6 13.2ZM6.83309 15.6248L3.6 13.2L1.2 16.4L4.43309 18.8248L6.83309 15.6248ZM6.83309 15.6248H6.83309L4.43309 18.8248C6.14785 20.1109 8.5716 19.8167 9.92892 18.1578L6.83309 15.6248ZM6.84173 15.6143L6.83308 15.6249L9.92893 18.1578L9.93758 18.1472L6.84173 15.6143Z'
      fill={color}
      mask='url(#path-2-outside-1_2165_3319)'
    />
  </svg>
)

export const DoneAllRoundLight = ({
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
      d='M8.00009 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.8051 11.9167L15.387 6.31663C15.5618 6.10291 15.5303 5.7879 15.3166 5.61304C15.1029 5.43817 14.7879 5.46967 14.613 5.6834L10.0369 11.2765L10.8051 11.9167ZM7.63879 15.7866L6.87054 15.1464L6.22007 15.9415C6.0504 16.1488 5.74743 16.1856 5.53309 16.0248L2.3 13.6C2.07909 13.4343 1.76568 13.4791 1.6 13.7C1.43431 13.9209 1.47908 14.2343 1.7 14.4L4.93309 16.8248C5.57613 17.3071 6.48503 17.1968 6.99402 16.5747L7.63879 15.7866Z'
      fill={color}
    />
  </svg>
)

export const DoneDuotone = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='8' fill={color} fillOpacity='0.25' />
    <path
      d='M8.5 11L11.3939 13.8939C11.4525 13.9525 11.5475 13.9525 11.6061 13.8939L19.5 6'
      stroke={color}
      strokeWidth='1.2'
    />
  </svg>
)

export const DoneDuotoneLine = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='10' cy='14' r='7' fill={color} fillOpacity='0.25' />
    <path d='M6 13L10 16L17 7' stroke={color} strokeWidth='1.2' />
  </svg>
)

export const DoneFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M19.5479 7.26653L20.1812 6.49258L19.4072 5.85934L17.8593 4.59286L17.0853 3.95963L16.4521 4.73358L8.66618 14.2497L6.2 12.4001L5.4 11.8001L4.8 12.6001L3.6 14.2001L3 15.0001L3.8 15.6001L8.56691 19.1752L9.33382 19.7504L9.94087 19.0085L19.5479 7.26653Z'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
)

export const DoneLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    style={sx}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5 14L9 17L18 6' stroke={color} />
  </svg>
)

export const DoneRingRound = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DoneRingRoundDuotone = ({
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
    <circle cx='12' cy='12' r='8' fill={color} fillOpacity='0.25' />
    <path
      d='M8.5 11L11.3939 13.8939C11.4525 13.9525 11.5475 13.9525 11.6061 13.8939L19.5 6'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M19.3578 10.5465C19.6899 12.2277 19.4363 13.9719 18.6391 15.4889C17.8419 17.0059 16.5493 18.2041 14.9763 18.8842C13.4033 19.5642 11.6449 19.6851 9.99369 19.2267C8.34247 18.7682 6.89803 17.7582 5.90077 16.3646C4.90351 14.9709 4.41358 13.2778 4.51251 11.567C4.61144 9.85619 5.29327 8.23085 6.44453 6.96147C7.59578 5.6921 9.14703 4.85527 10.8401 4.59024C12.5331 4.32521 14.2659 4.64797 15.75 5.50481'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const DoneRingRoundDuotoneLine = ({
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
    <circle cx='12' cy='12' r='9' fill={color} fillOpacity='0.25' />
    <path
      d='M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      d='M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const DoneRingRoundFill = ({
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
      d='M12 21C16.9706 21 21 16.9706 21 12C21 10.1666 20.4518 8.46124 19.5103 7.03891L12.355 14.9893C11.6624 15.7589 10.4968 15.8726 9.66844 15.2513L6.4 12.8C5.95817 12.4686 5.86863 11.8418 6.2 11.4C6.53137 10.9582 7.15817 10.8686 7.6 11.2L10.8684 13.6513L18.214 5.48955C16.5986 3.94717 14.4099 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
      fill={color}
    />
  </svg>
)

export const DoneRingRoundLight = ({
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
      d='M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const DoneRound = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DoneRoundDuotone = ({
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
    <circle cx='12' cy='12' r='8' fill={color} fillOpacity='0.25' />
    <path
      d='M8.5 11L10.7929 13.2929C11.1834 13.6834 11.8166 13.6834 12.2071 13.2929L19.5 6'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const DoneRoundDuotoneLine = ({
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
    <circle cx='10' cy='14' r='7' fill={color} fillOpacity='0.25' />
    <path
      d='M6 13L9.21391 15.4104C9.65027 15.7377 10.2684 15.6549 10.6033 15.2244L17 7'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const DoneRoundFill = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M19.5479 7.26651C20.2474 6.41162 20.1214 5.15157 19.2665 4.45212C18.4116 3.75266 17.1515 3.87866 16.4521 4.73355L8.66618 14.2497L6.2 12.4C5.31634 11.7373 4.06274 11.9164 3.4 12.8C2.73726 13.6837 2.91635 14.9373 3.8 15.6L7.03309 18.0248C8.31916 18.9894 10.137 18.7688 11.155 17.5246L19.5479 7.26651Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const DoneRoundLight = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const CheckRingRound = ({ size = 24, color = 'currentColor', sx = {}, className = '' }) => (
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
      d='M12 21C14.0822 21 16.1 20.278 17.7095 18.9571C19.3191 17.6362 20.4209 15.798 20.8271 13.7558C21.2333 11.7136 20.9188 9.59376 19.9373 7.75743C18.9558 5.9211 17.3679 4.48191 15.4442 3.68508C13.5205 2.88826 11.38 2.78311 9.38744 3.38754C7.3949 3.99197 5.67358 5.26858 4.51677 6.99987C3.35997 8.73115 2.83925 10.81 3.04334 12.8822C3.24743 14.9543 4.1637 16.8916 5.63604 18.364'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M16 10L12.402 14.3175C11.7465 15.1042 11.4187 15.4976 10.9781 15.5176C10.5375 15.5375 10.1755 15.1755 9.45139 14.4514L8 13'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export const CheckRingRoundDuotone = ({
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
    <circle cx='12' cy='12' r='8' fill={color} fillOpacity='0.25' />
    <path
      d='M9.5 12L11.3939 13.8939C11.4525 13.9525 11.5475 13.9525 11.6061 13.8939L15.5 10'
      stroke={color}
      strokeWidth='1.2'
    />
    <path
      d='M19.5 12C19.5 13.4834 19.0601 14.9334 18.236 16.1668C17.4119 17.4001 16.2406 18.3614 14.8701 18.9291C13.4997 19.4968 11.9917 19.6453 10.5368 19.3559C9.08197 19.0665 7.74559 18.3522 6.6967 17.3033C5.64781 16.2544 4.9335 14.918 4.64411 13.4632C4.35472 12.0083 4.50325 10.5003 5.0709 9.12987C5.63856 7.75943 6.59985 6.58809 7.83322 5.76398C9.06659 4.93987 10.5166 4.5 12 4.5'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)

export const CheckRingRoundDuotoneLine = ({
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
    <circle cx='12' cy='12' r='9' fill={color} fillOpacity='0.25' />
    <path
      d='M12 21C14.0822 21 16.1 20.278 17.7095 18.9571C19.3191 17.6362 20.4209 15.798 20.8271 13.7558C21.2333 11.7136 20.9188 9.59376 19.9373 7.75743C18.9558 5.9211 17.3679 4.48191 15.4442 3.68508C13.5205 2.88826 11.38 2.78311 9.38744 3.38754C7.3949 3.99197 5.67358 5.26858 4.51677 6.99987C3.35997 8.73115 2.83925 10.81 3.04334 12.8822C3.24743 14.9543 4.1637 16.8916 5.63604 18.364'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
    <path
      d='M16 10L12.402 14.3175C11.7465 15.1042 11.4187 15.4976 10.9781 15.5176C10.5375 15.5375 10.1755 15.1755 9.45139 14.4514L8 13'
      stroke={color}
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
)

export const CheckRingRoundLight = ({
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
      d='M12 21C14.0822 21 16.1 20.278 17.7095 18.9571C19.3191 17.6362 20.4209 15.798 20.8271 13.7558C21.2333 11.7136 20.9188 9.59376 19.9373 7.75743C18.9558 5.9211 17.3679 4.48191 15.4442 3.68508C13.5205 2.88826 11.38 2.78311 9.38744 3.38754C7.3949 3.99197 5.67358 5.26858 4.51677 6.99987C3.35997 8.73115 2.83925 10.81 3.04334 12.8822C3.24743 14.9543 4.1637 16.8916 5.63604 18.364'
      stroke={color}
      strokeLinecap='round'
    />
    <path
      d='M16 10L12.402 14.3175C11.7465 15.1042 11.4187 15.4976 10.9781 15.5176C10.5375 15.5375 10.1755 15.1755 9.45139 14.4514L8 13'
      stroke={color}
      strokeLinecap='round'
    />
  </svg>
)
