/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const Balloon = ({
  size = 24,
  color = 'currentColor',
  secondaryColor = '#265BFF',
  sx = {},
  className = '',
  speed = 5,
  delay = 2,
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
      {`@keyframes balloon-fly{0%{transform:translateY(0);opacity:1}to{transform:translateY(-10px);opacity:0}}.prefix__balloon-fly{animation:balloon-fly ${speed}s linear infinite both}`}
    </style>
    <path
      className='prefix__balloon-fly'
      style={{ animationDelay: `${delay}s` }}
      fill={color}
      fillRule='evenodd'
      d='M7.724 9.46a2.317 2.317 0 014.634 0c0 .668-.28 1.501-.757 2.164-.485.675-1.055 1.02-1.56 1.02-.505 0-1.075-.345-1.56-1.02-.477-.663-.757-1.496-.757-2.163zm2.317-3.816A3.817 3.817 0 006.224 9.46c0 1.026.407 2.16 1.04 3.04.538.748 1.329 1.427 2.298 1.6l-.086.23c-.25.667-.07 1.402.474 1.917.33.313.374.785.107 1.141l-.359.479c-.172.23-.1.54.16.693.262.152.614.088.787-.142l.358-.479c.556-.741.464-1.722-.223-2.373a.847.847 0 01-.227-.921l.226-.604c.851-.238 1.55-.86 2.04-1.542.632-.88 1.039-2.013 1.039-3.04a3.817 3.817 0 00-3.817-3.816z'
      clipRule='evenodd'
    ></path>
    <path
      className='prefix__balloon-fly'
      fill={secondaryColor}
      fillRule='evenodd'
      d='M15.626 10.167a1.508 1.508 0 113.016 0c0 .435-.183.977-.493 1.409-.316.438-.686.663-1.015.663-.33 0-.7-.225-1.015-.664-.31-.431-.493-.973-.493-1.408zm1.508-2.484a2.484 2.484 0 00-2.484 2.484c0 .668.264 1.406.676 1.979.35.487.865.929 1.496 1.042l-.056.149c-.163.434-.045.913.308 1.248.215.204.244.51.07.742l-.233.312c-.113.15-.066.352.104.45a.4.4 0 00.511-.091l.234-.312c.362-.482.302-1.12-.145-1.544a.551.551 0 01-.148-.6l.147-.393c.554-.155 1.008-.56 1.327-1.003.412-.573.677-1.311.677-1.979a2.484 2.484 0 00-2.484-2.484z'
      clipRule='evenodd'
    ></path>
  </svg>
)

export const Cake = ({
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
        '@keyframes cake{10%,30%,50%,70%,90%{transform:translate3d(-.5px,0,0)}20%,40%,60%,80%{transform:translate3d(.5px,0,0)}}'
      }
    </style>
    <path
      fill={color}
      fillRule='evenodd'
      d='M8.926 10.644h7.995a1.5 1.5 0 011.5 1.5v.547l-.99 1.048a.482.482 0 01-.725-.018l-.613-.717a1.446 1.446 0 00-2.216-.01l-.59.68a.482.482 0 01-.745-.01l-.503-.61a1.447 1.447 0 00-2.248-.014l-.584.69a.481.481 0 01-.72.028l-1.061-1.08v-.534a1.5 1.5 0 011.5-1.5zm-3 1.974v3.526a3 3 0 003 3h7.995a3 3 0 003-3v-4a3 3 0 00-3-3H8.926a3 3 0 00-3 3v.465l-.005.004.005.005zm1.5 1.526l.369.376a1.444 1.444 0 002.158-.086l.583-.69a.482.482 0 01.75.004l.503.61a1.446 1.446 0 002.234.03l.59-.678a.482.482 0 01.739.003l.612.716a1.445 1.445 0 002.174.057l.283-.3v1.958a1.5 1.5 0 01-1.5 1.5H8.926a1.5 1.5 0 01-1.5-1.5v-2z'
      clipRule='evenodd'
    ></path>
    <path
      fill={secondaryColor}
      d='M12.488 3.853a.5.5 0 01.866 0l.878 1.52a1.513 1.513 0 11-2.622 0l.878-1.52z'
      style={{ animation: `cake ${speed}s ease infinite` }}
    ></path>
  </svg>
)

export const Candle = ({
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
        '@keyframes candle{10%,30%,50%,70%,90%{transform:translate3d(-.5px,0,0)}20%,40%,60%,80%{transform:translate3d(.5px,0,0)}}'
      }
    </style>
    <path
      fill={color}
      d='M11.5 10.326a.5.5 0 00-.5.5v7.012h-1a.59.59 0 000 1.18h6a.59.59 0 100-1.18h-1v-7.012a.5.5 0 00-.5-.5h-3z'
    ></path>
    <path
      fill={secondaryColor}
      d='M12.567 5.272a.5.5 0 01.866 0l.878 1.52a1.513 1.513 0 11-2.622 0l.878-1.52z'
      style={{ animation: `candle ${speed}s ease infinite` }}
    ></path>
  </svg>
)

export const Champagne = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
  speed = 1,
}) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <style>
      {
        '@keyframes glass-1{0%{transform:rotate(0)}to{transform:rotate(-20deg)}}@keyframes glass-2{0%{transform:rotate(0)}to{transform:rotate(20deg)}}'
      }
    </style>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.081 6.54h-.75v4.627a3.251 3.251 0 002.562 3.177l.005 2.76h-.256a.75.75 0 100 1.5H9.642a.75.75 0 000-1.5h-.244l-.005-2.79a3.251 3.251 0 002.438-3.147V6.54h-5.75zm.75 4.627V8.04h3.5v3.127a1.75 1.75 0 11-3.5 0z'
      fill={color}
      style={{
        animation: `glass-2 ${speed}s cubic-bezier(1,-.28,.01,1.13) infinite alternate-reverse both`,
        transformOrigin: 'center center',
      }}
    ></path>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.934 6.54h-.75v4.627a3.251 3.251 0 002.561 3.177l.005 2.76h-.255a.75.75 0 100 1.5h2a.75.75 0 000-1.5h-.245l-.005-2.79a3.251 3.251 0 002.438-3.147V6.54h-5.75zm.75 4.627V8.04h3.5v3.127a1.75 1.75 0 11-3.5 0z'
      fill={color}
      style={{
        animation: `glass-1 ${speed}s cubic-bezier(1,-.28,.01,1.13) infinite alternate-reverse both`,
        transformOrigin: 'center center',
      }}
    ></path>
  </svg>
)

export const Champagne2 = ({
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
        '@keyframes champagne-confetti{0%,50%,60%{opacity:0}to{opacity:1}}@keyframes champagne-bottle{0%{transform:translateY(0) translateX(0)}to{transform:translateY(-.3px) translateX(.3px)}}'
      }
    </style>
    <path
      fill={color}
      fillRule='evenodd'
      d='M13.236 10.104a.5.5 0 00-.691.149l-1.312 2.03c-.89-.218-1.779.016-2.257.66l-.004-.002-1.034 1.601L5.2 18.78a1.27 1.27 0 00.378 1.758l2.135 1.379a1.27 1.27 0 001.757-.378l2.738-4.238 1.035-1.601-.004-.002c.39-.701.24-1.607-.326-2.33l1.312-2.03a.5.5 0 00-.149-.691l-.84-.543zm-1.705 4.647a.32.32 0 01.016.06l-3.333 5.16-1.068-.69 3.334-5.16a.414.414 0 01.06-.01c.13-.01.35.023.588.177s.359.34.403.463z'
      clipRule='evenodd'
      style={{
        animation: `champagne-bottle ${speed}s cubic-bezier(1,-.49,.02,1.07) infinite both`,
      }}
    ></path>
    <g
      style={{
        animation: `champagne-confetti ${speed}s cubic-bezier(.85,.11,.01,.88) infinite both`,
      }}
      fill={secondaryColor}
    >
      <circle cx='12.897' cy='7.048' r='.666'></circle>
      <circle cx='17.528' cy='5.056' r='.333'></circle>
      <rect
        width='.552'
        height='.552'
        x='16.47'
        y='6.597'
        rx='.276'
        transform='rotate(-35.202 16.47 6.597)'
      ></rect>
      <rect
        width='.552'
        height='.552'
        x='16.993'
        y='9.622'
        rx='.276'
        transform='rotate(-35.202 16.993 9.622)'
      ></rect>
      <path
        fillRule='evenodd'
        d='M15.11 3.665a.333.333 0 01.413.227l.153.523c.16.547.189 1.124.087 1.684a2.44 2.44 0 01-.743 1.353l-.227.21a1.1 1.1 0 00-.335.61l-.182.997a.333.333 0 11-.655-.12l.181-.996c.069-.376.258-.72.538-.98l.227-.21a1.77 1.77 0 00.54-.983c.084-.46.06-.931-.071-1.379l-.152-.523a.333.333 0 01.226-.413zm-.077 6.79a.333.333 0 01-.142-.45l.25-.483a3.67 3.67 0 011.101-1.278 2.44 2.44 0 011.472-.465l.31.005a1.1 1.1 0 00.663-.21l.82-.595a.333.333 0 11.391.54l-.819.594c-.31.225-.683.343-1.066.337l-.31-.005a1.774 1.774 0 00-1.07.339 3.004 3.004 0 00-.9 1.045l-.251.484a.333.333 0 01-.45.142z'
        clipRule='evenodd'
      ></path>
    </g>
  </svg>
)

export const Confetti = ({
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
        '@keyframes confetti{0%,50%,60%{opacity:0}to{opacity:1}}@keyframes confetti-prop{0%{transform:translateY(0) translateX(0)}to{transform:translateY(-.5px) translateX(.5px)}}'
      }
    </style>
    <path
      fill={color}
      d='M15.459 14.163l-.471.471.47-.471zm-.38 1.972l-.263-.613.263.613zm-5.918-5.919l-.613-.262.613.262zm1.971-.38l.472-.47-.472.47zm-5.216 7.951l.612.263-.612-.263zm1.592 1.592l.262.613-.262-.613zm-.98-1.33l3.245-7.57-1.225-.525-3.245 7.57 1.225.526zm4.133-7.741l4.327 4.326.942-.943-4.326-4.326-.943.943zm4.155 5.214l-7.57 3.245.524 1.225 7.572-3.245-.526-1.225zm.171-.888a.546.546 0 01-.17.888l.524 1.225a1.879 1.879 0 00.589-3.056l-.942.943zm-5.214-4.155a.546.546 0 01.888-.171l.943-.943a1.879 1.879 0 00-3.056.589l1.225.525zm-4.47 7.046c-.668 1.559.909 3.135 2.467 2.467l-.525-1.225a.546.546 0 01-.717-.717l-1.225-.525z'
      style={{
        animation: `confetti-prop ${speed}s cubic-bezier(1,-.49,.02,1.07) infinite both`,
      }}
    ></path>
    <g
      style={{
        animation: `confetti ${speed}s cubic-bezier(.85,.11,.01,.88) infinite both`,
      }}
      fill={secondaryColor}
    >
      <circle cx='13.505' cy='7.146' r='.666'></circle>
      <circle cx='18.17' cy='7.298' r='.333'></circle>
      <path d='M18.17 11.277l1.09-.768.768 1.089-1.09.768zM15.52 9.83l.45-.317.32.45-.452.319zm-.399-3.894l.544-.384.384.544-.544.384z'></path>
      <path
        fillRule='evenodd'
        d='M17.17 4.814c.185 0 .334.15.334.333v.545c0 .57-.133 1.132-.387 1.642-.237.472-.62.855-1.092 1.091l-.277.139a1.1 1.1 0 00-.492.492l-.453.905a.333.333 0 11-.596-.298l.453-.905c.17-.342.448-.62.79-.79l.277-.139c.343-.172.622-.45.793-.793.209-.417.318-.877.318-1.344v-.545c0-.184.149-.333.333-.333zm-.332 7.816a.333.333 0 01-.334-.334v-.545c0-.57.133-1.131.388-1.64a2.44 2.44 0 011.091-1.092l.277-.139a1.1 1.1 0 00.492-.492l.453-.905a.333.333 0 11.596.298l-.452.905c-.171.342-.449.62-.79.79l-.278.139c-.343.171-.621.45-.793.793a3.003 3.003 0 00-.317 1.343v.546c0 .183-.15.333-.333.333z'
        clipRule='evenodd'
      ></path>
    </g>
  </svg>
)

export const Firework = ({
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
        '@keyframes slide-out-tr{0%{transform:translateY(0) translateX(0);opacity:1}to{transform:translateY(-10px) translateX(10px);opacity:0}}'
      }
    </style>
    <g
      style={{
        animation: `slide-out-tr ${speed}s cubic-bezier(.47,0,.745,.715) infinite both`,
      }}
    >
      <path
        fill={secondaryColor}
        d='M7.824 16.622l.287-.32-.642-.574-.287.321.642.573zM4.66 18.875a.43.43 0 10.642.573l-.642-.573zm2.523-2.826L4.66 18.875l.642.573 2.523-2.826-.642-.573z'
      ></path>
      <path
        fill={color}
        fillRule='evenodd'
        d='M11.586 15.532l.692-3.729-3.574 1.265.557.476-1.922 2.249-.324.379.38.323 1.01.864.378.324.324-.38 1.922-2.248.557.477zm-3.165.53l1.51-1.769.254.216-1.512 1.768-.252-.216z'
        clipRule='evenodd'
      ></path>
    </g>
  </svg>
)

export const GiftBox = ({
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
      {'@keyframes gift-open{0%{transform:translateY(0)}to{transform:translateY(-3px)}}'}
    </style>
    <path
      stroke={color}
      strokeWidth='1.5'
      d='M6.921 12.535h12v4a2 2 0 01-2 2h-8a2 2 0 01-2-2v-4z'
    ></path>
    <path
      fill={secondaryColor}
      fillRule='evenodd'
      d='M10.963 6.487a.717.717 0 011.009.102c.147.18.337.578.428.984.044.2.058.373.044.502-.014.133-.05.165-.051.165 0 0-.038.03-.172.017a1.618 1.618 0 01-.483-.144c-.38-.17-.73-.436-.878-.617a.717.717 0 01.103-1.009zm1.676-.442a1.578 1.578 0 00-2.445 1.996c.211.26.576.538.962.744H8.921a2.75 2.75 0 00-2.75 2.75v1.75h13.5v-1.75a2.75 2.75 0 00-2.75-2.75h-2.235c.386-.206.75-.485.963-.744a1.578 1.578 0 00-2.446-1.996 2.492 2.492 0 00-.282.45 2.497 2.497 0 00-.282-.45zm1.231.544a.717.717 0 011.112.907c-.147.18-.498.446-.878.617a1.619 1.619 0 01-.483.144c-.134.013-.172-.017-.172-.017s-.037-.032-.051-.165c-.014-.13 0-.302.044-.502.091-.406.281-.803.428-.984zm4.301 4.946v.25h-10.5v-.25c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25z'
      clipRule='evenodd'
      style={{
        animation: `gift-open ${speed}s cubic-bezier(0,.32,.45,1.24) infinite alternate both`,
      }}
    ></path>
  </svg>
)
