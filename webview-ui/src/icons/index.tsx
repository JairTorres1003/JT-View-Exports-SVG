import { motion } from 'framer-motion'
import { type FC } from 'react'

interface IconProps {
  size?: number | string
  color?: string
  className?: string
}

export const ArrowForwardIcon = () => (
  <svg focusable='false' viewBox='0 0 24 24' width={17} xmlns='http://www.w3.org/2000/svg'>
    <path d='M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z'></path>
  </svg>
)

export const IconClose: FC<IconProps> = ({ size = '1rem', color = 'currentColor' }) => {
  return (
    <svg
      stroke={color}
      fill={color}
      strokeWidth='0'
      viewBox='0 0 512 512'
      height={size}
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z'></path>
    </svg>
  )
}

export const IconFailExport = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      width='512'
      height='512'
      x='0'
      y='0'
      viewBox='0 0 512 512'
    >
      <g>
        <path
          fill='#53515e'
          data-original='#53515e'
          d='M477.486 424.797H34.514C15.452 424.797 0 409.345 0 390.283V38.488C0 19.427 15.452 3.974 34.514 3.974h442.973C496.548 3.974 512 19.427 512 38.488v351.795c0 19.062-15.452 34.514-34.514 34.514z'
        ></path>
        <path
          fill='#474756'
          data-original='#474756'
          d='M364.402 339.5a8.169 8.169 0 0 1-8.169-8.169V82.374a8.17 8.17 0 0 1 16.338 0V331.33a8.17 8.17 0 0 1-8.169 8.17z'
        ></path>
        <path
          fill='#6f4bef'
          data-original='#6f4bef'
          d='M477.486 3.974H34.514C15.452 3.974 0 19.427 0 38.488V86.97h512V38.488c0-19.061-15.452-34.514-34.514-34.514z'
        ></path>
        <path
          fill='#4628b2'
          data-original='#4628b2'
          d='M323.799 54.227H171.836a8.17 8.17 0 0 1 0-16.338h151.963a8.17 8.17 0 0 1 0 16.338z'
        ></path>
        <circle cx='45.589' cy='46.06' r='10.92' fill='#ffdc64' data-original='#ffdc64'></circle>
        <circle cx='87.67' cy='46.06' r='10.92' fill='#86e56e' data-original='#86e56e'></circle>
        <circle cx='127.42' cy='46.06' r='10.92' fill='#ffdc64' data-original='#ffdc64'></circle>
        <circle cx='467.58' cy='46.06' r='10.92' fill='#ff80bd' data-original='#ff80bd'></circle>
        <path
          fill='#474756'
          data-original='#474756'
          d='M460.791 316.909H53.767c-17.436 0-31.571 14.135-31.571 31.571v74.045a34.418 34.418 0 0 0 12.318 2.272h442.973a34.376 34.376 0 0 0 14.876-3.364V348.48c0-17.436-14.135-31.571-31.572-31.571z'
        ></path>
        <circle cx='49.796' cy='130.059' r='8.169' fill='#aaa8c1' data-original='#aaa8c1'></circle>
        <path
          fill='#00aaf0'
          data-original='#00aaf0'
          d='M189.169 138.23H82.198a8.17 8.17 0 0 1 0-16.338h106.971a8.17 8.17 0 0 1 0 16.338z'
        ></path>
        <path
          fill='#3c3b44'
          data-original='#3c3b44'
          d='M478.499 130.061h-80.425a8.17 8.17 0 0 1 0-16.338h80.425a8.17 8.17 0 0 1 8.169 8.169 8.167 8.167 0 0 1-8.169 8.169zM478.499 165.189h-80.425a8.17 8.17 0 0 1 0-16.338h80.425a8.17 8.17 0 0 1 0 16.338zM478.499 200.316h-80.425a8.17 8.17 0 0 1 0-16.338h80.425a8.17 8.17 0 0 1 0 16.338zM478.499 235.445h-80.425a8.17 8.17 0 0 1 0-16.338h80.425a8.17 8.17 0 0 1 8.169 8.169 8.168 8.168 0 0 1-8.169 8.169zM478.499 270.573h-80.425c-4.512 0-8.169-3.657-8.169-8.169s3.657-8.169 8.169-8.169h80.425a8.169 8.169 0 0 1 8.169 8.169 8.168 8.168 0 0 1-8.169 8.169zM478.499 305.7h-80.425c-4.512 0-8.169-3.657-8.169-8.169s3.657-8.169 8.169-8.169h80.425c4.512 0 8.169 3.657 8.169 8.169s-3.656 8.169-8.169 8.169z'
        ></path>
        <circle cx='49.796' cy='164.369' r='8.169' fill='#aaa8c1' data-original='#aaa8c1'></circle>
        <path
          fill='#00aaf0'
          data-original='#00aaf0'
          d='M138.336 172.542H82.198a8.17 8.17 0 0 1 0-16.338h56.138a8.17 8.17 0 0 1 0 16.338z'
        ></path>
        <circle cx='49.796' cy='265.67' r='8.169' fill='#aaa8c1' data-original='#aaa8c1'></circle>
        <path
          fill='#86e56e'
          data-original='#86e56e'
          d='M166.711 273.84H82.198c-4.512 0-8.169-3.657-8.169-8.169s3.657-8.169 8.169-8.169h84.513c4.512 0 8.169 3.657 8.169 8.169s-3.657 8.169-8.169 8.169z'
        ></path>
        <circle cx='49.796' cy='299.17' r='8.169' fill='#aaa8c1' data-original='#aaa8c1'></circle>
        <path
          fill='#00aaf0'
          data-original='#00aaf0'
          d='M166.711 307.334H82.198c-4.512 0-8.169-3.657-8.169-8.169s3.657-8.169 8.169-8.169h84.513c4.512 0 8.169 3.657 8.169 8.169s-3.657 8.169-8.169 8.169zM223.638 273.84h-29.843c-4.512 0-8.169-3.657-8.169-8.169s3.657-8.169 8.169-8.169h29.843c4.512 0 8.169 3.657 8.169 8.169s-3.657 8.169-8.169 8.169z'
        ></path>
        <path
          fill='#ffdc64'
          data-original='#ffdc64'
          d='M227.973 172.542h-56.137a8.17 8.17 0 0 1 0-16.338h56.137a8.17 8.17 0 0 1 0 16.338z'
        ></path>
        <circle cx='49.796' cy='198.679' r='8.169' fill='#aaa8c1' data-original='#aaa8c1'></circle>
        <path
          fill='#ff80bd'
          data-original='#ff80bd'
          d='M193.795 206.852h-77.514a8.17 8.17 0 0 1 0-16.338h77.514a8.17 8.17 0 0 1 0 16.338z'
        ></path>
        <circle cx='49.796' cy='231.359' r='8.169' fill='#aaa8c1' data-original='#aaa8c1'></circle>
        <path
          fill='#ffdc64'
          data-original='#ffdc64'
          d='M257.657 239.529H116.281a8.17 8.17 0 0 1 0-16.338h141.376a8.17 8.17 0 0 1 0 16.338z'
        ></path>
        <path
          fill='#86e56e'
          data-original='#86e56e'
          d='M305.487 206.852h-77.514a8.17 8.17 0 0 1 0-16.338h77.514a8.17 8.17 0 0 1 0 16.338z'
        ></path>
        <path
          fill='#ff6b5c'
          data-original='#ff6b5c'
          d='M440.54 508.025H74.019c-15.701 0-28.43-12.728-28.43-28.43v-115.24c0-15.701 12.728-28.43 28.43-28.43H440.54c15.701 0 28.43 12.728 28.43 28.43v115.239c0 15.702-12.729 28.431-28.43 28.431z'
        ></path>
        <path
          fill='#ff5450'
          data-original='#ff5450'
          d='M440.54 335.927h-17.159c0 74.744-60.592 135.337-135.337 135.337H45.589v8.332c0 15.701 12.728 28.43 28.43 28.43H440.54c15.701 0 28.43-12.728 28.43-28.43v-115.24c0-15.701-12.729-28.429-28.43-28.429z'
        ></path>
        <path
          fill='#ffffff'
          data-original='#ffffff'
          d='M104.572 455.934v-70.32c0-1.698.737-3.007 2.215-3.931 1.476-.922 3.247-1.384 5.315-1.384h39.424c1.698 0 2.99.739 3.876 2.215.885 1.477 1.329 3.211 1.329 5.205 0 2.142-.462 3.951-1.384 5.427-.924 1.476-2.198 2.215-3.821 2.215h-29.678v18.715h16.611c1.623 0 2.896.664 3.821 1.993.922 1.329 1.384 2.917 1.384 4.761 0 1.7-.442 3.212-1.329 4.541-.886 1.329-2.178 1.993-3.876 1.993h-16.611v18.826h29.678c1.623 0 2.896.738 3.821 2.215.922 1.476 1.384 3.285 1.384 5.425 0 1.993-.444 3.729-1.329 5.206-.886 1.477-2.178 2.215-3.876 2.215h-39.424c-2.068 0-3.839-.46-5.315-1.385-1.478-.923-2.215-2.233-2.215-3.932zM164.259 455.934v-70.431c0-1.402.498-2.62 1.494-3.655.997-1.033 2.271-1.55 3.821-1.55h22.923c18.162 0 27.242 7.9 27.242 23.698 0 11.517-4.468 19.01-13.399 22.48l13.51 24.474c.369.517.554 1.182.554 1.993 0 2.142-1.163 4.172-3.489 6.091-2.325 1.921-4.78 2.878-7.364 2.878-2.585 0-4.429-1.068-5.537-3.21l-15.172-29.458h-7.309v26.689c0 1.699-.85 3.009-2.548 3.93-1.699.925-3.728 1.385-6.091 1.385-2.364 0-4.393-.46-6.091-1.385-1.696-.92-2.544-2.23-2.544-3.929zm17.275-39.977h10.962c3.249 0 5.721-.794 7.42-2.381 1.698-1.587 2.546-4.226 2.546-7.918 0-3.691-.849-6.33-2.546-7.918-1.7-1.587-4.172-2.381-7.42-2.381h-10.962v20.598zM228.931 455.934v-70.431c0-1.402.498-2.62 1.494-3.655.997-1.033 2.271-1.55 3.821-1.55h22.923c18.162 0 27.242 7.9 27.242 23.698 0 11.517-4.468 19.01-13.399 22.48l13.51 24.474c.369.517.554 1.182.554 1.993 0 2.142-1.163 4.172-3.489 6.091-2.325 1.921-4.78 2.878-7.364 2.878-2.585 0-4.429-1.068-5.537-3.21l-15.172-29.458h-7.309v26.689c0 1.699-.85 3.009-2.548 3.93-1.699.925-3.728 1.385-6.091 1.385-2.364 0-4.393-.46-6.091-1.385-1.696-.92-2.544-2.23-2.544-3.929zm17.275-39.977h10.962c3.249 0 5.721-.794 7.42-2.381 1.698-1.587 2.547-4.226 2.547-7.918 0-3.691-.849-6.33-2.547-7.918-1.7-1.587-4.172-2.381-7.42-2.381h-10.962v20.598zM292.718 435.779v-29.346c0-9.005 2.473-15.614 7.419-19.822 4.945-4.208 11.518-6.312 19.712-6.312 8.267 0 14.875 2.104 19.822 6.312 4.945 4.208 7.419 10.817 7.419 19.822v29.346c0 9.008-2.474 15.614-7.419 19.822-4.947 4.208-11.555 6.312-19.822 6.312-8.195 0-14.767-2.104-19.712-6.312-4.946-4.208-7.419-10.813-7.419-19.822zm17.275 0c0 7.383 3.284 11.074 9.856 11.074 6.644 0 9.966-3.691 9.966-11.074v-29.346c0-7.381-3.322-11.073-9.966-11.073-6.573 0-9.856 3.692-9.856 11.073v29.346zM358.164 455.934v-70.431c0-1.402.498-2.62 1.495-3.655.997-1.033 2.271-1.55 3.821-1.55h22.923c18.162 0 27.242 7.9 27.242 23.698 0 11.517-4.468 19.01-13.399 22.48l13.51 24.474c.369.517.554 1.182.554 1.993 0 2.142-1.163 4.172-3.489 6.091-2.325 1.921-4.78 2.878-7.364 2.878-2.585 0-4.429-1.068-5.537-3.21l-15.172-29.458h-7.309v26.689c0 1.699-.85 3.009-2.548 3.93-1.699.925-3.728 1.385-6.091 1.385-2.364 0-4.393-.46-6.091-1.385-1.697-.92-2.545-2.23-2.545-3.929zm17.276-39.977h10.962c3.249 0 5.721-.794 7.42-2.381 1.698-1.587 2.547-4.226 2.547-7.918 0-3.691-.849-6.33-2.547-7.918-1.7-1.587-4.172-2.381-7.42-2.381H375.44v20.598z'
        ></path>
      </g>
    </svg>
  )
}

export const IconLupe: FC<IconProps> = ({ size = 24, color = 'currentColor' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
    >
      <circle cx='11' cy='11' r='7' stroke={color} strokeWidth='2' />
      <path
        d='M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path d='M20 20L17 17' stroke={color} strokeWidth='2' strokeLinecap='round' />
    </svg>
  )
}

export const IconSettings: FC<
  IconProps & {
    circleColor?: string
    state?: boolean
  }
> = ({ size = 20, color = 'currentColor', circleColor = 'currentColor', state = false }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
    >
      <motion.g
        variants={{
          active: {
            translateY: 5.3,
            rotate: -45,
            transition: { type: 'linear' },
          },
          inactive: {
            translateY: 0,
            rotate: 0,
            transition: { type: 'linear' },
          },
        }}
        animate={state ? 'active' : 'inactive'}
      >
        <line
          x1='2.48001'
          y1='4.69001'
          x2='17.52'
          y2='4.69001'
          stroke={color}
          strokeWidth='1.26'
          strokeLinecap='round'
        />
        <motion.circle
          cx='13.115'
          cy='4.685'
          r='1.565'
          fill={circleColor}
          variants={{
            active: {
              translateX: 9.99499 - 13.115,
              scale: 0,
              opacity: 0,
              transition: { type: 'linear' },
            },
            inactive: { opacity: 1 },
          }}
          animate={state ? 'active' : 'inactive'}
        />
      </motion.g>
      <motion.g
        variants={{
          active: {
            rotate: 45,
            opacity: 0,
            transition: { type: 'linear' },
          },
          inactive: {
            rotate: 0,
            opacity: 1,
            transition: { type: 'linear' },
          },
        }}
        animate={state ? 'active' : 'inactive'}
      >
        <motion.line
          x1='2.48001'
          y1='10'
          x2='17.52'
          y2='10'
          stroke={color}
          strokeWidth='1.26'
          strokeLinecap='round'
        />
        <motion.circle
          cx='6.86502'
          cy='9.99499'
          r='1.565'
          fill={circleColor}
          variants={{
            active: {
              translateX: 9.99499 - 6.86502,
              scale: 0,
              opacity: 0,
              transition: { type: 'linear' },
            },
            inactive: { opacity: 1 },
          }}
          animate={state ? 'active' : 'inactive'}
        />
      </motion.g>
      <motion.g
        variants={{
          active: {
            translateY: -5.32,
            rotate: 45,
            transition: { type: 'linear' },
          },
          inactive: {
            translateY: 0,
            rotate: 0,
            transition: { type: 'linear' },
          },
        }}
        animate={state ? 'active' : 'inactive'}
      >
        <line
          x1='2.48001'
          y1='15.32'
          x2='17.52'
          y2='15.32'
          stroke={color}
          strokeWidth='1.26'
          strokeLinecap='round'
        />
        <motion.circle
          cx='13.115'
          cy='15.315'
          r='1.565'
          fill={circleColor}
          variants={{
            active: {
              translateX: 9.99499 - 13.115,
              scale: 0,
              opacity: 0,
              transition: { type: 'linear' },
            },
            inactive: { opacity: 1 },
          }}
          animate={state ? 'active' : 'inactive'}
        />
      </motion.g>
    </svg>
  )
}

export const DropFilesIcon: FC<IconProps & { borderDash?: string }> = ({
  size = 20,
  borderDash = '1 1',
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 20 20'
    fill='none'
  >
    <path
      d='M3.86129 17.1793L1.50691 5.40429C1.37055 4.7223 1.81287 4.05889 2.49486 3.92253L3.88476 3.64462'
      stroke='black'
      strokeWidth='0.2'
      strokeLinecap='round'
      strokeDasharray={borderDash}
    />
    <path
      d='M16.1547 17.2371L18.533 5.3456C18.6694 4.66362 18.2271 4.00019 17.5451 3.86379L16.1959 3.62379'
      stroke='black'
      strokeWidth='0.2'
      strokeLinecap='round'
      strokeDasharray={borderDash}
    />
    <path
      d='M14.9401 1.76001H5.14559C4.4501 1.76001 3.88629 2.32382 3.88629 3.0193V17.0115C3.88629 17.707 4.4501 18.2708 5.14559 18.2708H14.9401C15.6356 18.2708 16.1994 17.707 16.1994 17.0115V3.0193C16.1994 2.32382 15.6356 1.76001 14.9401 1.76001Z'
      stroke='black'
      strokeWidth='0.2'
      strokeLinecap='round'
      strokeDasharray={borderDash}
    />
    <path
      d='M8.64366 4.88446L7.24445 6.28367L8.64366 7.68289M11.4421 7.68289L12.8413 6.28367L11.4421 4.88446M9.1096 8.15023L10.7425 4.41852'
      stroke='black'
      strokeWidth='0.2'
    />
    <path
      d='M10.0428 17.0115C10.9706 17.0115 11.8603 16.6429 12.5163 15.9869C13.1723 15.3309 13.5409 14.4412 13.5409 13.5134C13.5409 12.5857 13.1723 11.6959 12.5163 11.0399C11.8603 10.3839 10.9706 10.0154 10.0428 10.0154C9.1151 10.0154 8.22536 10.3839 7.56935 11.0399C6.91334 11.6959 6.5448 12.5857 6.5448 13.5134C6.5448 14.4412 6.91334 15.3309 7.56935 15.9869C8.22536 16.6429 9.1151 17.0115 10.0428 17.0115Z'
      fill='black'
      fillOpacity='0.05'
    />
    <path
      d='M7.94403 13.5134H12.1417M10.0429 11.4146V15.6122'
      stroke='black'
      strokeWidth='0.5'
      strokeLinecap='round'
    />
  </svg>
)

export const MoreFilesIcon: FC<IconProps> = ({ color = '#000', size = 20 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 20 20'
  >
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='0.8'
      d='M10.5 17h-6a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1h7m0 0 3.5 5m-3.5-5v4a1 1 0 0 0 1 1H15m0 0v6M12.5 16H14m1.5 0H14m0 0v1.5m0-1.5v-1.5'
    />
    <circle cx='14' cy='16' r='2.7' stroke={color} strokeWidth='.6' />
  </svg>
)

export const MotionIcon: FC<IconProps> = ({ color = 'currentColor', size = 20 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 20 20'
  >
    <path
      d='M2.704 6.704L3.936 7.936C3.72 8.584 3.6 9.28 3.6 10C3.6 13.528 6.472 16.4 10 16.4C13.528 16.4 16.4 13.528 16.4 10C16.4 6.472 13.528 3.6 10 3.6C9.28 3.6 8.584 3.72 7.936 3.936L6.712 2.712C7.72 2.256 8.832 2 10 2C14.416 2 18 5.584 18 10C18 14.416 14.416 18 10 18C5.584 18 2 14.416 2 10C2 8.824 2.256 7.712 2.704 6.704ZM6 4.8C6 5.464 5.464 6 4.8 6C4.136 6 3.6 5.464 3.6 4.8C3.6 4.136 4.136 3.6 4.8 3.6C5.464 3.6 6 4.136 6 4.8ZM12.4 10L7.6 12.4V7.6L12.4 10Z'
      fill={color}
    />
  </svg>
)

export const EmptySelectionIcon: FC<{
  size?: number | string
  className?: string
}> = ({ size = '50', className = '' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 50 50'
    fill='none'
    className={className}
  >
    <path
      d='M48.8206 36.5848V42.447C48.8206 43.1438 48.2566 43.7076 47.5599 43.7076H2.44003C1.74335 43.7076 1.17938 43.1437 1.17938 42.447V36.5848C1.17938 36.451 1.20018 36.3182 1.24286 36.1913L7.62635 16.8008C7.70906 16.5486 7.8694 16.329 8.08444 16.1734C8.29948 16.0178 8.5582 15.9342 8.82362 15.9346H41.1765C41.4419 15.9342 41.7006 16.0178 41.9156 16.1734C42.1307 16.329 42.291 16.5486 42.3737 16.8008L48.7572 36.1912C48.7998 36.3182 48.8206 36.451 48.8206 36.5848Z'
      fill='#9E9797'
    />
    <path
      d='M48.8206 36.5848V42.447C48.8206 43.1438 48.2566 43.7076 47.5599 43.7076H39.9802C39.9544 34.7711 40.0922 20.0218 40.1328 15.9346H41.1764C41.4419 15.9342 41.7006 16.0178 41.9156 16.1734C42.1307 16.329 42.291 16.5486 42.3737 16.8008L48.7572 36.1912C48.7998 36.3182 48.8206 36.451 48.8206 36.5848ZM1.17908 36.5848V42.447C1.17908 43.1438 1.74304 43.7076 2.43972 43.7076H10.0195C10.0453 34.7711 9.9075 20.0218 9.86687 15.9346H8.82332C8.5579 15.9342 8.29918 16.0178 8.08415 16.1734C7.86911 16.329 7.70877 16.5486 7.62605 16.8008L1.24256 36.1913C1.20024 36.3182 1.1788 36.451 1.17908 36.5848Z'
      fill='#B9ACAC'
    />
    <path
      d='M44.0311 36.1908L40.1438 24.3835C40.0609 24.1314 39.9005 23.912 39.6855 23.7564C39.4705 23.6009 39.2119 23.5171 38.9466 23.5172H11.0533C10.788 23.5171 10.5294 23.6009 10.3144 23.7564C10.0994 23.912 9.93903 24.1314 9.85605 24.3835L5.96895 36.1908C5.92708 36.318 5.90575 36.451 5.90576 36.5849V42.4472C5.90576 43.1433 6.47012 43.7077 7.16621 43.7077H42.8339C43.53 43.7077 44.0943 43.1433 44.0943 42.4472V36.5849C44.0943 36.451 44.0729 36.318 44.0311 36.1908Z'
      fill='#756F6F'
    />
    <path
      d='M25 33.9661C30.089 33.9661 34.2144 32.8062 34.2144 31.3755C34.2144 29.9447 30.089 28.7849 25 28.7849C19.911 28.7849 15.7855 29.9447 15.7855 31.3755C15.7855 32.8062 19.911 33.9661 25 33.9661Z'
      fill='#5B5555'
    />
    <path
      d='M44.0942 36.5853V42.4476C44.0942 43.1434 43.5296 43.708 42.8338 43.708H38.4487C39.1445 43.708 39.7091 43.1434 39.7091 42.4476V36.5853C39.7091 36.4517 39.6878 36.3181 39.6462 36.1907L35.7589 24.383C35.6759 24.131 35.5155 23.9116 35.3005 23.7561C35.0855 23.6007 34.8269 23.517 34.5616 23.5171H38.9466C39.212 23.517 39.4706 23.6006 39.6856 23.7561C39.9006 23.9116 40.061 24.131 40.144 24.383L44.0312 36.1907C44.0728 36.3181 44.0942 36.4517 44.0942 36.5853Z'
      fill='#5B5555'
    />
    <path
      d='M48.8209 37.8015V48.7395C48.8209 49.4356 48.2565 50 47.5604 50H2.43953C1.74343 50 1.17908 49.4356 1.17908 48.7395V37.8015C1.17908 37.1054 1.74343 36.5411 2.43953 36.5411H11.7459C12.2275 36.5411 12.6671 36.8156 12.8785 37.2484L14.7072 40.9927C14.8108 41.2049 14.9719 41.3837 15.1721 41.5087C15.3724 41.6338 15.6037 41.7001 15.8398 41.7001H34.1601C34.6418 41.7001 35.0813 41.4255 35.2928 40.9927L37.1215 37.2484C37.2251 37.0363 37.3861 36.8575 37.5864 36.7324C37.7866 36.6074 38.018 36.5411 38.2541 36.5411H47.5604C48.2565 36.5411 48.8209 37.1054 48.8209 37.8015Z'
      fill='#31A7FB'
    />
    <path
      d='M48.8209 37.8015V48.7395C48.8209 49.4353 48.2562 50 47.5604 50H42.7609C43.4567 50 44.0214 49.4353 44.0214 48.7395V37.8015C44.0214 37.1058 43.4567 36.5411 42.7609 36.5411H47.5604C48.2561 36.5411 48.8209 37.1058 48.8209 37.8015Z'
      fill='#1C96F9'
    />
    <path
      d='M7.69147 47.3135H4.97135C4.77422 47.3135 4.58517 47.2352 4.44578 47.0958C4.3064 46.9564 4.22809 46.7673 4.22809 46.5702C4.22809 46.3731 4.3064 46.184 4.44578 46.0447C4.58517 45.9053 4.77422 45.827 4.97135 45.827H7.69147C7.88859 45.827 8.07764 45.9053 8.21703 46.0447C8.35642 46.184 8.43473 46.3731 8.43473 46.5702C8.43473 46.7673 8.35642 46.9564 8.21703 47.0958C8.07764 47.2352 7.88859 47.3135 7.69147 47.3135ZM7.69147 44.9915H4.97135C4.5608 44.9915 4.22809 44.6587 4.22809 44.2481C4.22809 43.8376 4.5609 43.5049 4.97135 43.5049H7.69147C7.78908 43.5049 7.88573 43.5241 7.97592 43.5614C8.0661 43.5988 8.14804 43.6535 8.21706 43.7226C8.28608 43.7916 8.34083 43.8735 8.37818 43.9637C8.41553 44.0539 8.43474 44.1505 8.43473 44.2481C8.43475 44.3458 8.41555 44.4424 8.37821 44.5326C8.34086 44.6228 8.28612 44.7048 8.2171 44.7738C8.14807 44.8428 8.06613 44.8976 7.97594 44.9349C7.88575 44.9723 7.78909 44.9915 7.69147 44.9915Z'
      fill='#F8F3F1'
    />
    <path
      d='M25 31.6909C29.7632 31.6909 33.6247 27.8295 33.6247 23.0662C33.6247 18.3029 29.7632 14.4415 25 14.4415C20.2367 14.4415 16.3752 18.3029 16.3752 23.0662C16.3752 27.8295 20.2367 31.6909 25 31.6909Z'
      fill='#A3E440'
    />
    <path
      d='M33.6246 23.066C33.6246 27.8296 29.763 31.6912 25.0005 31.6912C24.4323 31.6916 23.8655 31.6359 23.3083 31.5248C27.2608 30.7378 30.2391 27.2494 30.2391 23.066C30.2391 18.8826 27.2608 15.3953 23.3083 14.6083C23.8655 14.4972 24.4323 14.4415 25.0005 14.4419C29.763 14.4419 33.6246 18.3024 33.6246 23.066Z'
      fill='#99D53B'
    />
    <path
      d='M26.714 27.374C26.5372 27.3741 26.3662 27.311 26.2318 27.196C25.8916 26.9056 25.4064 26.7382 24.9006 26.7367H24.8936C24.3904 26.7367 23.9072 26.901 23.5668 27.188C23.4922 27.251 23.4059 27.2986 23.3129 27.3282C23.2198 27.3578 23.1219 27.3687 23.0246 27.3605C22.9274 27.3522 22.8327 27.3248 22.746 27.28C22.6593 27.2351 22.5823 27.1736 22.5194 27.099C22.4565 27.0244 22.4089 26.9381 22.3793 26.8451C22.3497 26.752 22.3387 26.6541 22.347 26.5568C22.3552 26.4596 22.3826 26.3649 22.4275 26.2782C22.4723 26.1915 22.5338 26.1145 22.6085 26.0516C23.2244 25.5321 24.0415 25.2482 24.9052 25.25C25.7703 25.2527 26.5842 25.5422 27.197 26.0653C27.3127 26.164 27.3952 26.2958 27.4336 26.4429C27.472 26.59 27.4644 26.7454 27.4117 26.888C27.3591 27.0306 27.264 27.1537 27.1392 27.2406C27.0145 27.3275 26.8661 27.374 26.714 27.374Z'
      fill='#82B732'
    />
    <path
      d='M38.2807 7.0566C38.3709 7.094 38.4529 7.1487 38.5219 7.2178C38.5909 7.2868 38.6457 7.3687 38.683 7.4589C38.7204 7.5491 38.7396 7.6457 38.7396 7.7434C38.7396 7.84101 38.7204 7.93761 38.683 8.02781C38.6457 8.11801 38.5909 8.19991 38.5219 8.26891L37.921 8.86981L38.5219 9.47072C38.5909 9.53972 38.6457 9.62172 38.683 9.71182C38.7204 9.80202 38.7396 9.89872 38.7396 9.99632C38.7396 10.0939 38.7204 10.1906 38.683 10.2807C38.6457 10.3709 38.5909 10.4529 38.5219 10.5219C38.3767 10.667 38.1865 10.7396 37.9963 10.7396C37.806 10.7396 37.6158 10.667 37.4707 10.5219L36.8698 9.92102L36.2689 10.5219C36.2 10.591 36.1181 10.6458 36.0279 10.6831C35.9377 10.7205 35.841 10.7397 35.7434 10.7396C35.6457 10.7397 35.549 10.7206 35.4588 10.6832C35.3686 10.6458 35.2867 10.591 35.2178 10.5219C35.1487 10.4529 35.094 10.3709 35.0566 10.2807C35.0192 10.1906 35 10.0939 35 9.99632C35 9.89872 35.0192 9.80202 35.0566 9.71182C35.094 9.62172 35.1487 9.53972 35.2178 9.47072L35.8186 8.86981L35.2178 8.26891C35.0815 8.12891 35.0058 7.94081 35.0072 7.7455C35.0085 7.5501 35.0867 7.363 35.2249 7.2249C35.363 7.0867 35.55 7.0085 35.7454 7.0072C35.9408 7.0058 36.1289 7.0815 36.2689 7.2178L36.8698 7.8187L37.4707 7.2178C37.5397 7.1487 37.6216 7.094 37.7118 7.0566C37.802 7.0192 37.8987 7 37.9963 7C38.0939 7 38.1906 7.0192 38.2807 7.0566Z'
      fill='#64B9FC'
    />
    <path
      d='M22.2807 20.0566C22.3709 20.094 22.4529 20.1487 22.5219 20.2178C22.5909 20.2868 22.6457 20.3687 22.683 20.4589C22.7204 20.5491 22.7396 20.6457 22.7396 20.7434C22.7396 20.841 22.7204 20.9376 22.683 21.0278C22.6457 21.118 22.5909 21.1999 22.5219 21.2689L21.921 21.8698L22.5219 22.4707C22.5909 22.5397 22.6457 22.6217 22.683 22.7118C22.7204 22.802 22.7396 22.8987 22.7396 22.9963C22.7396 23.0939 22.7204 23.1906 22.683 23.2807C22.6457 23.3709 22.5909 23.4529 22.5219 23.5219C22.3767 23.667 22.1865 23.7396 21.9963 23.7396C21.806 23.7396 21.6158 23.667 21.4707 23.5219L20.8698 22.921L20.2689 23.5219C20.2 23.591 20.1181 23.6458 20.0279 23.6831C19.9377 23.7205 19.841 23.7397 19.7434 23.7396C19.6457 23.7397 19.549 23.7206 19.4588 23.6832C19.3686 23.6458 19.2867 23.591 19.2178 23.5219C19.1487 23.4529 19.094 23.3709 19.0566 23.2807C19.0192 23.1906 19 23.0939 19 22.9963C19 22.8987 19.0192 22.802 19.0566 22.7118C19.094 22.6217 19.1487 22.5397 19.2178 22.4707L19.8186 21.8698L19.2178 21.2689C19.0815 21.1289 19.0058 20.9408 19.0072 20.7455C19.0085 20.5501 19.0867 20.363 19.2249 20.2249C19.363 20.0867 19.55 20.0085 19.7454 20.0072C19.9408 20.0058 20.1289 20.0815 20.2689 20.2178L20.8698 20.8187L21.4707 20.2178C21.5397 20.1487 21.6216 20.094 21.7118 20.0566C21.802 20.0192 21.8987 20 21.9963 20C22.0939 20 22.1906 20.0192 22.2807 20.0566Z'
      fill='#82B732'
    />
    <path
      d='M30.4807 20.0566C30.5709 20.094 30.6529 20.1487 30.7219 20.2178C30.7909 20.2868 30.8457 20.3687 30.883 20.4589C30.9204 20.5491 30.9396 20.6457 30.9396 20.7434C30.9396 20.841 30.9204 20.9376 30.883 21.0278C30.8457 21.118 30.7909 21.1999 30.7219 21.2689L30.121 21.8698L30.7219 22.4707C30.7909 22.5397 30.8457 22.6217 30.883 22.7118C30.9204 22.802 30.9396 22.8987 30.9396 22.9963C30.9396 23.0939 30.9204 23.1906 30.883 23.2807C30.8457 23.3709 30.7909 23.4529 30.7219 23.5219C30.5768 23.667 30.3865 23.7396 30.1963 23.7396C30.0061 23.7396 29.8158 23.667 29.6707 23.5219L29.0698 22.921L28.4689 23.5219C28.4 23.591 28.3181 23.6458 28.2279 23.6831C28.1377 23.7205 28.041 23.7397 27.9434 23.7396C27.8457 23.7397 27.749 23.7206 27.6588 23.6832C27.5686 23.6458 27.4867 23.591 27.4178 23.5219C27.3487 23.4529 27.294 23.3709 27.2566 23.2807C27.2192 23.1906 27.2 23.0939 27.2 22.9963C27.2 22.8987 27.2192 22.802 27.2566 22.7118C27.294 22.6217 27.3487 22.5397 27.4178 22.4707L28.0187 21.8698L27.4178 21.2689C27.2815 21.1289 27.2058 20.9408 27.2072 20.7455C27.2085 20.5501 27.2867 20.363 27.4249 20.2249C27.563 20.0867 27.7501 20.0085 27.9455 20.0072C28.1409 20.0058 28.3289 20.0815 28.4689 20.2178L29.0698 20.8187L29.6707 20.2178C29.7397 20.1487 29.8217 20.094 29.9118 20.0566C30.002 20.0192 30.0987 20 30.1963 20C30.2939 20 30.3906 20.0192 30.4807 20.0566Z'
      fill='#82B732'
    />
    <path
      d='M21.2807 0.0565996C21.3709 0.0939996 21.4529 0.148699 21.5219 0.217799C21.5909 0.286799 21.6457 0.368699 21.683 0.458899C21.7204 0.549099 21.7396 0.6457 21.7396 0.7434C21.7396 0.841 21.7204 0.9376 21.683 1.0278C21.6457 1.118 21.5909 1.1999 21.5219 1.2689L20.921 1.8698L21.5219 2.4707C21.5909 2.5397 21.6457 2.6217 21.683 2.7118C21.7204 2.802 21.7396 2.8987 21.7396 2.9963C21.7396 3.0939 21.7204 3.1906 21.683 3.2807C21.6457 3.3709 21.5909 3.4529 21.5219 3.5219C21.3767 3.667 21.1865 3.7396 20.9963 3.7396C20.806 3.7396 20.6158 3.667 20.4707 3.5219L19.8698 2.921L19.2689 3.5219C19.2 3.591 19.1181 3.6458 19.0279 3.6831C18.9377 3.7205 18.841 3.7397 18.7434 3.7396C18.6457 3.7397 18.549 3.7206 18.4588 3.6832C18.3686 3.6458 18.2867 3.591 18.2178 3.5219C18.1487 3.4529 18.094 3.3709 18.0566 3.2807C18.0192 3.1906 18 3.0939 18 2.9963C18 2.8987 18.0192 2.802 18.0566 2.7118C18.094 2.6217 18.1487 2.5397 18.2178 2.4707L18.8186 1.8698L18.2178 1.2689C18.0815 1.1289 18.0058 0.9408 18.0072 0.7455C18.0085 0.5501 18.0867 0.362999 18.2249 0.224899C18.363 0.0866993 18.55 0.00849929 18.7454 0.00719929C18.9408 0.00579929 19.1289 0.0814992 19.2689 0.217799L19.8698 0.8187L20.4707 0.217799C20.5397 0.148699 20.6216 0.0939996 20.7118 0.0565996C20.802 0.0191996 20.8987 0 20.9963 0C21.0939 0 21.1906 0.0191996 21.2807 0.0565996Z'
      fill='#64B9FC'
    />
    <path
      d='M8.54111 10.3469C8.63129 10.3843 8.71323 10.439 8.78224 10.5081C8.85128 10.5771 8.90604 10.659 8.94341 10.7492C8.98077 10.8394 9 10.936 9 11.0337C9 11.1313 8.98077 11.2279 8.94341 11.3181C8.90604 11.4083 8.85128 11.4902 8.78224 11.5592L8.18136 12.1601L8.78224 12.761C8.85128 12.83 8.90604 12.912 8.94341 13.0021C8.98077 13.0923 9 13.189 9 13.2866C9 13.3842 8.98077 13.4809 8.94341 13.571C8.90604 13.6612 8.85128 13.7432 8.78224 13.8122C8.63712 13.9573 8.44689 14.0299 8.25666 14.0299C8.06642 14.0299 7.87619 13.9573 7.73107 13.8122L7.13019 13.2113L6.52931 13.8122C6.46036 13.8813 6.37843 13.9361 6.28823 13.9734C6.19804 14.0108 6.10135 14.03 6.00373 14.0299C5.9061 14.03 5.8094 14.0109 5.7192 13.9735C5.629 13.9361 5.54707 13.8813 5.47814 13.8122C5.4091 13.7432 5.35434 13.6612 5.31698 13.571C5.27961 13.4809 5.26038 13.3842 5.26038 13.2866C5.26038 13.189 5.27961 13.0923 5.31698 13.0021C5.35434 12.912 5.4091 12.83 5.47814 12.761L6.07902 12.1601L5.47814 11.5592C5.34186 11.4192 5.2662 11.2311 5.26753 11.0358C5.26885 10.8404 5.34706 10.6533 5.48523 10.5152C5.6234 10.377 5.81042 10.2988 6.00582 10.2975C6.20122 10.2961 6.38928 10.3718 6.52931 10.5081L7.13019 11.109L7.73107 10.5081C7.80008 10.439 7.88202 10.3843 7.9722 10.3469C8.06238 10.3095 8.15904 10.2903 8.25666 10.2903C8.35427 10.2903 8.45093 10.3095 8.54111 10.3469Z'
      fill='#64B9FC'
    />
    <path
      d='M24.9614 10.7035H24.9591C24.762 10.7029 24.5732 10.624 24.4342 10.4842C24.2952 10.3444 24.2175 10.1551 24.218 9.958L24.2246 7.74453C24.2251 7.54778 24.3037 7.35928 24.443 7.22035C24.5823 7.08143 24.7711 7.00342 24.9678 7.00342H24.9701C25.1672 7.00401 25.356 7.08289 25.495 7.2227C25.634 7.3625 25.7118 7.55179 25.7112 7.74893L25.7046 9.96239C25.7041 10.1592 25.6255 10.3477 25.4862 10.4866C25.3469 10.6255 25.1581 10.7035 24.9614 10.7035ZM21.6611 11.647C21.5325 11.6471 21.4061 11.6139 21.2942 11.5506C21.1823 11.4872 21.0887 11.3959 21.0227 11.2855L19.8726 9.36542C19.7741 9.19642 19.7462 8.99542 19.7949 8.80597C19.8436 8.61653 19.965 8.45392 20.1328 8.3534C20.3006 8.25288 20.5013 8.22254 20.6913 8.26898C20.8813 8.31541 21.0454 8.43487 21.1479 8.60146L22.298 10.5216C22.3656 10.6343 22.402 10.763 22.4036 10.8944C22.4053 11.0258 22.372 11.1554 22.3073 11.2697C22.2425 11.3841 22.1486 11.4793 22.0351 11.5456C21.9216 11.6119 21.7925 11.6468 21.6611 11.647ZM28.2558 11.6772C28.124 11.6771 27.9946 11.6419 27.8809 11.5753C27.7671 11.5087 27.6732 11.413 27.6086 11.2981C27.544 11.1832 27.5111 11.0532 27.5133 10.9214C27.5155 10.7896 27.5528 10.6608 27.6212 10.5481L28.7827 8.63437C28.8862 8.46855 29.051 8.35021 29.2412 8.30498C29.4314 8.25975 29.6317 8.29127 29.7989 8.39272C29.966 8.49417 30.0864 8.65737 30.1341 8.84698C30.1817 9.03659 30.1528 9.23734 30.0535 9.40575L28.892 11.3195C28.8257 11.4289 28.7323 11.5192 28.6208 11.5819C28.5094 11.6445 28.3837 11.6774 28.2558 11.6772Z'
      fill='#BCEA73'
    />
    <path
      d='M10.3433 7.88054C10.3433 6.41658 11.53 5.22986 12.9939 5.22986C14.4579 5.22986 15.6445 6.41658 15.6445 7.88054C15.6445 9.34451 14.4578 10.5312 12.9938 10.5312C11.5299 10.5312 10.3433 9.34451 10.3433 7.88054Z'
      fill='#BCEA73'
    />
    <path
      d='M11.6495 10.1647C12.69 9.92488 13.4652 8.99344 13.4652 7.88025C13.4652 6.76824 12.6912 5.83553 11.6506 5.59568C12.0575 5.35535 12.5215 5.22898 12.994 5.22986C14.4573 5.22986 15.6443 6.41697 15.6443 7.88025C15.6443 9.34471 14.4572 10.5318 12.994 10.5318C12.5209 10.5328 12.0564 10.406 11.6495 10.1647Z'
      fill='#99D53B'
    />
    <path
      d='M31.7849 5.896C32.9477 5.896 33.8904 4.95335 33.8904 3.79053C33.8904 2.62771 32.9477 1.68506 31.7849 1.68506C30.6221 1.68506 29.6794 2.62771 29.6794 3.79053C29.6794 4.95335 30.6221 5.896 31.7849 5.896Z'
      fill='#A8E7EF'
    />
    <path
      d='M33.8902 3.7903C33.8902 4.95358 32.9473 5.89645 31.785 5.89645C31.4093 5.89725 31.0403 5.79653 30.717 5.60495C31.5435 5.41442 32.1593 4.67458 32.1593 3.7903C32.1593 2.907 31.5445 2.16618 30.718 1.97565C31.0412 1.78478 31.4097 1.68442 31.785 1.68512C32.9473 1.68503 33.8902 2.62799 33.8902 3.7903Z'
      fill='#70D9E6'
    />
    <path
      d='M46.1055 16.2109C47.2683 16.2109 48.2109 15.2683 48.2109 14.1055C48.2109 12.9427 47.2683 12 46.1055 12C44.9427 12 44 12.9427 44 14.1055C44 15.2683 44.9427 16.2109 46.1055 16.2109Z'
      fill='#EFD7A8'
    />
    <path
      d='M48.2107 14.1052C48.2107 15.2685 47.2679 16.2114 46.1056 16.2114C45.7298 16.2122 45.3608 16.1115 45.0376 15.9199C45.8641 15.7294 46.4799 14.9895 46.4799 14.1052C46.4799 13.2219 45.865 12.4811 45.0386 12.2906C45.3617 12.0997 45.7303 11.9994 46.1056 12.0001C47.2679 12 48.2107 12.9429 48.2107 14.1052Z'
      fill='#E6B770'
    />
    <path
      d='M20.2209 45.3421C21.3866 45.7392 21.6756 46.6333 21.5688 47.2782C21.4209 48.171 20.6017 48.8189 19.6208 48.8191C18.8229 48.8191 18.0735 48.4972 17.5649 47.9361C17.4514 47.8109 17.3924 47.6457 17.4007 47.4769C17.409 47.3082 17.484 47.1496 17.6091 47.0361C17.7344 46.9227 17.8995 46.8636 18.0683 46.8719C18.2371 46.8802 18.3957 46.9552 18.5092 47.0804C18.7728 47.3713 19.1883 47.5448 19.6209 47.5448C20.0185 47.5448 20.2736 47.3002 20.3117 47.0701C20.3596 46.7811 20.018 46.6192 19.8102 46.5484L19.7423 46.5253C19.0531 46.2906 18.7072 46.1728 18.3517 45.9469C17.8495 45.6277 17.5888 45.057 17.6714 44.4575C17.7596 43.8166 18.2216 43.2958 18.8773 43.0983C20.1543 42.7136 21.2041 43.5795 21.2482 43.6164C21.3776 43.7252 21.4584 43.8808 21.473 44.0492C21.4876 44.2175 21.4347 44.3848 21.326 44.5141C21.2178 44.6428 21.0631 44.7236 20.8957 44.7387C20.7282 44.7539 20.5615 44.7022 20.432 44.595C20.4141 44.5807 19.8484 44.1366 19.2448 44.3184C18.9924 44.3944 18.9432 44.5625 18.9338 44.6312C18.927 44.6798 18.9236 44.8005 19.035 44.8714C19.2618 45.0154 19.5407 45.1105 20.1513 45.3185L20.153 45.319L20.2209 45.3421Z'
      fill='white'
    />
    <path
      d='M23.957 48.6827C23.8258 48.5894 23.727 48.4575 23.6742 48.3055L22.1272 43.8534C22.0986 43.7741 22.086 43.6899 22.0901 43.6057C22.0943 43.5215 22.1151 43.439 22.1514 43.3629C22.1877 43.2868 22.2387 43.2186 22.3016 43.1624C22.3644 43.1062 22.4377 43.063 22.5174 43.0353C22.597 43.0076 22.6813 42.996 22.7655 43.0012C22.8496 43.0064 22.9319 43.0282 23.0076 43.0654C23.0832 43.1026 23.1508 43.1544 23.2062 43.2179C23.2617 43.2814 23.304 43.3552 23.3308 43.4352L24.3951 46.4982L25.4088 43.4437C25.4352 43.3643 25.4769 43.2908 25.5316 43.2275C25.5863 43.1642 25.653 43.1123 25.7278 43.0748C25.8026 43.0373 25.884 43.0149 25.9675 43.0089C26.0509 43.0028 26.1347 43.0133 26.2142 43.0397C26.2936 43.066 26.367 43.1077 26.4303 43.1624C26.4936 43.2172 26.5455 43.2838 26.583 43.3586C26.6205 43.4334 26.6429 43.5148 26.649 43.5983C26.655 43.6818 26.6445 43.7656 26.6182 43.845L25.1411 48.2957C25.0901 48.4503 24.9915 48.5848 24.8595 48.68C24.7275 48.7753 24.5688 48.8265 24.4061 48.8263C24.2451 48.8263 24.0881 48.7761 23.957 48.6827Z'
      fill='white'
    />
    <path
      d='M32.4724 45.459C32.5919 45.5785 32.659 45.7406 32.659 45.9096C32.659 47.6227 31.5903 48.8191 30.0602 48.8191C28.4559 48.8191 27.1506 47.5139 27.1506 45.9096C27.1506 44.3053 28.4558 43 30.0602 43C30.6402 42.9991 31.2071 43.1723 31.6874 43.4973C31.7568 43.5441 31.8162 43.6042 31.8623 43.674C31.9084 43.7438 31.9404 43.822 31.9563 43.9041C31.9722 43.9863 31.9717 44.0707 31.955 44.1527C31.9383 44.2347 31.9055 44.3126 31.8587 44.3819C31.8118 44.4512 31.7518 44.5107 31.682 44.5568C31.6122 44.6029 31.534 44.6349 31.4519 44.6508C31.3697 44.6667 31.2852 44.6662 31.2033 44.6495C31.1213 44.6327 31.0434 44.6 30.9741 44.5532C30.7043 44.3708 30.3859 44.2736 30.0602 44.2743C29.1585 44.2743 28.4249 45.0078 28.4249 45.9096C28.4249 46.8112 29.1584 47.5449 30.0602 47.5449C30.7719 47.5449 31.1498 47.0961 31.3024 46.5467H30.6623C30.4933 46.5467 30.3313 46.4796 30.2118 46.3601C30.0923 46.2406 30.0252 46.0785 30.0252 45.9096C30.0252 45.7406 30.0923 45.5785 30.2118 45.459C30.3313 45.3396 30.4933 45.2724 30.6623 45.2724H32.0219C32.1908 45.2724 32.3529 45.3396 32.4724 45.459Z'
      fill='white'
    />
  </svg>
)

export const IconFragmentCode: FC<IconProps> = ({ color = 'currentColor', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 256 256'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M64 88L16 128L64 168M192 88L240 128L192 168M160 40L96 216'
      stroke={color}
      strokeWidth='16'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const FolderIcon: FC<IconProps> = ({ color = 'currentColor', size = 24 }) => (
  <svg
    stroke={color}
    fill={color}
    strokeWidth='0'
    viewBox='0 0 16 16'
    height={size}
    width={size}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z'></path>
  </svg>
)

export const FolderOpenIcon: FC<IconProps> = ({ color = 'currentColor', size = 24 }) => (
  <svg
    stroke={color}
    fill={color}
    strokeWidth='0'
    viewBox='0 0 16 16'
    height={size}
    width={size}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z'></path>
  </svg>
)

export const IconPencilSquare: FC<IconProps> = ({ color = 'currentColor', size = 24 }) => (
  <svg
    stroke={color}
    fill='none'
    strokeWidth='1.5'
    viewBox='0 0 24 24'
    height={size}
    width={size}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
    ></path>
  </svg>
)
