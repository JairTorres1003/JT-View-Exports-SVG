import React from 'react'

import { type IconAnimatedComponentProps } from '../types'

export const Archive: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
}) => {
  return (
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
        {'@keyframes slide-top{0%{transform:translateY(1px)}to{transform:translateY(-2px)}}'}
      </style>
      <path
        stroke={color}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6 8.55v8.334c0 .92.768 1.667 1.714 1.667h8.572c.947 0 1.714-.746 1.714-1.667V8.551m-7 2.899h2'
      />
      <path
        fill={secondaryColor}
        fillRule='evenodd'
        d='M4.087 5.45H3.87a.533.533 0 00-.533.532v.967c0 .295.238.533.533.533h16.26a.533.533 0 00.533-.533v-.967a.533.533 0 00-.533-.533H4.087z'
        clipRule='evenodd'
        style={{
          animation: `slide-top ${speed}s cubic-bezier(.86,0,.07,1) infinite alternate-reverse both`,
        }}
      />
    </svg>
  )
}

export const Article: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 3,
}) => {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      className={className}
      style={sx}
      fill='none'
    >
      <style>{'@keyframes check {to {stroke-dashoffset: 0;}}'}</style>
      <rect width='10' height='14' x='7' y='5' stroke={color} strokeWidth='1.5' rx='1'></rect>
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10 8.973h4m-4 3.64h2'
        style={{ animation: `check ${speed}s infinite cubic-bezier(.99,-.1,.01,1.02)` }}
        strokeDashoffset='100'
        strokeDasharray='100'
      />
    </svg>
  )
}
export const Bookmark: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
}) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width={size}
      height={size}
      className={className}
      style={sx}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <style>{'@keyframes add{0%,80%,to{opacity:0}10%{opacity:1}}'}</style>
      <path
        d='M7 5.61a1 1 0 011-1h8a1 1 0 011 1v12.77a.5.5 0 01-.803.398l-3.603-2.745a1 1 0 00-1.214.002l-3.576 2.739A.5.5 0 017 18.377V5.61z'
        stroke={color}
        strokeWidth='1.5'
      />
      <path
        d='M10.335 9h3.33'
        stroke={secondaryColor}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 7.335v3.33'
        stroke={secondaryColor}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        style={{ animation: `add ${speed}s cubic-bezier(.5,.52,.21,.43) infinite alternate both` }}
      />
    </svg>
  )
}

export const Chart: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
}) => {
  return (
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
          '@keyframes slide-tr{0%{transform:translateY(0) translateX(0)}to{transform:translateY(-2px) translateX(2px)}}'
        }
      </style>
      <path
        stroke={color}
        strokeWidth='1.5'
        d='M17.82 16.889a7 7 0 001.162-3.39A.473.473 0 0018.5 13h-6a.5.5 0 01-.5-.5v-6a.473.473 0 00-.5-.482 7 7 0 106.32 10.871z'
      ></path>
      <path
        stroke={secondaryColor}
        strokeWidth='1.5'
        d='M19 11c.552 0 1.009-.45.917-.995a6 6 0 00-4.922-4.922C14.451 4.992 14 5.448 14 6v4a1 1 0 001 1h4z'
        style={{
          animation: `slide-tr ${speed}s cubic-bezier(.47,0,.745,.715) infinite alternate-reverse both`,
        }}
      ></path>
    </svg>
  )
}

export const CheckCircle: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
}) => {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      className={className}
      style={sx}
      fill='none'
    >
      <style>{'@keyframes check { to { stroke-dashoffset: 0; } }'}</style>
      <circle cx='12' cy='12' r='8' stroke={color} strokeWidth='1.5'></circle>
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.215 12.052l1.822 1.805 3.748-3.714'
        style={{ animation: `check ${speed}s infinite cubic-bezier(.99,-.1,.01,1.02)` }}
        strokeDashoffset='100'
        strokeDasharray='100'
      ></path>
    </svg>
  )
}

export const CheckSquare: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
}) => {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      className={className}
      style={sx}
      fill='none'
    >
      <style>{'@keyframes check { to { stroke-dashoffset: 0; } }'}</style>
      <rect width='16' height='16' x='4' y='4' stroke={color} strokeWidth='1.5' rx='2.075'></rect>
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.215 12.052l1.822 1.805 3.748-3.714'
        style={{ animation: `check ${speed}s infinite cubic-bezier(.99,-.1,.01,1.02)` }}
        strokeDashoffset='100'
        strokeDasharray='100'
      ></path>
    </svg>
  )
}

export const Check: React.FC<Omit<IconAnimatedComponentProps, 'secondaryColor'>> = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
  speed = 2,
}) => {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      className={className}
      style={sx}
      fill='none'
    >
      <style>{'@keyframes check { to { stroke-dashoffset: 0; } }'}</style>
      <path
        stroke={color}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.387 12.68l3.955 3.956 9.271-9.272'
        style={{ animation: `check ${speed}s infinite cubic-bezier(.99,-.1,.01,1.02)` }}
        strokeDashoffset='100'
        strokeDasharray='100'
      ></path>
    </svg>
  )
}

export const ClockCircle: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
}) => {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      className={className}
      style={sx}
      fill='none'
    >
      <style>{'@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'}</style>
      <rect width='16' height='16' x='4' y='4' stroke={color} strokeWidth='1.5' rx='8' />
      <path stroke={color} strokeLinecap='round' strokeWidth='1.5' d='M12.021 12l2.325 2.325' />
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12.021 12V6.84'
        style={{ animation: `rotate ${speed}s linear infinite both`, transformOrigin: 'center' }}
      />
    </svg>
  )
}

export const ClockSquare: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
}) => {
  return (
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
        {`.rotate { animation: rotate ${speed}s linear infinite both; transform-origin: center; } @keyframes rotate { 0% { transform: rotate(0); } 100% { transform: rotate(360deg); } }`}
      </style>
      <rect width='16' height='16' x='4' y='4' stroke={color} strokeWidth='1.5' rx='2.075'></rect>
      <path
        stroke={color}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.021 12l2.325 2.325'
      ></path>
      <path
        className='rotate'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12.021 12V6.84'
      ></path>
    </svg>
  )
}

export const CloseSquare: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      className={className}
      style={sx}
      fill='none'
      viewBox='0 0 24 24'
    >
      <style>{'@keyframes blink-1{0%,50%,to{opacity:1}25%{opacity:0}}'}</style>
      <rect width='16' height='16' x='4' y='4' stroke={color} strokeWidth='1.5' rx='2.075'></rect>
      <path
        fill={secondaryColor}
        d='M10.242 9.18a.75.75 0 00-1.061 1.062l1.79 1.79-1.79 1.79a.75.75 0 001.06 1.06l1.79-1.79 1.79 1.79a.75.75 0 001.062-1.06l-1.79-1.79 1.79-1.79a.75.75 0 10-1.061-1.061l-1.79 1.79-1.79-1.79z'
        style={{ animation: `blink-1 ${speed}s steps(1,end) infinite both` }}
      ></path>
    </svg>
  )
}

export const CloudDone: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes check { to { stroke-dashoffset: 0; } }'}</style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M7.059 11.765A3.059 3.059 0 004 14.824c0 .461.42.774.882.774h14.236c.461 0 .882-.313.882-.774a3.06 3.06 0 00-3.059-3.06.182.182 0 01-.175-.132 4.943 4.943 0 00-9.532 0 .182.182 0 01-.175.133z'
    ></path>
    <path
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='1.26'
      d='M10.248 12.033l1.146 1.135 2.358-2.336'
      style={{ animation: `check ${speed}s infinite cubic-bezier(.99,-.1,.01,1.02)` }}
      strokeDashoffset='100'
      strokeDasharray='100'
    ></path>
  </svg>
)

export const CloudDownload: React.FC<IconAnimatedComponentProps> = ({
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
      {'@keyframes slide-right{0%{transform:translateY(0)}to{transform:translateY(1px)}}'}
    </style>
    <path
      fill={color}
      d='M7.77 9.87l.724.2-.723-.2zm8.46 0l.723-.197-.724.198zm-7.198 4.27a.75.75 0 000-1.5v1.5zm5.982-1.5a.75.75 0 100 1.5v-1.5zm-9.363.063c0-1.085.88-1.964 1.964-1.964v-1.5a3.464 3.464 0 00-3.464 3.464h1.5zm1.964-1.964a.911.911 0 00.88-.67l-1.447-.396a.589.589 0 01.567-.434v1.5zm.88-.67A3.637 3.637 0 0112 7.398v-1.5a5.137 5.137 0 00-4.952 3.775l1.446.396zM12 7.398a3.636 3.636 0 013.506 2.671l1.447-.396A5.137 5.137 0 0012 5.898v1.5zm3.506 2.671c.11.402.475.67.879.67v-1.5c.259 0 .496.171.567.434l-1.446.396zm.879.67c1.085 0 1.964.879 1.964 1.964h1.5a3.464 3.464 0 00-3.464-3.464v1.5zM5.684 14.14h3.348v-1.5H5.684v1.5zm9.33 0h3.302v-1.5h-3.301v1.5zm3.335-1.438c0-.014.004-.034.013-.053a.083.083 0 01.018-.025c.001-.001-.004.003-.017.008a.146.146 0 01-.047.008v1.5c.692 0 1.533-.493 1.533-1.438h-1.5zm-14.198 0c0 .945.842 1.438 1.533 1.438v-1.5a.145.145 0 01-.047-.008c-.013-.005-.018-.009-.017-.008a.114.114 0 01.031.078h-1.5z'
    ></path>
    <path
      fill={secondaryColor}
      d='M12.566 12a.566.566 0 10-1.132 0h1.132zm-1.132 4.53a.566.566 0 001.132 0h-1.132zm-.921-1.91a.566.566 0 10-.801.8l.8-.8zM12 16.908l-.4.4c.22.222.58.222.8 0l-.4-.4zm2.288-1.487a.566.566 0 10-.8-.801l.8.8zM11.434 12v4.53h1.132V12h-1.132zm-1.722 3.42l1.888 1.888.8-.8-1.887-1.888-.801.8zm2.688 1.888l1.888-1.887-.8-.801-1.888 1.888.8.8z'
      style={{
        animation: `slide-right ${speed}s cubic-bezier(1,-.43,.68,.57) infinite alternate both`,
      }}
    ></path>
  </svg>
)

export const CloudUpload: React.FC<IconAnimatedComponentProps> = ({
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
      {'@keyframes slide-right{0%{transform:translateY(0)}to{transform:translateY(-1px)}}'}
    </style>
    <path
      fill={color}
      d='M7.77 9.87l.724.2-.723-.2zm8.46 0l.723-.197-.724.198zm-7.198 4.27a.75.75 0 000-1.5v1.5zm5.982-1.5a.75.75 0 100 1.5v-1.5zm-9.363.063c0-1.085.88-1.964 1.964-1.964v-1.5a3.464 3.464 0 00-3.464 3.464h1.5zm1.964-1.964a.911.911 0 00.88-.67l-1.447-.396a.589.589 0 01.567-.434v1.5zm.88-.67A3.637 3.637 0 0112 7.398v-1.5a5.137 5.137 0 00-4.952 3.775l1.446.396zM12 7.398a3.636 3.636 0 013.506 2.671l1.447-.396A5.137 5.137 0 0012 5.898v1.5zm3.506 2.671c.11.402.475.67.879.67v-1.5c.259 0 .496.171.567.434l-1.446.396zm.879.67c1.085 0 1.964.879 1.964 1.964h1.5a3.464 3.464 0 00-3.464-3.464v1.5zM5.684 14.14h3.348v-1.5H5.684v1.5zm9.33 0h3.302v-1.5h-3.301v1.5zm3.335-1.438c0-.014.004-.034.013-.053a.083.083 0 01.018-.025c.001-.001-.004.003-.017.008a.146.146 0 01-.047.008v1.5c.692 0 1.533-.493 1.533-1.438h-1.5zm-14.198 0c0 .945.842 1.438 1.533 1.438v-1.5a.145.145 0 01-.047-.008c-.013-.005-.018-.009-.017-.008a.114.114 0 01.031.078h-1.5z'
    ></path>
    <path
      fill={secondaryColor}
      d='M12.566 14.927a.566.566 0 11-1.132 0h1.132zm-1.132-4.53a.566.566 0 011.132 0h-1.132zm-.921 1.91a.566.566 0 11-.801-.8l.8.8zM12 10.02l-.4-.4a.566.566 0 01.8 0l-.4.4zm2.288 1.487a.566.566 0 11-.8.801l.8-.8zm-2.854 3.421v-4.53h1.132v4.53h-1.132zm-1.722-3.42l1.888-1.89.8.8-1.887 1.888-.801-.8zm2.688-1.89l1.888 1.887-.8.801L11.6 10.42l.8-.801z'
      style={{
        animation: `slide-right ${speed}s cubic-bezier(1,-.43,.68,.57) infinite alternate both`,
      }}
    ></path>
  </svg>
)

export const Compass: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes rotate{0%{transform:rotateZ(0)}to{transform:rotateZ(90deg)}}'}</style>
    <g
      style={{
        animation: `rotate ${speed}s cubic-bezier(.7,-.03,.43,.72) both infinite alternate-reverse`,
        transformOrigin: 'center center',
      }}
    >
      <path stroke={color} strokeWidth='1.5' d='M12 20a8 8 0 100-16 8 8 0 000 16z'></path>
      <path
        fill={secondaryColor}
        fillRule='evenodd'
        d='M14.246 9.033l-.516 3.97-3.18 2.431a.5.5 0 01-.8-.461l.516-3.97 3.18-2.431a.5.5 0 01.8.461zM12 13a1 1 0 100-2 1 1 0 000 2z'
        clipRule='evenodd'
      ></path>
    </g>
  </svg>
)

export const Cut: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
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
      {` .cut-sc { animation: cut-sc ${speed}s cubic-bezier(1, -0.28, 0.01, 1.13) infinite alternate-reverse both; transform-origin: center center; } @keyframes cut-sc { 0% { transform: rotate(0); } 100% { transform: rotate(-20deg); } } .cut-sc-2 { animation: cut-sc-2 ${speed}s cubic-bezier(1, -0.28, 0.01, 1.13) infinite alternate-reverse both; transform-origin: center center; } @keyframes cut-sc-2 { 0% { transform: rotate(0); } 100% { transform: rotate(20deg); } } `}
    </style>
    <g className='cut-sc'>
      <path
        stroke={color}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.025 10.025l7.9 7.9'
      ></path>
      <circle
        cx='8.05'
        cy='8.05'
        r='2.043'
        stroke={secondaryColor}
        strokeWidth='1.5'
        transform='rotate(45 8.05 8.05)'
      ></circle>
    </g>
    <g className='cut-sc-2'>
      <path
        stroke={color}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.025 13.975l7.9-7.9'
      ></path>
      <circle
        r='2.043'
        stroke={secondaryColor}
        strokeWidth='1.5'
        transform='scale(1 -1) rotate(45 23.279 1.742)'
      ></circle>
    </g>
  </svg>
)

export const Discount: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes rotate{0%{transform:rotateZ(0)}to{transform:rotateZ(360deg)}}'}</style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M10.524 4.614a2 2 0 012.952 0l.459.502a2 2 0 001.565.648l.68-.03a2 2 0 012.087 2.087l-.03.68a2 2 0 00.648 1.564l.501.46a2 2 0 010 2.95l-.502.46a2 2 0 00-.648 1.565l.03.68a2 2 0 01-2.086 2.087l-.68-.03a2 2 0 00-1.565.648l-.46.501a2 2 0 01-2.95 0l-.46-.502a2 2 0 00-1.565-.648l-.68.03a2 2 0 01-2.087-2.086l.03-.68a2 2 0 00-.647-1.565l-.502-.46a2 2 0 010-2.95l.502-.46A2 2 0 005.764 8.5l-.03-.68A2 2 0 017.82 5.734l.68.03a2 2 0 001.564-.647l.46-.502z'
      style={{
        animation: `rotate ${speed}s linear both infinite`,
        transformOrigin: 'center center',
      }}
    ></path>
    <path
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M13.873 10.004l-3.746 3.992'
    ></path>
    <circle cx='10.127' cy='10.004' r='1.074' fill={secondaryColor}></circle>
    <circle cx='13.873' cy='13.995' r='1.074' fill={secondaryColor}></circle>
  </svg>
)

export const Download: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 0.5,
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
      {`.slide { animation: slide-right ${speed}s cubic-bezier(1,-0.43, 0.68, 0.57) infinite alternate both; } @keyframes slide-right { 0% { transform: translateY(0); } 100% { transform: translateY(1px); } }`}
    </style>
    <circle cx='12' cy='12' r='8' stroke={color} strokeWidth='1.5'></circle>
    <path
      className='slide'
      fill={secondaryColor}
      d='M12.75 8.75a.75.75 0 00-1.5 0h1.5zm-1.5 6a.75.75 0 001.5 0h-1.5zm-1.22-2.53a.75.75 0 10-1.06 1.06l1.06-1.06zM12 15.25l-.53.53a.75.75 0 001.06 0l-.53-.53zm3.03-1.97a.75.75 0 10-1.06-1.06l1.06 1.06zm-3.78-4.53v6h1.5v-6h-1.5zm-2.28 4.53l2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06zm3.56 2.5l2.5-2.5-1.06-1.06-2.5 2.5 1.06 1.06z'
    ></path>
  </svg>
)

export const DownloadTwo: React.FC<IconAnimatedComponentProps> = ({
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
      {'@keyframes slide-right{0%{transform:translateY(0)}to{transform:translateY(1px)}}'}
    </style>
    <path
      fill={secondaryColor}
      d='M12.75 6.432a.75.75 0 00-1.5 0h1.5zm-1.5 6a.75.75 0 001.5 0h-1.5zm-1.22-2.53a.75.75 0 10-1.06 1.06l1.06-1.06zm1.97 3.03l-.53.53a.75.75 0 001.06 0l-.53-.53zm3.03-1.97a.75.75 0 00-1.06-1.06l1.06 1.06zm-3.78-4.53v6h1.5v-6h-1.5zm-2.28 4.53l2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06zm3.56 2.5l2.5-2.5-1.06-1.06-2.5 2.5 1.06 1.06z'
      style={{
        animation: `slide-right ${speed}s cubic-bezier(1,-.43,.68,.57) infinite alternate both`,
      }}
    ></path>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M8 17.274h8'
    ></path>
  </svg>
)

export const DownloadThree: React.FC<IconAnimatedComponentProps> = ({
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
      {'@keyframes slide-right{0%{transform:translateY(0)}to{transform:translateY(1px)}}'}
    </style>
    <path
      fill={secondaryColor}
      d='M12.75 6.432a.75.75 0 00-1.5 0h1.5zm-1.5 6a.75.75 0 001.5 0h-1.5zm-1.22-2.53a.75.75 0 10-1.06 1.06l1.06-1.06zm1.97 3.03l-.53.53a.75.75 0 001.06 0l-.53-.53zm3.03-1.97a.75.75 0 00-1.06-1.06l1.06 1.06zm-3.78-4.53v6h1.5v-6h-1.5zm-2.28 4.53l2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06zm3.56 2.5l2.5-2.5-1.06-1.06-2.5 2.5 1.06 1.06z'
      style={{
        animation: `slide-right ${speed}s cubic-bezier(1,-.43,.68,.57) infinite alternate both`,
      }}
    ></path>
    <path
      fill={color}
      d='M8.398 15.37a.75.75 0 10-.796 1.27l.796-1.27zm-.319.685l.398-.636-.398.636zm8.327.58a.75.75 0 00-.812-1.26l.812 1.26zm-8.804.006l.08.05.795-1.272-.079-.05-.796 1.272zm.08.05a8.14 8.14 0 008.724-.055l-.812-1.262a6.64 6.64 0 01-7.117.045l-.796 1.271z'
    ></path>
  </svg>
)

export const Edit: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
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
      {`.rotate-right { animation: rotate-right ${speed}s cubic-bezier(1, -0.01, 0.13, 1.15) infinite alternate-reverse both; transform-origin: top center; } @keyframes rotate-right { 0% { transform: rotate(0); } 25% { transform: rotate(10deg); } 50 { transform: rotate(0deg); } 100% { transform: rotate(-10deg); } } `}
    </style>
    <g className='rotate-right'>
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M9.5 7.307h5'
      ></path>
      <path
        stroke={color}
        strokeWidth='1.5'
        d='M9 5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5v11.3a1.5 1.5 0 01-.54 1.152l-1.5 1.249a1.5 1.5 0 01-1.92 0l-1.5-1.249A1.5 1.5 0 019 16.8V5.5z'
      ></path>
    </g>
  </svg>
)

export const Eye: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2.4,
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
      {`.eye-1 { animation: eye ${speed}s infinite; } .eye-2 { animation: squeeze ${speed}s infinite; } @keyframes eye { 90% { transform: none; animation-timing-function: ease-in; } 93% { transform: translateY(15px) scaleY(0) } 100% { animation-timing-function: ease-out; } } @keyframes squeeze { 90% { transform: none; animation-timing-function: ease-in; } 93% { transform: translateY(3px) scaleY(0.8) } 100% { animation-timing-function: ease-out; } } `}
    </style>
    <path
      className='eye-1'
      stroke={color}
      strokeWidth='1.5'
      d='M19.195 11.31c.325.41.325.97 0 1.38-1.114 1.4-3.916 4.45-7.195 4.45-3.28 0-6.08-3.05-7.195-4.45a1.097 1.097 0 010-1.38C5.92 9.91 8.721 6.86 12 6.86c3.28 0 6.08 3.05 7.195 4.45z'
    ></path>
    <circle
      className='eye-2'
      cx='12'
      cy='12'
      r='1.972'
      stroke={secondaryColor}
      strokeWidth='1.5'
    ></circle>
  </svg>
)

export const EyeOff: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
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
      {`.eye-off { animation: eye-off ${speed}s infinite cubic-bezier(0.99, -0.1, 0.01, 1.02) alternate; stroke-dashoffset: 100; stroke-dasharray: 100; } @keyframes eye-off { to { stroke-dashoffset: 0; } } `}
    </style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M19.195 11.31c.325.41.325.97 0 1.38-1.114 1.4-3.916 4.45-7.195 4.45-3.28 0-6.08-3.05-7.195-4.45a1.097 1.097 0 010-1.38C5.92 9.91 8.721 6.86 12 6.86c3.28 0 6.08 3.05 7.195 4.45z'
    ></path>
    <circle cx='12' cy='12' r='1.972' stroke={color} strokeWidth='1.5'></circle>
    <path
      className='eye-off'
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M18.514 5.487L5.487 18.514'
    ></path>
  </svg>
)

export const Flash: React.FC<Omit<IconAnimatedComponentProps, 'secondaryColor'>> = ({
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
    <style>
      {
        '@keyframes splash{0%{transform:scale(.2);opacity:.8}80%{transform:scale(1.2);opacity:0}to{transform:scale(2.2);opacity:0}}'
      }
    </style>
    <path
      fill={color}
      d='M13.295 10.769l2.552-5.787-7.979 7.28 3.254.225-3.353 6.362 8.485-7.388-2.959-.692z'
      style={{
        animation: `splash ${speed}s cubic-bezier(.165,.84,.44,1) infinite both`,
        transformOrigin: 'center center',
      }}
    ></path>
  </svg>
)

export const Heart: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes pulsate{0%,to{transform:scale(1)}50%{transform:scale(.9)}}'}</style>
    <g
      style={{
        animation: `pulsate ${speed}s ease-in-out infinite both`,
        transformOrigin: 'center center',
      }}
      strokeWidth='1.5'
    >
      <path
        stroke={color}
        d='M11.515 6.269l.134.132a.5.5 0 00.702 0l.133-.132A4.44 4.44 0 0115.599 5c.578 0 1.15.112 1.684.33a4.41 4.41 0 011.429.939c.408.402.733.88.954 1.406a4.274 4.274 0 010 3.316 4.331 4.331 0 01-.954 1.405l-6.36 6.259a.5.5 0 01-.702 0l-6.36-6.259A4.298 4.298 0 014 9.333c0-1.15.464-2.252 1.29-3.064A4.439 4.439 0 018.401 5c1.168 0 2.288.456 3.114 1.269z'
      ></path>
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.5 7.5c.802.304 1.862 1.43 2 2'
      ></path>
    </g>
  </svg>
)

export const Image: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
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
    <style>
      {
        '@keyframes slide{0%{transform:translateX(0)}to{transform:translateX(5.5px) translateY(-1px)}}'
      }
    </style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8z'
    ></path>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M4.221 17.607c.498-.603.767-.816 1.263-1.426.944-1.169 1.58-1.507 2.287-1.21.287.123.575.308.87.503.79.523 1.888 1.24 3.334.461.994-.544 1.57-1.477 2.07-2.286.206-.329.4-.657.627-.954.235-.308 1.107-1.271 2.234-.586.719.432 1.314.915 1.96 1.54.247.24.433.614.55.905.352.88.457 1.372.457 2.488'
    ></path>
    <path
      stroke={secondaryColor}
      strokeWidth='1.33'
      d='M8.647 11.032c.977 0 1.773-.796 1.773-1.773 0-.977-.796-1.773-1.773-1.773-.978 0-1.773.796-1.773 1.773 0 .977.795 1.773 1.773 1.773'
      style={{
        transformOrigin: 'center',
        animation: `slide ${speed}s cubic-bezier(.86,0,.07,1) infinite alternate-reverse both`,
      }}
    ></path>
  </svg>
)

export const Input: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes blink{0%,50%,to{opacity:1}25%,75%{opacity:0}}'}</style>
    <rect width='14' height='8' x='5' y='8' stroke={color} strokeWidth='1.5' rx='1'></rect>
    <path
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M7.593 10.2v3.6'
      style={{ animation: `blink ${speed}s infinite both` }}
    ></path>
  </svg>
)

export const Link: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1.5,
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
    <style>
      {`.link-1 { animation: link-1 ${speed}s cubic-bezier(0.860, 0.000, 0.070, 1.000) infinite alternate both; } @keyframes link-1 { 0% { transform: translateX(0px); } 100% { transform: translateX(2px); } } .link-1-2 { animation: link-1-2 ${speed}s cubic-bezier(0.860, 0.000, 0.070, 1.000) infinite alternate both; } @keyframes link-1-2 { 0% { transform: translateX(0px); } 100% { transform: translateX(-2px); } }`}
    </style>
    <path
      className='link-1'
      d='M10.9218 9.01421H6.60314C6.12159 9.01421 5.64697 9.17948 5.31651 9.52974C3.8978 11.0335 3.65821 12.7201 5.31564 14.4709C5.64624 14.8201 6.12116 14.9858 6.60205 14.9858H10.9218'
      stroke={color}
      strokeWidth='1.5'
    ></path>
    <path
      className='link-1-2'
      d='M13.0782 14.9858H17.3969C17.8784 14.9858 18.353 14.8205 18.6835 14.4703C20.1022 12.9665 20.3418 11.2799 18.6844 9.52915C18.3538 9.17993 17.8788 9.01424 17.398 9.01424H13.0782'
      stroke={color}
      strokeWidth='1.5'
    ></path>
    <path
      d='M8.73503 11.9567H15.2649'
      stroke={secondaryColor}
      strokeWidth='1.5'
      strokeLinecap='round'
    ></path>
  </svg>
)

export const LinkOff: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes check { to { stroke-dashoffset: 0; } }'}</style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M10.922 9.014H6.603c-.481 0-.956.165-1.286.516-1.42 1.504-1.659 3.19-.001 4.94.33.35.805.516 1.286.516h4.32m2.156 0h4.319c.481 0 .956-.166 1.287-.516 1.418-1.504 1.658-3.19 0-4.94-.33-.35-.805-.516-1.286-.516h-4.32'
    ></path>
    <path stroke={color} strokeLinecap='round' strokeWidth='1.5' d='M8.735 11.957h6.53'></path>
    <path
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M18.514 5.487L5.487 18.514'
      style={{ animation: `check ${speed}s infinite cubic-bezier(.99,-.1,.01,1.02) alternate` }}
      strokeDashoffset='100'
      strokeDasharray='100'
    ></path>
  </svg>
)

export const Location: React.FC<IconAnimatedComponentProps> = ({
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
      {'@keyframes slide-right{0%{transform:translateY(0)}to{transform:translateY(-2px)}}'}
    </style>
    <g
      style={{
        animation: `slide-right ${speed}s cubic-bezier(.75,.02,.2,1.06) infinite alternate both`,
      }}
      strokeWidth='1.5'
    >
      <path
        stroke={color}
        d='M17 10.193c0 2.867-4.5 8.307-5 8.307s-5-5.44-5-8.307C7 7.325 9.239 5 12 5s5 2.325 5 5.193z'
      ></path>
      <circle cx='12' cy='10' r='2' stroke={secondaryColor}></circle>
    </g>
  </svg>
)

export const Lock: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes lock{0%{transform:translateY(-2px)}to{transform:translateY(0)}}'}</style>
    <path
      fill={secondaryColor}
      d='M15.236 10.811a.736.736 0 01-.736-.736V8.811a2.5 2.5 0 00-5 0v5H8v-5a4 4 0 018 0v1.236a.764.764 0 01-.764.764z'
      style={{
        animation: `lock ${speed}s cubic-bezier(1,-.43,0,1.29) both infinite alternate-reverse`,
      }}
    ></path>
    <path
      fill='#fff'
      d='M6.6 13.704a3 3 0 013-3h4.8a3 3 0 013 3v3a3 3 0 01-3 3H9.6a3 3 0 01-3-3v-3z'
    ></path>
    <path
      fill={color}
      d='M9.6 11.454h4.8v-1.5H9.6v1.5zm7.05 2.25v3h1.5v-3h-1.5zm-2.25 5.25H9.6v1.5h4.8v-1.5zm-7.05-2.25v-3h-1.5v3h1.5zm2.25 2.25a2.25 2.25 0 01-2.25-2.25h-1.5a3.75 3.75 0 003.75 3.75v-1.5zm7.05-2.25a2.25 2.25 0 01-2.25 2.25v1.5a3.75 3.75 0 003.75-3.75h-1.5zm-2.25-5.25a2.25 2.25 0 012.25 2.25h1.5a3.75 3.75 0 00-3.75-3.75v1.5zm-4.8-1.5a3.75 3.75 0 00-3.75 3.75h1.5a2.25 2.25 0 012.25-2.25v-1.5zm1.543 5.198a.857.857 0 011.714 0v.104a.857.857 0 11-1.714 0v-.104z'
    ></path>
  </svg>
)

export const LogIn: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
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
      {`.login { animation: login-right ${speed}s cubic-bezier(1, -0.17, 0.29, 0.99) infinite alternate both; } @keyframes login-right { 0% { transform: translateX(0); } 100% { transform: translateX(2px); } } `}
    </style>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M9.083 14.508V17a2.5 2.5 0 002.5 2.5h5a2.5 2.5 0 002.5-2.5V7a2.5 2.5 0 00-2.5-2.5h-5a2.5 2.5 0 00-2.5 2.5v2.563'
    ></path>
    <path
      className='login'
      fill={secondaryColor}
      d='M4.917 11.25a.75.75 0 000 1.5v-1.5zm8.66 1.5a.75.75 0 000-1.5v1.5zm-2.552 1.216a.75.75 0 001.054 1.068l-1.054-1.068zM14.083 12l.527.534a.75.75 0 000-1.068l-.527.534zM12.08 8.966a.75.75 0 00-1.054 1.068l1.054-1.068zM4.917 12.75h8.66v-1.5h-8.66v1.5zm7.162 2.284l2.531-2.5-1.054-1.068-2.53 2.5 1.053 1.068zm2.531-3.568l-2.53-2.5-1.055 1.068 2.531 2.5 1.054-1.068z'
    ></path>
  </svg>
)

export const LogOut: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
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
      {`.logout { animation: logout-right ${speed}s cubic-bezier(1, -0.17, 0.29, 0.99) infinite alternate both; } @keyframes logout-right { 0% { transform: translateX(0); } 100% { transform: translateX(2px); } } `}
    </style>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M14.5 14.508V17a2.5 2.5 0 01-2.5 2.5H7A2.5 2.5 0 014.5 17V7A2.5 2.5 0 017 4.5h5A2.5 2.5 0 0114.5 7v2.563'
    ></path>
    <path
      className='logout'
      fill={secondaryColor}
      d='M10.333 12.75a.75.75 0 010-1.5v1.5zm8.66-1.5a.75.75 0 010 1.5v-1.5zm-2.551-1.216a.75.75 0 111.054-1.068l-1.054 1.068zM19.5 12l.527-.534a.75.75 0 010 1.068L19.5 12zm-2.004 3.034a.75.75 0 11-1.054-1.068l1.054 1.068zm-7.163-3.784h8.66v1.5h-8.66v-1.5zm7.163-2.284l2.531 2.5-1.054 1.068-2.531-2.5 1.054-1.068zm2.531 3.568l-2.531 2.5-1.054-1.068 2.531-2.5 1.054 1.068z'
    ></path>
  </svg>
)

export const Mail: React.FC<IconAnimatedComponentProps> = ({
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
        '@keyframes open{0%{transform:translateX(10px) scale(0);transform-origin:50% 100%}to{transform:scale(1);transform-origin:50% 100%}}'
      }
    </style>
    <rect width='12' height='10' x='6' y='8.804' stroke={color} strokeWidth='1.5' rx='2'></rect>
    <path
      fill='#fff'
      stroke={secondaryColor}
      strokeWidth='1.5'
      d='M9 6.196a1 1 0 011-1h4a1 1 0 011 1v5.082a1 1 0 01-.37.777l-2.006 1.628a1 1 0 01-1.263-.002l-1.993-1.626A1 1 0 019 11.28V6.196z'
      style={{ animation: `open ${speed}s cubic-bezier(.49,.39,.35,1.06) both infinite` }}
    ></path>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M8.465 11.413l3.573 2.783 3.497-2.783'
    ></path>
  </svg>
)

export const Minus: React.FC<IconAnimatedComponentProps> = ({
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
        '@keyframes bounce{0%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}}'
      }
    </style>
    <path
      fill={secondaryColor}
      fillRule='evenodd'
      d='M7.994 12a.75.75 0 01.75-.75h6.512a.75.75 0 010 1.5H8.744a.75.75 0 01-.75-.75z'
      clipRule='evenodd'
      style={{
        animation: `bounce ${speed}s ${speed}s infinite both`,
        transformOrigin: 'center center',
      }}
    ></path>
    <rect width='16' height='16' x='4' y='4' stroke={color} strokeWidth='1.5' rx='2.075'></rect>
  </svg>
)

export const Plus: React.FC<IconAnimatedComponentProps> = ({
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
        '@keyframes bounce{0%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}}'
      }
    </style>
    <path
      fill={secondaryColor}
      fillRule='evenodd'
      d='M12.75 8.744a.75.75 0 00-1.5 0v2.506H8.744a.75.75 0 000 1.5h2.506v2.506a.75.75 0 001.5 0V12.75h2.506a.75.75 0 000-1.5H12.75V8.744z'
      clipRule='evenodd'
      style={{ animation: `bounce ${speed}s 1s infinite both`, transformOrigin: 'center center' }}
    ></path>
    <rect width='16' height='16' x='4' y='4' stroke={color} strokeWidth='1.5' rx='2.075'></rect>
  </svg>
)

export const Refresh: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes rotate-center{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'}</style>
    <g
      style={{
        animation: `rotate-center ${speed}s ease-in-out infinite both`,
        transformOrigin: 'center center',
      }}
      strokeWidth='1.5'
    >
      <path stroke={color} strokeLinecap='round' d='M15.473 8.41a5 5 0 10.939 5.952'></path>
      <path
        fill={secondaryColor}
        stroke={secondaryColor}
        d='M17.195 10.373l-2.308-.347a.065.065 0 01-.018-.005.023.023 0 01-.007-.005.056.056 0 01-.015-.024.056.056 0 01-.002-.03.03.03 0 01.002-.007.069.069 0 01.013-.015l1.995-1.964a.066.066 0 01.015-.012.027.027 0 01.007-.003.056.056 0 01.029.003c.012.004.02.01.024.015a.027.027 0 01.005.007.069.069 0 01.004.019l.313 2.312a.047.047 0 01-.002.023.053.053 0 01-.013.02.053.053 0 01-.02.012.046.046 0 01-.022.001z'
      ></path>
    </g>
  </svg>
)

export const RefreshTwo: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
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
    <style>{'@keyframes rotate-center{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'}</style>
    <g
      style={{
        animation: `rotate-center ${speed}s ease-in-out infinite both`,
        transformOrigin: 'center center',
      }}
      strokeWidth='1.5'
    >
      <path
        stroke={color}
        strokeLinecap='round'
        d='M6.883 11.778a5 5 0 018.473-3.597m1.761 4.131a5 5 0 01-8.473 3.597'
      ></path>
      <path
        fill={secondaryColor}
        stroke={secondaryColor}
        d='M17.078 10.145l-2.308-.347a.066.066 0 01-.018-.005.026.026 0 01-.007-.005.056.056 0 01-.015-.024.056.056 0 01-.002-.03l.003-.007a.069.069 0 01.012-.015l1.995-1.964a.064.064 0 01.015-.012.028.028 0 01.007-.003.056.056 0 01.029.003c.012.004.02.01.024.015a.03.03 0 01.005.007.069.069 0 01.004.019l.313 2.312a.046.046 0 01-.015.042.045.045 0 01-.043.014zm-10.156 3.8l2.308.348.018.005a.03.03 0 01.007.005c.004.003.01.011.015.024a.056.056 0 01.002.029.027.027 0 01-.003.007.065.065 0 01-.012.015l-1.995 1.965a.072.072 0 01-.015.012.03.03 0 01-.007.003.056.056 0 01-.029-.003.057.057 0 01-.024-.016.028.028 0 01-.005-.006.066.066 0 01-.004-.019l-.313-2.312a.046.046 0 01.002-.023.053.053 0 01.013-.02.052.052 0 01.02-.012.046.046 0 01.022-.002z'
      ></path>
    </g>
  </svg>
)

export const Search: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
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
    <style>
      {
        '@keyframes flipping{0%{transform:rotate3d(1,1,0,0deg)}to{transform:rotate3d(1,1,0,180deg)}}'
      }
    </style>
    <g
      style={{
        animation: `flipping ${speed}s cubic-bezier(.96,-.2,0,1.29) both infinite alternate-reverse`,
      }}
    >
      <path
        fill={color}
        fillRule='evenodd'
        d='M5.71 11.025a5.25 5.25 0 1010.5 0 5.25 5.25 0 00-10.5 0zm5.25-7a7 7 0 100 14 7 7 0 000-14z'
        clipRule='evenodd'
      ></path>
      <rect
        width='1.839'
        height='3.677'
        x='16.139'
        y='17.375'
        fill={secondaryColor}
        rx='.2'
        transform='rotate(-45 16.14 17.375)'
      ></rect>
    </g>
  </svg>
)

export const Send: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
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
      {`.send { animation: send ${speed}s cubic-bezier(1, -0.47, 0.01, 1.37) infinite both; } @keyframes send { 0% { transform: translateY(0) translateX(0); } 100% { transform: translateY(-20px) translateX(20px); } } `}
    </style>
    <g className='send'>
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.407 14.593l3.058-3.058'
      ></path>
      <path
        stroke={color}
        strokeWidth='1.5'
        d='M15.564 7.908a.432.432 0 01.528.528l-2.677 10.175a.432.432 0 01-.724.195L5.194 11.31a.432.432 0 01.195-.724l10.175-2.677z'
      ></path>
    </g>
  </svg>
)

export const Setting: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes rotate{0%{transform:rotateZ(0)}to{transform:rotateZ(360deg)}}'}</style>
    <g
      style={{
        animation: `rotate ${speed}s cubic-bezier(.7,-.03,.26,1.05) both infinite`,
        transformOrigin: 'center center',
      }}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    >
      <path
        stroke={color}
        d='M5.262 15.329l.486.842a1.49 1.49 0 002.035.55 1.486 1.486 0 012.036.529c.128.216.197.463.2.714a1.493 1.493 0 001.493 1.536h.979a1.486 1.486 0 001.485-1.493 1.493 1.493 0 011.493-1.471c.252.002.498.071.714.2a1.493 1.493 0 002.036-.55l.521-.857a1.493 1.493 0 00-.542-2.036 1.493 1.493 0 010-2.586c.71-.41.952-1.318.543-2.028l-.493-.85a1.493 1.493 0 00-2.036-.579 1.479 1.479 0 01-2.029-.543 1.428 1.428 0 01-.2-.714c0-.825-.668-1.493-1.492-1.493h-.98c-.82 0-1.488.664-1.492 1.486a1.485 1.485 0 01-1.493 1.493 1.521 1.521 0 01-.714-.2 1.493 1.493 0 00-2.036.542l-.514.858a1.486 1.486 0 00.543 2.035 1.486 1.486 0 01.543 2.036c-.13.226-.317.413-.543.543a1.493 1.493 0 00-.543 2.028v.008z'
        clipRule='evenodd'
      ></path>
      <path
        stroke={secondaryColor}
        d='M12.044 10.147a1.853 1.853 0 100 3.706 1.853 1.853 0 000-3.706z'
      ></path>
    </g>
  </svg>
)

export const SettingTwo: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes rotate{0%{transform:rotateZ(0)}to{transform:rotateZ(360deg)}}'}</style>
    <g
      style={{
        animation: `rotate ${speed}s cubic-bezier(.7,-.03,.26,1.05) both infinite alternate-reverse`,
        transformOrigin: 'center center',
      }}
      strokeWidth='1.5'
    >
      <circle cx='12' cy='12' r='2' stroke={secondaryColor}></circle>
      <path
        stroke={color}
        d='M19.785 11.515a1 1 0 01-.014.963l-1.703 3-1.778 3.03a1 1 0 01-.863.494H8.484a1 1 0 01-.86-.49l-1.898-3.2-1.578-2.82a1 1 0 01.003-.982l1.832-3.23 1.642-2.79a1 1 0 01.862-.493h6.961a1 1 0 01.846.467l1.774 2.816 1.717 3.234z'
      ></path>
    </g>
  </svg>
)

export const Share: React.FC<IconAnimatedComponentProps> = ({
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
      {'@keyframes slide-right{0%{transform:translateY(0)}to{transform:translateY(-2px)}}'}
    </style>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M14.508 9.5H17a2.5 2.5 0 012.5 2.5v5a2.5 2.5 0 01-2.5 2.5H7A2.5 2.5 0 014.5 17v-5A2.5 2.5 0 017 9.5h2.563'
    ></path>
    <path
      fill={secondaryColor}
      d='M12.75 13.667a.75.75 0 01-1.5 0h1.5zm-1.5-8.66a.75.75 0 011.5 0h-1.5zm-1.216 2.551a.75.75 0 11-1.068-1.054l1.068 1.054zM12 4.5l-.534-.527a.75.75 0 011.068 0L12 4.5zm3.034 2.004a.75.75 0 11-1.068 1.054l1.068-1.054zm-3.784 7.163v-8.66h1.5v8.66h-1.5zM8.966 6.504l2.5-2.531 1.068 1.054-2.5 2.531-1.068-1.054zm3.568-2.531l2.5 2.531-1.068 1.054-2.5-2.531 1.068-1.054z'
      style={{
        animation: `slide-right ${speed}s cubic-bezier(1,-.17,.29,.99) infinite alternate both`,
      }}
    ></path>
  </svg>
)

export const ShieldCheck: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes check { to { stroke-dashoffset: 0; } }'}</style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M5.9 8.053a2 2 0 011.507-1.938l4.683-1.192 4.517 1.184A2 2 0 0118.1 8.042v3.75a7 7 0 01-3.98 6.314l-.755.361a3 3 0 01-2.557.015l-.856-.398A7 7 0 015.9 11.736V8.053z'
    ></path>
    <path
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M9.215 12.052l1.822 1.805 3.748-3.714'
      style={{
        animation: `check ${speed}s infinite cubic-bezier(.99,-.1,.01,1.02)`,
      }}
      strokeDashoffset='100'
      strokeDasharray='100'
    ></path>
  </svg>
)

export const Slider: React.FC<IconAnimatedComponentProps> = ({
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
      {`.sliders { animation: sliders ${speed}s cubic-bezier(0.860, 0.000, 0.070, 1.000) infinite alternate both; } @keyframes sliders { 0% { transform: translateX(0px); } 100% { transform: translateX(10px); } } .sliders-2 { animation: sliders-2 ${speed}s cubic-bezier(0.860, 0.000, 0.070, 1.000) infinite alternate both; } @keyframes sliders-2 { 0% { transform: translateX(0px); } 100% { transform: translateX(-10px); } }`}
    </style>
    <path stroke={color} strokeLinecap='round' strokeWidth='1.5' d='M6 8.746h12M6 15.317h12'></path>
    <circle
      className='sliders'
      cx='7.5'
      cy='8.746'
      r='1.5'
      fill={secondaryColor}
      stroke={secondaryColor}
      strokeWidth='1.5'
    ></circle>
    <circle
      className='sliders-2'
      cx='16.5'
      cy='15.254'
      r='1.5'
      fill={secondaryColor}
      stroke={secondaryColor}
      strokeWidth='1.5'
    ></circle>
  </svg>
)

export const Star: React.FC<Omit<IconAnimatedComponentProps, 'secondaryColor'>> = ({
  size = 24,
  color = 'currentColor',
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
        '@keyframes jello{0%,to{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}}'
      }
    </style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M11.081 5.141c.347-.807 1.491-.807 1.838 0l1.274 2.97a1 1 0 00.828.601l3.218.295c.875.08 1.229 1.168.568 1.748l-2.43 2.13a1 1 0 00-.316.972l.714 3.152c.194.857-.732 1.53-1.487 1.08l-2.776-1.653a1 1 0 00-1.024 0l-2.776 1.653c-.755.45-1.681-.223-1.487-1.08l.715-3.152a1 1 0 00-.317-.973l-2.43-2.13c-.66-.579-.307-1.667.568-1.747l3.218-.295a1 1 0 00.828-.601l1.274-2.97z'
      style={{
        animation: `jello ${speed}s both infinite cubic-bezier(.69,.34,.09,.6)`,
        transformOrigin: 'center',
      }}
    ></path>
  </svg>
)

export const Stopwatch: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'}</style>
    <rect
      width='13.262'
      height='13.262'
      x='5.369'
      y='6.554'
      stroke={color}
      strokeWidth='1.5'
      rx='6.631'
    ></rect>
    <path
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M12.018 13.185V8.908'
      style={{
        animation: `rotate ${speed}s cubic-bezier(.73,.07,.57,.68) infinite both`,
        transformOrigin: '50% 55%',
      }}
    ></path>
    <path stroke={color} strokeLinecap='round' strokeWidth='1.5' d='M10.5 4.185h3'></path>
  </svg>
)

export const Toggle: React.FC<IconAnimatedComponentProps> = ({
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
      {`.toggle { animation: toggle ${speed}s cubic-bezier(0.860, 0.000, 0.070, 1.000) infinite alternate-reverse both; } @keyframes toggle { 0% { transform: translateX(0px); fill: none; } 100% { transform: translateX(5.5px); fill: ${secondaryColor}; } } `}
    </style>
    <rect width='16' height='10' x='4' y='7' stroke={color} strokeWidth='1.5' rx='5'></rect>
    <circle
      className='toggle'
      cx='9'
      cy='12'
      r='2'
      stroke={secondaryColor}
      strokeWidth='1.5'
    ></circle>
  </svg>
)

export const Trash: React.FC<IconAnimatedComponentProps> = ({
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
    <style>{'@keyframes rotate-tr{0%{transform:rotate(0)}to{transform:rotate(20deg)}}'}</style>
    <path
      fill={color}
      d='M16.773 10.083a.75.75 0 00-1.49-.166l1.49.166zm-1.535 7.027l.745.083-.745-.083zm-6.198 0l-.745.083.745-.083zm-.045-7.193a.75.75 0 00-1.49.166l1.49-.166zm5.249 7.333h-4.21v1.5h4.21v-1.5zm1.038-7.333l-.79 7.11 1.491.166.79-7.11-1.49-.166zm-5.497 7.11l-.79-7.11-1.49.166.79 7.11 1.49-.165zm.249.223a.25.25 0 01-.249-.222l-1.49.165a1.75 1.75 0 001.739 1.557v-1.5zm4.21 1.5c.892 0 1.64-.67 1.74-1.557l-1.492-.165a.25.25 0 01-.248.222v1.5z'
    ></path>
    <path
      fill={secondaryColor}
      fillRule='evenodd'
      d='M11 6a1 1 0 00-1 1v.25H7a.75.75 0 000 1.5h10a.75.75 0 000-1.5h-3V7a1 1 0 00-1-1h-2z'
      clipRule='evenodd'
      style={{
        animation: `rotate-tr ${speed}s cubic-bezier(1,-.28,.01,1.13) infinite alternate-reverse both`,
        transformOrigin: 'right center',
      }}
    ></path>
  </svg>
)

export const Trending: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 2,
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
      {`.trending { animation: trending ${speed}s infinite cubic-bezier(0.99, -0.1, 0.01, 1.02); stroke-dashoffset: 100; stroke-dasharray: 100; } @keyframes trending { 100% { stroke-dashoffset: 0; } }`}
    </style>
    <rect width='16' height='16' x='4' y='4' stroke={color} strokeWidth='1.5' rx='2.075'></rect>
    <path
      className='trending'
      stroke={secondaryColor}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M7.5 15l2.658-4.5 3.158 3.5L16.5 9'
    ></path>
  </svg>
)

export const User: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
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
      {` .user-1 { animation: user-1 ${speed}s cubic-bezier(0.83, -0.07, 0, 1.04) both infinite alternate-reverse; } @keyframes user-1 { 0% { transform: translateY(0) translateX(0); } 100% { transform: translateY(-1px) translateX(-2px); } } `}
    </style>
    <circle
      className='user-1'
      cx='12'
      cy='8.245'
      r='2.5'
      stroke={secondaryColor}
      strokeWidth='1.5'
    ></circle>
    <ellipse cx='12' cy='15.926' stroke={color} strokeWidth='1.5' rx='5' ry='2.329'></ellipse>
  </svg>
)

export const UserTwo: React.FC<IconAnimatedComponentProps> = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 1,
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
      {`.user-2 { animation: user-2 ${speed}s cubic-bezier(0.83, -0.07, 0, 1.04) both infinite alternate-reverse; } @keyframes user-2 { 0% { transform: translateY(0) translateX(0); } 100% { transform: translateY(-1px) translateX(2px); } }`}
    </style>
    <circle
      className='user-2'
      cx='12'
      cy='7.858'
      r='2.5'
      stroke={secondaryColor}
      strokeWidth='1.5'
    ></circle>
    <rect width='10' height='4' x='7' y='13.926' stroke={color} strokeWidth='1.5' rx='2'></rect>
  </svg>
)

export const ZoomIn: React.FC<IconAnimatedComponentProps> = ({
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
        '@keyframes scale-in-center{0%{transform:scale(0);opacity:1}to{transform:scale(1);opacity:1}}'
      }
    </style>
    <g
      style={{
        animation: `scale-in-center ${speed}s cubic-bezier(.25,.46,.45,.94) infinite both`,
        transformOrigin: 'center',
      }}
      strokeWidth='1.5'
    >
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M11.5 9v4m-2-2h4'
      ></path>
      <rect width='12' height='12' x='5.5' y='5' stroke={color} rx='6'></rect>
      <path stroke={color} strokeLinecap='round' d='M15.5 16l3 3'></path>
    </g>
  </svg>
)

export const ZoomOut: React.FC<IconAnimatedComponentProps> = ({
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
        '@keyframes scale-out-center{0%{transform:scale(1);opacity:1}to{transform:scale(0);opacity:1}}'
      }
    </style>
    <g
      style={{
        animation: `scale-out-center ${speed}s cubic-bezier(.55,.085,.68,.53) infinite both`,
        transformOrigin: 'center',
      }}
      strokeWidth='1.5'
    >
      <path
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9.5 11h4'
      ></path>
      <rect width='12' height='12' x='5.5' y='5' stroke={color} rx='6'></rect>
      <path stroke={color} strokeLinecap='round' d='M15.5 16l3 3'></path>
    </g>
  </svg>
)
