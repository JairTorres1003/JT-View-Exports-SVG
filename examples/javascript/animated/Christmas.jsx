/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const Candle2 = ({
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
        '@keyframes candle-2{10%,30%,50%,70%,90%{transform:translate3d(-.2px,0,0)}20%,40%,60%,80%{transform:translate3d(.2px,0,0)}}'
      }
    </style>
    <path
      fill={color}
      fillRule='evenodd'
      d='M9.592 10.192l2-1.363c1.66-1.132 3.908.057 3.908 2.065v7.108a2.5 2.5 0 01-2.5 2.5h-2a2.5 2.5 0 01-2.5-2.5v-5.744a2.5 2.5 0 011.092-2.066zm.845 1.24a1 1 0 00-.437.826v1.085l4-2.398v-.05a1 1 0 00-1.563-.827l-2 1.364zM10 16.778v-1.686l4-2.398v1.686l-4 2.398zm.111 1.683a1 1 0 00.889.541h2a1 1 0 001-1V16.13l-3.889 2.331z'
      clipRule='evenodd'
    ></path>
    <path
      fill='#265BFF'
      d='M11.567 3.21a.5.5 0 01.866 0l.878 1.52a1.513 1.513 0 11-2.622 0l.878-1.52z'
      style={{
        animation: `candle-2 ${speed}s ease infinite`,
      }}
    ></path>
  </svg>
)

export const ChristmasSnow = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
  speed = 3,
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
      {`@keyframes snows-ch{0%{opacity:0;transform:translateY(-10%)}50%{opacity:1}80%{opacity:.8}to{transform:translateY(10%);opacity:0}}.prefix__c-snow1{animation:snows-ch ${speed}s infinite both}`}
    </style>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.691 8.811a.51.51 0 01.421-.198.51.51 0 01.44.222l1.507 2.2a.734.734 0 01-.18 1.012l1.053 1.763a.868.868 0 01-.47 1.268l.876 1.157a1.19 1.19 0 01-.949 1.908H8.51v1.366a.51.51 0 11-1.019 0v-1.366H5.61a1.19 1.19 0 01-.948-1.908l.876-1.157a.868.868 0 01-.47-1.268l1.057-1.771a.725.725 0 01-.138-1.025L7.69 8.81zm-.662 2.522l1.06-1.37.923 1.347a.738.738 0 00-.275.737l-.676.205-1.068.322.189-.316a.724.724 0 00-.153-.925zm-.812 2.541l-.157.263c.431.126.688.57.605.998l2.897-.767a.847.847 0 01.378-.231l-.702-1.176-1.19.36-1.831.553zm-.742 2.977l.34-.449a.505.505 0 00.11-.017l3.54-.937c.01.015.02.03.032.044l1.028 1.359a.17.17 0 01-.136.272H5.611a.17.17 0 01-.136-.272zM16.193 5.133a.322.322 0 01.266-.125.322.322 0 01.278.14l.953 1.39a.464.464 0 01-.114.641l.666 1.114a.549.549 0 01-.297.802l.553.732a.752.752 0 01-.6 1.206H16.71v.863a.322.322 0 11-.644 0v-.863h-1.188a.752.752 0 01-.6-1.206l.553-.732a.549.549 0 01-.297-.802l.669-1.12a.459.459 0 01-.088-.647l1.078-1.393zm-.419 1.595l.67-.866.584.851a.466.466 0 00-.174.466l-.427.13-.675.203.119-.2a.458.458 0 00-.097-.584zm-.513 1.606l-.1.166c.273.08.436.36.383.631l1.831-.485a.536.536 0 01.24-.146l-.444-.743-.752.227-1.158.35zm-.47 1.882l.216-.284a.323.323 0 00.07-.01l2.238-.593c.006.01.012.019.02.028l.65.859a.107.107 0 01-.086.172h-3.021a.107.107 0 01-.086-.172z'
      fill={color}
    ></path>
    <circle className='prefix__c-snow1' cx='10.831' cy='3.5' r='.75' fill='#265BFF'></circle>
    <circle
      cx='14.874'
      cy='12.968'
      r='.75'
      fill='#265BFF'
      style={{
        animation: `snows-ch ${speed}s infinite both`,
      }}
    ></circle>
    <circle className='prefix__c-snow1' cx='18' cy='16.75' r='.75' fill='#265BFF'></circle>
    <circle
      cx='19.5'
      cy='5'
      r='.75'
      fill='#265BFF'
      style={{
        animation: `snows-ch ${speed}s infinite both`,
      }}
    ></circle>
    <circle className='prefix__c-snow1' cx='3.75' cy='11.468' r='.75' fill='#265BFF'></circle>
  </svg>
)

export const Gift2 = ({
  size = 24,
  color = 'currentColor',
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
    <style>
      {
        '@keyframes c-gift-slide{0%{transform:translateX(30px);opacity:0}50%{transform:translateX(0);opacity:1}to{transform:translateX(-30px);opacity:1}}'
      }
    </style>
    <g
      style={{
        animation: `c-gift-slide ${speed}s cubic-bezier(.51,-.16,.3,1.27) both infinite`,
      }}
    >
      <path
        stroke={color}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.114 12.649v1a2 2 0 002 2h13.528'
      ></path>
      <path
        fill='#265BFF'
        fillRule='evenodd'
        d='M9.51 7.644a.465.465 0 00-.721.589c.095.117.323.289.57.4.12.054.229.086.313.094.086.008.111-.012.111-.012s.024-.02.034-.107a1.05 1.05 0 00-.03-.325c-.058-.264-.182-.522-.277-.639zm-1.008-.499a1.024 1.024 0 011.44.146c.065.079.127.18.184.292.056-.113.119-.213.183-.292a1.024 1.024 0 111.586 1.295c-.164.202-.471.42-.773.556a1.595 1.595 0 01-.49.14.704.704 0 01-.506-.126.704.704 0 01-.507.126 1.595 1.595 0 01-.49-.14c-.301-.136-.608-.354-.773-.556a1.024 1.024 0 01.146-1.44zm2.894.433a.465.465 0 00-.655.066c-.095.117-.218.375-.277.639a1.05 1.05 0 00-.03.325c.01.087.034.107.034.107s.025.02.112.012a1.05 1.05 0 00.313-.094c.247-.111.474-.283.57-.4a.465.465 0 00-.067-.655zm4.214-2.022a.465.465 0 10-.721.589c.095.117.323.289.57.4.12.054.229.085.313.093.086.009.11-.01.111-.01 0-.001.024-.021.034-.108a1.05 1.05 0 00-.03-.325c-.059-.264-.182-.522-.277-.639zm-1.008-.499a1.024 1.024 0 011.44.146c.065.079.127.18.184.291a1.62 1.62 0 01.183-.29 1.024 1.024 0 111.586 1.294c-.165.201-.471.42-.774.556a1.595 1.595 0 01-.488.14.704.704 0 01-.507-.126.704.704 0 01-.507.126 1.595 1.595 0 01-.49-.14c-.301-.136-.608-.355-.773-.556a1.024 1.024 0 01.146-1.44zm2.894.433a.465.465 0 00-.655.066c-.095.117-.218.375-.277.639a1.05 1.05 0 00-.03.325c.01.087.034.107.034.107s.025.02.112.011a1.05 1.05 0 00.313-.093c.246-.111.474-.283.57-.4a.465.465 0 00-.067-.655z'
        clipRule='evenodd'
      ></path>
      <mask id='prefix__a' fill='#fff'>
        <rect width='7.1' height='7.051' x='6.576' y='9.068' rx='1'></rect>
      </mask>
      <rect
        width='7.1'
        height='7.051'
        x='6.576'
        y='9.068'
        stroke={color}
        strokeWidth='3'
        mask='url(#prefix__a)'
        rx='1'
      ></rect>
      <mask id='prefix__b' fill='#fff'>
        <rect width='8' height='9.205' x='12.226' y='6.915' rx='1'></rect>
      </mask>
      <rect
        width='8'
        height='9.205'
        x='12.226'
        y='6.915'
        stroke={color}
        strokeWidth='3'
        mask='url(#prefix__b)'
        rx='1'
      ></rect>
      <path
        stroke={color}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.022 16l-2.446 2.446M17.022 16l-2.38 2.38m-10.528.123h16.111'
      ></path>
    </g>
  </svg>
)

export const SnowGlobe = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
  speed = 1.5,
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
      {`@keyframes g-snows{0%{opacity:0;transform:translateY(-2%)}50%{opacity:1}80%{opacity:.8}to{transform:translateY(2%);opacity:0}}.prefix__g-snow1{animation:g-snows ${speed + 0.5}s infinite both}`}
    </style>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 5.206a6.25 6.25 0 00-4.693 10.378c.075-.01.15-.014.228-.014H9.1v-2.115c0-.464.184-.91.513-1.237l1.15-1.15a1.75 1.75 0 012.474 0l1.15 1.15c.329.328.513.773.513 1.237v2.114h1.16c.196 0 .385.033.563.093A6.25 6.25 0 0012 5.206zm1.955 11.864a.749.749 0 00.39 0h1.716a.25.25 0 01.239.175l.38 1.225a.25.25 0 01-.24.324H7.156a.25.25 0 01-.239-.324l.38-1.224a.25.25 0 01.239-.176h2.12a.75.75 0 00.39 0h3.91zm-.555-1.5v-2.115a.25.25 0 00-.073-.177l-1.15-1.15a.25.25 0 00-.354 0l-1.15 1.15a.25.25 0 00-.073.177v2.114h2.8zm-9.15-4.114c0 1.883.673 3.61 1.79 4.954-.074.12-.134.252-.177.391l-.38 1.225a1.75 1.75 0 001.672 2.268h9.286a1.75 1.75 0 001.671-2.268l-.38-1.225a1.72 1.72 0 00-.032-.094 7.75 7.75 0 10-13.45-5.25z'
      fill={color}
    ></path>
    <circle className='prefix__g-snow1' cx='8.543' cy='8.75' r='.75' fill='#265BFF'></circle>
    <circle
      cx='12'
      cy='7.25'
      r='.75'
      fill='#265BFF'
      style={{ animation: `g-snows ${speed + 1.5}s infinite both` }}
    ></circle>
    <circle className='prefix__g-snow1' cx='15.25' cy='8.751' r='.75' fill='#265BFF'></circle>
    <circle
      cx='16.75'
      cy='12'
      r='.75'
      fill='#265BFF'
      style={{ animation: `g-snows ${speed}s infinite both` }}
    ></circle>
    <circle className='prefix__g-snow1' cx='7.793' cy='12' r='.75' fill='#265BFF'></circle>
  </svg>
)

export const Snowman = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
  speed = 0.5,
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
        '@keyframes snowman-right{0%{transform:rotate(0)}to{transform:rotate(9deg)}}@keyframes snowman-left{0%{transform:rotate(0)}to{transform:rotate(8deg)}}'
      }
    </style>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.651 9.797a.5.5 0 10-.935-.354l-.72 1.905-2.768 1.756a.5.5 0 00.536.845l2.658-1.687h2.046a.5.5 0 100-1h-1.37l.553-1.465z'
      fill='#265BFF'
      style={{
        animation: `snowman-right ${speed}s ease-in-out both alternate-reverse infinite`,
        transformOrigin: 'center',
      }}
    ></path>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.349 9.797a.5.5 0 01.935-.354l.72 1.905 2.768 1.756a.5.5 0 01-.536.845l-2.658-1.687H3.532a.5.5 0 010-1h1.37L4.35 9.797z'
      fill='#265BFF'
      style={{
        animation: `snowman-left ${speed}s ease-in-out both alternate-reverse infinite`,
        transformOrigin: '56% 57%',
      }}
    ></path>
    <circle cx='12' cy='15.762' r='4' stroke={color} strokeWidth='1.5'></circle>
    <circle cx='12' cy='8.762' r='2.45' stroke={color} strokeWidth='.9'></circle>
    <rect x='10.75' y='7.909' width='1' height='1' rx='.5' fill={color}></rect>
    <rect x='12.25' y='7.909' width='1' height='1' rx='.5' fill={color}></rect>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.5 4.5A.5.5 0 0111 4h2a.5.5 0 01.5.5v1c0 .037.004.074.012.109h-3.024A.504.504 0 0010.5 5.5v-1zm-.988 1.109A.502.502 0 019.5 5.5v-1A1.5 1.5 0 0111 3h2a1.5 1.5 0 011.5 1.5v1a.504.504 0 01-.012.109H16a.5.5 0 010 1H8a.5.5 0 010-1h1.512z'
      fill={color}
    ></path>
  </svg>
)

export const Snowman2 = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
  speed = 0.5,
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
        '@keyframes snowman2-right{0%{transform:rotate(0)}to{transform:rotate(9deg)}}@keyframes snowman2-left{0%{transform:rotate(0)}to{transform:rotate(8deg)}}'
      }
    </style>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.183 8.534a.5.5 0 00-.935-.353l-.72 1.905-2.768 1.756a.5.5 0 00.536.845L18.954 11H21a.5.5 0 100-1h-1.37l.553-1.466z'
      fill='#265BFF'
      style={{
        animation: `snowman2-right ${speed}s ease-in-out both alternate-reverse infinite`,
        transformOrigin: 'center',
      }}
    ></path>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.881 8.534a.5.5 0 11.935-.353l.72 1.905 2.768 1.756a.5.5 0 11-.536.845L6.11 11H4.064a.5.5 0 010-1h1.37l-.553-1.466z'
      fill='#265BFF'
      style={{
        animation: `snowman2-left ${speed}s ease-in-out both alternate-reverse infinite`,
        transformOrigin: '56% 57%',
      }}
    ></path>
    <circle cx='12.532' cy='14.5' r='4' stroke={color} strokeWidth='1.5'></circle>
    <circle cx='12.532' cy='7.5' r='2.45' stroke={color} strokeWidth='.9'></circle>
    <rect x='11.282' y='6.647' width='1' height='1' rx='.5' fill={color}></rect>
    <rect x='12.782' y='6.647' width='1' height='1' rx='.5' fill={color}></rect>
  </svg>
)

export const TreeOrnament = ({
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
    <style>{'@keyframes ornament{to{stroke-dashoffset:10}}'}</style>
    <path
      stroke='#265BFF'
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M6.5 9.637l1.67 1.486a2 2 0 002.66 0l.34-.303a2 2 0 012.66 0l.34.303a2 2 0 002.66 0l1.67-1.486m-12 6.735l1.67-1.487a2 2 0 012.66 0l.34.304a2 2 0 002.66 0l.34-.304a2 2 0 012.66 0l1.67 1.487'
      style={{ animation: `ornament ${speed}s linear infinite` }}
      strokeDasharray='1'
      strokeDashoffset='1'
    ></path>
    <circle cx='12.5' cy='13' r='7' stroke={color} strokeWidth='1.5'></circle>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M10.5 6V4.588a1 1 0 011-1h2a1 1 0 011 1V6'
    ></path>
  </svg>
)

export const TreeOrnament2 = ({
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
      {`@keyframes tree-orn-2{0%,to{opacity:1}50%{opacity:.2}}.prefix__tree-o2{animation:tree-orn-2 ${speed + 1}s infinite both}.prefix__tree-o3{animation:tree-orn-2 ${speed + 0.5}s infinite both}`}
    </style>
    <rect
      width='1.062'
      height='1.062'
      x='11.469'
      y='6.794'
      fill='#265BFF'
      rx='.531'
      style={{ animation: `tree-orn-2 ${speed}s infinite both` }}
    ></rect>
    <rect
      className='prefix__tree-o2'
      width='1.062'
      height='1.062'
      x='10.406'
      y='11.369'
      fill='#265BFF'
      rx='.531'
    ></rect>
    <rect
      className='prefix__tree-o2'
      width='1.062'
      height='1.062'
      x='9.572'
      y='15.156'
      fill='#265BFF'
      rx='.531'
    ></rect>
    <rect
      className='prefix__tree-o3'
      width='1.062'
      height='1.062'
      x='11.549'
      y='14.612'
      fill='#265BFF'
      rx='.531'
    ></rect>
    <rect
      className='prefix__tree-o2'
      width='1.062'
      height='1.062'
      x='13.526'
      y='15.156'
      fill='#265BFF'
      rx='.531'
    ></rect>
    <rect
      className='prefix__tree-o3'
      width='1.062'
      height='1.062'
      x='12.531'
      y='10.838'
      fill='#265BFF'
      rx='.531'
    ></rect>
    <path
      fill={color}
      fillRule='evenodd'
      d='M11.517 3.397a.796.796 0 01.658-.31.796.796 0 01.686.347l2.357 3.438c.377.55.197 1.242-.28 1.583l1.645 2.755a1.357 1.357 0 01-.735 1.982L17.218 15c.926 1.224.052 2.98-1.483 2.98h-2.938v2.135a.797.797 0 11-1.594 0v-2.134H8.265c-1.535 0-2.409-1.757-1.482-2.981l1.368-1.81a1.357 1.357 0 01-.734-1.981L9.07 8.442a1.134 1.134 0 01-.217-1.603l2.664-3.442zm-1.035 3.942l1.657-2.141 1.442 2.104a1.154 1.154 0 00-.43 1.153l-1.056.32-1.668.503.295-.493a1.132 1.132 0 00-.24-1.446zM9.213 11.31l-.245.41c.674.197 1.076.893.945 1.56l4.528-1.198c.157-.166.358-.294.59-.362l-1.097-1.837-1.859.562-2.862.865zm-1.16 4.652l.531-.701a.803.803 0 00.173-.026l5.534-1.465.048.069 1.607 2.123a.266.266 0 01-.211.426H8.264a.266.266 0 01-.211-.426z'
      clipRule='evenodd'
    ></path>
  </svg>
)

export const Tree = ({ size = 24, color = 'currentColor', sx = {}, className = '', speed = 2 }) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={className}
    style={sx}
    fill='none'
  >
    <style>{'@keyframes c-tree{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'}</style>
    <path
      fill={color}
      fillRule='evenodd'
      d='M10.35 9.032a.75.75 0 01.502.934l-.671 2.234 3.215-1.409-.248-.825a.75.75 0 111.436-.432l2.613 8.697a1.75 1.75 0 01-1.676 2.254H8.48a1.75 1.75 0 01-1.676-2.254l2.613-8.697a.75.75 0 01.934-.502zm3.48 3.206l-4.216 1.849-.827 2.754 5.758-2.224-.715-2.379zm-5.59 6.425v-.003l6.738-2.602.783 2.605a.25.25 0 01-.24.322H8.48a.25.25 0 01-.24-.322z'
      clipRule='evenodd'
    ></path>
    <path
      fill='#265BFF'
      fillRule='evenodd'
      d='M13.149 4.636l.18-.3-.3.18a2 2 0 01-2.058 0l-.3-.18.18.3a2 2 0 010 2.057l-.18.3.3-.18a2 2 0 012.058 0l.3.18-.18-.3a2 2 0 010-2.057zm1.038.214c.535-.893-.48-1.907-1.372-1.372l-.3.18a1 1 0 01-1.03 0l-.3-.18c-.892-.535-1.907.48-1.372 1.372l.18.3a1 1 0 010 1.029l-.18.3c-.535.893.48 1.908 1.372 1.372l.3-.18a1 1 0 011.03 0l.3.18c.892.536 1.907-.48 1.372-1.372l-.18-.3a1 1 0 010-1.029l.18-.3z'
      clipRule='evenodd'
      style={{ animation: `c-tree ${speed}s linear infinite both`, transformOrigin: '51% 24%' }}
    ></path>
  </svg>
)
