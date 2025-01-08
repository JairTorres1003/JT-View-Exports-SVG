/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

export const Airplay = ({
  size = 24,
  color = 'currentColor',
  sx = {},
  className = '',
  speed = 0.8,
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
      {'@keyframes airplay{0%{transform:translateY(1px)}to{transform:translateY(-1px)}}'}
    </style>
    <path
      fill={color}
      d='M8.165 16.75a.75.75 0 000-1.5v1.5zm7.603-1.5a.75.75 0 000 1.5v-1.5zM8 6.75h8v-1.5H8v1.5zM18.25 9v4h1.5V9h-1.5zm-12.5 4V9h-1.5v4h1.5zm2.415 2.25H8v1.5h.165v-1.5zm7.835 0h-.232v1.5H16v-1.5zM4.25 13A3.75 3.75 0 008 16.75v-1.5A2.25 2.25 0 015.75 13h-1.5zm14 0A2.25 2.25 0 0116 15.25v1.5A3.75 3.75 0 0019.75 13h-1.5zM16 6.75A2.25 2.25 0 0118.25 9h1.5A3.75 3.75 0 0016 5.25v1.5zm-8-1.5A3.75 3.75 0 004.25 9h1.5A2.25 2.25 0 018 6.75v-1.5z'
    ></path>
    <path
      fill='#265BFF'
      fillRule='evenodd'
      d='M10.412 14.86c.706-1.112 2.47-1.112 3.176 0l1.058 1.666c.706 1.111-.176 2.5-1.588 2.5h-2.117c-1.41 0-2.293-1.389-1.587-2.5l1.058-1.667zm2.117.555c-.235-.37-.823-.37-1.058 0l-1.059 1.667c-.235.37.06.833.53.833h2.117c.47 0 .764-.463.529-.833l-1.059-1.667z'
      clipRule='evenodd'
      style={{ animation: `airplay ${speed}s ease-in infinite alternate both` }}
    ></path>
  </svg>
)

export const AirpodCase = ({
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
    <style>{'@keyframes airpod-case{0%,50%,to{opacity:1}25%,75%{opacity:0}}'}</style>
    <path
      fill={color}
      fillRule='evenodd'
      d='M8.748 4.024a5.75 5.75 0 00-5.75 5.75v4.452a5.75 5.75 0 005.75 5.75h6.482a5.75 5.75 0 005.75-5.75v-4.111a.752.752 0 000-.358 5.75 5.75 0 00-5.75-5.733H8.748zM19.44 9.186a4.251 4.251 0 00-4.21-3.662H8.748a4.25 4.25 0 00-4.21 3.662H19.44zm-14.942 1.5v3.54a4.25 4.25 0 004.25 4.25h6.482a4.25 4.25 0 004.25-4.25v-3.54H4.498z'
      clipRule='evenodd'
    ></path>
    <path
      fill='#265BFF'
      fillRule='evenodd'
      d='M10.455 12.803c0-.428.313-.774.7-.774h1.69c.387 0 .7.346.7.774 0 .427-.313.774-.7.774h-1.69c-.387 0-.7-.347-.7-.774z'
      clipRule='evenodd'
      style={{ animation: `airpod-case ${speed}s infinite both` }}
    ></path>
  </svg>
)

export const Airpod = ({
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
        '@keyframes airpod{0%{transform:scale(.2);opacity:.8}80%{transform:scale(1.2);opacity:0}to{transform:scale(2.2);opacity:0}}'
      }
    </style>
    <rect
      width='14'
      height='14'
      x='5'
      y='5'
      fill='#265BFF'
      rx='7'
      style={{
        animation: `airpod ${speed}s cubic-bezier(.165,.84,.44,1) infinite both`,
        transformOrigin: 'center center',
      }}
    ></rect>
    <path
      fill={color}
      d='M9.392 7.004a2.104 2.104 0 00-1.52.58l-.544.543a.677.677 0 00-.181.507v.869a.797.797 0 00.036.29c.034.103.082.2.145.29a.65.65 0 00.181.253 2.507 2.507 0 001.883.87 2.212 2.212 0 002.282-2.102 2.213 2.213 0 00-2.282-2.1zM8.125 9.72a.17.17 0 01-.181.181H7.87a.17.17 0 01-.18-.18V8.488a.17.17 0 01.18-.181h.073a.17.17 0 01.18.18V9.72zm2.064-.29h-.616a.333.333 0 01-.326-.362.326.326 0 01.326-.326h.652a.333.333 0 01.326.362.362.362 0 01-.362.326zm-.724 6.994a.525.525 0 00.507.54h.616a.53.53 0 00.507-.544v-5.25a3.238 3.238 0 01-1.63.543v4.712zm7.207-8.297l-.543-.544a1.967 1.967 0 00-1.521-.58 2.213 2.213 0 00-2.282 2.101 2.213 2.213 0 002.282 2.101 2.388 2.388 0 001.883-.87c.072-.072.109-.18.181-.253a.724.724 0 00.145-.29.797.797 0 00.036-.29v-.868a.676.676 0 00-.181-.507zM14.427 9.43h-.652a.362.362 0 010-.724h.652a.333.333 0 01.325.362.3.3 0 01-.325.362zm1.883.29a.17.17 0 01-.11.17.17.17 0 01-.071.011h-.073a.17.17 0 01-.18-.18V8.488a.17.17 0 01.11-.17.17.17 0 01.07-.011h.073a.17.17 0 01.18.18V9.72zm-3.405 6.737a.532.532 0 00.544.543h.543a.532.532 0 00.543-.543v-4.745a2.673 2.673 0 01-1.63-.543v5.288z'
    ></path>
  </svg>
)

export const Bluetooth = ({
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
    <style>{'@keyframes bluetooth{to{stroke-dashoffset:0}}'}</style>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M7.441 15.954l8.653-7.55a.5.5 0 00-.03-.777l-3.678-2.76a.5.5 0 00-.8.4v13.458a.5.5 0 00.802.398l3.666-2.785a.5.5 0 00.014-.785L7.441 8.494'
      style={{ animation: `bluetooth ${speed}s infinite ease-in` }}
      strokeDashoffset='100'
      strokeDasharray='100'
    ></path>
  </svg>
)

export const BluetoothOff = ({
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
    <style>{'@keyframes bluetooth-off{to{stroke-dashoffset:0}}'}</style>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M7.441 15.954l8.653-7.55a.5.5 0 00-.03-.777l-3.678-2.76a.5.5 0 00-.8.4v13.458a.5.5 0 00.802.398l3.666-2.785a.5.5 0 00.014-.785L7.441 8.494'
    ></path>
    <path
      stroke='#265BFF'
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M19.274 6.117L5.098 17.883'
      style={{
        animation: `bluetooth-off ${speed}s infinite cubic-bezier(.99,-.1,.01,1.02) alternate`,
      }}
      strokeDashoffset='100'
      strokeDasharray='100'
    ></path>
  </svg>
)

export const Homepod = ({
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
        '@keyframes homepad{0%{transform:scale(.2);opacity:.8}80%{transform:scale(1.2);opacity:0}to{transform:scale(2.2);opacity:0}}'
      }
    </style>
    <rect
      width='14'
      height='14'
      x='5'
      y='5'
      fill='#265BFF'
      rx='7'
      style={{
        animation: `homepad ${speed}s cubic-bezier(.165,.84,.44,1) infinite both`,
        transformOrigin: 'center center',
      }}
    ></rect>
    <ellipse cx='12' cy='7.389' fill='#265BFF' rx='1.719' ry='.73'></ellipse>
    <path
      fill={color}
      d='M12 8.665c1.375 0 2.49-.473 2.49-1.057a.49.49 0 00-.055-.22A2 2 0 0116 9.342v6a2 2 0 01-2 2h-4a2 2 0 01-2-2v-6A2 2 0 019.565 7.39a.49.49 0 00-.054.22c0 .583 1.114 1.056 2.489 1.056z'
    ></path>
  </svg>
)

export const MicOff = ({
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
    <style>{'@keyframes mic-off{to{stroke-dashoffset:0}}'}</style>
    <rect
      width='5.122'
      height='9.388'
      x='9.439'
      y='5.164'
      fill={color}
      stroke={color}
      strokeWidth='1.278'
      rx='2.561'
    ></rect>
    <path
      fill={color}
      d='M16.794 12.02c.311 0 .566.252.537.561a5.944 5.944 0 01-.382 1.609 5.706 5.706 0 01-1.161 1.84 5.347 5.347 0 01-1.738 1.23 5.12 5.12 0 01-1.386.387.671.671 0 01.006.084v1.339a.67.67 0 01-1.34 0v-1.34c0-.028.002-.056.005-.083a5.12 5.12 0 01-1.385-.388 5.347 5.347 0 01-1.738-1.23 5.706 5.706 0 01-1.161-1.84 5.945 5.945 0 01-.382-1.608c-.029-.31.226-.562.537-.562.31 0 .56.253.596.562.047.395.144.783.289 1.153.212.543.524 1.037.917 1.453.393.416.86.746 1.373.971a4.028 4.028 0 003.238 0c.514-.225.98-.555 1.373-.97.393-.417.705-.91.917-1.454.145-.37.242-.758.29-1.153.036-.31.284-.562.595-.562z'
    ></path>
    <path
      stroke='#265BFF'
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M18.514 5.486L5.487 18.513'
      style={{
        animation: `mic-off ${speed}s infinite cubic-bezier(.99,-.1,.01,1.02) alternate`,
      }}
      strokeDashoffset='100'
      strokeDasharray='100'
    ></path>
  </svg>
)

export const Vibration = ({
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
        '@keyframes mobile-vibration{0%,to{transform:translateX(0)}10%,30%,50%,70%{transform:translateX(-1px)}20%,40%,60%,80%{transform:translateX(2px)}90%{transform:translateX(-2px)}}'
      }
    </style>
    <g style={{ animation: `mobile-vibration ${speed}s linear infinite both` }}>
      <path
        fill={color}
        fillRule='evenodd'
        d='M11.55 4.097c-1.275-.341-2.6.469-2.96 1.81L5.75 16.505c-.359 1.341.384 2.705 1.66 3.047l5.04 1.35c1.275.342 2.6-.468 2.96-1.81l2.84-10.597c.359-1.341-.384-2.705-1.66-3.047l-5.04-1.35zm-1.7 2.148c.164-.61.766-.978 1.346-.823l.31.083c-.03.07-.055.142-.075.217-.216.804.23 1.623.995 1.828l1.68.45c.765.205 1.56-.28 1.776-1.086.02-.075.035-.15.044-.225l.31.083c.58.156.917.776.753 1.386l-2.84 10.597c-.162.61-.765.978-1.345.823l-5.04-1.35c-.58-.156-.917-.776-.754-1.386L9.85 6.245zm2.82-.428l2.091.56c.04.071.053.158.03.245a.313.313 0 01-.377.23l-1.68-.45a.312.312 0 01-.211-.388.328.328 0 01.147-.197z'
        clipRule='evenodd'
      ></path>
      <path
        stroke='#265BFF'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6.312 8.905L5.277 12.77m13.446-.539l-1.035 3.864'
      ></path>
    </g>
  </svg>
)

export const Mouse = ({
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
    <style>{'@keyframes mouse{0%{transform:translateY(-1px)}to{transform:translateY(1px)}}'}</style>
    <rect width='8' height='14' x='8' y='5' stroke={color} rx='4'></rect>
    <rect
      width='1.5'
      height='3'
      x='11.25'
      y='8.703'
      fill='#265BFF'
      rx='.75'
      style={{
        animation: `mouse ${speed}s linear infinite alternate both`,
      }}
    ></rect>
  </svg>
)

export const Smartwatch = ({
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
        '@keyframes smartwatch-heart{10%,33%{transform:scale(.85);animation-timing-function:ease-in}17%{transform:scale(1);animation-timing-function:ease-out}45%{transform:scale(1.2);animation-timing-function:ease-out}}'
      }
    </style>
    <path
      fill={color}
      fillRule='evenodd'
      d='M8.867 5.86a3.04 3.04 0 00-3.04 3.04v6.084a3.04 3.04 0 003.04 3.04h6.084a3.04 3.04 0 003.04-3.04v-2.76a.438.438 0 00.688-.36v-2.12a.438.438 0 00-.688-.36V8.9a3.04 3.04 0 00-3.04-3.04H8.867zM7.327 8.9c0-.85.69-1.54 1.54-1.54h6.084c.85 0 1.54.69 1.54 1.54v6.084c0 .85-.69 1.54-1.54 1.54H8.867c-.85 0-1.54-.69-1.54-1.54V8.9z'
      clipRule='evenodd'
    ></path>
    <path
      fill='#265BFF'
      d='M11.879 10.514a.173.173 0 00.242 0 1.11 1.11 0 011.795.35 1.068 1.068 0 01-.238 1.181l-1.327 1.306a.5.5 0 01-.702 0l-1.327-1.306a1.074 1.074 0 010-1.531 1.11 1.11 0 011.557 0z'
      style={{
        animation: `smartwatch-heart ${speed}s linear infinite both`,
        transformOrigin: 'center',
      }}
    ></path>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M10.253 4.202h4m-4 15.479h4'
    ></path>
  </svg>
)

export const Smartwatch2 = ({
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
    <style>{'@keyframes smartwatch{to{stroke-dashoffset:0}}'}</style>
    <path
      fill={color}
      fillRule='evenodd'
      d='M8.867 5.86a3.04 3.04 0 00-3.04 3.04v6.084a3.04 3.04 0 003.04 3.04h6.084a3.04 3.04 0 003.04-3.04v-2.76a.438.438 0 00.688-.36v-2.12a.438.438 0 00-.688-.36V8.9a3.04 3.04 0 00-3.04-3.04H8.867zM7.327 8.9c0-.85.69-1.54 1.54-1.54h6.084c.85 0 1.54.69 1.54 1.54v6.084c0 .85-.69 1.54-1.54 1.54H8.867c-.85 0-1.54-.69-1.54-1.54V8.9z'
      clipRule='evenodd'
    ></path>
    <path
      stroke='#265BFF'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='.8'
      d='M9 11.768h1.654l.654-1.322 1.23 3 .423-1.678H15'
      style={{
        animation: `smartwatch ${speed}s infinite cubic-bezier(.99,-.1,.01,1.02)`,
      }}
      strokeDashoffset='100'
      strokeDasharray='100'
    ></path>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M10 4.202h4m-3.747 15.479h4'
    ></path>
  </svg>
)

export const Speaker = ({
  size = 24,
  color = 'currentColor',
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
        '@keyframes speaker-beat{10%{transform:scale(.91);animation-timing-function:ease-in}17%{transform:scale(.98);animation-timing-function:ease-out}33%{transform:scale(.87);animation-timing-function:ease-in}45%{transform:scale(1);animation-timing-function:ease-out}}'
      }
    </style>
    <rect width='12' height='16' x='6' y='4' stroke={color} strokeWidth='1.5' rx='4'></rect>
    <circle cx='12' cy='8' r='1' fill={color}></circle>
    <circle
      cx='12'
      cy='14'
      r='2.192'
      stroke='#265BFF'
      strokeWidth='1.5'
      style={{
        animation: `speaker-beat ${speed}s linear infinite both`,
        transformOrigin: 'center center',
      }}
    ></circle>
  </svg>
)
