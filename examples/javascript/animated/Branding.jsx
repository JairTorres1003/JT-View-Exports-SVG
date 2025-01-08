/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const Chrome = ({
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
    <style>{'@keyframes chrome{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'}</style>
    <g
      style={{
        animation: `chrome ${speed}s cubic-bezier(.215,.61,.355,1) infinite both`,
        transformOrigin: '54% center',
      }}
    >
      <path
        stroke={color}
        strokeWidth='1.5'
        d='M14.524 14.15l-4.047 4.736m.107-5.828l-2.94-6.03m5.096 2.355h6.962'
      ></path>
      <path
        fill={color}
        d='M7.588 15.124a6.249 6.249 0 012.288-8.536l-.75-1.299a7.749 7.749 0 00-2.837 10.585l1.3-.75zm2.288-8.536a6.249 6.249 0 018.536 2.288l1.299-.75A7.749 7.749 0 009.126 5.289l.75 1.3zm8.536 2.288a6.249 6.249 0 01-2.288 8.536l.75 1.299a7.749 7.749 0 002.837-10.585l-1.3.75zm-2.288 8.536a6.249 6.249 0 01-8.536-2.288l-1.299.75a7.749 7.749 0 0010.585 2.837l-.75-1.3z'
      ></path>
      <circle
        cx='13'
        cy='12'
        r='2.625'
        stroke={secondaryColor}
        strokeWidth='1.5'
        transform='rotate(150 13 12)'
      ></circle>
    </g>
  </svg>
)

export const Discord = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
  speed = 1.5,
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
    <style>{'@keyframes discord{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'}</style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M17.545 6.995c-1.02-.46-2.114-.8-3.257-.994a.05.05 0 00-.052.024 8.786 8.786 0 00-.406.82 12.376 12.376 0 00-3.658 0 8.241 8.241 0 00-.412-.82.052.052 0 00-.052-.024 13.314 13.314 0 00-3.257.994.046.046 0 00-.021.018c-2.074 3.05-2.643 6.023-2.364 8.96a.06.06 0 00.02.038 13.353 13.353 0 003.996 1.987.052.052 0 00.056-.018 9.31 9.31 0 00.818-1.308.05.05 0 00-.028-.07 8.785 8.785 0 01-1.248-.585.05.05 0 01-.005-.084 6.78 6.78 0 00.248-.191.05.05 0 01.051-.007c2.619 1.176 5.454 1.176 8.041 0a.05.05 0 01.053.006c.08.065.164.13.248.192a.05.05 0 01-.004.084 8.22 8.22 0 01-1.249.585.05.05 0 00-.027.07c.24.457.514.893.817 1.307a.051.051 0 00.056.019 13.308 13.308 0 004.001-1.987.05.05 0 00.021-.037c.334-3.396-.559-6.345-2.366-8.96a.04.04 0 00-.02-.02zm-8.198 5.783c-.789 0-.962-.243-.962-1.118 0-.874.16-1.117.962-1.117.807 0 .973.249.96 1.117 0 .875-.16 1.118-.96 1.118zm5.316 0c-.788 0-.961-.243-.961-1.118 0-.874.16-1.117.961-1.117.807 0 .974.249.961 1.117 0 .875-.154 1.118-.96 1.118z'
      style={{
        transformOrigin: 'center',
        animation: `discord ${speed}s cubic-bezier(.64,.03,.24,.93) infinite both`,
      }}
    ></path>
  </svg>
)

export const Dribbble = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
  speed = 2,
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
        '@keyframes dribbble{0%{transform:translateY(-6px);animation-timing-function:ease-in;opacity:1}24%{opacity:1}40%,65%{transform:translateY(-6px);animation-timing-function:ease-in}82%{transform:translateY(-4px);animation-timing-function:ease-in}93%{transform:translateY(-2px);animation-timing-function:ease-in}25%,55%,75%,87%{transform:translateY(0);animation-timing-function:ease-out}to{transform:translateY(0);animation-timing-function:ease-out;opacity:1}}'
      }
    </style>
    <path
      fill={color}
      d='M18.734 7.984a7.946 7.946 0 00-2.913-2.912A7.836 7.836 0 0011.806 4c-1.45 0-2.789.358-4.016 1.072a7.943 7.943 0 00-2.912 2.912A7.84 7.84 0 003.806 12c0 1.45.357 2.79 1.072 4.016a7.939 7.939 0 002.913 2.912A7.837 7.837 0 0011.806 20c1.45 0 2.789-.358 4.016-1.072a7.946 7.946 0 002.913-2.912A7.839 7.839 0 0019.805 12c0-1.45-.356-2.79-1.071-4.016zm-6.928-2.656c1.6 0 3.018.512 4.256 1.535-.736.94-1.829 1.712-3.28 2.32-.802-1.45-1.67-2.661-2.609-3.632a6.172 6.172 0 011.633-.223zM6.614 7.84a6.493 6.493 0 012.169-1.776c.97.96 1.86 2.16 2.672 3.6-1.6.48-3.292.72-5.073.72-.459 0-.805-.01-1.04-.032A6.84 6.84 0 016.614 7.84zM5.134 12c0-.043.002-.096.008-.16.005-.064.008-.117.008-.16.203.011.513.016.929.016 2.132 0 4.116-.294 5.95-.88.15.298.306.634.465 1.008-1.056.234-2.14.805-3.249 1.712-1.11.907-1.92 1.862-2.431 2.864-1.12-1.27-1.68-2.736-1.68-4.4zm6.672 6.672c-1.515 0-2.875-.47-4.08-1.407.48-.95 1.218-1.858 2.216-2.721.997-.864 1.986-1.402 2.968-1.616a23.553 23.553 0 011.248 5.296 6.533 6.533 0 01-2.352.448zm5.664-3.168a6.683 6.683 0 01-2.064 2.097 23.028 23.028 0 00-1.103-4.865c.745-.053 1.412-.08 2-.08.639 0 1.348.027 2.127.08a6.48 6.48 0 01-.96 2.768zm-.992-4c-.928 0-1.787.038-2.576.112-.167-.438-.349-.87-.544-1.296 1.653-.725 2.825-1.605 3.52-2.64.96 1.131 1.482 2.422 1.567 3.872a39.987 39.987 0 00-1.967-.048z'
      style={{ animation: `dribbble ${speed}s infinite both` }}
    ></path>
  </svg>
)

export const LinkedIn = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
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
        '@keyframes linkedin{0%{transform:translateY(-4px);animation-timing-function:ease-in;opacity:1}24%{opacity:1}40%,65%{transform:translateY(-4px);animation-timing-function:ease-in}82%{transform:translateY(-3px);animation-timing-function:ease-in}93%{transform:translateY(-1px);animation-timing-function:ease-in}25%,55%,75%,87%{transform:translateY(0);animation-timing-function:ease-out}to{transform:translateY(0);animation-timing-function:ease-out;opacity:1}}'
      }
    </style>
    <path
      fill={secondaryColor}
      d='M7.361 7.111a1.556 1.556 0 110-3.111 1.556 1.556 0 010 3.111z'
      style={{
        animation: `linkedin ${speed}s infinite both cubic-bezier(1,-.08,0,1.12)`,
      }}
    ></path>
    <path
      fill={color}
      d='M10.473 18h3.11v-5.25a1.411 1.411 0 011.364-1.512 1.762 1.762 0 011.748 1.512V18h3.11v-5.639a3.5 3.5 0 00-3.48-3.51 3.592 3.592 0 00-2.741 1.371V8.667h-3.111V18zm-4.667 0h3.111V8.667H5.806V18z'
    ></path>
  </svg>
)

export const Meta = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
  speed = 1.5,
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
    <style>{'@keyframes loop{to{stroke-dashoffset:10}}'}</style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M10.805 8.441a11 11 0 011.48 2.46c.7 1.31 3.73 6.25 5.46 6.23 2 0 2.19-2.39 2.07-3.92-.17-2-.68-4.41-2.36-5.65-1.88-1.37-3.77 0-4.88 1.62-1.22 1.86-1.94 3.91-3.3 5.67-.77 1-1.88 2.14-3.28 2-2.86-.13-1.99-5.12-1.36-6.81a4.81 4.81 0 012.55-2.81 3 3 0 013.62 1.21z'
      style={{
        animation: `loop ${speed}s infinite cubic-bezier(.65,.05,.36,1)`,
      }}
      strokeDashoffset='100'
      strokeDasharray='100'
    ></path>
  </svg>
)

export const NintendoSwitch = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
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
        '@keyframes ns-1{0%{transform:translateY(0)}to{transform:translateY(7px)}}@keyframes ns-2{0%{transform:translateY(0)}to{transform:translateY(-7px)}}'
      }
    </style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M6.447 8.148A2.568 2.568 0 019.015 5.58h2.568v12.84H9.015a2.568 2.568 0 01-2.568-2.568V8.148zm12.737 7.704a2.568 2.568 0 01-2.568 2.568h-2.568V5.58h2.568a2.568 2.568 0 012.568 2.568v7.704z'
    ></path>
    <circle
      cx='9.015'
      cy='8.74'
      r='.963'
      fill={secondaryColor}
      style={{ animation: `ns-1 ${speed}s linear infinite alternate both` }}
    ></circle>
    <circle
      cx='16.616'
      cy='15.26'
      r='.963'
      fill={secondaryColor}
      transform='rotate(-180 16.616 15.26)'
      style={{ animation: `ns-2 ${speed}s linear infinite alternate both` }}
    ></circle>
  </svg>
)

export const PayPal = ({
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
    <style>
      {
        '@keyframes paypal{0%{transform:translateY(-2.4px) translateX(-2.4px)}to{transform:translateY(1px) translateX(1px)}}'
      }
    </style>
    <path
      stroke={secondaryColor}
      strokeWidth='1.5'
      d='M11.618 8.094h4.163c2.236 0 3.077 1.132 2.947 2.794-.215 2.745-1.874 4.264-4.075 4.264H13.54c-.302 0-.505.2-.586.741l-.472 3.149c-.031.204-.139.322-.3.338H9.567c-.246 0-.333-.188-.268-.595L10.893 8.69c.063-.404.284-.596.725-.596z'
      clipRule='evenodd'
      style={{
        animation: `paypal ${speed}s cubic-bezier(.25,.46,.45,.94) both infinite alternate`,
      }}
    ></path>
    <path
      fill='#fff'
      fillRule='evenodd'
      stroke={color}
      strokeWidth='1.5'
      d='M9.603 4.62h4.167c1.174 0 2.567.037 3.497.86.623.548.95 1.422.874 2.364-.256 3.182-2.159 4.965-4.712 4.965h-2.055c-.35 0-.582.232-.68.86l-.574 3.654c-.038.236-.14.376-.323.393H7.225c-.284 0-.385-.215-.311-.69L8.762 5.314c.074-.471.333-.694.84-.694z'
      clipRule='evenodd'
    ></path>
  </svg>
)

export const Pinterest = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1.5,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
    viewBox='0 0 24 24'
  >
    <style>
      {
        '@keyframes pinterest{0%{transform:translateY(-10px) translateX(2px);opacity:0}to{transform:translateZ(0) translateX(0);opacity:1}}'
      }
    </style>
    <path
      fill={secondaryColor}
      d='M7.828 11.63c0-.549.113-1.093.341-1.632.229-.54.555-1.04.98-1.502.425-.46.983-.835 1.675-1.122.693-.287 1.46-.431 2.3-.431 1.367 0 2.488.427 3.365 1.28.876.852 1.314 1.857 1.314 3.015 0 1.488-.37 2.718-1.114 3.688-.744.97-1.704 1.455-2.881 1.455a2.26 2.26 0 01-1.089-.274c-.339-.183-.577-.405-.715-.666l-.516 2.063a4.1 4.1 0 01-.167.502c-.069.17-.145.333-.226.49a10.32 10.32 0 01-.245.444 8.62 8.62 0 01-.458.698c-.06.082-.115.154-.167.216l-.077.104a.094.094 0 01-.103.04.094.094 0 01-.078-.08 31.2 31.2 0 01-.058-.542 13.918 13.918 0 01-.038-.488 6.84 6.84 0 01.025-1.201 5.24 5.24 0 01.097-.627c.094-.409.412-1.771.954-4.086a2.215 2.215 0 01-.168-.503 2.368 2.368 0 01-.064-.476l-.013-.196c0-.557.14-1.02.419-1.39.28-.37.616-.555 1.011-.555.319 0 .565.107.742.32.176.213.264.48.264.803 0 .2-.036.446-.11.737-.073.291-.17.627-.29 1.005-.12.379-.206.686-.258.92-.086.392-.01.732.226 1.019.236.287.552.43.947.43.68 0 1.24-.388 1.682-1.168.442-.779.664-1.72.664-2.826 0-.844-.27-1.534-.812-2.069-.541-.535-1.298-.803-2.268-.803-1.083 0-1.962.353-2.636 1.058a3.537 3.537 0 00-1.012 2.532c0 .584.164 1.075.49 1.475.112.13.146.27.103.418a2.728 2.728 0 00-.077.3 2.73 2.73 0 01-.077.3c-.017.096-.061.16-.13.19a.289.289 0 01-.231-.007 2.167 2.167 0 01-1.14-1.077c-.255-.509-.381-1.103-.381-1.782z'
      style={{
        animation: `pinterest ${speed}s cubic-bezier(.85,.57,.12,.85) both infinite`,
      }}
    ></path>
    <circle cx='12.816' cy='12' r='8' stroke={color} strokeWidth='1.5'></circle>
  </svg>
)

export const TikTok = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 0.5,
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
        '@keyframes tiktok{0%,to{transform:translate(0)}20%{transform:translate(-.3px,.3px)}40%{transform:translate(-.3px,-.3px)}60%{transform:translate(.3px,.3px)}80%{transform:translate(.3px,-.5px)}}'
      }
    </style>
    <rect width='14' height='14' x='5.194' y='5' stroke={color} strokeWidth='1.5' rx='2'></rect>
    <path
      fill={secondaryColor}
      d='M15.523 10.047a2.242 2.242 0 01-1.182-.66 2.06 2.06 0 01-.549-1.195V8H12.21v5.967c0 .265-.087.523-.25.738a1.324 1.324 0 01-.655.46 1.392 1.392 0 01-.815.008 1.328 1.328 0 01-.667-.447A1.208 1.208 0 019.69 13.4c.111-.21.281-.388.492-.511a1.416 1.416 0 011.105-.131V11.23a3.007 3.007 0 00-2.036.47 2.793 2.793 0 00-1.038 1.232 2.638 2.638 0 00-.158 1.571c.109.527.377 1.013.772 1.397.404.392.922.66 1.487.77A3.05 3.05 0 0012 16.522c.534-.207.992-.56 1.314-1.016.322-.455.495-.99.497-1.54v-3.055a3.88 3.88 0 002.189.664V10.09c-.154 0-.308-.014-.459-.044h-.018z'
      style={{
        animation: `tiktok ${speed}s cubic-bezier(.6,.04,.98,.335) infinite both`,
      }}
    ></path>
  </svg>
)

export const Twitch = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
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
    <style>{'@keyframes twitch{0%,50%,to{opacity:1}25%,75%{opacity:0}}'}</style>&gt;
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M6.316 7.027v8.397c0 .068.055.123.122.123h2.683c.068 0 .123.055.123.122v2.66c0 .11.133.164.21.086l2.79-2.832a.122.122 0 01.087-.036H16.2a.123.123 0 00.097-.048l1.993-2.582a.123.123 0 00.026-.075V5.494a.123.123 0 00-.123-.122H7.948a.123.123 0 00-.088.036L6.35 6.941a.123.123 0 00-.034.086z'
    ></path>
    <path
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M11.711 8.46v2.453m3.181-2.453v2.453'
      style={{ animation: `twitch ${speed}s cubic-bezier(.23,1,.32,1) infinite both` }}
    ></path>
  </svg>
)

export const YouTube = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
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
        '@keyframes youtube{0%{transform:translateZ(-10px) translateX(-10px);opacity:0}30%,50%,80%{transform:translateZ(0) translateX(0);opacity:1}to{transform:translateZ(10px) translateX(10px);opacity:0}}'
      }
    </style>
    <path
      fill={secondaryColor}
      fillRule='evenodd'
      d='M13.246 11.693a.645.645 0 010 1.054l-2.23 1.574A.645.645 0 0110 13.794v-3.148c0-.523.59-.828 1.017-.527l2.229 1.574z'
      clipRule='evenodd'
      style={{
        animation: `youtube ${speed}s cubic-bezier(.25,.46,.45,.94) infinite both`,
      }}
    ></path>
    <path
      fill={color}
      fillRule='evenodd'
      d='M16.613 6.666a41.132 41.132 0 00-9.226 0l-1.155.13c-1.052.119-1.847 1.022-1.847 2.096v6.216c0 1.074.795 1.977 1.847 2.096l1.155.13c3.066.346 6.16.346 9.226 0l1.155-.13c1.052-.119 1.847-1.022 1.847-2.096V8.892c0-1.074-.795-1.977-1.847-2.096l-1.155-.13zM7.234 5.268a42.495 42.495 0 019.531 0l1.156.13C19.674 5.596 21 7.101 21 8.892v6.216c0 1.79-1.326 3.296-3.08 3.494l-1.155.13a42.484 42.484 0 01-9.53 0l-1.156-.13C4.326 18.404 3 16.899 3 15.108V8.892c0-1.79 1.326-3.296 3.08-3.494l1.154-.13z'
      clipRule='evenodd'
    ></path>
  </svg>
)

export const Instagram = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
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
        '@keyframes instagram{0%,40%{transform:scale(.4)}20%{transform:scale(.6)}60%{transform:scale(.8)}to{transform:scale(1)}}'
      }
    </style>
    <rect
      width='14.5'
      height='14.5'
      x='4.75'
      y='4.75'
      stroke={color}
      strokeWidth='1.5'
      rx='4.25'
    ></rect>
    <rect
      width='6'
      height='6'
      x='9'
      y='9'
      stroke={secondaryColor}
      strokeWidth='1.5'
      rx='3'
      style={{
        animation: `instagram ${speed}s linear infinite both`,
        transformOrigin: 'center center',
      }}
    ></rect>
    <circle cx='16' cy='8' r='1' fill={color}></circle>
  </svg>
)
