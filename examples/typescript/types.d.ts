export interface IconComponentProps {
  /**
   * The size of the icon in pixels
   * @default 24
   */
  size?: number | string
  /**
   * The color of the icon
   * @default 'currentColor'
   */
  color?: string
  className?: string
  sx?: React.CSSProperties
}

export interface IconAnimatedComponentProps extends IconComponentProps {
  /**
   * The color of the icon
   * @default '#265BFF'
   */
  secondaryColor?: string
  /**
   * The speed of the animation
   */
  speed?: number
}
