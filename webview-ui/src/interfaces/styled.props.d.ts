import {
  type BoxProps,
  type PaperProps,
  type SwitchProps,
  type TypographyProps,
} from '@mui/material'

/**
 * Props for the `BoxViewerSvg` component.
 */
interface BoxViewerSvgProps extends PaperProps {
  /**
   * The mode of the component.
   * `true` represents dark mode, `false` represents light mode.
   */
  mode?: boolean
}

/**
 * Props for the `SwitchDarkMode` component.
 */
interface SwitchDarkModeProps extends BoxProps {
  /**
   * The checked state of the switch.
   */
  checked?: SwitchProps['checked']
  /**
   * Additional properties for child slots.
   */
  slotsProps?: {
    /**
     * Props for the switch element.
     */
    switch?: SwitchProps
    /**
     * Props for the typography element.
     */
    typography?: TypographyProps
  }
}
