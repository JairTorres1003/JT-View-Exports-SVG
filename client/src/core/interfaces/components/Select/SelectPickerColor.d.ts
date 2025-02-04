import { SxProps, type IconButtonProps } from '@mui/material'
import { PopperProps } from '@mui/material/Popper/BasePopper.types'

interface SelectPickerColorCommonProps {
  /**
   * The size of the color picker.
   * @default 20
   */
  size?: number
  /**
   * The shape of the icon button.
   * @default 'square'
   */
  shape?: 'circle' | 'square'
  /**
   * The style of the icon button.
   */
  style?: Partial<React.CSSProperties>
  /**
   * The sx prop of the icon button.
   */
  sx?: SxProps
}

export interface SelectPickerColorProps extends SelectPickerColorCommonProps {
  color?: string
  onChange?: (color: string) => void
  /**
   * The title of the icon button.
   * @default 'Select color'
   */
  title?: string
  slotProps?: {
    popper?: Partial<Omit<PopperProps, 'children' | 'id' | 'open' | 'anchorEl' | 'transition'>>
  }
}

export interface IconButtonPickerProps
  extends Omit<IconButtonProps, 'size'>,
    SelectPickerColorCommonProps {
  /**
   * The background color of the icon button.
   */
  bgColor?: string
}
